import { Box, Typography, useTheme } from "@mui/material";
import React, { useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Button from '@mui/material/Button';
import Header from "../../components/Header";


const Contacts = () => {
 
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "ID",
      headerName: "ID",
      flex: 2,
      cellClassName: "name-column--cell",
    },
    {
      field: "size",
      headerName: "size",
      flex: 2,
      cellClassName: "name-column--cell",
    },
    {
      field: "temps",
      headerName: "temps ",
      type: "String",
      headerAlign: "left",
      align: "left",
      flex: 2,
    },
    {
      field: "TTL ",
      headerName: "TTL  ",
      type: "String",
      headerAlign: "left",
      align: "left",
      flex: 2,
    },
     
    {
      field: "timestamp",
      headerName: "timestamp",
      flex: 2,
    },
    
    
  ];
 

  return (
    <Box m="20px">
      <Header  subtitle="Historique de ping  " />
        
      
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataContacts} columns={columns} />
      </Box>
    </Box>
  );
};

export default Contacts;
