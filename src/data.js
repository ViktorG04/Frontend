export const userContext = {
    id: 1,
    name: 'Victor Garcia',
    password: '1234567890',
    email: 'vic_antonio_92@hotmail.es',
};

export const accounts = [
    {
        idAccount: 1,
        bankName: "Promerica Bank",
        numberAccount: "123453777713312",
        dateExpiration: "2022-09-12",
        credit: 1200,
        divisa: "USD",
        expensive: 300,
        income: 50.0,
        available: 50,
    },
    {
        idAccount: 2,
        bankName: "Agricola bank",
        numberAccount: "12321888813312",
        dateExpiration: "2022-09-12",
        credit: 1200,
        divisa: "EUR",
        expensive: 300,
        income: 50.0,
        available: 950,
    },
    {
        idAccount: 3,
        bankName: "America bank",
        numberAccount: "12456666613312",
        dateExpiration: "2022-09-12",
        credit: 1200,
        divisa: "QUETZAL",
        expensive: 300,
        income: 50.0,
        available: 950,
    },
];

export const typeMoney = [
    {
        id: 1,
        type: "dollar",
    },
    {
        id: 2,
        type: "euro",
    },
    {
        id: 3,
        type: "quetzal",
    },
    {
        id: 4,
        type: "peso Mexicano",
    },
    {
        id: 5,
        type: "peso Argentino"
    },
];

export const divisa = [
    {
        id: 1,
        divisaOrigin: 'USD',
        divisaDestiny: 'EUR',
        change: 0.96
    },
    {
        id: 2,
        divisaOrigin: 'USD',
        divisaDestiny: 'QUETZAL',
        change: 7.88
    },
    {
        id: 3,
        divisaOrigin: 'USD',
        divisaDestiny: 'YEN',
        change: 137.29
    },
    {
        id: 4,
        divisaOrigin: 'USD',
        divisaDestiny: 'CAD',
        change: 1.36
    },
    {
        id: 5,
        divisaOrigin: 'USD',
        divisaDestiny: 'ARGENTINO',
        change: 169.5
    },
    {
        id: 6,
        divisaOrigin: 'USD',
        divisaDestiny: 'MEXICANO',
        change: 19.78
    },
    {
        id: 7,
        divisaOrigin: 'EUR',
        divisaDestiny: 'CAD',
        change: 1.43
    },
    {
        id: 8,
        divisaOrigin: 'EUR',
        divisaDestiny: 'QUETZAL',
        change: 8.25,
    },
    {
        id: 9,
        divisaOrigin: 'EUR',
        divisaDestiny: 'YEN',
        change: 143.59
    },
    {
        id: 10,
        divisaOrigin: 'EUR',
        divisaDestiny: 'MEXICANO',
        change: 20.68
    },
    {
        id: 11,
        divisaOrigin: 'EUR',
        divisaDestiny: 'ARGENTINO',
        change: 177.23
    },
    {
        id: 12,
        divisaOrigin: 'MEXICANO',
        divisaDestiny: 'ARGENTINO',
        change: 8.57,
    }
];