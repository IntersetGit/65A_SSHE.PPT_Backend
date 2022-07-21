const path = require("path");
const uuidv4 = require("uuid");
const fs = require("fs");
const result = require("../middleware/result");
const config = require("../config");

/* อัพโหลด */
exports.uploads = async (req, res, next) => {
  try {
    const fileupload = req.files;
    const { group, Path = "all", Length = 1, Name, SetType  } = req.query;
    const projectPath = path.resolve("./");
    const uploadPath = `${projectPath}/public/uploads/${group}/${Path}`;

    const File = [];

    // for (let x = 0; x < Number(Length); x++) {
    //   File.push(fileupload[`file${x}`]);
    // }

    for (let x = 0; x < Number(Length); x++) {
      File.push(fileupload.files);
    }

    //เช็ค path ว่ามีไหม ถ้าไม่มีจะสร้างขึ้นมา
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath,{recursive: true});
    }

    const UploadFile = [];

    let e;
    for (let i = 0; i < File.length; i++) {
      e = File[i];

      let type = SetType
        ? `.${SetType}`
        : `.${e.name.substring(e.name.lastIndexOf(".") + 1).toLowerCase()}`;
      let name = Name ? Name + type : uuidv4.v4() + type;

      let model = {
        location: `${config.SERVICE_HOST}/uploads/${group}/${Path}/${name}`,
        path: `/uploads/${group}/${Path}/${name}`,
        nameNew: name,
        type: type,
      };

      UploadFile.push(model);

      e.mv(uploadPath + '/' + name, (err) => {
        if (err) {
          const error = new Error(err);
          error.statusCode = 402;
          throw error;
        }
      });
    }

    result(res, req , 'upload', UploadFile);
  } catch (error) {
    next(error);
  }
};