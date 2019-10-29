import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, ActivityIndicator, ScrollView, Image } from 'react-native';
import { Button, Text } from 'native-base';
import axios from 'axios';
import SpaceshipDetail from '../swapidetails/spaceshipDetail';
import AppFooter from '../src/components/AppFooter';
import * as ActionCreator from '../src/actions/UserAction';

class App extends Component {

    static navigationOptions = {
        title: 'SPACESHIPS',
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontSize: 30,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'yellow',
            marginRight: 'auto',
            marginLeft: 'auto'
        },
        headerTitleContainerStyle: {
            left: 0,
        },
    };

    componentDidMount() {
        this.props.fetchSpaceships();
    }

    render() {
        const { buttonStyle, viewStyle1, textStyle, imgStyle } = styles;
        if (this.props.objects.isLoading) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20 }} />
            );
        }

        return (
            <View>
                <View style={{ backgroundColor: '#FFD900' }}>
                    <ScrollView>
                        <View style={viewStyle1}>
                        <View style={{ flexDirection: 'row', alignContent: 'space-around' }}>
                                <Button
                                    rounded dark style={buttonStyle} onPress={() => this.props.fetchSpaceshipsAgain()}
                                >
                                    <Text style={textStyle}>Generate Another One</Text>
                                </Button>
                                <Button
                                    rounded dark style={buttonStyle} onPress={() => { 
                                        this.props.navigation.navigate('Home');
                                        this.props.backHome();
                                    }}
                                >
                                    <Text style={textStyle}>Go Back To Home</Text>
                                </Button>
                            </View>
                            <Image source={require('../src/image/spaceshipFix.png')} style={imgStyle} />
                            <SpaceshipDetail />
                        </View>
                        <View>
                            <AppFooter />
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    
    return {
      objects: state.objects,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchSpaceships: () => {
        dispatch(ActionCreator.fetchSpaceships());
      },
      fetchSpaceshipsAgain:() => {
        dispatch(ActionCreator.fetchSpaceshipsAgain());
      },
      backHome: () => {
        dispatch(ActionCreator.backHome());
      },
    };
  };
  
export default withNavigation(connect(
    mapStateToProps,
    mapDispatchToProps,
)(App));

const styles = {
    buttonStyle: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 2,
        marginRight: 2,
        width: 150,
        textAlign: 'center',
    },
    viewStyle1: {
        marginTop: 20,
        backgroundColor: 'white',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center'
    },
    textStyle: {
        textAlign: 'center',
        color: '#FFFC72'
    },
    imgStyle: {
        alignSelf: 'center',
        marginTop: 10,
        height: 150,
        width: 260,
    }
};

