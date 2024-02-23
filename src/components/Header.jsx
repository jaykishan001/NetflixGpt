import { useNavigate } from "react-router-dom";
import { auth } from "./utils/fireBase";
import { signOut } from "firebase/auth";

const Header = () => {

    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {

            navigate("/")

        }).catch((error) => {
            // An error happened.
        });

    }
    return (
        <div className="flex absolute w-screen  px-8 py-2 bg-gradient-to-b from-black z-10 justify-between ">
            <img
                className="w-44"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
            ></img>

            <div className>
                <div className="pt-5 font-bold text-xl">
                    🤖
                    <button onClick={handleSignOut} className="font-bold text-xl cursor-pointer">Signout</button>
                </div>

            </div>
        </div>
    )
}

export default Header