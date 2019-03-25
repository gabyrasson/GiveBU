import React, { Component,} from 'react';

import {
    Nav,
    Container,
    Row,
    Col,
    Button,
    Badge,
    Card,
    ListGroup,
    Table
} from 'react-bootstrap';

class Volunteer extends Component {
    render() {
        return (

            <div>
                <h1>
                    This is our volunteering page.
                </h1>

                <h2> Volunteer Now!</h2>
{/*
                <Row>
                <Button variant="primary" className="Cause 1">
                    Aids Action Committee

                    <Badge variant="light">Tue/Wed 5-6pm </Badge>
                    <span className="sr-only">Volunteering Page</span>
                </Button>

                </Row>

                <Row>
                <Button variant="primary" className="cause2">
                    Boston Center for Refugee Health and Human Rights
                    <Badge variant="light">Mon-Fri 9-5 </Badge>
                    <Badge variant="light">Boston Medical Center </Badge>
                    <Badge variant="light">90 points </Badge>
                    <span className="sr-only">Volunteering Page</span>
                </Button>;
                </Row>

                <Card>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>;

                <Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Card>;
                */}


                <Table responsive className='test'>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Committee Name</th>
                        <th>Table heading</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <Button variant="primary" className="Cause 1">
                            Aids Action Committee
                            <Badge variant="light">Tue/Wed 5-6pm </Badge>
                            <span className="sr-only">Volunteering Page</span>
                            </Button></td>

                        <td>Table cell</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>

                    </tr>
                    </tbody>
                </Table>;

            </div>

        );
    }
}

export default Volunteer;
