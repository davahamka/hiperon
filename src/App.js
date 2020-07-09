import React from 'react';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { theme } from './utils/theme';
import CssBaseline  from '@material-ui/core/CssBaseline';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import { Provider } from 'react-redux';
import store from './redux/store';
import LandingPage from './pages/LandingPage/LandingPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
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
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
