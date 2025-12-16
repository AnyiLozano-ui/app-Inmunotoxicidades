import Footer from '../components/common/Footer/Footer'
import Header from '../components/common/Header/Header'

const Referencias = () => {
	return (
		<div className="min-h-screen bg-[#f3eeee] flex flex-col items-center p-4">
			<Header />
			<div className="max-w-[90%] mt-[90px] mx-auto relative mb-[20px]">
				<div className="flex px-[20px] py-[10px] bg-[#ebe6e6] items-center gap-[20px] rounded-b-[20px]">
					<div>
						<img
							src="/Images/ref.png"
							className="w-full mt-[20px]"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Referencias
