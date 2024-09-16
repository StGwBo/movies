import { Box, Divider, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/features/auth/selectors";
import { getAccountId } from "../../utils/auth_utils";

const accountId = getAccountId();

function UserInfo() {
    const { email } = useSelector(selectAuth);

    return (
        <Paper
            sx={{
                width: "350px",
                height: "300px",
                padding: 3,
                borderRadius: 2,
                boxShadow: 3,
            }}
        >
            <Typography variant="h5" component="div" sx={{ mb: 2, textAlign: "center" }}>
                Профиль
            </Typography>
            <Divider sx={{ mb: 1 }} />
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <Typography variant="h6">
                    Почта: <strong>{email}</strong>
                </Typography>
                <Typography variant="h6">
                    ID: <strong>{accountId}</strong>
                </Typography>
            </Box>
        </Paper>
    );
}

export { UserInfo };
