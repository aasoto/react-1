import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase";
import { fileUpload } from "../../helpers/fileUpload";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";

export const startNewNote = () => {
  return async(dispatch, getState) => {

    dispatch(savingNewNote());

    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) );
    await setDoc( newDoc, newNote );

    newNote.id = newDoc.id;

    // dispatch
    dispatch( addNewEmptyNote(newNote) );
    dispatch( setActiveNote(newNote) );
  }
}

export const startLoadingNotes = () => {
  return async( dispatch, getState ) => {

    const { uid } = getState().auth;
    if ( !uid ) throw new Error('El UID del usuario no existe');

    const notes = await loadNotes( uid );

    dispatch( setNotes(notes) );

  }
}

export const startSaveNote = () => {
  return async(dispatch, getState) => {

    dispatch(setSaving());

    const {uid} = getState().auth;
    const {active:note} = getState().journal;

    /** se pasa el objecto de esta manera para que el valor no pase por referencia */
    const noteToFireStore = {...note};
    /** se elimina el id del objecto */
    delete noteToFireStore.id;

    const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}` );
    await setDoc(docRef, noteToFireStore, {merge: true});

    dispatch(updateNote(note));

  }
}

export const startUploadingFiles = (files = []) => {
  return async( dispatch ) => {
    dispatch(setSaving());

    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }

    const photosUrls = await Promise.all(fileUploadPromises);
    dispatch(setPhotosToActiveNote(photosUrls));
  }
}