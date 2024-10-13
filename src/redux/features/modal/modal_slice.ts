import { createEvent, createStore,  } from "effector";

const initialState = {
    isModalOpen: false,
    activeModal: "email",
};
const toggleModal = createEvent<boolean>();
const setActiveModal = createEvent<string>();


const $modal = createStore(initialState)
    .on(toggleModal, (state, isModalOpen) => ({ ...state, isModalOpen }))
    .on(setActiveModal, (state, activeModal) => ({ ...state, activeModal }));

export { $modal, toggleModal, setActiveModal };
