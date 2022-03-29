import { NextPage } from 'next';
import { Button, Heading } from 'components';

const ErrorTest: NextPage = () => {
  return (
    <>
      <Heading as="h2">Normal Page</Heading>
      <Button
        type="button"
        variant="transparent"
        color="primaryGreen"
        onClick={() => {
          throw new Error('haha');
        }}
      >
        에러만들기
      </Button>
    </>
  );
};

export default ErrorTest;
