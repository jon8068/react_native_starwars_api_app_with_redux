import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import { Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import * as ActionCreator from '../src/actions/UserAction';

class filmDetail extends Component {


    componentDidMount() {
        this.props.getPeople(this.props.objects.data.characters);
        this.props.getPlanets(this.props.objects.data.planets);
        this.props.getSpecies(this.props.objects.data.species);
        this.props.getVehicles(this.props.objects.data.vehicles);
        this.props.getStarships(this.props.objects.data.starships);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.objects.data !== this.props.objects.data) {
            this.props.getPeople(this.props.objects.data.characters);
            this.props.getPlanets(this.props.objects.data.planets);
            this.props.getSpecies(this.props.objects.data.species);
            this.props.getVehicles(this.props.objects.data.vehicles);
            this.props.getStarships(this.props.objects.data.starships);
        }
    }

    loadCharacters() {
        const { TextContent } = styles;

        if (this.props.objects.peopleLoading) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.objects.people.length !== 0) {
            return (
                this.props.objects.people.map(res =>
                    <Text style={TextContent}>{res}{'\n'}</Text>
                )
            );
        }
        return 'None';
    
    }

    charactersCounter() {
        const { TextContent } = styles;
        let total = this.props.objects.peopleLength;
        let counter = this.props.objects.people.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
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

    loadPlanets() {
        const { TextContent } = styles;

        if (this.props.objects.planetLoading) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.objects.planet.length !== 0) {
            return (
                this.props.objects.planet.map(plt =>
                    <Text style={TextContent}>{plt}{'\n'}</Text>
                )
            );
        }
        return 'None';
    }

    planetsCounter() {
        const { TextContent } = styles;
        let total = this.props.objects.planetLength;
        let counter = this.props.objects.planet.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
        );
    }

    render() {
        const { TextContent, viewStyle1 } = styles;
        const { title, episode_id, opening_crawl, director, producer,
            release_date } = this.props.objects.data;

        return (
            <ScrollView>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Title: {title}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Episode ID: {episode_id}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Opening Crawl: {opening_crawl}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Director: {director}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Producer: {producer}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Release Date: {release_date}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Characters:</Text>
                    <Text style={TextContent}>{this.charactersCounter()}</Text>
                    <Text style={TextContent}>{this.loadCharacters()}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Planets:</Text>
                    <Text style={TextContent}>{this.planetsCounter()}</Text>
                    <Text style={TextContent}>{this.loadPlanets()}</Text>
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
        getPeople: (resData) => {
            dispatch(ActionCreator.getPeople(resData));
        },
        getSpecies: (resData) => {
            dispatch(ActionCreator.getSpecies(resData));
        },
        getVehicles: (vehData) => {
            dispatch(ActionCreator.getVehicles(vehData));
        },
        getStarships: (starData) => {
            dispatch(ActionCreator.getStarships(starData));
        },
        getPlanets: (planData) => {
            dispatch(ActionCreator.getPlanets(planData));
        },
    };
  };
  
export default withNavigation(connect(
    mapStateToProps,
    mapDispatchToProps,
)(filmDetail));

