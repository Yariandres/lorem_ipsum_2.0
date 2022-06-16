import { useState, useContext } from "react";
import { StepFormContext } from "context/FormState";
import LoremSvg from "../../../assets/svg/LoremLogo.js";
import DashboardIcon from "../../../assets/svg/DashboardIcon.js";
import axios from "axios";
import useFetch from "../../../hooks/useFetch";

const StageThree = ({ nextStep, filteredCategories }) => {
  const [option, setOption] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setCategory } = useContext(StepFormContext);

  const setGenerateOption = (e) => {
    const { value } = e.target;
    // SET category option to state only for image generation available for this demo
    if (value === "Images") {
      setOption("images");
    } else {
      setOption("");
    }
    // if (value === "Multy Language") {
    //   setOption("languages");
    // }
  };

  const fetchData = () => {
    const reqBody = {
      credentials: {
        appId: "LVExBCEKWGKAqVjJ3sVpZW9h",
        clientSecret: "Ae-8CUB2QkGnBm_YpqpJxR8UYymJIcmq",
        projectKey: "vma-test",
      },
    };

    const header = {};

    setLoading(true);
    axios
      .get(
        "https://ctp-service-machathon.azurewebsites.net/api/ctpHttpTrigger",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
          },
          body: JSON.stringify(reqBody),
          withCredentials: true,
          credentials: "same-origin",
        }
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      {data && console.log(data)}
      <section className="logo_hero_section_three text-center container">
        <LoremSvg fill="#619E70" />
        <h5 className="logo_text text-success mt-3">Lorem Ipsum 2.0</h5>

        <div className="dashboard_group">
          <div className="d-flex align-items-center justify-content-between">
            <DashboardIcon />

            <button
              onClick={() => nextStep("dashboard")}
              className="dashboard_button"
            >
              <span className="dashboard_text">My drafts</span>
            </button>
          </div>
        </div>

        <div className="hero_section mx-auto">
          <h3 className="hero_heading">Choose category of content:</h3>
        </div>

        <p className="hero_sub_heading">
          You can choose only one category at the same time
        </p>
      </section>

      <section className="container card_group_section_three">
        <div className="row gy-4 justify-content-center">
          {filteredCategories?.reverse().map((item, index) => {
            const catLabel = [
              "Multy Language",
              "Image Focal Points",
              "Meta Data",
              "Product data",
              "Data schema",
              "Images",
              "Categories / Product / Recommendation",
            ];
            return (
              <div className="col-sm-12 col-md-3" key={item.image.sys.id}>
                <div className="checkbox-card">
                  <div className="form-check d-flex justify-content-center align-items-center">
                    <label
                      htmlFor={`flexRadioDefault${index}`}
                      className="radio-card"
                    >
                      <input
                        disabled={catLabel[index] === "Images" ? false : true}
                        type="radio"
                        value={catLabel[index]}
                        name="radio-card"
                        id={`flexRadioDefault${index}`}
                        onChange={(e) => {
                          setCategory(e.target.value);
                          setGenerateOption(e);
                        }}
                      />
                      <div className="card-content-wrapper">
                        <span className="check-icon"></span>
                        <div className="card-content d-flex justify-content-center">
                          <img
                            className="vendor-img"
                            src={item.image.fields.file.url}
                            alt={item.name}
                            width="80"
                            height="80"
                          />
                        </div>

                        <p className="text-center card_text text-wrap">
                          {catLabel[index]}
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center form_proceed_button">
          <button
            disabled={!option}
            type="submit"
            className="btn btn-success btn-lg form_button"
            // onClick={() => nextStep(option)}
            onClick={() => fetchData()}
          >
            Generate
          </button>
        </div>
      </section>
    </div>
  );
};
export default StageThree;
