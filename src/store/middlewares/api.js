// type MiddlewareAPI = { dispatch: Dispatch, getState: () => State }
// type Middleware = (api: MiddlewareAPI) => (next: Dispatch) => Dispatch

import {BASE_URL} from "../../constants";

export const api = ({dispatch}) => (next) => (action) => {
    if(!action.rest) {
        next(action)
        return ;
    }
    const url = BASE_URL + action.rest

    next({
        ...action,
        type: action.type + '_START',
    })

    fetch(url, {
        method: action.method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: action.method === 'GET' ? undefined : JSON.stringify(action.query) // body data type must match "Content-Type" header
    }).then(async (response) => {
        const data = await response.json()
        if(response.status === 200) {
            next({
                data: data,
                type: action.type + '_SUCCESS',
                prevAction: action
            })
        } else {
            next({
                error: data,
                type: action.type + '_FAIL',
                prevAction: action
            })
        }
    }).catch((error) => {
        next({
            error: error,
            type: action.type + '_FAIL',
            prevAction: action
        })
    })
}