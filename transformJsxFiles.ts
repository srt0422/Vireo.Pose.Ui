
declare var __dirname;

import * as fs from 'fs';
import * as path from "path";
import * as process from "process";

let jsxPath = path.join(__dirname, process.argv[2]);

transformJsxFiles(jsxPath);

export function transformJsxFiles(pathName) {

    let pathNameObject = path.parse(pathName);

    let files = fs.readdirSync(pathName);

    files.forEach((name) => {

        let pathObject = path.parse(name);

        if (pathObject.ext === ".jsx") {
            fs.renameSync(path.join(pathName, name), path.join(pathName, `${pathObject.name}.js`));
        }
        else if (pathObject.ext === ".map") {
//todo: replace the ".jsx.map" inside of the js file so that it maps correctly
            //fs.renameSync(path.join(pathName, name), path.join(pathName, `${pathObject.name.replace("jsx", "js")}.map`));
        }
        else if (pathObject.ext === "" && name.indexOf(".") !== 0) {
            transformJsxFiles(path.join(pathName, name));
        }
    });
};
