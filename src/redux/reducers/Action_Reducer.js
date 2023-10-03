const initialstate = {
  loading: false,
  error: null,
};

const Action_Reducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case 'start_loading':
      return {
        ...state,
        loading: true,
      };
    case 'stop_loading':
      return {
        ...state,
        loading: false,
      };
    case 'error_found':
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default Action_Reducer;
