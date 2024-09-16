import { Box, Typography } from "@mui/material";

export function GuestView() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", height: "200px", alignItems: "center" }}>
            <Typography variant="h6" color="textSecondary">
                Для доступа к сайту необходимо авторизоваться!
            </Typography>
        </Box>
    );
}
