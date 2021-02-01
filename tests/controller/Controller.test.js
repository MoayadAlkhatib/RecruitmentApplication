const Controller = require('../../src/controller/Controller');

// Tests for validateTheForm function.
test('checks if the first name and last name are valid.', ()=>{
    expect(Controller.validateTheForm('Mo@yad', 'Moayad', '$$$')[0].message)
    .toBe('Please Enter a valid first name.');
})

test('checks if the first name and last name are valid.', ()=>{
    expect(Controller.validateTheForm('Moayad', 'Moayad', '$$$')[0].message)
    .toBe('Please Enter a valid email adress.');
})