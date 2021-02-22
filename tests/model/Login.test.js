const Login = require('../../src/model/Login');
test('checks if the if the user name is valid.', ()=>{
    expect(Login.validateForm('Sa@ra', '$$$')[0].message)
    .toBe('Please Enter a valid username.');
})

test('checks if password is less than 6 characters', ()=>{
    expect(Login.validateForm('Sara', '1234')[0].message)
    .toBe('The password must be at least 6 characters.');
})

test('checks if password is greater than 30 characters', ()=>{
    expect(Login.validateForm('Sara', '123456789123456789123456789123456789')[0].message)
    .toBe('The password can not be greater than 30 characters.');
})

test('checks if everything is ok', ()=>{
    expect(Login.validateForm('Sara', '123456').length)
    .toBe(0);
})