import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const LoginDialog = ({ open, handleClose, handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    // Validate username and password (you can add your validation logic here)
    // For simplicity, let's assume the login is successful if both fields are not empty
    if (username.trim() !== '' && password.trim() !== '') {
      handleLogin(username, password);
      handleClose();
    } else {
      // Handle invalid login
      alert('Invalid login. Please enter both username and password.');
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter your username and password.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Username"
          type="text"
          fullWidth
          value={username}
          onChange={handleUsernameChange}
          data-testid="username"
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          data-testid="password"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} data-testid="cancel">
          Cancel
        </Button>
        <Button onClick={handleLoginClick} data-testid="dia-login">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const DialogueBox = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleLogin = (username, password) => {
    // Perform login logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  const handleLoginButtonClick = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <Button onClick={handleLoginButtonClick} data-testid="login">
        Login
      </Button>
      <LoginDialog
        open={dialogOpen}
        handleClose={handleDialogClose}
        handleLogin={handleLogin}
      />
    </div>
  );
};

export default DialogueBox;