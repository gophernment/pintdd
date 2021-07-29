const pin = require('./pin.js');

test('empty is invalid', () => {
    const given = '';

    const got = pin(given);
    expect(got).toBeFalsy();
})

test('1 digit is not valid', () => {
    const given = '1';

    const got = pin(given);
    expect(got).toBeFalsy();
})

test('5 digit is invalid', () => {
    const given = '13579';

    const got = pin(given);
    expect(got).toBeFalsy();
})

test('6 digit is valid', () => {
    const given = '135797';

    const got = pin(given);
    expect(got).toBeTruthy();
})

test('111 is contained invalid', () => {
    const given = '111797';

    const got = pin(given);
    expect(got).toBeFalsy();
})

test('111 is contained but not a pack valid', () => {
    const given = '117917';

    const got = pin(given);
    expect(got).toBeTruthy();
})

test('222 is contained invalid', () => {
    const given = '222797';

    const got = pin(given);
    expect(got).toBeFalsy();
})

test('555 is contained invalid', () => {
    const given = '555797';

    const got = pin(given);
    expect(got).toBeFalsy();
})

test('999 is contained invalid', () => {
    const given = '999797';

    const got = pin(given);
    expect(got).toBeFalsy();
})

test('123 is contained invalid', () => {
    const given = '123797';

    const got = pin(given);
    expect(got).toBeFalsy();
})

test('321 is contained invalid', () => {
    const given = '123797';

    const got = pin(given);
    expect(got).toBeFalsy();
})

