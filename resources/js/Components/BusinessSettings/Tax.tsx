import React from 'react'
import { Card, Col, Container, Row, Form } from 'react-bootstrap';
function Tax() {
    return (
        <div>
            <Container fluid>
                <Row className="mt-3">
                    <Col md={4}>
                        
                                <h6>Tax 1 Name:</h6>
                                <div className="input-group">
                                    <span className="input-group-text"id="basic-addon1">i</span>

                                    <Form.Control type="text" className="form-control" id="valueInput"  defaultValue="GSTIN" />
                                </div>
                            
                    </Col>
                    <Col md={4}>
                        
                                <h6>Tax 1 No:</h6>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1">i</span>

                                    <Form.Control type="text" className="form-control" id="valueInput" defaultValue="3412569900" />
                                </div>
                           
                    </Col>
                    <Col md={4}>
                       
                                <h6>Tax 2 Name:</h6>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1">i</span>

                                    <Form.Control type="text" className="form-control" id="valueInput" placeholder="GST/VAT/other" />
                                </div>
                            
                    </Col></Row>
                <Row className="mt-3">
                    <Col md={4}>
                       
                                <h6>Tax 2 No.:</h6>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1">i</span>
                                    <Form.Control type="text" className="form-control" id="valueInput" />
                                </div>
                           
                    </Col>
                    <Col md={4}>
                        <div className="form-check text-white">
                            <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1"/>                                                         
                            <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Enable inline tax in purchase and sell
                            </Form.Check.Label>
                        </div>
                    </Col>
    
                </Row>
            </Container>
        </div>
    )
}

export default Tax