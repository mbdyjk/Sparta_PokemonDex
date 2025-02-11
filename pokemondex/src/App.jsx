import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import "./App.css";
import { PokemonProvider } from "./context/PokemonContext";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    // Context 방식
    // <PokemonProvider>
    //   <RouterProvider router={router} />
    // </PokemonProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={2000} />
    </Provider>
  );
}
