import { useState, useContext } from "react";
import LoremSvg from "../../../assets/svg/LoremLogo.js";

import { StepFormContext } from "context/FormState";

const StageTwo = ({ nextStep }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [values, setValues] = useState({
    clientId: "clientid",
    password: "password",
    projectName: "",
  });

  const { setClientIdNumber, setClientPassword, setProjectName } =
    useContext(StepFormContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setClientIdNumber(e.target.value);
    setClientPassword(e.target.value);
    setSubmitted(true);
    setIsAuthenticated(true);

    setTimeout(() => {
      nextStep("categories");
    }, 2000);
  };

  const handleClientIdInputChange = (e) => {
    e.persist();
    setValues({ ...values, clientId: e.target.value });
  };

  const handlePasswordInputChange = (e) => {
    e.persist();
    setValues({ ...values, password: e.target.value });
  };

  const handleProjectInputChange = (e) => {
    e.persist();
    setValues({ ...values, projectName: e.target.value });
  };

  if (isAuthenticated) {
    return (
      <section className="text-center mt-5">
        <button class="btn btn-primary" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          >{' '}</span>
          Loading...
        </button>
      </section>
    );
  } else {
    return (
      <div>
        <section className="logo_hero_section_two text-center">
          <LoremSvg fill="white" />
          <h5 className="logo_text">Lorem Ipsum</h5>
        </section>

        <section className="form_container mx-auto">
          <div className="form_card">
            <h2 className="text-center">Personal information</h2>
            <p className="card_small_text">
              Please write your credantials here{" "}
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 input-group-lg custom_imput">
                <label htmlFor="clientId" className="form-label label_text">
                  Client id
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="clientId"
                  aria-describedby="emailHelp"
                  value={values.clientId}
                  onChange={(e) => {
                    setClientIdNumber(e.target.value);
                    handleClientIdInputChange(e);
                  }}
                />
                {submitted && !values.clientId && (
                  <div id="clientId" className="form-text text-danger">
                    Please enter your client id
                  </div>
                )}
              </div>

              <div className="mb-3 input-group-lg custom_imput">
                <label
                  htmlFor="clientPassword"
                  className="form-label label_text"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="clientPassword"
                  value={values.password}
                  onChange={(e) => {
                    setClientPassword(e.target.value);
                    handlePasswordInputChange(e);
                  }}
                />
                {submitted && !values.password && (
                  <div id="clientPassword" className="form-text text-danger">
                    Please enter your password
                  </div>
                )}
              </div>

              <div className="mb-3 input-group-lg custom_imput">
                <label htmlFor="project" className="form-label label_text">
                  Project
                </label>

                <input
                  className="form-control"
                  aria-label="Default select example"
                  placeholder="Project name"
                  id="project"
                  onChange={(e) => {
                    setProjectName(e.target.value);
                    handleProjectInputChange(e);
                  }}
                />

                {submitted && !values.projectName && (
                  <div id="project" className="form-text text-danger">
                    please select your project
                  </div>
                )}
              </div>

              <div className="text-center button_container">
                <button
                  type="submit"
                  className="btn btn-primary form_button"
                  disabled={
                    values.clientId && values.password && values.projectName
                      ? false
                      : true
                  }
                >
                  Connect
                </button>
              </div>

              {submitted && <div className="text-success">Success!</div>}
            </form>
          </div>
        </section>
      </div>
    );
  }
};
export default StageTwo;
