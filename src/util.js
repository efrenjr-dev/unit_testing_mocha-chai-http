const exchangeRates = {
    usd: {
        alias: "dollar",
        name: "United States Dollar",
        ex: {
            peso: 50.73,
            won: 1187.24,
            yen: 108.63,
            yuan: 7.03,
        },
    },
    yen: {
        alias: "yen",
        name: "Japanese Yen",
        ex: {
            peso: 0.47,
            usd: 0.0092,
            won: 10.93,
            yuan: 0.065,
        },
    },
    peso: {
        alias: "peso",
        name: "Philippine Peso",
        ex: {
            usd: 0.02,
            won: 23.39,
            yen: 2.14,
            yuan: 0.14,
        },
    },
    yuan: {
        alias: "yuan",
        name: "Chinese Yuan",
        ex: {
            peso: 7.21,
            usd: 0.14,
            won: 168.85,
            yen: 15.45,
        },
    },
    won: {
        alias: "won",
        name: "South Korean Won",
        ex: {
            peso: 0.043,
            usd: 0.00084,
            yen: 0.092,
            yuan: 0.0059,
        },
    },
};

export { exchangeRates };
