export default function HomePage() {
	return (
		<main id="homePage" className="h-[80vh] min-h-[50rem] sm:max-h-[41rem] relative">
			<div className="overflow-hidden relative mx-auto max-w-6xl flex justify-center flex-col p-8 text-center sm:text-left items-center sm:items-start h-full gap-[34px] pt-[17rem] sm:pt-0 z-20">
				<h1 className="text-title font-medium max-w-md tracking-[-4px]">Next generation digital banking</h1>
				<p className="max-w-[25rem] leading-[30px]">
					Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
				</p>
				<button className="btn-primary">Request Invite</button>
			</div>
			<div id="home-page-bg" className="overflow-hidden"></div>
		</main>
	)
}