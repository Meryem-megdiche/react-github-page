import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Button from '@mui/material/Button';
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "Nom",
      headerName: "Nom",
      flex: 2,
      cellClassName: "name-column--cell",
    },
    {
      field: "type ",
      headerName: "type  ",
      type: "String",
      headerAlign: "left",
      align: "left",
      flex: 2,
    },
    {
      field: "Département",
      headerName: "Département",
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
              modifier
            </Button>
            <Button onClick={() => handleButton2Click(params.row)} color="secondary" variant="contained" size="5px">
              supprimer
            </Button>
            <Button onClick={() => handleButton3Click(params.row)} color="secondary" variant="contained"size="5px">
              Historique 
              Activité
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
    // Logique pour gérer l'action du bouton 3 ici
  };

  return (
    <Box m="20px">
      <Header title="EQUIPEMENT" subtitle="LISTE D'EQUIPEMNT " />
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
