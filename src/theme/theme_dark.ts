import { createTheme } from "@mui/material/styles";
const COLORS = {
    DARK_GREY: "#1B2327",
    CHARCOAL_GREY: "#212C38",
    BLUE: "#1976d2",
    WHITE: "#FFFFFF",
};

const themeDark = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: COLORS.BLUE,
        },
        secondary: {
            main: COLORS.CHARCOAL_GREY,
        },
        text: {
            secondary: COLORS.WHITE,
        },
        background: {
            paper: COLORS.CHARCOAL_GREY,
            default: COLORS.DARK_GREY,
        },
    },
});

export { themeDark };
