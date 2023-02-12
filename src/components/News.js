import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import Box from '@mui/material/Box'
import { Link } from '@mui/material'
import { Stack } from '@mui/system'
export default function NewsCard({ news }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        userSelect: 'none',
        alignItems: 'flex-start',
        borderRadius: '20px',
      }}>
      <Box sx={{ padding: '10px 10px 0 10px', width: '100%', height: '40vh', borderRadius: '20px' }}>
        <img
          src={news.image}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            userDrag: 'none',
            userSelect: 'none',
            borderRadius: '20px',
          }}
          alt=""
        />
      </Box>
      <Stack spacing={1} sx={{ padding: '20px', height: '60vh' }}>
        <Typography
          gutterBottom
          variant="h4"
          sx={{
            fontFamily: 'Rubik',
            fontWeight: '600',
            fontSize: '18px',
            wordSpacing: '10px',
          }}>
          {news.title}
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '400',
            color: '#5396ff',
          }}>
          {news.date}
        </Typography>

        <Box sx={{ overflow: 'hidden', height: '220px', overflowY: 'auto', scrollbarWidth: 'none' }}>
          <Typography
            variant="body2"
            sx={{
              lineHeight: 1.5,
              fontFamily: 'Josefin Sans',
              fontWeight: '500',
              textAlign: 'justify',
              color: '#aaa',
              '&::first-letter': {
                borderRadius: '2px',
                fontSize: '350%',
                padding: '6px 0px',
                marginRight: '5px',
                float: 'left',
              },
            }}>
            {news.description}
          </Typography>
        </Box>
        <Box sx={{ position: 'relative', bottom: '0' }}>
          <Link href={news.reference} target="_blank" underline="none">
            Read More...
          </Link>
        </Box>
      </Stack>
    </div>
  )
}
