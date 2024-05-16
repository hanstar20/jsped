import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MHeader from "../components/layout/mHeader";

// styled components
import styled from "styled-components";

export default function MRoute() {
	return (
		<BrowserRouter>
			<Container>
				<ContentWrapper>
					<MHeader />
				</ContentWrapper>
			</Container>
		</BrowserRouter>
	);
}

// styled

const Container = styled.div``;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
