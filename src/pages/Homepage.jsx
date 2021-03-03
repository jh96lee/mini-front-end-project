import * as React from "react";
import axios from "axios";

import { GameCard } from "../components";

import { DataContainerStyle, ButtonStyle, PageStyle } from "../styles";

const Homepage = ({ isDarkMode, handleThemeOnClick }) => {
	const [games, setGames] = React.useState([]);
	const [isLoaded, setIsLoaded] = React.useState(false);

	const fetchGames = async (url) => {
		const { data } = await axios.get(url);

		setGames(data.results);

		setIsLoaded(true);
	};

	React.useEffect(() => {
		fetchGames("https://api.rawg.io/api/games?page_size=50");
	}, []);

	return (
		<PageStyle>
			{isLoaded ? (
				<React.Fragment>
					<ButtonStyle onClick={handleThemeOnClick}>
						{isDarkMode ? "TOGGLE LIGHT" : "TOGGLE DARK"}
					</ButtonStyle>

					<DataContainerStyle>
						{games.map((game, index) => {
							return <GameCard key={`GameCard_${index}`} game={game} />;
						})}
					</DataContainerStyle>
				</React.Fragment>
			) : (
				<h1>LOADING</h1>
			)}
		</PageStyle>
	);
};

export default Homepage;
