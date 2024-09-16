import { createContext, useMemo, useState, ReactNode, FC } from "react";
import { Theme, ThemeProvider } from "@mui/material/styles";
import { themeLight } from "./theme_light";
import { themeDark } from "./theme_dark";

interface ColorThemeContext {
    toggleColorMode: () => void;
    theme: Theme;
}

export const ColorThemeContext = createContext<ColorThemeContext>({
    toggleColorMode: () => {},
    theme: themeLight,
});

const ToggleTheme: FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    const actualTheme = useMemo(() => (theme === "light" ? themeLight : themeDark), [theme]);

    const colorTheme = useMemo(
        () => ({
            toggleColorMode: () => {
                setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
            },
            theme: actualTheme,
        }),
        [actualTheme]
    );

    return (
        <ColorThemeContext.Provider value={colorTheme}>
            <ThemeProvider theme={actualTheme}>{children}</ThemeProvider>
        </ColorThemeContext.Provider>
    );
};

export { ToggleTheme };
