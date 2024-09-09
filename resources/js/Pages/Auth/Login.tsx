import { Link, useForm, Head } from '@inertiajs/react';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import AuthenticationCard from '@/Components/AuthenticationCard';

interface Props {
    canResetPassword: boolean;
    status: string;
}

export default function Login({ canResetPassword, status }: Props) {
    const route = useRoute();
    const form = useForm({
        email: '',
        password: '',
        remember: '',
    });

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        form.post(route('login'), {
            onFinish: () => form.reset('password'),
        });
    }

    return (
        <section className="flex justify-center relative">
            {/* <img src="https://pagedone.io/asset/uploads/1702362010.png" alt="gradient background image" className="w-full h-full object-cover fixed"/> */}
            <div className="mx-auto max-w-lg px-6 lg:px-8 absolute py-20">
                {/* <img src="https://pagedone.io/asset/uploads/1702362108.png" alt="pagedone logo" className="mx-auto lg:mb-11 mb-8"/> */}
                <div className="rounded-2xl bg-white shadow-xl">
                    <form onSubmit={onSubmit} className="lg:p-11 p-7 mx-auto">
                        <div className="mb-11">
                            <h1 className="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-2">Bienvenido</h1>
                            <p className="text-gray-500 text-center text-base font-medium leading-6">Let’s get started with your 30 days free trail</p>
                        </div>
                        <input onChange={e => form.setData('email', e.currentTarget.value)} type="text" className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6" placeholder="Correo" />
                        <input onChange={e => form.setData('password', e.currentTarget.value)} type="text" className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1" placeholder="Credencial" />
                        <a href="javascript:;" className="flex justify-end mb-6">
                            <span className="text-indigo-600 text-right text-base font-normal leading-6">Olvido la credencial?</span>
                        </a>
                        <button className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-indigo-800 transition-all duration-700 bg-indigo-600 shadow-sm mb-11">Entrar</button>
                        <Link href={route('register')} className="flex justify-center text-gray-900 text-base font-medium leading-6"> No tienes cuenta? <span className="text-indigo-600 font-semibold pl-3"> Registrate</span>
                        </Link>
                    </form>
                </div>
            </div>
        </section>
    );
}
