/**
 * This function will generate the URL for you to call given the parameters
 * 
 * status - should be a status in the statuses file
 * from - should be a date in the format YYYY-MM-DD
 * to - should be a date in the format YYYY-MM-DD
 */

 const getAPIUrl = (status, from, to) => {
  if (from == null) {
    console.error(`Please provide a from parameter to the getAPIUrl function`);
  } else if (from.length === 0) {
    console.error(`The from parameter is empty`);
  } else if (to == null) {
    console.error(`Please provide a to parameter to the getAPIUrl function`);
  } else if (to.length === 0) {
    console.error(`The to parameter is empty`);
  } else {
    return `https://api.covid19api.com/country/nl/status/${status.toLowerCase()}?from=${from}&to=${to}`;
  }

  return '';
};

export default getAPIUrl;
