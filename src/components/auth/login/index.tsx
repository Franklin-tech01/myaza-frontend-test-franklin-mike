"use client";

import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import Icons from "@/components/icons";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import TestimonialCarousel from "@/components/testimonial";

const Login = () => {
	const router = useRouter();

	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const {
		formState: { errors, isValid },
		watch,
	} = methods;

	const onSubmit: SubmitHandler<any> = async (data) => {
		try {
			router.push("/dashboard");
		} catch (error: any) {}
	};

	return (
		<div className='w-full  grid grid-cols-1 lg:grid-cols-2 gap-y-5'>
			<main className='col-span-1 h-[100vh] p-3 xl:p-0 bg-[#1D1D41] order-2 lg:order-1 flex items-center justify-center'>
				<div className='space-y-6 lg:space-y-10 w-full max-lg:container lg:max-w-[424px] lg:px-4'>
					<div className='flex items-center justify-center'>
						<Icons.Logo />
					</div>
					<div className='space-y-1 lg:space-y-2 text-white text-center'>
						<h1 className='text-2xl lg:text-3xl font-semibold'>
							Welcome back, Ali Riaz 🙇🏾‍♀️
						</h1>
						<p className='text-sm lg:text-base'>
							Login to access your Uifry account
						</p>
					</div>

					<FormProvider {...methods}>
						<form onSubmit={methods.handleSubmit(onSubmit)}>
							<div className='space-y-4 lg:space-y-6'>
								<Input
									label='Email Address'
									name='email'
									type='email'
									placeholder='E.g Aliriaz@Uifry.com'
									rules={["required", "email"]}
									className='!bg-[#1D1D41] outline-none border-[#DCD9D9] text-white'
									paddingRight='pr-12'
								/>
								<Input
									label='Password'
									name='password'
									type='password'
									placeholder='************'
									className='!bg-[#1D1D41] outline-none border-[#DCD9D9] text-white'
									rules={["required"]}
								/>
							</div>
							<div className='mt-2 flex items-center text-right space-x-2 justify-between'>
								<div className='ml-auto'>
									<button className='text-sm text-[#CBC8FF] font-bold cursor-pointer'>
										I Forgot My Password!
									</button>
								</div>
							</div>
							<div className=' my-11 lg:mt-20 mx-auto'>
								<Button
									type='submit'
									disabled={!isValid}
									className='w-full bg-[#CBC8FF] cursor-pointer !outline-none text-[#1D1D41]'>
									Login
								</Button>
							</div>
							<div className='flex items-center justify-center space-x-2'>
								<p className='text-sm text-white'>Not Ali Riaz?</p>
								<Link href={"/"} className='text-[#CBC8FF] font-bold'>
									Login to continue
								</Link>
							</div>
						</form>
					</FormProvider>
				</div>
			</main>
			<aside className='h-[100vh] hidden xl:block bg-[#141332] lg:order-2 py-1.5 overflow-hidden relative'>
				<div className='flex  my-16 items-center justify-center'>
					<TestimonialCarousel />
				</div>
				<div className='absolute bottom-0  right-0 w-full margin-0 max-w-3xl'>
					<Image
						src='/assets/images/login.svg'
						alt='Uifry Dashboard Preview'
						width={920}
						height={584}
						className='w-full h-[580px] ml-20  bg-center bg-cover'
					/>
				</div>
			</aside>
		</div>
	);
};

export default Login;
