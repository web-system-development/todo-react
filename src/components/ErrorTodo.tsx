interface MessageProps {
  message: string;
}
const ErrorTodo = ({ message }: MessageProps) => {
  return <span className="indicator-item badge text-red-400">{message}</span>;
};

export default ErrorTodo;
