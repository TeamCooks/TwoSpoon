import React from 'react';
import { NextRouter } from 'next/router';

interface WithRouterProps {
  router: NextRouter;
}
export interface ErrorBoundaryProps extends WithRouterProps {
  children?: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}