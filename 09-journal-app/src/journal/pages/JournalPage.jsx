import {Icon, IconButton, Typography} from '@mui/material'
// import {MailOutline} from '@mui/icons-material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>
      
      <NoteView/>

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <Icon sx={{fontSize: 30}}>add_outlined</Icon>
      </IconButton>

    </JournalLayout>
  )
}
