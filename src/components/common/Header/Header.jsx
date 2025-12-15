import { Link } from 'react-router-dom'
import homeIcon from '/Images/home.png'
import infoIcon from '/Images/intruciones.png'
import menuIcon from '/Images/legales.png'
import logoIrAE from '/Images/logo.png'

const Header = () => {
	return (
		<div className="bg-[#fff] z-[1] rounded-b-[24px] py-[10px] fixed top-[0px] w-full">
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
				<div className="flex space-x-3 gap-[3px]">
					<Link to="/menu">
						<img
							src={homeIcon}
							alt="Home"
							className="w-[34px] h-[34px] cursor-pointer hover:scale-110 transition"
						/>
					</Link>

					<Link to="/instructions">
						<img
							src={infoIcon}
							alt="Información"
							className="w-[34px] h-[34px] cursor-pointer hover:scale-110 transition"
						/>
					</Link>

					<Link to="/referencias">
						<img
							src={menuIcon}
							alt="Menú"
							className="w-[34px] h-[34px] cursor-pointer hover:scale-110 transition"
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Header
