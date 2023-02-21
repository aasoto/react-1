import { Button, Grid, Icon, IconButton, TextField, Typography } from "@mui/material"
import { useEffect } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSaveNote, startUploadingFiles } from "../../store/journal/thunks";
import { ImageGallery } from "./ImageGallery";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useRef } from "react";

export const NoteView = () => {

  const dispatch = useDispatch();
  const { active:note, messageSaved, isSaving } = useSelector( state => state.journal );

  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date( date );
    return newDate.toUTCString();
  }, [date]);

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Nota actualizada', messageSaved, 'success');
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch( startSaveNote() );
  }

  const onFileInputChange = ({ target }) => {
    if( target.files === 0 ) return;

    dispatch( startUploadingFiles( target.files ) );
  }

  return (
    <Grid 
      container 
      className='animate__animated animate__fadeIn animate__faster'
      direction={'row'} 
      justifyContent='space-between' 
      alignItems='center' 
      sx={{ mb: 1 }}
    >

      <Grid item>
        <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
      </Grid>

      <Grid item>

        <input 
          type="file" 
          multiple
          ref={ fileInputRef }
          onChange={ onFileInputChange }
          style={{ display: 'none' }}
        />

        <IconButton
          color="primary"
          disabled={ isSaving }
          onClick={() => fileInputRef.current.click()}
        >
          <Icon>upload_outlined</Icon>
        </IconButton>

        <Button disabled={isSaving} onClick={onSaveNote} color="primary" sx={{padding: 2}}>
          <Icon sx={{fontSize: 30, mr: 1}}>save_outlined</Icon>
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField 
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: 'none', mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField 
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día de hoy?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      {/* Image gallery */}
      <ImageGallery images={ note.imageUrls }/>
    </Grid>
  )
}
