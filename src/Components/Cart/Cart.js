import React from "react";
import { Fragment } from "react";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/CartSlice";

const Cart = ({ openModal, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      {cart.length > 0 ? (
        <Fragment>
          <Modal show={openModal} onHide={() => setOpen(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Shopping Bag</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {cart.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="mr-3 rounded"
                      style={{ height: "125px", width: "auto" }}
                    />
                    <div>
                      <h4 className="text-base font-weight-bold">
                        {item.name}
                      </h4>
                      <p className="text-xs">{item.text}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm">
                      Amount: <span className="ml-2">{item.amount}</span>
                    </p>
                    <p className="text-sm">
                      Single Item Price:{" "}
                      <span className="ml-2">{item.price}$</span>
                    </p>
                    <p className="text-sm">
                      Total Item Prices:{" "}
                      <span className="ml-2">{item.totalPrice}$</span>
                    </p>
                  </div>
                  <div className="mt-3">
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id={`tooltip-${index}`}>
                          Remove from Cart
                        </Tooltip>
                      }
                    >
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => dispatch(removeFromCart(item))}
                      >
                        Remove
                      </Button>
                    </OverlayTrigger>
                  </div>
                </div>
              ))}
            </Modal.Body>
            <Modal.Footer>
              <p className="text-base font-weight-bold">
                Total Price of All Products:{" "}
                <span className="ml-2">{totalPrice}$</span>
              </p>
            </Modal.Footer>
          </Modal>
        </Fragment>
      ) : (
        <Fragment>
          <Modal show={openModal} onHide={() => setOpen(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Shopping Bag</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <h1 className="text-3xl font-weight-bold">Your bag is empty</h1>
                <p className="text-base">Add some products</p>
              </div>
            </Modal.Body>
          </Modal>
        </Fragment>
      )}
    </div>
  );
};

export default Cart;
