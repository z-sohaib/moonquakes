import Sidebar from "./Sidebar"

function About() {
	return (
		<div className="flex justify-between gap-x-16  h-screen bg-background bg-cover">
			<div className=" py-12 px-12 flex flex-col justify-center">
				<Sidebar />
			</div>
            <div className="text-white flex flex-col gap-y-8 ">
                <h1>HELLOO</h1>
            </div>
		</div>
	)
}

export default About