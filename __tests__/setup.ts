import jsdom from 'jsdom';

import ExecutionEnvironment from 'exenv';

declare var global;
if (!global.document || !global.window) {
    global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
    global.window = document.defaultView;
    global.navigator = window.navigator;

    ExecutionEnvironment.canUseDOM = true;

    window.addEventListener('load', () => {
        console.log('JSDom setup completed: document, window and navigator are now on global scope.');
    });
}