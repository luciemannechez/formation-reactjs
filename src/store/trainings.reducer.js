import {ADD_TRAINING} from './trainings.action';

export const trainingList = [
    {
        id: 1,
        name: 'React.js'
    },
    {
        id: 2,
        name: 'React Native'
    },
    {
        id: 3,
        name: 'Angular'
    },
    {
        id: 4,
        name: 'Typescript'
    }
];

export const initialState = {list: trainingList,};

export function trainingsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TRAINING:
            const training = {
                id: state.list.length + 1,
                name: action.name,
            };
            return {
                ...state,
                list: [...state.list, training],
            };
        default :
            return state;
    }
}
