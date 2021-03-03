import styled from "styled-components";

const GameMetacriticStyle = styled.p`
	color: ${(props) =>
		props.metacritic > 90
			? "var(--cyan-1)"
			: props.metacritic > 80
			? "var(--green-1)"
			: props.metacritic > 70
			? "var(--yellow-1)"
			: props.metacritic > 60
			? "var(--orange-1)"
			: "var(--red-1)"};
	width: fit-content;
	padding: 0.3rem 0.7rem;
	border-radius: 0.5rem;
	background-color: ${(props) =>
		props.metacritic > 90
			? "var(--cyan-2)"
			: props.metacritic > 80
			? "var(--green-2)"
			: props.metacritic > 70
			? "var(--yellow-2)"
			: props.metacritic > 60
			? "var(--orange-2)"
			: "var(--red-2)"};
	border: 2px solid
		${(props) =>
			props.metacritic > 90
				? "var(--cyan-1)"
				: props.metacritic > 80
				? "var(--green-1)"
				: props.metacritic > 70
				? "var(--yellow-1)"
				: props.metacritic > 60
				? "var(--orange-1)"
				: "var(--red-1)"};
`;

export default GameMetacriticStyle;
