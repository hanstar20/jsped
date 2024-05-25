import React, { useState } from "react";
import { useToggleContext } from "../../context/toggleContext";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
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

const StyledLink = styled(Link)`
	text-decoration: none;

	color: inherit; /* 부모 요소의 색상을 상속받습니다. */

	&:visited {
		color: inherit; /* 방문한 링크의 색상도 상속받음 */
	}

	&:hover {
		color: #f5954b;
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
						<MenuDepth1>
							<StyledLink onClick={toggleValue} to='/features/1'>
								발달 전문의
							</StyledLink>
						</MenuDepth1>
						<MenuDepth1>
							<StyledLink onClick={toggleValue} to='/features/2'>
								영유아검진 심층 상담
							</StyledLink>
						</MenuDepth1>
						<MenuDepth1>
							<StyledLink onClick={toggleValue} to='/features/3'>
								정밀 검사 가능
							</StyledLink>
						</MenuDepth1>
					</Menu>
					<Menu>
						<MenuTitle>소아청소년과 진료</MenuTitle>
						<MenuDepth1
							onMouseEnter={() => {
								setCollapseToggle((prev) => [true, false, false, false, false]);
							}}>
							<StyledLink onClick={toggleValue} to='/clinic/cold'>
								일반 진료
							</StyledLink>
						</MenuDepth1>
						<Collapse isOpened={collapseToggle[0]}>
							<MenuDepth2>
								<li>
									<StyledLink onClick={toggleValue} to='/clinic/cold'>
										- 감기
									</StyledLink>
								</li>
								<li>
									<StyledLink onClick={toggleValue} to='/clinic/infant-check'>
										- 영유아검진
									</StyledLink>
								</li>
								<li>
									<StyledLink onClick={toggleValue} to='/clinic/vaccination'>
										- 예방접종
									</StyledLink>
								</li>
								<li>
									<StyledLink onClick={toggleValue} to='/clinic/fluid-treatment'>
										- 수액 치료
									</StyledLink>
								</li>
							</MenuDepth2>
						</Collapse>

						<MenuDepth1
							onMouseEnter={() => {
								setCollapseToggle((prev) => [false, true, false, false, false]);
							}}>
							<StyledLink onClick={toggleValue} to='/clinic/rhinitis'>
								알레르기
							</StyledLink>
						</MenuDepth1>
						<Collapse isOpened={collapseToggle[1]}>
							<MenuDepth2>
								<li>
									<StyledLink onClick={toggleValue} to='/clinic/rhinitis'>
										- 비염
									</StyledLink>
								</li>
								<li>
									<StyledLink onClick={toggleValue} to='/clinic/atopy'>
										- 아토피
									</StyledLink>
								</li>
								<li>
									<StyledLink onClick={toggleValue} to='/clinic/asthma'>
										- 천식
									</StyledLink>
								</li>
							</MenuDepth2>
						</Collapse>

						<MenuDepth1
							onMouseEnter={() => {
								setCollapseToggle((prev) => [false, false, !collapseToggle[2], false, false]);
							}}>
							<StyledLink onClick={toggleValue} to='/clinic/headache'>
								소아신경
							</StyledLink>
						</MenuDepth1>
						<Collapse isOpened={collapseToggle[2]}>
							<MenuDepth2>
								<li>
									<StyledLink onClick={toggleValue} to='/clinic/headache'>
										- 두통
									</StyledLink>
								</li>
								<li>
									<StyledLink onClick={toggleValue} to='/clinic/dizziness'>
										- 어지럼증
									</StyledLink>
								</li>
								<li>
									<StyledLink onClick={toggleValue} to='/clinic/twitch'>
										- 경련
									</StyledLink>
								</li>
								<li>
									<StyledLink onClick={toggleValue} to='/clinic/sleep'>
										- 수면
									</StyledLink>
								</li>
							</MenuDepth2>
						</Collapse>

						<MenuDepth1
							onMouseEnter={() => {
								setCollapseToggle((prev) => [false, false, false, !collapseToggle[3], false]);
							}}>
							<StyledLink onClick={toggleValue} to='/clinic/precocious-puberty'>
								성장
							</StyledLink>
						</MenuDepth1>
						<Collapse isOpened={collapseToggle[3]}>
							<MenuDepth2>
								<li>
									<StyledLink onClick={toggleValue} to='/clinic/precocious-puberty'>
										- 성조숙증
									</StyledLink>
								</li>
								<li>
									<StyledLink onClick={toggleValue} to='/clinic/growth-in-height'>
										- 키성장
									</StyledLink>
								</li>
							</MenuDepth2>
						</Collapse>

						<MenuDepth1
							onMouseEnter={() => {
								setCollapseToggle((prev) => [false, false, false, false, !collapseToggle[3]]);
							}}>
							<StyledLink onClick={toggleValue} to='/clinic/autism'>
								발달지연
							</StyledLink>
						</MenuDepth1>
						<Collapse isOpened={collapseToggle[4]}>
							<MenuDepth2>
								<li>
									<StyledLink onClick={toggleValue} to='/clinic/autism'>
										- 자폐
									</StyledLink>
								</li>
								<li>
									<StyledLink onClick={toggleValue} to='/clinic/adhd'>
										- ADHD
									</StyledLink>
								</li>
								<li>
									<StyledLink onClick={toggleValue} to='/clinic/language-delay'>
										- 언어지연
									</StyledLink>
								</li>
							</MenuDepth2>
						</Collapse>
					</Menu>
					<Menu>
						<MenuTitle>소아청소년과 검진</MenuTitle>
						<MenuDepth1>
							<StyledLink onClick={toggleValue} to='/check-up/egg'>
								뇌파 검사
							</StyledLink>
						</MenuDepth1>
						<MenuDepth1>
							<StyledLink onClick={toggleValue} to='/check-up/ans'>
								자율신경계 검사
							</StyledLink>
						</MenuDepth1>
						<MenuDepth1>
							<StyledLink onClick={toggleValue} to='/check-up/cdpa'>
								종합발달심리 검사
							</StyledLink>
						</MenuDepth1>
						<MenuDepth1>
							<StyledLink onClick={toggleValue} to='/check-up/gpa'>
								성장판 검사
							</StyledLink>
						</MenuDepth1>
						<MenuDepth1>
							<StyledLink onClick={toggleValue} to='/check-up/at'>
								알레르기 검사
							</StyledLink>
						</MenuDepth1>
					</Menu>
					<Menu>
						<MenuTitle>SPZ아동발달클리닉</MenuTitle>
						<MenuDepth1>
							<StyledLink onClick={toggleValue} to='/cdc/sit'>
								감통치료
							</StyledLink>
						</MenuDepth1>
						<MenuDepth1>
							<StyledLink onClick={toggleValue} to='/cdc/st'>
								언어치료
							</StyledLink>
						</MenuDepth1>
						<MenuDepth1>
							<StyledLink onClick={toggleValue} to='/cdc/st'>
								ABBA
							</StyledLink>
						</MenuDepth1>
						<MenuDepth1>
							<StyledLink onClick={toggleValue} to='/cdc/st'>
								ABBA
							</StyledLink>
						</MenuDepth1>
					</Menu>
					<Menu>
						<MenuTitle>제이에스 소개</MenuTitle>
						<MenuDepth1>
							<StyledLink onClick={toggleValue} to='//about-js/greeting'>
								인사말
							</StyledLink>
						</MenuDepth1>
						<MenuDepth1>
							<StyledLink onClick={toggleValue} to='//about-js/introduction'>
								의료진 소개
							</StyledLink>
						</MenuDepth1>
						<MenuDepth1>
							<StyledLink onClick={toggleValue} to='//about-js/time'>
								진료시간
							</StyledLink>
						</MenuDepth1>
						<MenuDepth1>
							<StyledLink onClick={toggleValue} to='//about-js/directions'>
								오시는 길
							</StyledLink>
						</MenuDepth1>
						<MenuDepth1>
							<StyledLink onClick={toggleValue} to='//about-js/parking-lot'>
								주차장
							</StyledLink>
						</MenuDepth1>
					</Menu>
				</MenuWrapper>
			</SiteMapWrapper>
		</SideMenuContainer>
	);
};

export default SideMenu;
