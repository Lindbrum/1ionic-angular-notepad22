
// qui dentro andranno inserite le url's verso il server (le url dei controller)
export const USE_PROXY = true;

export const URL_BASE = USE_PROXY ? 'api' : 'http://localhost:8080/api/api';
export class Urls {
    addNewNota: 'http://localhost:8000/note/add';
    getAllNote: 'http://localhost:8000/note/all';
    getNotaById: 'http://localhost:8000/note/all/{id}';
    delNewNota: 'http://localhost:8000/note/all/{id}';
}
export const X_AUTH = 'X-Auth';

export const AUTH_TOKEN = 'auth-token';

export const UTENTE_STORAGE = 'utente';

export const LINGUA = 'lingua';
