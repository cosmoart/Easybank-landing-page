export default function HomePage() {
	return (
		<main id="homePage" className="h-[80vh] min-h-[46rem] max-h-[70rem] sm:max-h-[41rem] relative bg-white">
			<div className="overflow-hidden relative mx-auto max-w-6xl flex justify-center flex-col px-9 xl:px-[20px] text-center sm:text-left items-center sm:items-start h-full gap-[34px] sm:gap-0  pt-[80%] sm:!pt-[7.2rem] z-20">
				<h1 className="text-title max-w-md tracking-[-3px] leading-[64px] mb-[16px]">Next generation digital banking</h1>
				<p className="max-w-[25rem] leading-[30px] sm:mb-[37px]">
					Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
				</p>
				<button className="btn-primary sm:mb-[29px]">Request Invite</button>
			</div>
			<div id="home-page-bg" className="overflow-hidden"></div>
		</main >
	)
}