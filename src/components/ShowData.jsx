import React from "react";
import { connect } from "react-redux";

const ShowData = ({ data, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>{data?.id}</h1>
      <h2>{data?.title}</h2>
      <h2>{data?.body}</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.getApiReducer.loading,
  data: state.getApiReducer.data
});
export default connect(mapStateToProps)(ShowData);
