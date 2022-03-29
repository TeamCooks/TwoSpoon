export type Form = 'signin' | 'signup';

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
  onSubmit: (values: FormValues) => void;
}

export interface StyledInputProps {
  $warning: boolean;
}


export interface AuthContainerProps {
  onClose: () => void;
  onToast: () => void;
}