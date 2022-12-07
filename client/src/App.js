import "./App.css";
import { Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Form from "./Pages/Form";

function App() {
  return (
    <div className="App">
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/pokemons/:id" component={Detail} />
        <Route exact path="/form" component={Form} />
      </div>
    </div>
  );
}

export default App;
