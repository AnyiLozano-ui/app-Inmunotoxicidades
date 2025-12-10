import Footer from '../components/common/Footer/Footer'
import Header from '../components/common/Header/Header'
import { Link } from 'react-router-dom'

const Valoration = () => {
	return (
		<div className="min-h-screen bg-[#f3eeee] flex flex-col items-center p-4">
			<Header />
			<div className="max-w-[90%] mt-[90px] mx-auto relative">
				<div className="flex px-[20px] py-[10px] bg-[#ebe6e6] items-center gap-[20px] rounded-b-[20px]">
					<div>
						<img
							src="/Images/chulito.png"
							className="w-[50px] h-[50px]"
						/>
					</div>
					<p className="text-[#595454] font-[400]">
						Para comenzar la valoración elija el sistema afectado.
					</p>
				</div>
				<div className="mt-[20px] flex justify-center gap-[20px]">
					<Link to="/sickness/pulmonar">
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
					<Link to="/sickness/gastro">
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
					<Link to="/sickness/renal">
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
					<Link to="/sickness/endocrino">
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
					<Link to="/sickness/Neurológico">
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
					<Link to="/sickness/CardioVascular">
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
					<Link to="/sickness/Dermatológico">
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
					<Link to="/sickness/MusculoEsqueletico">
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
				<div className="mt-[40px] flex justify-center gap-[20px] mb-[70px]">
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
					<div
						className="border-solid border-[2px] flex justify-center rounded-[20px] items-center relative h-[105px] w-[102px]"
						style={{ borderColor: '#be2bbb' }}>
						<img src="/Images/ocular.png" className="w-[65px]" />
						<div className="w-[115%] text-[white] uppercase font-[700] rounded-[10px] h-[35px] flex flex-col justify-center items-center text-[12px] absolute -bottom-[20px] bg-[#be2bbb] text-center leading-[16px]">
							<p className="m-[0px]">Ocular</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Valoration
