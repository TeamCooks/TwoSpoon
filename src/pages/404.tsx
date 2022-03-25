import { EmptyPage } from 'components';
import Link from 'next/link';
import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/404', undefined, { shallow: true });
  }, []);

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
