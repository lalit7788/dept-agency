import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useLazyLoadedImage } from "../hooks/useLazyLoadedImage";

const images = require.context('../images', true);

const Home = function() {
	const homeImg = useLazyLoadedImage(images(`./home.png`));

	return (<Box
		sx={{
			paddingTop: theme => theme.mixins.toolbar.minHeight,
			paddingBottom: 10,
			backgroundImage: `url(${homeImg})`,
			width: "100%",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat"
		}}
	>
		<Box
			sx={{
				color: "text.primary",
				width: {
					xs: 350,
					sm: 440,
					md: 480,
					lg: 540,
					xl: 600
				},
				fontWeight: "fontWeightMedium",
			}}
		>
			<Typography variant="button" sx={{ px: 5 }}>Work</Typography>
			<Typography variant="h5" sx={{ px: 5 }}>
				A selection of projects that <strong>pioneer tech</strong> and <strong>marketing</strong> to help brands stay ahead.
			</Typography>
		</Box>
	</Box>);
}

Home.propTypes = {
	//
};

export default Home;
