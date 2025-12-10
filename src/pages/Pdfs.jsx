import { Link } from 'react-router-dom'
import Footer from '../components/common/Footer/Footer'
import Header from '../components/common/Header/Header'

const Pdfs = () => {
	return (
		<div className="min-h-screen bg-[#f3eeee] flex flex-col items-center p-4">
			<Header />
			<div className="max-w-[90%] mt-[100px] mx-auto relative h-[calc(100dvh_-246px)] w-full">
				<Link to="/fichasInteractivas">
					<button className="bg-[#be2bbb] mb-[20px] w-[35px] h-[35px] rounded-full flex items-center justify-center shadow-sm hover:bg-[#a327a6] active:scale-95 transition-all border-none outline-none">
						<div className="bg-white w-[7px] h-[7px] rounded-full flex items-center justify-center">
							<img
								src="/Images/arrow-back.svg"
								alt="volver"
								className="w-4 h-4"
							/>
						</div>
					</button>
				</Link>

				<iframe
					className="h-full w-full"
					src="https://eml.com.co/elearning_nutri_baby/UP-R_Info_LactanciaYFormulas_E-Learning_16-09-25_LRP.pdf"
					frameborder="0"></iframe>
			</div>
			<Footer />
		</div>
	)
}

export default Pdfs
