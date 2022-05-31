import { useContext } from "react";
import { StepFormContext } from "context/FormState";

import LoremSvg from "../../../assets/svg/LoremLogo.js";
import CardItem from "../../CardItem";

const StageOne = ({ nextStep, filteredPlatform }) => {
  const { state } = useContext(StepFormContext);
  const { platform } = state;

  return (
    <div>
      <section className="logo_hero_section text-center">
        <LoremSvg fill="white" />
        <h5 className="logo_text">Lorem Ipsum</h5>
        <div className="hero_section mx-auto">
          <h3 className="hero_heading">
            Don't let content generation to be boring and bottleneck for you!
          </h3>
        </div>

        <p className="hero_sub_heading">
          Use the power of Artificial Intelligence to make the hard part of
          work.
        </p>
      </section>

      <section className="container card_group_section">
        <div className="row">
          {filteredPlatform?.reverse().map((item, index) => (
            <CardItem key={item.image.sys.id} title={item.name} index={index}>
              <img
                className="vendor-img"
                src={item.image.fields.file.url}
                alt={item.name}
                width="190px"
                height="94px"
              />
            </CardItem>
          ))}
        </div>
      </section>

      <div className="text-center form_proceed_button">
        <button
          disabled={platform === ""}
          type="submit"
          className="btn btn-success btn-lg form_button"
          onClick={(e) => {
            nextStep("credentials");
          }}
        >
          Let's start
        </button>
      </div>
    </div>
  );
};
export default StageOne;
