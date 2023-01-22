import React from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import WorkCard from "../components/WorkCard";
import work from "../data/work";

const WorkPortfolio = function() {
	return (<Box sx={{ overflowX: "hidden" }}>
		<p>Filters here</p>
		<Grid container>
			{work
				.filter((workItem) => workItem.imgName)
				.map(({ id, customer, title, imgName }) => (<Grid key={id} item xs={12} sm={12} md={6}>
					<WorkCard
						imgName={imgName}
						companyName={customer}
						cardTitle={title}
					/>
				</Grid>
			))}
		</Grid>
	</Box>);
}

WorkPortfolio.propTypes = {
	//
};

export default WorkPortfolio;
