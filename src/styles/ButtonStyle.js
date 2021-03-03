import styled from "styled-components";

const Button = styled.button`
	font-size: 1.4rem;
	font-weight: 600;
	color: var(--txt-1);
	background-color: var(--bg-4);
	padding: 1.2rem 1.5rem;
	border: none;
	border-radius: 0.5rem;
	outline: none;

	&:hover {
		cursor: pointer;
	}
`;

export default Button;
