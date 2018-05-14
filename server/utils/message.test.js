var expect = require('expect');

var {generateMessage} = require('./message');

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