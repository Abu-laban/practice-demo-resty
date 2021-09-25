import faker from 'faker'
import { useReducer } from 'react'


const initialState = {
    show: 'sesame street',
    characters: [],
    active: []
}

function characterReducer(state, action) {
    switch (action.type) {
        case 'ADD_CHARACTER':
            return {
                ...state,
                active: {},
                characters: [...state.characters, action.payload]
            };
        case 'ACTIVE_CHARACTER':
            return {
                ...state,
                active: state.characters.filter(char => char.name === action.payload)[0],
            }
        case 'DELETE_CHARACTER':
            return {
                ...state,
                active: {},
                characters: state.characters.filter(char => char.name !== action.payload),
            }

        default:
            return state;
    }
}

function Characters() {
    const [state, dispatch] = useReducer(characterReducer, initialState)

    function handleNew() {
        const character = {
            name: faker.name.firstName(),
            color: faker.commerce.color(),
        };

        const action = {
            type: 'ADD_CHARACTER',
            payload: character,
        };

        dispatch(action)
    };

    function handleActive(name) {
        const action = {
            type: 'ACTIVE_CHARACTER',
            payload: name,
        }
        dispatch(action)
    }

    function handleDelete(name) {
        const action = {
            type: 'DELETE_CHARACTER',
            payload: name,
        }
        dispatch(action)
    }

    return (
        <>
            <h1>Characters in {state.show}</h1>
            <strong>
                {
                    state.active.name ? `${state.active.name} is ${state.active.color}` : 'Click a character name to show their info'
                }
            </strong>
            <ul>
                {
                    state.characters.map(character => (
                        <li key={character.name} onClick={() => handleActive(character.name)}
                            onDoubleClick={() => handleDelete(character.name)}>{character.name}</li>
                    ))
                }
            </ul>
            <button onClick={handleNew}>Add Random Character</button>
        </>
    )
}

export default Characters;