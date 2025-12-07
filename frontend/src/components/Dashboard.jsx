import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Box,
  Button,
  Typography,
  Container,
  Paper,
  Avatar,
  Card,
  CardContent,
  CardActions,
  Grid,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Fade
} from '@mui/material';
import {
  Person,
  Email,
  Security,
  Logout,
  AccountCircle,
  CalendarToday,
  VerifiedUser,
  Settings,
  History,
  Lock,
  Warning
} from '@mui/icons-material';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogoutClick = () => {
    setOpenLogoutDialog(true);
  };

  const handleLogoutConfirm = () => {
    setOpenLogoutDialog(false);
    logout();
  };

  const handleLogoutCancel = () => {
    setOpenLogoutDialog(false);
  };

  const getInitials = () => {
    if (!user?.username) return 'U';
    return user.username.charAt(0).toUpperCase();
  };

  const getRandomColor = () => {
    const colors = [
      '#2196F3', // Blue
      '#4CAF50', // Green
      '#FF9800', // Orange
      '#9C27B0', // Purple
      '#F44336', // Red
      '#00BCD4', // Cyan
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const formatDate = () => {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = () => {
    return new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 6 }}>
        <Fade in={true} timeout={500}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <AccountCircle sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
            <Box>
              <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
                Welcome back, {user?.username || 'User'}! 👋
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {formatDate()} • {formatTime()}
              </Typography>
            </Box>
          </Box>
        </Fade>

        <Grid container spacing={3}>
          {/* Left Column - User Profile */}
          <Grid item xs={12} md={4}>
            <Fade in={true} timeout={700}>
              <Paper 
                elevation={3} 
                sx={{ 
                  borderRadius: 3, 
                  overflow: 'hidden',
                  mb: 3 
                }}
              >
                <Box 
                  sx={{ 
                    height: 120,
                    background: `linear-gradient(45deg, ${getRandomColor()} 30%, ${getRandomColor()}80 90%)`,
                  }}
                />
                
                <Box sx={{ p: 3, mt: -8 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2 }}>
                    <Avatar
                      sx={{
                        width: 100,
                        height: 100,
                        bgcolor: getRandomColor(),
                        fontSize: '2.5rem',
                        border: '4px solid white',
                        boxShadow: 3
                      }}
                    >
                      {getInitials()}
                    </Avatar>
                    
                    <Box sx={{ ml: 'auto' }}>
                      <Chip
                        icon={<VerifiedUser />}
                        label="Verified"
                        color="success"
                        size="small"
                        variant="outlined"
                      />
                    </Box>
                  </Box>

                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {user?.username}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {user?.email}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <Person />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Username" 
                        secondary={user?.username || 'Not available'}
                      />
                    </ListItem>
                    
                    <ListItem>
                      <ListItemIcon>
                        <Email />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Email" 
                        secondary={user?.email || 'Not available'}
                      />
                    </ListItem>
                                        
                    <ListItem>
                      <ListItemIcon>
                        <CalendarToday />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Member Since" 
                        secondary="Today"
                      />
                    </ListItem>
                  </List>
                </Box>
              </Paper>
            </Fade>
          </Grid>

          {/* Right Column - Stats & Actions */}
          <Grid item xs={12} md={8}>
            <Fade in={true} timeout={900}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3, 
                  borderRadius: 3,
                  mb: 3
                }}
              >
               
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Recent Activity
                </Typography>
                
                <Paper variant="outlined" sx={{ borderRadius: 2, p: 2, mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <History sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body2">
                      Account created successfully
                    </Typography>
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    Just now • Welcome to the platform!
                  </Typography>
                </Paper>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<Logout />}
                    onClick={handleLogoutClick}
                    sx={{ borderRadius: 2, flex: 1 }}
                  >
                    Logout
                  </Button>
                </Box>
              </Paper>
            </Fade>

            {/* Security Card */}
            <Fade in={true} timeout={1100}>
              <Card 
                elevation={3} 
                sx={{ 
                  borderRadius: 3,
                  background: 'linear-gradient(45deg, #f5f7fa 30%, #c3cfe2 90%)'
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Security sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="h6" fontWeight="bold">
                      Account Security
                    </Typography>
                  </Box>
                  
                  <Typography variant="body2" paragraph>
                    Your account is protected with JWT authentication. Keep your credentials safe and never share them with anyone.
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Chip 
                      icon={<VerifiedUser />} 
                      label="Email Verified" 
                      color="success" 
                      size="small" 
                    />
                    <Chip 
                      icon={<Lock />} 
                      label="Password Protected" 
                      color="primary" 
                      size="small" 
                    />
                    <Chip 
                      icon={<Warning />} 
                      label="No 2FA" 
                      color="warning" 
                      size="small" 
                    />
                  </Box>
                </CardContent>
                
              </Card>
            </Fade>
          </Grid>
        </Grid>
      </Box>

      {/* Logout Confirmation Dialog */}
      <Dialog
        open={openLogoutDialog}
        onClose={handleLogoutCancel}
        aria-labelledby="logout-dialog-title"
      >
        <DialogTitle id="logout-dialog-title">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Warning sx={{ mr: 1, color: 'warning.main' }} />
            Confirm Logout
          </Box>
        </DialogTitle>
        
        <DialogContent>
          <DialogContentText>
            Are you sure you want to logout from your account? You will need to sign in again to access your dashboard.
          </DialogContentText>
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleLogoutCancel} color="primary">
            Cancel
          </Button>
          <Button 
            onClick={handleLogoutConfirm} 
            color="error" 
            variant="contained"
            startIcon={<Logout />}
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Dashboard;