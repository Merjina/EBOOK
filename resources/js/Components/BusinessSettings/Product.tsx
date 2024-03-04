import React from 'react'
import { Card, Col, Container, Row, Form } from 'react-bootstrap';
function Product() {
    return (
        <div>
            <Container fluid>
                <Row className="mt-3">
                    <Col md={4}>
                        <div className="product-preview">
                                <h6>SKU prefix:</h6>
                            <Form.Control className="form-control" id="basicInput" defaultValue="AS"/>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="input-group">
                            <h6>Enable Product Expiry: </h6>
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1" >
                                    <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                                </span>
                                <select className="form-select" >
                                    <option value="1"> Add item expiry </option>
                                    <option value="2">Add manufactoring date and expiry period</option>
                                </select>
                            </div>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div className="input-group">
                            <h6>On Product Expiry: </h6>
                            <div className="input-group">
                                <select className="form-select" >
                                    <option value="1"> Stop selling n days</option>
                                    <option value="2">keep selling </option>
                                </select>
                                <span className="input-group-text" id="basic-addon1" contentEditable > 0</span>

                            </div>
                        </div>

                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={4}>
                        <div className="form-check text-white">
                            <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" checked />
                            <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Enable Brands
                            </Form.Check.Label>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="form-check text-white">
                            <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" checked />
                            <Form.Check.Label className="form-check-label" htmlFor="formCheck2"> Enable Categories
                            </Form.Check.Label>
                        </div>
                    </Col>  <Col md={4}>
                        <div className="form-check text-white">
                            <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" checked />
                            <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Enable Sub-Categories
                            </Form.Check.Label>
                        </div>
                    </Col></Row>
                <Row className="mt-3">
                    <Col md={4}>
                        <div className="form-check text-white">
                            <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" checked />
                            <Form.Check.Label className="form-check-label" htmlFor="formCheck2"> Enable Price & Tax info
                            </Form.Check.Label>
                        </div>
                    </Col>
                    <Col md={4}>

                        <div className="input-group">
                            <h6>Default Unit:</h6>
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1">
                                <i className=" ri-scales-line"></i>
                                </span>
                                <select className="form-select"  >
                                    <option value="1"> Please select</option>
                                    <option value="2">Pieces</option>
                                    <option value="2">Packets</option>
                                    <option value="2">Grams</option>
                                </select>
                            </div>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div className="form-check text-white">
                            <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                            <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Enable Sub Units
                            </Form.Check.Label>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                <Col md={4}>
                        <div className="form-check text-white">
                            <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                            <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Enable Racks
                            </Form.Check.Label>
                        </div>
                    </Col> <Col md={4}>
                        <div className="form-check text-white">
                            <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                            <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Enable Row
                            </Form.Check.Label>
                        </div>
                    </Col> <Col md={4}>
                        <div className="form-check text-white">
                            <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                            <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Enable Position
                            </Form.Check.Label>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                <Col md={4}>
                        <div className="form-check text-white">
                            <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                            <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Enable Warranty
                            </Form.Check.Label>
                        </div>
                    </Col><Col md={4}>
                        <div className="form-check text-white">
                            <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                            <Form.Check.Label className="form-check-label" htmlFor="formCheck2"> Is product image required?
                            </Form.Check.Label>
                        </div>
                    </Col>

                </Row>


            </Container>

        </div>
    )
}

export default Product