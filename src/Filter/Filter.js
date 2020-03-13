import React from 'react';

class Filter extends React.Component {
  render() {
    return (
      <div id="filter">
        <select>
          <option value="all">Search All</option>
          <option value="planets">Search Planets</option>
          <option value="spaceships">Search Spaceships</option>
          <option value="vehicles">Search Vehicles</option>
          <option value="characters">Search Characters</option>
          <option value="films">Search Films</option>
          <option value="species">Search Species</option>
        </select>
      </div>
    )
  }
};

export default Filter;