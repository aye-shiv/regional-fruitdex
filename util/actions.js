export const GET_FRUITS = 'GET_FRUITS';

const API_URL = 'https://fruitdexapinodejs.herokuapp.com/fruits';

export const getFruit = (path, options = {}) => {
    try {
        return async dispatch => {
            const res = await(fetch(API_URL, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            }));
            const json = await(res.json());
            if(json){
                dispatch({
                    type: GET_FRUITS,
                    payload: json.fruits
                });
            } else {
                console.log('Failed fetch');
            }
        }
    } catch (err) {
        console.log(err);
    }
}