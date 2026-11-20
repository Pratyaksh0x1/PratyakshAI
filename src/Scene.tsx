import React from "react";
import { PerformanceGauges } from "./shaders/neuform-isolated/NeuformIsolatedEffects";
import "./shaders/threeui.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <PerformanceGauges
        variant="tachometer"
        hue={0}
        saturation={1.00}
        brightness={1.00}
      />
    </div>
  );
}

export default Scene;
