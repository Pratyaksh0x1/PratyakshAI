import React from "react";
import { createRoot } from "react-dom/client";
import Scene from "./Scene";

export function mountPerformanceGauges(containerId = "projects-gauge-clock") {
  const container = document.getElementById(containerId);
  if (!container) return;
  const root = createRoot(container);
  root.render(<Scene />);
  return root;
}

if (typeof window !== "undefined") {
  const init = () => {
    const el = document.getElementById("projects-gauge-clock");
    if (el && !el.dataset.gaugesMounted) {
      el.dataset.gaugesMounted = "true";
      mountPerformanceGauges("projects-gauge-clock");
    }
    const legacy = document.getElementById("projects-performance-gauge");
    if (legacy && !legacy.dataset.gaugesMounted) {
      legacy.dataset.gaugesMounted = "true";
      mountPerformanceGauges("projects-performance-gauge");
    }
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  (window as any).mountPerformanceGauges = mountPerformanceGauges;
  (window as any).mountSketchbook = mountPerformanceGauges;
}
