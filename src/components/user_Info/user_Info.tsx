import { Box, Divider, Paper, Typography } from "@mui/material";
import { getAccountId } from "../../utils/auth_utils";
import { $auth } from "../../redux/features/auth/auth_slice";
import { useUnit } from "effector-react";

const accountId = getAccountId();

function UserInfo() {
    const { email } = useUnit($auth);

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
