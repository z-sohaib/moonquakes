/* eslint-disable react/no-unknown-property */
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

function Test() {
	const test = useRef()
	return (
		<mesh visible position={[480, 0, 120]} scale={0.4} ref={test}>
			<sphereBufferGeometry args={[20, 20, 20]} />
			<meshStandardMaterial color={"blue"} />
		</mesh>

	)
}

export default Test