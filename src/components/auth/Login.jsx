import { useState } from 'react'
import PropTypes from 'prop-types'

const Login = ({handelLogin}) => {
   

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handelLogin(email , password)
        // console.log("woooohooo form submitted!")
        // console.log("email is", email)
        // console.log("password is", password)
        setEmail('')
        setPassword('')

    }



    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="border-2 border-emerald-600 p-15 rounded-xl">
                <form
                    onSubmit={(e) => {
                        submitHandler(e)

                    }}

                    className="flex flex-col justify-center">
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required className="border-2 border-emerald-600 rounded-full text-white outline-none bg-transparent px-4 py-2 placeholder:text-gray-400" type="email" placeholder="Enter your email" />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required className="mt-5 border-2 border-emerald-600 rounded-full text-white outline-none bg-transparent px-3 py-2 placeholder:text-gray-400" type="password" placeholder="Enter your password" />
                    <button className="mt-3 border-none bg-emerald-600 rounded-full outline-none px-1 py-2 text-xl text-white">Log in</button>
                </form>
            </div>

        </div>
    )
}

Login.propTypes = {
    handelLogin: PropTypes.func.isRequired
}

export default Login