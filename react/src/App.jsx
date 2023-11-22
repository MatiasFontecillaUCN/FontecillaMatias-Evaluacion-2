import {
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableBody,
} from "@mui/material";
import { Paper } from "@mui/material";
import { useState, useEffect } from "react";

import agent from "./agent";

import RowProduct from "./components/RowProduct";
import ProductListTableHead from "./components/ProductListTableHead";
import AddProductButton from "./components/AddProductButton";

const columns = [
  "ID",
  "Name",
  "Price",
  "Description",
  "Image",
  "Delete",
  "Edit",
];

export default function ListPage() {
  const [displayedProducts, setDisplayedProducts] = useState(null);

  const handleDelete = (id) => {
    agent.endpoints
      .delete(id)
      .then(() => {
        // console.log("Eliminado con éxito");
        agent.endpoints.read().then((data) => {
          setDisplayedProducts(data);
        });
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        // console.log(error);
      });
  };

  const handleUpdate = (id, name, price, summary, imgUrl) => {
    console.log(`Name: ${name}, Price: ${price}, Summary: ${summary}, Image URL: ${imgUrl}`);
    agent.endpoints
      .update(id, name, price, summary, imgUrl)
      // eslint-disable-next-line no-unused-vars
      .then(() => {
        agent.endpoints
          .read()
          .then((data) => {
            setDisplayedProducts(data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        // console.log("Error ", error);
      });
  };

  const handleCreate = (name, price, summary, imgUrl) => {
    agent.endpoints
      .create(name, price, summary, imgUrl)
      .then((response) => {
        console.log(response)
        console.log(`Name: ${name}, Price: ${price}, Summary: ${summary}, Image URL: ${imgUrl}`);
        agent.endpoints
          .read()
          .then((data) => {
            console.log(data);
            setDisplayedProducts(data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => console.log(error))
      .catch(() => {});
    agent.endpoints.read().then((data) => {
      setDisplayedProducts(data);
    });
  };

  useEffect(() => {
    agent.endpoints
      .read()
      .then((data) => {
        setDisplayedProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg">
      <TableContainer
        sx={{
          minWidth: 700,
          maxHeight: 500,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          opacity: 0.8,
          marginLeft:"3%",
        }}
        component={Paper}
      >
        <Table stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              <ProductListTableHead columns={columns} />
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedProducts &&
              displayedProducts.map((product) => {
                return (
                  <RowProduct
                    key={product.id}
                    product={product}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                  />
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <AddProductButton handleCreate={handleCreate} />
    </div>
  );
}
