import axios from 'axios';
import { FETCH_DATA, GENERATE_FILMS, GENERATE_PEOPLE, GENERATE_PLANETS, GENERATE_SPECIES, GENERATE_STARSHIPS, GENERATE_VEHICLES, FETCH_PEOPLE_AGAIN, BACK_HOME, FETCH_PLANET_AGAIN, FETCH_SPACESHIP_AGAIN, FETCH_VEHICLE_AGAIN, FETCH_FILMS_AGAIN, GENERATE_HOMEWORLD, FETCH_SPECIES_AGAIN } from './types';

export function fetchPlanets() {

    return (dispatch) => {
        axios.get(`https://swapi.co/api/planets/${Math.floor(Math.random() * 61)}/`).then(({ data }) => {
            dispatch({ type: FETCH_DATA, payload: data });
        }).catch((err) => {
            console.log(err);
        });
    };
}

export function fetchPlanetsAgain() {
    return (dispatch) => {
        axios.get(`https://swapi.co/api/planets/${Math.floor(Math.random() * 61)}/`).then(({ data }) => {
            dispatch({ type: FETCH_PLANET_AGAIN, payload: data });
        }).catch((err) => {
            console.log(err);
        });
    };
}

export function fetchSpaceships() {

    const spaceshipArray = [2, 5, 9, 10, 11, 12, 13, 15, 21, 22, 23, 27,
        28, 29, 31, 32, 39, 40, 41, 43, 47, 48, 49];

    return (dispatch) => {

        axios.get(`https://swapi.co/api/starships/${spaceshipArray[Math.floor(Math.random() * 14)]}/`).then(({ data }) => {
            dispatch({ type: FETCH_DATA, payload: data });
        }).catch((err) => {
            console.log(err);
        });
    };
}

export function fetchSpaceshipsAgain() {

    const spaceshipArray = [2, 5, 9, 10, 11, 12, 13, 15, 21, 22, 23, 27,
        28, 29, 31, 32, 39, 40, 41, 43, 47, 48, 49];

    return (dispatch) => {

        axios.get(`https://swapi.co/api/starships/${spaceshipArray[Math.floor(Math.random() * 14)]}/`).then(({ data }) => {
            dispatch({ type: FETCH_SPACESHIP_AGAIN, payload: data });
        }).catch((err) => {
            console.log(err);
        });
    };
}

export function fetchVehicles() {

    const vehicleArray = [4, 5, 7, 8, 14, 16, 18, 19, 20, 24, 25, 26, 30,
        33, 34, 35, 36, 37, 38, 42, 44, 45, 46, 50, 51, 53, 54, 55, 56,
        57, 60, 62, 67, 69];

    return (dispatch) => {

        axios.get(`https://swapi.co/api/vehicles/${vehicleArray[Math.floor(Math.random() * vehicleArray.length)]}/`).then(({ data }) => {
            dispatch({ type: FETCH_DATA, payload: data });
        }).catch((err) => {
            console.log(err);
        });
    };
}

export function fetchVehiclesAgain() {

    const vehicleArray = [4, 5, 7, 8, 14, 16, 18, 19, 20, 24, 25, 26, 30,
        33, 34, 35, 36, 37, 38, 42, 44, 45, 46, 50, 51, 53, 54, 55, 56,
        57, 60, 62, 67, 69];

    return (dispatch) => {

        axios.get(`https://swapi.co/api/vehicles/${vehicleArray[Math.floor(Math.random() * vehicleArray.length)]}/`).then(({ data }) => {
            dispatch({ type: FETCH_VEHICLE_AGAIN, payload: data });
        }).catch((err) => {
            console.log(err);
        });
    };
}

export function fetchPeople() {
    return (dispatch) => {
        axios.get(`https://swapi.co/api/people/${Math.floor(Math.random() * 87)}/`).then(({ data }) => {
            dispatch({ type: FETCH_DATA, payload: data });
        }).catch((err) => {
            console.log(err);
        });
    };
}

export function fetchPeopleAgain() {
    return (dispatch) => {
        axios.get(`https://swapi.co/api/people/${Math.floor(Math.random() * 87)}/`).then(({ data }) => {
            dispatch({ type: FETCH_PEOPLE_AGAIN, payload: data });
        }).catch((err) => {
            console.log(err);
        });
    };
}

export function fetchFilms() {
    return (dispatch) => {
        axios.get(`https://swapi.co/api/films/${Math.floor(Math.random() * 7)}/`).then(({ data }) => {
            dispatch({ type: FETCH_DATA, payload: data });
        }).catch((err) => {
            console.log(err);
        });
    };
}

