import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './utils/theme';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import LandingPage from './pages/LandingPage/LandingPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Switch>
					<Provider store={store}>
						<Route path="/" exact>
							<LandingPage />
						</Route>
                        <Route path="/register">
                            <RegistrationPage />
                        </Route>
                        <Route path="/login">
                            <LoginPage />
                        </Route>
					</Provider>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
