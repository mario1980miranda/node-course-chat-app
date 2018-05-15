var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Mario';
        var text = 'Mocha Test';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        // expect(message.from).toBe('Mario');
        // expect(message.text).toBe('Mocha Test');
        expect(message).toInclude({from, text}); // ES6
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct message location object', () => {
        var from = 'Admin';
        var latitude = 1;
        var longitude = 2;
        var locationMessage = generateLocationMessage(from, latitude, longitude);
        var url = 'https://www.google.com/maps?q=1,2';

        expect(locationMessage.createdAt).toBeA('number');
        expect(locationMessage).toInclude({from, url});
    });
});