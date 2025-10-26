import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<header>
			<nav>
				<Link href="/" className="logo">
					<Image src="/icons/logo.png" width={24} height={24} alt="logo" />
					<p>DevEvent</p>
				</Link>
				<ul>
					<Link href="/">Home</Link>
					<Link href="/">Events</Link>
					<Link href="/">Create event</Link>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
