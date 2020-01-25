'use strict';

const editor = require('./edit-file.js');
const editorprom = require('./edit-file-pro.js');
const async = require('./edit-file-aysnc.js');
const process = require('process');


let path = process.argv[2];

const showFile = (error, data) => {
    if (error) {
        throw error
    } else {
        Console.log(data);
    }

};

editor(path, showFile);