'use strict';

const fs = require('fs');

const editor = require('../edit-file-async.js');

jest.mock('fs');

describe('tests logs handler', () => {

    it('Test Callback', (done) => {
        let testData = 'hello world';
        let fileHandler = (err, data) => {
            expect(err).toBe(null);
            done();
        }
        editor('../person.json', fileHandler);
    })

    it('Testing a bad path', (done) => {
        let fileHandler = (err, data) => {
            expect(err).toBe('Invalid File');
            done();
        }
        editor('../bad_person.json', fileHandler);
    })
});