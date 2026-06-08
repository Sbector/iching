export interface Trigram {
  number: number;
  name: string;
  symbol: string;
  binary: [0 | 1, 0 | 1, 0 | 1];
  element: string;
  family: string;
  position: string;
}

export const trigrams: Record<number, Trigram> = {
  // ☰ Qián (Heaven/Creative)
  1: {
    number: 1,
    name: "Qián",
    symbol: "☰",
    binary: [1, 1, 1],
    element: "Heaven",
    family: "Father",
    position: "Northwest",
  },
  // ☱ Duì (Lake/Joyous)
  2: {
    number: 2,
    name: "Duì",
    symbol: "☱",
    binary: [0, 1, 1],
    element: "Lake",
    family: "Youngest Daughter",
    position: "West",
  },
  // ☲ Lí (Fire/Clinging)
  3: {
    number: 3,
    name: "Lí",
    symbol: "☲",
    binary: [1, 0, 1],
    element: "Fire",
    family: "Middle Daughter",
    position: "South",
  },
  // ☳ Zhèn (Thunder/Arousing)
  4: {
    number: 4,
    name: "Zhèn",
    symbol: "☳",
    binary: [0, 0, 1],
    element: "Thunder",
    family: "Eldest Son",
    position: "East",
  },
  // ☴ Xùn (Wind/Gentle)
  5: {
    number: 5,
    name: "Xùn",
    symbol: "☴",
    binary: [1, 1, 0],
    element: "Wind",
    family: "Eldest Daughter",
    position: "Southeast",
  },
  // ☵ Kǎn (Water/Abysmal)
  6: {
    number: 6,
    name: "Kǎn",
    symbol: "☵",
    binary: [0, 1, 0],
    element: "Water",
    family: "Middle Son",
    position: "North",
  },
  // ☶ Gèn (Mountain/Keeping Still)
  7: {
    number: 7,
    name: "Gèn",
    symbol: "☶",
    binary: [1, 0, 0],
    element: "Mountain",
    family: "Youngest Son",
    position: "Northeast",
  },
  // ☷ Kūn (Earth/Receptive)
  8: {
    number: 8,
    name: "Kūn",
    symbol: "☷",
    binary: [0, 0, 0],
    element: "Earth",
    family: "Mother",
    position: "Southwest",
  },
};

// Helper to get trigram by binary representation
export function getTrigramByBinary(binary: [0 | 1, 0 | 1, 0 | 1]): Trigram {
  const entry = Object.values(trigrams).find(
    (t) => JSON.stringify(t.binary) === JSON.stringify(binary)
  );
  if (!entry) {
    throw new Error(`Trigram not found for binary: ${binary}`);
  }
  return entry;
}

// Helper to get trigram by name
export function getTrigramByName(name: string): Trigram | undefined {
  return Object.values(trigrams).find((t) => t.name === name);
}

// Export as array for iteration
export const allTrigrams = Object.values(trigrams);
