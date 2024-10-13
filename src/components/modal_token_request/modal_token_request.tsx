import { getAccoutId } from "../../api/index";
import { setActiveModal, toggleModal } from "../../redux/features/modal/modal_slice";
import { Box, Button, TextField, Typography } from "@mui/material";
import { checkTokenValidity } from "../../utils/auth_utils";
import { useUnit } from "effector-react";
import { setAuthStatus } from "../../redux/features/auth/auth_slice";

function ModalTokenRequest() {
    const onSetAuthStatus = useUnit(setAuthStatus);
    const [onToggleModal, onSetActiveModal] = useUnit([toggleModal, setActiveModal]);

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const token = formJson.token as string;
        const isValidaty = await checkTokenValidity(token);

        if (isValidaty) {
            onToggleModal(false);
            onSetAuthStatus(true);

            localStorage.setItem("token", token);
            const accountId = await getAccoutId(token);
            localStorage.setItem("accountId", accountId);

            onSetActiveModal("email");
        }
    };

    const toggleModalEntry = () => {
        onSetActiveModal("email");
    };

    return (
        <Box
            sx={{
                width: 444,
                height: 203,
                padding: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
            component="form"
            onSubmit={submitForm}
        >
            <Typography variant="h6" fontWeight="bold">
                Введите токен
            </Typography>
            <TextField
                InputLabelProps={{
                    shrink: true,
                    required: false,
                }}
                autoFocus
                required
                margin="dense"
                id="token"
                name="token"
                label="Токен"
                type="text"
                fullWidth
                variant="standard"
            />
            <Box display="flex" justifyContent="flex-end" mt={2}>
                <Button onClick={toggleModalEntry}>Отмена</Button>
                <Button type="submit">Ок</Button>
            </Box>
        </Box>
    );
}

export { ModalTokenRequest };
