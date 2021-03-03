import styled from "styled-components";

const GameCardBodyStyle = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 1rem;

	& h5 {
		color: var(--txt-1);
		font-size: 1.5rem;
		font-weight: 500;
		margin-top: 1rem;
	}

	& p {
		font-size: 1.4rem;
		font-weight: 500;
	}
`;

export default GameCardBodyStyle;
