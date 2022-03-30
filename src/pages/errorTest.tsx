import { NextPage } from 'next';
import { Button, Heading, EmptyPage } from 'components';

const ErrorTest: NextPage = () => {
  return (
    <EmptyPage>
      <Heading as="h2">Normal Page</Heading>
      <Button
        type="button"
        variant="transparent"
        color="primaryGreen"
        onClick={() => {
          throw new Error('Testing Error!');
        }}
      >
        에러만들기
      </Button>
    </EmptyPage>
  );
};

export default ErrorTest;
