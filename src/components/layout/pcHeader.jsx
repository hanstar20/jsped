import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useToggleContext } from "../../context/toggleContext";
import { Link } from "react-router-dom";

import headerLogo from "../../public/assets/img/jsped_logo_white.png";

// react-collapse
import { Collapse } from "react-collapse";

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
	z-index: 1000;
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
        /* opacity: 0; */
        transform: translateY(-500px);
    }
    to {
        /* opacity: 1; */
        transform: translateY(0);
    }
`;

const dropupAnimation = keyframes`
    from {
        /* opacity: 1; */
        transform: translateY(0);
    }
    to {
        /* opacity: 0; */
        transform: translateY(-500px);
    }
`;

const DropdownContent = styled.div`
	position: absolute;
	top: 80px;
	background-color: #ffffff;
	display: flex;
	justify-content: center;
	width: 100vw;
	height: auto;
	box-sizing: border-box; /* padding과 border를 포함한 너비 설정 */
	padding: 0 60px 40px 160px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	animation-name: ${(props) => (props.hover ? dropdownAnimation : dropupAnimation)};
	animation-duration: 0.5s;
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

const SubMenuItemStyledLink = styled(Link)`
	text-decoration: none;
	padding: 12px 0;
	cursor: pointer;
	color: #000000;
	font-size: 18px;

	&:hover {
		color: #056338; // 호버시 색 변경
		font-weight: bold;
	}
`;

const MenuDepth2 = styled.ul`
	margin: 0;
	padding-left: 10px;
	padding-bottom: 10px;
	font-size: 17px;
	font-weight: 300;

	li {
		list-style: none;
		padding: 5px 0;

		&:hover {
			color: #056338; // 호버시 색 변경
			font-weight: bold;
		}
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;

	color: inherit; /* 부모 요소의 색상을 상속받습니다. */

	&:visited {
		color: inherit; /* 방문한 링크의 색상도 상속받음 */
	}
`;

