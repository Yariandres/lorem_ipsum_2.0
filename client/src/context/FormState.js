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

  const setClientIDNumber = (num) => {
    dispatch({ type: "SET_CLIENT_ID", payload: num });
  };
  const setClientSecretNumber = (num) => {
    dispatch({ type: "SET_CLIENT_SECRET", payload: num });
  };

  return (
    <StepFormContext.Provider
      value={{
        state,
        setVendorPlatform,
        setServiceDelivery,
        setClientIDNumber,
        setClientSecretNumber,
      }}
    >
      {children}
    </StepFormContext.Provider>
  );
};
