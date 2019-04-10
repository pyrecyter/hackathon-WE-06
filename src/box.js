import React, { Component } from 'react';
import logo from './logo.svg';
import {Card, Button} from 'react-bootstrap';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";


class box extends Component {
  render() {
    return (<div align="center"> 
      <table cellPadding="30"><th><tr><td>
    <Card style={{ width: '18rem' }}>
    <MDBView>
              <img className="d-block w-100" src="http://www.momeomagazine.com/wp-content/uploads/2014/04/Traveling-With-Kids-Airplane.jpeg" alt="First slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
  <Card.Body>
    <Card.Title>Family</Card.Title>
    <Card.Text>
      This is category for group who are Traveling as a family
    </Card.Text>
    <Button variant="primary">Explore</Button>
  </Card.Body>
</Card>

</td></tr><th></th></th>
<th><tr><td>
<Card style={{ width: '18rem' }}>
<MDBView>
              <img className="d-block w-100" src="https://www.consumerguide.sg/wp-content/uploads/Couple-travelling-flipped.jpg" alt="Second slide" />
              <MDBMask overlay="black-light" />
            </MDBView>

<Card.Body>
  <Card.Title>Couples</Card.Title>
  <Card.Text>
    This contet is for couples who love to explore Sri Lanka 
  </Card.Text>
  <Button variant="primary">Explore</Button>
</Card.Body>
</Card>

</td></tr><th></th></th>
<th><tr><td>
<Card style={{ width: '18rem' }}>
<MDBView>
              <img className="d-block w-100" src="https://media.self.com/photos/5b048339fb856d7d3d02375d/4:3/w_752,c_limit/first-backpacking-trip.jpg" alt="Therid slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
<Card.Body>
  <Card.Title>Backpackers</Card.Title>
  <Card.Text>
  If you are a backpacker who like adventure this is for you
  </Card.Text>
  <Button variant="primary">Explore</Button>
</Card.Body>
</Card>

</td></tr><th></th></th><tr></tr>
<th><tr><td>
<Card style={{ width: '18rem' }}>
<MDBView>
              <img className="d-block w-100" src="http://www.allconsuming.net/wp-content/uploads/2017/02/grandparents-1054311_640.jpg" alt="Forth slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
<Card.Body>
  <Card.Title>Senior Citizen</Card.Title>
  <Card.Text>
    This is for the elders to enjoy there lessure time 
  </Card.Text>
  <Button variant="primary">Explore</Button>
</Card.Body>
</Card>

</td></tr><th></th></th>
<th><tr><td>
<Card style={{ width: '18rem' }}>
<MDBView>
              <img className="d-block w-100" src="https://www.familyvacationcritic.com/uploads/sites/19/2015/04/safetytipsforteentravel.jpg" alt="First slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
<Card.Body>
  <Card.Title>Teens</Card.Title>
  <Card.Text>
    If you are a group of teens wants to spend time in sri lanka, this is fot you 
  </Card.Text>
  <Button variant="primary">Explore</Button>
</Card.Body>
</Card>

</td></tr></th></table>
</div>
  
    );
  }
}

export default box;
