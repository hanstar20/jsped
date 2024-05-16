import React from "react";

// styled components
import styled from "styled-components";

export default function mHeader() {
	return <HeaderContainer>모바일 Header 입니다.</HeaderContainer>;
}

const HeaderContainer = styled.div`
	display: flex;
	position: sticky;
	height: 88.5px;
	background: red;
`;
