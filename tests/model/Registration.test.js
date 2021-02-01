const Registration = require('../../src/model/Registration');

// Tests for validateForm function.
test('checks if the first name and last name are valid.', ()=>{
    expect(Registration.validateForm('Mo@yad', 'Moayad', '$$$', '$$$')[0].message)
    .toBe('Please Enter a valid first name.');
})

test('checks if the email adress is not valid.', ()=>{
    expect(Registration.validateForm('Moayad', 'Moayad', '$$$', '$$$')[0].message)
    .toBe('Please Enter a valid email adress.');
})

test('checks if the email adress and the date of birth is valid.', ()=>{
    expect(Registration.validateForm('Moayad', 'Moayad', 'user17@gmail.com', '20000101').length)
    .toBe(0);
})

test('checks if the date of birth is not valid.', ()=>{
    expect(Registration.validateForm('Moayad', 'Moayad', 'user17@gmail.com', '###')[0].message)
    .toBe('The date of birth should match this format yyyymmdd');
})