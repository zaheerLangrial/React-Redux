import React from "react";

function Header(props) {
  console.log(props.data);
  return (
    <div>
      <h1>{props.data.length}</h1>
    </div>
  );
}

export default Header;
