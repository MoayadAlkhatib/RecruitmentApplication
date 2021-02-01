const Controller = require('../../src/controller/Controller');

// Tests for validateTheForm function.
test('checks if the first name and last name are valid.', ()=>{
    expect(Controller.validateTheForm('Mo@yad', 'Moayad', '$$$', '$$$')[0].message)
    .toBe('Please Enter a valid first name.');
})

test('checks if the email adress is not valid.', ()=>{
    expect(Controller.validateTheForm('Moayad', 'Moayad', '$$$', '$$$')[0].message)
    .toBe('Please Enter a valid email adress.');
})

test('checks if everything is ok', ()=>{
    expect(Controller.validateTheForm('Moayad', 'Moayad', 'moayada@kth.se', '19960318', 'moo').length)
    .toBe(0);
})