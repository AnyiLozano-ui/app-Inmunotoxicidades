import { Link } from 'react-router-dom'
import Footer from '../components/common/Footer/Footer'
import Header from '../components/common/Header/Header'

const Resources = () => {
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
				<div className="mt-[40px] flex flex-col items-center gap-[50px] mb-[50px]">
					<Link to="/fichasInteractivas">
						<div className="border-solid border-[1px] relative border-[#be2bbb] rounded-[30px] flex justify-center flex-col items-center max-w-[170px] pt-[30px] bg-[#fff]">
							<img src="/Images/check.png" className="w-[80px]" />
							<p className="text-center text-[18px] text-[#595454] mt-[10px] mb-[40px]">
								Acceda a fichas interactivas
							</p>

							<div className="absolute -bottom-[10px] bg-[#be2bbb] rounded-[40px]">
								<p className="m-[0px] px-[20px] py-[5px] text-[white] uppercase text-[12px]">
									Click aquì
								</p>
							</div>
						</div>
					</Link>
					<div className="border-solid relative border-[1px] border-[#be2bbb] rounded-[30px] h-[183px] flex justify-center flex-col items-center max-w-[170px] pt-[30px] bg-[#fff]">
						<img src="/Images/download.png" className="w-[80px]" />
						<p className="text-center text-[18px] text-[#595454] mt-[10px] mb-[40px]">
							Acceda a material descargable
						</p>
						<div className="absolute -bottom-[10px] bg-[#be2bbb] rounded-[40px]">
							<p className="m-[0px] px-[20px] py-[5px] text-[white] uppercase text-[12px]">
								Click aquì
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Resources
