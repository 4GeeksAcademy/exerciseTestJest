let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}



function fromDollarToYen (dollar) {
    let valueInYenes = (dollar / oneEuroIs.USD) * oneEuroIs.JPY ;

    return valueInYenes;
}

function fromEuroToDollar (euro) {
    let valueInEuros = euro * oneEuroIs.USD ;

    return valueInEuros;
}

function fromYenToPound (yen) {
    let valueInPounds = (yen / oneEuroIs.JPY) * oneEuroIs.GBP ;

    return valueInPounds;
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound }
