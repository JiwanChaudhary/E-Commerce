import { Button, Container } from "@mui/material";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = ("Mui Ecommerce");
  }, []);
  return (
    <div className="App">
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <Button variant="contained">Test</Button>
      </Container>
    </div>
  );
}

export default App;
