import Menu from "./Menu";
import Router from "./Routes/Router";
import { routes } from "./Routes/route-config";
function App() {
  return (
    <>
      <Menu />
      <div className="container">
        <Router routes={routes} />
      </div>
    </>
  );
}

export default App;
