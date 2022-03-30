import React from 'react';
import Link from 'next/link';
import { Heading, Header, EmptyPage } from '..';
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public componentDidCatch(error: Error) {
    this.setState({
      hasError: true,
    });
    console.error('====================================');
    console.error(error);
    console.error('====================================');
  }

  public render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <>
          <Header />
          <EmptyPage>
            <Heading as="h2">Something went wrong...</Heading>
            <Link href="/">
              <a>Go back to main page?</a>
            </Link>
          </EmptyPage>
        </>
      );
    }
    const { children } = this.props;
    return children;
  }
}
