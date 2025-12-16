import { useState } from 'react'
import Footer from '../components/common/Footer/Footer'
import Header from '../components/common/Header/Header'

const Instructions = () => {
	const [page, setPage] = useState(0)
	const pages = [
		'/Images/instruc-1.png',
		'/Images/instruc-2.png',
		'/Images/instruc-3.png',
	]

	return (
		<div className="min-h-screen bg-[#f3eeee] flex flex-col items-center p-4">
			<Header />
			<div className="max-w-[90%] mt-[90px] mx-auto relative mb-[100px]">
				<div className="flex px-[20px] py-[10px] bg-[#ebe6e6] items-center gap-[20px] rounded-b-[20px]">
					<div className="w-[100px] flex items-center justify-center ml-[-25px]">
						{page > 0 && (
							<img
								src="/Images/left.png"
								alt="volver"
								className="w-full"
								onClick={() =>
									setPage(page - 1 >= 0 ? page - 1 : page)
								}
							/>
						)}
					</div>
					<div>
						<img src={pages[page]} className="w-full mt-[10px]" alt="" />
					</div>
					{page < 2 && (
						<div className="w-[100px] flex items-center justify-center mr-[-25px]">
							<img
								src="/Images/right.png"
								alt="volver"
								className="w-full"
								onClick={() =>
									setPage(page + 1 < 3 ? page + 1 : page)
								}
							/>
						</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Instructions
