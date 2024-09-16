import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

const selectModalIsOpen = (state: RootState) => state.modal.isModalOpen;
const selectModalActive = (state: RootState) => state.modal.activeModal;

const selectModal = createSelector([selectModalIsOpen, selectModalActive], (isModalOpen, activeModal) => ({
    isModalOpen,
    activeModal,
}));

export { selectModal };
