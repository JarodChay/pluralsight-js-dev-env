import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs'; // Comes along with node. "File System".

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    // When calling jsdom, there's an asynchronous call that happens. Therefore, we need to pass in 'done' when we call 'it'.
    it('should say hello', (done) => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function(err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Hello World!");
            done(); // Tell Mocha that the test is done. Then it will run the expect.
            window.close();
        });
    });
});
