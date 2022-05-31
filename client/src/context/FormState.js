import { createContext, useReducer } from "react";
import FormReducer from "./FormReducer";

export const StepFormContext = createContext();

const formInitialState = {
  step: "platform",
  platform: "",
  clientID: "",
  password: "",
  category: "",
};

export const StepFormProvider = function ({ children }) {
  const [state, dispatch] = useReducer(FormReducer, formInitialState);

  const setNextStep = (stp) => {
    dispatch({ type: "SET_NEXT_STEP", payload: stp });
  };

  const setPrevStep = (stp) => {
    dispatch({ type: "SET_PREV_STEP", payload: stp });
  };

  const setVendorPlatform = (plat) => {
    dispatch({ type: "SET_PLATFORM", payload: plat });
  };

  const setClientIDNumber = (num) => {
    dispatch({ type: "SET_CLIENT_ID", payload: num });
  };

  const setClientPassword = (num) => {
    dispatch({ type: "SET_PASSWORD", payload: num });
  };

  const setProjectName = (serv) => {
    dispatch({ type: "SET_PROJECT_NAME", payload: serv });
  };

  const setCategory = (serv) => {
    dispatch({ type: "SET_CATEGORY", payload: serv });
  };

  return (
    <StepFormContext.Provider
      value={{
        state,
        setNextStep,
        setPrevStep,
        setVendorPlatform,
        setClientIDNumber,
        setClientPassword,
        setProjectName,
        setCategory,
      }}
    >
      {children}
    </StepFormContext.Provider>
  );
};
