import React, { useContext, useState } from "react";
import { IconButton, Typography, Toolbar, Box, AppBar } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ColorThemeContext } from "../../theme/toggle_theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link, useNavigate } from "react-router-dom";
import { ModalAutho } from "../modal_autho/modal_autho";
import { useLogout } from "../../utils/logout";
import { useUnit } from "effector-react";
import { $auth } from "../../redux/features/auth/auth_slice";
import { toggleModal } from "../../redux/features/modal/modal_slice";

function Header() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const { theme, toggleColorMode } = useContext(ColorThemeContext);

    const { authStatus } = useUnit($auth);
    const onToggleModal = useUnit(toggleModal);

    const navigate = useNavigate();
    const goBack = () => navigate("/");

    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleOpenAuthModal = () => {
        onToggleModal(true);
    };

    const logout = useLogout();
    const handleLogout = () => {
        setAnchorEl(null);
        logout();
    };

    return (
        <Box sx={{ mb: "20px" }}>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: theme.palette.secondary.main,
                }}
            >
                <Box
                    sx={{
                        maxWidth: { xs: "100%", lg: "1650px" },
                        mx: "auto",
                        width: "100%",
                        px: { xs: 2, lg: 4 },
                    }}
                >
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }} disableGutters>
                        <Typography variant="h5" component="div" sx={{ cursor: "pointer" }} onClick={goBack}>
                            Movies
                        </Typography>

                        <Box>
                            <IconButton onClick={toggleColorMode}>
                                {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                            <IconButton onClick={authStatus ? handleMenuClick : handleOpenAuthModal} color="inherit">
                                <AccountCircleIcon />
                            </IconButton>
                            <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
                                <MenuItem component={Link} to={`/user`} onClick={handleMenuClose}>
                                    Мой профиль
                                </MenuItem>
                                <MenuItem onClick={handleLogout}>Выйти</MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Box>
            </AppBar>
            <ModalAutho />
        </Box>
    );
}

export { Header };
