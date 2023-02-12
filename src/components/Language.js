import { Box, Button, Chip, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import DoneIcon from '@mui/icons-material/Done'

function Language({ setNewsLanguage, availableLanguage }) {
  const [value, setValue] = useState('')
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (value) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [value])

  const handleSelectLanguage = language => {
    if (value === language) {
      setValue('')
    } else {
      setValue(language)
    }
  }

  const handleSubmitLanguage = () => {
    if (value) {
      setNewsLanguage(value)
      setValue('')
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Poppins',
        background: '#fff',
        height: '100%',
        width: '100%',
        padding: '20px',
      }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: '700' }}>
          Choose your language.
        </Typography>
        <Typography gutterBottom variant="subtitle2">
          You may change your language later.
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          {availableLanguage.map((language, i) => (
            <Chip
              label={language}
              key={i}
              onClick={() => handleSelectLanguage(language)}
              color={value === language ? 'primary' : 'default'}
              icon={value === language ? <DoneIcon /> : ''}
            />
          ))}
        </Stack>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Button variant="contained" sx={{ width: '100%' }} disabled={disabled} onClick={handleSubmitLanguage}>
          Continue
        </Button>
      </Box>
    </Box>
  )
}

export default Language
