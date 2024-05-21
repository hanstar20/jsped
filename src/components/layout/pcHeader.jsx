import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useToggleContext } from "../../context/toggleContext";

import headerLogo from "../../public/assets/img/jsped_logo_white.png";

// styled components
const HeaderContainer = styled.div``;

const Nav = styled.nav`
	display: flex;
	position: sticky;
	background: #056338;
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
	width: 160px;
	padding: 30px 50px;
	cursor: pointer;
	color: #ffffff;
	font-size: 20px;
	font-weight: bold;

	&:hover {
		color: #f5954b; // 호버시 색 변경
	}
`;

const HeaderLogo = styled.img`
	width: 130px; /* 원하는 너비를 설정합니다 */
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
	position: absolute;
	background-color: #ffffff;
	display: flex;
	justify-content: center;
	width: 100vw;
	height: 300px;
	box-sizing: border-box; /* padding과 border를 포함한 너비 설정 */
	padding: 0 60px 12px 160px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	animation-name: ${(props) => (props.hover ? dropdownAnimation : dropupAnimation)};
	animation-duration: 0.2s;
	animation-timing-function: ease-out;
	animation-fill-mode: forwards;
`;

const SubMenuList = styled.ul`
	padding-left: 160px;
	display: flex;
	list-style: none;
	padding: 0;
`;

const SubMenuItems = styled.li`
	width: 160px;
	padding: 0 50px;
`;

const SubMenuItem = styled.li`
	padding: 12px 0;
	cursor: pointer;
	color: #000000;
	font-size: 18px;

	&:hover {
		color: #056338; // 호버시 색 변경
		font-weight: bold;
	}
`;

export default function PcHeader() {
	const { toggle, toggleValue } = useToggleContext();

	const [hover, setHover] = useState(false);

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
				<BurgerButton onClick={toggleValue}>
					<div />
					<div />
					<div />
				</BurgerButton>
			</Nav>
			<DropdownContent hover={hover} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
				<SubMenuList>
					<SubMenuItems>
						<SubMenuItem>발달 전문의</SubMenuItem>
						<SubMenuItem>영유아검진 심층 상담</SubMenuItem>
						<SubMenuItem>정밀 검사 가능</SubMenuItem>
					</SubMenuItems>
					<SubMenuItems>
						<SubMenuItem>일반 진료</SubMenuItem>
						<SubMenuItem>알레르기</SubMenuItem>
						<SubMenuItem>소아신경</SubMenuItem>
						<SubMenuItem>성장</SubMenuItem>
						<SubMenuItem>발달지연</SubMenuItem>
					</SubMenuItems>
					<SubMenuItems>
						<SubMenuItem>뇌파 검사</SubMenuItem>
						<SubMenuItem>자율신경계 검사</SubMenuItem>
						<SubMenuItem>종합발달심리 검사</SubMenuItem>
						<SubMenuItem>성장판 검사</SubMenuItem>
						<SubMenuItem>알레르기 검사</SubMenuItem>
					</SubMenuItems>
					<SubMenuItems>
						<SubMenuItem>AABA</SubMenuItem>
						<SubMenuItem>AABA</SubMenuItem>
						<SubMenuItem>AABA</SubMenuItem>
						<SubMenuItem>AABA</SubMenuItem>
					</SubMenuItems>
					<SubMenuItems>
						<SubMenuItem>인사말</SubMenuItem>
						<SubMenuItem>의료진 소개</SubMenuItem>
						<SubMenuItem>진료시간</SubMenuItem>
						<SubMenuItem>오시는 길</SubMenuItem>
						<SubMenuItem>주차장</SubMenuItem>
					</SubMenuItems>
				</SubMenuList>
			</DropdownContent>
		</HeaderContainer>
	);
}
