import celula from '/Images/celula.png'
import boton from '/Images/boton.png'
import { Link } from 'react-router-dom'
import Footer from '../components/common/Footer/Footer'

export default function Home() {
	return (
		<div className="min-h-screen bg-[#eee7e7] flex justify-center">
			{/* Contenedor tipo “pantalla de celular” */}
			<div className="w-full max-w-xs bg-[#f7edf7] overflow-hidden">
				<img src={celula} alt="Célula irAE" className="w-full block" />

				{/* Texto debajo */}
				<div className="px-6 py-6">
					<p className="font-bms mt-[50px] text-center text-[#5e5b5f] text-[22px] leading-relaxed">
						Acceda a recomendaciones
						<br />
						basadas en evidencia para
						<br />
						manejar inmunotoxicidades
						<br />
						por sistema y gravedad.
					</p>

					{/* BOTÓN CONSULTAR */}
					<div className="flex justify-center mt-6 mb-8">
						<Link to="/menu">
							<button
								type="button"
								className="bg-transparent border-none p-0 focus:outline-none cursor-pointer">
								<img
									src={boton}
									alt="Botón Consultar"
									className="w-[260px] block bg-transparent border-none p-0 focus:outline-none hover:scale-105 transition-transform"
								/>
							</button>
						</Link>
					</div>
				</div>
				<Footer/>
			</div>
		</div>
	)
}
