import React from 'react';

const Home = () => {
  return (
    <div>
      <div>
        <h1>I am the best home component</h1>
        <button onClick={() => console.log('Hi there')}>Press me!</button>
      </div>
    </div>
  );
};

export default Home;
