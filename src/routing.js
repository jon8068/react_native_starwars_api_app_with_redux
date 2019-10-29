import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../HomeScreen';
import PlanetScreen from '../swapi/swapiPlanet';
import PeopleScreen from '../swapi/swapiPeople';
import FilmScreen from '../swapi/swapiFilms';
import VehicleScreen from '../swapi/swapiVechicle';
import SpaceshipScreen from '../swapi/swapiSpaceship';
import SpeciesScreen from '../swapi/swapiSpecies';

const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Planets: {
            screen: PlanetScreen,
        },
        Spaceships: {
            screen: SpaceshipScreen,
        },
        Vehicles: {
            screen: VehicleScreen,
        },
        People: {
            screen: PeopleScreen,
        }, 
        Films: {
            screen: FilmScreen,
        },
        Species: {
            screen: SpeciesScreen,
        }
    },
    {
        initialRouteName: 'Home',
    },
);


const AppContainer = createAppContainer(RootStack);

export default AppContainer;