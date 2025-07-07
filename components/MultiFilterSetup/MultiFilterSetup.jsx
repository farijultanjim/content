// components/MultiFilterSetup.js
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./MultiFilterSetup.module.scss";

const MultiFilterSetup = () => {
  const cardsRef = useRef([]);
  const filterRef = useRef([]);
  const resetRef = useRef(null);

  const filters = ["All", "Mammals", "Birds", "Aquatic", "Reptiles"];

  const [activeFilters, setActiveFilters] = useState(["All"]);
  const [showResetButton, setShowResetButton] = useState(false);
  const [prevShowReset, setPrevShowReset] = useState(false);

  const animals = [
    { id: 1, name: "Flamingo", category: "Birds", emoji: "🦩" },
    { id: 2, name: "Turtle", category: "Reptiles", emoji: "🐢" },
    { id: 3, name: "Dog", category: "Mammals", emoji: "🐕" },
    { id: 4, name: "Dolphin", category: "Aquatic", emoji: "🐬" },
    { id: 5, name: "Eagle", category: "Birds", emoji: "🦅" },
    { id: 6, name: "Deer", category: "Mammals", emoji: "🦌" },
    { id: 7, name: "Owl", category: "Birds", emoji: "🦉" },
    { id: 8, name: "Fish", category: "Aquatic", emoji: "🐠" },
    { id: 9, name: "Lion", category: "Mammals", emoji: "🦁" },
    { id: 10, name: "Shark", category: "Aquatic", emoji: "🦈" },
    { id: 11, name: "Snake", category: "Reptiles", emoji: "🐍" },
    { id: 12, name: "Parrot", category: "Birds", emoji: "🦜" },
    { id: 13, name: "Elephant", category: "Mammals", emoji: "🐘" },
    { id: 14, name: "Lizard", category: "Reptiles", emoji: "🦎" },
    { id: 15, name: "Whale", category: "Aquatic", emoji: "🐋" },
    { id: 16, name: "Frog", category: "Reptiles", emoji: "🐸" },
  ];

  useEffect(() => {
    const shouldShow =
      !activeFilters.includes("All") && activeFilters.length > 0;
    setPrevShowReset(showResetButton);
    setShowResetButton(shouldShow);
  }, [activeFilters]);

  const filteredAnimals = activeFilters.includes("All")
    ? animals
    : animals.filter((animal) => activeFilters.includes(animal.category));

  useEffect(() => {
    if (showResetButton && !prevShowReset && resetRef.current) {
      gsap.fromTo(
        resetRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    }

    if (!showResetButton && prevShowReset && resetRef.current) {
      gsap.set(resetRef.current, { opacity: 0 });
    }
  }, [showResetButton, prevShowReset]);

  const handleFilterClick = (filter, index) => {
    if (filter === "All") {
      setActiveFilters(["All"]);
    } else {
      setActiveFilters((prev) => {
        const newFilters = prev.filter((f) => f !== "All");

        if (newFilters.includes(filter)) {
          const updated = newFilters.filter((f) => f !== filter);
          return updated.length === 0 ? ["All"] : updated;
        } else {
          return [...newFilters, filter];
        }
      });
    }

    gsap.to(filterRef.current[index], {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  };

  const handleReset = () => {
    setActiveFilters(["All"]);

    // Animate reset button
    gsap.to(resetRef.current, {
      scale: 0.9,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  };

  useEffect(() => {
    if (cardsRef.current.length === 0) return;

    gsap.set(cardsRef.current, { opacity: 0 });
    gsap.to(cardsRef.current, {
      opacity: 1,
      duration: 0.3,
      delay: 0.2,
      ease: "power2.out",
    });
  }, [activeFilters]);

  useEffect(() => {
    gsap.set(cardsRef.current, { opacity: 0 });
    gsap.to(cardsRef.current, {
      opacity: 1,
      duration: 0.3,
      delay: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Multi Filter Setup</h1>

      <div className={styles.filterContainer}>
        {filters.map((filter, index) => (
          <button
            key={filter}
            ref={(el) => (filterRef.current[index] = el)}
            className={`${styles.filterButton} ${
              activeFilters.includes(filter) ? styles.active : ""
            }`}
            onClick={() => handleFilterClick(filter, index)}
          >
            {filter}
          </button>
        ))}

        {showResetButton && (
          <button
            ref={resetRef}
            className={styles.resetButton}
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </div>

      <div className={styles.cardsGrid}>
        {filteredAnimals.map((animal, index) => (
          <div
            key={animal.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={styles.card}
          >
            <div className={styles.emoji}>{animal.emoji}</div>
            <div className={styles.animalName}>{animal.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiFilterSetup;
