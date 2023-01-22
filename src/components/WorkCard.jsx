import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { Adjust } from "@mui/icons-material";

const images = require.context('../images', true);

const WorkCard = function({ imgName, companyName, cardTitle }) {
	const img = images(`./${imgName}.png`);

	return (<Box sx={{
		backgroundImage: `url(${img})`,
		width: "100%",
		height: 500,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat"
	}}>
		<Box sx={{
			color: "common.white",
			"& .MuiButton-text": {
				color: "common.white"
			},
			position: "relative",
			top: 300,
			left: 40
		}}>
			<Typography variant="button">{companyName}</Typography>
			<Typography variant="h6">{cardTitle}</Typography>
			<Button sx={{ px: 0 }}>
				<Adjust fontSize="10"/>&nbsp;
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
