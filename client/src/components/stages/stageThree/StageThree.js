import { useState, useContext } from "react";
import { StepFormContext } from "context/FormState";
import LoremSvg from "../../../assets/svg/LoremLogo.js";
import DashboardIcon from "../../../assets/svg/DashboardIcon.js";
import axios from "axios";

const StageThree = ({ nextStep, filteredCategories }) => {
  const [option, setOption] = useState("");
  const [loading, setLoading] = useState(false);

  const { setCategory, setData } = useContext(StepFormContext);

  const setGenerateOption = (e) => {
    const { value } = e.target;
    if (value === "Images") {
      setOption("images");
    } else {
      setOption("");
    }
  };

  const fetchData = () => {
    setLoading(true);
    axios
      .get("data.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          nextStep(option);
        }, 2000);
      });
  };

  const loonyToonsQuote = ['¡ANDALE! ¡ANDALE! ¡ARRIBA!', 'THUFFERIN’ THUCCOTASH!', 'TAZ HUNGRY!', 'I TAWT I TAW A PUDDY TAT!', 'BEEP BEEP!']

  // pick ramdom index from loonyToonsQuote 
  const randomIndex = Math.floor(Math.random() * loonyToonsQuote.length);

  if (loading) {
    return (
      <section className="loading_container d-flex justify-content-center align-items-center">
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        {loonyToonsQuote[randomIndex]}
        <div className="spinner-grow text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    );
  } else {
    return (
      <div>
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
          <h3 className="hero_heading">
            <span className="text-danger">IMPORTANT</span> FOR THIS DEMO -
            PLEASE CLICK ON IMAGES
          </h3>
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
              onClick={() => fetchData()}
            >
              Generate
            </button>
          </div>
        </section>
      </div>
    );
  }
};
export default StageThree;
