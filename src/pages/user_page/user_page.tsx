import { Box } from "@mui/material";
import { UserInfo } from "../../components/user_Info/user_Info";
import { UserFavorites } from "../../components/user_favorites/user_favorites";

function UserPage() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: { xs: "100%", lg: "1650px" },
                mx: "auto",
                width: "100%",
                px: { xs: 2, lg: 4 },
            }}
        >
            <UserInfo />
            <UserFavorites />
        </Box>
    );
}

export { UserPage };
