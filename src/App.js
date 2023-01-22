import * as React from "react";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import { common } from "@mui/material/colors";
import Home from "./views/Home";
import AppHeader from "./components/AppHeader";
import WorkPortfolio from "./views/WorkPortfolio";
import Customers from "./views/Customers";
import ContactForm from "./views/ContactForm";
import Footer from "./views/Footer";

const theme = createTheme({
	palette: {
		primary: {
			main: common.black
		},
		grey: {
			"600": "#A3A3A3",
			"700": "#808080",
			"800": "#3E3E3E",
			"900": "#121212"
		},
		text: {
			primary: common.white
		},
		background: {
			paper: common.black,
			default: common.black
		}
	},
	typography: {
		fontFamily: "\"Maison Neue\", sans-serif"
	}
});

function App() {
	return (<ThemeProvider theme={theme}>
		<AppHeader/>
		<Container
			disableGutters
			maxWidth="xl"
			sx={{
				backgroundColor: "common.white"
			}}
		>
			<Home/>
			<WorkPortfolio/>
			<Customers/>
			<ContactForm/>
			<Footer/>
		</Container>
	</ThemeProvider>
	);
}

export default App;
