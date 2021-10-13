import { SIGN_UP, SIGN_IN, VERIFY_EMAIL, VERIFY_LOGIN } from "./types";


export const newUser = (user) => (
    {
      type: SIGN_UP,
      data: user
    }
);
  
export const signIn = (loginData) => (
    {
      type: SIGN_IN,
      data: loginData
    }
);

export const verifyEmail = (email) => (
    {
      type: VERIFY_EMAIL,
      data: email
    }
);

export const verifyLogin = (login) => (
    {
      type: VERIFY_LOGIN,
      data: login
    }
);