import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
    className={`menu-item ${size}`}
  >
    <div className="content">
      <div className="title">{title}</div>
      <span className="subtitle">Shop now</span>
    </div>
  </div>
);

export default MenuItem;
