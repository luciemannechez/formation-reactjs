import React from 'react';
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { ConnectionContainer } from './ConnectionContainer';
import { trainingsReducer } from './store/trainings.reducer';
import './App.css';
import { TrainingList } from './redux/TrainingList';

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
          <TrainingList />
        </ConnectionContainer>
      </div>
    </Provider>
  );
}

export default App;
