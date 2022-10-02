/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useRef, useState } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useFrame, useLoader } from "@react-three/fiber"
import { useNavigate } from "react-router-dom"
import { Html } from "@react-three/drei"

function Sphere() {
	const navigate = useNavigate()
	const planet = useRef()
	const { nodes } = useLoader(GLTFLoader, "/models/moon.glb")
	// Deep moonquakes, vibrations, thermal quakes, shallow quakes
	const [seisms, setSeisms] = useState([
		{
			id: 1,
			x: 480,
			y: 0,
			z: 120,
			type: "Deep Moonquake",
			color: "red"
		},
		{
			id: 2,
			x: 0,
			y: 480,
			z: 120,
			type: "Vibration",
			color: "green"
		},
		
		{
			id: 3,
			x: 0,
			y: 270,
			z: 420,
			type: "Thermal Quake",
			color: "blue"
		},
		{
			id: 4,
			x: 455,
			y: 160,
			z: -120,
			type: "Shallow Quake",
			color: "yellow"
		},
		{
			id: 5,
			x: 344,
			y: 160,
			z: 320,
			type: "Deep Moonquake",
			color: "red"
		},
		{
			id: 6,
			x: 290,
			y: 400,
			z: 50,
			type: "Vibration",
			color: "green"
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
					<>
						<Html as="div" position={[seism.x + 10, seism.y, seism.z + 10]}>
							<div className="glass px-4 py-2 text-[12px] text-white w-36 text-center">
								{seism.type}
							</div>
						</Html>
						<mesh key={seism.id}  onClick={() => {console.log("clicked"); navigate("/home/details")}} visible position={[seism.x, seism.y, seism.z]} scale={0.5}>
							<sphereBufferGeometry args={[20, 20, 20]} />
							<meshStandardMaterial color={seism.color} />
						</mesh>
					</>
					
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