import {ADD_TRAINING, LOAD_TRAININGS, REMOVE_TRAINING, TRAININGS_LOADED} from './trainings.action';

export const initialState = {
    list: [null, null], // list : [null, null, null], si on veut mettre un placeholder et faire du conditionnel dans le composant item
    loading: false,
    loaded: false,
};

export function trainingsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_TRAININGS:
            return {
                ...state,
                loading: true,
                loaded: false,
            };
        case TRAININGS_LOADED:
            return {
                ...state,
                list: action.trainings,
                loading: false,
                loaded: true,
            };
        case ADD_TRAINING:
            const training = {
                id: state.list.length + 1,
                name: action.name,
            };
            return {
                ...state,
                list: [...state.list, training],
            };
        case REMOVE_TRAINING:
            return {
                ...state,
                list: [],
            };
        default :
            return state;
    }
}
