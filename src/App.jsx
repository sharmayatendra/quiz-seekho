import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <div className="opacity-90">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
