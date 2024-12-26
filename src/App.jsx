import React from "react";
import Navbar from "./components/Navbar";
import PlaygroundSpeedDial from "./components/Dial";

import TitlebarImageList from "./components/Image_list";
import MarginAndLabelPosition from "./components/Axis";
import ColorSlider from "./components/Slider";
import MediaControlCard from "./components/Card";
import HideAppBar from "./components/Body";

export default function App() {
  return (
    <div>
      <Navbar />
      <MarginAndLabelPosition />
      <ColorSlider />
      <TitlebarImageList />
      <MediaControlCard />
      <HideAppBar />
      <PlaygroundSpeedDial />
    </div>
  );
}
