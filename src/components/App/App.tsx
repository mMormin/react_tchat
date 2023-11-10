import Messages from '../MessagesList/MessagesList';
import NewMessage from '../NewMessageForm/NewMessageForm';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Messages />
      <NewMessage />
    </div>
  );
}

export default App;
