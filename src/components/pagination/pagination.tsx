import { setCurrentPage } from "../../redux/features/filter/filter_slice";
import { selectFilter } from "../../redux/features/filter/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { Pagination, Stack } from "@mui/material";

function BasicPagination() {
    const dispatch = useAppDispatch();

    const { currentPage, totalPages } = useAppSelector(selectFilter);

    const handleSortChange = (_: unknown, value: number) => {
        if (value) {
            dispatch(setCurrentPage(value));
        }
    };

    return (
        <Stack spacing={0} sx={{ width: 298, height: 80, display: "flex", alignItems: "center" }}>
            <Pagination
                siblingCount={0}
                boundaryCount={1}
                count={totalPages}
                color="primary"
                onChange={handleSortChange}
                page={currentPage}
            />
        </Stack>
    );
}

export { BasicPagination };
