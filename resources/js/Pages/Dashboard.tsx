import React from 'react';
import { Link, useForm, Head } from '@inertiajs/react';
import Welcome from '@/Components/Welcome';
import AppLayout from '@/Layouts/AppLayout';
import Question from '@/Components/icons/Question';
import Users from '@/Components/icons/Users';
import Ligth from '@/Components/icons/Light';
import useRoute from '@/Hooks/useRoute';

interface Encuesta {
    title: string;
    description: string;
    active: boolean;
}

export default function Dashboard() {
    const form = useForm()
    const route = useRoute();

    return (
        <AppLayout
            title="Dashboard"
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='flex flex-row items-center gap-4'>
                        <div className="text-center h-[800px]">
                            <button className="drawer-button py-2.5 px-5 text-xs bg-indigo-500 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700" type="button" data-drawer-target="drawer-left-example" data-drawer-show="drawer-left-example" data-drawer-position="left" aria-controls="drawer-left-example"> Show drawer Left </button>
                        </div>
                        <div id="drawer-left-example" className="w-96 absolute left-0 top-0 z-40 pl-9 pr-3 pb-11 overflow-y-auto transition-transform -translate-x-full bg-white " tabIndex={-1} aria-labelledby="drawer-label" aria-hidden="true">
                            <h2 id="drawer-label" className="text-gray-900 text-lg font-semibold leading-7 pt-6">Notification </h2>
                            <p className="text-black text-opacity-20 text-sm font-normal leading-snug">Drawer notification panel</p>
                            <button type="button" data-drawer-hide="drawer-left-example" aria-controls="drawer-left-example" data-drawer-position="left" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-6 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close menu</span>
                            </button>
                            <div className="py-6">
                                <div className="flex gap-3 mb-4">
                                    <img src="https://pagedone.io/asset/uploads/1704349514.png" alt="Hailey image" className="w-12 h-12"/>
                                        <div>
                                            <h5 className="text-gray-900 text-sm font-medium leading-snug mb-1">Hailey Garza <span className="text-gray-500">added new tags to Ease Design System</span>
                                            </h5>
                                            <h6 className="text-gray-500 text-xs font-normal leading-[18px]">Account | Friday, 10:03 AM</h6>
                                        </div>
                                </div>
                                <div className="flex gap-3 mb-4">
                                    <img src="https://pagedone.io/asset/uploads/1704351103.png" alt="Brandon image" className="w-12 h-12"/>
                                        <div>
                                            <h5 className="text-gray-900 text-sm font-medium leading-snug mb-1">Brandon Newman <span className="text-gray-500">Liked your Pagedone 045-favourites-2h ago</span>
                                            </h5>
                                            <h6 className="text-gray-500 text-xs font-normal leading-[18px]">Friday, 10:03 AM</h6>
                                        </div>
                                </div>
                                <div className="flex gap-3 mb-4">
                                    <img src="https://pagedone.io/asset/uploads/1705646315.png" alt="Justi image" className="w-12 h-12"/>
                                        <div>
                                            <h5 className="text-gray-900 text-sm font-medium leading-snug mb-1">Justi Bolt <span className="text-gray-500">Started Following</span>
                                            </h5>
                                            <h6 className="text-gray-500 text-xs font-normal leading-[18px]">Friday, 10:03 AM</h6>
                                        </div>
                                </div>
                                <div className="flex gap-3">
                                    <img src="https://pagedone.io/asset/uploads/1705646299.png" alt="Dave image" className="w-12 h-12"/>
                                        <div>
                                            <h5 className="text-gray-900 text-sm font-medium leading-snug mb-1">Dave Wood <span className="text-gray-500">Started Following</span>
                                            </h5>
                                            <h6 className="text-gray-500 text-xs font-normal leading-[18px]">Friday, 10:03 AM</h6>
                                        </div>
                                </div>
                            </div>
                            <h2 className="text-gray-900 text-base font-semibold leading-relaxed mb-4">This Week</h2>
                            <div className="flex gap-3 mb-4">
                                <img src="https://pagedone.io/asset/uploads/1705646924.png" alt="Kate image" className="w-12 h-12"/>
                                    <div>
                                        <h5 className="text-gray-900 text-sm font-medium leading-snug mb-1">Kate Young <span className="text-gray-500">Like your post</span>
                                        </h5>
                                        <h6 className="text-gray-500 text-xs font-normal leading-[18px]">Account | Friday, 10:03 AM</h6>
                                    </div>
                            </div>
                            <div className="flex gap-3 mb-4">
                                <img src="https://pagedone.io/asset/uploads/1705646894.png" alt="Shanaya image" className="w-12 h-12"/>
                                    <div>
                                        <h5 className="text-gray-900 text-sm font-medium leading-snug mb-1">Shanaya Kale <span className="text-gray-500">commented on your post</span>
                                        </h5>
                                        <h6 className="text-gray-500 text-xs font-normal leading-[18px]">Friday, 10:03 AM</h6>
                                    </div>
                            </div>
                            <div className="flex gap-3 mb-4">
                                <img src="https://pagedone.io/asset/uploads/1705646880.png" alt="Angelina image" className="w-12 h-12"/>
                                    <div>
                                        <h5 className="text-gray-900 text-sm font-medium leading-snug mb-1">Angelina <span className="text-gray-500">Messages you "Do you want to go see a movie tonight?"</span>
                                        </h5>
                                        <h6 className="text-gray-500 text-xs font-normal leading-[18px]">Friday, 10:03 AM</h6>
                                    </div>
                            </div>
                            <div className="flex gap-3">
                                <img src="https://pagedone.io/asset/uploads/1705647084.png" alt="Natasha image" className="w-12 h-12"/>
                                    <div className="">
                                        <div className="pb-3">
                                            <h5 className="text-gray-900 text-sm font-medium leading-snug mb-1">Natasha <span className="text-gray-500">Send you competitors analysis document</span>
                                            </h5>
                                            <h6 className="text-gray-500 text-xs font-normal leading-[18px]">Friday, 10:03 AM</h6>
                                        </div>
                                        <div className="flex gap-1 p-3 bg-gray-50 rounded-lg w-fit">
                                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="File">
                                                    <path id="icon" d="M26.9018 9.01473L27.4998 8.48324V8.48324L26.9018 9.01473ZM24.3571 6.15194L23.7592 6.68343L23.7592 6.68343L24.3571 6.15194ZM22.5548 4.49865L22.2271 5.22845V5.22845L22.5548 4.49865ZM28.1482 10.6953L27.4004 10.9796V10.9796L28.1482 10.6953ZM27.0884 28.5052L27.6541 29.0709H27.6541L27.0884 28.5052ZM20.5959 9.76109L21.3806 9.60502L20.5959 9.76109ZM22.8221 11.9872L22.666 12.7719L22.8221 11.9872ZM9.9165 17.6167C9.47468 17.6167 9.1165 17.9748 9.1165 18.4167C9.1165 18.8585 9.47468 19.2167 9.9165 19.2167V17.6167ZM21.2498 19.2167C21.6917 19.2167 22.0498 18.8585 22.0498 18.4167C22.0498 17.9748 21.6917 17.6167 21.2498 17.6167V19.2167ZM9.9165 21.8667C9.47468 21.8667 9.1165 22.2248 9.1165 22.6667C9.1165 23.1085 9.47468 23.4667 9.9165 23.4667V21.8667ZM16.9998 23.4667C17.4417 23.4667 17.7998 23.1085 17.7998 22.6667C17.7998 22.2248 17.4417 21.8667 16.9998 21.8667V23.4667ZM19.8332 28.95H14.1665V30.55H19.8332V28.95ZM6.4665 21.25V12.75H4.8665V21.25H6.4665ZM27.5332 12.7795V21.25H29.1332V12.7795H27.5332ZM14.1665 5.05H20.1218V3.45H14.1665V5.05ZM20.1218 5.05C21.446 5.05 21.8663 5.06639 22.2271 5.22845L22.8826 3.76886C22.136 3.43361 21.3034 3.45 20.1218 3.45V5.05ZM24.955 5.62045C24.17 4.73732 23.6291 4.10411 22.8826 3.76886L22.2271 5.22845C22.588 5.3905 22.8794 5.69371 23.7592 6.68343L24.955 5.62045ZM29.1332 12.7795C29.1332 11.7738 29.1453 11.0667 28.896 10.411L27.4004 10.9796C27.5211 11.2969 27.5332 11.6549 27.5332 12.7795H29.1332ZM26.3039 9.54623C27.051 10.3868 27.2798 10.6623 27.4004 10.9796L28.896 10.411C28.6467 9.75537 28.1679 9.23486 27.4998 8.48324L26.3039 9.54623ZM14.1665 28.95C12.1404 28.95 10.7013 28.9483 9.6097 28.8015C8.54107 28.6579 7.92597 28.3885 7.47699 27.9395L6.34561 29.0709C7.14143 29.8667 8.15046 30.2197 9.3965 30.3873C10.6195 30.5517 12.1857 30.55 14.1665 30.55V28.95ZM4.8665 21.25C4.8665 23.2309 4.8648 24.797 5.02924 26.02C5.19676 27.266 5.5498 28.2751 6.34561 29.0709L7.47699 27.9395C7.028 27.4905 6.75864 26.8754 6.61497 25.8068C6.4682 24.7152 6.4665 23.2761 6.4665 21.25H4.8665ZM19.8332 30.55C21.814 30.55 23.3801 30.5517 24.6032 30.3873C25.8492 30.2197 26.8582 29.8667 27.6541 29.0709L26.5227 27.9395C26.0737 28.3885 25.4586 28.6579 24.39 28.8015C23.2983 28.9483 21.8593 28.95 19.8332 28.95V30.55ZM27.5332 21.25C27.5332 23.2761 27.5315 24.7152 27.3847 25.8068C27.241 26.8754 26.9717 27.4905 26.5227 27.9395L27.6541 29.0709C28.4499 28.2751 28.8029 27.266 28.9704 26.02C29.1349 24.797 29.1332 23.2309 29.1332 21.25H27.5332ZM6.4665 12.75C6.4665 10.7239 6.4682 9.28483 6.61497 8.19319C6.75864 7.12457 7.028 6.50946 7.47699 6.06048L6.34561 4.92911C5.5498 5.72492 5.19676 6.73395 5.02924 7.98C4.8648 9.20303 4.8665 10.7691 4.8665 12.75H6.4665ZM14.1665 3.45C12.1857 3.45 10.6195 3.4483 9.3965 3.61273C8.15046 3.78026 7.14143 4.1333 6.34561 4.92911L7.47699 6.06048C7.92597 5.6115 8.54107 5.34214 9.6097 5.19847C10.7013 5.0517 12.1404 5.05 14.1665 5.05V3.45ZM19.7415 4.25V8.5H21.3415V4.25H19.7415ZM24.0832 12.8417H28.3332V11.2417H24.0832V12.8417ZM19.7415 8.5C19.7415 9.11992 19.7376 9.54671 19.8113 9.91716L21.3806 9.60502C21.3454 9.42808 21.3415 9.19661 21.3415 8.5H19.7415ZM24.0832 11.2417C23.3866 11.2417 23.1551 11.2378 22.9782 11.2026L22.666 12.7719C23.0365 12.8455 23.4633 12.8417 24.0832 12.8417V11.2417ZM19.8113 9.91716C20.098 11.3585 21.2247 12.4852 22.666 12.7719L22.9782 11.2026C22.1716 11.0422 21.541 10.4116 21.3806 9.60502L19.8113 9.91716ZM9.9165 19.2167H21.2498V17.6167H9.9165V19.2167ZM9.9165 23.4667H16.9998V21.8667H9.9165V23.4667ZM27.4998 8.48324L24.955 5.62045L23.7592 6.68343L26.3039 9.54623L27.4998 8.48324Z" fill="#6B7280" />
                                                </g>
                                            </svg>
                                            <div>
                                                <h5 className="text-gray-900 text-xs font-medium leading-4 pb-0.5">Competitors analysis</h5>
                                                <h6 className="text-gray-500 text-xs font-normal leading-4">56 Mb</h6>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
