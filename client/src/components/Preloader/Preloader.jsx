import React from 'react'
import './preloader.css'
export default function Preloader() {
  return (
    <div className='preloader'>

      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240 240" style={{enableBackground: 'new 0 0 240 240'}} xmlSpace="preserve">
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t.stmoon__light{fill:#B8B499;}\n\t.stmoon__dark{fill:#2D2B24;}\n\t.stmoon__halo{fill:none;stroke:#2D2B24;stroke-width:7;stroke-miterlimit:10;}\n" }} />
        <defs>
          <filter id="smooth__corners">
            <feGaussianBlur in="SourceGraphic" stdDeviation={3} result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -14" />
          </filter>	
        </defs>
        <path id="moon__bottom" className="stmoon__dark" clipPath="url(#moon_shape)" d="M181.9,104.3c-3.8,1.1-7.8-1.1-8.9-5c-1.1-3.8,1.1-7.8,5-8.9c0.2-0.1,0.4-0.1,0.5-0.1 c-3.4-6.8-8-12.9-13.6-18c-1.3,4.6-5.5,7.9-10.5,7.9c-6.1,0-11-4.9-11-11c0-3.3,1.5-6.3,3.8-8.3c-7.4-3.2-15.6-4.9-24.2-4.9 c-34.2,0-62,27.8-62,62c0,4.5,0.5,8.8,1.4,13c1.2-1.6,3.2-2.7,5.4-2.7c3.7,0,6.8,3,6.8,6.8c0,3.7-3,6.8-6.8,6.8 c-0.7,0-1.5-0.1-2.1-0.4c3.9,9.4,9.9,17.6,17.6,24.1c-0.1-0.5-0.2-1-0.2-1.6c0-4.7,3.8-8.5,8.5-8.5s8.5,3.8,8.5,8.5 c0,4.2-3,7.6-6.9,8.3c8.9,4.9,19.1,7.7,29.9,7.7c34.2,0,62-27.8,62-62c0-4.9-0.6-9.7-1.7-14.3C182.9,103.9,182.4,104.1,181.9,104.3 z M79.4,144.5c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6c2,0,3.6,1.6,3.6,3.6S81.5,144.5,79.4,144.5z M83.1,124.4 c0-6.3,5.1-11.4,11.4-11.4s11.4,5.1,11.4,11.4c0,6.3-5.1,11.4-11.4,11.4S83.1,130.8,83.1,124.4z M104.2,149.7 c-3.8,0-6.9-3.1-6.9-6.9c0-3.8,3.1-6.9,6.9-6.9c3.8,0,6.9,3.1,6.9,6.9C111.1,146.6,108,149.7,104.2,149.7z M117.5,143.1 c-0.7,1.2-2.2,1.6-3.4,0.9c-1.2-0.7-1.6-2.2-0.9-3.4s2.2-1.6,3.4-0.9C117.8,140.4,118.2,141.9,117.5,143.1z M130.9,67.7 c0.8-2.4,3.4-3.7,5.8-2.9c2.4,0.8,3.7,3.4,2.9,5.8c-0.8,2.4-3.4,3.7-5.8,2.9C131.4,72.7,130.1,70.1,130.9,67.7z M142,100.3 c-3.7,0-6.8-3-6.8-6.8c0-3.7,3-6.8,6.8-6.8s6.8,3,6.8,6.8C148.7,97.3,145.7,100.3,142,100.3z M153.6,102.7c-0.4,1.3-1.8,2-3.1,1.6 c-1.3-0.4-2-1.8-1.6-3.1c0.4-1.3,1.8-2,3.1-1.6C153.3,100,154,101.4,153.6,102.7z M161.1,94.8c-3.3,0-6-2.7-6-6s2.7-6,6-6 c3.3,0,6,2.7,6,6S164.4,94.8,161.1,94.8z"> 
          <animateMotion dur="4s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" path="M-5,7 L2,-1" calcMode="linear" />
        </path>
        <path id="moon_topside" className="stmoon__light" d="M177.5,106.6c-3.7,1.1-7.6-1.1-8.7-4.8c-1.1-3.7,1.1-7.6,4.8-8.7c0.2,0,0.3-0.1,0.5-0.1 c-3.3-6.7-7.9-12.6-13.3-17.6c-1.3,4.4-5.4,7.7-10.3,7.7c-5.9,0-10.7-4.8-10.7-10.7c0-3.2,1.4-6.1,3.7-8.1 c-7.3-3.1-15.3-4.8-23.6-4.8c-33.5,0-60.6,27.1-60.6,60.6c0,4.4,0.5,8.6,1.3,12.7c1.2-1.6,3.1-2.6,5.3-2.6c3.6,0,6.6,3,6.6,6.6 c0,3.6-3,6.6-6.6,6.6c-0.7,0-1.4-0.1-2.1-0.3c3.8,9.2,9.7,17.2,17.2,23.5c-0.1-0.5-0.1-1-0.1-1.5c0-4.6,3.7-8.3,8.3-8.3 s8.3,3.7,8.3,8.3c0,4.1-2.9,7.4-6.8,8.1c8.7,4.8,18.6,7.5,29.2,7.5c33.5,0,60.6-27.1,60.6-60.6c0-4.8-0.6-9.5-1.6-14 C178.5,106.2,178,106.4,177.5,106.6z M77.4,145.9c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6c2,0,3.6,1.6,3.6,3.6S79.4,145.9,77.4,145.9 z M81,126.3c0-6.2,5-11.2,11.2-11.2s11.2,5,11.2,11.2s-5,11.2-11.2,11.2S81,132.5,81,126.3z M101.6,151c-3.7,0-6.8-3-6.8-6.8 s3-6.8,6.8-6.8s6.8,3,6.8,6.8S105.4,151,101.6,151z M114.6,144.5c-0.7,1.2-2.1,1.5-3.3,0.9s-1.5-2.1-0.9-3.3s2.1-1.5,3.3-0.9 S115.3,143.4,114.6,144.5z M127.7,70.9c0.8-2.3,3.3-3.6,5.6-2.8c2.3,0.8,3.6,3.3,2.8,5.6c-0.8,2.3-3.3,3.6-5.6,2.8 C128.2,75.8,126.9,73.2,127.7,70.9z M138.5,102.7c-3.6,0-6.6-3-6.6-6.6s3-6.6,6.6-6.6s6.6,3,6.6,6.6S142.2,102.7,138.5,102.7z M149.9,105c-0.4,1.3-1.8,1.9-3.1,1.5c-1.3-0.4-1.9-1.8-1.5-3.1c0.4-1.3,1.8-1.9,3.1-1.5C149.6,102.4,150.3,103.8,149.9,105zM157.3,97.3c-3.2,0-5.8-2.6-5.8-5.8s2.6-5.8,5.8-5.8s5.8,2.6,5.8,5.8S160.5,97.3,157.3,97.3z" />
        <g id="moon__shadow" filter="url(#smooth__corners)">
          <circle id="Halo" className="stmoon__halo" cx={120} cy={120} r={64} />
          <path fill="#2D2B24"> 
            <animate attributeName="d" dur="4s" repeatCount="indefinite" calcMode="linear" keyTimes="0;0.49;0.5;1" values="M180.6,103.1c13.7,56-40.9,76.8-45.7,78c-4.8,1.2-62.4,9.8-76.1-46.1S105,58.9,105,58.9S166.8,46.7,180.6,103.1z;
	            		M58.5,133c13.7,56,81.2,46.9,76.4,48.1c-4.8,1.2-62.4,9.8-76.1-46.1S105,58.9,105,58.9S44.7,76.6,58.5,133z;
	            		M105.2,58.9c0,0,62.4-9.8,76.1,46.1c13.7,55.9-41.4,74.9-46.1,76.1c-4.8,1.2,59.3-21.9,45.6-78C166.9,46.7,105.2,58.9,105.2,58.9z;
						M105,58.9c0,0,62.4-9.8,76.1,46.1c13.7,55.9-41.4,74.9-46.1,76.1c-4.8,1.2-62.8,8-76.5-48.1C44.6,76.6,105,58.9,105,58.9z" />
          </path>
        </g>	
      </svg>
    </div>
  )
}
