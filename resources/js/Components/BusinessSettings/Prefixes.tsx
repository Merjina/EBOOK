import React from 'react'
import { Card, Col, Container, Row, Form } from 'react-bootstrap';
function Prefixes() {
  return (
    <div><Container fluid>
    <Row className="mt-3">
        <Col md={4}>
            <div className="product-preview">
                    <h6>Purchase:</h6>
                <Form.Control className="form-control" id="basicInput" defaultValue={'PO'} />
            </div>
        </Col>
        <Col md={4}>
            <div className="product-preview">
                    <h6>Purchase Return:</h6>
                <Form.Control className="form-control" id="basicInput" />
            </div>
        </Col> <Col md={4}>
            <div className="product-preview">
                    <h6>Purchase Requisition:</h6>
                <Form.Control className="form-control" id="basicInput" />
            </div>
        </Col>
        </Row>
        <Row className="mt-3">
        <Col md={4}>
            <div className="product-preview">
                    <h6>Purchase Order:</h6>
                <Form.Control className="form-control" id="basicInput" />
            </div>
        </Col>
        <Col md={4}>
            <div className="product-preview">
                    <h6>Stock Transfer:</h6>
                <Form.Control className="form-control" id="basicInput" defaultValue={'ST'}/>
            </div>
        </Col> <Col md={4}>
            <div className="product-preview">
                    <h6>Stock Adjustment:</h6>
                <Form.Control className="form-control" id="basicInput" defaultValue={'SA'} />
            </div>
        </Col>
        </Row>
        <Row className="mt-3">
        <Col md={4}>
            <div className="product-preview">
                    <h6>Sell Return:</h6>
                <Form.Control className="form-control" id="basicInput"defaultValue={'CN'} />
            </div>
        </Col>
        <Col md={4}>
            <div className="product-preview">
                    <h6>Expenses:</h6>
                <Form.Control className="form-control" id="basicInput"defaultValue={'EP'} />
            </div>
        </Col> <Col md={4}>
            <div className="product-preview">
                    <h6>Contacts:</h6>
                <Form.Control className="form-control" id="basicInput" defaultValue={'CO'}/>
            </div>
        </Col>
        </Row>
        <Row className="mt-3">
        <Col md={4}>
            <div className="product-preview">
                    <h6>Purchase Payment:</h6>
                <Form.Control className="form-control" id="basicInput"defaultValue={'PP'} />
            </div>
        </Col>
        <Col md={4}>
            <div className="product-preview">
                    <h6>Sell Payment:</h6>
                <Form.Control className="form-control" id="basicInput"defaultValue={'SP'} />
            </div>
        </Col> <Col md={4}>
            <div className="product-preview">
                    <h6>Expense Payment:</h6>
                <Form.Control className="form-control" id="basicInput" />
            </div>
        </Col>
        </Row>
        <Row className="mt-3">
        <Col md={4}>
            <div className="product-preview">
                    <h6>Business Location:</h6>
                <Form.Control className="form-control" id="basicInput"defaultValue={'BL'} />
            </div>
        </Col>
        <Col md={4}>
            <div className="product-preview">
                    <h6>Username:</h6>
                <Form.Control className="form-control" id="basicInput" />
            </div>
        </Col> <Col md={4}>
            <div className="product-preview">
                    <h6>Subscription No.:</h6>
                <Form.Control className="form-control" id="basicInput" />
            </div>
        </Col>
        </Row>
        <Row className="mt-3">
        <Col md={4}>
            <div className="product-preview">
                    <h6>Draft:</h6>
                <Form.Control className="form-control" id="basicInput" />
            </div>
        </Col>
        <Col md={4}>
            <div className="product-preview">
                    <h6>Sales Order:</h6>
                <Form.Control className="form-control" id="basicInput" />
            </div>
        </Col>
        </Row>
        </Container></div>
  )
}

export default Prefixes