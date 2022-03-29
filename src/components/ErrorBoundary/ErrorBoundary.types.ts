import React from 'react';

export interface ErrorBoundaryProps extends WithRouterProps {
  children?: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}
