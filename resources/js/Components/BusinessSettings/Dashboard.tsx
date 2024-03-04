import React from 'react'
import {Col, Container, Row, Form } from 'react-bootstrap';
function Dashboard(props:any) {
  return (
    <div> <Container fluid>
    <Row className="mt-3">
        <Col md={4}>
            
                    <h6>View Stock Expiry Alert For:*</h6>
                    <div className="input-group">
                        <span className="input-group-text"id="basic-addon1"><i className="mdi mdi-calendar-remove"></i></span>
                        <Form.Control type="number" className="form-control" defaultValue={props.businessdetails.stock_expiry_alert_days} />
                        <span className="input-group-text"id="basic-addon1">Days</span>
                       
                    </div>
                
        </Col>
        </Row>
        </Container></div>
  )
}

export default Dashboard