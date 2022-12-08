const url = String(process.env.API)+'user';

export const getResponseUser = async () =>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export const postResponseUser = async (values) =>{
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(values)
    });
    const data = await response.json();
    return data;
};

export const putResponseUser = async (values) =>{
    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(values)
    });
    const data = await response.json();
    return data;
};