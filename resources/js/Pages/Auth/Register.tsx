import { Link, useForm, Head } from '@inertiajs/react';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';

export default function Register() {
    const page = useTypedPage();
    const route = useRoute();
    const form = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        terms: false,
    });

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        form.post(route('register'), {
            onFinish: () => form.reset('password', 'password_confirmation'),
        });
    }

    return (
        <section className="flex justify-center relative">
            <Head title='Registrar' />
            {/* <img src="https://pagedone.io/asset/uploads/1702362010.png" alt="gradient background image" className="w-full h-full object-cover fixed"/> */}
            <div className="mx-auto max-w-lg px-6 lg:px-8 absolute py-20">
                {/* <img src="https://pagedone.io/asset/uploads/1702362108.png" alt="pagedone logo" className="mx-auto lg:mb-11 mb-8"/> */}
                <div className="rounded-2xl bg-white shadow-xl">
                    <form onSubmit={onSubmit} className="lg:p-11 p-7 mx-auto">
                        <div className="mb-11">
                            <h1 className="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-2">Bienvenido</h1>
                            <p className="text-gray-500 text-center text-base font-medium leading-6">Let’s get started with your 30 days free trail</p>
                        </div>
                        <input onChange={e => form.setData('name', e.currentTarget.value)} type="text" className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6" placeholder="Nombre" />
                        <input onChange={e => form.setData('email', e.currentTarget.value)} type="text" className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6" placeholder="Correo" />
                        <input onChange={e => form.setData('password', e.currentTarget.value)} type="password" className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6" placeholder="Credencial" />
                        <input onChange={e => form.setData('password_confirmation', e.currentTarget.value)} type="password" className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6" placeholder="Repite la credencial" />

                        <button className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-indigo-800 transition-all duration-700 bg-indigo-600 shadow-sm mb-11">Registrar</button>
                        <Link href={route('login')} className="flex justify-center text-gray-900 text-base font-medium leading-6"> Tienes una cuenta? <span className="text-indigo-600 font-semibold pl-3"> Entrar</span>
                        </Link>
                    </form>
                </div>
            </div>
        </section>
    );
}
