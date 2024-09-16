export const STYLES = {
    CONTAINER: {
        display: "flex",
        justifyContent: "flex-end",
        flexWrap: "wrap",
        height: "432px",
        width: "600px",
    },
    CARDMEDIA: {
        position: "relative",
        height: "200px",
        width: "150px",
        mr: "10px",
        transition: "transform 0.3s ease",
        "&:hover": {
            filter: "grayscale(0%) brightness(105%)",
            boxShadow: "0px 4px 8px rgba(5, 5, 5, 0.50)",
            transform: "scale(1.02)",
        },
    },
    IMAGE_LOADER_OVERLAY: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "lightgray",
        zIndex: 1,
    },
    BOX: {
        height: "200px",
        width: "150px",
        mr: "10px",
        position: "relative",
    },
};
