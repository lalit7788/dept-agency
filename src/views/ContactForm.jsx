import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import { common } from "@mui/material/colors";
import { isValidEmail } from "../util/Utils";

const FormField = styled(TextField)(() => ({
	"& > label": {
		textTransform: "uppercase"
	},
	"& > div > input, & > div > textarea": {
		color: common.black
	}
}));

const ContactForm = function() {
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [emailError, setEmailError] = React.useState(false);
	const [emailHelperText, setEmailHelperText] = React.useState("");
	const [message, setMessage] = React.useState("");

	const handleEmailEntry = (email) => {
		const validEmailAddress = isValidEmail(email);
		setEmail(email);
		setEmailError(!validEmailAddress);
		setEmailHelperText(validEmailAddress ? "" : "Invalid email address");
	}

	const submitForm = () => {
		if (!email.trim()) {
			setEmailError(true);
			setEmailHelperText("This field is required");
		}
	}

	return (<Box sx={{ overflowX: "hidden" }}>
		<Grid container>
			<Grid item xs={12} md={4} sx={{
				padding: {
					xs: "16px 24px",
					md: 10
				}
			}}>
				<Typography sx={{
					fontSize: {
						xs: 26,
						md: 48
					},
					fontWeight: "fontWeightRegular",
					color: "grey.900"
				}}>
					QUESTION? WE ARE HERE TO HELP!
				</Typography>
			</Grid>
			<Grid item xs={12} md={8} sx={{
				padding: {
					xs: "0 24px 24px",
					md: 10
				}
			}}>
				<Grid container rowSpacing={{ xs: 4, md: 8 }} columnSpacing={8}>
					<Grid item xs={12} sm={6}>
						<FormField
							fullWidth
							label="Name"
							variant="standard"
							value={name}
							onChange={(event) => setName(event.target.value)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<FormField
							required
							error={emailError}
							helperText={emailHelperText}
							fullWidth
							label="Email"
							variant="standard"
							value={email}
							onChange={(event) => handleEmailEntry(event.target.value)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<FormField
							multiline
							fullWidth
							minRows={4}
							label="Message"
							variant="standard"
							value={message}
							onChange={(event) => setMessage(event.target.value)}
						/>
					</Grid>
					<Grid item sm={6}/>
					<Grid item xs={12} md={6}>
						<Button
							variant="outlined"
							onClick={submitForm}
							sx={{
								borderColor: "grey.900",
								borderRadius: 25,
								color: "grey.900",
								width: {
									xs: "100%",
									sm: "50%",
									md: "100%"
								}
							}}
						>
							Send
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	</Box>);
}

ContactForm.propTypes = {
	//
};

export default ContactForm;
