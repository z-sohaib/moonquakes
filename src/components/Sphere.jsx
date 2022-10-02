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
			color: "red",
			shadow: "shadow-red-600",
			date: "04-01-1971 ",
		},
		{
			id: 2,
			x: 0,
			y: 480,
			z: 120,
			type: "Vibration",
			color: "green",
			shadow: "shadow-green-600",
			date: "26-10-1971 ",
		},
		
		{
			id: 3,
			x: 0,
			y: 270,
			z: 420,
			type: "Thermal Quake",
			color: "blue",
			shadow: "shadow-blue-600",
			date: "03-03-1972 ",
		},
		{
			id: 4,
			x: 455,
			y: 160,
			z: -120,
			type: "Shallow Quake",
			color: "yellow",
			shadow: "shadow-yellow-600",
			date: "06-05-1972",
		},
		{
			id: 5,
			x: 344,
			y: 160,
			z: 320,
			type: "Deep Moonquake",
			color: "red",
			shadow: "shadow-red-600",
			date: "16-09-1973",
		},
		{
			id: 6,
			x: 290,
			y: 400,
			z: 50,
			type: "Vibration",
			color: "green",
			shadow: "shadow-green-600",
			date: "02-03-1973",
		},
		{
			id: 7,
			x: 290,
			y: 400,
			z: 120,
			type: "Vibration",
			color: "green",
			shadow: "shadow-green-600",
			date: "16-11-1976",
		},
		{
			id: 8,
			x: 290,
			y: 400,
			z: 50,
			type: "Deep Moonquake",
			color: "red",
			shadow: "shadow-red-600",
			date: "25-12-1983",
		},
		{
			id: 9,
			x: 290,
			y: 400,
			z: -130,
			type: "Deep Moonquake",
			color: "red",
			shadow: "shadow-red-600",
			date: "06-03-1985",
		},
		{
			id: 10,
			x: 180,
			y: 450,
			z: -150,
			type: "Thermal Quake",
			color: "blue",
			shadow: "shadow-blue-600",
			date: "30-09-1985",
		},
		{
			id: 11,
			x: 200,
			y: 450,
			z: -90,
			type: "Shallow Quake",
			color: "yellow",
			shadow: "shadow-yellow-600",
			date: "06-12-2003",
		},
		{
			id: 12,
			x: 60,
			y: -500,
			z: -80,
			type: "Shallow Quake",
			color: "yellow",
			shadow: "shadow-yellow-600",
			date: "12-06-2004",
		},
		{
			id: 13,
			x: 0,
			y: 20,
			z: 420,
			type: "Shallow Quake",
			color: "yellow",
			shadow: "shadow-yellow-600",
			date: "19-09-2004",
		},
		{
			id: 14,
			x: 20,
			y: -470,
			z: -190,
			type: "Thermal Quake",
			color: "blue",
			shadow: "shadow-blue-600",
			date: "17-08-2004",
		},
		{
			id: 15,
			x: 80,
			y: -440,
			z: -260,
			type: "Deep Quake",
			color: "red",
			shadow: "shadow-red-600",
			date: "12-11-2004",
		},
		{
			id: 16,
			x: 220,
			y: 400,
			z: -90,
			type: "Shallow Quake",
			color: "yellow",
			shadow: "shadow-yellow-600",
			date: "08-06-2005",
		},
		{
			id: 17,
			x: 300,
			y: -350,
			z: -200,
			type: "Thermal Quake",
			color: "blue",
			shadow: "shadow-blue-600",
			date: "10-06-2005",
		},
		{
			id: 18,
			x: 410,
			y: -30,
			z: -200,
			type: "Shallow Quake",
			color: "yellow",
			shadow: "shadow-yellow-600",
			date: "11-11-2006",
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
							<div className={`glass px-4 py-2 text-[12px] text-white font-semibold w-36 text-center cursor-pointer hover:backdrop-brightness-75 hover:backdrop-blur-xl ${seism.shadow} shadow-sm`} onClick={() => {console.log("clicked"); navigate("/home/details")}}>
								{seism.type}<br />{seism.date}
							</div>
						</Html>
						<mesh key={seism.id} visible position={[seism.x, seism.y, seism.z]} scale={0.5}>
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