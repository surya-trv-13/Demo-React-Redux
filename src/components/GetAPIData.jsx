import React, { useState } from "react";
import { connect } from "react-redux";
import { setButtonClick } from "../actions/getApiDataAction";

const GetAPIData = ({ setValue }) => {
  const [id, setId] = useState(0);
  const handleClick = () => {
    setValue(id);
  };
  return (
    <>
      <label>Enter ID to get Data: </label>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Seacrh</button>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setValue: (data) => dispatch(setButtonClick(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(GetAPIData);
