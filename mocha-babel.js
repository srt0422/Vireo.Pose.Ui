﻿require('babel-core/register')({
    presets: ["es2015", "react", "stage-0"],
    plugins: ['transform-runtime', 'transform-async-to-generator']
});