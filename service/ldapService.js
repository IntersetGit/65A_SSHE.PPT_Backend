const config = require("../config");
const ldap = require('ldapjs');
const { filterUsernameSysmUsersService, createSysmUsersService, updateSysmUsersService, findCodeLdapSysmUsersService } = require('./sysmUsersService');
const { encryptPassword, EncryptCryptoJS } = require("../util");
const { createDatProfileUsersService, updateDatProfileUsersService } = require("./datProfileUsersService");
const uuidv4 = require("uuid");
const ActiveDirectory = require('activedirectory');

const connect = {
    development: {
        host: config.LDAP_HOST_DEV,
        url: config.LDAP_URL_DEV,
        search: config.LDAP_SEARCH_DEV,
    },
    test: {
        host: config.LDAP_HOST_TEST,
        url: config.LDAP_URL_TEST,
        search: config.LDAP_SEARCH_TEST,
    },
    production: {
        host: config.LDAP_HOST_PROD,
        url: config.LDAP_URL_PROD,
        search: config.LDAP_SEARCH_PROD,
    },
}



/** 
    // --------- General
        givenName คือ First name
        initials คือ Initials
        sn คือ Last name
        displayName คือ Display Name //ไม่จำเป็น
        description คือ Description
        physicalDeliveryOfficeName คือ Office
        telephoneNumber คือ Telephone number
        mail คือ E-mail
        wWWHomePage คือ Web page

    // --------- Address
        streetAddress คือ Street
        postOfficeBox คือ P.O. Box //ไม่จำเป็น
        l คือ City //ไม่จำเป็น
        st คือ State/province //ไม่จำเป็น
        postalCode คือ Zip/Postal Code //ไม่จำเป็น
        co คือ Country.region //ไม่จำเป็น

    // --------- Orgarization
        title คือ Job Title
        department คือ Department
        company คือ Company
*/

exports.ldap = async ({ user_name, password }) => {
    // const _res = await ConnectLdap({ username: user_name, password })
    const _res = await this.connectPttAD({ username: user_name, password });
    const _user = await filterUsernameSysmUsersService(user_name);
    // console.log('_res :>> ', _res);
    if (_res.message == "เชื่อมต่อผิดพลาด") {
        return _user
    }

    if (_user) {
        await updateSysmUsersService({
            id: _user.id,
            user_name,
            password: await EncryptCryptoJS(password),
            e_mail: _res.mail,
            update_by: _user.id,
        })

        await updateDatProfileUsersService({
            user_id: _user.id,
            first_name: _res.givenName,
            last_name: _res.sn,
            initials: _res.initials,
            e_mail: _res.mail,
            update_by: _user.id,
        })

    } else {
        const err = new Error(`ไม่มีผู้ใช้ ${user_name} ในฐานข้อมูล`)
        err.statusCode = 404
        throw err;
    }
    return await filterUsernameSysmUsersService(user_name)

    /**------------- pond ------------------------ */
    //fd1afdfd-04fd-48fd-fdfd-fd27065dfdfd = k.karun
    //63216afd-fd56-47fd-fd1f-fdfd544ffdfd = pondkarun2
    // const code_ldap = formatGUID(_res.objectGUID)
    // const user = await filterUsernameSysmUsersService(user_name)
    // const _user = await findCodeLdapSysmUsersService(code_ldap)
    // if (!user && !_user) {
    //     const id = uuidv4.v4()
    //     await createSysmUsersService({
    //         id,
    //         roles_id: "0678bba5-a371-417f-9734-aec46b9579ad", //Viewer
    //         user_name,
    //         password: await encryptPassword(password),
    //         e_mail: _res.mail,
    //         note: _res.displayName,
    //         created_by: id,
    //         code_ldap
    //     }, transaction)

    //     await createDatProfileUsersService({
    //         id,
    //         user_id: id,
    //         first_name: _res.givenName,
    //         last_name: _res.sn,
    //         initials: _res.initials,
    //         e_mail: _res.mail,
    //         company: _res.company,
    //         department: _res.department,
    //         job_title: _res.title,
    //         office: _res.physicalDeliveryOfficeName,
    //         web_page: _res.wWWHomePage,
    //         phone: _res.telephoneNumber,
    //         address: _res.streetAddress,
    //         description: _res.description,
    //         created_by: id,
    //     }, transaction)
    // } else {
    //     const _data = user ? user : _user ? _user : null
    //     await updateSysmUsersService({
    //         id: _data.id,
    //         user_name,
    //         password: await encryptPassword(password),
    //         e_mail: _res.mail,
    //         update_by: _data.id,
    //     }, transaction)

    //     await updateDatProfileUsersService({
    //         id: _data.id,
    //         user_id: _data.id,
    //         first_name: _res.givenName,
    //         last_name: _res.sn,
    //         initials: _res.initials,
    //         e_mail: _res.mail,
    //         company: _res.company,
    //         department: _res.department,
    //         job_title: _res.title,
    //         office: _res.physicalDeliveryOfficeName,
    //         web_page: _res.wWWHomePage,
    //         phone: _res.telephoneNumber,
    //         address: _res.streetAddress,
    //         description: _res.description,
    //         update_by: _data.id,
    //     }, transaction)
    // }
    // await transaction.commit();

}

