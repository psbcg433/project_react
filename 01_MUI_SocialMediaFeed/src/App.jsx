import { Box, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";


import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";
import { useMemo ,useState} from "react";

function App() {

  const [mode,setMode] = useState("light");
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  const theme = useMemo(()=>
  {
    return mode === "light" ? lightTheme : darkTheme;
  })

  return (
    <ThemeProvider theme={theme}>
    <Box
      sx={{
        overflow: "hidden",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Navbar />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Sidebar toggleTheme = {toggleMode}  mode={mode}/>
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
    </ThemeProvider>
  );
}

export default App;
