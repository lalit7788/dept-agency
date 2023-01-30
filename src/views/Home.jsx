import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const images = require.context("../images", true);

const Home = function() {

	return (<Box
		sx={{
			marginTop: (theme) => `${theme.mixins.toolbar["@media (min-width:600px)"].minHeight}px`,
			height: 900
		}}
	>
		<img
			alt="DEPT agency home page"
			src={images(`./home.png`)}
			loading="eager"
			width="100%"
			height="100%"
		/>
		<Box
			sx={{
				color: "text.primary",
				width: {
					xs: 500,
					sm: 600,
					md: 700
				},
				fontWeight: "fontWeightMedium",
				position: "relative",
				bottom: 200
			}}
		>
			<Typography variant="h6" sx={{ px: 5, textTransform: "uppercase" }}>Work</Typography>
			<Typography variant="h4" sx={{ px: 5 }}>
				A selection of projects that <strong>pioneer tech</strong> and <strong>marketing</strong> to help brands stay ahead.
			</Typography>
		</Box>
	</Box>);
}

Home.propTypes = {
	//
};

export default Home;
