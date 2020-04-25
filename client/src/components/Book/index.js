import React from 'react';
import { ListItem } from '../List';
import { Row, Col } from '../Grid';
import './style.css';

function Book(props) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8" key={props.id}>
          <h3 className="font-italic">{props.title}</h3>
          {props.subtitle && <h5 className="font-italic">{props.subtitle}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a
              className="btn btn-light ml-2"
              target="_blank"
              rel="noopener noreferrer"
              href={props.link}
            >
              View
            </a>
            <button className={props.submitBtnClassName} onClick={props.onSubmit}>
              {props.submitLabel}
            </button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">Written by {props.authors ? props.authors.join(',') : "Unknown author"}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          <img
            className="img-thumbnail img-fluid w-100"
            src={props.image}
            alt={props.title}
          />
        </Col>
        <Col size="12 sm-8 md-10">
          <p>{props.description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
