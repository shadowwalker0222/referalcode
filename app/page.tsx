import { Card, CardBody } from "@nextui-org/card"
import { Chip } from "@nextui-org/chip"
import Image from "next/image"
import getConfig from "next/config";
const { NEXT_PUBLIC_LAST_UPDATED_AT } = process.env;



/*
	Create a Card for our linktree to live in
	Create a next/image
	Create some chips ( TypeScript, YouTuber, Programmer )
	Create a text description of user
	Create cards for each user link
*/

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
			<Card shadow="lg">
				<CardBody>
				<div className="max-w-screen-xl mx-auto w-full h-full pt-30 p-6 flex flex-col justify-around items-center items-top">
						<div className="w-64 h-64 mx-auto overflow-hidden rounded-full">
							<Image 
								src="/CooperCodes.png"
								width={400}
								height={300}
								alt="Cooper Codes Profile Picture"
								className="justify-center rounded-full"
							/>
						</div>
						<div className="flex justify-center pt-2">
							<h2 className="text-3xl font-bold"></h2>
						</div>
						<div className="flex justify-center m-4 gap-4">
							<Chip
								variant="shadow"
								color="primary"
								size="sm"
							>
								Build with Next.js 13 & NextUI 2.0
							</Chip>
							
						</div>
						<div className="flex justify-center max-w-sm">
							<p className="text-sm text-center font-semibold">
								*Referral code might change*
							</p>
						</div>

						
						<div className="flex flex-col justify-center gap-4 pt-4">
							<a href="https://app.shopback.com/5wolqnNHosb" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="py-3 px-10 text-black bg-white hover:bg-gray-300">
										<h3 className="self-center text-lg">Shopback</h3>
									</CardBody>
								</Card>
							</a>
							<a href="https://app.atome.sg/s/IWb1b8WALG" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="py-3 px-10 text-black bg-white hover:bg-gray-300 ">
										<h3 className="self-center text-lg">Atome</h3>
									</CardBody>
								</Card>
							</a>
							<a href="https://tigr.link/s/20Bj8UR" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="py-3 px-10 text-black bg-white hover:bg-gray-300">
										<h3 className="self-center text-lg">Tiger Trade</h3>
									</CardBody>
								</Card>
							</a>

							<a href="https://www.syfe.com/invite/wealth/SRPTFJRUC" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="py-3 px-10 text-black bg-white hover:bg-gray-300">
										<h3 className="self-center text-lg">Syfe Trade</h3>
									</CardBody>
								</Card>
							</a>

							<a href="https://web.gomo.sg/gcp/luckyDraw/utm/08biRg" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="py-3 px-10 text-black bg-white hover:bg-gray-300">
										<h3 className="self-center text-lg"> GOMO (J73V9W) </h3>
									</CardBody>
								</Card>
							</a>

							<a href="https://sg.trip.com/sale/4283/referee.html?locale=en-SG&referCode=86937CF6BEB538EBB1A9C4C575F23410" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="py-3 px-10 text-black bg-white hover:bg-gray-300">
										<h3 className="self-center text-lg"> Trip.com</h3>
									</CardBody>
								</Card>
							</a>

							<a href="https://sqkrisplus.page.link/9zCVbJCvUZkLFPJK8" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="py-3 px-10 text-black bg-white hover:bg-gray-300">
										<h3 className="self-center text-lg"> Kris+</h3>
									</CardBody>
								</Card>
							</a>

							

							<div className="flex justify-center max-w-sm">
							<p className="text-sm text-center font-semibold">
								Support Me
							</p>
							</div>
							<div>

							<a href="https://buymeacoffee.com/r_tay12" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="py-3 px-10 text-black bg-white hover:bg-gray-300">
										<h3 className="self-center text-lg"> Buy Me A ☕</h3>
									</CardBody>
								</Card>
							</a>
						</div>

							<div className="flex justify-center max-w-sm">
							<p className="text-xs text-center font-semibold">
							Designed & crafted by Ryan Tay &copy;2020-2026.
							</p>
						</div>
						{process.env.NEXT_PUBLIC_LAST_UPDATED_AT && (
  							<div className="flex justify-center max-w-sm">
    							<p className="text-xs text-center font-semibold">
      								Last updated: {new Date(process.env.NEXT_PUBLIC_LAST_UPDATED_AT).toLocaleString()}
    							</p>
  							</div>
						)}
						
						</div>
					</div>
				</CardBody>
			</Card>
		</section>
	);
}
