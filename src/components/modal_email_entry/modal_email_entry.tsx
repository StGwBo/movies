import { setEmail } from "../../redux/features/auth/auth_slice";
import { setActiveModal, toggleModal } from "../../redux/features/modal/modal_slice";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { Box, Button, TextField, Typography } from "@mui/material";

function ModalEmailEntry() {
    const dispatch = useAppDispatch();

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const email = formJson.email as string;
        dispatch(setEmail(email));
        dispatch(setActiveModal("token"));
    };

    const toggleRequestModal = () => {
        dispatch(toggleModal(false));
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
                Запросить токен
            </Typography>
            <TextField
                InputLabelProps={{
                    shrink: true,
                    required: false,
                }}
                autoFocus
                required
                margin="dense"
                name="email"
                label="Почта"
                type="text"
                fullWidth
                variant="standard"
            />
            <Box display="flex" justifyContent="flex-end" mt={2}>
                <Button onClick={toggleRequestModal}>Отмена</Button>
                <Button type="submit">Запросить</Button>
            </Box>
        </Box>
    );
}

export { ModalEmailEntry };
