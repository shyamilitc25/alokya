import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSupabase } from "./SupabaseContext";
import sendBookingEmail from "./mail";

const BookNowModal = ({
  modalIsOpen,
  closeModal,
  massageId,
  massageName,
  massageDur,
}) => {
  // console.log({ massageId });
  const [timeSlots, setTimeSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const supabase = useSupabase();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    date: new Date(),
    time: "",
  });
  const durationDetails = [
    { massageType: "massage1", blockCount: 2 },
    { massageType: "massage2", blockCount: 3 },
    { massageType: "massage3", blockCount: 4 },
    { massageType: "massage4", blockCount: 5 },
  ];

  useEffect(() => {
    const fetchTimeSlots = async () => {
      const formattedDate = selectedDate.toISOString().split("T")[0];

      try {
        const { data, error } = await supabase
          .from("slots")
          .select(
            `
          id,
          slots,
          time_slots(
            id,
            status,
            date,
            time_slot
          )
        `
          )
          .eq("time_slots.date", formattedDate)
          .eq("is_enabled", true)
          .order("slots", { ascending: true }); // Filter by the selected date

        if (error) {
          console.error("Error fetching time slots:", error.message);
        } else {
          const formattedData = data.map((slot) => {
            // Prepare the formatted data
            const formattedSlot = {
              id: slot.id,
              name: slot.slots,
              timeSlots: slot.time_slots.map((timeSlot) => ({
                id: timeSlot.id, // This is the `time_slot.id`
                time: timeSlot.time_slot,
                status: timeSlot.status, // true/false
              })),
            };

            // Add timeSlot.id to selectedTimeSlots if timeSlots has data
            slot.time_slots.forEach((timeSlot) => {
              setSelectedTimeSlots((prev) =>
                prev.includes(timeSlot.time_slot)
                  ? prev
                  : [...prev, timeSlot.time_slot]
              );
            });

            return formattedSlot;
          });

          setTimeSlots(formattedData);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    fetchTimeSlots();
  }, [selectedDate, massageId]);

  // console.log({ timeSlots });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log({ timeSlots });
  // setFormData({ ...formData, [name]: value });
  const getBlockedSlotIds = (selectedTime, count, interval) => {
    // Convert the selected time to Date object for comparison
    let selectedIndex = timeSlots.findIndex(
      (slot) => slot.name === selectedTime
    );

    if (selectedIndex === -1) {
      console.error("Selected time not found in timeSlots");
      return [];
    }

    // Get the next 'count' slots
    let blockedSlots = timeSlots.slice(selectedIndex, selectedIndex + count);
    // console.log({ blockedSlots });
    // Return only the IDs of those slots
    return blockedSlots.map((slot) => slot.id);
  };
  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
    setSelectedDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { name, contact, email, date } = formData;

    if (!contact.startsWith("+49") && !contact.startsWith("0")) {
      alert("Bitte geben Sie eine gültige Kontaktnummer ein");
      return;
    }

    const sanitizedValue = contact.replace(/(?!^\+)[^\d]/g, "");
    if (sanitizedValue.length < 3 || sanitizedValue.length > 15) {
      alert("Bitte geben Sie eine gültige Kontaktnummer ein");
      return;
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Bitte geben Sie eine gültige E-Mail Adresse ein");
      return;
    }
    if (selectedTimeSlot === "") {
      alert("Eine Uhrzeit auswählen");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("bookings") // Replace with your table name
        .insert([
          {
            client_name: name,
            client_mob: contact,
            client_email: email,
            booking_date: date.toISOString(), // Convert date to ISO string
            booking_time: selectedTimeSlot,
            massage_id: massageId,
          },
        ]);

      if (error) {
        console.error("Error inserting data:", error.message);
        alert(
          "Terminvereinbarung fehlgeschlagen. Bitte versuchen Sie es erneut."
        );
      } else {
        let curMassageTYpe = massageName.replace(/\s+/g, "").toLowerCase();

        let durationToblock = durationDetails.filter(
          (item) => item.massageType === curMassageTYpe
        )[0].blockCount;
        let blockTimeSlots = getBlockedSlotIds(
          selectedTime,
          durationToblock,
          30
        );

        const formattedDate = selectedDate.toISOString().split("T")[0];
        const timeSlotsToInsert = blockTimeSlots.map((time_slot) => ({
          date: formattedDate,
          status: false,
          time_slot: time_slot,
        }));
        console.log("getBlockedSlotIds", blockTimeSlots, timeSlotsToInsert);

        const { data: timeSlotData, error: timeSlotError } = await supabase
          .from("time_slots") // Replace with your table name
          .insert(timeSlotsToInsert, { upsert: false }); // Ensure no

        // const { data: timeSlotData, error: timeSlotError } = await supabase
        //   .from("time_slots")
        //   .insert([
        //     {
        //       date: date.toISOString(),
        //       stxfatus: false,
        //       time_slot: selectedTimeSlot,
        //     },
        //   ]);
        if (timeSlotError) {
          console.error("Error inserting time slot:", timeSlotError.message);
          alert(
            "Zeitslot konnte nicht aktualisiert werden. Bitte versuchen Sie es erneut."
          );
        } else {
          const bookingData = {
            customerName: name,
            customerEmail: email,
            customerPhone: contact,
            bookingDetails: {
              date: date.toLocaleDateString("en-GB"),
              time: selectedTime,
              massage: massageName,
              duration: massageDur,
            },
          };
          await sendBookingEmail(bookingData);
          console.log("Data inserted successfully:", data);
          alert("Termin erfolgreich vereinbart!");
          setFormData({
            name: "",
            contact: "",
            email: "",
            date: new Date(),
            time: "",
          });
        }
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred. Please try again.");
    }
    setFormData({
      name: "",
      contact: "",
      email: "",
      date: new Date(),
      time: "",
    });
    setTimeSlots([]);
    setIsLoading(false);
    closeModal();
  };
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const isBookingAvailable = (slot, massageType) => {
    let durationToCheck = durationDetails.filter(
      (item) => item.massageType === massageType
    )[0].blockCount;
    let blockTimeSlots = getBlockedSlotIds(slot, durationToCheck, 30);
    // console.log({ blockTimeSlots });

    return blockTimeSlots.some((id) =>
      timeSlots.some((slot) =>
        slot.timeSlots.some((timeSlot) => timeSlot.time === id)
      )
    );
  };
  const handleTimeSlotChange = (timeSlot, name) => {
    let curMassageTYpe = massageName.replace(/\s+/g, "").toLowerCase();
    const isExist = isBookingAvailable(name, curMassageTYpe);
    if (isExist) {
      alert(
        "Die ausgewählte Zeit ist für diese Massage nicht verfügbar. Bitte wählen Sie eine andere Zeit."
      );
      return; // Stop execution if the slot is already booked
    }

    setSelectedTimeSlot(timeSlot);

    console.log({ timeSlots });
    setSelectedTime(name);
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
          <h2 className="text-center">Termin vereinbaren</h2>
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
              <label className="form-label">Kontakt Nummer</label>
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
              <label className="form-label">E-Mail Adresse</label>
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
                Datum
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
                Eine Uhrzeit auswählen
              </label>

              {timeSlots.map((slot) => (
                <div className="col-md-2 mb-4">
                  <label
                    className={`card time_card h-100 border-light shadow-sm ${
                      selectedTimeSlot === slot?.id ? "selected-card" : ""
                    } ${
                      slot?.timeSlots[0]?.status === false
                        ? "disabled-card"
                        : ""
                    }`}
                    onClick={() => handleTimeSlotChange(slot?.id, slot?.name)}
                  >
                    <div className="card-body text-center">
                      <h5 className="card-title">{slot?.name}</h5>
                    </div>
                  </label>
                </div>
              ))}
            </div>

            <div className="text-center">
              {isLoading ? (
                <button class="btn btn-success" type="button" disabled>
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Einreichen...
                </button>
              ) : (
                <button type="submit" className="btn btn-success">
                  Einreichen
                </button>
              )}
              {/* <button type="submit" className="btn btn-success">
                <div class="spinner-border text-light" role="status">
                  {/* <span class="visually-hidden">Loading...</span> */}
              {/* </div>
                Einreichen
              </button> */}
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={() => {
                  setFormData({
                    name: "",
                    contact: "",
                    email: "",
                    date: new Date(),
                    time: "",
                  });
                  setTimeSlots([]);
                  closeModal();
                }}
              >
                Schließen
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};
export default BookNowModal;
