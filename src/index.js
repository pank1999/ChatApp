import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './Components/Login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { PersistGate} from 'redux-persist/integration/react';
import { store , persistor} from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
         <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<App />} />
         </Routes>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


