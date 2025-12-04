import celula from '/Images/celula.png'
import boton from '/Images/boton.png'
import footer from '/Images/footer.png'
import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<div className="min-h-screen bg-[#eee7e7] flex justify-center">
			{/* Contenedor tipo “pantalla de celular” */}
			<div className="w-full max-w-xs bg-[#f7edf7] rounded-[40px] overflow-hidden">
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

				{/* FOOTER: “panza” blanca con curva arriba */}
				<div className="mt-auto bg-[#fff] rounded-t-[40px] pt-6 pb-4 flex flex-col items-center fixed w-full bottom-[0px] py-[10px] justify-center">
					<img
						src={footer}
						alt="Bristol Myers Squibb"
						className="w-[210px] mb-2"
					/>
					<p className="text-[11px] font-bms text-[#8b8b8b]">
						Código y legales{' '}
						<span className="text-[#d64040]">pendientes</span>
					</p>
				</div>
			</div>
		</div>
	)
}
