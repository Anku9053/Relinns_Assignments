import React from 'react';

const Competion = () => {
  return (
    <div
      style={{
        width: '300px', // Set width for the card
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'rgb(40, 40, 40)', // Dark background for the card
        margin: '20px auto', // Center the card horizontally
      }}
    >
      <h3 style={{ color: 'rgb(255, 69, 51)', textAlign: 'center' }}>Our Approach</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <div style={{ marginRight: '10px' }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 256 256'
              focusable='false'
              style={{
                width: '24px', // Set fixed width for SVG
                height: '24px', // Set fixed height for SVG
                fill: 'rgb(255, 69, 51)', // Icon color
              }}
            >
              <g>
                <path d='M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z' />
              </g>
            </svg>
          </div>
          <p
            style={{
              fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif',
              fontSize: '16px',
              fontWeight: '500',
              color: 'rgb(252, 252, 250)', // Text color
              margin: 0,
            }}
          >
            Constant, proactive communication
          </p>
        </li>

        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <div style={{ marginRight: '10px' }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 256 256'
              focusable='false'
              style={{
                width: '24px', // Set fixed width for SVG
                height: '24px', // Set fixed height for SVG
                fill: 'rgb(255, 69, 51)', // Icon color
              }}
            >
              <g>
                <path d='M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z' />
              </g>
            </svg>
          </div>
          <p
            style={{
              fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif',
              fontSize: '16px',
              fontWeight: '500',
              color: 'rgb(252, 252, 250)', // Text color
              margin: 0,
            }}
          >
            Omni-channel approach
          </p>
        </li>

        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <div style={{ marginRight: '10px' }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 256 256'
              focusable='false'
              style={{
                width: '24px', // Set fixed width for SVG
                height: '24px', // Set fixed height for SVG
                fill: 'rgb(255, 69, 51)', // Icon color
              }}
            >
              <g>
                <path d='M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z' />
              </g>
            </svg>
          </div>
          <p
            style={{
              fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif',
              fontSize: '16px',
              fontWeight: '500',
              color: 'rgb(252, 252, 250)', // Text color
              margin: 0,
            }}
          >
            Collaborative experience
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Competion;
