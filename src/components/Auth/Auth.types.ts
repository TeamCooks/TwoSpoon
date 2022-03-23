export interface SignInFormValues {
  password: string;
  email: string;
}

export interface SignUpFormValues extends SignInFormValues {
  username: string;
  passwordConfirm: string;
}

export type FormValues = SignInFormValues | SignUpFormValues;

export interface FormProps {
  initialEmail?: string;
  initialPassword?: string;
  initialPasswordConfirm?: string;
  initialUsername?: string;
  currentForm: 'signin' | 'signup';
}

export interface StyleInputProps {
  $warning: boolean;
}
