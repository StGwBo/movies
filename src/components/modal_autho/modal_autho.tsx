import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { Dialog } from "@mui/material";
import { selectModal } from "../../redux/features/modal/selectors";
import { toggleModal } from "../../redux/features/modal/modal_slice";
import { ModalEmailEntry } from "../modal_email_entry/modal_email_entry";
import { ModalTokenRequest } from "../modal_token_request/modal_token_request";

function ModalAutho() {
    const dispatch = useAppDispatch();

    const { isModalOpen, activeModal } = useAppSelector(selectModal);

    const handleCloseModal = () => {
        dispatch(toggleModal(false));
    };

    const content = () => {
        if (activeModal === "email") {
            return <ModalEmailEntry />;
        } else if (activeModal === "token") {
            return <ModalTokenRequest />;
        }
    };

    return (
        <Dialog open={isModalOpen} onClose={handleCloseModal}>
            {content()}
        </Dialog>
    );
}

export { ModalAutho };
