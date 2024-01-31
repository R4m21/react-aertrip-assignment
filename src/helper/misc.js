export const secondsToHms = (seconds) => {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);

  let hoursText = hours > 0 ? hours + "h " : "";
  let minutesText = minutes > 0 ? minutes + "m " : "";

  return hoursText + minutesText;
};
