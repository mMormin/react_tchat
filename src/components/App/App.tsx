import Messages from '../Messages/Messages';
import NewMessage from '../NewMessage/NewMessage';
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
