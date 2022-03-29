import React from 'react';
import { Heading, Header, EmptyPage } from '..';
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';
import Link from 'next/link';

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public componentDidCatch(error: Error) {
    this.setState({
      hasError: true,
    });
    console.error('====================================');
    console.error(error);
    console.error('====================================');
  }

  public render() {
    if (this.state.hasError) {
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
    return this.props.children;
  }
}
