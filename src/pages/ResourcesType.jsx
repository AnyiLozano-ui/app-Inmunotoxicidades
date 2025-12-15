import Footer from '../components/common/Footer/Footer'
import Header from '../components/common/Header/Header'
import { Link, useParams } from 'react-router-dom'

const ResourcesType = () => {
	const { type } = useParams()

	return (
		<div className="min-h-screen bg-[#f3eeee] flex flex-col items-center p-4">
			<Header />
			<div className="max-w-[90%] mt-[90px] mx-auto relative">
				<div className="flex px-[20px] bg-[#ebe6e6] items-center gap-[20px] rounded-b-[20px]">
					<div>
						<img
							src="/Images/chulito.png"
							className="w-[50px] h-[50px]"
						/>
					</div>
					<p className="text-[#595454] font-[400] text-[14px]">
						Acceda a materiales de apoyo para el manejo seguro y
						actualizado de toxicidades asociadas a inmunoterapia.
					</p>
				</div>
				<div className="mt-[20px] flex justify-center gap-[20px]">
					<Link to={`/${type}/pdfs/pulmonar`}>
						<div
							className="border-solid border-[2px] flex justify-center rounded-[20px] items-center relative h-[105px] w-[102px]"
							style={{ borderColor: '#be2bbb' }}>
							<img
								src="/Images/pulmonar.png"
								className="w-[58px]"
							/>
							<div className="w-[115%] text-[white] uppercase font-[700] rounded-[10px] h-[35px] flex justify-center items-center text-[12px] absolute -bottom-[20px] bg-[#be2bbb]">
								Pulmonar
							</div>
						</div>
					</Link>
					<Link to={`/${type}/pdfs/gastro`}>
						<div
							className="border-solid border-[2px] flex justify-center rounded-[20px] items-center relative h-[105px] w-[102px]"
							style={{ borderColor: '#be2bbb' }}>
							<img
								src="/Images/gastro.png"
								className="w-[58px]"
							/>
							<div className="w-[115%] text-[white] uppercase font-[700] rounded-[10px] h-[35px] flex flex-col justify-center items-center text-[12px] absolute -bottom-[20px] bg-[#be2bbb] text-center leading-[16px]">
								<p className="m-[0px]">Gatro-</p>
								<p className="m-[0px]">Intestinal</p>
							</div>
						</div>
					</Link>
					<Link to={`/${type}/pdfs/renal`}>
						<div
							className="border-solid border-[2px] flex justify-center rounded-[20px] items-center relative h-[105px] w-[102px]"
							style={{ borderColor: '#be2bbb' }}>
							<img src="/Images/renal.png" className="w-[71px]" />
							<div className="w-[115%] text-[white] uppercase font-[700] rounded-[10px] h-[35px] flex justify-center items-center text-[12px] absolute -bottom-[20px] bg-[#be2bbb]">
								Renal
							</div>
						</div>
					</Link>
				</div>
				<div className="mt-[40px] flex justify-center gap-[20px]">
					<Link to={`/${type}/pdfs/endocrino`}>
						<div
							className="border-solid border-[2px] flex justify-center rounded-[20px] items-center relative h-[105px] w-[102px]"
							style={{ borderColor: '#be2bbb' }}>
							<img
								src="/Images/endocrino.png"
								className="w-[48px]"
							/>
							<div className="w-[115%] text-[white] uppercase font-[700] rounded-[10px] h-[35px] flex justify-center items-center text-[12px] absolute -bottom-[20px] bg-[#be2bbb]">
								Endocrino
							</div>
						</div>
					</Link>
					<Link to={`/${type}/pdfs/Neurológico`}>
						<div
							className="border-solid border-[2px] flex justify-center rounded-[20px] items-center relative h-[105px] w-[102px]"
							style={{ borderColor: '#be2bbb' }}>
							<img
								src="/Images/neurologico.png"
								className="w-[65px]"
							/>
							<div className="w-[115%] text-[white] uppercase font-[700] rounded-[10px] h-[35px] flex flex-col justify-center items-center text-[12px] absolute -bottom-[20px] bg-[#be2bbb] text-center leading-[16px]">
								<p className="m-[0px]">Neurológico</p>
							</div>
						</div>
					</Link>
				</div>
				<div className="mt-[40px] flex justify-center gap-[20px]">
					<Link to={`/${type}/pdfs/CardioVascular`}>
						<div
							className="border-solid border-[2px] flex justify-center rounded-[20px] items-center relative h-[105px] w-[102px]"
							style={{ borderColor: '#be2bbb' }}>
							<img
								src="/Images/cardio.png"
								className="w-[48px]"
							/>
							<div className="w-[115%] text-[white] uppercase font-[700] rounded-[10px] h-[35px] flex flex-col justify-center items-center text-[12px] absolute -bottom-[20px] bg-[#be2bbb]">
								<p className="m-[0px]">Cardio-</p>
								<p className="m-[0px]">Vascular</p>
							</div>
						</div>
					</Link>
					<Link to={`/${type}/pdfs/Dermatológico`}>
						<div
							className="border-solid border-[2px] flex justify-center rounded-[20px] items-center relative h-[105px] w-[102px]"
							style={{ borderColor: '#be2bbb' }}>
							<img
								src="/Images/dermatologico.png"
								className="w-[58px]"
							/>
							<div className="w-[115%] text-[white] uppercase font-[700] rounded-[10px] h-[35px] flex flex-col justify-center items-center text-[10px] absolute -bottom-[20px] bg-[#be2bbb] text-center leading-[16px]">
								Dermatológico
							</div>
						</div>
					</Link>
					<Link to={`/${type}/pdfs/MusculoEsqueletico`}>
						<div
							className="border-solid border-[2px] flex justify-center rounded-[20px] items-center relative h-[105px] w-[102px]"
							style={{ borderColor: '#be2bbb' }}>
							<img
								src="/Images/musculo.png"
								className="w-[61px]"
							/>
							<div className="w-[115%] text-[white] uppercase font-[700] rounded-[10px] h-[35px] flex flex-col justify-center items-center text-[12px] absolute -bottom-[20px] bg-[#be2bbb]">
								<p className="m-[0px]">Musculo-</p>
								<p className="m-[0px]">Esqueletico</p>
							</div>
						</div>
					</Link>
				</div>
				<div className="mt-[40px] flex justify-center gap-[20px] mb-[30px]">
					<Link to={`/${type}/pdfs/Hematológico`}>
						<div
							className="border-solid border-[2px] flex justify-center rounded-[20px] items-center relative h-[105px] w-[102px]"
							style={{ borderColor: '#be2bbb' }}>
							<img
								src="/Images/hematologico.png"
								className="w-[58px]"
							/>
							<div className="w-[115%] text-[white] uppercase font-[700] rounded-[10px] h-[35px] flex justify-center items-center text-[12px] absolute -bottom-[20px] bg-[#be2bbb]">
								Hematológico
							</div>
						</div>
					</Link>
					<Link to={`/${type}/pdfs/Ocular`}>
						<div
							className="border-solid border-[2px] flex justify-center rounded-[20px] items-center relative h-[105px] w-[102px]"
							style={{ borderColor: '#be2bbb' }}>
							<img
								src="/Images/ocular.png"
								className="w-[65px]"
							/>
							<div className="w-[115%] text-[white] uppercase font-[700] rounded-[10px] h-[35px] flex flex-col justify-center items-center text-[12px] absolute -bottom-[20px] bg-[#be2bbb] text-center leading-[16px]">
								<p className="m-[0px]">Ocular</p>
							</div>
						</div>
					</Link>
				</div>
				<div className='flex items-center justify-center'>
					<Link to={`/fichasInteractivas`}>
						<button className="bg-[#be2bbb] mb-[20px] w-[35px] mt-[18px] h-[35px] rounded-full flex items-center justify-center shadow-sm hover:bg-[#a327a6] active:scale-95 transition-all border-none outline-none">
							<div className="bg-white w-[7px] h-[7px] rounded-full flex items-center justify-center">
								<img
									src="/Images/arrow-back.svg"
									alt="volver"
									className="w-4 h-4"
								/>
							</div>
						</button>
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default ResourcesType
