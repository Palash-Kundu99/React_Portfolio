import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generatesStars();
    generateMeteors();

    const handleResize = () => {
      generatesStars();
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generatesStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000 //numbers of stars
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // For random size stars
        x: Math.random() * 100, // for any position , 100 is 100%
        y: Math.random() * 100, // for any position, 100 is 100%
        opacity: Math.random() * 0.5 + 0.5, // so that some starts look fade and some bright
        animationDuration: Math.random() * 4 + 2, //some goes faster some slower...
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;

    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // For random size stars
        x: Math.random() * 100, // for any position , 100 is 100%
        y: Math.random() * 20, // for any position, 20 is 20%
        delay: Math.random() * 15, // frequency of meteors
        animationDuration: Math.random() * 3 + 3, //some goes faster some slower...
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            //class we set in index.css
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteors) => (
        <div
          key={meteors.id}
          className="meteor animate-meteor"
          style={{
            //class we set in index.css
            width: meteors.size * 50 + "px",
            height: meteors.size * 2 + "px",
            left: meteors.x + "%",
            top: meteors.y + "%",
            animationDelay: meteors.delay,
            animationDuration: meteors.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
