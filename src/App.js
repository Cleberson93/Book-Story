import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from "react-redux";
import Menu from "./components/Menu";
import Routes from "./routes";

import {store, persistor} from "./store";


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
