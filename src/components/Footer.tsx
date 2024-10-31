
const Footer = () => {
	return (
		<div className="w-full bg-[#F7F7F7] pt-[120px] lg:px-[150px] px-8 pb-[56px] mt-[120px]">
			<div className="w-full flex lg:flex-row flex-col lg:items-center justify-between lg:gap-0 gap-8">
				<div className="flex flex-col gap-7">
					<span className="font-semibold text-accent text-[28px] uppercase underline">sheket</span>
					<p className="font-medium text-[#333] text-[15px] max-w-[300px] leading-7">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatibus earum
						labore perspiciatis, a alias inventore.
					</p>
				</div>
				<div className="flex flex-col md:mb-0 mb-5">
					<span className="font-medium text-[#425e85] text-[17px] mb-5">Customer Service
          </span>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px] mb-4"
					>
						Contact Us
					</a>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px] mb-4"
					>
						Returns & Exchanges
					</a>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px]"
					>
						Shipping Information
					</a>
				</div>
				<div className="flex flex-col md:mb-0 mb-5">
					<span className="font-medium text-[#425e85] text-[17px] mb-5">About Us</span>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px] mb-4"
					>
						Our Story
					</a>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px] mb-4"
					>
						Careers
					</a>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px]"
					>
						Affiliate Program
					</a>
				</div>
				<div className="flex flex-col md:mb-0 mb-5">
					<span className="font-medium text-[#425e85] text-[17px] mb-5">Follow us</span>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px] mb-4"
					>
						Facebook
					</a>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px] mb-4"
					>
						Twitter
					</a>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px]"
					>
						Instagram
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;