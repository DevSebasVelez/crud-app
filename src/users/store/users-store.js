import { loadUsersByPage } from "../usecases/load-users-by-page"


const state = {
    currentPage: 0,
    users: [],
}


const loadNextPage = async () => {
    const users = await loadUsersByPage( state.currentPage + 1 );
    if(users.length === 0 ) return;                                 //Si no hay usuarios no existe la pagina

    state.currentPage += 1;                                         //Actualizamos la pagina
    state.users = users;
}

const loadPreviousPage = async () => {

}

const onUserChanged = () => {

}

const reloadPage = async () => {

}


export default {                      //Export default siempre exporta un objeto, colóquese cualquier nombre al obj
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    getUsers: () => [...state.users],  //Operador Spread para esparcir los usuarios
    getCurrentPage: () => state.currentPage,
}