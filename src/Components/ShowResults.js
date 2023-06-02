import React from "react";

import { Link } from "react-router-dom";
import Input from "./Input";
import "./ShowResults.css";

export default function ShowResults(props) {
  if (props.error !== null) {
    return (
      <h1>
        An error occurred, try again later or check your internet connection.
      </h1>
    );
  }
  if (props.data === null) {
    return <h1 className="gradient-custom">Loading...</h1>;
  }
  if (props.data !== null && props.error === null) {
    if (props.data.length === 0) {
      return (
        <div className="no-results-search ">
          <h1>
            We couldn't find anything that matches your search. Maybe try
            something else?
          </h1>
        </div>
      );
    } else {
      var listItem = props.data.map((element) => {
        return (
          <div
            className="card list-item gradient-custom"
            key={element.show.id}
            style={{ width: "auto" }}
          >
            <img
              src={element.show.image.medium}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <span
                className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
                style={{ left: "90%", zIndex: "1" }}
              >
                <span class="visually-hidden">unread messages</span>
              </span>

              <p className="fs-4">{element.show.name}</p>
              <hr />

              <p className="card-text">{element.show.summary}...</p>

              <a
                href={element.show.url}
                target="_blank"
                className="btn btn-primary my-3 "
              >
                Read More
              </a>
              <a href="/Input" className="btn btn-primary ">
                Book Ticket
              </a>
            </div>
          </div>
        );
      });
    }
  }
  return <ul className="list-container">{listItem}</ul>;
}
