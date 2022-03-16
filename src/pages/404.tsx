import EmptyPage from 'components/EmptyPage/EmptyPage';
import Link from 'next/link';
import { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <EmptyPage>
      <h2>Page Not Found</h2>
      <Link href="/">Go to main page?</Link>
    </EmptyPage>
  );
};

export default NotFound;
