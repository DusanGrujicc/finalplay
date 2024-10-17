import { generateRandomString } from "./utils";

export const generateUserCredentials = (length) => {
    const baseString = generateRandomString(length);

    const username = baseString;
    const email = `${baseString}@email.com`;
    const password = `${baseString}123`;

    return {username, email, password};
}

export const EXISTING_USER = {
    email : 'dusangrujic@email.com',
    password : 'grujic'
}

export const UPDATE_SHIPPING= {
    first_name: generateRandomString(5),
    last_name: generateRandomString(5),
    email: EXISTING_USER.email,
    street_and_number: `${generateRandomString(5)}12`,
    phone_number: '0612312312',
    city: generateRandomString(6),
    postal_code: '123123',
    country: generateRandomString(8)
  };


