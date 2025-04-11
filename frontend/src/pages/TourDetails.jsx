import React, { useEffect, useRef, useState, useContext } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import calculateAvgRating from "./../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newsletter from "./../shared/Newsletter";
import useFetch from "./../hooks/useFetch";
import { BASE_URL } from "./../utils/config";

import { AuthContext } from "./../context/AuthContext";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);

  // fetch data from database
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  // destructure properties from tour object
  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    maxGroupSize,
    itinerary, // Added itinerary here
  } = tour || {}; // Ensure tour is defined to avoid errors

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // format date
  const options = { day: "numeric", month: "long", year: "numeric" };

  // submit request to the server
  const submitHandler = async e => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user) {
        alert("Please sign in");
        return;
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      const token = localStorage.getItem("token");
      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }

      alert(result.message);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading........</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour-content">
                  <img src={photo} alt="" />

                  <div className="tour-info">
                    <h2>{title}</h2>

                    <div className="d-flex align-items-center gap-5">
                      <span className="tour-rating d-flex align-items-center gap-1">
                        <i
                          className="ri-star-s-fill"
                          style={{ color: "var(--secondary-color)" }}
                        ></i>
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                          "Not rated"
                        ) : (
                          <span>({reviews?.length})</span>
                        )}
                      </span>
                    </div>

                    <div className="tour-extra-details">
                      <span>
                        <i className="ri-map-pin-2-line"></i> {city}
                      </span>
                      <span>
                        <i className="ri-money-dollar-circle-line"></i> ${price}{" "}
                        /per person
                      </span>

                      <span>
                        <i className="ri-group-line"></i> {maxGroupSize} people
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>

                  {/* ========== Itinerary Section =========== */}
                  {itinerary && (
                    <div className="tour-itinerary mt-4">
                      <h4>Itinerary</h4>
                      {itinerary.length === 0 ? (
                        <p className="text-muted">
                          Itinerary will be provided soon.
                        </p>
                      ) : (
                        itinerary.map((day, index) => (
                          <div className="itinerary-day" key={index}>
                            <h5>{day.day}</h5>

                            {day.morning && (
                              <>
                                <p>
                                  <strong>Morning</strong>
                                </p>
                                <ul>
                                  {day.morning.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                              </>
                            )}

                            {day.afternoon && (
                              <>
                                <p>
                                  <strong>Afternoon</strong>
                                </p>
                                <ul>
                                  {day.afternoon.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                              </>
                            )}

                            {day.evening && (
                              <>
                                <p>
                                  <strong>Evening</strong>
                                </p>
                                <ul>
                                  {day.evening.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                  )}
                  {/* ========== Itinerary Section End =========== */}

                  {/* ========== tour reviews section =========== */}
                  <div className="tour-reviews mt-4">
                    <h4>Reviews ({reviews?.length} reviews)</h4>

                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating-group">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <span
                            key={rating}
                            onClick={() => setTourRating(rating)}
                          >
                            {rating} <i className="ri-star-s-fill"></i>
                          </span>
                        ))}
                      </div>

                      <div className="review-input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="share your thoughts"
                          required
                        />
                        <button
                          className="btn primary__btn text-white"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>

                    <ListGroup className="user-reviews">
                      {reviews?.map((review, index) => (
                        <div className="review-item" key={index}>
                          <img src={avatar} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.username}</h5>
                                <p>
                                  {new Date(
                                    review.createdAt
                                  ).toLocaleDateString("en-US", options)}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review.rating}
                                <i className="ri-star-s-fill"></i>
                              </span>
                            </div>

                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                  {/* ========== tour reviews section end =========== */}
                </div>
              </Col>

              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetails;
