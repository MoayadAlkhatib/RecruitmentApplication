const Validators = require('../src/util/Validators');

test('checks if a field is not empty', ()=>{
    expect(Validators.isEmpty('')).toBe(true);
})

test('checks if a field is not null', ()=>{
    expect(Validators.isEmpty(null)).toBe(true);
})