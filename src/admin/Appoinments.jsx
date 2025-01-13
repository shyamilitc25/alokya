import React from "react";
import AdminLayout from "./Layout/AdminLayout";
import "./style.css";
import { Table, Button } from "react-bootstrap";
// import { Button } from "bootstrap";
const Appoinments = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "1234567890",
      date: "25-01-2025",
      time: "10:00 PM",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      contact: "1234567890",
      date: "25-01-2025",
      time: "10:00 PM",
    },
    {
      id: 3,
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "1234567890",
      date: "25-01-2025",
      time: "10:00 PM",
    },
    {
      id: 4,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      contact: "1234567890",
      date: "25-01-2025",
      time: "10:00 PM",
    },
    {
      id: 5,
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "1234567890",
      date: "25-01-2025",
      time: "10:00 PM",
    },
    {
      id: 6,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      contact: "1234567890",
      date: "25-01-2025",
      time: "10:00 PM",
    },
  ];
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
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.date}</td>
              <td>{user.time}</td>
              <td>{user.contact}</td>
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
