import { useState } from "react";
import LogoItem from "./LogoItem";
import ArrowLeft from "assets/svg/ArrowLeft";
import SuccessCheck from "assets/svg/SuccessCheck";
import ModalContent from "./ModalContent";

const ImagesPreview = ({ prevStep }) => {
  const [projectName, setProjectName] = useState("");
  return (
    <div className="dashboard_container">
      <div className="mx-auto logo_container">
        <LogoItem fill="#619e70" />
      </div>

      <div className="container preview_hero_section">
        <button
          className="back_button d-flex"
          onClick={() => prevStep("categories")}
        >
          <ArrowLeft />
          Back to choose category
        </button>

        <h2 className="hero_primary_text">Images Preview</h2>
        <p className="hero_secondary_text">
          Images have been genereted base on Commercetools data.
        </p>
      </div>

      <section className="bg-light images_container">
        <div className="container">
          <div className="row gy-4">
            <div className="col-sm-12 col-md-6">
              <div className="card_items d-flex">
                <img
                  src="https://via.placeholder.com/238"
                  width="246"
                  alt="item"
                />
                <ul className="list_group">
                  <li className="image_heading_primary">Image #2</li>
                  <li>Category: Clothig</li>
                  <li>Type: Dress</li>
                  <li>Size: xs</li>
                  <li>Color: red</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="card_items d-flex">
                <img
                  src="https://via.placeholder.com/238"
                  width="246"
                  alt="item"
                />
                <ul className="list_group">
                  <li className="image_heading_primary">Image #2</li>
                  <li>Category: Clothig</li>
                  <li>Type: Dress</li>
                  <li>Size: xs</li>
                  <li>Color: red</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="card_items d-flex">
                <img
                  src="https://via.placeholder.com/238"
                  width="246"
                  alt="item"
                />
                <ul className="list_group">
                  <li className="image_heading_primary">Image #2</li>
                  <li>Category: Clothig</li>
                  <li>Type: Dress</li>
                  <li>Size: xs</li>
                  <li>Color: red</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="card_items d-flex">
                <img
                  src="https://via.placeholder.com/238"
                  width="246"
                  alt="item"
                />
                <ul className="list_group">
                  <li className="image_heading_primary">Image #2</li>
                  <li>Category: Clothig</li>
                  <li>Type: Dress</li>
                  <li>Size: xs</li>
                  <li>Color: red</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="card_items d-flex">
                <img
                  src="https://via.placeholder.com/238"
                  width="246"
                  alt="item"
                />
                <ul className="list_group">
                  <li className="image_heading_primary">Image #2</li>
                  <li>Category: Clothig</li>
                  <li>Type: Dress</li>
                  <li>Size: xs</li>
                  <li>Color: red</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="card_items d-flex">
                <img
                  src="https://via.placeholder.com/238"
                  width="246"
                  alt="item"
                />
                <ul className="list_group">
                  <li className="image_heading_primary">Image #2</li>
                  <li>Category: Clothig</li>
                  <li>Type: Dress</li>
                  <li>Size: xs</li>
                  <li>Color: red</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer_container border-top">
        <div className="footer_content container d-flex justify-content-between align-items-center">
          <p>
            After click to “Upload” <strong>100</strong> images will be upload
            to the platform
          </p>

          <div className="footer_buttons d-flex justify-content-between">
            <button
              className="btn btn btn-outline-secondary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalDraft"
            >
              Save as draft
            </button>

            <button
              className="btn btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalUpload"
              type="button"
            >
              Upload
            </button>
          </div>
        </div>
      </footer>

      <ModalContent>
        <div
          className="modal fade"
          id="exampleModalDraft"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <h5 className="modal_header">Save as draft</h5>
              <h5 className="modal_sub_header">
                Please write a name of your draft
              </h5>

              <div className="mb-3 input-group-lg custom_imput">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control py-3"
                  id="clientId"
                  aria-describedby="emailHelp"
                  value={projectName}
                  onChange={(e) => {
                    setProjectName(e.target.value);
                  }}
                />
              </div>
              <button
                data-bs-dismiss="modal"
                aria-label="Close"
                className="btn btn-success btn-lg mb-4 py-3"
                onClick={() => prevStep("dashboard")}
              >
                Save
              </button>
              <button
                data-bs-dismiss="modal"
                aria-label="Close"
                className="btn btn-outline-secondary btn-lg py-3"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </ModalContent>

      <ModalContent>
        <div
          className="modal fade"
          id="exampleModalUpload"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="text-center">
                <SuccessCheck />
              </div>
              <h5 className="text-center modal_header">Successful</h5>
              <h5 className="text-center modal_sub_header">
                100 product images were uploaded to <br />
                Commercetools
              </h5>
              <button
                data-bs-dismiss="modal"
                aria-label="Close"
                className="btn btn-success btn-lg mb-4 py-3"
                onClick={() => prevStep("categories")}
              >
                Go to categories
              </button>
              <button
                data-bs-dismiss="modal"
                aria-label="Close"
                className="btn btn-outline-secondary btn-lg py-3"
                onClick={() => prevStep("platform")}
              >
                Change platform
              </button>
            </div>
          </div>
        </div>
      </ModalContent>
    </div>
  );
};
export default ImagesPreview;
