export default function Loading() {
	return (
		<div className="w-full h-screen flex justify-center items-center bg-base-200 gap-2">
			<span className="loading loading-ring loading-lg"></span>
			<p className="animate-pulse">Please wait...</p>
		</div>
	);
}
