import React, { useState, useEffect } from "react";
import AdminLayout from "./Layout/AdminLayout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { Table, Button } from "react-bootstrap";
import { useSupabase } from "../SupabaseContext";
const TimeSlot = () => {
  const supabase = useSupabase();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
  const [operation, setOperation] = useState("create");
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
          .eq("time_slots.date", formattedDate); // Filter by the selected date

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
              if (Object.keys(timeSlot).length !== 0) {
                setOperation("update");
              }
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
  }, [selectedDate]);

  console.log({ operation });
  // Toggle selection of time slots
  const handleTimeSlotSelection = (time_slot) => {
    setSelectedTimeSlots(
      (prev) =>
        prev.includes(time_slot)
          ? prev.filter((slot) => slot !== time_slot) // Deselect if already selected
          : [...prev, time_slot] // Add to selection
    );
  };

  const markSlotsUnavailable = async (e) => {
    const formattedDate = selectedDate.toISOString().split("T")[0];
    const timeSlotsToInsert = selectedTimeSlots.map((time_slot) => ({
      date: formattedDate,
      status: false,
      time_slot: time_slot,
    }));
    try {
      if (operation === "create") {
        const { data, error } = await supabase
          .from("time_slots") // Replace with your table name
          .insert(timeSlotsToInsert);
        if (error) {
          console.error("Error inserting data:", error.message);
          alert("Failed to mark unavailability. Please try again.");
        } else {
          console.log("Data inserted successfully:", data);
          alert("Maeked unavailability successfully!");
        }
      } else {
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred. Please try again.");
    }

    setSelectedTimeSlots([]);
    const { data, error } = await supabase
      .from("time_slots")
      .select("*")
      .eq("date", formattedDate);

    if (!error) setTimeSlots(data);
  };
  return (
    <>
      <AdminLayout>
        <h1>Time Slot</h1>

        <div>
          <label>Select Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
          {/* <div className="time-slots">
            {timeSlots.map((slot) => (
              <div
                key={slot.time_slot}
                style={{ display: "flex", margin: "5px" }}
              >
                <span style={{ width: "100px" }}>{slot.time_slot}</span>
                <button
                  onClick={() => toggleSlot(slot.time_slot, !slot.status)}
                  style={{
                    background: slot.status ? "green" : "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  {slot.status ? "Available" : "Disabled"}
                </button>
              </div>
            ))}
          </div> */}
          <div className="row justify-content-center">
            <label className="form-label" htmlFor="datePicker">
              Select a slot
            </label>
            {timeSlots.map((slot) => (
              <div className="col-md-2 mb-4">
                <label
                  className={`card time_card h-100 border-light shadow-sm ${
                    selectedTimeSlots.includes(slot.id) ? "selected-card" : ""
                  }`}
                  onClick={() => handleTimeSlotSelection(slot.id)}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">{slot.name}</h5>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <button
          className="btn btn-danger mt-4"
          onClick={(e) => markSlotsUnavailable(e)}
          disabled={selectedTimeSlots.length === 0}
        >
          Mark as Unavailable
        </button>
      </AdminLayout>
    </>
  );
};
export default TimeSlot;
