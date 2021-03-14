export function getDifferenceInSeconds(dateLater: Date, dateEarlier: Date): number {
  const difference = dateLater.valueOf() - dateEarlier.valueOf();

  return difference / 1000;
}
