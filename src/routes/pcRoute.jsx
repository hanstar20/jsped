import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/layout/pcHeader";

// styled components
import styled from "styled-components";

export default function PcRoute() {
	return (
		<BrowserRouter>
			<Container>
				<ContentWrapper>
					<Header />
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
