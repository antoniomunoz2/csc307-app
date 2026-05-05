import mut from './module.js'

//sum 
test('testing sum--success', () => {
    const expected = 30;
    const got = mut.sum(12, 18);
    expect(got).toBe(expected);
});

//containsnumbers
test('testing containsNumbers--1', () => {
    const expected = false;
    const got = mut.containsNumbers("hello");
    expect(got).toBe(expected)
});

test('testing containsNumbers--2', () => {
    const expected = true;
    const got = mut.containsNumbers("812309");
    expect(got).toBe(expected)
});

test('testing containsNumbers--3', () => {
    const expected = true;
    const got = mut.containsNumbers("1738 im like hey whats up hello");
    expect(got).toBe(expected)
});

test('testing containsNumbers--4', () => {
    const expected = false;
    const got = mut.containsNumbers("  ");
    expect(got).toBe(expected)
});

//div
test('testing div--1', () => {
    const expected = 3;
    const got = mut.div(9, 3);
    expect(got).toBe(expected)
});

test('testing div--2', () => {
    const expected = Infinity;
    const got = mut.div(9, 0);
    expect(got).toBe(expected)
});

test('testing div--3', () => {
    const expected = 2.875;
    const got = mut.div(23, 8);
    expect(got).toBe(expected)
});