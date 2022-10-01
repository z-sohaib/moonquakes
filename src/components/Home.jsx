/* eslint-disable react/no-unknown-property */
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import CameraControls from "./CameraControls"
import Sphere from "./Sphere"
import Test from "./Test"
// import SkyBox from "./SkyBox"

function Home() {
	return (
		<div className="flex h-full justify-between gap-x-16 items-center bg-cover">
			<div className="text-white flex flex-col justify-center items-start gap-y-8">
				<p className="text-[42px] font-semibold">Visualize MoonQuakes...</p>
				<p className="text-[24px]">Did you knew that also moon can have quakes on its surface?  🤔  Get to discover that now !!</p>
				<div className="glass flex justify-center items-center self-center py-3 px-8 gap-x-4">
					<p>Rotate the moon</p>
					<img src="/images/main.svg" alt="main" />
				</div>
			</div>
			<Canvas className="canvas">
				
				<CameraControls />
				<directionalLight intensity={1} />
				<ambientLight intensity={0.6} />
				<Suspense fallback="loading">
					<Sphere />
				</Suspense>
				<pointLight position={[15, 15, 15]} />
				<Test />
			</Canvas>
			<img src="/images/spaceman.svg" alt="spaceman" className="absolute bottom-8 right-4" />
		</div>
	)
}

export default Home