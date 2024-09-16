import { Header } from "./components/header/header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { GuestView } from "./components/guest_view/guest_view";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { ToggleTheme } from "./theme/toggle_theme";
import { CssBaseline } from "@mui/material";
import { selectAuth } from "./redux/features/auth/selectors";
import { checkAuthStatus } from "./redux/features/auth/auth_slice";

function App() {
    const dispatch = useAppDispatch();

    const { authStatus } = useAppSelector(selectAuth);

    const content = authStatus ? <Outlet /> : <GuestView />;

    useEffect(() => {
        dispatch(checkAuthStatus());
    }, [dispatch]);

    return (
        <ToggleTheme>
            <CssBaseline />
            <Header />
            {content}
        </ToggleTheme>
    );
}

export default App;
