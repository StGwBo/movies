import { useNavigate } from "react-router-dom";
import { resetFilters } from "../redux/features/filter/filter_slice";
import { setAuthStatus } from "../redux/features/auth/auth_slice";
import { useUnit } from "effector-react";

export const useLogout = () => {
    const navigate = useNavigate();
    const onSetAuthStatus = useUnit(setAuthStatus);
    const onResetFilters = useUnit(resetFilters);

    return () => {
        localStorage.removeItem("token");
        localStorage.removeItem("accountId");

        onResetFilters();
        onSetAuthStatus(false);

        navigate("/");
    };
};
