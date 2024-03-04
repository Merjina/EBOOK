import React from 'react';
import { Alert, Button, Card, Col, ListGroup, ProgressBar, Row, Dropdown } from 'react-bootstrap';
import { Link } from '@inertiajs/react';

import CountUp from "react-countup";

import { MyPortfolioCharts } from './WidgetsCharts';
import { SessionsByCountriesCharts } from './WidgetsCharts';
import { AudiencesMetricsCharts } from './WidgetsCharts';
import { TopReferralsPagesCharts } from './WidgetsCharts';
import { widgetsAudiences, widgetsPortfolio, } from "../../common/data/index";
import { VectorMap } from '@south-paw/react-vector-maps'

import world from '../../common/world.svg.json';
import at from '../../common/world.svg.json'

const ChartMapWidgets = () => {
    return (
        <React.Fragment>
            <Row>
                <Col className="col-12">
                    <h5 className="text-decoration-underline mb-3 mt-2 pb-3">Chart & Map Widgets</h5>
                </Col>
            </Row>

            <Row>
                <Col xxl={4} xl={6}>
                    <Card className="card-height-100">
                        <Card.Header className="align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Live Users By Country</h4>
                            <div className="flex-shrink-0">
                                <Button variant="primary" size='sm' className="btn-soft-primary">
                                    Export Report
                                </Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="users-by-country" style={{ height: "252px" }}>
                            <div id="world_map_line_markers" className="custom-vector-map">
                                        <VectorMap {...world} />
                                    </div>
                            </div>

                            <div className="table-responsive table-card mt-3">
                                <table className="table table-borderless table-sm table-centered align-middle table-nowrap mb-1">
                                    <thead className="text-muted border-dashed border border-start-0 border-end-0 bg-light-subtle">
                                        <tr>
                                            <th>Duration (Secs)</th>
                                            <th style={{ width: "30%" }}>Sessions</th>
                                            <th style={{ width: "30%" }}>Views</th>
                                        </tr>
                                    </thead>
                                    <tbody className="border-0">
                                        <tr>
                                            <td>0-30</td>
                                            <td>2,250</td>
                                            <td>4,250</td>
                                        </tr>
                                        <tr>
                                            <td>31-60</td>
                                            <td>1,501</td>
                                            <td>2,050</td>
                                        </tr>
                                        <tr>
                                            <td>61-120</td>
                                            <td>750</td>
                                            <td>1,600</td>
                                        </tr>
                                        <tr>
                                            <td>121-240</td>
                                            <td>540</td>
                                            <td>1,040</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={4} xl={6}>
                    <Card className="card-height-100">
                        <Card.Header className="align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Sessions by Countries</h4>
                            <div>
                                <Button variant="secondary" size="sm" className="btn-soft-secondary me-1">
                                    ALL
                                </Button>
                                <Button variant="primary" size="sm" className="btn-soft-primary me-1">
                                    1M
                                </Button>
                                <Button variant="secondary" size="sm" className="btn-soft-secondary">
                                    6M
                                </Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div>
                                <div id="countries_charts" className="apex-charts" dir="ltr">
                                    {/* Sessions by Countries */}
                                    <SessionsByCountriesCharts dataColors='["--vz-primary-rgb, 0.4", "--vz-primary-rgb, 0.4", "--vz-primary-rgb, 0.4", "--vz-primary-rgb, 0.4", "--vz-primary", "--vz-primary-rgb, 0.4", "--vz-primary-rgb, 0.4", "--vz-primary-rgb, 0.4", "--vz-primary-rgb, 0.4", "--vz-primary-rgb, 0.4"]' />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={4}>
                    <Card className="card-height-100">
                        <Card.Header className="border-0 align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Audiences Metrics</h4>
                            <div>
                                <Button variant="secondary" size="sm" className="btn-soft-secondary me-1">
                                    ALL
                                </Button>
                                <Button variant="secondary" size="sm" className="btn-soft-secondary me-1">
                                    1M
                                </Button>
                                <Button variant="secondary" size="sm" className="btn-soft-secondary me-1">
                                    6M
                                </Button>
                                <Button variant="primary" size="sm" className="btn-soft-primary">
                                    1Y
                                </Button>
                            </div>
                        </Card.Header>

                        <Card.Header className="p-0">
                            <Alert variant="primary" className="alert-solid alert-label-icon border-0 rounded-0 m-0 d-flex align-items-center" role="alert">
                                <i className="ri-error-warning-line label-icon"></i>
                                <div className="flex-grow-1 text-truncate">
                                    Your free trial expired in <b>17</b> days.
                                </div>
                                <div className="flex-shrink-0">
                                    <Link href="/pages-pricing" className="text-reset text-decoration-underline"><b>Upgrade</b></Link>
                                </div>
                            </Alert>
                        </Card.Header>
                        <Card.Header className="p-0 border-0 bg-light-subtle">
                            <Row className="g-0 text-center">

                                {(widgetsAudiences || []).map((item, key) => (<div className="col-6 col-sm-4" key={key}>
                                    <div className="p-3 border border-dashed border-start-0">
                                        <h5 className="mb-1">
                                            {item.subCounter.map((item, key) => (<span className="counter-value" data-target="3" key={key}>
                                                <CountUp
                                                    start={0}
                                                    prefix={item.prefix}
                                                    suffix={item.suffix}
                                                    separator=','
                                                    end={item.counter}
                                                    // decimals={item.decimals}
                                                    duration={4}
                                                />
                                            </span>))}
                                            {item.percentage ? <span className="text-success ms-1 fs-12">{item.percentage}<i className="ri-arrow-right-up-line ms-1 align-middle"></i></span> : null}
                                        </h5>
                                        <p className="text-muted mb-0">{item.caption}</p>
                                    </div>
                                </div>))}

                            </Row>
                        </Card.Header>

                        <Card.Body className="p-0 pb-2">
                            <div>
                                <div id="audiences_metrics_charts" className="apex-charts" dir="ltr">
                                    {/* Audiences Metrics Chart */}
                                    <AudiencesMetricsCharts dataColors='["--vz-primary", "--vz-gray-300"]' />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xxl={4} xl={6}>
                    <Card className="card-height-100">
                        <Card.Header className="align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Sales by Locations</h4>
                            <div className="flex-shrink-0">
                                <Button variant="primary" size="sm" className="btn-soft-primary">
                                    Export Report
                                </Button>
                            </div>
                        </Card.Header>

                        <Card.Body>
                            <div id="sales-by-locations" style={{ height: "269px" }}>
                            <VectorMap {...at} />
                            </div>
                            <div className="px-2 py-2 mt-1">
                                <p className="mb-1">New Maxico <span className="float-end">75%</span></p>
                                <ProgressBar variant="primary" now={75} striped className="mt-2" style={{ height: "6px" }} />

                                <p className="mt-3 mb-1">California <span className="float-end">47%</span></p>
                                <ProgressBar variant="primary" now={47} striped className="mt-2" style={{ height: "6px" }} />

                                <p className="mt-3 mb-1">Texas <span className="float-end">82%</span></p>
                                <ProgressBar variant="primary" now={82} striped className="mt-2" style={{ height: "6px" }} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={4} xl={6}>
                    <Card className="card-height-100">
                        <Card.Header className="border-bottom-dashed align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">My Portfolio</h4>
                            <div>

                            <Dropdown className="card-header-dropdown" >
                                    <Dropdown.Toggle as="button" className="btn btn-soft-primary btn-sm arrow-none" >
                                        <span className="text-uppercase">Btc<i className="mdi mdi-chevron-down align-middle ms-1"></i></span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-end">
                                        <Dropdown.Item>BTC</Dropdown.Item>
                                        <Dropdown.Item>USD</Dropdown.Item>
                                        <Dropdown.Item>Euro</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </div>
                        </Card.Header>

                        <Card.Body>
                            <div id="portfolio_donut_charts" dir="ltr">
                                {/* My Portfolio Chart */}
                                <MyPortfolioCharts dataColors='["--vz-primary", "--vz-primary-rgb, 0.85", "--vz-primary-rgb, 0.65", "--vz-primary-rgb, 0.50"]' />
                            </div>

                            <ListGroup className="border-dashed mb-0" variant='flush'>

                                {(widgetsPortfolio || []).map((item, key) => (<ListGroup.Item className="px-0" key={key}>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 avatar-xs">
                                            <span className="avatar-title bg-light p-1 rounded-circle">
                                                <img src={item.img} className="img-fluid" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-1">{item.label}</h6>
                                            <p className="fs-12 mb-0 text-muted"><i className={"mdi mdi-circle fs-10 align-middle me-1 text-" + item.coinNameClass}></i>{item.coinName}</p>
                                        </div>
                                        <div className="flex-shrink-0 text-end">
                                            <h6 className="mb-1">{item.coinName} {item.coinVolume}</h6>
                                            <p className={"fs-12 mb-0 text-" + item.priceClass}>{item.price}</p>
                                        </div>
                                    </div>
                                </ListGroup.Item>))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={4}>
                    <Card className="card-height-100">
                        <Card.Header className="align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Top Referrals Pages</h4>
                            <div className="flex-shrink-0">
                                <Button variant="primary" size="sm" className="btn-soft-primary">
                                    Export Report
                                </Button>
                            </div>
                        </Card.Header>

                        <Card.Body>
                            <div id="color_heatmap" className="apex-charts mt-n3" dir="ltr">
                                {/* Top Referrals Pages Chart */}
                                <TopReferralsPagesCharts dataColors='["--vz-success", "--vz-info", "--vz-primary", "--vz-warning", "--vz-secondary"]' />
                            </div>

                            <Row className="g-3">
                                <Col md={6}>
                                    <div className="d-flex mb-3">
                                        <div className="flex-grow-1">
                                            <p className="text-truncate text-muted fs-14 mb-0"><i className="mdi mdi-circle align-middle text-primary me-2"></i>www.google.com</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <p className="mb-0">24.58%</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <div className="flex-grow-1">
                                            <p className="text-truncate text-muted fs-14 mb-0"><i className="mdi mdi-circle align-middle text-warning me-2"></i>www.medium.com</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <p className="mb-0">12.22%</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <p className="text-truncate text-muted fs-14 mb-0"><i className="mdi mdi-circle align-middle text-secondary me-2"></i>Other</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <p className="mb-0">17.58%</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="d-flex mb-3">
                                        <div className="flex-grow-1">
                                            <p className="text-truncate text-muted fs-14 mb-0"><i className="mdi mdi-circle align-middle text-info me-2"></i>www.youtube.com</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <p className="mb-0">17.51%</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <div className="flex-grow-1">
                                            <p className="text-truncate text-muted fs-14 mb-0"><i className="mdi mdi-circle align-middle text-success me-2"></i>www.meta.com</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <p className="mb-0">23.05%</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <div className="mt-2 text-center">
                                <Link href="#" className="text-muted text-decoration-underline">Show All</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ChartMapWidgets;