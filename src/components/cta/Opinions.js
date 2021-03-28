import React from "react";
function Index() {
    return (
        <div className="container mx-auto pt-16">
            <div className="flex flex-wrap rounded-lg">
                <div className="xl:w-2/5 lg:w-2/5 sm:w-full bg-indigo-700 py-16 xl:py-32 px-8 xl:px-16 text-center xl:text-left lg:text-left md:text-left sm:text-left xl:rounded-tl xl:rounded-bl">
                    <h1 className="font-extrabold text-4xl text-white pb-2">Our Happy Clients</h1>
                    <p className="text-lg text-white">Our takeout just went throughout the roof because we could be taking five orders at one time instead of one order at a time.</p>
                </div>
                <div className="lg:w-3/5 xl:w-3/5 bg-gray-200 pl-4 pt-4 pb-4 pr-4 xl:pr-10 xl:pl-0 xl:pt-10 xl:pb-10 xl:rounded-tr xl:rounded-br">
                    <section id="carousel">
                        <figure className="visible">
                            <div className="relative bg-white">
                                <img src="https://cdn.tuk.dev/assets/qoute-1.png" alt className="absolute -mt-4 pl-6 sm:pl-12" />
                                <div className="pt-20 px-6 sm:px-12">
                                    <p className="text-gray-600 text-base pb-6">From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.</p>
                                    <p className="text-gray-600 text-base pb-8">We can't believe how far we have come in the last 6 months. I really did not think this awesome career move would come so quickly. Thanks to each of you put into SI and the partner relationships.</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center pb-12">
                                            <div className="h-12 w-12">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt className="h-full w-full object-cover overflow-hidden rounded-full" />
                                            </div>
                                            <p className="text-gray-600 font-bold ml-3">
                                                Jane Doe <br />
                                                <span className="text-gray-600 text-base font-light">Apple Inc</span>
                                            </p>
                                        </div>
                                        <div className="cursor-pointer flex pb-12">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={44} height={44} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#CBD5E0" fill="none" strokeLinecap="round" strokeLinejoin="round" onclick="movePrev()">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="15 6 9 12 15 18" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={44} height={44} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#CBD5E0" fill="none" strokeLinecap="round" strokeLinejoin="round" onclick="moveForward()">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="9 6 15 12 9 18" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </figure>
                        <figure className="hidden">
                            <div className="relative bg-white">
                                <img src="https://cdn.tuk.dev/assets/qoute-1.png" alt className="absolute -mt-4 pl-6 sm:pl-12" />
                                <div className="pt-20 px-6 sm:px-12">
                                    <p className="text-gray-600 text-base pb-6">The company really helped me with my personal branding. Everything from conception to execution was extremely awesome and really professional. I enjoyed the services they offered. Their design is impeccable.</p>
                                    <p className="text-gray-600 text-base pb-8">I truly value the relationship they created with me. I will always think first about them while starting any projects in the future. They are definitely my go-to for any design or services. Excellent communication and I always feel that I am their first priority.</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center pb-12">
                                            <div className="h-12 w-12">
                                                <img src="https://cdn.tuk.dev/assets/templates/Project+Management/pm_15.png" alt className="h-full w-full object-cover overflow-hidden rounded-full" />
                                            </div>
                                            <p className="text-gray-600 font-bold ml-3">
                                                Richard Stark <br />
                                                <span className="text-gray-600 text-base font-light">UX Strategy</span>
                                            </p>
                                        </div>
                                        <div className="cursor-pointer flex pb-12">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={44} height={44} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#CBD5E0" fill="none" strokeLinecap="round" strokeLinejoin="round" onclick="movePrev()">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="15 6 9 12 15 18" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={44} height={44} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#CBD5E0" fill="none" strokeLinecap="round" strokeLinejoin="round" onclick="moveForward()">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="9 6 15 12 9 18" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </figure>
                        <figure className="hidden">
                            <div className="relative bg-white">
                                <img src="https://cdn.tuk.dev/assets/qoute-1.png" alt className="absolute -mt-4 pl-6 sm:pl-12" />
                                <div className="pt-20 px-6 sm:px-12">
                                    <p className="text-gray-600 text-base pb-6">It's not just a pretty face but I am also thrilled by the quality of support. It's fast reliable and has no complications at all. It has completely changed the way I develop a website . It lets you create anything you envision and it does so easily and flawlessly.</p>
                                    <p className="text-gray-600 text-base pb-8">Undoubtedly working with them was just like playing. It was so easy editing your content, so fast getting perfect results and so easy customizing based on your own brand.Thank you so much.</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center pb-12">
                                            <div className="h-12 w-12">
                                                <img src="https://cdn.tuk.dev/assets/templates/Project+Management/pm_18.png" alt className="h-full w-full object-cover overflow-hidden rounded-full" />
                                            </div>
                                            <p className="text-gray-600 font-bold ml-3">
                                                Thomas Clark
                                                <br />
                                                <span className="text-gray-600 text-base font-light">Maintenance</span>
                                            </p>
                                        </div>
                                        <div className="cursor-pointer flex pb-12">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={44} height={44} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#CBD5E0" fill="none" strokeLinecap="round" strokeLinejoin="round" onclick="movePrev()">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="15 6 9 12 15 18" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={44} height={44} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#CBD5E0" fill="none" strokeLinecap="round" strokeLinejoin="round" onclick="moveForward()">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="9 6 15 12 9 18" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </figure>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Index;
