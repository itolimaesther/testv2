"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
	// const router = useRouter();

	// useEffect(() => {
	// 	if (router) {
	// 		if (router.pathname === "/") {
	// 			router.replace("/home");
	// 		}
	// 	}
	// }, [router]);

	// if (router && router.pathname === "/") {
	// 	return null; // Redirecting, render nothing initially
	// }
	const [shouldRedirect, setShouldRedirect] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined" && window.location.pathname === "/") {
			setShouldRedirect(true);
		}
	}, []);

	if (shouldRedirect) {
		// Perform redirection here
		// For example:
		if (typeof window !== "undefined") {
			window.location.replace("/home");
		}
		return null; // Return null to prevent rendering before redirection
	}

	return (
		// <main className="overflow-hidden">
		// 	<Hero />
		// </main>
		null
	);
}
