import React from 'react'
import { Col, Container, Row, Form, } from 'react-bootstrap';
function Payment() {
    return (
        <div>
            <Container fluid>
                <Row className="mt-3">
                    <Col md={4}>
                        <div className="business-preview">
                            <Form.Label htmlFor="basicInput" className="form-label"><h6>Cash Denominations:</h6></Form.Label>
                            <Form.Control className="form-control-sm" id="basicInput" />
                            <p className='mt-2'>Comma separated values Example: 100,200,500,2000</p>
                        </div>

                    </Col></Row>
                <Row className='mt-3'>
                    <Col md={4}>
                        <div className="input-group">
                            <h6>Enable cash denomination on:</h6>
                            <div className="input-group">
                                <select className="form-select"  >
                                    <option value="1"> POS screen</option>
                                    <option value="2">All screen </option>
                                </select>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="input-group">
                            <h6>Enable cash denomination for payment methods:</h6>
                            <div className="input-group">
                                <select className="form-select"  >
                                    <option value="1"> Cash</option>
                                    <option value="2">Card</option>
                                    <option value="3"> Cheque</option>
                                    <option value="4"> Bank transfer</option>
                                    <option value="5"> Custom Payment 1</option>
                                    <option value="6"> Custom Payment 2</option>
                                    <option value="7"> Custom Payment 3</option>
                                    <option value="8"> Custom Payment 4</option>
                                    <option value="9"> Custom Payment 5</option>
                                    <option value="10"> Custom Payment 6</option>
                                    <option value="11"> Custom Payment 7</option>
                                </select>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1"  />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Strict check
                        </Form.Check.Label>
                    </div>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Payment