import Footer from '../components/common/Footer/Footer'
import Header from '../components/common/Header/Header'
import { Link } from 'react-router-dom'

export default function Menu() {
	return (
		<div className="min-h-screen bg-[#f3eeee] flex flex-col items-center p-4">
			<div className="w-full max-w-xs bg-white overflow-hidden">
				<Header />
				<div className="max-w-[80%] mt-[90px] mx-auto relative">
					<div className="flex px-[20px] bg-[#ebe6e6] items-center gap-[20px] rounded-b-[20px]">
						<div>
							<img
								src="/Images/chulito.png"
								className="w-[50px] h-[50px]"
							/>
						</div>
						<p className="text-[#595454] font-[400]">
							Si ya conoce cómo funciona la herramienta, elija una
							de las siguientes opciones:
						</p>
					</div>
					<Link to="/valoration">
						<div className="relative flex gap-[10px] mt-[20px]">
							<div className="flex items-center">
								<img
									src="/Images/mas.png"
									className="w-[30px] h-[30px]"
								/>
							</div>
							<div className="relative w-full">
								<p className="text-[#595454] text-[24px] font-[700] mb-[15px]">
									Comenzar valoración
								</p>
								<img
									src="/Images/linea.png"
									className="bottom-[0px] absolute left-[0px] w-full"
								/>
							</div>
						</div>
					</Link>
					<div className="relative flex gap-[10px] mt-[20px]">
						<div className="flex items-center">
							<img
								src="/Images/mas.png"
								className="w-[30px] h-[30px]"
							/>
						</div>
						<div className="relative w-full">
							<p className="text-[#595454] text-[24px] font-[700] mb-[5px]">
								Acceder a
							</p>
							<p className="text-[#595454] text-[24px] font-[700] mt-[0px] mb-[15px]">
								la calculadora
							</p>
							<img
								src="/Images/linea.png"
								className="bottom-[0px] absolute left-[0px] w-full"
							/>
						</div>
					</div>
					<Link to="/resources">
						<div className="relative flex gap-[10px] mt-[20px]">
							<div className="flex items-center">
								<img
									src="/Images/mas.png"
									className="w-[30px] h-[30px]"
								/>
							</div>
							<div className="relative w-full">
								<p className="text-[#595454] text-[24px] font-[700] mb-[5px]">
									Acceder a recursos
								</p>
								<p className="text-[#595454] text-[24px] font-[700] mt-[0px] mb-[15px]">
									de apoyo
								</p>
								<img
									src="/Images/linea.png"
									className="bottom-[0px] absolute left-[0px] w-full"
								/>
							</div>
						</div>
					</Link>
					<div className="flex px-[20px] mt-[40px] bg-[#ebe6e6] items-center gap-[20px] rounded-[20px]">
						<div>
							<img
								src="/Images/add.png"
								className="w-[50px] h-[50px]"
							/>
						</div>
						<p className="text-[#595454] font-[400]">
							Si es su primera vez o no recuerda cómo usar la
							herramienta, acceda primero a la guía de uso.
						</p>
					</div>
					<div className="relative flex gap-[10px] mt-[20px] mb-[50px]">
						<div className="flex items-center">
							<img
								src="/Images/mas.png"
								className="w-[30px] h-[30px]"
							/>
						</div>
						<div className="relative w-full">
							<p className="text-[#595454] text-[24px] font-[700] mb-[5px]">
								Conozca cómo funciona
							</p>
							<p className="text-[#595454] text-[24px] font-[700] mt-[0px] mb-[15px]">
								esta herramienta
							</p>
							<img
								src="/Images/linea.png"
								className="bottom-[0px] absolute left-[0px] w-full"
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
