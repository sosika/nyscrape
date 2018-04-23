import React from "react";
import "../styles/Panel.css";

const Panel = () => (
  <div className="panel panel-default">

    <div className="panel-heading">
      Search
    </div>
      <div className="panel-body">
        <div className="mb-3">
          <label for="topic">Topic</label>
          <input type="text" class="form-control" id="Topic" placeholder="Enter topic" required />
        </div>

        <div className="mb-3">
          <label for="topic">Start Year</label>
          <input type="text" class="form-control" id="startYear" placeholder="Enter start year" required />
        </div>

        <div className="mb-3">
          <label for="topic">End Year</label>
          <input type="text" class="form-control" id="endYear" placeholder="Enter end year" required />
        </div>
        <br />

        <button className="btn btn-primary btn-lg btn-block" type="search">Search</button>

    </div>

    <div className="panel-heading">
      Results
    </div>
    <div className="panel-body">

    </div>

    <div className="panel-heading">
      Saved Articles
    </div>
    <div className="panel-body">

    </div>

  </div>
);

export default Panel;
