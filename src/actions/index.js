// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const FETCHING = 'FETCHING';
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const success = (characters) => {
  return {
    type: SUCCESS,
    payload: characters,
  };
}

export const failure = (error) => {
  return {
    type: FAILURE,
    payload: error,
  };
}

export const fetching = () => {
  return {
    type: FETCHING,
  }
}

export const fetchCharacters = () => dispatch => {
  dispatch(fetching())
  axios.get('https://swapi.co/api/people/')
    .then(res => {
      dispatch(success(res.data.results));
    })
    .catch(error => {
      dispatch(failure(error.message));
    });
};