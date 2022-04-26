import React from "react";
import "./MenuItem.css";
function MenuItem({ Icon, name }) {
  return (
    <div className='menuItem'>
      <Icon className='icon' />
      <h4>{name}</h4>
    </div>
  );
}

export default MenuItem;
