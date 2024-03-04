import React from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap';

function Contact() {
    return (
        <div>
            <Container fluid>
                <Row className="mt-3">
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Default credit limit:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder="Default credit limit" />
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Contact