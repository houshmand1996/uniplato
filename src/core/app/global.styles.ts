import { createGlobalStyle, css } from 'styled-components';
import { sassVar } from 'core/sass-var';

const { primaryColor } = sassVar;

const animations = css`
	 @keyframes clickBottom {
		0%   {transform:scale(1)}
		45%  {transform:scale(0.95)}
		65%  {transform:scale(0.98)}
		/* 65%  {transform:scale(0.95)} */
		76%  {transform:scale(1)}
		100% {transform:scale(1.06)}
	}
`;

export const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${primaryColor}; 
		font-family: 'Overlock', cursive;
		overflow-x: hidden;
		padding: 20px 80px;
		@media screen and (max-width: 800px) {
			padding: 10px;
			/* width: calc(100% - 20px); */
		}
		
	}  

	${animations}

	button	{
		cursor: url(/cursor.png) 39 39, auto !important;
	}




`;
