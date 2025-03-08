import "./App.css";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";

function AppRoutes() {
  const routeElements = useRoutes(routes);
  return routeElements;
}
function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
