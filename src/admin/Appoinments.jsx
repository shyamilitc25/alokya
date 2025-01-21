import React, { useState, useEffect } from "react";
import AdminLayout from "./Layout/AdminLayout";
import "./style.css";
import { Table, Button } from "react-bootstrap";
import { useSupabase } from "../SupabaseContext";
// import { Button } from "bootstrap";
const Appoinments = () => {
  const supabase = useSupabase();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);

      const { data, error } = await supabase.from("bookings").select(`
    id, 
    client_name, 
    client_email, 
    booking_date, 
    client_mob, 
    massages(massage_name),
    slots(id, slots)
  `);

      if (error) {
        console.log(error.message);
      } else {
        setData(data);
      }
      // setLoading(false);
    };

    fetchData();
  }, [supabase]);

  return (
    <AdminLayout>
      <h1>Appoinments</h1>
      <Table striped bordered hover responsive dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Time</th>
            <th>Contact Number</th>
            <th>Massage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, i) => (
            <tr key={user?.id}>
              {console.log({ user })}
              <td>{i + 1}</td>
              <td>{user.client_name}</td>
              <td>{user.client_email}</td>
              <td>{user.booking_date}</td>
              <td>{user?.slots?.slots}</td>
              <td>{user.client_mob}</td>
              <td>{user.massages?.massage_name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/*  <p>Welcome to the admin panel!</p> */}
    </AdminLayout>
  );
};

export default Appoinments;
