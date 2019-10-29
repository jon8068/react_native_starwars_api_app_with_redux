import { FETCH_DATA, GENERATE_FILMS, GENERATE_PEOPLE, GENERATE_PLANETS, GENERATE_SPECIES, GENERATE_STARSHIPS, GENERATE_VEHICLES, FETCH_PEOPLE_AGAIN, BACK_HOME, FETCH_PLANET_AGAIN, FETCH_SPACESHIP_AGAIN, FETCH_VEHICLE_AGAIN, GENERATE_HOMEWORLD, FETCH_FILMS_AGAIN, FETCH_SPECIES_AGAIN } from '../actions/types';

const initialState = {
  data: {},
  isLoading: true,
  people: [],
  peopleLength: 0,
  peopleLoading: true,
  film: [],
  filmLength: 0,
  filmLoading: true,
  starship: [],
  starshipLength: 0,
  starshipLoading: true,
  species: [],
  speciesLength: 0,
  speciesLoading: true,
  planet: [],
  planetLength: 0,
  planetLoading: true,
  vehicle: [],
  vehicleLength: 0,
  vehicleLoading: true,
  flagPrev: false,
  homeWorld: '',
  homeWorldLoading: true,
};

const UserReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case BACK_HOME:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GENERATE_HOMEWORLD:
      return {
        ...state,
        homeWorld: action.payload.name,
        homeWorldLoading: false,
      };
    case GENERATE_STARSHIPS:
      return {
        ...state,
        starship: action.payload,
        starshipLength: action.payload.length,
        starshipLoading: false,
      };
    case GENERATE_PEOPLE:
      return {
        ...state,
        people: action.payload,
        peopleLength: action.payload.length,
        peopleLoading: false,
      };
    case GENERATE_SPECIES:
      return {
        ...state,
        species: action.payload,
        speciesLength: action.payload.length,
        speciesLoading: false,
      };
    case GENERATE_PLANETS:
      return {
        ...state,
        planet: action.payload,
        planetLength: action.payload.length,
        planetLoading: false,
      };
    case GENERATE_VEHICLES:
      return {
        ...state,
        vehicle: action.payload,
        vehicleLength: action.payload.length,
        vehicleLoading: false,
      };
    case GENERATE_FILMS:
      return {
        ...state,
        film: action.payload,
        filmLength: action.payload.length,
        filmLoading: false,
      };
    case FETCH_PLANET_AGAIN:
      return {
        ...state,
        data: action.payload,
        peopleLoading: true,
        filmLoading: true,
      };
    case FETCH_PEOPLE_AGAIN:
      return {
        ...state,
        data: action.payload,
        starshipLoading: true,
        vehicleLoading: true,
        homeWorldLoading: true,
        speciesLoading: true,
        filmLoading: true,
      };
    case FETCH_FILMS_AGAIN:
      return {
        ...state,
        data: action.payload,
        starshipLoading: true,
        vehicleLoading: true,
        speciesLoading: true,
        planetLoading: true,
        peopleLoading: true,
      };
    case FETCH_SPACESHIP_AGAIN:
      return {
        ...state,
        data: action.payload,
        peopleLoading: true,
        filmLoading: true,
      };
    case FETCH_SPECIES_AGAIN:
      return {
        ...state,
        data: action.payload,
        peopleLoading: true,
        filmLoading: true,
        homeWorldLoading: true,
      };
    case FETCH_VEHICLE_AGAIN:
      return {
        ...state,
        data: action.payload,
        peopleLoading: true,
        filmLoading: true,
      };
    default:
      return state;
  }
};

export default UserReducer;
