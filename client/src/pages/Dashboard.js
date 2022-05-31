import LogoItem from "../components/LogoItem";
import ArrowLeft from "assets/svg/ArrowLeft";
import ArrowLink from "assets/svg/ArrowLink";

const Dashboard = ({ prevStep }) => {
  return (
    <div className="container dashboard_container">
      <div className="mx-auto logo_container">
        <LogoItem fill="#619e70" />
      </div>

      <button
        className="back_button d-flex"
        onClick={() => prevStep("categories")}
      >
        <ArrowLeft />
        Back to choose category
      </button>

      <h2 className="draft_text">My draft</h2>

      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="draft_item">
            <div className="draft_item_header d-flex justify-content-between">
              <img src="https://via.placeholder.com/48" alt="item" />
              <span role="button">
                <ArrowLink />
              </span>
            </div>

            <div className="draft_item_footer">
              <p className="category_desc">Clothing (Zara products)</p>
              <p className="text_category">Images</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="draft_item">
            <div className="draft_item_header d-flex justify-content-between">
              <img src="https://via.placeholder.com/48" alt="item" />
              <span role="button">
                <ArrowLink />
              </span>
            </div>

            <div className="draft_item_footer">
              <p className="category_desc">Clothing (Zara products)</p>
              <p className="text_category">Images</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
