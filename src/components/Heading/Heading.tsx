import { HeadingProps } from './Heading.types';

export const Heading = ({ as: Component, className, children }: HeadingProps): JSX.Element => {
  return <Component className={className}>{children}</Component>;
};
