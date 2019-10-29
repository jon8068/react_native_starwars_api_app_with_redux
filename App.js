import React, { Component } from 'react';
import { Container } from 'native-base';
import { Provider } from 'react-redux';
import AppContainer from './src/routing';
import configureStore from './src/store';


const store = configureStore();

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Container>
                    <AppContainer />
                </Container>
            </Provider>
        );
    }
}

export default App;
