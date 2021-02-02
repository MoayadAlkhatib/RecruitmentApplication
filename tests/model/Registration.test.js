const Registration = require('../../src/model/Registration');

// Tests for validateForm function.
test('checks if the first name and last name are valid.', ()=>{
    expect(Registration.validateForm('Mo@yad', 'Moayad', '$$$', '$$$', '$$$', '$$$', '$$$')[0].message)
    .toBe('Please Enter a valid first name.');
})

test('checks if the email adress is not valid.', ()=>{
    expect(Registration.validateForm('Moayad', 'Moayad', '$$$', '$$$', '$$$', '$$$', '$$$')[0].message)
    .toBe('Please Enter a valid email adress.');
})

test('checks if everything is ok', ()=>{
    expect(Registration.validateForm('Moayad', 'Moayad', 'user17@gmail.com', '20000101', 'mooo', '667788', '667788').length)
    .toBe(0);
})

test('checks if the date of birth is not valid.', ()=>{
    expect(Registration.validateForm('Moayad', 'Moayad', 'user17@gmail.com', '###', '###', '###', '###')[0].message)
    .toBe('The date of birth should match this format yyyymmdd');
})

test('checks if password is less than 6 characters', ()=>{
    expect(Registration.validateForm('Moayad', 'Moayad', 'user17@gmail.com', '20000101', 'mooo', '8876', '###')[0].message)
    .toBe('The password must be at least 6 characters.');
})

test('checks if password is greater than 30 characters', ()=>{
    expect(Registration.validateForm('Moayad', 'Moayad', 'user17@gmail.com', '20000101', 'mooo',
     '887asacscdewqqqqqqqqqqqqqqqcccccccccsssssssssd6', '###')[0].message)
    .toBe('The password can not be greater than 30 characters.');
})