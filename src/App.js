import React, {Component} from 'react';
import './App.css';
import {ConnectionContainer} from "./ConnectionContainer";
import PropTypes from 'prop-types';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {createLogger} from 'redux-logger';
import TrainingList from "./redux/TrainingList";
import {trainingsReducer} from "./store/trainings.reducer";
import thunk from 'redux-thunk';

// Assemblage des différents reducers d'une application
const reducers = combineReducers({
    trainings: trainingsReducer,
});

const logger = createLogger({
    level: 'log',
});

// Création du store
const store = createStore(reducers, applyMiddleware(thunk, logger));

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <ConnectionContainer>
                    <header className="App-header">
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <TrainingList></TrainingList>
                </ConnectionContainer>
            </div>
        </Provider>
    );
}

export default App;
