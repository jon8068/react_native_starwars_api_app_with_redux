import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import { Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import * as ActionCreator from '../src/actions/UserAction';

class planetDetail extends Component {

    componentDidMount() {
        this.props.getPeople(this.props.objects.data.residents);
        this.props.getFilms(this.props.objects.data.films);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.objects.data !== this.props.objects.data) {
            this.props.getPeople(this.props.objects.data.residents);
            this.props.getFilms(this.props.objects.data.films);
        }
    }

    loadResidents() {
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

    residentsCounter() {
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

        const { name, climate, population, rotation_period, orbital_period, diameter,
            gravity, terrain, surface_water } = this.props.objects.data;

        const { TextContent, viewStyle1 } = styles;

        return (
            <ScrollView>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Name: {name}</Text>
                </View>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Climate: {climate} </Text>
                </View>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Population: {population}</Text>
                </View>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Rotation Period: {rotation_period}</Text>
                </View>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Orbital Period: {orbital_period}</Text>
                </View>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Diameter: {diameter}</Text>
                </View>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Gravity: {gravity}</Text>
                </View>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Terrain: {terrain}</Text>
                </View>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Surface Water: {surface_water}</Text>
                </View>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Residents:</Text>
                    <Text style={TextContent}>{this.residentsCounter()}</Text>
                    <Text style={TextContent}>{this.loadResidents()}</Text>
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
)(planetDetail));
