import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    /** estado inicial */
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action ) => {
      state.notes.push( action.payload );
      state.isSaving = false;
    },
    setActiveNote: (state, action ) => {
      state.active = action.payload;
    },
    setNotes: (state, action ) => {
      
    },
    setSaving: ( state ) => {
      
    },
    updateNote: (state, action ) => {
      
    },
    deleteNodeById: (state, action ) => {
      
    },
  }
});

// Action creators are generated for each case reducer function
export const { 
  savingNewNote,
  addNewEmptyNote,
  deleteNodeById,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote
} = journalSlice.actions;