/* eslint-disable react/no-unknown-property */
import { useRef } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useFrame, useLoader } from "@react-three/fiber"

function Sphere() {
	const planet = useRef()
	const { nodes } = useLoader(GLTFLoader, "/models/moon.glb")

	useFrame(() => {
		planet.current.rotation.y += 0.002
	})

	return (
		<>
			<group ref={planet}>
				<mesh
					visible
					position={[0, 0, 0]}
					geometry={nodes.Cube008.geometry}
					material={nodes.Cube008.material} />
				<mesh visible position={[480, 0, 120]} scale={0.4}>
					<sphereBufferGeometry args={[20, 20, 20]} />
					<meshStandardMaterial color={"blue"} />
				</mesh>
				<mesh visible position={[480, 0, 120]} scale={0.4}>
					<sphereBufferGeometry args={[20, 20, 20]} />
					<meshStandardMaterial color={"blue"} />
				</mesh>
			</group>
		</>
	)
}

export default Sphere