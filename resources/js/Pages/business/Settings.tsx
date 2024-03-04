import React from 'react';
import { Button, Card, Col, Container, Form, Nav, Row, Tab, } from 'react-bootstrap';
import Flatpickr from "react-flatpickr";
import Business from '../../Components/BusinessSettings/Business';
import Tax from '../../Components/BusinessSettings/Tax';
import Product from '../../Components/BusinessSettings/Product';
import Contact from '../../Components/BusinessSettings/Contact';
import Purchases from '../../Components/BusinessSettings/Purchases';
import Payment from '../../Components/BusinessSettings/Payment';
import Sale from '../../Components/BusinessSettings/Sale';
import Pos from '../../Components/BusinessSettings/Pos';
import Dashboard from '../../Components/BusinessSettings/Dashboard';
import System from '../../Components/BusinessSettings/System';
import Prefixes from '../../Components/BusinessSettings/Prefixes';
import Modules from '../../Components/BusinessSettings/Modules';
import EmailSettings from '../../Components/BusinessSettings/EmailSettings';
import SMSSettings from '../../Components/BusinessSettings/SMSSettings';
import RewardPointSettings from '../../Components/BusinessSettings/RewardPointSettings';
import Customlabels from '../../Components/BusinessSettings/Customlabels';

//import images
import avatar1 from '../../../images/users/avatar-1.jpg';
import { Head, Link } from '@inertiajs/react';
import Layout from '../../Layouts';
import BreadCrumb from '../../Components/Common/BreadCrumb';
const Settings = (props: any) => {

    return (
        <React.Fragment>
            <Head title='Bussiness Settings | Ebook - ERP Application' />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Bussiness Settings" pageTitle="Pages" />
                    <Row>
                        <Col xxl={12}>
                            <Row>
                                <Tab.Container defaultActiveKey="1">
                                    <Col md={3}>
                                        <Card className="card-bg-fill">
                                            <Card.Body className="p-4">
                                                <Nav variant='pills' className="flex-column text-start" id="v-pills-tab">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="1">
                                                            Business
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="2">
                                                            Tax </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="3">
                                                            Product
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="4">
                                                            Contact
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="5">
                                                            Sale
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="6">
                                                            POS
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="7">
                                                            Purchases
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="8">
                                                            Payment
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="9">
                                                            Dashboard
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="10">
                                                            System
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="11">
                                                            Prefixes
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="12">
                                                            Email settings
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="13">
                                                            SMS settings
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="14">
                                                            Reward point settings
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="15">
                                                            Modules
                                                        </Nav.Link>
                                                    </Nav.Item><Nav.Item>
                                                        <Nav.Link eventKey="16">
                                                            Custom labels
                                                        </Nav.Link>
                                                    </Nav.Item>

                                                </Nav>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={9}>

                                        <Tab.Content
                                            className="text-muted mt-4 mt-md-0"
                                            id="v-pills-tab.Content"
                                        >
                                            <Tab.Pane eventKey="1" id="v-pills-business">
                                                <Business businessdetails={props.business} allcurrencies={props.currencies} timezone={props.timezone_list} month={props.months} accounting_method={props.accounting_methods} date_format={props.date_formats} />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="2" id="v-pills-tax">
                                                <Tax />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="3" id="v-pills-messages">
                                                <Product />                                                      </Tab.Pane>

                                            <Tab.Pane eventKey="4" id="v-pills-settings">
                                                <Contact />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="5" id="v-pills-settings">
                                                <Sale commission_agent={props.commission_agent_dropdown} />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="6" id="v-pills-settings">
                                                <Pos shortcut={props.shortcuts} />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="7" id="v-pills-settings">
                                                <Purchases />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="8" id="v-pills-settings">
                                                <Payment />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="9" id="v-pills-settings">
                                                <Dashboard businessdetails={props.business} />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="10" id="v-pills-settings">
                                                <System theme_color={props.theme_colors} />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="11" id="v-pills-settings">
                                                <Prefixes />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="12" id="v-pills-settings">
                                                <EmailSettings email_setting={props.email_settings}/>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="13" id="v-pills-settings">
                                                <SMSSettings />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="14" id="v-pills-settings">
                                                <RewardPointSettings businessdetails={props.business} />

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="15" id="v-pills-settings">
                                                <Modules />
                                            </Tab.Pane><Tab.Pane eventKey="16" id="v-pills-settings">
                                                <Customlabels />
                                            </Tab.Pane>
                                        </Tab.Content>

                                    </Col>
                                </Tab.Container>
                            </Row>
                            <Row className="mt-3 justify-content-center">
                                <Col md={8} className="text-center">
                                    <Button className="btn btn-primary btn-lg"style={{ width: '200px' }}>Update settings</Button>
                                </Col>
                            </Row>


                        </Col>


                    </Row >
                </Container>
            </div>
        </React.Fragment>
    );
};
Settings.layout = (page: any) => <Layout children={page} />
export default Settings;
