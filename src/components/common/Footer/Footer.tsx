import './Footer.css'

const Footer = () => {
	return (
		<div id="footer" className="mt-auto bg-[#fff] rounded-t-[40px] pt-6 pb-4 flex flex-col items-center fixed w-full bottom-[0px] py-[10px] justify-center">
			<img
				src='/Images/footer.png'
				alt="Bristol Myers Squibb"
				className="w-[210px] mb-2"
			/>
			<p className="text-[11px] font-bms text-[#8b8b8b]">
				Código y legales{' '}
				<span className="text-[#d64040]">pendientes</span>
			</p>
		</div>
	)
}

export default Footer
