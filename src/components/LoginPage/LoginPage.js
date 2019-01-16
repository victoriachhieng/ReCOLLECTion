import React, { Component } from 'react';
import { connect } from 'react-redux';
import LandingView from '../LandingView/LandingView';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#2c3f72" },
    secondary: { main: "#ff0a08" }
  }
});
  
class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return <React.Fragment>
        <h1 className="header">All your Profiles in one place</h1>
        <br />
        <MuiThemeProvider theme={theme}>
          <div>
            {this.props.errors.loginMessage && <h1 className="alert" role="alert">
                {this.props.errors.loginMessage}
              </h1>}
            <CssBaseline />
            <Grid container justify="center" alignItems="center">
              <Paper style={paper}>
                <center>
                  <br />
                  <Avatar>
                    <LockIcon color="secondary"/>
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign In
                  </Typography>
                </center>
                <form className="login" onSubmit={this.login}>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input id="username" name="username" autoComplete="username" value={this.state.username} onChange={this.handleInputChangeFor("username")} />
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input name="password" type="password" id="password" autoComplete="current-password" value={this.state.password} onChange={this.handleInputChangeFor("password")} />
                  </FormControl>
                  <Button fullWidth variant="contained" type="submit" name="submit" value="Sign In">
                    Sign In
                  </Button>
                  <br />
                  <Button type="submit" fullWidth variant="contained" color="primary" onClick={() => {
                      this.props.dispatch({ type: "SET_TO_REGISTER_MODE" });
                    }}>
                    Register
                  </Button>
                </form>
              </Paper>
            </Grid>
          </div>
        </MuiThemeProvider>
      </React.Fragment>;}}

const paper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: '100vh'
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
