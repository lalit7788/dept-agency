import React from "react";
import { Box } from "@mui/system";
import { FormControl, Grid, MenuItem, Select, Typography } from "@mui/material";
import WorkCard from "../components/WorkCard";
import work from "../data/work";
import styled from "styled-components";

const FilterLabel = styled(Typography)(() => ({
	color: "grey.600",
	fontSize: 26
}));

const WorkPortfolio = function() {
	const [selectedCategories, setSelectedCategories] = React.useState(["all-work"]);
	const [selectedIndustries, setSelectedIndustries] = React.useState(["all-industries"]);

	const workCategories = React.useMemo(() => {
		return new Set(work
			.filter((workItem) => {
				if (selectedIndustries && selectedIndustries.indexOf("all-industries") === 0) {
					return true;
				}
				return selectedIndustries.indexOf(workItem.industry) >= 0;
			})
			.flatMap((workItem) => workItem.categories)
		);
	}, [selectedIndustries]);

	const workIndustries = React.useMemo(() => {
		return new Set(work
			.filter((workItem) => selectedCategories && selectedCategories.indexOf("all-work") === 0 ? true : workItem.categories.some((wCat) => selectedCategories.indexOf(wCat) >= 0))
			.map((workItem) => workItem.industry)
		);
	}, [selectedCategories]);

	const handleCategoriesSelect = (event) => {
		const { value } = event.target;
		if (value.length > 1) {
			const allCategoriesIndex = value.indexOf("all-work");
			if (allCategoriesIndex >= 0) {
				if (allCategoriesIndex === 0) {
					const newCategories = value.slice();
					newCategories.splice(0, 1);
					setSelectedCategories(newCategories);
				} else {
					setSelectedCategories(["all-work"]);
				}
			} else {
				setSelectedCategories(value);
			}
		} else {
			if (!value.length || value.indexOf("all-work") >= 0) {
				setSelectedCategories(["all-work"]);
			} else {
				setSelectedCategories(value);
			}
		}
	}

	const handleIndustriesSelect = (event) => {
		const { value } = event.target;
		if (value.length > 1) {
			const allCategoriesIndex = value.indexOf("all-industries");
			if (allCategoriesIndex >= 0) {
				if (allCategoriesIndex === 0) {
					const newIndustries = value.slice();
					newIndustries.splice(0, 1);
					setSelectedIndustries(newIndustries);
				} else {
					setSelectedIndustries(["all-industries"]);
				}
			} else {
				setSelectedIndustries(value);
			}
		} else {
			if (!value.length || value.indexOf("all-industries") >= 0) {
				setSelectedIndustries(["all-industries"]);
			} else {
				setSelectedIndustries(value);
			}
		}
	}

	return (<Box sx={{ overflowX: "hidden" }}>
		<Grid container alignItems="center" justifyContent="space-between" sx={{
			px: 2,
			py: 4
		}}>
			<Grid item sx={{ display: "inline-flex", alignItems: "center" }}>
				<FilterLabel variant="h5">Show me</FilterLabel>
				<FormControl
					variant="standard"
					sx={{
						marginLeft: 1,
						minWidth: 120
					}}
				>
				<Select
					multiple
					value={selectedCategories}
					onChange={handleCategoriesSelect}
					sx={{
						color: "grey.900",
						backgroundColor: "common.white",
						fontSize: 26,
						"& .MuiSelect-icon": {
							display: "none"
						}
					}}
					MenuProps={{
						sx: {
							"& .MuiMenu-list": {
								color: "grey.900",
								backgroundColor: "common.white"
							}
						}
					}}
				>
					<MenuItem value={"all-work"}>
						all work
					</MenuItem>
					{Array.from(workCategories)
						.map((category, index) => (<MenuItem key={index} value={category}>
							{category}
						</MenuItem>))}
				</Select>
				</FormControl>
			</Grid>
			<Grid item sx={{ display: "inline-flex", alignItems: "center" }}>
				<FilterLabel variant="h5">in</FilterLabel>
				<FormControl
					variant="standard"
					sx={{
						marginLeft: 1,
						minWidth: 150
					}}
				>
				<Select
					multiple
					value={selectedIndustries}
					onChange={handleIndustriesSelect}
					sx={{
						color: "grey.900",
						backgroundColor: "common.white",
						fontSize: 26,
						"& .MuiSelect-icon": {
							display: "none"
						}
					}}
					MenuProps={{
						sx: {
							"& .MuiMenu-list": {
								color: "grey.900",
								backgroundColor: "common.white"
							}
						}
					}}
				>
					<MenuItem value={"all-industries"}>
						all industries
					</MenuItem>
					{Array.from(workIndustries)
						.map((industry, index) => (<MenuItem key={index} value={industry}>
							{industry}
						</MenuItem>))}
				</Select>
				</FormControl>
			</Grid>
		</Grid>
		<Grid container>
			{work
				.filter((workItem) => workItem.imgName)
				.filter((workItem) => selectedCategories.indexOf("all-work") === 0 ? true : workItem.categories.some((wCat) => selectedCategories.indexOf(wCat) >= 0))
				.filter((workItem) => selectedIndustries.indexOf("all-industries") === 0 ? true : selectedIndustries.indexOf(workItem.industry) >= 0)
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
