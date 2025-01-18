import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSupabase } from "./SupabaseContext";
const BookNowModal = ({ modalIsOpen, closeModal, massageId }) => {
  const [timeSlots, setTimeSlots] = useState([]);
  const supabase = useSupabase();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    date: new Date(),
    time: "",
  });

  useEffect(() => {
    const fetchTimeSlots = async () => {
      const { data, error } = await supabase.from("slots").select("*");

      if (error) {
        console.error("Error fetching time slots:", error.message);
      } else {
        setTimeSlots(data);
      }
    };

    fetchTimeSlots();
  }, [massageId]);
  console.log({ timeSlots });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "contact") {
      if (!value.startsWith("+49") && !value.startsWith("0")) {
        alert("Please enter a valid contact number.");
        return;
      }

      const sanitizedValue = value.replace(/(?!^\+)[^\d]/g, "");
      if (sanitizedValue.length < 3 || sanitizedValue.length > 15) {
        alert("Please enter a valid contact number.");
        return;
      }
    }

    if (name === "email") {
      // Email regex validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        alert("Please enter a valid email address.");
        return;
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // setFormData({ ...formData, [name]: value });

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, contact, email, date } = formData;

    try {
      const { data, error } = await supabase
        .from("bookings") // Replace with your table name
        .insert([
          {
            client_name: name,
            client_mob: contact,
            client_email: email,
            booking_date: date.toISOString(), // Convert date to ISO string
            // time: time,
            massage_id: massageId,
          },
        ]);

      if (error) {
        console.error("Error inserting data:", error.message);
        alert("Failed to schedule appointment. Please try again.");
      } else {
        console.log("Data inserted successfully:", data);
        alert("Appointment scheduled successfully!");
        setFormData({
          name: "",
          contact: "",
          email: "",
          date: new Date(),
          time: "",
        });
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred. Please try again.");
    }
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
                value={formData.contact || "+49"}
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
                  name="date"
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <label className="form-label" htmlFor="datePicker">
                Select a slot
              </label>
              {timeSlots.map((slot) => (
                <div className="col-md-2 mb-4">
                  <label
                    className={`card time_card h-100 border-light shadow-sm ${
                      selectedTimeSlot === slot?.id ? "selected-card" : ""
                    }`}
                    onClick={() => handleTimeSlotChange(slot?.id)}
                  >
                    <div className="card-body text-center">
                      <h5 className="card-title">{slot?.slots}</h5>
                    </div>
                  </label>
                </div>
              ))}
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
