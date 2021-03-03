import * as React from "react";

import {
	GameCardStyle,
	GameMetacriticStyle,
	GameCardBodyStyle,
} from "../styles";

const GameCard = ({ game }) => {
	return (
		<GameCardStyle>
			<img src={game.background_image} alt={game.name} />

			<GameCardBodyStyle>
				<GameMetacriticStyle metacritic={game.metacritic}>
					{game.metacritic}
				</GameMetacriticStyle>

				<h5>{game.name}</h5>
			</GameCardBodyStyle>
		</GameCardStyle>
	);
};

export default GameCard;
