import { useEffect } from 'react'
import './App.css'

function App() {
  const numPoints = 10;

  function createPoint(container) {
    const point = document.createElement("div");
    point.classList.add("point");
    container.appendChild(point);

    // Set initial position at the center
    point.style.left = "50%";
    point.style.top = "50%";

    // Set animation properties
    const animation = point.animate(
      [
        { transform: "translate(-50%, -50%) rotate(-50deg)" },
        { transform: "translate(20%, -40%)" }
      ],
      {
        duration: 2000 + Math.random() * 2000,
        easing: "linear",
        iterations: Infinity,
        direction: "alternate",
      }
    );

    return { point, animation };
  }

  function startAnimation(container) {
    for (let i = 0; i < numPoints; i++) {
      createPoint(container);
    }
  }

  useEffect(() => {
    const container = document.getElementById("points-container");
    if (container) {
      startAnimation(container);
    }
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div className="container" id="points-container">
    </div>
  );
}

export default App