const ConnectLdap = async ({ username, password }) => {
    const myPromise = new Promise((resolve, reject) => {

        const { host, url, search } = connect[config.NODE_ENV]

        // LDAP Connection Settings
        const userPrincipalName = `${username}@${host}`; // Username

        // Create client and bind to AD
        const client = ldap.createClient({ url });

        client.bind(userPrincipalName, password, err => {
            console.log('err :>> ', err);
            // reject(err);
        });

        client.search(search, {
            scope: "sub",
            filter: `(userPrincipalName=${userPrincipalName})`
        }, (err, res) => {

            res.on('searchEntry', (entry) => {
                console.log(entry.object.name);
                resolve(entry.object);
                return entry.object
            });
            res.on('searchReference', (referral) => {
                console.log('referral: ' + referral.uris.join());
            });
            res.on('error', (err) => {
                console.error('error: ' + err.message);
                const _err = { message: "ชื่อผู้ใช้ หรือ รหัสผ่านไม่ถูกต้อง" }
                reject(_err)
            });
            res.on('end', (result) => {
                console.log('status: ' + result.status);
                // reject(result)
                const _err = { message: "ชื่อผู้ใช้ หรือ รหัสผ่านไม่ถูกต้อง" }
                reject(_err)
            });

            // res.on('end', (result) => {
            //     // console.log("result ======================>" , result);
            //     if (user) {
            //         updateSysmUsersService({ id: user.id, isuse: 0 })
            //     }
            //     const _err = { message: "ไม่พบชื่อผู้ใช้" }
            //     reject(_err)
            //     return _err
            // });

            // res.on('error', err => {
            //     console.error('error: ' + err.message);
            //     const _err = { message: "รหัสผ่านไม่ถูกต้อง" }
            //     reject(_err)
            //     return _err
            // });

        });



    });
    return await myPromise
}

exports.connectPttAD = async ({ username, password, usernameDB, isDB }) => {
    const myPromise = new Promise((resolve, reject) => {

        const { host, url, search } = connect[config.NODE_ENV]
        const _username = isDB ? usernameDB : username
        const config_ad = {
            url,
            baseDN: `${search}`,
            username: `${_username}@${host}`,
            password,
            logging: {
                name: 'ActiveDirectory',
                streams: [
                    {
                        level: 'error',
                        stream: process.stdout
                    }
                ]
            }
        }

        const ad = new ActiveDirectory(config_ad);
        // passport.use(new ActiveDirectoryStrategy({
        //     integrated: false,
        //     ldap: ad
        // }, function (profile, ad, done) {
        //     console.log(profile);
        // }))

        ad.findUser(username, (err, user) => {
            if (err) {
                console.log("err", err);
                const _err = { message: 'เชื่อมต่อผิดพลาด' }
                resolve(_err);
            }
            if (!user) {
                console.log(user);
                const _err = { message: "ไม่พบชื่อผู้ใช้ AD" }
                _err.statusCode = 404
                reject(_err);
            }
            resolve(user);
        });
        

        // ad.authenticate('580054@ptt.corp', password, function (err, auth) {
        //     if (err) {
        //         console.log('ERROR: ' + JSON.stringify(err));
        //         return;
        //     }

        //     if (auth) {
        //         console.log(auth);
        //         console.log('Authenticated!');
        //     }
        //     else {
        //         console.log('Authentication failed!');
        //     }
        // });
    })

    return await myPromise
}

const formatGUID = (objectGUID) => {

    var data = new Buffer(objectGUID, 'binary');

    // GUID_FORMAT_D
    var template = '{3}{2}{1}{0}-{5}{4}-{7}{6}-{8}{9}-{10}{11}{12}{13}{14}{15}';

    // check each byte
    for (var i = 0; i < data.length; i++) {

        // get the current character from that byte
        var dataStr = data[i].toString(16);
        dataStr = data[i] >= 16 ? dataStr : '0' + dataStr;

        // insert that character into the template
        template = template.replace(new RegExp('\\{' + i + '\\}', 'g'), dataStr);

    }

    return template;

}