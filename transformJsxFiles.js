"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformJsxFiles = transformJsxFiles;

var _fs = require("fs");

var fs = _interopRequireWildcard(_fs);

var _path = require("path");

var path = _interopRequireWildcard(_path);

var _process = require("process");

var process = _interopRequireWildcard(_process);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

require("babel-polyfill");

transformJsxFiles(process.argv.slice(2, process.argv.length));
function transformJsxFiles(pathNames) {
    for (var i = 0; i < pathNames.length; i++) {
        var jsxPath = path.join(__dirname, pathNames[i]);
        transformJsxFilesInDirectory(jsxPath);
    }
}
function transformJsxFilesInDirectory(pathName) {
    var pathNameObject = path.parse(pathName);
    var files = fs.readdirSync(pathName);
    files.forEach(function (name) {
        var pathObject = path.parse(name);
        if (pathObject.ext === ".jsx") {
            fs.renameSync(path.join(pathName, name), path.join(pathName, pathObject.name + ".js"));
        } else if (pathObject.ext === "" && name.indexOf(".") !== 0) {
            transformJsxFilesInDirectory(path.join(pathName, name));
        }
    });
}
;
