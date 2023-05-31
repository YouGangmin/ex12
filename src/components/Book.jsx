import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Card } from "react-bootstrap";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { getDatabase, set, ref } from "firebase/database";
import { app } from "../firebaseInit";
import moment from "moment";

const Book = ({ book, history }) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const db = getDatabase(app);
  
    const uid = sessionStorage.getItem("uid");
  
    const onCart = (book) => {
      if (uid) {
        if (window.confirm(book.title + " 장바구니에 등록하시겠습니까?")) {
          const date = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
          set(ref(db, `cart/${uid}/${book.isbn}`), { ...book, date: date });
          alert("장바구니 등록 성공");
        }
      } else {
        sessionStorage.setItem("target", "/book");
        history.push("/login");
      }
    };
  
    return (
      <>
        <Button variant="primary btn-sm" onClick={handleShow}>
          보기
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{book.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>
              <Card.Body className="book">
                <img src={book.thumbnail} />
                <div>가격: {book.price}</div>
                <div>저자: {book.authors}</div>
                <hr />
                <div>{book.contents}</div>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={() => onCart(book)}>
              장바구니
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  export default withRouter(Book);