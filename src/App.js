import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouteProcess from "./route/routeProcess";

function App() {
  return (
    <BrowserRouter>
      <RouteProcess />
      {/* <Home/> */}
    </BrowserRouter>
  );
}

export default App;
