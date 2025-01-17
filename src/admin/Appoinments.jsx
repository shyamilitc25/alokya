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
    massages(id, massage_name)
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.client_name}</td>
              <td>{user.client_email}</td>
              <td>{user.booking_date}</td>
              <td>{"Time to be implemented"}</td>
              <td>{user.client_mob}</td>
              <td>
                <Button>Approve</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/*  <p>Welcome to the admin panel!</p> */}
    </AdminLayout>
  );
};

export default Appoinments;
