import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategories, setSelectedIndustries } from "../redux/workReducer";
import { Box } from "@mui/system";
import { FormControl, Grid, MenuItem, Select, Typography } from "@mui/material";
import WorkCard from "../components/WorkCard";
import { filteredWorkCategories, filteredWorkIndustries } from "../redux/workSelectors";
import { getWorkData } from "../redux/services";

const WorkPortfolio = function() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getWorkData());
	}, [dispatch]);

	const workData = useSelector((state) => state.work.workData);
	const selectedCategories = useSelector((state) => state.work.selectedCategories);
	const selectedIndustries = useSelector((state) => state.work.selectedIndustries);

	const workCategories = useSelector((state) => filteredWorkCategories(state));
	const workIndustries = useSelector((state) => filteredWorkIndustries(state));


	return (<Box sx={{ overflowX: "hidden" }}>
		<Grid container alignItems="center" justifyContent="space-between" sx={{
			px: 2,
			py: 4
		}}>
			<Grid item sx={{ display: "inline-flex", alignItems: "center" }}>
				<Typography variant="h5" sx={{
					color: "grey.600",
					fontSize: 26
				}}>Show me</Typography>
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
					onChange={(event) => dispatch(setSelectedCategories(event.target.value))}
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
				<Typography variant="h5" sx={{
					color: "grey.600",
					fontSize: 26
				}}>in</Typography>
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
					onChange={(event) => dispatch(setSelectedIndustries(event.target.value))}
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
			{workData
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
