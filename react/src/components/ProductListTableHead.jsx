import PropTypes from "prop-types";
import StyledTableCell from "./Mui Styled/StyledTableCell";

ProductListTableHead.propTypes = {
  columns: PropTypes.array.isRequired,
};

export default function ProductListTableHead({
  columns,
}) {
  return (
    <>
      {columns.map((col, index) => {
        return <StyledTableCell key={index} align={index ==0 ? "inherit":"right"}>{col}</StyledTableCell>;
      })}
    </>
  );
}
