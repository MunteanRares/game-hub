import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/navBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem hideBelow="lg" area="aside">
        Nav
      </GridItem>

      <GridItem area="main">Nav</GridItem>
    </Grid>
  );
}

export default App;
