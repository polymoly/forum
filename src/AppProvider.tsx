import { Provider } from "react-redux";
import App from "./App";
import { store } from "./core/store/store";

export const AppProvider = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
