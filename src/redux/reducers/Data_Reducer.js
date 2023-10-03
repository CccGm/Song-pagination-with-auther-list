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
    case 'auth_success':
      return {
        ...state,
        AUTH_DATA: payload,
      };

    default:
      return state;
  }
};

export default Data_Reducer;
