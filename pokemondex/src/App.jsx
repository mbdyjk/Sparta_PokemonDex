import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import "./App.css";
import { PokemonProvider } from "./context/PokemonContext";

export default function App() {
  return (
    <PokemonProvider>
      <RouterProvider router={router} />
    </PokemonProvider>
  );
}
