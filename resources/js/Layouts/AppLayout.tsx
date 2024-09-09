import { router } from '@inertiajs/core';
import { Link, Head } from '@inertiajs/react';
import React, { PropsWithChildren, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import Banner from '@/Components/Banner';
import { Team } from '@/types';

interface Props {
    title: string;
    renderHeader?(): JSX.Element;
}

export default function AppLayout({
    title,
    renderHeader,
    children,
}: PropsWithChildren<Props>) {
    const page = useTypedPage();
    const route = useRoute();
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    function switchToTeam(e: React.FormEvent, team: Team) {
        e.preventDefault();
        router.put(
            route('current-team.update'),
            {
                team_id: team.id,
            },
            {
                preserveState: false,
            },
        );
    }

    function logout(e: React.FormEvent) {
        e.preventDefault();
        router.post(route('logout'));
    }

    return (
        <div>
            <Head title={title} />

            <Banner />

            <div className="min-h-screen bg-white">
                <nav className="sticky top-0 py-3  border-b border-solid border-prime-gray-200  w-full  bg-inherit ">
                    <div className="container mx-auto ">
                        <div className="w-full flex  flex-col lg:flex-row">
                            <div className=" flex justify-between  lg:flex-row">
                                <a href="https://pagedone.io/" className="flex items-center">
                                    Contab
                                </a>
                                <button data-collapse-toggle="navbar-default-with-search" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default-with-search" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="hidden w-full lg:flex  lg:pl-11 " id="navbar-default-with-search">
                                <ul className="flex items-center flex-col mt-4 lg:mt-0 lg:flex-row gap-4">
                                    <li>
                                        <a href="#" className="flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Home</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">About us</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Product</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Features</a>
                                    </li>
                                </ul>
                                <div className="flex items-center ml-auto justify-center">
                                    <div className="relative mx-auto text-gray-900 lg:block hidden">
                                        <button type="submit" className=" mr-2 w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center">
                                            <svg className="text-gray-900 h-4 w-4 stroke-current" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 16.5L13.375 13.875M15.25 8.625C15.25 12.56 12.06 15.75 8.125 15.75C4.18997 15.75 1 12.56 1 8.625C1 4.68997 4.18997 1.5 8.125 1.5C12.06 1.5 15.25 4.68997 15.25 8.625Z" stroke="stroke-current" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                            {/* <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path> */}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* <!-- Page Heading --> */}
                {renderHeader ? (
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            {renderHeader()}
                        </div>
                    </header>
                ) : null}

                {/* <!-- Page Content --> */}
                <main>{children}</main>
            </div>
        </div>
    );
}
