import React, { useState } from "react";
import { connect } from "react-redux";
import { setKeyValue } from "../actions/setKeyValueAction";

const DynamicReducer = ({ setkeyValue }) => {
  const [key, setKey] = useState(null);
  const [value, setValue] = useState(null);

  const handleKey = (event) => {
    setKey(event.target.value);
  };

  const handleValue = (event) => {
    setValue(event.target.value);
  };
  const handleSendData = () => {
    setkeyValue(key, value);
  };

  return (
    <div>
      <div>
        <label>Key::</label>
        <input onChange={handleKey} type="text" name="key" />
      </div>
      <div>
        <label>Value::</label>
        <input onChange={handleValue} type="text" name="value" />
      </div>
      <button type="submit" onClick={handleSendData}>
        ADD
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setkeyValue: (key, value) => dispatch(setKeyValue(key, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(DynamicReducer);
