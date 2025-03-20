import Login from "@/components/auth/login";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "uifry | Login",
};

const LoginPage = () => {
	return <Login />;
};

export default LoginPage;
