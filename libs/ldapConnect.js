const config = require("../config");
const ldap = require('ldapjs');
const { filterUsernameSysmUsersService, createSysmUsersService, updateSysmUsersService, findCodeLdapSysmUsersService } = require('../service/sysm_users');
const { encryptPassword, EncryptCryptoJS } = require("../util");
const { createDatProfileUsersService, updateDatProfileUsersService } = require("../service/ptt_profile_users");
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

exports.ldap = async ({ user_name, password }) => {
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
            // logging: {
            //     name: 'ActiveDirectory',
            //     streams: [
            //         {
            //             level: 'error',
            //             stream: process.stdout
            //         }
            //     ]
            // }
        }

        const ad = new ActiveDirectory();
        ad.findUser(username, (err, user) => {
            if (err) {
                const _err = { message: 'เชื่อมต่อผิดพลาด' }
                resolve(_err);
            }
            if (!user) {
                const _err = { message: "ไม่พบชื่อผู้ใช้ AD" }
                _err.statusCode = 404
                reject(_err);
            }
            resolve(user);
        });
    })

    return await myPromise
}