import { Alert } from 'antd';
import './Error.css';
function Error({ message }) {
  return (
    <Alert
      message={message}
      description="Try to reload the page if You can't find the ticket"
      type="error"
      className={'error_message'}
    />
  );
}

export default Error;
