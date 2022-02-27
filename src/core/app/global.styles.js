import { createGlobalStyle , css } from 'styled-components';

const animations = css `
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
		font-family: 'Overlock', cursive;
		overflow-x: hidden;
		padding: 20px 80px;
		@media screen and (max-width: 800px) {
			padding: 10px;
			/* width: calc(100% - 20px); */
		}
		
	}  

	${animations}

	button,
	.loadmore-list
	{
		cursor: url(/cursor.png) 39 39, auto !important;
	}

	.animateHolder{
		width: calc(100% - 160px);
		@media screen and (max-width: 800px) {
			/* padding: 10px; */
			width: calc(100% - 20px);
		}
		position: absolute;
		
	}

	.list {
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 3s;
  cursor: url(/cursor.png) 39 39, auto !important;
}
	a {
		text-decoration: none;
		color: black;
	}

	* {
		box-sizing: border-box;
	}
`;
