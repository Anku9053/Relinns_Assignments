import React from 'react';

const Product = () => {
  const cardStyle = {
    width: '100%',
    height: '100%',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    gap: "2rem",
    border: '1px solid #ccc',
    borderRadius: '8px',
    // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div  style={{
      padding:'1rem',
      boxSizing:"border-box",
      // padding: '2rem',
      width:'90%',
      margin:"auto",
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)', // Create three equal columns
      gap: '3rem', // Set the gap between cards
    }}>
    <div
     
    >
      {/* Card 1 */}
      <div style={cardStyle}>
        {/* Video Section */}
        <div style={{ position: 'relative', width: '100%', height: '200px' }}>
          <iframe
            src='https://iframe.mediadelivery.net/embed/234627/cd8c4c22-d07a-4258-9e11-226268b5334c?autoplay=false&loop=false&muted=false&preload=false&responsive=false'
            loading='lazy'
            style={{
              border: '0',
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
            }}
            allow='accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;'
            allowFullScreen
          />
        </div>
        {/* Information Section */}
        <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
          <p style={{ color: '#999', fontStyle: 'italic' }}>
            "Our results and online presence went through the roof more or less overnight, mind-blowing!"
          </p>
        </div>
        {/* Client Section */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontWeight: '500', margin: '0.25rem 0' }}>Malik Shkraba</p>
          <p style={{ fontSize: '12px', color: '#999' }}>COO of Friday</p>
        </div>
      </div>

      {/* Card 2 */}
     
    </div>
    <div
    style={{
     
    }}
  >
    {/* Card 1 */}
    <div style={cardStyle}>
      {/* Video Section */}
      <div style={{ position: 'relative', width: '100%', height: '200px' }}>
        <iframe
          src='https://iframe.mediadelivery.net/embed/234627/cd8c4c22-d07a-4258-9e11-226268b5334c?autoplay=false&loop=false&muted=false&preload=false&responsive=false'
          loading='lazy'
          style={{
            border: '0',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
          allow='accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;'
          allowFullScreen
        />
      </div>
      {/* Information Section */}
      <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
        <p style={{ color: '#999', fontStyle: 'italic' }}>
          "Our results and online presence went through the roof more or less overnight, mind-blowing!"
        </p>
      </div>
      {/* Client Section */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontWeight: '500', margin: '0.25rem 0' }}>Malik Shkraba</p>
        <p style={{ fontSize: '12px', color: '#999' }}>COO of Friday</p>
      </div>
    </div>

    {/* Card 2 */}
   
  </div>
  <div
  style={{
   
  }}
>
  {/* Card 1 */}
  <div style={cardStyle}>
    {/* Video Section */}
    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
      <iframe
        src='https://iframe.mediadelivery.net/embed/234627/cd8c4c22-d07a-4258-9e11-226268b5334c?autoplay=false&loop=false&muted=false&preload=false&responsive=false'
        loading='lazy'
        style={{
          border: '0',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
        }}
        allow='accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;'
        allowFullScreen
      />
    </div>
    {/* Information Section */}
    <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
      <p style={{ color: '#999', fontStyle: 'italic' }}>
        "Our results and online presence went through the roof more or less overnight, mind-blowing!"
      </p>
    </div>
    {/* Client Section */}
    <div style={{ textAlign: 'center' }}>
      <p style={{ fontWeight: '500', margin: '0.25rem 0' }}>Malik Shkraba</p>
      <p style={{ fontSize: '12px', color: '#999' }}>COO of Friday</p>
    </div>
  </div>

  {/* Card 2 */}
 
</div>
</div>
  );
};

export default Product;
