import React from 'react'

import "./GlassButton.css";

export default function GlassButton() {
  return (
    <div>
      <div class="button-wrap">
        <button className='button text-white'>
          <span>Generate</span>
        </button>
        <div class="button-shadow"></div>
      </div>
    </div>
  );
}
