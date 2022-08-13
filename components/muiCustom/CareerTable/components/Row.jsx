import React, { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

function Row({ row: { position, deadline, contactType, history } }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          {position}
        </TableCell>
        <TableCell width={"20%"} align="right">
          {deadline}
        </TableCell>
        <TableCell width={"20%"} align="right">
          {contactType}
        </TableCell>
        <TableCell width={"20%"} align="right">
          <Button onClick={() => setOpen(!open)}>VIEW</Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History asd
              </Typography>
              <Typography>{history}</Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
export default Row;
