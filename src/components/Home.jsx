/* eslint-disable react/no-unknown-property */
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import CameraControls from "./CameraControls"
import Sphere from "./Sphere"
import Typewriter from "typewriter-effect"
// import SkyBox from "./SkyBox"

function Home() {
	return (
		<div className="flex h-full justify-between gap-x-16 items-center bg-cover">
			<div className="text-white flex flex-col justify-center items-start gap-y-8">
				<p className="text-[60px] font-semibold text-white h-48"><Typewriter
					options={{
						strings: ["Visualize MoonQuakes...","Learn More about Moons..."],
						autoStart: true,
						loop: true,
					}}
				/>
				</p>
				<p className="text-[22px] ">Did you knew that also moon can have quakes on its surface?  🤔  Get to discover that now !!</p>
				<div className="glass flex justify-center items-center self-center py-3 px-6 gap-x-4">
					<p className="text-[20px] font-semibold">Rotate The Moon</p>
					<img className = " w-16"src="/images/main.svg" alt="main" />
				</div>
			</div>
			<Canvas className="canvas">
				<CameraControls />
				<directionalLight intensity={1} />
				<ambientLight intensity={0.6} />
				<Suspense fallback="loading">
					<group>
						<Sphere />
					</group>
				</Suspense>
			</Canvas>
			<img src="/images/spaceman.svg" alt="spaceman" className=" w-32 absolute bottom-8 right-4" />
			<img src="/images/bubble.svg" alt="bubble" className=" w-96 absolute bottom-8 right-16 bounce " />
		</div>
	)
}

export default Home