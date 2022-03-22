import { FormikProps, withFormik } from 'formik';
import { FormValues, FormProps } from './Auth.types';
import { StyledInput, StyledFieldError } from './Auth.styled';
import { AUTH_FUNC, SCHEMA, INITIAL_VALUES, FIELDS, HEADING, PLACEHOLDER, TYPE } from './AuthServices';

const AuthForm = (props: FormProps & FormikProps<FormValues>): JSX.Element => {
  const { currentForm, values, errors, dirty, touched, isValid, handleChange, handleBlur, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      {FIELDS[currentForm].map((field) => (
        <>
          <label className="a11yHidden" htmlFor={field}>
            {field.toUpperCase()}
          </label>
          <StyledInput
            id={field}
            warning={touched[field] && errors[field]}
            name={field}
            placeholder={PLACEHOLDER[field]}
            type={TYPE[field]}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[field] || ''}
          />
          <StyledFieldError>{touched[field] && errors[field]}</StyledFieldError>
        </>
      ))}

      <button type="submit" disabled={!dirty || !isValid}>
        {HEADING[currentForm]}
      </button>
    </form>
  );
};

export const Auth = withFormik<FormProps, FormValues>({
  mapPropsToValues: ({ currentForm }) => INITIAL_VALUES[currentForm],
  validationSchema: ({ currentForm }: FormProps) => SCHEMA[currentForm],
  handleSubmit(values: FormValues, { props: { currentForm } }) {
    AUTH_FUNC[currentForm](values);
  },
})(AuthForm);
