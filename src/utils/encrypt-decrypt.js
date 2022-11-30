import CryptoJS from 'crypto-js';

const key = String(process.env.STORE_KEY);

export const encrypt = (text) => {
    return CryptoJS.AES.encrypt(text, key).toString();
};

export const decrypt = (text) => {
    const bytes = CryptoJS.AES.decrypt(text, key);
    return bytes.toString(CryptoJS.enc.Utf8);
};

