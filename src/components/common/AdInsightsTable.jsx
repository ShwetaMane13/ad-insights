import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
} from "@mui/material";

const AdInsightsTable = (props) => {
  const { data, headCells, total } = props;
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState(headCells[0].id);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a[orderBy], b[orderBy])
      : (a, b) => -descendingComparator(a[orderBy], b[orderBy]);
  };

  const descendingComparator = (a, b) => {
    if (b < a) return -1;
    if (b > a) return 1;
    return 0;
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                style={headCell.style}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={() => handleRequestSort(headCell.id)}
                >
                  {headCell.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {stableSort(data, getComparator(order, orderBy)).map((row) => (
            <TableRow key={row.id}>
              <TableCell style={headCells[0].style}>
                {row.Campaigns ? row.Campaigns : row.Group}
              </TableCell>
              <TableCell style={headCells[1].style}>{row.Clicks}</TableCell>
              <TableCell style={headCells[2].style}>USD {row.Cost}</TableCell>
              <TableCell style={headCells[3].style}>
                {row.Conversions}
              </TableCell>
              <TableCell style={headCells[4].style}>
                USD {row.Revenue}
              </TableCell>
            </TableRow>
          ))}
          <TableRow style={{ backgroundColor: "#fafafa" }}>
            <TableCell style={headCells[0].style}>
              {total.Campaigns ? total.Campaigns : total.Group}
            </TableCell>
            <TableCell style={headCells[1].style}>{total.Clicks}</TableCell>
            <TableCell style={headCells[2].style}>USD {total.Cost}</TableCell>
            <TableCell style={headCells[3].style}>
              {total.Conversions}
            </TableCell>
            <TableCell style={headCells[4].style}>
              USD {total.Revenue}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdInsightsTable;
