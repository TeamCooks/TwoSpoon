import { EmptyPage } from 'components';
import Link from 'next/link';
import { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <EmptyPage>
      <h2>Page Not Found</h2>
      <Link href="/">
        <a>Go to main page?</a>
      </Link>
    </EmptyPage>
  );
};

export default NotFound;
