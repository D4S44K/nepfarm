const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// const passwordRegex = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[#?!@$%^&*-=]).*$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*^?&+=><,.-:;"'])[A-Za-z\d@$!#%*^?&+=><,.-:;"']{8,}$/;

// const whiteSpaceRegex = /^(?![ ])(?!.*[ ]{2})(?!.*[ ]$)/;
const whiteSpaceRegex = /^(?![ ])(?!.*[ ]{2})/;

const singleWhiteSpace = /^\S*$/;

//no special characters without white psace
const specialCharacterRegex = /^[a-zA-Z0-9._]+$/;

//accept single white space between strings without special characters and numbers
const whiteSpaceAndSpecialCharRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;

//accept everything except numbers
// const alphabetRegex = /^[a-zA-Z ]*$/;
// const alphabetRegex = /^\D+$/;

const aplhabetsOnlyRegex = /^[a-zA-Z ]+$/;

const numbersOnlyRegex = /^[0-9]+$/;

export {
  emailRegex,
  passwordRegex,
  whiteSpaceRegex,
  singleWhiteSpace,
  specialCharacterRegex,
  whiteSpaceAndSpecialCharRegex,
  aplhabetsOnlyRegex,
  numbersOnlyRegex,
};
