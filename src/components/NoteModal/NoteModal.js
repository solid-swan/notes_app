import React, { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";

class NoteModal extends Component {
  state = {
    show: false,
    notes: [],
    message: "",
  };

  openModal = () => {
    this.setState({ show: true });
  };
  closeModal = () => {
    this.setState({ show: false });
  };
  handleMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };
  handleNotesApi = (event) => {
    event.preventDefault();

    fetch("https://diji-notes.herokuapp.com/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: this.state.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("this is data from the db", data);
        this.setState({ message: "" });
        this.closeModal();
      });
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
            <Form onSubmit={this.handleNotesApi}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Note"
                  name={this.state.message}
                  value={this.state.message}
                  onChange={this.handleMessageChange}
                />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
              <Modal.Footer>
                <Button variant="danger" onClick={this.closeModal}>
                  Cancel
                </Button>
                <Button variant="primary" value="submit" type="submit">
                  Save
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="danger" onClick={this.closeModal}>
              Cancel
            </Button>
            <Button variant="primary">Save</Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    );
  }
}

export default NoteModal;
