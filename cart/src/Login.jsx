import { useState } from "react";
import { login, useLoggedIn } from "cart/cart";

export default function Login() {
    const loggedIn = useLoggedIn();
    const [showLogin, setShowLogin] = useState(false)
    const [username, setUsername] = useState("sally")
    const [password, setPassword] = useState("123")
    if (loggedIn) return null

    return (
        <>
            <button className="bg-blue-900 text-white py-2 px-5 rounded-md" onClick={() => setShowLogin(!showLogin)}>
                Login
            </button>
            {showLogin && (
                <div
                    className="absolute p-5 border-4 border-blue-800 bg-white rounded-lg text-black"
                    style={{ width: 300, top: "3.3rem" }}
                >
                    <input
                        className="border text-sm border-gray-400 p-2 rounded-md w-full mt-2"
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        className="border text-sm border-gray-400 p-2 rounded-md w-full mt-2"
                        type="text"
                        placeholder="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button
                        className="bg-green-900 text-sm text-white py-2 px-5 rounded-md mt-2"
                        onClick={() => {
                            login(username, password)
                            setShowLogin(false)
                        }}
                        id="loginbtn"
                    >
                        Login
                    </button>
                </div>
            )}
        </>
    )
}