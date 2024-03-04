import React from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import RemixIcons from '../../Pages/Icons/RemixIcons/RemixIcons';

function Business(props: any) {
    console.log(props)
    return (

        <div>
            <Container fluid>
                <Row className="mt-3">
                    <Col md={4}>
                        <div className="business-name">
                            <Form.Label htmlFor="basicInput1" className="form-label">Business Name</Form.Label>
                            <Form.Control className="form-control-sm" id="basicInput1" defaultValue={props.businessdetails.name} />
                        </div>

                    </Col>
                    <Col md={4}>

                        <div>
                            <Form.Label htmlFor="InputDate" className="form-label">Start Date</Form.Label>
                            <Form.Control type="date" className="form-control-sm" id="InputDate" defaultValue={props.businessdetails.start_date} />
                        </div>

                    </Col>
                    <Col md={4}>

                        <h6>Default profit percent:</h6>
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="ri-add-circle-fill"></i>
                            </span>
                            <Form.Control type="text" className="form-control-sm" defaultValue={props.businessdetails.default_profit_percent} />
                        </div>

                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col md={4}>

                        <div className="input-group">
                            <h6>Currency</h6>
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon2" >i
                                </span>
                                <select className="form-select" defaultValue="{props.currencies">
                                    <option value="">Currency</option>
                                    {Object.keys(props.allcurrencies).map(id => (
                                        <option key={id} value={id}>
                                            {props.allcurrencies[id]}
                                        </option>
                                    ))}
                                </select>

                            </div>
                        </div>

                    </Col>
                    <Col md={4}>

                        <h6>Currency Symbol Placement:</h6>
                        <div className="input-group">
                            <select className="form-select" >
                                <option>Before amount</option>
                                <option >After amount</option>
                            </select>
                        </div>

                    </Col>
                    <Col md={4}>

                        <div className="input-group">
                            <h6>Time zone</h6>
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon3">
                                    <i className=" ri-time-fill"></i>
                                </span>
                                <select className="form-select" defaultValue="{props.timezone_list}">
                                    <option value=""></option>
                                    {props.timezone && Object.keys(props.timezone).map(id => (
                                        <option key={id} value={id}>
                                            {props.timezone[id]}
                                        </option>
                                    ))}
                                </select>

                            </div>
                        </div>

                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={4}>

                        <div>
                            <Form.Label htmlFor="formFile" className="form-label">Upload Logo:</Form.Label>
                            <Form.Control className="form-control" type="file" id="formFile" />
                        </div>

                    </Col>
                    <Col md={4}>

                        <h6>Financial year start month:</h6>
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon4">
                                <i className=" ri-calendar-fill"></i>
                            </span>
                            <select className="form-select" defaultValue="{props.months}">
                                <option value=""></option>
                                {props.month && Object.keys(props.month).map(id => (
                                    <option key={id} value={id}>
                                        {props.month[id]}
                                    </option>
                                ))}
                            </select> </div>

                    </Col>
                    <Col md={4}>

                        <h6>Stock Accounting Method:</h6>
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon5">
                                <i className="bx bxs-calculator"></i>
                            </span>
                             <select className="form-select" defaultValue="{props.accounting_methods}">
                                <option value=""></option>
                                {props.accounting_method && Object.keys(props.accounting_method).map(id => (
                                    <option key={id} value={id}>
                                        {props.accounting_method[id]}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={4}>

                        <div className="input-group">
                            <h6>Transaction Edit Days:</h6><div className="input-group">
                                <span className="input-group-text" id="basic-addon6">
                                    <i className="ri-edit-line"></i>
                                </span>
                                <Form.Control type="text" className="form-control" defaultValue={props.businessdetails.transaction_edit_days} />
                            </div>
                        </div>

                    </Col>
                    <Col md={4}>

                        <h6>Date Format:</h6>
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon7">
                                <i className=" ri-calendar-fill"></i>
                            </span>
                            <select className="form-select" defaultValue="{props.date_formats}">
                                <option value=""></option>
                                {props.date_format && Object.keys(props.date_format).map(id => (
                                    <option key={id} value={id}>
                                        {props.date_format[id]}
                                    </option>
                                ))}
                            </select>
                            
                        </div>

                    </Col>
                    <Col md={4}>

                        <h6>Time Format:</h6>
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon8">
                                <i className=" ri-time-fill"></i>
                            </span>
                            <select className="form-select" defaultValue={props.businessdetails.time_format}>
                                <option>24 hours</option>
                                <option >12 hours</option>
                            </select>
                        </div>

                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={4}>

                        <div>
                            <h6>Currency precision:</h6>
                            <div className="input-group">
                                <select className="form-select" id="GroupSelect1" defaultValue={props.businessdetails.currency_precision}>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                        </div>

                    </Col>
                    <Col md={4}>

                        <div>
                            <h6>Quantity precision:</h6>
                            <div className="input-group">
                                <select className="form-select" id="GroupSelect2" defaultValue={props.businessdetails.quantity_precision} >
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default Business;
