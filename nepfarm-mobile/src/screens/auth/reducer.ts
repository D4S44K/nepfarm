const initialState = {
  user: {name: ''},
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload || {},
      };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload || {},
      };
  }
};

export default AuthReducer;
