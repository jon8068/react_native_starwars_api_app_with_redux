import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import { Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import * as ActionCreator from '../src/actions/UserAction';

class speciesDetails extends Component {
    
    componentDidMount() {
        this.props.getPeople(this.props.objects.data.people);
        this.props.getFilms(this.props.objects.data.films);
        this.props.getHomeWorld(this.props.objects.data.homeworld);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.objects.data !== this.props.objects.data) {
            this.props.getPeople(this.props.objects.data.people);
            this.props.getFilms(this.props.objects.data.films);
            this.props.getHomeWorld(this.props.objects.data.homeworld);
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

    render() {
        const { TextContent, viewStyle1 } = styles;
        const { name, classification, designation, average_height,
            skin_colors, hair_colors, eye_colors, average_lifespan,
            language } = this.props.objects.data;

        return (
            <ScrollView>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Name: {name}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Classification: {classification}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Designation: {designation}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Average Height: {average_height}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Skin Colors: {skin_colors}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Hair Colors: {hair_colors}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Eye Colors: {eye_colors}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Average Lifespan: {average_lifespan}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Homeworld:</Text>
                    <Text style={TextContent}>{this.loadHomeworld()}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Language: {language}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>People:</Text>
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
      getHomeWorld: (worldData) => {
        dispatch(ActionCreator.getHomeWorld(worldData));
    },
    };
  };
  
export default withNavigation(connect(
    mapStateToProps,
    mapDispatchToProps,
)(speciesDetails));