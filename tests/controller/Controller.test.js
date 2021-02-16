const Controller = require('../../src/controller/Controller');

let controller = new Controller();

// Tests for validateTheForm function.
test('checks if the first name and last name are valid.', ()=>{
    expect(controller.validateTheForm('Mo@yad', 'Moayad', '$$$', '$$$', '$$$', '$$$', '$$$')[0].message)
    .toBe('Please Enter a valid first name.');
})

test('checks if the email adress is not valid.', ()=>{
    expect(controller.validateTheForm('Moayad', 'Moayad', '$$$', '$$$', '$$$', '$$$', '$$$')[0].message)
    .toBe('Please Enter a valid email adress.');
})

test('checks if everything is ok', ()=>{
    expect(controller.validateTheForm('Moayad', 'Moayad', 'moayada@kth.se', '19960318', 'moo', '667788', '667788').length)
    .toBe(0);
})