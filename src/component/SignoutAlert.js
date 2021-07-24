import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {AlertTextWrapper} from "./style";

export default function SignoutAlert({setLogout}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    setOpen(false);
    setLogout();
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        LOGOUT
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <AlertTextWrapper>
            {"Are you sure you want to log out?"}
          </AlertTextWrapper>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <AlertTextWrapper>
              You will lose your current session. Your shopping cart items will stay until items become
              unavailable.
            </AlertTextWrapper>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <AlertTextWrapper>
              CANCEL
            </AlertTextWrapper>
          </Button>
          <Button onClick={handleLogout} color="primary" autoFocus>
            <AlertTextWrapper>
              LOGOUT
            </AlertTextWrapper>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
