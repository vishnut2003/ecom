'use client';

import { RiEyeLine, RiEyeOffLine } from "@remixicon/react"
import Link from "next/link"
import { ChangeEvent, useState } from "react";
import utils from '@/utils/signup'

const SignupForm = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    function updateFormValue (e: ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={(event) => utils.submitSignup(event, formData)}>
            <div className="flex flex-col gap-0 text-base font-normal">
                <label htmlFor="username" className="text-sm">Username</label>
                <input
                value={formData.username}
                onChange={updateFormValue}
                type="text" name="username" className="py-2 px-3 border-b border-blue-500 outline-none" />
            </div>

            <div className="flex flex-col gap-0 text-base font-normal">
                <label htmlFor="email" className="text-sm">Email Address</label>
                <input 
                value={formData.email}
                onChange={updateFormValue}
                type="email" name="email" className="py-2 px-3 border-b border-blue-500 outline-none" />
            </div>

            <div className="flex flex-col gap-0 text-base font-normal">
                <label htmlFor="password" className="text-sm">Password</label>
                <div className="flex gap-1 py-2 px-3 border-b border-blue-500">
                    <input 
                    value={formData.password}
                    onChange={updateFormValue}
                    type={passwordVisible ? "text" : "password"} name="password" className="outline-none w-full" />
                    {
                        passwordVisible ? <RiEyeOffLine onClick={() => setPasswordVisible(!passwordVisible)} size={25} className="text-blue-500" />
                        : <RiEyeLine onClick={() => setPasswordVisible(!passwordVisible)} size={25} className="text-blue-500" />
                    }
                </div>
            </div>

            <input type="submit" className="w-full bg-blue-500 p-3 text-white rounded-sm cursor-pointer" value="Signup" />
            <p className="text-center text-base font-normal text-slate-500">Existing User? <Link href={'/users/login'} className="text-blue-500">Log in</Link></p>
        </form>
    )
}

export default SignupForm