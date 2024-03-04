import React from 'react'
import { Card, Col, Container, Row, Form } from 'react-bootstrap';
function System(props:any) {
    return (
        <div>
            <Container fluid>
            <Row className='mt-3'>
                <Col md={4}>
                    <div className="input-group">
                        <h6>Theme Color</h6>
                        <div className="input-group">
                        <select className="form-select" defaultValue="{props.theme_colors}">
                                    <option value="">Please select</option>
                                    {props.theme_color && Object.keys(props.theme_color).map(id => (
                                        <option key={id} value={id}>
                                            {props.theme_color[id]}
                                        </option>
                                    ))}
                                </select>
                        </div>
                    </div>
                </Col><Col md={4}>
                    <div className="input-group">
                        <h6> Default datatable page entries</h6>
                        <div className="input-group">
                            <select className="form-select"  >
                                <option value="1">25</option>
                                <option value="2">50</option>
                                <option value="3">100 </option>
                                <option value="4">200 </option>
                                <option value="5">500 </option>
                                <option value="6">1000</option>
                            </select>
                        </div>
                    </div>
                </Col> <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" checked />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Show help text
                        </Form.Check.Label>
                    </div>
                </Col>
            </Row>
            </Container></div>
    )
}

export default System