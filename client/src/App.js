import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MultyStepForm from "./pages/MultyStepForm";
import { StepFormProvider } from "context/FormState";
import "./sass/main.scss";

const App = () => {
  return (
    <main>
      <StepFormProvider>
        <Switch>
          <Route path="/" exact>
            <MultyStepForm />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </StepFormProvider>
    </main>
  );
};

export default App;
