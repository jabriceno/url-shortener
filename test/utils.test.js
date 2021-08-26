const utils = require('../utils/utils');

test('invalid url', () => {
    expect(utils.validateUrl('www.loquesea.com')).toBeFalsy();
});

test('valid url', () => {
    expect(utils.validateUrl('http://www.stackoverflow.com')).toBeTruthy();
})