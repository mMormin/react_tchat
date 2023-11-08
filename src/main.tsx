import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App/App';
import store from './store';
import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);

// Redux Provider Configuration
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
