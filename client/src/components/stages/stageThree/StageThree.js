import { useState, useContext } from "react";
import { StepFormContext } from "context/FormState";

const StageThree = () => {
  const [clientID, setClientID] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { setClientIDNumber, setClientSecretNumber } =
    useContext(StepFormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "clientID") {
      setClientID(value);
      setClientIDNumber(clientID);
    } else if (name === "clientSecret") {
      setClientSecret(value);
      setClientSecretNumber(clientSecret);
    }
  };

  return (
    <div className="form-container card p-4 d-flex mx-auto p-5">
      <div id="emailHelp" className="display-5 text-center">
        Put your secret here
      </div>
      <div className="mt-5">
        <label for="clientID" className="form-label">
          Client IDS
        </label>
        <input
          type="number"
          className="form-control form-control-lg"
          id="clientID"
          name="clientID"
          aria-describedby="emailHelp"
          onChange={handleChange}
        />
      </div>
      <div className="mt-4 mb-5">
        <label for="clientSecret" className="form-label">
          Client Secret
        </label>
        <input
          type="number"
          className="form-control form-control-lg"
          id="clientSecret"
          name="clientSecret"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
export default StageThree;
