interface ErrorMessageProps {
  msg: string;
}

const ErrorMsg = ({ msg }: ErrorMessageProps) => {
  return <div className="text-danger">{msg}</div>;
};

export default ErrorMsg;
