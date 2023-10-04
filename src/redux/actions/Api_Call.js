import axios from 'axios';

let PAGE = 0;
let URL = `https://itunes.apple.com/search?term=hello&offset=${PAGE}&limit=10`;

export const Api_Call = data => async dispatch => {
  dispatch({type: 'start_loading'});

  PAGE = 0;
  console.log(PAGE, 'PAGE----');
  try {
    console.log(URL, 'url-----');
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

export const Re_Api_Call = data => async dispatch => {
  console.log(PAGE, 'PAGE----');

  try {
    console.log(URL, 'url-----');
    await axios.request(URL).then(res => {
      dispatch({type: 're_api_call', payload: res.data.results});
      console.log('--success--');
    });
    PAGE = PAGE + 10;
  } catch (error) {
    dispatch({type: 'error_found', payload: error});
    console.log(error);
  }
};

export const Auth_Data_Api = data => async dispatch => {
  dispatch({type: 'start_loading'});

  let URI = `https://itunes.apple.com/lookup?id=${data}&entity=album`;
  try {
    await axios.request(URI).then(res => {
      dispatch({type: 'auther_success', payload: res.data.results});

      console.log('--success--');
    });
  } catch (error) {
    dispatch({type: 'error_found', payload: error});
    console.log(error);
  }
  dispatch({type: 'stop_loading'});
};
