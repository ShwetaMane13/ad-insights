import Input from "./InputComponent";

import { headingPlaceHolder, imageURLPlaceholder } from "../../constants/constants";

const Form = (props) => {
  const { setShowForm, mediaCheckbox, submitForm } = props;

  const toggleShowForm = () => {
    setShowForm(false);
  };
 
  return (
    <section className="form-container">
      <section className="form-heading">Create text & media</section>

      <section className="form-body">
        <section className="form-body__section-01">
          <section className="form-body__section-01-left">
            <Input heading={"Heading 01"} placeholder={headingPlaceHolder} />
            <Input heading={"Heading 02"} placeholder={headingPlaceHolder} />
          </section>
          <section className="form-body__section-01-right form__input form__input-heading">
            <section>Description 01</section>
            <textarea
              placeholder="Add primary text to help users understand more about your products, services or offers"
              className="form__input-textarea"
            ></textarea>
          </section>
        </section>

        {mediaCheckbox ? (
          <section className="form-body__section-02">
            <section className="form-body__section-02-top">
              <Input
                heading={"Landscape Marketing Image (1.9:1)"}
                placeholder={imageURLPlaceholder}
              />

              <Input
                heading={"Portrait Marketing Image (4:5)"}
                placeholder={imageURLPlaceholder}
              />
              <Input
                heading={"Square Marketing Image (1:1)"}
                placeholder={imageURLPlaceholder}
              />
            </section>

            <section className="form-body__section-02-bottom">
              <Input
                heading={"Video URL"}
                placeholder={
                  "Add the URL of the video you want to use for the ad"
                }
              />
            </section>
          </section>
        ) : null}

        <section className="form-body__section-03">
          <section className="form-body__section-03-top">
            <Input
              heading={"Business Name"}
              placeholder={"Add your business name"}
            />
            <Input
              heading={"Button Label"}
              placeholder={"Select a label that best suits your ad"}
            />
          </section>
          <section className="form-body__section-03-bottom">
            <Input
              heading={"Website URL"}
              placeholder={
                "Add the URL of the landing page you want to redirect users to"
              }
            />
          </section>
        </section>
      </section>
      <section className="form-navigation">
        <button
          className="form-navigation__button-back"
          onClick={toggleShowForm}
        >
          Back
        </button>
        <button
          className="form-navigation__button-submit"
          onClick={() => submitForm()}
        >
          Submit
        </button>
      </section>
    </section>
  );
};

export default Form;
