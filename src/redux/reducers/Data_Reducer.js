const initialstate = {
  DATA: [],
  AUTH_DATA: [],
};

const Data_Reducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case 'success':
      return {
        ...state,
        DATA: payload,
      };
    case 're_api_call':
      return {
        ...state,
        DATA: [...state.DATA, ...payload],
      };
    case 'auther_success':
      return {
        ...state,
        AUTH_DATA: payload,
      };

    default:
      return state;
  }
};

export default Data_Reducer;
