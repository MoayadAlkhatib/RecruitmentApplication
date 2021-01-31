const Registration = require('../../src/model/Registration');

// Tests for validateForm function.
test('checks if the first name and last name are valid.', ()=>{
    expect(Registration.validateForm('Mo@yad', 'Moayad')[0].message)
    .toBe('Please Enter a valid first name.');
})