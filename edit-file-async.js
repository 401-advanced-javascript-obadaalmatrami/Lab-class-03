'use strict';

const fs = require('fs');
const faker = require('faker');
const util = require('util');

const writeFilePromise = util.promisify(fs.writeFile);
const readFilePromise = util.promisify(fs.readFile);

let randName = faker.name.findName();

async function Edit(path, showFile) {
    const data = await readFilePromise(path);

    const myObj = JSON.parse(data);
    myObj.firstName = randName;


    await writeFilePromise(path, JSON.stringify(myObj))


    const datab = await readFilePromise(path);
    showFile(null, JSON.parse(datab));
}


module.exports = (path, showFile) => {
    Edit(path, showFile).catch(err => showFile(err));
}