const Validators = require('../../src/util/Validators');

//Tests for isEmpty function.
test('checks if a field is not empty', ()=>{
    expect(Validators.isEmpty('')).toBe(true);
})

test('checks if a field is not null', ()=>{
    expect(Validators.isEmpty(null)).toBe(true);
})

// Tests for containsSpecialCharacters function.
test('checks if a name contains a special character.', ()=>{
    expect(Validators.containsSpecialCharacters('Mo@yad')).toBe(true);
})

test('checks if a name contains an space character.', ()=>{
    expect(Validators.containsSpecialCharacters('Moa yad')).toBe(false);
})

test('checks if a name is multiple special character.', ()=>{
    expect(Validators.containsSpecialCharacters('!!!')).toBe(true);
})

test('checks if a name is a special character.', ()=>{
    expect(Validators.containsSpecialCharacters('.')).toBe(true);
})

// Tests for containsANumber function.
test('checks if a name contains a number.', ()=>{
    expect(Validators.containsANumber('Moayad1')).toBe(true);
})

test('checks if a name is a number.', ()=>{
    expect(Validators.containsANumber('7')).toBe(true);
})

// Tests for isAName function.
test('checks if the field entered is a name.', ()=>{
    expect(Validators.isAName('Moayad')).toBe(true);
})

test('checks if the field entered is not a name.', ()=>{
    expect(Validators.isAName('M&M')).toBe(false);
})

// Tests for isAnEmail function.
test('checks if the field entered is an email.', ()=>{
    expect(Validators.isAnEmail('moayada@kth.se')).toBe(true);
})

test('checks if the field entered is not an email.', ()=>{
    expect(Validators.isAnEmail('moayada.kth.se')).toBe(false);
})

test('checks if the field entered is not not an empty email.', ()=>{
    expect(Validators.isAnEmail('')).toBe(false);
})

// Tests for isADateOfBirth function.
test('checks if the field entered is a date of birth.', ()=>{
    expect(Validators.isADateOfBirth('19960318')).toBe(true);
})

test('checks if the field entered is not a date of birth.', ()=>{
    expect(Validators.isADateOfBirth('javascript')).toBe(false);
})

test('checks if the field entered does not match the format', ()=>{
    expect(Validators.isADateOfBirth('96-03-18')).toBe(false);
})

// Tests for isAUserName function.
test('checks if the field entered is a valid username', ()=>{
    expect(Validators.isAUserName('moayada')).toBe(true);
})

test('checks if the field entered is a valid username', ()=>{
    expect(Validators.isAUserName('Moayada12')).toBe(true);
})

test('checks if the field entered is not a valid username', ()=>{
    expect(Validators.isAUserName('mo@yad')).toBe(false);
})