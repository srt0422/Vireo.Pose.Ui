require("babel-polyfill");

declare var __dirname;

import * as fs from 'fs';
import * as path from "path";
import * as process from "process";

transformJsxFiles(process.argv.slice(2, process.argv.length));

export function transformJsxFiles(pathNames) {

    for (let i = 0; i < pathNames.length; i++) {

        let jsxPath = path.join(__dirname, pathNames[i]);

        transformJsxFilesInDirectory(jsxPath);
    }
}

function transformJsxFilesInDirectory(pathName) {

    let pathNameObject = path.parse(pathName);

    let files = fs.readdirSync(pathName);

    files.forEach((name) => {

        let pathObject = path.parse(name);

        if (pathObject.ext === ".jsx") {

            fs.renameSync(path.join(pathName, name), path.join(pathName, `${pathObject.name}.js`));
        }
        else if (pathObject.ext === "" && name.indexOf(".") !== 0) {

            transformJsxFilesInDirectory(path.join(pathName, name));
        }
    });
};
