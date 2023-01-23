import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useLazyLoadedImage } from "../hooks/useLazyLoadedImage";
const logos = require.context("../images/logos", true);

const Logo = styled("img")`
	width: 100px;
	height: auto;
`;

const CustomerLogo = function({ name, imgName }) {
	const img = useLazyLoadedImage(logos(`./${imgName}.png`));

	return (<Logo alt={name} src={img}/>);
}

CustomerLogo.propTypes = {
	name: PropTypes.string.isRequired,
	imgName: PropTypes.string.isRequired
};

export default CustomerLogo;
