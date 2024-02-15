import { Box, Typography, useTheme } from "@mui/material";
import React, { useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Button from '@mui/material/Button';
import Header from "../../components/Header";
import Form from "../ping";
import { Link } from 'react-router-dom';

const Team = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "Nom",
      headerName: "Nom",
      flex: 2,
      cellClassName: "name-column--cell",
    },
    {
      field: "Type ",
      headerName: "Type  ",
      type: "String",
      headerAlign: "left",
      align: "left",
      flex: 2,
    },
    {
      field: "AdresseIp ",
      headerName: "AdresseIp  ",
      type: "String",
      headerAlign: "left",
      align: "left",
      flex: 2,
    },
     
    {
      field: "Emplacement",
      headerName: "Emplacement",
      flex: 2,
    },
    {
      field: "Etat",
      headerName: "Etat",
      flex: 2,
    },
    {
      field: "Actions",
      headerName: "Actions",
      flex: 3.5,
      renderCell: (params) => {
        
        return (
          <Box display="flex" justifyContent="end" mt="5px">
          
          <Button onClick={() => handleButton1Click(params.row)} color="secondary" variant="contained" size="5px">
              Modifier 
            </Button>
      
            <Button onClick={() => handleButton2Click(params.row)} color="secondary" variant="contained" size="5px">
              Supprimer
            </Button>
            <Button onClick={() => handleButton3Click(params.row)} color="secondary" variant="contained"size="5px">
              Ping
            </Button>
          </Box>
        );
      },
    
      
    },
  ];
  const handleButton1Click = (row) => {
    // Logique pour gérer l'action du bouton 1 ici
  };
  
  const handleButton2Click = (row) => {
    // Logique pour gérer l'action du bouton 2 ici
  };
  
  
  const handleButton3Click = (row) => {
    axios.post('/api/ping', { ip: row.AdresseIp })
      .then(response => {
        console.log('Ping result:', response.data); // Vous pouvez gérer la réponse comme nécessaire
      })
      .catch(error => {
        console.error('Error pinging:', error);
      });
  };
  return (
    <Box m="20px">
      <Header title="EQUIPEMENT" subtitle="LISTE D'EQUIPEMNT " />
         {/* Bouton pour ouvrir le formulaire */}
         <Box display="flex" justifyContent="end" mb="20px">
         <Link to="/equip" style={{ textDecoration: 'none' }}>
        <Button onClick={handleAddButtonClick} color="secondary" variant="contained">
          Ajouter un équipement
        </Button>
        </Link>
      </Box>
      {isFormOpen && <Form />}
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
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
