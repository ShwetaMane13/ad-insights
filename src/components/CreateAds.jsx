import { useEffect, useState } from "react";

import Form from "./common/Form";
import Checkbox from "./common/Checkbox";

const CreateAds = () => {
  const [textCheckbox, setTextCheckbox] = useState(false);
  const [mediaCheckbox, setMediaCheckbox] = useState(false);
  const [isNextButtonEnabled, setNextButtonEnabled] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setNextButtonEnabled(textCheckbox || mediaCheckbox);
  }, [textCheckbox, mediaCheckbox]);

  const handleCheckboxChange = (type, isChecked) => {
    if (type === "Text") {
      setTextCheckbox(isChecked);
    } else if (type === "Media") {
      setMediaCheckbox(isChecked);
    }
  };

  const handleNextButtonClick = () => {
    setShowForm(true);
  };

  return (
    <>
      {showForm ? (
        <Form
          textCheckbox={textCheckbox}
          mediaCheckbox={mediaCheckbox}
          setMediaCheckbox={setMediaCheckbox}
          setTextCheckbox={setTextCheckbox}
          setShowForm={setShowForm}
        />
      ) : (
        <>
          <section className="create-ads__container">
            <section className="create-ads__heading">Create Ads</section>
            <section className="create-ads__body">
              <section className="create-ads__options">
                <Checkbox
                  text="Text"
                  state={textCheckbox}
                  handleCheckboxChange={handleCheckboxChange}
                />
                <Checkbox
                  text="Media"
                  state={mediaCheckbox}
                  handleCheckboxChange={handleCheckboxChange}
                />
              </section>
              <button
                onClick={handleNextButtonClick}
                disabled={!isNextButtonEnabled}
                className={`create-ads__button${
                  isNextButtonEnabled ? "" : "-disabled"
                }`}
              >
                Next
              </button>
            </section>
          </section>
         
        </>
      )}
    </>
  );
};

export default CreateAds;
