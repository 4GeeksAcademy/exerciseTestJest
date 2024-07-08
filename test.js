
test("One euro should be 1.07 dollars", () => {
    const { fromEuroToDollar } = require('./app.js');

    let dollars = fromEuroToDollar(1);

    let expected = 1 * 1.07;

    expect(dollars).toBe(expected);
})

test("One dollar should be 146.26168224299064 yens", () => {
    const { fromDollarToYen } = require('./app.js');

    let yenes = fromDollarToYen(5);

    let expected = (5 / 1.07) * 156.5;

    expect(yenes).toBe(expected);
})

test("One yen should be 0.0055591054313099035 pounds", () => {
    const { fromYenToPound } = require('./app.js');

    let pounds = fromYenToPound(10);

    let expected = (10 / 156.5) * 0.87;

    expect(pounds).toBe(expected);
})

