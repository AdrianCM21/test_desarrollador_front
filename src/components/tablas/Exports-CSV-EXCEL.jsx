import { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { styled } from '@mui/system';
import ExportOutlined from '@mui/icons-material/ImportExport';
import CsvIcon from '@mui/icons-material/AttachFile';
import ExcelIcon from '@mui/icons-material/TableChart';
import { downloadCSV, downloadExcel } from '@/services/Downloads.service';
import { formatedTable } from '@/utils/formateds/formatedTable';



const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  textAlign: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1),
}));

export const ExportsCsvExcel = ({ datos }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExportCsv = async (datos) => {
    const data = formatedTable(datos)
    downloadCSV(data);
    handleClose();
  };

  const handleExportExcel = async () => {
    const data = formatedTable(datos)
    downloadExcel(data);
    handleClose();
  };

  return (
    <>
      <Button color="primary" startIcon={<ExportOutlined />} onClick={handleOpen}>
        Exportar
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <StyledDialogTitle>
          <Typography variant="h6" component="div">
            Seleccionar formato de exportación
          </Typography>
          <Typography variant="subtitle1" component="div">
            El archivo exportado reflejará el estado actual de la tabla:
          </Typography>
        </StyledDialogTitle>
        <DialogContent>
          <Box paddingTop={2} display="flex" flexDirection="column" alignItems="center">

            <Box paddingTop={2} display="flex" justifyContent="center">
              <StyledButton variant="contained" startIcon={<CsvIcon />} onClick={() => handleExportCsv(datos)}>
                Exportacion en CSV
              </StyledButton>
              <StyledButton variant="contained" startIcon={<ExcelIcon />} onClick={handleExportExcel}>
                Exportacion en XLSX
              </StyledButton>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <StyledButton onClick={handleClose} color='inherit'>Cancelar</StyledButton>
        </DialogActions>
      </Dialog>
    </>
  );
};