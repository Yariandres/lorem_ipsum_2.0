import { Route, Switch } from "react-router-dom";
import NavBar from "components/NavBar";
import Dashboard from "./pages/Dashboard";
import MultyStepForm from "./pages/MultyStepForm";
import { StepFormProvider } from "context/FormState";

import "./sass/main.scss";

const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <StepFormProvider>
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/form">
              <MultyStepForm />
            </Route>
          </Switch>
        </StepFormProvider>
      </main>
    </div>
  );
};

export default App;
