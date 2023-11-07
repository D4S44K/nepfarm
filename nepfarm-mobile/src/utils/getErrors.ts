const getError = (error: any) => {
  console.log('this is error: ', error);
  // console.log('this is response: ', error.response);
  console.log('this is response data: ', error.response.data.errors);
  console.log('this is message: ', error.message);
  return error.response?.data?.errors[0]['title'] || 'Error';
};

export {getError};
