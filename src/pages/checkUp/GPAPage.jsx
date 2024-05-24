import React from "react";

import styled from "styled-components";

const ContentContainer = styled.div`
	padding-top: 80px;
	background: #f3deba;
	min-height: 800px;
`;

const ContentWrapper = styled.div``;

export default function GPA() {
	return (
		<ContentContainer>
			<ContentWrapper>
				<h1>성장판 검사 페이지입니다.</h1>
			</ContentWrapper>
		</ContentContainer>
	);
}
