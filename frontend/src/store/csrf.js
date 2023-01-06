export const storeCSRFToken = (res) => {
    const csrfToken = res.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
}

export const restoreCSRF = async () =>{
    let res = await csrfFetch('/api/session')
    // let res2 = await fetch('/api/session')
    storeCSRFToken(res)
    return res;
}

const csrfFetch = async (url, options = {}) => {
    options.headers = options.headers || {};
    options.method = options.method || 'GET';
    if (options.method.toUpperCase() !== 'GET'){
        options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/json';
        options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
    }
    const res = await fetch(url, options);
    if (res.status >= 400) throw res;

    return res;
}

export default csrfFetch;
