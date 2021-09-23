import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class NoteModal extends Component {
  state = {
    show: false,
    notes: [],
  };
  closeModal = () => {};

  render() {
    return (
      <div>
        <Button variant="primary">Edit Entry</Button>

        <Modal
          show={this.state.show}
          onHide={this.closeModal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default NoteModal;
