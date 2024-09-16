import { createTheme } from "@mui/material/styles";
const COLORS = {
    BLUE: "#1976d2",
};
const themeLight = createTheme({
    palette: {
        mode: "light",
        secondary: {
            main: COLORS.BLUE,
        },
    },
});

export { themeLight };
