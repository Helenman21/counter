import { styled } from "styled-components";

export const StyledBlock = styled.section`
	text-align: center;
	margin: 0 auto;
	width: 300px;
	height: 300px;
	align-items: center;
	border: 2px solid black;
	padding: 15px;
	background-color: rgb(230, 175, 208);
	border-radius: 15px;
	font-size: 20px;
`
export const BlockBorderReusable = styled.div`
	height: 100%;
	width: 100%;
	border-radius: 15px;
`
export const BlockBorderReusableForTablo = styled.article`
	border: 2px solid black;
	height: 70%;
	width: 100%;
	border-radius: 15px;
	margin-bottom: 8px;
	display: flex;
	align-items: center;
   justify-content: center;
	flex-direction: column;
	input {
		border-radius: 15px;
		padding: 0px 15;
		text-align: center;
	}
`
export const BlockBorderReusableForButtons = styled.article`
	border: 2px solid black;
	height: 25%;
	width: 100%;
	border-radius: 15px;
	display: flex;
	button {
		margin: auto;
		width: content;
		border: 1px solid black;
		background-color: rgb(234, 220, 228);
		border-radius: 5px;
		color: black;
		font-weight: 800;
		font-size: 20px;
		padding:5px 15px;
	}
`
