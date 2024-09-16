export const STYLES = {
    CARD: {
        width: 296,
        height: 424,
        mr: 2,
        mb: 2,
        position: "relative",
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
    MEDIA: {
        opacity: 1,
        transition: "opacity 0.3s ease-in-out",
    },
    CONTENT: {
        width: "100%",
        display: "flex",
        position: "absolute",
        bottom: -10,
        padding: 0,
        pl: 2,
        backgroundColor: "rgba(0, 0, 0, 1)",
        background: "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
    },
    TEXT_TITLE: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        color: "#F5F5F5",
        maxWidth: "285px",
    },
    TEXT_RATING: {
        color: "#F5F5F5",
    },
    CARD_ACTIONS: {
        display: "flex",
        alignItems: "center",
        position: "absolute",
        top: -5,
        left: 230,
    },
    EMPTY_STYLES: {
        textDecoration: "none",
        color: "inherit",
    },
};
