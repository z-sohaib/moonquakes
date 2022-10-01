/* eslint-disable react/no-unknown-property */
import { useRef, useState } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useFrame, useLoader } from "@react-three/fiber"

function Sphere() {
	const planet = useRef()
	const { nodes } = useLoader(GLTFLoader, "/models/moon.glb")
	const [seisms, setSeisms] = useState([
		{
			id: 1,
			x: 480,
			y: 0,
			z: 120
		},
		{
			id: 2,
			x: 0,
			y: 480,
			z: 120
		},
		{
			id: 3,
			x: 0,
			y: 270,
			z: 420
		},
		{
			id: 4,
			x: 455,
			y: 160,
			z: -120
		},
	])
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
				{seisms.map((seism) => (
					<mesh key={seism.id} onClick={() => console.log("clicked")} visible position={[seism.x, seism.y, seism.z]} scale={0.5}>
						<sphereBufferGeometry args={[20, 20, 20]} />
						<meshStandardMaterial color={"red"} />
					</mesh>
				))}
				
				{/* <mesh onClick={() => console.log("red clicked")} visible position={[0, 480, 120]} rotation={[0, 0, 0]} scale={0.4}>
					<sphereBufferGeometry args={[20, 20, 20]} />
					<meshStandardMaterial color={"red"} />
				</mesh>
				<mesh onClick={() => console.log("green clicked")} visible position={[0, 270, 420]} rotation={[0, 0, 0]} scale={0.4}>
					<sphereBufferGeometry args={[20, 20, 20]} />
					<meshStandardMaterial color={"green"} />
				</mesh> */}
			</group>
		</>
	)
}

export default Sphere