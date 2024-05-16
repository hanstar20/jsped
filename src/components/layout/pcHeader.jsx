import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import headerLogo from "../../public/assets/img/jsped_logo_white.png";

// styled components
const HeaderContainer = styled.div``;

const Nav = styled.nav`
	display: flex;
	position: sticky;
	background: #044828;
	justify-content: space-between;
	align-items: center; /* 세로 방향으로 중간 정렬 */
	padding-left: 30px;
	padding-right: 30px;
	height: 80px;
	z-index: 9999;
`;

const MenuList = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
`;

const MenuItem = styled.li`
	padding: 30px 50px;
	cursor: pointer;
	color: #ffffff;

	&:hover {
		color: #007bff; // 호버시 색 변경
	}
`;

const HeaderLogo = styled.img`
	width: 40px; /* 원하는 너비를 설정합니다 */
	height: auto; /* 높이는 자동으로 설정하여 비율을 유지합니다 */
	object-fit: contain; /* 이미지가 컨테이너 내에서 비율을 유지하며 맞춰집니다 */
`;

const BurgerButton = styled.div`
	width: 30px;
	height: 25px;
	position: relative;
	display: flex;
	justify-content: space-around;
	flex-flow: column nowrap;
	z-index: 10;
	cursor: pointer;

	div {
		width: 30px;
		height: 3px;
		background-color: #ffffff;
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s linear;
	}
`;

const dropdownAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(-350px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const dropupAnimation = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-350px);
    }
`;

const DropdownContent = styled.div`
	/* display: ${(props) => (props.hover ? "block" : "none")}; */
	position: absolute;
	background-color: #ffffff;
	min-width: 160px;
	width: 100%;
	height: 300px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	padding: 12px 16px;
	animation-name: ${(props) => (props.hover ? dropdownAnimation : dropupAnimation)};
	animation-duration: 0.2s;
	animation-timing-function: ease-out;
	animation-fill-mode: forwards;
`;

export default function PcHeader() {
	const [hover, setHover] = useState(false);
	const [open, setOpen] = useState(false);

	return (
		<HeaderContainer>
			<Nav>
				<HeaderLogo alt='JS PED' src={headerLogo} />
				<MenuList onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
					<MenuItem>JS의 특별함</MenuItem>
					<MenuItem>소아청소년과 진료</MenuItem>
					<MenuItem>소아청소년과 검진</MenuItem>
					<MenuItem>SPZ아동발달클리닉</MenuItem>
					<MenuItem>제이에스 소개</MenuItem>
				</MenuList>
				<BurgerButton open={open} onClick={() => setOpen(!open)}>
					<div />
					<div />
					<div />
				</BurgerButton>
			</Nav>
			<DropdownContent hover={hover} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
				여기에 내용을 추가하세요.
			</DropdownContent>
		</HeaderContainer>
	);
}
