export const userContext = {
  id: 1,
  name: "Victor Garcia",
  password: "1234567890",
  email: "vic_antonio_92@hotmail.es",
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
    divisa: "ARGENTINO",
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
    type: "peso Argentino",
  },
];

export const divisas = [
  {
    id: 1,
    origin: "USD",
    destiny: "EUR",
    change: 0.96,
  },
  {
    id: 2,
    divisaOrigin: "USD",
    divisaDestiny: "QUETZAL",
    change: 7.88,
  },
  {
    id: 5,
    divisaOrigin: "USD",
    divisaDestiny: "ARGENTINO",
    change: 169.5,
  },
  {
    id: 6,
    divisaOrigin: "USD",
    divisaDestiny: "MEXICANO",
    change: 19.78,
  },
];

export const category = [
  {
    id: 1,
    type: "vehicle",
  },
  {
    id: 2,
    type: "commerce",
  },
  {
    id: 3,
    type: "meals",
  },
];

export const transfers = [
  {
    id: 1,
    type: "Expensive",
  },
  {
    id: 2,
    type: "Income",
  },
];
