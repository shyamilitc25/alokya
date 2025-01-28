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
  const [unselectedSlots, setUnselectedTimeSlots] = useState([]);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
  const [operation, setOperation] = useState("create");
  const fetchTimeSlots = async () => {
    const formattedDate = selectedDate.toISOString().split("T")[0];
    setSelectedTimeSlots([]);
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
  useEffect(() => {
    fetchTimeSlots();
  }, [selectedDate]);

  const handleTimeSlotSelection = (time_slot, slot_id) => {
    if (selectedTimeSlots.includes(time_slot)) {
      // Deselection logic
      setSelectedTimeSlots(
        (prevSelected) => prevSelected.filter((slot) => slot !== time_slot) // Remove from selectedTimeSlots
      );

      setUnselectedTimeSlots(
        (prevUnselected) =>
          prevUnselected.includes(slot_id)
            ? prevUnselected
            : [...prevUnselected, slot_id] // Add to unselectedTimeSlots
      );
    } else {
      // Selection logic
      setSelectedTimeSlots(
        (prevSelected) => [...prevSelected, time_slot] // Add to selectedTimeSlots
      );

      setUnselectedTimeSlots(
        (prevUnselected) => prevUnselected.filter((slot) => slot !== slot_id) // Remove from unselectedTimeSlots
      );
    }
  };
  // Toggle selection of time slots

  // const handleTimeSlotSelection = (time_slot) => {
  //   setSelectedTimeSlots((prevSelected) => {
  //     // Remove from selectedTimeSlots
  //     const updatedSelected = prevSelected.filter((slot) => slot !== time_slot);

  //     // Check if it should also be removed from repeatedTimeSlots
  //     setUnselectedSlots((prevRepeated) =>
  //       prevRepeated.includes(time_slot)
  //         ? prevRepeated.filter((slot) => slot !== time_slot)
  //         : prevRepeated
  //     );

  //     return updatedSelected;

  //     // Add to selectedTimeSlots and check for repetition
  //     setUnselectedSlots((prevRepeated) =>
  //       prevRepeated.includes(time_slot)
  //         ? prevRepeated
  //         : [...prevRepeated, time_slot]
  //     );

  //     return [...prevSelected, time_slot];
  //   });
  // };

  console.log({ selectedTimeSlots, unselectedSlots });

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
          .insert(timeSlotsToInsert, { upsert: false }); // Ensure no overwriting happens on create
        if (error) {
          console.error("Error inserting data:", error.message);
          alert("Failed to mark unavailability. Please try again.");
        } else {
          console.log("Data inserted successfully:", data);
          alert("Marked unavailability successfully!");
        }
      } else if (operation === "update") {
        // Fetch existing time slots for the selected date
        const { data: existingSlots, error: fetchError } = await supabase
          .from("time_slots")
          .select("*")
          .eq("date", formattedDate);

        if (fetchError) {
          console.error("Error fetching existing slots:", fetchError.message);
          alert("Failed to fetch existing slots. Please try again.");
          return;
        }

        // Separate slots into new, existing, and unselected (for deletion)
        const existingTimeSlots = existingSlots.map((slot) => slot.time_slot);
        const newTimeSlots = selectedTimeSlots.filter(
          (slot) => !existingTimeSlots.includes(slot)
        );

        // Delete unselected slots
        if (unselectedSlots.length > 0) {
          console.log("IDs to delete:", unselectedSlots); // Verify it's an array of IDs

          const { error: deleteError } = await supabase
            .from("time_slots")
            .delete()
            .in("id", unselectedSlots); // Pass an array of IDs

          if (deleteError) {
            console.error(
              "Error deleting unselected slots:",
              deleteError.message
            );
            alert("Failed to delete unselected slots. Please try again.");
          } else {
            console.log("Unselected slots deleted successfully.");
          }
        }

        // Insert new slots
        if (newTimeSlots.length > 0) {
          const newSlotsToInsert = newTimeSlots.map((time_slot) => ({
            date: formattedDate,
            status: false,
            time_slot: time_slot,
          }));

          const { error: insertError } = await supabase
            .from("time_slots")
            .insert(newSlotsToInsert);

          if (insertError) {
            console.error("Error inserting new slots:", insertError.message);
            alert("Failed to insert new slots. Please try again.");
            return;
          }
        }

        alert("Time slots updated successfully!");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred. Please try again.");
    }

    // Reset selected time slots and fetch updated data
    fetchTimeSlots();
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
              <div className="col-md-2 mb-4" key={slot?.id}>
                {console.log({ slot })}
                <label
                  className={`card time_card h-100 border-light shadow-sm ${
                    selectedTimeSlots.includes(slot.id) ? "selected-card" : ""
                  }`}
                  onClick={() =>
                    handleTimeSlotSelection(slot.id, slot?.timeSlots[0]?.id)
                  }
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
