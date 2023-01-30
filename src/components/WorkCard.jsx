import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { Adjust } from "@mui/icons-material";

const images = require.context("../images", true);

const WorkCard = function({ imgName, companyName, cardTitle }) {
	const img = images(`./${imgName}.png`);

	return (<Box sx={{
		height: "100%"
	}}>
		<img
			alt={imgName}
			src={img}
			loading="lazy"
			width="100%"
			stye={{
				maxWidth: "100%"
			}}
			height="100%"
		/>
		<Box sx={{
			color: "common.white",
			"& .MuiButton-text": {
				color: "common.white"
			},
			position: "relative",
			bottom: 190,
			px: 3.75
		}}>
			<Typography variant="h6" sx={{ textTransform: "uppercase" }}>{companyName}</Typography>
			<Typography variant="h2" sx={{ lineHeight: "48px" }}>{cardTitle}</Typography>
			<Button sx={{ fontSize: "18px", px: 0 }}>
				<Adjust/>&nbsp;
				Read more
			</Button>
		</Box>
	</Box>);
}

WorkCard.propTypes = {
	imgName: PropTypes.string,
	companyName: PropTypes.string,
	cardTitle: PropTypes.string
};

export default WorkCard;
