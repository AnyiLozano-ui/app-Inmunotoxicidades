import { Link } from 'react-router-dom'
import Footer from '../components/common/Footer/Footer'
import Header from '../components/common/Header/Header'

const FichasInteractivas = () => {
	return (
		<div className="min-h-screen bg-[#f3eeee] flex flex-col items-center p-4">
			<Header />
			<div className="max-w-[80%] mt-[90px] mx-auto relative">
				<div className="flex px-[20px] bg-[#ebe6e6] items-center gap-[20px] rounded-b-[20px]">
					<div>
						<img
							src="/Images/chulito.png"
							className="w-[50px] h-[50px]"
						/>
					</div>
					<p className="text-[#595454] font-[400] text-[15px]">
						Acceda a materiales de apoyo para el manejo de seguro y
						actualizado de toxicidades asociadas a inmunoterapia.
					</p>
				</div>
				<Link to="/pdfs">
					<div className="flex justify-center mt-[40px]">
						<button className="bg-[#be2bbb] w-[254px] h-[54px] text-[white] font-bold uppercase text-[30px] px-[45px] py-[12px] rounded-[15px] shadow-[0_3px_4px_rgba(0,0,0,0.2)] border-none outline-none">
							NCCN
						</button>
					</div>
				</Link>
				<div className="flex justify-center mt-[40px]">
					<button className="bg-[#be2bbb] w-[254px] h-[54px] text-[white] font-bold uppercase text-[30px] px-[45px] py-[12px] rounded-[15px] shadow-[0_3px_4px_rgba(0,0,0,0.2)] border-none outline-none">
						ASCO
					</button>
				</div>
				<div className="flex justify-center mt-[40px]">
					<button className="bg-[#be2bbb] w-[254px] h-[54px] text-[white] font-bold uppercase text-[30px] px-[45px] py-[12px] rounded-[15px] shadow-[0_3px_4px_rgba(0,0,0,0.2)] border-none outline-none">
						SITC
					</button>
				</div>
				<div className="flex justify-center mt-[40px]">
					<button className="bg-[#be2bbb] w-[254px] h-[54px] text-[white] font-bold uppercase text-[30px] px-[45px] py-[12px] rounded-[15px] shadow-[0_3px_4px_rgba(0,0,0,0.2)] border-none outline-none">
						ESMO
					</button>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default FichasInteractivas
