"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from "../../../components/CustomLinkButton";
import Link from "next/link";
import Image from "next/image";

function Login() {
	const [email, setEmail] = useState("admin@gmail.com");
	const [password, setPassword] = useState("password");
	const router = useRouter();

	const handleLogin = async (e: any) => {
		e.preventDefault();

		// Perform authentication logic here
		// For simplicity, assume authentication is successful
		if (email === "admin@gmail.com" && password === "password") {
			// Redirect to dashboard on successful login
			router.push("/dashboard");
		} else {
			// Handle incorrect credentials
			alert("Invalid credentials. Please try again.");
		}
	};
	return (
		<div className="flex items-center min-h-screen ">
			<div className="flex-1 mx-auto bg-white rounded-lg shadow-xl">
				<div className="flex min-h-screen flex-col md:flex-row">
					<div className="relative h-full md:h-auto md:w-1/2">
						<Image
							className="absolute object-cover w-full h-full"
							src="/loginbg.svg"
							alt="Login Image"
							width={300}
							height={300}
						/>
						<div className="absolute text-center top-[30rem] left-1/2 -translate-x-1/2 -translate-y-1/2">
							<h1 className="text-[40px] font-bold text-white ">
								Welcome To Vendu
							</h1>
							<p className="text-white text-[17px] ">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore{" "}
							</p>
						</div>
					</div>
					<div className="right_section">
						<div className="w-full">
							<div className="flex flex-row justify-between sm:mb-28 mb-20">
								<Image
									src="/vendulogo.svg"
									alt="Vendu Logo"
									width={150}
									height={150}
								/>
								<div className="flex items-center">
									<p className="mr-2">Don't have an account? </p>
									<Button
										type="button"
										title="Create Account"
										variant="btn_green"
										href="/auth/signup"
									/>
								</div>
							</div>
							<h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
								Pickup where you left off
							</h1>
							<div>
								<label className="block mt-4 text-sm">Email Address</label>
								<input
									type="email"
									className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
									placeholder=""
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div>
								<label className="block mt-4 text-sm">Password</label>
								<input
									className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
									placeholder=""
									type="password"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>

							<p className="mt-1 float-right">
								<Link
									className="text-sm text-green-600 hover:underline"
									href="/forgot-password"
								>
									Forgot password?
								</Link>
							</p>

							<button
								onClick={handleLogin}
								className="block w-full px-4 py-2 mt-16 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
							>
								Login
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
