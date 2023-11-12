import { useAppSelector } from '../../hooks/redux';
import Login from '../Login/Login';
import MessagesList from '../MessagesList/MessagesList';
import NewMessage from '../NewMessageForm/NewMessageForm';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';

function App() {
  const loginBox = useAppSelector((state) => state.login.isVisible);

  return (
    <div className="app">
      <Login />
      <MessagesList />
      <NewMessage />
      <div className={`backdrop ${loginBox ? `active` : ``}`} />
    </div>
  );
}

export default App;
