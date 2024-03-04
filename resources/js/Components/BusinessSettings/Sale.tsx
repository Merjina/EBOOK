import React from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';

function Sale(props: any) {
    return (
        <div>
            <Container fluid>
                <Row className="mt-3">
                    <Col md={4}>
                        <h6>Default Sale Discount:</h6>
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">%</span>
                            <Form.Control type="number" className="form-control" />
                        </div>
                    </Col>
                    <Col md={4}>

                        <div className="input-group">
                            <h6>Default Sale Tax:</h6>
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1">

                                </span>
                                <select className="form-select"  >
                                    <option value="1">None</option>
                                    <option value="2">VAT@10%</option>
                                    <option value="2">CGST@10%</option>
                                    <option value="2">SGST@10%</option>
                                </select>
                            </div>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div className="input-group">
                            <h6>Sales Item Addition Method:</h6>
                            <div className="input-group">
                                <select className="form-select"  >
                                    <option value="1"> Increse item quantity if it already exist</option>
                                    <option value="2">Additem in new row </option>
                                </select>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col md={4}>
                        <div className="input-group">
                            <h6>Amount rounding method: </h6>
                            <div className="input-group">
                                <select className="form-select"  >
                                    <option value="1"> None</option>
                                    <option value="2">Round to nearest whole number </option>
                                    <option value="2">Round to nearest decimal(multiple of 0.05) </option>
                                    <option value="2">Round to nearest decimal(multiple of 0.1) </option>
                                    <option value="2">Round to nearest decimal(multiple of 0.5)</option>
                                </select>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="form-check text-white">
                            <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                            <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Sales price is minimum selling price
                            </Form.Check.Label>
                        </div>
                    </Col><Col md={4}>
                        <div className="form-check text-white">
                            <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                            <Form.Check.Label className="form-check-label" htmlFor="formCheck2"> Allow Overselling
                            </Form.Check.Label>
                        </div>
                    </Col></Row>
                <Row className='mt-3'><Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Enable Sales Order
                        </Form.Check.Label>
                    </div>
                </Col><Col md={4}>
                        <div className="form-check text-white">
                            <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                            <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Is pay term required?
                            </Form.Check.Label>
                        </div>
                    </Col></Row>
                <hr></hr><h3>Commission Agent:</h3>
                <Row className='mt-3'>
                    <Col md={4}>

                        <div className="input-group">
                            <h6>Sales Commission Agent:</h6>
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1">i
                                </span>
                                <select className="form-select" defaultValue="{props.commission_agent_dropdown}">
                                    <option value=""></option>
                                    {props.commission_agent && Object.keys(props.commission_agent).map(id => (
                                        <option key={id} value={id}>
                                            {props.commission_agent[id]}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                    </Col>
                    <Col md={4}>

                        <div className="input-group">
                            <h6>Commission Calculation Type:</h6>
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1">

                                </span>
                                <select className="form-select"  >
                                    <option value="1">Invoice value</option>
                                    <option value="2">Payment received</option>
                                </select>
                            </div>
                        </div>

                    </Col><Col md={4}>
                        <div className="form-check text-white">
                            <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                            <Form.Check.Label className="form-check-label" htmlFor="formCheck2"> Is commission agent required?
                            </Form.Check.Label>
                        </div>
                    </Col></Row><hr></hr>
                    <h3>Payment link</h3>
                    <Row className='mt-3'>
                    <Col md={4}>
                        <div className="form-check text-white">
                            <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                            <Form.Check.Label className="form-check-label" htmlFor="formCheck2"> Enable payment link
                            </Form.Check.Label>
                        </div>
                    </Col>
                    </Row>
                    <h3 className='mt-3'>Razorpay:</h3><span className='text-muted text-small'>(For INR India)</span>
                    <Row className="mt-3">
                    <Col md={4}>
                        <div className="product-preview">
                                <h6>Key ID:</h6>
                            <Form.Control className="form-control" id="basicInput" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                                <h6>Key Secret:</h6>
                            <Form.Control className="form-control" id="basicInput" />
                        </div>
                    </Col>
                    </Row>
                    <h3 className='mt-3'>Stripe:</h3>
                    <Row className="mt-3">
                    <Col md={4}>
                        <div className="product-preview">
                                <h6>Stripe public key:</h6>
                            <Form.Control className="form-control" id="basicInput" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                                <h6>Stripe secret key:</h6>
                            <Form.Control className="form-control" id="basicInput" />
                        </div>
                    </Col>
                    </Row>
            </Container>
        </div>
    );
}

export default Sale;
