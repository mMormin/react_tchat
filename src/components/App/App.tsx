import { useAppSelector } from '../../hooks/redux';
import UserSettings from '../UserSettings/UserSettings';
import MessagesList from '../MessagesList/MessagesList';
import NewMessage from '../NewMessageForm/NewMessageForm';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';

function App() {
  const userSettings = useAppSelector((state) => state.userSettings.isVisible);

  return (
    <div className="app">
      <UserSettings />
      <MessagesList />
      <NewMessage />
      <div className={`backdrop ${userSettings ? `active` : ``}`} />
    </div>
  );
}

export default App;
