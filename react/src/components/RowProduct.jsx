import PropTypes from "prop-types";

import StyledTableCell from "./Mui Styled/StyledTableCell";
import StyledTableRow from "./Mui Styled/StyledTableRow";
import DeleteButton from "./RowProduct/DeleteButton";
import EditButton from "./RowProduct/EditButton";

RowProduct.propTypes = {
  product: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default function RowProduct({ product, handleDelete, handleUpdate }) {
  return (
    <StyledTableRow key={product.id}>
      <StyledTableCell>{product.id}</StyledTableCell>
      <StyledTableCell align="right">{product.name}</StyledTableCell>
      <StyledTableCell align="right">{product.price}</StyledTableCell>
      <StyledTableCell align="right">{product.summary}</StyledTableCell>
      <StyledTableCell align="right">
        <img src={product.img_url} style={{ width: "10%", height: "10%" }} />
      </StyledTableCell>
      <StyledTableCell align="right">
        <DeleteButton product={product} handleDelete={handleDelete} />
      </StyledTableCell>
      <StyledTableCell align="right">
        <EditButton product={product} handleUpdate={handleUpdate} />
      </StyledTableCell>
    </StyledTableRow>
  );
}
