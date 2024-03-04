import React from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap';

function Modules() {
    return (
        <div>
            <Container fluid>
            <Row className="mt-3">
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" checked />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2"> Purchases
                        </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" checked />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Add Sale 
                        </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" checked />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2"> POS
                        </Form.Check.Label>
                    </div>
                </Col>
                </Row>
            <Row className="mt-3">
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" checked />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Stock Transfers
                        </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" checked />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Stock Adjustment 
                        </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" checked />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2"> Expenses
                        </Form.Check.Label>
                    </div>
                </Col>
            </Row><Row className="mt-3">
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" checked />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Account
                        </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Tables  
                        </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2"> Modifiers  
                        </Form.Check.Label>
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1"  />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Service staff  
                       </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1"/>
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Enable Bookings 
                        </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1"  />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2"> Kitchen (For restaurants)
                        </Form.Check.Label>
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Enable Subscription
                        </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2"> Types of service  
                        </Form.Check.Label>
                    </div>
                </Col>
                
            </Row>
        </Container>
        </div>
  )
}

export default Modules;