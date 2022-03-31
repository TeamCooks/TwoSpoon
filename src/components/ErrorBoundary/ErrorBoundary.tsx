import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { Heading, Header, EmptyPage } from '..';
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public componentDidUpdate(nextProps: ErrorBoundaryProps) {
    const { pathname: nextPath } = nextProps.router;
    const { pathname: currentPath } = this.props.router;

    if (currentPath === '/' && currentPath !== nextPath) {
      this.setState({
        hasError: false,
      });
    }
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

export const ErrorBoundaryWithRouter = withRouter(ErrorBoundary);
