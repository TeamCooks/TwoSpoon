import React from 'react';

export interface DialogProps {
  onClose: () => void;
  children: React.ReactNode;
  nodeId?: string;
  label: string;
  [restProps: string]: any;
}
