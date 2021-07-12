import React from 'react';
import { signinviaemailandpassword } from '../firebase.utils';

const Login = () => {
    const [email, setemail] = React.useState('d');
    const [password, setpassword] = React.useState('d');

    const onSubmit = () => {
        signinviaemailandpassword(email, password);
    }
    return (
        <div>
            <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 class="font-bold text-2xl">Welcome to Menu SKL PKBM Hanuba Medan</h3>
                    <p class="text-gray-600 pt-2">Sign in to your account.</p>
                </section>

                <section class="mt-10">
                    <div class="flex flex-col" method="POST" action="#">
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
                            <input onChange={(e) => setemail(e.target.value)} type="text" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                        </div>
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                            <input onChange={(e) => setpassword(e.target.value)} type="password" id="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                        </div>
                       
                        <button onClick={onSubmit} class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Login</button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Login
