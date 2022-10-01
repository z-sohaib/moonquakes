/* eslint-disable react/prop-types */
import { useState } from "react"
import { Html } from "@react-three/drei"

function Marker({ children, ...props }) {
	// This holds the local occluded state
	const [occluded, occlude] = useState()
	return (
		<Html
			transform
			occlude
			onOcclude={occlude}
			style={{ transition: "all 0.2s", opacity: occluded ? 0 : 1, transform: `scale(${occluded ? 0.25 : 1})` }}
			{...props}>
			{children}
		</Html>
	)
}

export default Marker