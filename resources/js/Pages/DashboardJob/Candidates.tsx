import React, { useState } from "react";
import { Col, Card, Row } from "react-bootstrap";

//SimpleBar
import SimpleBar from "simplebar-react";

import avtar10 from "../../../images/users/avatar-10.jpg";
import avtar1 from "../../../images/users/avatar-1.jpg";
import avtar9 from "../../../images/users/avatar-9.jpg";
import avtar2 from "../../../images/users/avatar-2.jpg";
import avtar5 from "../../../images/users/avatar-5.jpg";
import avtar8 from "../../../images/users/avatar-8.jpg";
import { Link } from "@inertiajs/react";

const Candidates = () => {
  const candidateListData =
    [
      { id: 1, img: avtar10, name: "Tonya Noble", username: "@tonya", designation: "Web Developer" },
      { id: 2, img: avtar1, name: "Nicholas Ball", username: "@nicholas", designation: "Assistant / Store Keeper" },
      { id: 3, img: avtar9, name: "Zynthia Marrow", username: "@zynthia", designation: "Full Stack Engineer" },
      { id: 4, img: avtar2, name: "Cheryl Moore", username: "@cheryl", designation: "Product Designer" },
      { id: 5, img: avtar5, name: "Jennifer Bailey", username: "@jennifer", designation: "Marketing Director" },
      { id: 6, img: avtar8, name: "Hadley Leonard", username: "@hadley", designation: "Executive, HR Operations" }
    ];
  const [info, setInfo] = useState<any>([]);

  const [candidateList, setCandidateList] = useState<any>(candidateListData);

  const searchJob = (ele : any) => {
    let search = ele.target.value;
    if (search) {
      search = search.toUpperCase();
      setCandidateList(candidateListData.filter((data) => (
        data.name.toUpperCase().includes(search) ||
        data.username.toUpperCase().includes(search)
      ))
      );
    } else {
      setCandidateList(candidateListData);
    }
  };

  const favouriteBtn = (ele : any) => {
    if (ele.closest("button").classList.contains("active")) {
      ele.closest("button").classList.remove("active");
    } else {
      ele.closest("button").classList.add("active");
    }
  };

  return (
    <React.Fragment>
      <Col xxl={4}>
        <Card>
          <Card.Header>
            <div className="d-flex align-items-center">
              <h6 className="card-title mb-0 flex-grow-1">
                Popular Candidates
              </h6>
              <div className="flex-shrink-0">
                <Link
                  href="/apps-job-candidate-lists"
                  className="link-primary"
                >
                  View All <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          </Card.Header>
          <Row className="g-0">
            <Col lg={6}>
              <Card.Body className="border-end">
                <div className="search-box">
                  <input
                    type="text"
                    className="form-control bg-light border-light"
                    autoComplete="off"
                    id="searchList"
                    placeholder="Search candidate..."
                    onKeyUp={(e) => searchJob(e)}
                  />
                  <i className="ri-search-line search-icon"></i>
                </div>
                <SimpleBar
                  data-simplebar
                  style={{ maxHeight: "190px" }}
                  className="px-3 mx-n3"
                >
                  <ul className="list-unstyled mb-0 pt-2" id="candidate-list">
                    {(candidateList || []).map((item :any, key :any) => (<li key={key}>
                      <Link href="#" className="d-flex align-items-center py-2" onClick={() => setInfo(item)}>
                        <div className="flex-shrink-0 me-2">
                          <div className="avatar-xs">
                            <img src={item.img} alt="" className="img-fluid rounded-circle candidate-img" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="fs-13 mb-1 text-truncate">
                            <span className="candidate-name">{item.name}</span>{" "}
                            <span className="text-muted fw-normal">{item.username}</span>
                          </h5>
                          <div className="d-none candidate-position"> {item.designation} </div>
                        </div>
                      </Link>
                    </li>))}
                    {candidateList <= 0 && <div className="align-items-center ms-2 p-2">No matching records found</div>}
                  </ul>
                </SimpleBar>
              </Card.Body>
            </Col>
            <Col lg={6}>
              <Card.Body className="text-center">
                <div className="avatar-md mb-3 mx-auto">
                  <img
                    src={info.img || avtar10}
                    alt=""
                    id="candidate-img"
                    className="img-thumbnail rounded-circle shadow-none"
                  />
                </div>

                <h5 id="candidate-name" className="mb-0">
                  {info.name || "Tonya Noble"}
                </h5>
                <p id="candidate-position" className="text-muted">
                  {info.designation || "Web Developer"}
                </p>

                <div className="d-flex gap-2 justify-content-center mb-3">
                  <button
                    type="button"
                    className="btn avatar-xs p-0"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Google"
                  >
                    <span className="avatar-title rounded-circle bg-light text-body">
                      <i className="ri-google-line"></i>
                    </span>
                  </button>

                  <button
                    type="button"
                    className="btn avatar-xs p-0"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Linkedin"
                  >
                    <span className="avatar-title rounded-circle bg-light text-body">
                      <i className="ri-linkedin-line"></i>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="btn avatar-xs p-0"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Dribbble"
                  >
                    <span className="avatar-title rounded-circle bg-light text-body">
                      <i className="ri-dribbble-fill"></i>
                    </span>
                  </button>
                </div>

                <div>
                  <button
                    type="button"
                    className="btn btn-primary custom-toggle w-100"
                    data-bs-toggle="button"
                    aria-pressed="false"
                    onClick={(e) => favouriteBtn(e.target)}
                  >
                    <span className="icon-on">
                      <i className="ri-add-line align-bottom me-1"></i> Follow
                    </span>
                    <span className="icon-off">
                      <i className="ri-user-unfollow-line align-bottom me-1"></i>{" "}
                      Unfollow
                    </span>
                  </button>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Card className="overflow-hidden shadow-none">
          <Card.Body className="bg-danger-subtle">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <div className="avatar-sm">
                  <div className="avatar-title bg-danger bg-opacity-10 text-danger rounded-circle fs-17">
                    <i className="ri-gift-line"></i>
                  </div>
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <h6 className="fs-16">Invite your friends to Velzon</h6>
                <p className="text-muted mb-0">
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain of itself, because it is pain, but because
                  occasionally.
                </p>
              </div>
            </div>
            <div className="mt-3 text-end">
              <Link href="#" className="btn btn-danger">
                Invite Friends
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Candidates;
