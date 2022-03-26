import { FormikProps, withFormik } from 'formik';
import { FormValues, FormProps } from './Auth.types';
import { StyledForm, StyledInput, StyledAuthError, StyledFieldError, StyledAuthContainer } from './Auth.styled';
import {
  AUTH_STATE,
  AUTH_FUNC,
  SCHEMA,
  INITIAL_VALUES,
  FIELDS,
  HEADING,
  PLACEHOLDER,
  TYPE,
  AUTH_ERROR_MSG,
} from './AuthServices';
import { Button, Heading } from 'components';
import { useState } from 'react';

const AuthForm = (props: FormProps & FormikProps<FormValues>): JSX.Element => {
  const { currentForm, values, errors, dirty, touched, isValid, handleChange, handleBlur, handleSubmit } = props;

  return (
    <StyledForm onSubmit={handleSubmit}>
      {FIELDS[currentForm].map(
        (field): JSX.Element => (
          <>
            <label className="a11yHidden" htmlFor={field}>
              {field.toUpperCase()}
            </label>
            <StyledInput
              id={field}
              $warning={touched[field] && errors[field]}
              name={field}
              placeholder={PLACEHOLDER[field]}
              type={TYPE[field]}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[field] || ''}
            />
            <StyledFieldError>{touched[field] && errors[field]}</StyledFieldError>
          </>
        ),
      )}

      <Button variant="filled" round={true} color="primaryGreen" type="submit" disabled={!dirty || !isValid}>
        {HEADING[currentForm]}
      </Button>
    </StyledForm>
  );
};

const Auth = withFormik<FormProps, FormValues>({
  mapPropsToValues: ({ currentForm }) => INITIAL_VALUES[currentForm],
  validationSchema: ({ currentForm }: FormProps) => SCHEMA[currentForm],
  handleSubmit: async (values: FormValues, { props: { currentForm, onAuthError: setAuthError } }) => {
    try {
      await AUTH_FUNC[currentForm](values);
    } catch (e) {
      setAuthError(true);
    }
  },
})(AuthForm);

export const AuthContainer = () => {
  const [currentForm, setCurrentForm] = useState(AUTH_STATE.signin);
  const [hasAuthError, setAuthError] = useState(false);
  return (
    <StyledAuthContainer>
      <Heading as="h1">{HEADING[currentForm]}</Heading>
      {hasAuthError && <StyledAuthError>{AUTH_ERROR_MSG[currentForm]}</StyledAuthError>}
      <Auth currentForm={currentForm} onAuthError={setAuthError} />
    </StyledAuthContainer>
  );
};
