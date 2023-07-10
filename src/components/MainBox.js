import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

  const [details, setDetails] = useState("profile");

  let menuDisplay;
  if (details === "profile") {
    menuDisplay = <Profile />;
  } else if (details === "photo") {
    menuDisplay = <Photos />;
  } else if (details === "cocktail") {
    menuDisplay = <Cocktails />;
  } else if (details === "pokemon") {
    menuDisplay = <Pokemon />;
  }

  return (
    <div>
      <MenuBar menuDisplay={menuDisplay} setDetails={setDetails} details={details} />
    </div>
  );
}

export default MainBox;
