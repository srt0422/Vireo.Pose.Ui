﻿require('babel-core/register')({
    presets: ["es2015", "react", "stage-0", "node6"],
    plugins: ['transform-runtime', 'transform-async-to-generator']
});
