export const isPlural = (len: number): string => {
  return len > 1 || len === 0 ? 's' : '';
};
