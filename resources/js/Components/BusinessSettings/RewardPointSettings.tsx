import React from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap';

function RewardPointSettings(props:any) {
    return (
        <div>
            <Container fluid>
                <Row className="mt-3 ">
                    <Col md={4}>
                        <div className="form-check text-white">
                            <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                            <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Enable Reward Point
                            </Form.Check.Label>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Reward Point Display Name:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Reward Point Display Name:' />
                        </div>
                    </Col>
                    <Row className="mt-3">
                        <h3>Earning Points Settings:</h3>
                        <Col md={4}>
                            <div className="product-preview">
                                <h6>Amount spend for unit point:</h6>
                                <Form.Control className="form-control" id="basicInput" defaultValue={props.businessdetails.amount_for_unit_rp} placeholder='Amount spend for unit point:' />
                            </div>
                        </Col><Col md={4}>
                            <div className="product-preview">
                                <h6>Minimum order total to earn reward:</h6>
                                <Form.Control className="form-control" id="basicInput" defaultValue={props.businessdetails.min_order_total_for_rp}placeholder='Minimum order total to earn reward: ' />
                            </div>
                        </Col><Col md={4}>
                            <div className="product-preview">
                                <h6>Maximum points per order: </h6>
                                <Form.Control className="form-control" id="basicInput" placeholder='Maximum points per order: ' />
                            </div>
                        </Col>
                    </Row>
                </Row>
                <hr></hr>
                <h3>Redeem Points Settings:</h3>
                <Row className="mt-3 ">
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Redeem amount per unit point: </h6>
                            <Form.Control className="form-control" id="basicInput" defaultValue={props.businessdetails.redeem_amount_per_unit_rp}placeholder='Redeem amount per unit point: ' />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Minimum order total to redeem points:</h6>
                            <Form.Control className="form-control" id="basicInput" defaultValue={props.businessdetails.min_order_total_for_redeem} placeholder='Minimum order total to redeem points:' />
                        </div>
                    </Col><Col md={4}>
                        <div className="product-preview">
                            <h6>Minimum redeem point: </h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Minimum redeem point:  ' />
                        </div>   </Col>
                    <Row className='mt-3'>
                        <Col md={4}>
                            <div className="product-preview">
                                <h6>Maximum redeem point per order:  </h6>
                                <Form.Control className="form-control" id="basicInput" placeholder='Maximum redeem point per order: ' />
                            </div>
                        </Col><Col md={6}>
                            <div className="product-preview">
                                <h6>Reward Point expiry period: </h6>
                                <div className="input-group mb-3">
                                    <Form.Control className="form-control" id="basicInput" placeholder='Reward Point expiry period: ' />

                                    <span className="input-group-text" id="basic-addon1">-</span>
                                    <select className="form-select">
                                        <option value="1">Year</option>
                                        <option value="2">Moths</option>
                                    </select>
                                </div>

                            </div>
                        </Col>
                    </Row>

                </Row>

            </Container>

        </div>
    )
}

export default RewardPointSettings