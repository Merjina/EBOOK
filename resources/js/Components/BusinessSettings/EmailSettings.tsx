import React from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap';
function EmailSettings(props:any) {
    return (
        <div>
            <Container fluid>
                <Row className="mt-3">
                    <Col md={4}>
                        <div className="input-group">
                            <h6>Mail Driver:</h6>
                            <div className="input-group">
                            <select className="form-select" defaultValue="{props.email_settings}">
                                    <option value=""></option>
                                    {props.email_setting && Object.keys(props.email_setting).map(id => (
                                        <option key={id} value={id}>
                                            {props.email_setting[id]}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Host:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Host'/>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Port:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Port:'/>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-3'> 
                   <Col md={4}>
                        <div className="product-preview">
                            <h6>Username:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Username:'/>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Password:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Password:'/>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Encryption:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='tls/ssl'/>
                        </div>
                    </Col></Row>
                    <Row className='mt-3'> 
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>From Address:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='From Address:'/>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>From Address:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='From Address:'/>
                        </div>
                    </Col></Row>
                   
                    </Container>

        </div>
    )
}

export default EmailSettings