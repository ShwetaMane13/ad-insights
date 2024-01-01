import { useEffect, useState } from "react";

import Form from "./common/Form";
import Checkbox from "./common/Checkbox";
import Dialog from "./common/Dialog";

const CreateAds = () => {
  const [textCheckbox, setTextCheckbox] = useState(false);
  const [mediaCheckbox, setMediaCheckbox] = useState(false);
  const [isNextButtonEnabled, setNextButtonEnabled] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setNextButtonEnabled(textCheckbox || mediaCheckbox);
  }, [textCheckbox, mediaCheckbox]);

  const handleCheckboxChange = (type) => {
    if (type === "Text") {
      setTextCheckbox(!textCheckbox);
    } else if (type === "Media") {
      setMediaCheckbox(!mediaCheckbox);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNextButtonClick = () => {
    setShowForm(true);
  };

  const submitForm = () => {
    handleOpen();
    setShowForm(false);
    setMediaCheckbox(false);
    setTextCheckbox(false);
    setTimeout(() => handleClose(), 600);
  };

  return (
    <>
      {showForm ? (
        <Form
          mediaCheckbox={mediaCheckbox}
          submitForm={submitForm}
          setShowForm={setShowForm}
        />
      ) : (
        <div className="create-ads__container">
          <div className="create-ads__heading">Create Ads</div>
          <div className="create-ads__body">
            <div className="create-ads__options">
              <div
                onClick={() => handleCheckboxChange("Text", true)}
                className="create-ads__options-item"
              >
                <Checkbox
                  text="Text"
                  state={textCheckbox}
                  handleCheckboxChange={handleCheckboxChange}
                />
              </div>
              <div
                onClick={() => handleCheckboxChange("Media", true)}
                className="create-ads__options-item"
              >
                <Checkbox
                  text="Media"
                  state={mediaCheckbox}
                  handleCheckboxChange={handleCheckboxChange}
                />
              </div>
            </div>
            <div className="create-ads__button-container">
              <button
                onClick={handleNextButtonClick}
                disabled={!isNextButtonEnabled}
                className={`create-ads__button ${
                  isNextButtonEnabled ? "" : "disabled"
                }`}
              >
                Next
              </button>
            </div>
          </div>
          <Dialog open={open} handleClose={handleClose} />
        </div>
      )}
    </>
  );
};

export default CreateAds;
