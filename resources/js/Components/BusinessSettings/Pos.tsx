import React from 'react';
import { Card, Col, Container, Form, Row, Table } from 'react-bootstrap';

function Pos(props:any) {
    return (
        <div>
            <h5>Add keyboard shortcuts:</h5>
            <p>Shortcut should be the names of the keys separated by '+'; Example: ctrl+shift+b, ctrl+h</p>
            <h6>Available key names are:</h6>
            <p>shift, ctrl, alt, backspace, tab, enter, return, capslock, esc, escape, space, pageup, pagedown, end, home,
                left, up, right, down, ins, del, and plus</p>
            <Row>
                <Col md={6}>
                    <div className="table-responsive text-white">
                        <Table className="table table-striped ">
                            <thead>
                                <tr>
                                    <th>Operations</th>
                                    <th>Keyboard shortcuts</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Express Checkout:</td>
                                    <td><Form.Control type="text" defaultValue ={props.shortcut.pos.express_checkout} /></td>
                                </tr>
                                <tr>
                                    <td>Pay & Checkout:</td>
                                    <td><Form.Control type="text" defaultValue ={props.shortcut.pos.pay_n_ckeckout} /></td>
                                </tr>
                                <tr>
                                    <td>Draft:</td>
                                    <td><Form.Control type="text"defaultValue ={props.shortcut.pos.draft}  /></td>
                                </tr>
                                <tr>
                                    <td>Cancel:</td>
                                    <td><Form.Control type="text" defaultValue ={props.shortcut.pos.cancel} /></td>
                                </tr>
                                <tr>
                                    <td>Go to product quantity:</td>
                                    <td><Form.Control type="text" defaultValue ={props.shortcut.pos.recent_product_quantity}/></td>
                                </tr>
                                <tr>
                                    <td>Weighing Scale:</td>
                                    <td><Form.Control type="text" /></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="table-responsive">
                        <Table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Operations</th>
                                    <th>Keyboard shortcuts</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Edit Discount:</td>
                                    <td><Form.Control type="text" defaultValue ={props.shortcut.pos.edit_discount}/></td>
                                </tr>
                                <tr>
                                    <td>Edit Order Tax:</td>
                                    <td><Form.Control type="text" defaultValue ={props.shortcut.pos.edit_order_tax}/></td>
                                </tr>
                                <tr>
                                    <td>Add Payment Row:</td>
                                    <td><Form.Control type="text" defaultValue ={props.shortcut.pos.add_payment_row}/></td>
                                </tr>
                                <tr>
                                    <td>Finalize Payment:</td>
                                    <td><Form.Control type="text" defaultValue ={props.shortcut.pos.finalize_payment} /></td>
                                </tr>
                                <tr>
                                    <td>Add new product:</td>
                                    <td><Form.Control type="text"defaultValue ={props.shortcut.pos.add_new_product} /></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
            <h4>POS settings:</h4>
            <Row className="mt-3 " style={{ marginLeft: '20px' }}>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Disable Multiple Pay
                        </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Disable Draft
                        </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2"> Disable Express Checkout
                        </Form.Check.Label>
                    </div>
                </Col>
            </Row>
            <Row className="mt-3" style={{ marginLeft: '20px' }}>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Don't show product suggestion
                        </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2"> Don't show recent transactions
                        </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Disable Discount
                        </Form.Check.Label>
                    </div>
                </Col>
            </Row>
            <Row className="mt-3" style={{ marginLeft: '20px' }}>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2"> Disable order tax
                        </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Subtotal Editable
                        </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Disable Suspend Sale
                        </Form.Check.Label>
                    </div>
                </Col>
            </Row>
            <Row className="mt-3" style={{ marginLeft: '20px' }}>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Enable transaction date on POS screen
                        </Form.Check.Label>
                    </div>
                </Col>

                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2"> Enable service staff in product line
                        </Form.Check.Label>
                    </div>
                </Col>
            </Row><Row className="mt-3" style={{ marginLeft: '20px' }}>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Is service staff required
                        </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Disable credit sale button
                        </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Enable Weighing Scale
                        </Form.Check.Label>
                    </div>
                </Col>
            </Row><Row className="mt-3" style={{ marginLeft: '20px' }}>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2"> Show invoice scheme
                        </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Show invoice layout dropdown
                        </Form.Check.Label>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Print invoice on suspend
                        </Form.Check.Label>
                    </div>
                </Col>
            </Row><Row className="mt-3" style={{ marginLeft: '20px' }}>
                <Col md={4}>
                    <div className="form-check text-white">
                        <Form.Check.Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Form.Check.Label className="form-check-label" htmlFor="formCheck2">Show pricing on product suggestion tooltip
                        </Form.Check.Label>
                    </div>
                </Col>

            </Row>
            <hr></hr>
            <h4> Weighing Scale barcode Setting:</h4>
            <p>Configure barcode as per your weighing scale.</p>
            <Row className="mt-3" style={{ marginLeft: '20px' }}>
                <Col md={4}>
                    <div className="product-preview">
                        <h6>Prefix:</h6>
                        <Form.Control className="form-control" id="basicInput" />
                    </div>
                </Col>
                <Col md={4}>

                    <div>
                        <h6>Product sku length: </h6>
                        <div className="input-group">
                            <select className="form-select" id="inputGroupSelect01">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option selected>5</option>
                                <option>6</option>
                            </select>
                        </div>
                    </div>

                </Col><Col md={4}>
                    <div>
                        <h6>Quantity integer part length:</h6>
                        <div className="input-group">
                            <select className="form-select" id="inputGroupSelect01">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option selected>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>

                </Col><Col md={4} className="mt-3" style={{ marginLeft: '3px' }}>

                    <div>
                        <h6>Quantity fractional part length:</h6>
                        <div className="input-group">
                            <select className="form-select" id="inputGroupSelect01">
                                <option>1</option>
                                <option>2</option>
                                <option selected>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>

                </Col>
            </Row>


        </div>
    );
}

export default Pos;
