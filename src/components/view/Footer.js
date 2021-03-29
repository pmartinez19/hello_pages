import foto from "../img/footer.jpg";

export const Footer = () => (
    <footer>
        <div className="z-10 mt-12 relative pt-6 bottom-0">
            
            <img src={foto} className="z-10 absolute inset-0 bottom-0 w-full h-60 object-cover " />
            <a href="http://www.freepik.com">Designed by Creative_hat / Freepik</a>
            <div className="container relative z-10 mx-auto lg:flex justify-between px-6 pt-8 lg:pt-32 pb-6 lg:pb-28">
                <div className="lg:w-1/4 pb-12 lg:pb-0">
                    {
                        //TODO LOGO BEYOURSELF
                    }
                    <p className="text-blue-900  text-xl">Barcelona</p>
                </div>
                <div className="lg:w-1/2 sm:flex justify-between lg:justify-end">
                    <div className="lg:pr-24 pb-12 lg:pb-0">
                        <h3 className="mb-6 text-lg text-blue-900  font-bold">Links</h3>
                        <ul className="text-blue-900 ">
                            <li className="mb-3">
                                <a href="javascript:void(0)">Products</a>
                            </li>
                            <li className="mb-3">
                                <a href="javascript:void(0)">Claims</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="lg:pr-24 pb-12 lg:pb-0">
                        <h3 className="mb-6 text-lg text-blue-900  font-bold">Services</h3>
                        <ul className="text-blue-900 ">
                            <li className="mb-3">
                                <a href="javascript:void(0)">Products</a>
                            </li>
                            <li className="mb-3">
                                <a href="javascript:void(0)">Claims</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-lg text-blue-900  font-bold">About</h3>
                        <ul className="text-blue-900 ">
                            <li className="mb-3">
                                <a href="javascript:void(0)">Products</a>
                            </li>
                            <li className="mb-3">
                                <a href="javascript:void(0)">Claims</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="lg:w-1/4 flex lg:justify-end items-end mt-12 lg:mt-0">
                    <div className="bg-gray-700 p-2 rounded-full mr-2.5">
                        <img src="https://cdn.tuk.dev/assets/templates/weCare/fb.png" />
                    </div>
                    <div className="bg-gray-700 p-2 rounded-full mr-2.5">
                        <img src="https://cdn.tuk.dev/assets/templates/weCare/twitter.png" />
                    </div>
                    <div className="bg-gray-700 p-2 rounded-full mr-2.5">
                        <img src="https://cdn.tuk.dev/assets/templates/weCare/yt.png" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
