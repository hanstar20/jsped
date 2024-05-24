import React, { useState } from "react";
import { useToggleContext } from "../../context/toggleContext";
import styled, { keyframes } from "styled-components";
// react-collapse
import { Collapse } from "react-collapse";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const SideMenuContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: #056338;
	visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
	transition: visibility 0.7s ease;
	animation-name: ${(props) => (props.isOpen ? slideIn : slideOut)};
	animation-duration: 0.7s;
	animation-timing-function: ease-out;
	animation-fill-mode: forwards;
	z-index: 2000;
	display: flex;
	justify-content: center;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 5%;
	right: 5%;
	background: none;
	border: none;
	font-size: 70px;
	color: #ffffff;
	cursor: pointer;
`;

const SiteMapWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	margin-top: 100px;
`;

const SiteMapTitle = styled.div`
	font-size: 50px;
	font-weight: 800;
	color: #ffffff;
	padding-bottom: 15px;
	border-bottom: 2px solid rgba(255, 255, 255, 0.3);
`;

const MenuWrapper = styled.div`
	margin-top: 65px;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

const Menu = styled.div`
	width: 100%;
	color: #ffffff;
`;

const MenuTitle = styled.div`
	font-size: 24px;
	font-weight: 800;
	margin-bottom: 30px;
`;

const MenuDepth1 = styled.ul`
	font-size: 15px;
	font-weight: 600;
	margin: 0;
	padding: 12px 5px;
`;

const MenuDepth2 = styled.ul`
	margin: 0;
	padding-left: 15px;
	padding-bottom: 30px;
	font-size: 14px;
	font-weight: 300;

	li {
		list-style: none;
		padding: 5px 0;
	}
`;

const SideMenu = ({ isOpen }) => {
	const { toggle, toggleValue } = useToggleContext();

	const [collapseToggle, setCollapseToggle] = useState([false, false, false, false, false]);

	return (
		<SideMenuContainer isOpen={isOpen}>
			<CloseButton onClick={toggleValue}>×</CloseButton>
			<SiteMapWrapper>
				<SiteMapTitle>SITE MAP</SiteMapTitle>
				<MenuWrapper>
					<Menu>
						<MenuTitle>JS의 특별함</MenuTitle>
						<MenuDepth1>발달 전문의</MenuDepth1>
						<MenuDepth1>영유아검진 심층 상담</MenuDepth1>
						<MenuDepth1>정밀 검사 가능</MenuDepth1>
					</Menu>
					<Menu>
						<MenuTitle>소아청소년과 진료</MenuTitle>
						<MenuDepth1
							onMouseEnter={() => {
								setCollapseToggle((prev) => [!collapseToggle[0], false, false, false, false]);
							}}>
							일반 진료
						</MenuDepth1>
						<Collapse isOpened={collapseToggle[0]}>
							<MenuDepth2>
								<li>- 감기</li>
								<li>- 영유아검진</li>
								<li>- 예방접종</li>
								<li>- 수액 치료</li>
							</MenuDepth2>
						</Collapse>

						<MenuDepth1
							onMouseEnter={() => {
								setCollapseToggle((prev) => [false, !collapseToggle[1], false, false, false]);
							}}>
							알레르기
						</MenuDepth1>
						<Collapse isOpened={collapseToggle[1]}>
							<MenuDepth2>
								<li>- 비염</li>
								<li>- 아토피</li>
								<li>- 천식</li>
							</MenuDepth2>
						</Collapse>

						<MenuDepth1
							onMouseEnter={() => {
								setCollapseToggle((prev) => [false, false, !collapseToggle[2], false, false]);
							}}>
							소아신경
						</MenuDepth1>
						<Collapse isOpened={collapseToggle[2]}>
							<MenuDepth2>
								<li>- 두통</li>
								<li>- 어지럼증</li>
								<li>- 경련</li>
								<li>- 수면</li>
							</MenuDepth2>
						</Collapse>

						<MenuDepth1
							onMouseEnter={() => {
								setCollapseToggle((prev) => [false, false, false, !collapseToggle[3], false]);
							}}>
							성장
						</MenuDepth1>
						<Collapse isOpened={collapseToggle[3]}>
							<MenuDepth2>
								<li>- 성조숙증</li>
								<li>- 키성장</li>
							</MenuDepth2>
						</Collapse>

						<MenuDepth1
							onMouseEnter={() => {
								setCollapseToggle((prev) => [false, false, false, false, !collapseToggle[3]]);
							}}>
							발달지연
						</MenuDepth1>
						<Collapse isOpened={collapseToggle[4]}>
							<MenuDepth2>
								<li>- 자폐</li>
								<li>- ADHD</li>
								<li>- 언어지연</li>
							</MenuDepth2>
						</Collapse>
					</Menu>
					<Menu>
						<MenuTitle>소아청소년과 검진</MenuTitle>
						<MenuDepth1>뇌파 검사</MenuDepth1>
						<MenuDepth1>자율신경계 검사</MenuDepth1>
						<MenuDepth1>종합발달심리 검사</MenuDepth1>
						<MenuDepth1>성장판 검사</MenuDepth1>
						<MenuDepth1>알레르기 검사</MenuDepth1>
					</Menu>
					<Menu>
						<MenuTitle>SPZ아동발달클리닉</MenuTitle>
						<MenuDepth1>감통치료</MenuDepth1>
						<MenuDepth1>언어치료</MenuDepth1>
						<MenuDepth1>ABBA</MenuDepth1>
						<MenuDepth1>ABBA</MenuDepth1>
					</Menu>
					<Menu>
						<MenuTitle>제이에스 소개</MenuTitle>
						<MenuDepth1>인사말</MenuDepth1>
						<MenuDepth1>의료진 소개</MenuDepth1>
						<MenuDepth1>진료시간</MenuDepth1>
						<MenuDepth1>오시는 길</MenuDepth1>
						<MenuDepth1>주차장</MenuDepth1>
					</Menu>
				</MenuWrapper>
			</SiteMapWrapper>
		</SideMenuContainer>
	);
};

export default SideMenu;
