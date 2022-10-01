/* eslint-disable react/no-unknown-property */
import { useRef } from "react"
import { extend, useThree, useFrame } from "@react-three/fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

extend({ OrbitControls })

function CameraControls() {
	const {
		camera,
		gl: { domElement },
	} = useThree()

	const controls = useRef()

	camera.position.z = 999

	useFrame(() => controls.current.update())

	return (
		<orbitControls
			ref={controls}
			args={[camera, domElement]}
			autoRotate={false}
			enableZoom={false}
		/>
	)
}

export default CameraControls