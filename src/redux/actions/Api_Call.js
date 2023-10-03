import axios from 'axios';

let URL = 'https://itunes.apple.com/search?term=hello&offset=0&limit=10';

export const Api_Call = data => async dispatch => {
  dispatch({type: 'start_loading'});

  try {
    await axios.request(URL).then(res => {
      dispatch({type: 'success', payload: res.data.results});

      console.log('--success--');
    });
  } catch (error) {
    dispatch({type: 'error_found', payload: error});
    console.log(error);
  }
  dispatch({type: 'stop_loading'});
};

export const Auth_Data_Api = data => async dispatch => {
  dispatch({type: 'start_loading'});
  console.log(data, 'id-------');

  let URI = `https://itunes.apple.com/lookup?id=${data}&entity=album`;
  try {
    await axios.request(URI).then(res => {
      dispatch({type: 'auth_success', payload: res.data.results});

      console.log('--success--');
    });
  } catch (error) {
    dispatch({type: 'error_found', payload: error});
    console.log(error);
  }
  dispatch({type: 'stop_loading'});
};
