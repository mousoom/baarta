import React, { useRef, useState } from 'react'
import { useSprings, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { useDrag } from 'react-use-gesture'
import clamp from 'lodash.clamp'
import { Box, Card, Typography, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material'
import styles from './styles.module.css'
import NewsCard from './components/News'
import NewsQuery from './hooks/useNews'
import useNews from './hooks/useNews'
import Viewpager from './components/Viewpager'
import usePost from './hooks/useNews'
import Language from './components/Language'
import IconButton from '@mui/material/IconButton'
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import Popover from '@mui/material/Popover'
import Slide from '@mui/material/Slide'
import DoneIcon from '@mui/icons-material/Done'
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded'
import { RiMenu3Fill } from 'react-icons/ri'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
const availableLanguage = ['English', 'Assamese', 'Nepali']

export default function App() {
  const [newsLanguage, setNewsLanguage] = useState('')
  const [toogleMode, setToogleMode] = useState('light')
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [show, setShow] = useState(false)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const { status, data, error, isFetching } = useNews(newsLanguage)

  if (!newsLanguage) {
    return <Language setNewsLanguage={setNewsLanguage} availableLanguage={availableLanguage} />
  }
  return (
    <div style={{ height: '100%' }}>
      <div style={{ position: 'absolute', top: '0px', right: 0, zIndex: 1 }}>
        <Box sx={{ p: 2 }}>
          <IconButton
            onClick={handleClick}
            sx={{
              padding: '5px',
              borderRadius: '20%',
              background: '#fff',
              boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
            }}>
            <RiMenu3Fill />
          </IconButton>
        </Box>
      </div>
      <div className={styles.container}>{status === 'loading' && !data ? 'Loading' : <Viewpager news={data} />}</div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}>
        {!show ? (
          <Box>
            <MenuItem onClick={() => setShow(!show)}>
              <ListItemIcon>
                <TranslateRoundedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Change Language</ListItemText>
            </MenuItem>
            {toogleMode === 'dark' ? (
              <MenuItem onClick={() => setToogleMode('light')}>
                <ListItemIcon>
                  <DarkModeRoundedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Dark Mode</ListItemText>
              </MenuItem>
            ) : (
              <MenuItem onClick={() => setToogleMode('dark')}>
                <ListItemIcon>
                  <LightModeRoundedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Light Mode</ListItemText>
              </MenuItem>
            )}
          </Box>
        ) : (
          <>
            {availableLanguage.map((language, i) => (
              <MenuItem
                key={i}
                onClick={() => {
                  setNewsLanguage(language)
                  handleClose()
                  setShow(!show)
                }}>
                {language === newsLanguage ? (
                  <ListItemIcon>
                    <DoneIcon fontSize="small" />
                  </ListItemIcon>
                ) : (
                  <ListItemIcon></ListItemIcon>
                )}
                <ListItemText>{language}</ListItemText>
              </MenuItem>
            ))}
          </>
        )}
      </Menu>
    </div>
  )
}
