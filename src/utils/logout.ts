import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../redux/store/store";
import { resetFilters } from "../redux/features/filter/filter_slice";
import { setAuthStatus } from "../redux/features/auth/auth_slice";

export const useLogout = () => {
    const navigate = useNavigate();

    return (dispatch: AppDispatch) => {
        localStorage.removeItem("token");
        localStorage.removeItem("accountId");

        dispatch(resetFilters());
        dispatch(setAuthStatus(false));

        navigate("/");
    };
};
