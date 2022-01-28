import React from 'react';

type ErrorMessageProps = React.PropsWithChildren<{
  message: string;
}>;
const ErrorMessage = ({ message }: ErrorMessageProps): JSX.Element => {
  return <div className="error-msg">{message}</div>;
};

export default ErrorMessage;
