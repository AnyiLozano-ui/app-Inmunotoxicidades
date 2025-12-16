import Footer from '../components/common/Footer/Footer'
import Header from '../components/common/Header/Header'
import Select from 'react-select'
import { useState } from 'react'
import {
	selectStyles,
	dosisCalculator,
	typesCalculator,
	adminCalculator,
} from '../lib/constants/selectStyles'

export default function Calculadora({ hideTitle }) {
	const [size, setSize] = useState(0)
	const [type, setType] = useState(null)
	const [dosis, setDosis] = useState(null)
	const [admin, setAdmin] = useState(null)
	const [total, setTotal] = useState(null)

	const handleTotal = () => {
		if (total) {
			setSize(0)
			setAdmin(null)
			setDosis(null)
			setType(null)
			setTotal(null)
		} else {
			console.log(size)
			console.log(parseFloat(dosis.value))
			console.log(size * parseFloat(dosis.value))
			setTotal(size * parseFloat(dosis.value))
		}
	}

	return (
		<div className={`${!hideTitle ? 'min-h-screen' : ''} bg-[#f3eeee] flex flex-col items-center p-4`}>
			<div className="w-full max-w-xs bg-white overflow-hidden">
				<Header />
				<div
					className={` ${
						!hideTitle ? 'max-w-[80%] mt-[90px]' : 'max-w-full w-full'
					} mx-auto relative`}>
					{!hideTitle && (
						<div className="flex px-[20px] bg-[#ebe6e6] items-center gap-[20px] rounded-b-[20px]">
							<div>
								<img
									src="/Images/chulito.png"
									className="w-[50px] h-[50px]"
								/>
							</div>
							<p className="text-[#595454] font-[400]">
								Ingrese el peso del paciente para obtener la
								dosis recomendada de corticoides según las guías
								clínicas
							</p>
						</div>
					)}
					<div className={`border-solid mt-[30px] border-[1px] relative border-[#be2bbb] rounded-[30px] flex justify-start flex-col items-center  ${!hideTitle ? 'h-[442px] pl-[5%] pr-[5%] w-[90%]' : 'h-[350px] w-[300px] mb-[30px]'} pt-[30px] bg-[#fff] `}>
						<div className={`flex gap-[6px] items-center w-full justify-between`}>
							{!total ? (
								<p className={`${hideTitle ? 'ml-[5%]' : ''}`}>
									Peso del
									<br />
									paciente (kg):
								</p>
							) : (
								<p className={`${hideTitle ? 'ml-[5%]' : ''}`}>
									Dosis total
									<br />
									(mg/día):
								</p>
							)}
							{!total ? (
								<input
									className={`h-[38px] w-[80px] border-solid border-[1px] border-[#be2bbb] text-center placeholder:text-center placeholder:text-[#595454] text-[16px] ${hideTitle ? 'mr-[5%]' : ''}`}
									placeholder="- Kg"
									value={`${size}`}
									type="number"
									onChange={(e) => setSize(e.target.value)}
								/>
							) : (
								<div className={`h-[38px]  w-[80px] flex justify-center items-center border-solid border-[1px] border-[#be2bbb] text-center placeholder:text-center placeholder:text-[#595454] text-[16px] ${hideTitle ? 'mr-[5%]' : ''}`}>
									{total}
								</div>
							)}
						</div>
						<div className="flex gap-[6px] items-center w-full justify-between">
							<p className={`${hideTitle ? 'ml-[5%]' : ''}`}>
								Tipo de
								<br />
								corticoesteroide:
							</p>
							<Select
								options={typesCalculator}
								value={type}
								onChange={(e) => setType(e)}
								placeholder=""
								classNamePrefix="sickness-select"
								className={`${hideTitle ? 'mr-[5%]' : ''}`}
								styles={selectStyles(120)}
							/>
						</div>
						{!total && (
							<div className="flex gap-[6px] items-center w-full justify-between">
								<p className={`${hideTitle ? 'ml-[5%]' : ''}`}>
									Dosis
									<br />
									(mg/kg/día):
								</p>
								<Select
									options={dosisCalculator}
									value={dosis}
									onChange={(e) => setDosis(e)}
									placeholder=""
									classNamePrefix="sickness-select"
									className={`${hideTitle ? 'mr-[5%]' : ''}`}
									styles={selectStyles(120)}
								/>
							</div>
						)}
						<div className="flex gap-[6px] items-center w-full justify-between">
							<p className={`${hideTitle ? 'ml-[5%]' : ''}`}>
								Vía de
								<br />
								administración:
							</p>
							<Select
								options={adminCalculator}
								value={admin}
								onChange={(e) => setAdmin(e)}
								placeholder=""
								classNamePrefix="sickness-select"
								className={`${hideTitle ? 'mr-[5%]' : ''}`}
								styles={selectStyles(120)}
							/>
						</div>
						<div
							className={`absolute -bottom-[10px] bg-[#be2bbb] rounded-[40px]`}
							onClick={handleTotal}>
							<p className="m-[0px] px-[20px] py-[5px] text-[white] uppercase text-[12px]">
								{!total ? 'CALCULAR' : 'REINICIAR'}
							</p>
						</div>
					</div>
				</div>
				{!hideTitle && (
					<p className="text-[10px] text-center text-[#595454] font-[400] mt-[50px] max-w-[80%] mr-auto ml-auto">
						Esta es solo una herramienta de cálculo. Siempre
						verifique la dosis y considere los factores individuales
						del paciente. Los corticosteroides deben reducirse
						gradualmente, no suspenderse abruptamente.
					</p>
				)}
			</div>
			{!hideTitle && <Footer />}
		</div>
	)
}
