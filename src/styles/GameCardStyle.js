import styled from "styled-components";

const GameCardStyle = styled.div`
	display: grid;
	grid-template-columns: 17rem auto;
	grid-template-rows: 13rem;
	grid-gap: 1.5rem;
	background-color: var(--bg-3);
	border-radius: 0.5rem;

	& img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-top-left-radius: 0.5rem;
		border-bottom-left-radius: 0.5rem;
	}

	&:not(:last-child) {
		margin-bottom: 1.2em;
	}
`;

export default GameCardStyle;
