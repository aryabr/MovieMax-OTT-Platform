import React from "react";

const Search = () => {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-8 offset-2 ">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search Movie"
              aria-label="Search Movie"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">
                Search Movies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
