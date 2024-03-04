import React from 'react'
import { Card, Col, Container, Row, Form } from 'react-bootstrap';
function SMSSettings() {
    return (
        <div>
            <Container fluid>
                <Row className='mt-3'><Col md={4}>
                    <div className="input-group">
                        <h6>SMS Service:</h6>
                        <div className="input-group">
                            <select className="form-select" >
                                <option value="1">Other</option>
                                <option value="2">Nexmo</option>
                                <option value="2">Twilio</option>
                            </select>       </div>
                    </div>

                </Col></Row>
                
             <Row className='mt-3'>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>URL</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='URL' />
                        </div>
                    </Col>       <Col md={4}>
                        <div className="product-preview">
                            <h6>Send to parameter name:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Send to parameter name:' defaultValue={'to'} />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Message parameter name:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Message parameter name:' defaultValue={'test'} />
                        </div>
                    </Col>
                    <Col md={4} className='mt-3'>
                        <div className="input-group">
                            <h6>Request Method:</h6>
                            <div className="input-group">
                                <select className="form-select" >
                                    <option value="1">POST</option>
                                    <option value="2">GET</option>
                                </select>       </div>
                        </div>

                    </Col></Row>
                    <hr></hr>
                    <Row className="mt-3">
                    <Col md={4}>
                        <div className="input-group">
                            <h6>Header 1 key:</h6>
                            <div className="input-group">
                            <Form.Control className="form-control" id="basicInput" placeholder='Header 1 key:'/>
                        
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Header 1 value:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Header 1 value:'/>
                        </div>
                    </Col>
                   
                </Row>
                <Row className="mt-3">
                    <Col md={4}>
                        <div className="input-group">
                            <h6>Header 2 key:</h6>
                            <div className="input-group">
                            <Form.Control className="form-control" id="basicInput" placeholder='Header 2 key:'/>
                        
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Header 2 value:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Header 2 value:'/>
                        </div>
                    </Col>
                   
                </Row>
                <Row className="mt-3">
                    <Col md={4}>
                        <div className="input-group">
                            <h6>Header 3 key:</h6>
                            <div className="input-group">
                            <Form.Control className="form-control" id="basicInput" placeholder='Header 3 key:'/>
                      
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Header 3 value:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Header 3 value:'/>
                        </div>
                    </Col>
                   
                </Row>
                <hr></hr>
                <Row className="mt-3">
                    <Col md={4}>
                        <div className="input-group">
                            <h6>Parameter 1 key:</h6>
                            <div className="input-group">
                            <Form.Control className="form-control" id="basicInput" placeholder='Parameter 1 key:'/>
                      
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Parameter 1 value:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Parameter 1 value:'/>
                        </div>
                    </Col>
                   
                </Row><Row className="mt-3">
                    <Col md={4}>
                        <div className="input-group">
                            <h6>Parameter 2 key:</h6>
                            <div className="input-group">
                            <Form.Control className="form-control" id="basicInput" placeholder='parameter 2 key:'/>
                      
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Parameter 2 value:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Parameter 2 value:'/>
                        </div>
                    </Col>
                   
                </Row><Row className="mt-3">
                    <Col md={4}>
                        <div className="input-group">
                            <h6>Parameter 3 key:</h6>
                            <div className="input-group">
                               
                            <Form.Control className="form-control" id="basicInput" placeholder='parameter 3 key:'/>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Parameter 3 value:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Parameter 3 value:'/>
                        </div>
                    </Col>
                  
                </Row>
                <Row className="mt-3">
                    <Col md={4}>
                        <div className="input-group">
                            <h6>Parameter 4 key:</h6>
                            <div className="input-group">
                               
                            <Form.Control className="form-control" id="basicInput" placeholder='parameter 4 key:'/>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Parameter 4 value:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Parameter 4 value:'/>
                        </div>
                    </Col>
                   
                </Row>
                <Row className="mt-3">
                    <Col md={4}>
                        <div className="input-group">
                            <h6>Parameter 5 key:</h6>
                            <div className="input-group">
                               
                            <Form.Control className="form-control" id="basicInput" placeholder='parameter 5 key:'/>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Parameter 6 value:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Parameter 6 value:'/>
                        </div>
                    </Col>
                    
                </Row>
                <Row className="mt-3">
                    <Col md={4}>
                        <div className="input-group">
                            <h6>Parameter 6 key:</h6>
                            <div className="input-group">
                            <Form.Control className="form-control" id="basicInput" placeholder='Parameter 6 key:'/>
                        
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Parameter 6 value:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Parameter 6 value:'/>
                        </div>
                    </Col>
                    
                </Row>
                <Row className="mt-3">
                    <Col md={4}>
                        <div className="input-group">
                            <h6>Parameter 7 key:</h6>
                            <div className="input-group">
                                
                            <Form.Control className="form-control" id="basicInput" placeholder='parameter 7 key:'/>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Parameter 7 value:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Parameter 7 value:'/>
                        </div>
                    </Col>
                    
                </Row>
                <Row className="mt-3">
                    <Col md={4}>
                        <div className="input-group">
                            <h6>Parameter 8 key:</h6>
                            <div className="input-group">
                                
                            <Form.Control className="form-control" id="basicInput" placeholder='parameter 8 key:'/>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Parameter 8 value:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Parameter 8 value:'/>
                        </div>
                    </Col>
                    
                </Row>
                <Row className="mt-3">
                    <Col md={4}>
                        <div className="input-group">
                            <h6>Parameter 9 key:</h6>
                            <div className="input-group">
                            <Form.Control className="form-control" id="basicInput" placeholder='parameter 9 key:'/>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Parameter 9 value:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Parameter 9 value:'/>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={4}>
                        <div className="input-group">
                            <h6>Parameter 10 key:</h6>
                            <div className="input-group">
                            <Form.Control className="form-control" id="basicInput" placeholder='parameter 10 key:'/>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="product-preview">
                            <h6>Parameter 10 value:</h6>
                            <Form.Control className="form-control" id="basicInput" placeholder='Parameter 10 value:'/>
                        </div>
                    </Col>
                </Row>
                <hr></hr>
                <Row className='mt-3'>
                <Col lg={6}>
                    <div className="input-group">
                      <Form.Control type="text" className="form-control" placeholder='Test number' />
                      <button className="btn btn-success" type="button" id="button-addon2">Send test SMS</button>
                     </div>
                </Col></Row>

            </Container></div>
    )
}

export default SMSSettings