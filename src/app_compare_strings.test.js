const compareStrings = require('../src/app_compare_strings.js');

test('compare if strings has same size ', () => {
    expect(compareStrings('abc', 'abcd')).toBe('The strings are different');
    });