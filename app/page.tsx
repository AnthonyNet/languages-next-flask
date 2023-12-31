"use client";

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const styles = {
	section:
		"responsiveSection flex flex-col justify-center items-center  min-h-[100vh] h-auto sm:h-[90%] pokusX",
	card__div:
		"cursor-pointer __gradient __text_shadow rounded-tl-3xl rounded-br-3xl -skew-x-12 pr-2",
} as const;



function MainPage() {

	return (
		<>
			<section className={styles.section}>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 1,
						duration: 3,
						ease: "easeOut",
					}}
					className={styles.card__div}>
					<h1 className="text-[7vw] md-text[10vw]  2xl:text-[120px] leading-[160px]">
						Learn <strong>languages</strong>
					</h1>
				</motion.div>
				<h2>Working in progress...</h2>
				<Typewriter
					options={{
						strings: [
							"React",
							"Next.js",
							"Tailwind CSS",
							"TypeScript",
							"HTML5",
							"CSS3",
						],
						autoStart: true,
						loop: true,
					}}
				/>
			</section>
		</>
	);
}

export default MainPage;
