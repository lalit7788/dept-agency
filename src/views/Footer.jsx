import * as React from "react";
import styled from "styled-components";
import deptLogo from "../images/logos/dept.png";
import { Box } from "@mui/system";
import { Button, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navItems = ["Work", "Services", "Stories", "About", "Careers", "Contact"];

const CompanyLogo = styled("img")(() => ({
	height: 22
}));

const Footer = function() {
	return (<Box sx={{
		backgroundColor: "common.black",
		overflowX: "hidden"
	}}>
		<Grid
			container
			alignItems="center"
			rowSpacing={4}
			sx={{ padding: {
				xs: 5,
				md: "40px 64x"
			} }}
		>
			<Grid item xs={false} md={2} sx={{ display: { xs: "none", md: "flex" }}}>
				<CompanyLogo
					alt="company-logo"
					src={deptLogo}
				/>
			</Grid>
			<Grid item xs={false} md={10} sx={{ display: { xs: "none", md: "flex" }}}>
				<Box sx={{
					display: "inline-flex",
					alignItems: "center"
				}}>
					<Box>
						{navItems.map((item, index) => (
							<Button
								key={item}
								disableRipple
								variant="text"
								sx={{ color: "common.white"  }}
							>
								{item}
							</Button>
						))}
					</Box>
				</Box>
			</Grid>
			<Grid item xs={12} md={false} sx={{ display: { xs: "flex", md: "none" }}}>
				<Box
					sx={{ textAlign: 'left', width: "100%" }}
				>
					<List>
					{navItems.map((item, index) => {
						let icon = null;
						if (index === 0) {
							icon = (<FontAwesomeIcon icon="fa-brands fa-facebook-f"/>)
						} else if (index === 1) {
							icon = (<FontAwesomeIcon icon="fa-brands fa-twitter"/>)
						} else if (index === 2) {
							icon = (<FontAwesomeIcon icon="fa-brands fa-instagram"/>)
						}
						return (<ListItem
							key={item}
							disablePadding
							secondaryAction={icon ? (<IconButton sx={{ color: "common.white" }}>
								{icon}
							</IconButton>) : null}
						>
							<ListItemButton
								sx={{ color: 'common.white', textTransform: "uppercase" }}
							>
								<ListItemText primary={item}/>
							</ListItemButton>
						</ListItem>
					)})}
					</List>
				</Box>
			</Grid>
			<Grid item xs={12}>
				<Divider sx={{ borderColor: "grey.800" }}/>
			</Grid>
			<Grid item xs={12}>
				<Grid container>
					<Grid item xs={12} lg={3}>
						<Typography sx={{ color: "grey.600" }}>Chamber of Commerce: 64464101</Typography>
					</Grid>
					<Grid item xs={12} lg={3}>
						<Typography sx={{ color: "grey.600" }}>VAT: NL 8552.47.502.B01</Typography>
					</Grid>
					<Grid item xs={12} lg={3}>
						<Typography sx={{ color: "grey.600" }}>Terms and conditions</Typography>
					</Grid>
					<Grid item xs={12} lg={false} sx={{ display: { xs: "flex", lg: "none" }, paddingTop: 2 }}>
						<Typography sx={{ color: "grey.600" }}>© 2022 Dept Agency</Typography>
					</Grid>
					<Grid item xs={false} lg={3} sx={{ display: { xs: "none", lg: "flex" }, flexDirection: "row-reverse" }}>
						<Typography sx={{ color: "grey.600" }}>© 2022 Dept Agency</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	</Box>);
}

export default Footer;
