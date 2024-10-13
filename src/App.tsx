import { Header } from "./components/header/header";
import { Outlet } from "react-router-dom";
import { GuestView } from "./components/guest_view/guest_view";
import { ToggleTheme } from "./theme/toggle_theme";
import { CssBaseline } from "@mui/material";
import { useUnit } from "effector-react";
import { $auth } from "./redux/features/auth/auth_slice";

function App() {
    const { authStatus } = useUnit($auth);

    const content = authStatus ? <Outlet /> : <GuestView />;

    return (
        <ToggleTheme>
            <CssBaseline />
            <Header />
            {content}
        </ToggleTheme>
    );
}

export default App;
