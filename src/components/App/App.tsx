import UserSettings from '../UserSettings/UserSettings';
import MessagesList from '../MessagesList/MessagesList';
import NewMessage from '../NewMessageForm/NewMessageForm';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';

function App() {
  return (
    <div className="app">
      <UserSettings />
      <MessagesList />
      <NewMessage />
      <div className="backdrop" />
    </div>
  );
}

export default App;