export default function PcHeader() {
	const { toggle, toggleValue } = useToggleContext();

	const [collapseToggle, setCollapseToggle] = useState([false, false, false, false, false]);

	const [hover, setHover] = useState(false);

	return (
		<HeaderContainer>
			<Nav>
				<Link to='/'>
					<HeaderLogo alt='JS PED' src={headerLogo} />
				</Link>
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
						<SubMenuItem>
							<SubMenuItemStyledLink onClick={() => setHover(false)} to='/features/1'>
								발달 전문의
							</SubMenuItemStyledLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuItemStyledLink onClick={() => setHover(false)} to='/features/2'>
								영유아검진 심층 상담
							</SubMenuItemStyledLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuItemStyledLink onClick={() => setHover(false)} to='/features/3'>
								정밀 검사 가능
							</SubMenuItemStyledLink>
						</SubMenuItem>
					</SubMenuItems>
					<SubMenuItems>
						<SubMenuItem>
							<SubMenuItemStyledLink
								onMouseEnter={() => {
									setCollapseToggle((prev) => [true, false, false, false, false]);
								}}
								onClick={() => setHover(false)}
								to='/clinic/cold'>
								일반 진료
							</SubMenuItemStyledLink>
						</SubMenuItem>
						<Collapse isOpened={collapseToggle[0]}>
							<MenuDepth2>
								<li>
									<StyledLink to='/clinic/cold'>- 감기</StyledLink>
								</li>
								<li>
									<StyledLink to='/clinic/infantCheck'>- 영유아검진</StyledLink>
								</li>
								<li>
									<StyledLink to='/clinic/vaccination'>- 예방접종</StyledLink>
								</li>
								<li>
									<StyledLink to='/clinic/fluidTreatment'>- 수액 치료</StyledLink>
								</li>
							</MenuDepth2>
						</Collapse>

						<SubMenuItem>
							<SubMenuItemStyledLink
								onMouseEnter={() => {
									setCollapseToggle((prev) => [false, true, false, false, false]);
								}}
								onClick={() => setHover(false)}
								to='/clinic/rhinitis'>
								알레르기
							</SubMenuItemStyledLink>
						</SubMenuItem>
						<Collapse isOpened={collapseToggle[1]}>
							<MenuDepth2>
								<li>
									<StyledLink to='/clinic/rhinitis'>- 비염</StyledLink>
								</li>
								<li>
									<StyledLink to='/clinic/atopy'>- 아토피</StyledLink>
								</li>
								<li>
									<StyledLink to='/clinic/asthma'>- 천식</StyledLink>
								</li>
							</MenuDepth2>
						</Collapse>

						<SubMenuItem>
							<SubMenuItemStyledLink
								onMouseEnter={() => {
									setCollapseToggle((prev) => [false, false, true, false, false]);
								}}
								onClick={() => setHover(false)}
								to='/clinic/headache'>
								소아신경
							</SubMenuItemStyledLink>
						</SubMenuItem>
						<Collapse isOpened={collapseToggle[2]}>
							<MenuDepth2>
								<li>
									<StyledLink to='/clinic/headache'>- 두통</StyledLink>
								</li>
								<li>
									<StyledLink to='/clinic/dizziness'>- 어지럼증</StyledLink>
								</li>
								<li>
									<StyledLink to='/clinic/twitch'>- 경련</StyledLink>
								</li>
								<li>
									<StyledLink to='/clinic/sleep'>- 수면</StyledLink>
								</li>
							</MenuDepth2>
						</Collapse>

						<SubMenuItem>
							<SubMenuItemStyledLink
								onMouseEnter={() => {
									setCollapseToggle((prev) => [false, false, false, true, false]);
								}}
								onClick={() => setHover(false)}
								to='/clinic/precociousPuberty'>
								성장
							</SubMenuItemStyledLink>
						</SubMenuItem>
						<Collapse isOpened={collapseToggle[3]}>
							<MenuDepth2>
								<li>
									<StyledLink to='/clinic/precociousPuberty'>- 성조숙증</StyledLink>
								</li>
								<li>
									<StyledLink to='/clinic/growthInHeight'>- 키성장</StyledLink>
								</li>
							</MenuDepth2>
						</Collapse>

						<SubMenuItem>
							<SubMenuItemStyledLink
								onMouseEnter={() => {
									setCollapseToggle((prev) => [false, false, false, false, true]);
								}}
								onClick={() => setHover(false)}
								to='/clinic/autism'>
								발달지연
							</SubMenuItemStyledLink>
						</SubMenuItem>
						<Collapse isOpened={collapseToggle[4]}>
							<MenuDepth2>
								<li>
									<StyledLink to='/clinic/autism'>- 자폐</StyledLink>
								</li>
								<li>
									<StyledLink to='/clinic/adhd'>- ADHD</StyledLink>
								</li>
								<li>
									<StyledLink to='/clinic/languageDelay'>- 언어지연</StyledLink>
								</li>
							</MenuDepth2>
						</Collapse>
					</SubMenuItems>
					<SubMenuItems>
						<SubMenuItem>
							<SubMenuItemStyledLink onClick={() => setHover(false)} to='/features/1'>
								뇌파 검사
							</SubMenuItemStyledLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuItemStyledLink onClick={() => setHover(false)} to='/features/1'>
								자율신경계 검사
							</SubMenuItemStyledLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuItemStyledLink onClick={() => setHover(false)} to='/features/1'>
								종합발달심리 검사
							</SubMenuItemStyledLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuItemStyledLink onClick={() => setHover(false)} to='/features/1'>
								성장판 검사
							</SubMenuItemStyledLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuItemStyledLink onClick={() => setHover(false)} to='/features/1'>
								알레르기 검사
							</SubMenuItemStyledLink>
						</SubMenuItem>
					</SubMenuItems>
					<SubMenuItems>
						<SubMenuItem>
							<SubMenuItemStyledLink onClick={() => setHover(false)} to='/features/1'>
								감통치료
							</SubMenuItemStyledLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuItemStyledLink onClick={() => setHover(false)} to='/features/1'>
								언어치료
							</SubMenuItemStyledLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuItemStyledLink onClick={() => setHover(false)} to='/features/1'>
								ABBA
							</SubMenuItemStyledLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuItemStyledLink onClick={() => setHover(false)} to='/features/1'>
								ABBA
							</SubMenuItemStyledLink>
						</SubMenuItem>
					</SubMenuItems>
					<SubMenuItems>
						<SubMenuItem>
							<SubMenuItemStyledLink onClick={() => setHover(false)} to='/features/1'>
								인사말
							</SubMenuItemStyledLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuItemStyledLink onClick={() => setHover(false)} to='/features/1'>
								의료진 소개
							</SubMenuItemStyledLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuItemStyledLink onClick={() => setHover(false)} to='/features/1'>
								진료시간
							</SubMenuItemStyledLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuItemStyledLink onClick={() => setHover(false)} to='/features/1'>
								오시는 길
							</SubMenuItemStyledLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuItemStyledLink onClick={() => setHover(false)} to='/features/1'>
								주차장
							</SubMenuItemStyledLink>
						</SubMenuItem>
					</SubMenuItems>
				</SubMenuList>
			</DropdownContent>
		</HeaderContainer>
	);
}
