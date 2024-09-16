import { postFavorite } from "../api";

type PropsToggleFavorite = {
    id: number;
    setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
    isFavorite: boolean;
    setIsOpenNotification: React.Dispatch<React.SetStateAction<boolean>>;
};

export const handleToggleFavorite = async ({
    id,
    setIsFavorite,
    isFavorite,
    setIsOpenNotification,
}: PropsToggleFavorite) => {
    const isError = await postFavorite(id, !isFavorite);
    setIsFavorite((isFavorite) => !isFavorite);
    if (isError.isFetchError) {
        setIsFavorite((isFavorite) => !isFavorite);
        setIsOpenNotification(true);
    }
};
