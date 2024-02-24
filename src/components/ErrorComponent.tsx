import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Error() {
const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h1">
        404
      </Typography>
      <Typography variant="h6" style={{ color: '#686868' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="text" sx={{ marginTop:2 }} onClick={() => {navigate('/')}}>Back Home</Button>
    </Box>
  );
}