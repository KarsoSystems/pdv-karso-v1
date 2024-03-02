import { Button, Container, Divider, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4">PUNTO DE VENTA KARSO</Typography>
      <br />
      <Divider />
      <br />
      <Typography variant="h5">PUNTO DE VENTA KARSO</Typography>
      <Typography variant="body1">PUNTO DE VENTA KARSO</Typography>
      <Button variant="contained" disableElevation>
        PDV
      </Button>
    </Container>
  );
}
