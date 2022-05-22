import { createContext, useReducer } from "react";
import FormReducer from "./FormReducer";

export const StepFormContext = createContext();

const formInitialState = {
  platform: "",
  service: "",
  clientID: "",
  clientSecret: "",
  isSubmitInProgress: false,
  isSubmitSuccess: false,
};

export const StepFormProvider = function ({ children }) {
  const [state, dispatch] = useReducer(FormReducer, formInitialState);

  const setVendorPlatform = (plat) => {
    dispatch({ type: "SET_PLATFORM", payload: plat });
  };

  const setServiceDelivery = (serv) => {
    dispatch({ type: "SET_SERVICE", payload: serv });
  };

  return (
    <StepFormContext.Provider
      value={{ state, setVendorPlatform, setServiceDelivery }}
    >
      {children}
    </StepFormContext.Provider>
  );
};
