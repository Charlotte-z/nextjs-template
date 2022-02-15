import React from 'react';

export declare interface Option {
  id: string | number;
  label: string;
  value: string | React.ReactNode;
  display?: boolean;
  children?: Array<Option>;
}

export declare interface TreeProps {
  options: Array<Option>;
}
