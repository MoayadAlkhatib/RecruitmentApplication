const Registration = require('../../src/model/Registration');

// Tests for isAName function.
test('checks if the field entered is a name.', ()=>{
    expect(Registration.isAName('Moayad')).toBe(true);
})

test('checks if the field entered is not a name.', ()=>{
    expect(Registration.isAName('M&M')).toBe(false);
})