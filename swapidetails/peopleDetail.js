import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import { Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import * as ActionCreator from '../src/actions/UserAction';

class peopleDetail extends Component {
    
    
    componentDidMount() {
        this.props.getFilms(this.props.objects.data.films);
        this.props.getHomeWorld(this.props.objects.data.homeworld);
        this.props.getSpecies(this.props.objects.data.species);
        this.props.getVehicles(this.props.objects.data.vehicles);
        this.props.getStarships(this.props.objects.data.starships);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.objects.data !== this.props.objects.data) {
            this.props.getFilms(this.props.objects.data.films);
            this.props.getHomeWorld(this.props.objects.data.homeworld);
            this.props.getSpecies(this.props.objects.data.species);
            this.props.getVehicles(this.props.objects.data.vehicles);
            this.props.getStarships(this.props.objects.data.starships);
        }
    }

    loadFilms() {
        const { TextContent } = styles;

        if (this.props.objects.filmLoading) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.objects.film.length !== 0) {
            return (
                this.props.objects.film.map(fil =>
                    <Text style={TextContent}>{fil}{'\n'}</Text>
                )
            );
        }
        return 'None';
    }

    filmsCounter() {
        const { TextContent } = styles;
        
        let total = this.props.objects.filmLength;
        let counter = this.props.objects.film.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
        );
    }

    loadHomeworld() {
        const { TextContent } = styles;

        if (this.props.objects.homeWorldLoading) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        return (
            <Text style={TextContent}>{this.props.objects.homeWorld}</Text>
        );
    }

    
    loadSpecies() {
        const { TextContent } = styles;

        if (this.props.objects.speciesLoading) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.objects.species.length !== 0) {
            return (
                this.props.objects.species.map(spec =>
                    <Text style={TextContent}>{spec}{'\n'}</Text>
                )
            );
        }
        return 'None';
    }

    speciesCounter() {
        const { TextContent } = styles;
        let total = this.props.objects.speciesLength;
        let counter = this.props.objects.species.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
        );
    }

    
    loadVehicles() {
        
        const { TextContent } = styles;

        if (this.props.objects.vehicleLoading) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.objects.vehicle.length !== 0) {
            return (
                this.props.objects.vehicle.map(spec =>
                    <Text style={TextContent}>{spec}{'\n'}</Text>
                )
            );
        }
        return 'None';
    }

    vehiclesCounter() {
        const { TextContent } = styles;
        let total = this.props.objects.vehicleLength;
        let counter = this.props.objects.vehicle.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
        );
    }

    
    loadStarships() {
        const { TextContent } = styles;

        if (this.props.objects.starshipLoading) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.objects.starship.length !== 0) {
            return (
                this.props.objects.starship.map(star =>
                    <Text style={TextContent}>{star}{'\n'}</Text>
                )
            );
        }
        return 'None';
    }

    starshipsCounter() {
        const { TextContent } = styles;
        let total = this.props.objects.starshipLength;
        let counter = this.props.objects.starship.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
        );
    }
    

    render() {
        const { TextContent, viewStyle1 } = styles;
        const { name, height, mass, hair_color, skin_color, eye_color,
            birth_year, gender } = this.props.objects.data;
        

        return (
            <ScrollView>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Name: {name}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Height: {height}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Mass: {mass}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Hair Color: {hair_color}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Skin Color: {skin_color}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Eye Color: {eye_color}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Birth Year: {birth_year}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Gender: {gender}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Homeworld:</Text>
                    <Text style={TextContent}>{this.loadHomeworld()}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Species:</Text>
                    <Text style={TextContent}>{this.speciesCounter()}</Text>
                    <Text style={TextContent}>{this.loadSpecies()}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Vehicles:</Text>
                    <Text style={TextContent}>{this.vehiclesCounter()}</Text>
                    <Text style={TextContent}>{this.loadVehicles()}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Starships:</Text>
                    <Text style={TextContent}>{this.starshipsCounter()}</Text>
                    <Text style={TextContent}>{this.loadStarships()}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Films:</Text>
                    <Text style={TextContent}>{this.filmsCounter()}</Text>
                    <Text style={TextContent}>{this.loadFilms()}</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    TextContent: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'stretch',
    },
    viewStyle1: {
        borderWidth: 1,
        margin: 3,
        padding: 2,
    }
};


const mapStateToProps = state => {
    
    return {
      objects: state.objects,
      resident: state.resident,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    
    return {
        getFilms: (filmData) => {
            dispatch(ActionCreator.getFilms(filmData));
        },
        getHomeWorld: (worldData) => {
            dispatch(ActionCreator.getHomeWorld(worldData));
        },
        getSpecies: (specData) => {
            dispatch(ActionCreator.getSpecies(specData));
        },
        getVehicles: (vehData) => {
            dispatch(ActionCreator.getVehicles(vehData));
        },
        getStarships: (starData) => {
            dispatch(ActionCreator.getStarships(starData));
        },
    };
  };
  
export default withNavigation(connect(
    mapStateToProps,
    mapDispatchToProps,
)(peopleDetail));

