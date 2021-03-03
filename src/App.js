import * as React from "react";
import { ThemeProvider } from "styled-components";

import { HomePage } from "./pages";

import { GlobalStyle } from "./styles";

function App() {
	const [isDarkMode, setIsDarkMode] = React.useState(false);

	const themeStyleObjectCreator = (isDarkMode) => ({ isDarkMode });

	const handleThemeOnClick = (e) => setIsDarkMode((prevState) => !prevState);

	return (
		<ThemeProvider theme={themeStyleObjectCreator(isDarkMode)}>
			<GlobalStyle />

			<HomePage
				isDarkMode={isDarkMode}
				handleThemeOnClick={handleThemeOnClick}
			/>
		</ThemeProvider>
	);
}

export default App;
