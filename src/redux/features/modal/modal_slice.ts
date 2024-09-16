import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalOpen: false,
    activeModal: "email",
};

const modalSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        toggleModal(state, action) {
            state.isModalOpen = action.payload;
        },
        setActiveModal(state, action) {
            state.activeModal = action.payload;
        },
    },
});

export const { toggleModal, setActiveModal } = modalSlice.actions;
export default modalSlice.reducer;
