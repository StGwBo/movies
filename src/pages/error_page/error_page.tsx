import { Box, IconButton, Typography } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();
    const goBack = () => navigate("/");

    const textError = error instanceof Error ? error.message : "Произошла неизвестная ошибка";

    return (
        <Box
            sx={{
                mt: "50px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography variant="h3">Вот те на!</Typography>
                <Typography variant="h3" color="text.primary" sx={{ marginBottom: "20px" }}>
                    Произошла ошибка
                </Typography>
                <Typography variant="h5">{textError}</Typography>
                <Typography variant="h6">Sorry.</Typography>
            </Box>
            <Box sx={{ textAlign: "center", paddingBottom: "20px" }}>
                <IconButton onClick={goBack}>Назад </IconButton>
            </Box>
        </Box>
    );
}
