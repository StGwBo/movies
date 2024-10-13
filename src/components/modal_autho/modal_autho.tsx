import { Dialog } from "@mui/material";
import { $modal, toggleModal } from "../../redux/features/modal/modal_slice";
import { ModalEmailEntry } from "../modal_email_entry/modal_email_entry";
import { ModalTokenRequest } from "../modal_token_request/modal_token_request";
import { useUnit } from "effector-react";

function ModalAutho() {
    const [onToggleModal, { isModalOpen, activeModal }] = useUnit([toggleModal, $modal]);

    const handleCloseModal = () => {
        onToggleModal(false);
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