export function fetchFilmsAgain() {
    return (dispatch) => {
        axios.get(`https://swapi.co/api/films/${Math.floor(Math.random() * 7)}/`).then(({ data }) => {
            dispatch({ type: FETCH_FILMS_AGAIN, payload: data });
        }).catch((err) => {
            console.log(err);
        });
    };
}

export function fetchSpecies() {
    return (dispatch) => {
        axios.get(`https://swapi.co/api/species/${Math.floor(Math.random() * 37)}/`).then(({ data }) => {
            dispatch({ type: FETCH_DATA, payload: data });
        }).catch((err) => {
            console.log(err);
        });
    };
}

export function fetchSpeciesAgain() {
    return (dispatch) => {
        axios.get(`https://swapi.co/api/species/${Math.floor(Math.random() * 37)}/`).then(({ data }) => {
            dispatch({ type: FETCH_SPECIES_AGAIN, payload: data });
        }).catch((err) => {
            console.log(err);
        });
    };
}

export function backHome() {
    return (dispatch) => {
        dispatch({ type: BACK_HOME, payload: true });
    };
}

export function getHomeWorld(resData) {

    return (dispatch) => {
        axios.get(resData).then(({ data }) => {
            dispatch({ type: GENERATE_HOMEWORLD, payload: data });
        }).catch((err) => {
            console.log(err);
        });
    };
}

export function getPeople(resData) {

    const peopleTemp = [];

    return (dispatch) => {
        if (resData.length !== 0) {
        resData.map((resCounter) => {
            axios.get(resCounter)
                .then((response) => {
                    peopleTemp.push(response.data.name);
                    dispatch({ type: GENERATE_PEOPLE, payload: peopleTemp });
                }).catch((err) => {
                    console.log(err);
                });
            });
        } else {
            dispatch({ type: GENERATE_PEOPLE, payload: peopleTemp });
        }
    };
}

export function getSpecies(resData) {

    const speciesTemp = [];

    return (dispatch) => {
        if (resData.length !== 0) {
        resData.map((resCounter) => {
            axios.get(resCounter)
                .then((response) => {
                    speciesTemp.push(response.data.name);
                    dispatch({ type: GENERATE_SPECIES, payload: speciesTemp });
                }).catch((err) => {
                    console.log(err);
                });
            });
        } else {
            dispatch({ type: GENERATE_SPECIES, payload: speciesTemp });
        }
    };
}

export function getStarships(resData) {
    const starshipsTemp = [];

    return (dispatch) => {
        if (resData.length !== 0) {
        resData.map((resCounter) => {
            axios.get(resCounter)
                .then((response) => {
                    starshipsTemp.push(response.data.name);
                    dispatch({ type: GENERATE_STARSHIPS, payload: starshipsTemp });
                }).catch((err) => {
                    console.log(err);
                });
            });
        } else {
            dispatch({ type: GENERATE_STARSHIPS, payload: starshipsTemp });
        }
    };
}

export function getVehicles(resData) {

    const vehiclesTemp = [];

    return (dispatch) => {
        if (resData.length !== 0) {
        resData.map((resCounter) => {
            axios.get(resCounter)
                .then((response) => {
                    vehiclesTemp.push(response.data.name);
                    dispatch({ type: GENERATE_VEHICLES, payload: vehiclesTemp });
                }).catch((err) => {
                    console.log(err);
                });
            });
        } else {
            dispatch({ type: GENERATE_VEHICLES, payload: vehiclesTemp });
        }
    };
}

export function getPlanets(resData) {

    const planetsTemp = [];

    return (dispatch) => {
        if (resData.length !== 0) {
        resData.map((resCounter) => {
            axios.get(resCounter)
                .then((response) => {
                    planetsTemp.push(response.data.name);
                    dispatch({ type: GENERATE_PLANETS, payload: planetsTemp });
                }).catch((err) => {
                    console.log(err);
                });
            });
        } else {
            dispatch({ type: GENERATE_PLANETS, payload: planetsTemp });
        }
    };
}


export function getFilms(filmData) {
    
    const filmTemp = [];

    return (dispatch) => {
        if (filmData.length !== 0) {
        filmData.map((resCounter) => {
            axios.get(resCounter)
                .then((response) => {
                    filmTemp.push(response.data.title);
                    dispatch({ type: GENERATE_FILMS, payload: filmTemp });
                }).catch((err) => {
                    console.log(err);
                });
        });
        } else {
            dispatch({ type: GENERATE_FILMS, payload: filmTemp });
        }
    };
}
