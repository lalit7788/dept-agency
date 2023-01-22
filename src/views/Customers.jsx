import React from "react";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import customers from "../data/customers";
import styled from "styled-components";
const images = require.context('../images/logos', true);

const CustomerLogo = styled("img")(() => ({
	width: 100
}));

const Customers = function() {
	return (<Box sx={{
		backgroundColor: "common.black",
		overflowX: "hidden",
		px: 5,
		py: 8
	}}>
		<Box sx={{ color: "common.white", py: 4 }}>
			<Typography gutterBottom variant="h4">Clients</Typography>
			<Typography>We value a great working relationship with our clients above all else. It's why they often come to our parties. It's also why we're able to challenge and inspire them to reach for the stars.</Typography>
		</Box>
		<Grid container sx={{
				width: {
					xs: "100%",
					sm: "70%"
				},
				mx: {
					xs: "10%",
					sm: "15%",
					lg: "20%"
				}
			}}>
			{customers.map(({ id, name, imgName }) => (<Grid key={id} item xs={6} sm={4}>
					<CustomerLogo alt={name} src={images(`./${imgName}.png`)}/>
				</Grid>
			))}
		</Grid>
	</Box>);
}

Customers.propTypes = {
	//
};

export default Customers;
