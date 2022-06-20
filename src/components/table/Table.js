import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./table.css";

const ListTable = () => {
  const rows = [
    {
      id: 123456798,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/61dcxWBw+HL._AC_SL1056_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "approved",
    },
    {
      id: 145646548,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/71IPIlodJSL._AC_SL1500_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 500,
      method: "Online Payment",
      status: "pending",
    },
    {
      id: 122525728,
      product: "Razer Blade 14 Gaming Laptop",
      img: "https://m.media-amazon.com/images/I/611VQf95rxL._AC_SL1500_.jpg",
      customer: "Jane Doe",
      date: "1 March",
      amount: 920,
      method: "Online Payment",
      status: "approved",
    },
    {
      id: 122555728,
      product: "ASUS ROG Strix G15 (2021) Advantage Edition",
      img: "https://m.media-amazon.com/images/I/71LTfKsKDHS._AC_SL1500_.jpg",
      customer: "Jane Doe",
      date: "1 March",
      amount: 920,
      method: "Online Payment",
      status: "approved",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table-cell">Tracking ID</TableCell>
            <TableCell className="table-cell">Product</TableCell>
            <TableCell className="table-cell">Customer</TableCell>
            <TableCell className="table-cell">Date</TableCell>
            <TableCell className="table-cell">Amount</TableCell>
            <TableCell className="table-cell">Payment Method</TableCell>
            <TableCell className="table-cell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="table-cell">
                <div className="cell-wrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="table-cell">{row.customer}</TableCell>
              <TableCell className="table-cell">{row.date}</TableCell>
              <TableCell className="table-cell">{row.amount}</TableCell>
              <TableCell className="table-cell">{row.method}</TableCell>
              <TableCell className="table-cell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListTable;
