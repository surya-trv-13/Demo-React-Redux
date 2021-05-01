import React from "react";
import { connect } from "react-redux";
import { setInputvalue } from "../actions/inputValueAction";

const Component2 = ({ setValue }) => {
  return (
    <>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setValue: (data) => dispatch(setInputvalue(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component2);
