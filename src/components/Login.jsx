import { useRef, useState } from "react"
import Header from "./Header"
import validData from "./utils/validData";

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [validLogin, setValidLogin] = useState("")

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonCick = () => {
        const message = validData(email.current.value, password.current.value)
        setValidLogin(message);

    }

    const handleSignIn = () => {
        setIsSignIn(!isSignIn)
    };


    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg"
                    alt="background-image" />

            </div>
            <form className=" relative pt-[15%]" onSubmit={(e) => {
                e.preventDefault();
            }} >
                <div className="w-3/12  p-12 bg-black  mx-auto right-0 left-0 text-white rounded-lg ">

                    <h1 className="text-2xl font-bold">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                    {!isSignIn && (
                        <input placeholder="Full Name"
                            type="text"
                            className="p-2 my-4 w-full rounded-sm text-black"
                        />)
                    }
                    <input
                        ref={email}
                        placeholder="Email or phone number"
                        type="text"
                        className="p-2 my-4 w-full rounded-sm text-black"
                    />
                    <input
                        ref={password}
                        placeholder="Password"
                        type="password"
                        className="p-2 my-4 w-full rounded-sm text-black"
                    />

                    <div className="text-red-600 font-medium text-lg">
                        {validLogin}
                    </div>
                    <button
                        className="p-2 my-4 w-full bg-red-600 rounded-lg"
                        onClick={handleButtonCick}
                    >{isSignIn ? "Sign In" : "Sign Up"}</button>
                    <p>{isSignIn ? "New to Netflix?" : "Already have a account?"}
                        <span className="cursor-pointer" onClick={handleSignIn}>{isSignIn ? " Sign In" : " Sign Up"}</span>
                    </p>
                </div>

            </form >

        </div >
    )
}

export default Login