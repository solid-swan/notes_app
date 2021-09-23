import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Posts from "./components/Posts/Posts";
import CardPosts from "./components/CardPosts/CardPosts";
import SideBar from "./components/SideBar/SideBar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div>
      <Navigation />
      <Container>
        <Row>
          <Col>
            <SideBar />
          </Col>
          <Col xs={10}>
            <Switch>
              <Route exact path="/apples">
                <Posts />
                <CardPosts />
              </Route>
              <Route exact path="/oranges">
                <p>This is the oranges page</p>
              </Route>
            </Switch>
          </Col>
          <Col>3 of 3</Col>
        </Row>
        {/* <Row>
          <Col>1 of 3</Col>
          <Col xs={5}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default App;
