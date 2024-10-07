import { configureStore, createSlice, nanoid } from '@reduxjs/toolkit'

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('notes');
        return serializedState ? JSON.parse(serializedState) : [];
    } catch (err) {
        console.error("Could not load state", err);
        return [];
    }
};

// Save notes to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state.notes);
        localStorage.setItem('notes', serializedState);
    } catch (err) {
        console.error("Could not save state", err);
    }
};

const initialState = {
    notes: loadState()
}

const newsNoteSlice = createSlice({
    name: 'newsSlice',
    initialState,
    reducers: {
        addNote: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                date:action.payload.date,
                note:action.payload.note
            }
            state.notes.push(todo)
            saveState(state)
        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload)
            saveState(state)
        }
    }
})

const pageUpdateSlice = createSlice({
    name:'pageUpdate',
    initialState:{pageValue:1},
    reducers:{
         handlePreviousClick:(state)=>{
            const sub = state.pageValue --;
            console.log(sub);
            
          },
        
           handleNextClick:(state) =>{
            const add = state.pageValue ++;
            console.log(add);
            
          }
    }
})

const newsNotes = configureStore({
    reducer:{
        notes: newsNoteSlice.reducer,
        page: pageUpdateSlice.reducer
    }
})

export const newsNotesAction = newsNoteSlice.actions;
export const pageUpdateAction = pageUpdateSlice.actions;
export default newsNotes;


