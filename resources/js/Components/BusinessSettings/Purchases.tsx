import React from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap';

function Purchases() {
    return (
        <div>
            <Container fluid>
                <Row className="mt-3">
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" checked />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Enable editing product price from purchase screen
                        </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" checked />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Enable Purchase Status 
                        </Form.Check.Label>
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1"  />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Enable Lot number 
                       </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1"  />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Enable purchase order
                        </Form.Check.Label>
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Enable Purchase Requisition
                        </Form.Check.Label>
                    </div>
                </Col>
                
            </Row>
        </Container>
        </div>
  )
}

export default Purchases