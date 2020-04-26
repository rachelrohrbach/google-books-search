import PropTypes from 'prop-types';
import React from 'react';

export function Input(props) {
  return (
    <div className="form-group" style={{ marginTop: 30, marginRight: 30, marginBottom: 10 }}>
      <input className="form-control" {...props}/>
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button
      {...props}
      style={{
        float: `right`,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
      }}
      className="btn btn-primary"
    >
      {props.children}
    </button>
  );
}
FormBtn.propTypes = {
  children: PropTypes.node,
};
