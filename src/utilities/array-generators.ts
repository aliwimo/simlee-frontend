export const generateWeeks = (teams_number: number) => {
  return Array.from({ length: (teams_number * 2) - 2 }, (_, i) => ({
    value: i + 1,
    label: `Week ${i + 1}`,
  }));
};

export const generateSeasons = () => {
  return Array.from({ length: 2100 - 2000 + 1 }, (_, i) => 2000 + i);
};

export const generateTeamNumbers = () => {
  return Array.from({ length: (20 - 4) / 2 + 1 }, (_, i) => 4 + i * 2);
};
