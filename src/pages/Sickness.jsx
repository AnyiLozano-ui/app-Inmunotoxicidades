import { useParams } from 'react-router-dom'
import { sickness as mock } from '../lib/constants/sintoms'
import Footer from '../components/common/Footer/Footer'
import Header from '../components/common/Header/Header'
import { useState } from 'react'
import Select from 'react-select'

const Sickness = () => {
	const { sickness } = useParams()
	const data = mock[sickness]
	const [valueSickness, setValueSickness] = useState('')
	const [type, setType] = useState('')
	const [step, setStep] = useState(0)
	const [pageManage, setPageManage] = useState(0)
	const [pageTest, setPageTest] = useState(0)

	return (
		<div className="min-h-screen bg-[#f3eeee] flex flex-col items-center p-4">
			<Header />
			<div className="max-w-[90vw] w-full mt-[90px] mx-auto relative">
				<div className="flex h-[152px] pl-[20px] pr-[20px] py-[10px] bg-[#ebe6e6] items-center gap-[20px] rounded-b-[20px]">
					<div>
						<img
							src={data.alert_image}
							className="w-[143px] h-[80px]"
						/>
					</div>
					<div className="absolute left-[120px] top-[60px]">
						<p className="text-[#595454] font-[400] pr-[20px] text-[18px] mb-[10px]">
							Elija el <span className="text-[#be2bbb]">ir</span>
							<b className="font-[600]">AE</b> relacionado:
						</p>
						<Select
							options={data.sickness}
							value={valueSickness}
							onChange={(e) => {
								setValueSickness(e)
								setStep(1)
							}}
							placeholder="Elija una opción"
							classNamePrefix="sickness-select"
							styles={{
								menu: (base) => ({
									...base,
									marginTop: 0,
									borderTopLeftRadius: 0,
									borderTopRightRadius: 0,
									borderBottomRightRadius: 10,
									borderBottomLeftRadius: 10,
									borderTop: 'none',
									borderLeft: '1px solid #be2bbb',
									borderRight: '1px solid #be2bbb',
									borderBottom: '1px solid #be2bbb',
								}),
								control: (base) => ({
									...base,
									borderColor: '#be2bbb !important',
									borderWidth: 1,
									borderRadius: 0,
								}),
								option: (base, state) => ({
									...base,
									color: '#595454',
									background: state.isSelected
										? '#be2bbb20'
										: 'none',
								}),
								menuList: (base) => ({
									...base,
									padding: 0,
								}),
								svg: (base) => ({
									...base,
									fill: '#be2bbb !important',
									stroke: '#be2bbb !important',
								}),
							}}
						/>
					</div>
				</div>
				<div className="mt-[20px] flex items-center flex-col gap-[20px] w-[300px] mx-auto">
					<div className="relative flex gap-[10px] mt-[20px] w-full">
						<div className="flex items-center">
							<img
								src="/Images/mas.png"
								className="w-[30px] h-[30px]"
							/>
						</div>
						<div className="relative w-full">
							<p className="text-[#595454] text-[24px] font-[700] mb-[15px]">
								Evaluación
							</p>
							<img
								src="/Images/linea.png"
								className="bottom-[0px] absolute left-[0px] w-full"
							/>
						</div>
					</div>
					{step === 1 && (
						<>
							<div className="flex gap-[10px] items-center w-[300px]">
								<p className="mt-[5px] mb-[5px] text-[#595454]">
									Elija el grado que más se adapte al caso de
									su paciente:{' '}
								</p>
								<Select
									options={[
										{ value: '1', label: '1' },
										{ value: '2', label: '2' },
										{ value: '≥3', label: '≥3' },
									]}
									value={type}
									onChange={(e) => {
										setType(e)
										setPageManage(0)
										setPageTest(0)
									}}
									placeholder=""
									classNamePrefix="sickness-select"
									styles={{
										menu: (base) => ({
											...base,
											marginTop: 0,
											borderTopLeftRadius: 0,
											borderTopRightRadius: 0,
											borderBottomRightRadius: 10,
											borderBottomLeftRadius: 10,
											borderTop: 'none',
											borderLeft: '1px solid #be2bbb',
											borderRight: '1px solid #be2bbb',
											borderBottom: '1px solid #be2bbb',
										}),
										control: (base) => ({
											...base,
											borderColor: '#be2bbb !important',
											borderWidth: 1,
											borderRadius: 0,
											width: 80,
										}),
										option: (base, state) => ({
											...base,
											color: '#595454',
											background: state.isSelected
												? '#be2bbb20'
												: 'none',
										}),
										menuList: (base) => ({
											...base,
											padding: 0,
										}),
										svg: (base) => ({
											...base,
											fill: '#be2bbb !important',
											stroke: '#be2bbb !important',
										}),
										input: (base) => ({
											...base,
											color: '#595454',
										}),
										singleValue: (base) => ({
											...base,
											color: '#595454',
										}),
									}}
								/>
							</div>
							<div className="mt-[10px]">
								<div className="relative border-solid border-[1px] border-[#be2bbb] rounded-[30px] bg-[#fff] h-[351px] w-[300px] flex flex-col items-center">
									{type && (
										<p
											className="text-[12px] px-[20px] pt-[5px]"
											dangerouslySetInnerHTML={{
												__html: data[
													valueSickness.value
												].test[`step-${type.value}`][
													pageTest
												],
											}}></p>
									)}
									{data[valueSickness.value].test[
										`step-${type.value}`
									] &&
										data[valueSickness.value].test[
											`step-${type.value}`
										].length > 1 &&
										pageTest <
											data[valueSickness.value].test[
												`step-${type.value}`
											].length &&
										pageTest > 0 && (
											<div
												className="w-[30px] absolute h-full flex items-center -left-[20px]"
												onClick={() =>
													setPageTest(
														pageTest - 1 < 0
															? 0
															: pageTest - 1
													)
												}>
												<img
													src="/Images/left.png"
													className="w-full"
												/>
											</div>
										)}
									{data[valueSickness.value].test[
										`step-${type.value}`
									] &&
										data[valueSickness.value].test[
											`step-${type.value}`
										].length > 1 &&
										pageTest + 1 <
											data[valueSickness.value].test[
												`step-${type.value}`
											].length && (
											<div
												className="w-[30px] absolute h-full flex items-center -right-[20px]"
												onClick={() =>
													setPageTest(
														pageTest + 1 >
															data[
																valueSickness
																	.value
															].test.length
															? data[
																	valueSickness
																		.value
															  ].test.length
															: pageTest + 1
													)
												}>
												<img
													src="/Images/right.png"
													className="w-full"
												/>
											</div>
										)}
									<div
										onClick={() => setStep(2)}
										className="absolute cursor-pointer -bottom-[10px] w-[150px] h-[32px] bg-[#be2bbb] rounded-[10px] shadow-none border-[none] flex justify-center items-center uppercase text-[#fff] text-[20px]">
										Continuar
									</div>
								</div>
							</div>
						</>
					)}
				</div>
				<div className="flex items-center flex-col gap-[20px] w-[300px] mx-auto">
					<div className="relative flex gap-[10px] mt-[20px] w-full">
						<div className="flex items-center">
							<img
								src="/Images/mas.png"
								className="w-[30px] h-[30px]"
							/>
						</div>
						<div className="relative w-full">
							<p className="text-[#595454] text-[24px] font-[700] mb-[15px]">
								Manejo
							</p>
							<img
								src="/Images/linea.png"
								className="bottom-[0px] absolute left-[0px] w-full"
							/>
						</div>
					</div>
					{step === 2 && (
						<>
							<div className="flex gap-[10px] items-center w-[300px]">
								<p className="mt-[5px] mb-[5px] text-[#595454]">
									Tenga en cuenta los siguientes criterios:
								</p>
							</div>
							<div>
								<div className="relative border-solid border-[1px] border-[#be2bbb] rounded-[30px] bg-[#fff] h-[351px] w-[300px] flex flex-col items-center">
									{type && (
										<p
											className="text-[12px] px-[20px] pt-[5px]"
											dangerouslySetInnerHTML={{
												__html: data[
													valueSickness.value
												].manage[`step-${type.value}`][
													pageManage
												],
											}}></p>
									)}
									{data[valueSickness.value].manage[
										`step-${type.value}`
									].length > 1 &&
										pageManage <
											data[valueSickness.value].manage[
												`step-${type.value}`
											].length &&
										pageManage > 0 && (
											<div
												className="w-[30px] absolute h-full flex items-center -left-[20px]"
												onClick={() =>
													setPageManage(
														pageManage - 1 < 0
															? 0
															: pageManage - 1
													)
												}>
												<img
													src="/Images/left.png"
													className="w-full"
												/>
											</div>
										)}
									{data[valueSickness.value].manage[
										`step-${type.value}`
									].length > 1 &&
										pageManage + 1 <
											data[valueSickness.value].manage[
												`step-${type.value}`
											].length && (
											<div
												className="w-[30px] absolute h-full flex items-center -right-[20px]"
												onClick={() =>
													setPageManage(
														pageManage + 1 >
															data[
																valueSickness
																	.value
															].manage.length
															? data[
																	valueSickness
																		.value
															  ].manage.length
															: pageManage + 1
													)
												}>
												<img
													src="/Images/right.png"
													className="w-full"
												/>
											</div>
										)}
									<div className="absolute cursor-pointer -bottom-[10px] w-[150px] h-[32px] bg-[#be2bbb] rounded-[10px] shadow-none border-[none] flex justify-center items-center uppercase text-[#fff] text-[20px]">
										Continuar
									</div>
								</div>
							</div>
						</>
					)}
				</div>
				<div className="flex items-center flex-col gap-[20px] w-[300px] mx-auto mb-[50px]">
					<div className="relative flex gap-[10px] mt-[20px] w-full">
						<div className="flex items-center">
							<img
								src="/Images/mas.png"
								className="w-[30px] h-[30px]"
							/>
						</div>
						<div className="relative w-full">
							<p className="text-[#595454] text-[24px] font-[700] mb-[15px]">
								Acceder a la calculadora
							</p>
							<img
								src="/Images/linea.png"
								className="bottom-[0px] absolute left-[0px] w-full"
							/>
						</div>
					</div>
				</div>
                <p className='text-[10px] text-center text-[#595454] font-[400]'>irAE: evento adverso inmunomediado, por sus siglas en inglés.</p>
			</div>
			<Footer />
		</div>
	)
}

export default Sickness
