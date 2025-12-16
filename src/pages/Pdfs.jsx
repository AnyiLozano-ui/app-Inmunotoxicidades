import { Link, useParams } from 'react-router-dom'
import Footer from '../components/common/Footer/Footer'
import Header from '../components/common/Header/Header'


const pdfs = {
	nccn: {
		pulmonar:
			'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Pulmon/UP-R_NCCN_Pulmon.pdf',
		gastro: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Gastro/UP-R_NCCN_Gastro.pdf',
		renal: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Renal/UP-R_NCCN_Renal.pdf',
		endocrino: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Endocrino/UP-R_NCCN_Endo.pdf',
		Neurológico: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Neurologico/UP-R_NCCN_Neuro.pdf',
		CardioVascular: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/CardioVascular/UP-R_NCCN_Cardio.pdf',
		Dermatológico: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Dermatológico/UP-R_NCCN_Derma.pdf',
		MusculoEsqueletico: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/MusculoEsqueletico/UP-R_NCCN_MusculoEsc.pdf',
		Hematológico: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Hematológico/UP-R_NCCN_Hemato.pdf',
		Ocular: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Ocular/UP-R_NCCN_Ocular.pdf',
	},

	asco: {
		pulmonar:
			'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Pulmon/UP-R_ASCO_Pulmon.pdf',
		gastro: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Gastro/UP-R_ASCO_Gastro.pdf',
		renal: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Renal/UP-R_ASCO_Renal.pdf',
		endocrino: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Endocrino/UP-R_ASCO_Endo.pdf',
		Neurológico: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Neurologico/UP-R_ASCO_Neuro.pdf',
		CardioVascular: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/CardioVascular/UP-R_ASCO_Cardio.pdf',
		Dermatológico: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Dermatológico/UP-R_ASCO_Derma.pdf',
		MusculoEsqueletico: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/MusculoEsqueletico/UP-R_ASCO_MusculoEsc.pdf',
		Hematológico: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Hematológico/UP-R_ASCO_Hemato.pdf',
		Ocular: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Ocular/UP-R_ASCO_Ocular.pdf',
	},

	sitc: {
		pulmonar:
			'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Pulmon/UP-R_SITC_Pulmon.pdf',
		gastro: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Gastro/UP-R_SITC_Gastro.pdf',
		renal: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Renal/UP-R_SITC_Renal.pdf',
		endocrino: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Endocrino/UP-R_SITC_Endo.pdf',
		Neurológico: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Neurologico/UP-R_SITC_Neuro.pdf',
		CardioVascular: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/CardioVascular/UP-R_SITC_Cardio.pdf',
		Dermatológico: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Dermatológico/UP-R_SITC_Derma.pdf',
		MusculoEsqueletico: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/MusculoEsqueletico/UP-R_SITC_MusculoEsc.pdf',
		Hematológico: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Hematológico/UP-R_SITC_Hemato.pdf',
		Ocular: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Ocular/UP-R_SITC_Ocular.pdf',
	},

	esmo: {
		pulmonar:
			'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Pulmon/UP-R_ESMO_Pulmon.pdf',
		gastro: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Gastro/UP-R_ESMO_Gastro.pdf',
		renal: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Renal/UP-R_ESMO_Renal.pdf',
		endocrino: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Endocrino/UP-R_ESMO_Endo.pdf',
		Neurológico: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Neurologico/UP-R_ESMO_Neuro.pdf',
		CardioVascular: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/CardioVascular/UP-R_ESMO_Cardio.pdf',
		Dermatológico: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Dermatológico/UP-R_ESMO_Derma.pdf',
		MusculoEsqueletico: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/MusculoEsqueletico/UP-R_ESMO_MusculoEsc.pdf',
		Hematológico: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Hematológico/UP-R_ESMO_Hemato.pdf',
		Ocular: 'https://eml.com.co/pdfs_descargables_App_Inmuno%20/Ocular/UP-R_ESMO_Ocular.pdf',
	},
}

const Pdfs = () => {
	const { type, enfermedad } = useParams()
	return (
		<div className="min-h-screen bg-[#f3eeee] flex flex-col items-center p-4">
			<Header />
			<div className="max-w-[90%] mt-[100px] mx-auto relative h-[calc(100dvh_-246px)] w-full">
				<iframe
					className="h-full w-full"
					src={`${pdfs[type][enfermedad]}#view=FitV&zoom=page-fit`}
					frameborder="0"></iframe>
			</div>
			<Link to={`/${type}/resources-type`}>
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
			<Footer />
		</div>
	)
}

export default Pdfs
