import { Alert } from 'antd';
import './Error.css';
function Error({ message }) {
  return <Alert message={message} description="Try to reload the page" type="error" className={'error_message'} />;
}

export default Error;
