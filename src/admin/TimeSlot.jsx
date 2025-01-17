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
  // Fetch time slots for the selected date
  useEffect(() => {
    const fetchTimeSlots = async () => {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      const { data, error } = await supabase.from("slots").select("*");
      // .eq("date", formattedDate);

      if (error) {
        console.error("Error fetching time slots:", error.message);
      } else {
        setTimeSlots(data);
      }
    };

    fetchTimeSlots();
  }, [selectedDate]);
  console.log({ timeSlots });
  // Toggle selection of time slots
  const handleTimeSlotSelection = (time_slot) => {
    setSelectedTimeSlots(
      (prev) =>
        prev.includes(time_slot)
          ? prev.filter((slot) => slot !== time_slot) // Deselect if already selected
          : [...prev, time_slot] // Add to selection
    );
  };
  // Mark selected slots as unavailable
  const markSlotsUnavailable = async () => {
    const formattedDate = selectedDate.toISOString().split("T")[0];

    for (let time_slot of selectedTimeSlots) {
      const { data, error } = await supabase
        .from("time_slots")
        .upsert({ date: formattedDate, time_slot, status: false }); // Mark as unavailable

      if (error) {
        console.error(`Error updating slot ${time_slot}:`, error.message);
      }
    }

    // Refresh time slots after update
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
                    <h5 className="card-title">{slot.slots}</h5>
                  </div>
                </label>
              </div>
            ))}
          </div>
          {/* {timeSlots.map((slot) => (
            <div className="col-md-2 mb-4" key={slot.time_slot}>
              <label
                className={`card time_card h-100 border-light shadow-sm ${
                  selectedTimeSlots.includes(slot.time_slot)
                    ? "selected-card"
                    : ""
                }`}
                onClick={() => handleTimeSlotSelection(slot.time_slot)}
              >
                <div
                  className={`card-body text-center ${
                    !slot.status ? "unavailable-slot" : ""
                  }`}
                >
                  <h5 className="card-title">{slot.time_slot}</h5>
                </div>
              </label>
            </div>
          ))} */}
        </div>

        <button
          className="btn btn-danger mt-4"
          onClick={markSlotsUnavailable}
          disabled={selectedTimeSlots.length === 0}
        >
          Mark as Unavailable
        </button>
      </AdminLayout>
    </>
  );
};
export default TimeSlot;
