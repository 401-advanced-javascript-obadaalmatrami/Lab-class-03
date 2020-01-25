'use strict';

const fs = require('fs');

class FileManagerPr {

    getFilePr(filePath) {
        return fs.readJSON(filePath);
    }

    editFilePr(filePath, edit) {
        return fs.writeJSON(filePath, edit);
    }

}

module.exports = FileManagerPr;