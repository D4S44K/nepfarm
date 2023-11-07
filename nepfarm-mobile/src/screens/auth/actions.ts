export const setUser = () => {
  return {
    type: 'SET_USER',
    payload: {
      name: 'Disha',
    },
  };
};

export const getUser = () => {
  return {
    type: 'GET_USER',
    payload: {
      name: 'Disha',
    },
  };
};
