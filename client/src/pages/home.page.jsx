import Card from "../components/card";

export default function HomePage() {
	return (
		<>
			<div className="w-full h-screen grid justify-center py-4 overflow-y-scroll">
				<div className="container">
					<div className="grid grid-cols-4 gap-10 max-sm:grid-cols-2">
						{Array.from({ length: 10 }, (_, index) => (
							<Card key={index} />
						))}
					</div>
					<div className="grid justify-center py-5">
						<div className="join">
							<button className="join-item btn">«</button>
							<button className="join-item btn">Page 22</button>
							<button className="join-item btn">»</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
