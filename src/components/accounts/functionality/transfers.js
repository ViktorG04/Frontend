export const transfers = async (valueTransfer, valueAvailable, valueDivisa) => {

    if(valueAvailable < valueTransfer){
       throw new Error("insufficient credit to transfer");
    }
    return valueTransfer * valueDivisa;
};

export const objectOfSelect = (data, id) => {
    return data.find(item => item.idAccount === id);
};

export const valueDivisa = (object, origin, destiny) => {
    if(origin === destiny){
        return 1;
    };

    const data = object.find(item => item.divisaOrigin === origin && item.divisaDestiny === destiny);
    return data.change;
};