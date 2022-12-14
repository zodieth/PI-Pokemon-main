import "./App.css";
import { Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Form from "./Pages/Form";
import Name from "./Pages/Name";

function App() {
  return (
    <div className="App">
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/pokemons/id/:id" component={Detail} />
        <Route exact path={`/pokemon/:name`} component={Name} />
        <Route exact path="/form" component={Form} />
      </div>
    </div>
  );
}

export default App;
