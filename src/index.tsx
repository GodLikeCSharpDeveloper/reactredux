import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './Repository/Redux/Store/ReduxStore';
import App from './App';

const root = document.getElementById('root')
const appRoot = ReactDOM.createRoot(root as Element);
  appRoot.render(<App />);
appRoot.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  
);

