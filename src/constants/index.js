//Base URL
const base_url = "https://api.rawg.io/api/";

//API key
export const apiKey = process.env.REACT_APP_APIKEY;


const getCurrentMonth = function () {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = function () {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

export const popularGames = `${base_url}games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`
export const latestGames = `${base_url}games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=4`
export const upcomingGames = `${base_url}games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=20`

export const fetchActionGames = `${base_url}games?key=${apiKey}&genres=4`;
export const fetchAdventureGames = `${base_url}games?key=${apiKey}&genres=3`;
export const fetchRacingGames = `${base_url}games?key=${apiKey}&genres=1`;
export const fetchShooterGames = `${base_url}games?key=${apiKey}&genres=2`;
export const fetchStrategyGames = `${base_url}games?key=${apiKey}&genres=10`;
export const fetchSimulationGames = `${base_url}games?key=${apiKey}&genres=14`;

export const fetchPCGames = `${base_url}games?key=${apiKey}&platforms=4&dates=${lastYear},${currentDate}&page_size=20`;
export const fetchPS4Games = `${base_url}games?key=${apiKey}&platforms=18&dates=${lastYear},${currentDate}&page_size=20`;
export const fetchXboxGames = `${base_url}games?key=${apiKey}&platforms=1&dates=${lastYear},${currentDate}&page_size=20`;
export const fetchNintendoGames = `${base_url}games?key=${apiKey}&platforms=7&dates=${lastYear},${currentDate}&page_size=20`;

export const searchGames = `${base_url}games?key=${apiKey}&search=`
