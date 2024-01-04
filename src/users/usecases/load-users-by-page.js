import { localhostUserToModel } from "../mappers/localhost-user.mapper";
/**
 *
 * @param {Number} page
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async ( page = 1 ) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;     //Url de la api (revisar .env)
    const res = await fetch(url);                                           //Hacemos la peticion de la data
    const data = await res.json();                                          //La peticion en su forma json

    const users = data.map( userLike => localhostUserToModel( userLike ) );
    return users;
}