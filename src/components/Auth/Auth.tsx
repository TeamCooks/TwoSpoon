import { actions } from 'store/slices/auth';
import { Button, Heading, Dialog } from 'components';
import { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { FormikProps, withFormik } from 'formik';
import { FormValues, FormProps, AuthContainerProps, Form } from './Auth.types';
import {
  StyledForm,
  StyledInput,
  StyledAuthError,
  StyledFieldError,
  StyledAuthContainer,
  StyledToggleButton,
} from './Auth.styled';
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
  TOGGLE_MESSAGE,
} from './AuthServices';

const AuthForm = (props: FormProps & FormikProps<FormValues>): JSX.Element => {
  const { currentForm, values, errors, dirty, touched, isValid, handleChange, handleBlur, handleSubmit } = props;

  return (
    <StyledForm onSubmit={handleSubmit}>
      {FIELDS[currentForm].map(
        (field): JSX.Element => (
          <Fragment key={field}>
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
          </Fragment>
        ),
      )}

      <Button variant="filled" color="primaryGreen" type="submit" disabled={!dirty || !isValid}>
        {HEADING[currentForm]}
      </Button>
    </StyledForm>
  );
};

const Auth = withFormik<FormProps, FormValues>({
  mapPropsToValues: ({ currentForm }) => INITIAL_VALUES[currentForm],
  validationSchema: ({ currentForm }: FormProps) => SCHEMA[currentForm],
  handleSubmit: async (values: FormValues, { props: { onSubmit } }) => {
    onSubmit(values);
  },
})(AuthForm);

export const AuthContainer = ({ onClose, onSignIn }: AuthContainerProps) => {
  const [currentForm, setCurrentForm] = useState<Form>(AUTH_STATE.signin);
  const [hasAuthError, setAuthError] = useState(false);
  const dispatch = useDispatch();

  const toggleCurrentForm = () => {
    setCurrentForm(currentForm === AUTH_STATE.signin ? AUTH_STATE.signup : AUTH_STATE.signin);
  };

  const handleSubmit = async (values: FormValues) => {
    try {
      dispatch(actions.loading(true));
      const { uid: userId } = await AUTH_FUNC[currentForm](values);
      dispatch(actions.signIn(userId));
      onClose();
      onSignIn();
    } catch (e) {
      setAuthError(true);
    }
  };
  return (
    <Dialog label={currentForm} onClose={onClose}>
      <StyledAuthContainer>
        <Heading as="h1">{HEADING[currentForm]}</Heading>
        {hasAuthError && <StyledAuthError>{AUTH_ERROR_MSG[currentForm]}</StyledAuthError>}
        <Auth key={currentForm} currentForm={currentForm} onSubmit={handleSubmit} />
        <StyledToggleButton color="black" variant="transparent" type="button" onClick={toggleCurrentForm}>
          {TOGGLE_MESSAGE[currentForm]}
        </StyledToggleButton>
      </StyledAuthContainer>
    </Dialog>
  );
};
