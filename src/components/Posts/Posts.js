import React, { Component } from "react";
import NoteModal from "../NoteModal/NoteModal";
import Card from "react-bootstrap/Card";

class Posts extends Component {
  render() {
    return (
      <div>
        <Card className="text-center">
          <Card.Header>My Journal Entry 1</Card.Header>
          <Card.Body>
            <Card.Title>Note Title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              luctus dictum egestas. Sed ac felis in lectus viverra aliquet non
              sit amet ipsum. Integer quis semper nulla, sed dignissim justo.
              Suspendisse fermentum feugiat euismod. Aenean id porttitor nibh,
              vitae suscipit ante. Phasellus sodales, sem quis tincidunt
              lobortis, odio nibh iaculis neque, at pretium ante est at eros.
              Duis sit amet tincidunt ligula. Donec nec semper arcu. Morbi ex
              velit, luctus quis elit sagittis, condimentum pharetra ex. Aenean
              auctor magna eu lectus auctor consectetur. Aenean bibendum eros
              sit amet nunc porta, a ullamcorper eros suscipit. Phasellus sit
              amet massa orci. Integer iaculis blandit rutrum. Nulla lacinia
              metus ex, ac porttitor quam dictum vitae. Cras a tortor ipsum.
              Vestibulum lorem sapien, condimentum at ornare in, dapibus ac
              risus. Maecenas eget dolor eu felis faucibus consectetur in vel
              sem. Vestibulum non vehicula odio, quis rhoncus mauris. Fusce
              aliquet fringilla est, sit amet ullamcorper est ultrices et.
              Mauris quis ipsum quis nulla euismod placerat.
            </Card.Text>
            <NoteModal />
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </div>
    );
  }
}

export default Posts;
