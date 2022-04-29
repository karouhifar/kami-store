import React from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { deleteToken } from "./redux/actions/auth";
import { filteredProducts } from "./redux/actions/product";
export default function Header() {
  const dispatcher = useDispatch();
  const history = useHistory();
  const category = useSelector((state) => state.category.category);
  const categoryID = useSelector((state) => state.categoryID.id);
  const filterProduct = (filteredString) => {
    dispatcher(filteredProducts(filteredString));
  };
  let authTokenJWTState = useSelector((state) => state.AuthToken);

  return (
    <Navbar bg="light" expand="lg" className="mb-5">
      <Container fluid className="mx-5">
        <Navbar.Brand to="/">
          <img
            alt="icon"
            src="../../icon/apple-icon-152x152.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <span style={{ verticalAlign: "sub" }}>Kami Store</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {authTokenJWTState?.token ? (
            <>
              <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <NavLink to="/">Home</NavLink>
              </Nav>
              {!categoryID ? (
                <>
                  {category && (
                    <>
                      <Nav className="my-2 my-lg-0" navbarScroll>
                        <NavLink to="/category/CategoryForm">
                          Add Category
                        </NavLink>
                      </Nav>

                      <NavDropdown
                        style={{ color: "black" }}
                        title="Category Lists"
                      >
                        <NavDropdown.Item onClick={() => filterProduct(null)}>
                          All Categories
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        {category?.map((category) => (
                          <div key={category.categoryId}>
                            <NavDropdown.Item
                              onClick={() =>
                                filterProduct(category.categoryName)
                              }
                            >
                              {category.categoryName}
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                          </div>
                        ))}
                      </NavDropdown>
                      <Nav className="my-2 my-lg-0" navbarScroll>
                        <NavLink to="/login">
                          <span
                            onClick={() => {
                              dispatcher(deleteToken());
                              history.push("/login");
                            }}
                          >
                            sign out
                          </span>
                        </NavLink>
                      </Nav>
                    </>
                  )}
                </>
              ) : (
                <>
                  <Nav>
                    <NavLink to={`/category/${categoryID}/addProduct`}>
                      Add Product
                    </NavLink>
                  </Nav>
                </>
              )}
            </>
          ) : (
            <>
              <Nav className="me-5 ms-auto my-2 my-lg-0" navbarScroll>
                <NavLink to="/login">login</NavLink>
              </Nav>
              <Nav className=" my-2 my-lg-0" navbarScroll>
                <NavLink to="/register">register</NavLink>
              </Nav>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
