import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import { Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import * as ActionCreator from '../src/actions/UserAction';

class spaceshipDetail extends Component {

    componentDidMount() {
        this.props.getPeople(this.props.objects.data.pilots);
        this.props.getFilms(this.props.objects.data.films);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.objects.data !== this.props.objects.data) {
            this.props.getPeople(this.props.objects.data.pilots);
            this.props.getFilms(this.props.objects.data.films);
        }
    }

    loadPilots() {
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

    pilotsCounter() {
        const { TextContent } = styles;
        let total = this.props.objects.peopleLength;
        let counter = this.props.objects.people.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
        );
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


    render() {

        const { TextContent, viewStyle1 } = styles;
        const { name, model, manufacturer, cost_in_credits, length,
            max_atmosphering_speed, crew, passengers, cargo_capacity,
            consumables, hyperdrive_rating, MGLT, starship_class } = this.props.objects.data;

        return (
            <ScrollView>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Name: {name}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Model: {model}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Manufacturer: {manufacturer}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Cost in Credits: {cost_in_credits}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Length: {length}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Max Atmosphering Speed: {max_atmosphering_speed}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Crew: {crew}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Passengers: {passengers}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Cargo Capacity: {cargo_capacity}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Consumables: {consumables}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Hyperdrive Rating: {hyperdrive_rating}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>MGLT: {MGLT}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Starship Class: {starship_class}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Pilots:</Text>
                    <Text style={TextContent}>{this.pilotsCounter()}</Text>
                    <Text style={TextContent}>{this.loadPilots()}</Text>
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
    };
  };
  
  const mapDispatchToProps = dispatch => {
    
    return {
        getPeople: (resData) => {
            dispatch(ActionCreator.getPeople(resData));
        },
        getFilms: (filmData) => {
            dispatch(ActionCreator.getFilms(filmData));
        },
    };
  };
  
export default withNavigation(connect(
    mapStateToProps,
    mapDispatchToProps,
)(spaceshipDetail));

