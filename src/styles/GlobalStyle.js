import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --bg-1: ${(props) => (props.theme.isDarkMode ? "#0e141b" : "#ffffff")};
        --bg-2: ${(props) => (props.theme.isDarkMode ? "#0a0a0a" : "#ebecf0")};
        --bg-3: ${(props) => (props.theme.isDarkMode ? "#151f28" : "#ffffff")};
        --bg-4: ${(props) => (props.theme.isDarkMode ? "#d60059" : "#7ef4ff")};
        --txt-1: ${(props) => (props.theme.isDarkMode ? "#f5f5f5" : "#0e141b")};
        --txt-2: ${(props) =>
					props.theme.isDarkMode ? "#f5f5f5cc" : "#091e42b5"};
        --cyan-1: ${(props) =>
					props.theme.isDarkMode ? "#00e8dd" : "#11b0a9"};
        --cyan-2: ${(props) =>
					props.theme.isDarkMode ? "#0075704d" : "#00e8dd40"};
        --green-1: ${(props) =>
					props.theme.isDarkMode ? "#00dc4a" : "#009610"};
        --green-2: ${(props) =>
					props.theme.isDarkMode ? "#2f83004d" : "#00d7174d"};
        --yellow-1: ${(props) =>
					props.theme.isDarkMode ? "#ffe200" : "#f7b900"};
        --yellow-2: ${(props) =>
					props.theme.isDarkMode ? "#ffe20033" : "#ffe40047"};
        --orange-1: ${(props) =>
					props.theme.isDarkMode ? "#ff9900" : "#ff980033"};
        --orange-2: ${(props) =>
					props.theme.isDarkMode ? "#ff990033" : "#0e141b"};
        --red-1: ${(props) => (props.theme.isDarkMode ? "#ff3a2c" : "#ff4040")};
        --red-2: ${(props) =>
					props.theme.isDarkMode ? "#b90d0033" : "#f4433633"};
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: var(--bg-1);
        font-family: 'Poppins', sans-serif;
        letter-spacing: -0.07rem;
    }    

`;

export default GlobalStyles;
