import React from "react";

function MenuBar({
  menuDisplay,
  setDetails,
  details
}) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  function handleClick(selected) {
    setDetails(selected)
  }
  

  return (
    <>
      <div className="ui four item menu">
        <span onClick={() => handleClick("profile")} className={details === "profile" ? "item active" : "item"}>
          <i className="user large icon" />
        </span>

        <span onClick={() => handleClick("photo")} className={details === "photo" ? "item active" : "item"}>
          <i className="photo large icon" />
        </span>

        <span onClick={() => handleClick("cocktail")} className={details === "cocktail" ? "item active" : "item"}>
          <i className="cocktail large icon" />
        </span>

        <span onClick={() => handleClick("pokemon")} className={details === "pokemon" ? "item active" : "item"}>
          <i className=" themeisle large icon" />
        </span>
      </div>

      <div>{menuDisplay}</div>
    </>
  );
}

export default MenuBar;
