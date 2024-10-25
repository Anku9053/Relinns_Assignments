import React from 'react';

const Funnel = () => {
  return (
    <div>
      <div className='framer-uqfx0z' data-framer-name='Box' name='Box'>
        <div className='framer-88ev2s-container'>
          <div style={{ height: '100%', width: '100%' }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 430 430'
              width={430}
              height={430}
              preserveAspectRatio='xMidYMid slice'
              style={{
                width: '100%',
                height: '100%',
                transform: 'translate3d(0px, 0px, 0px)',
              }}
            >
              <defs>
                <clipPath id='clipPath1'>
                  <rect width={430} height={430} />
                </clipPath>
                <clipPath id='clipPath2'>
                  <path d='M0,0 L430,0 L430,430 L0,430z' />
                </clipPath>
                <filter id='filter1' filterUnits='objectBoundingBox' x='0%' y='0%' width='100%' height='100%'>
                  <feComponentTransfer in='SourceGraphic'>
                    <feFuncA type='table' tableValues='1.0 0.0' />
                  </feComponentTransfer>
                </filter>
                <mask id='mask1' mask-type='alpha'>
                  <g filter='url(#filter1)'>
                    <rect width={430} height={430} fill='#ffffff' opacity={0} />
                    <g
                      transform='matrix(1.3993197679519653,0.4819796085357666,-0.4819796085357666,1.3993197679519653,338.18927001953125,313.390380859375)'
                      opacity={1}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        fillOpacity={0}
                        stroke='rgb(255,0,0)'
                        strokeOpacity={1}
                        strokeWidth={63}
                        d='M21.486,21.427C21.486,21.427,46.642,46.152,46.642,46.152'
                      />
                      <path
                        fill='rgb(255,0,0)'
                        d='M20.8,-37.791C36.996,-21.595 36.996,4.665 20.8,20.861C4.604,37.057 -21.657,37.057 -37.853,20.861C-54.049,4.665 -54.049,-21.595 -37.853,-37.791C-21.657,-53.987 4.604,-53.987 20.8,-37.791Z'
                      />
                    </g>
                  </g>
                </mask>
              </defs>
              <g clipPath='url(#clipPath1)'>
                <g clipPath='url(#clipPath2)' style={{ display: 'block' }}>
                  <g transform='matrix(0.9541877508163452,-0.29920846223831177,0.29920846223831177,0.9541877508163452,-109.490478515625,62.861480712890625)' style={{ display: 'block' }}>
                    <g transform='matrix(1,0,0,1,249.439,220.582)'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        fillOpacity={0}
                        className='primary'
                        stroke='rgb(255,255,255)'
                        strokeOpacity={1}
                        strokeWidth={12}
                        d='M61.966,-47.404C61.966,-47.404 61.966,-44.269 61.966,-44.269C61.966,-44.269 61.966,-13.815 61.966,-13.815C61.966,19.991 34.553,47.404 0.747,47.404C0.747,47.404 -0.747,47.404 -0.747,47.404C-34.553,47.404 -61.966,19.991 -61.966,-13.815C-61.966,-13.815 -61.966,-43.843 -61.966,-43.843'
                      />
                    </g>
                    <g transform='matrix(1,0,0,1,245.972,128.264)'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        fillOpacity={0}
                        className='secondary'
                        stroke='rgb(255,69,51)'
                        strokeOpacity={1}
                        strokeWidth={12}
                        d='M65.433,48.048C65.433,48.048 68.049,8.440 27.444,-12.734C27.444,-12.734 15.051,33.288 -62.399,49.327C-62.399,49.327 -88.953,-28.866 -55.793,-47.855C-52.078,-49.982 -45.982,-49.765 -42.377,-47.457C-37.317,-44.218 -32.241,-38.938 -29.041,-36.213C-26.612,-34.144 -23.5,-33.042 -20.313,-33.198C-15.92,-33.413 -9.836,-34.673 -3.83,-37.894C44.222,-56.993 72.995,-35.013 72.409,-6.507C71.864,20.020 74.899,42.069 65.433,48.048z'
                      />
                    </g>
                  </g>
                  <g mask='url(#mask1)' style={{ display: 'block' }}>
                    <g transform='matrix(-1,0,0,1,465,-35)' opacity={1}>
                      <g transform='matrix(1,0,0,1,248.754,284.146)' style={{ display: 'block' }}>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          fillOpacity={0}
                          className='primary'
                          stroke='rgb(255,255,255)'
                          strokeOpacity={1}
                          strokeWidth={12}
                          d='M-19.721,-17.811C-19.721,-17.811 -20.96,2.618 -20.96,2.618C-22.056,18.442 -9.669,31.426 7.750,32.656C7.750,32.656 10.233,32.831 10.233,32.831C27.651,34.060 42.668,22.223 43.765,6.398C43.765,6.398 45.375,-2.244 45.375,-2.244'
                        />
                      </g>
                      {/* Additional SVG elements can be added here as needed */}
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funnel;
