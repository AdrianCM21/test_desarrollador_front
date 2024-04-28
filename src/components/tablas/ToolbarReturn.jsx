import { ArrowBack } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useRouter } from 'next/router';

export const ToolbarReturn = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Box margin={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box marginX={2}>
        <ArrowBack onClick={handleBackClick} style={{ cursor: 'pointer' }} />
      </Box>
    </Box>
  );
};