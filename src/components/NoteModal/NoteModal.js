import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class NoteModal extends Component {
  state = {
    show: false,
    notes: [],
  };

  openModal = () => {
    this.setState({ show: true });
  };
  closeModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.openModal}>
          Edit Entry
        </Button>

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
            <Button variant="danger" onClick={this.closeModal}>
              Cancel
            </Button>
            <Button variant="primary">Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default NoteModal;
