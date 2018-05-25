import {trainingsReducer, initialState} from './trainings.reducer';
import {LOAD_TRAININGS} from './trainings.action';

describe('trainings.reducer.js', () => {
    it('should validate state after defaut action.type', () => {
        expect(trainingsReducer(initialState, {type: 'NOT_VALID'})).toEqual(initialState);
    });
    it('should validate state after LOAD_TRAININGS action', () => {
        const state = {...initialState, loading: true, loaded: false,};
        expect(trainingsReducer(initialState, {type: LOAD_TRAININGS})).toEqual(state);
    });
});
