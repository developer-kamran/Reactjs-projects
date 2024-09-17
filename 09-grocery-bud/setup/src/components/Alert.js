import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Alert = ({ show, type, msg }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      return (show = false);
    }, 2000);
    return () => clearTimeout(timeout);
  });
  return <p className={`alert alert-${type}`}>{msg}</p>;
};
const mapStateToProps = (state) => {
  const { show, type, msg } = state.showAlert;
  return { show, type, msg };
};
export default connect(mapStateToProps)(Alert);
