import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import StoreIcon from '@material-ui/icons/Store';
import axios from "axios";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import {useState} from "react";
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import background from "../../static/cover.jpg";
import useToken from "../hook/useToken";

async function loginUser(credentials) {

  return await axios({
    method: 'post',
    url: 'http://localhost:8080/user/signin',
    data: {
      uid: credentials.phone,
      password: credentials.password
    }
  }).then(response => response.data.code === 0 ? response.data.data.cookie : null);

}

export default function Signin() {

  const {setToken} = useToken();

  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [login, setLogin] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      phone,
      password
    });

    if (token) {
      setToken(token);
      setLogin(true);
    }
  }

  const classes = useStyles();

  if (login) {
    return <Redirect to="/home"/>;
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline/>
      <Grid item xs={false} sm={4} md={7} className={classes.image}/>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar
            className={classes.avatar}
          >
            <StoreIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form} noValidate
            onSubmit={e => handleSubmit(e)}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="email"
              autoFocus
              onChange={e => setPhone(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright/>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Shopaholic
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#455a64"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#455a64"
  },
}));

Signin.prototype = {
  setToken: PropTypes.func.isRequired
}

