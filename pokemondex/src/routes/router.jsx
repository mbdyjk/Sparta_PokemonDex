import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Dex from "../pages/Dex.jsx";
import PokemonDetail from "../pages/PokemonDetail.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/dex", element: <Dex /> },
  { path: "/pokemon-detail", element: <PokemonDetail /> },
  // 존재하지 않는 페이지에 접속하면 홈으로 리다이렉트
  // replace를 통해 브라우저 히스토리에 페이지 정보를 남기지 않는다.
  { path: "*", element: <Navigate to="/" replace /> },
]);

export default router;
