import * as React from "react";
import styled from "styled-components";
import deptLogo from "../images/logos/dept.png";
import { Box } from "@mui/system";
import { AppBar, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { MoreHoriz, PlayArrow } from "@mui/icons-material";

const navItems = ["Work", "Culture", "Services", "Insights", "Careers", "Contact"];
const drawerWidth = 240;

const CompanyLogo = styled("img")(() => ({
	height: 22
}));

const AppHeader = function() {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [selectedTab, setSelectedTab] = React.useState(0);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (<Box
		sx={{ textAlign: "center" }}
	 >
		<Typography variant="h6" sx={{ my: 2 }}>
		  Menu
		</Typography>
		<Divider />
		<List>
		  {navItems.map((item, index) => (
			<ListItem
				key={item}
				disablePadding
			>
				<ListItemButton
					sx={{ textAlign: "right" }}
					selected={selectedTab === index}
					onClick={() => {
						setSelectedTab(index);
					}}
				>
					<ListItemText sx={{
							borderBottom: 1,
							borderColor: "grey.600"
						}}
					>
						{selectedTab === index ? (<PlayArrow fontSize="10" sx={{ verticalAlign: "middle" }}/>) : null}
						{item}
					</ListItemText>
				</ListItemButton>
			</ListItem>
		  ))}
		</List>
	</Box>);

	return (<Box>
		<AppBar component="nav">
			<Toolbar sx={{
				display: "flex",
				justifyContent: "space-between"
			}}>
				<CompanyLogo
					alt="company-logo"
					src={deptLogo}
				/>
				<Box sx={{ display: "inline-flex", alignItems: "center"}}>
					<Box sx={{ display: { xs: 'none', md: 'block' } }}>
						{navItems.map((item, index) => (
							<Button
								key={item}
								disableRipple
								variant="text"
								onClick={() => {
									setSelectedTab(index);
								}}
								sx={[
									{
										color: "common.white",
										"&:hover > .MuiTypography-root": {
											borderBottom: (theme) => `1px solid ${theme.palette.common.white}`
										}
									},
									index === selectedTab && {
										"& > .MuiTypography-root": { borderBottom: (theme) => `1px solid ${theme.palette.common.white}` }
									}
								]}
							>
								<Typography variant="caption" sx={{
									fontSize: 18
								}}>{item}</Typography>
							</Button>
						))}
					</Box>
					<IconButton
						sx={{ display: { md: "none" } }}
						onClick={handleDrawerToggle}
					>
						<MoreHoriz sx={{ color: "common.white" }}/>
					</IconButton>
				</Box>
			</Toolbar>
		</AppBar>
		<Box component="nav">
			<Drawer
				anchor="right"
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
				keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: { xs: 'block', md: 'none' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
				}}
			>
				{drawer}
			</Drawer>
		</Box>
	</Box>);
}

export default AppHeader;
