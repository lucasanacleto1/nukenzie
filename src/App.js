import Routes from "./routes";
import GlobalStyle from "./styles/globalStyles";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
