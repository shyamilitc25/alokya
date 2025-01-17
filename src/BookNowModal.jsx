import React, { useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const BookNowModal = ({ modalIsOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    date: new Date(),
    time: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    closeModal();
  };
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const handleTimeSlotChange = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  return (
    <>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Form Modal"
          ariaHideApp={false}
          shouldCloseOnOverlayClick={true} // Enables closing on overlay click
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Dimmed background
            },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              width: "90%", // Adjust for smaller screens
              maxWidth: "700px",
              // height: "90vh", // Limit height for scroll
              overflowY: "auto", // Enable sc,
            },
          }}
        >
          <h2 className="text-center">Schedule Appointment</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Contact Number</label>
              <input
                type="tel"
                className="form-control"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="datePicker">
                Date
              </label>
              <div>
                <DatePicker
                  id="datePicker"
                  selected={formData.date}
                  onChange={handleDateChange}
                  className="form-control"
                  dateFormat="yyyy-MM-dd"
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <label className="form-label" htmlFor="datePicker">
                Select a slot
              </label>
              <div className="col-md-2 mb-4">
                <label
                  className={`card time_card h-100 border-light shadow-sm ${
                    selectedTimeSlot === "9:00 AM" ? "selected-card" : ""
                  }`}
                  onClick={() => handleTimeSlotChange("9:00 AM")}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">9:00 AM</h5>
                  </div>
                </label>
              </div>

              <div className="col-md-2 mb-4">
                <label
                  className={`card time_card h-100 border-light shadow-sm ${
                    selectedTimeSlot === "10:00 AM" ? "selected-card" : ""
                  }`}
                  onClick={() => handleTimeSlotChange("10:00 AM")}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">10:00 AM</h5>
                  </div>
                </label>
              </div>

              <div className="col-md-2 mb-4">
                <label
                  className={`card time_card h-100 border-light shadow-sm ${
                    selectedTimeSlot === "11:00 AM" ? "selected-card" : ""
                  }`}
                  onClick={() => handleTimeSlotChange("11:00 AM")}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">11:00 AM</h5>
                  </div>
                </label>
              </div>

              <div className="col-md-2 mb-4">
                <label
                  className={`card time_card h-100 border-light shadow-sm ${
                    selectedTimeSlot === "12:00 PM" ? "selected-card" : ""
                  }`}
                  onClick={() => handleTimeSlotChange("12:00 PM")}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">12:00 PM</h5>
                  </div>
                </label>
              </div>
              <div className="col-md-2 mb-4">
                <label
                  className={`card time_card h-100 border-light shadow-sm ${
                    selectedTimeSlot === "12:00 PM" ? "selected-card" : ""
                  }`}
                  onClick={() => handleTimeSlotChange("12:00 PM")}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">12:00 PM</h5>
                  </div>
                </label>
              </div>
              <div className="col-md-2 mb-4">
                <label
                  className={`card time_card h-100 border-light shadow-sm ${
                    selectedTimeSlot === "12:00 PM" ? "selected-card" : ""
                  }`}
                  onClick={() => handleTimeSlotChange("12:00 PM")}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">12:00 PM</h5>
                  </div>
                </label>
              </div>
              <div className="col-md-2 mb-4">
                <label
                  className={`card time_card h-100 border-light shadow-sm ${
                    selectedTimeSlot === "12:00 PM" ? "selected-card" : ""
                  }`}
                  onClick={() => handleTimeSlotChange("12:00 PM")}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">12:00 PM</h5>
                  </div>
                </label>
              </div>
              <div className="col-md-2 mb-4">
                <label
                  className={`card time_card h-100 border-light shadow-sm ${
                    selectedTimeSlot === "12:00 PM" ? "selected-card" : ""
                  }`}
                  onClick={() => handleTimeSlotChange("12:00 PM")}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">12:00 PM</h5>
                  </div>
                </label>
              </div>
              <div className="col-md-2 mb-4">
                <label
                  className={`card time_card h-100 border-light shadow-sm ${
                    selectedTimeSlot === "12:00 PM" ? "selected-card" : ""
                  }`}
                  onClick={() => handleTimeSlotChange("12:00 PM")}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">12:00 PM</h5>
                  </div>
                </label>
              </div>
              <div className="col-md-2 mb-4">
                <label
                  className={`card time_card h-100 border-light shadow-sm ${
                    selectedTimeSlot === "12:00 PM" ? "selected-card" : ""
                  }`}
                  onClick={() => handleTimeSlotChange("12:00 PM")}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">12:00 PM</h5>
                  </div>
                </label>
              </div>
              <div className="col-md-2 mb-4">
                <label
                  className={`card time_card h-100 border-light shadow-sm ${
                    selectedTimeSlot === "12:00 PM" ? "selected-card" : ""
                  }`}
                  onClick={() => handleTimeSlotChange("12:00 PM")}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">12:00 PM</h5>
                  </div>
                </label>
              </div>
              <div className="col-md-2 mb-4">
                <label
                  className={`card time_card h-100 border-light shadow-sm ${
                    selectedTimeSlot === "12:00 PM" ? "selected-card" : ""
                  }`}
                  onClick={() => handleTimeSlotChange("12:00 PM")}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">12:00 PM</h5>
                  </div>
                </label>
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};
export default BookNowModal;
