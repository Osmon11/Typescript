export const shuffleArr = (arr: any[]) =>
  [...arr].sort(() => Math.random() - 0.5);
