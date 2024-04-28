import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import { GraficoBarrasUsersPosts } from "../modals/GraficoBarrasUsersPosts";


export const RootLayout = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <GraficoBarrasUsersPosts />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Administrador de Usuarios
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ marginTop: 3 }}>{children}</Box>
      </Container>
    </Box>
  );
}