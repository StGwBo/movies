import { $filter, setCurrentPage } from "../../redux/features/filter/filter_slice";
import { Pagination, Stack } from "@mui/material";
import { useUnit } from "effector-react";

function BasicPagination() {
    const onSetCurrentPage = useUnit(setCurrentPage);

    const { currentPage, totalPages } = useUnit($filter);

    const handleSortChange = (_: unknown, value: number) => {
        if (value) {
            onSetCurrentPage(value);
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
