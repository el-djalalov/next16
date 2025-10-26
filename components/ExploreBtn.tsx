"use client";

import Image from "next/image";
import React from "react";

const ExploreBtn = () => {
	return (
		<button type="button" id="explore-btn" className="mt-6 mx-auto">
			<a href="#events">
				Explore Events
				<Image
					src="/icons/arrow-down.svg"
					alt="arrow-down"
					width={24}
					height={24}
				/>
			</a>
		</button>
	);
};

export default ExploreBtn;
