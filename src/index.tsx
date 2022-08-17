import React, { FC, HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
}

/**
 * Welcome component
 */
export const Welcome: FC<Props> = () => {
  return <div>Welcome to Sas UI(SUI)</div>;
};
