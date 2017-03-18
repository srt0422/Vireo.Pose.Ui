"use strict";
var fs = require("fs");
var path = require("path");
var process = require("process");
var jsxPath = path.join(__dirname, process.argv[2]);
transformJsxFiles(jsxPath);
function transformJsxFiles(pathName) {
    var pathNameObject = path.parse(pathName);
    var files = fs.readdirSync(pathName);
    files.forEach(function (name) {
        var pathObject = path.parse(name);
        if (pathObject.ext === ".jsx") {
            fs.renameSync(path.join(pathName, name), path.join(pathName, pathObject.name + ".js"));
        }
        else if (pathObject.ext === ".map") {
        }
        else if (pathObject.ext === "" && name.indexOf(".") !== 0) {
            transformJsxFiles(path.join(pathName, name));
        }
    });
}
exports.transformJsxFiles = transformJsxFiles;
;
//# sourceMappingURL=transformJsxFiles.js.map