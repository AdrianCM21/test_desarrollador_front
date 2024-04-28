import { Box, Button } from "@mui/material";
import { ExportsCsvExcel } from "./Exports-CSV-EXCEL";
import BarChartIcon from '@mui/icons-material/BarChart';
import { useModals } from "@/hooks/modals";

export const ToolbarDataGrid = ({ datos }) => {
  const { setShowUserPostGrafig } = useModals()
  return (
    <Box margin={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box>
        <ExportsCsvExcel datos={datos} />
      </Box>
      <Box>
        <Button
          startIcon={<BarChartIcon />}
          onClick={() => setShowUserPostGrafig(true)}
        >
          Generar gráfico
        </Button>
      </Box>
    </Box>
  );
};