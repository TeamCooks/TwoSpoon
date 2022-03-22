import * as Yup from 'yup';

export const TOGGLE_MESSAGE = {
  signin: 'Not registered yet? Sign up here!',
  signup: 'Already a member? Sign in here!',
};

export const HEADING = {
  signin: 'Sign In',
  signup: 'Sign Up',
};

export const PLACEHOLDER = {
  username: 'Username',
  email: 'Email',
  password: 'Password',
  passwordConfirm: 'Confirm password',
};

export const TYPE = {
  username: 'text',
  email: 'email',
  password: 'password',
  passwordConfirm: 'password',
};

export const INITIAL_VALUES = {
  signin: {
    password: '',
    email: '',
  },
  signup: {
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
  },
};

export const SCHEMA = {
  signin: Yup.object({
    password: Yup.string().min(8, 'Must be 8 characters or more').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  }),
  signup: Yup.object({
    username: Yup.string().min(3, 'Must be 3 characters or more').required('Required'),
    password: Yup.string().min(8, 'Must be 8 characters or more').required('Required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  }),
};

export const AUTH_ERROR_MSG = {
  signin: 'Sign in failed. Please try again.',
  signup: 'Sign up failed. Please try again.',
};

export const FIELDS = {
  signin: ['email', 'password'],
  signup: ['username', 'email', 'password', 'passwordConfirm'],
};

export const AUTH_FUNC = {
  signin: (values) => {
    console.log(values);
    console.log('signin');
  },
  signup: (values) => {
    console.log(values);
    console.log('signupppp');
  },
};
