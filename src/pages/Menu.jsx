import { Link } from 'react-router-dom'
import homeIcon from '/Images/home.png'
import infoIcon from '/Images/intruciones.png'
import menuIcon from '/Images/legales.png'
import logoIrAE from '/Images/logo.png'

export default function Menu() {
	return (
		<div className="min-h-screen bg-[#eee7e7] flex justify-center p-4">
			<div className="w-full max-w-xs bg-white  overflow-hidden">
				{/* HEADER */}
				<div className="bg-[#fff] rounded-b-[24px] py-[10px] fixed top-[0px] w-full">
					<div className="flex items-center justify-between px-[25px]">
						{/* Título */}
						<h1 className="flex items-center">
							<img
								src={logoIrAE}
								alt="irAE Control-Expert"
								className="w-[190px] object-contain"
							/>
						</h1>
						{/* Iconos */}
						<div className="flex space-x-3">
							<Link to="/">
								<img
									src={homeIcon}
									alt="Home"
									className="w-[34px] h-[34px] cursor-pointer hover:scale-110 transition"
								/>
							</Link>

							<Link to="/info">
								<img
									src={infoIcon}
									alt="Información"
									className="w-[34px] h-[34px] cursor-pointer hover:scale-110 transition"
								/>
							</Link>

							<Link to="/menu">
								<img
									src={menuIcon}
									alt="Menú"
									className="w-[34px] h-[34px] cursor-pointer hover:scale-110 transition"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
