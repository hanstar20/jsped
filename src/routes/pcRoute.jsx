import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useToggleContext } from "../context/toggleContext";
import Header from "../components/layout/pcHeader";
import SideMenu from "../components/layout/pcSideMenu";
import MainContent from "../pages/main/mainPage";
// JS의 특별함 페이지 import
import FirstFeature from "../pages/features/firstFeaturePage";
import SecondFeature from "../pages/features/secondFeaturePage";
import ThirdFeature from "../pages/features/thirdFeaturePage";
// 소아청소년과 진료 페이지 import
import ADHD from "../pages/clinic/ADHDPage";
import Asthma from "../pages/clinic/asthmaPage";
import Atopy from "../pages/clinic/atopyPage";
import Autism from "../pages/clinic/autismPage";
import Cold from "../pages/clinic/coldPage";
import Dizziness from "../pages/clinic/dizzinessPage";
import FluidTreatment from "../pages/clinic/fluidTreatmentPage";
import GrowthInHeight from "../pages/clinic/growthInHeightPage";
import Headache from "../pages/clinic/headachePage";
import InfantCheck from "../pages/clinic/infantCheckPage";
import LanguageDelay from "../pages/clinic/languageDelayPage";
import PrecociousPuberty from "../pages/clinic/precociousPubertyPage";
import Rhinitis from "../pages/clinic/rhinitisPage";
import Sleep from "../pages/clinic/sleepPage";
import Twitch from "../pages/clinic/twitchPage";
import Vaccination from "../pages/clinic/vaccinationPage";
// 소아청소년과 검진 페이지 import
import EGG from "../pages/checkUp/EGGPage";
import ANS from "../pages/checkUp/ANSPage";
import CDPA from "../pages/checkUp/CDPAPage";
import GPA from "../pages/checkUp/GPAPage";
import AT from "../pages/checkUp/ATPage";
// SPZ 아동발달센터 페이지 import
import SIT from "../pages/CDC/SITPage";
import ST from "../pages/CDC/STPage";
// 제이에스 소개 페이지 import
import Greeting from "../pages/aboutJS/greetingPage";
import Introduction from "../pages/aboutJS/introductionPage";
import Time from "../pages/aboutJS/timePage";
import Directions from "../pages/aboutJS/directionsPage";
import ParkingLot from "../pages/aboutJS/parkingLotPage";

// styled components
import styled from "styled-components";

export default function PcRoute() {
	const { toggle, toggleValue } = useToggleContext();

	return (
		<BrowserRouter>
			<Container>
				<ContentWrapper>
					<Header />
					<Routes>
						<Route path='/' element={<MainContent />} exact={true} />

						<Route path='/features/1' element={<FirstFeature />} />
						<Route path='/features/2' element={<SecondFeature />} />
						<Route path='/features/3' element={<ThirdFeature />} />

						<Route path='/clinic/adhd' element={<ADHD />} />
						<Route path='/clinic/asthma' element={<Asthma />} />
						<Route path='/clinic/atopy' element={<Atopy />} />
						<Route path='/clinic/autism' element={<Autism />} />
						<Route path='/clinic/cold' element={<Cold />} />
						<Route path='/clinic/dizziness' element={<Dizziness />} />
						<Route path='/clinic/fluid-treatment' element={<FluidTreatment />} />
						<Route path='/clinic/growth-in-height' element={<GrowthInHeight />} />
						<Route path='/clinic/headache' element={<Headache />} />
						<Route path='/clinic/infant-check' element={<InfantCheck />} />
						<Route path='/clinic/language-delay' element={<LanguageDelay />} />
						<Route path='/clinic/precocious-puberty' element={<PrecociousPuberty />} />
						<Route path='/clinic/rhinitis' element={<Rhinitis />} />
						<Route path='/clinic/sleep' element={<Sleep />} />
						<Route path='/clinic/twitch' element={<Twitch />} />
						<Route path='/clinic/vaccination' element={<Vaccination />} />

						<Route path='/cdc/sit' element={<SIT />} />
						<Route path='/cdc/st' element={<ST />} />

						<Route path='/check-up/egg' element={<EGG />} />
						<Route path='/check-up/ans' element={<ANS />} />
						<Route path='/check-up/cdpa' element={<CDPA />} />
						<Route path='/check-up/gpa' element={<GPA />} />
						<Route path='/check-up/at' element={<AT />} />

						<Route path='/about-js/greeting' element={<Greeting />} />
						<Route path='/about-js/introduction' element={<Introduction />} />
						<Route path='/about-js/time' element={<Time />} />
						<Route path='/about-js/directions' element={<Directions />} />
						<Route path='/about-js/parking-lot' element={<ParkingLot />} />
					</Routes>
				</ContentWrapper>
				<SideMenu isOpen={toggle} />
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
