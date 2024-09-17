import logo from '../../assets/Image/logo.svg'
import apple from '../../assets/Image/app-store.jpg'
import google from '../../assets/Image/google-play.jpg'
import payments from '../../assets/Image/payment-method.png'


export default function Footer() {
  return (
    <div>
        

        <footer className=" bg-gradient-to-r from-green-50 to-green-100 mt-3">
            <div className="w-full p-4 py-6 mx-auto max-w-screen-2xl lg:py-8">
                {/* <div className="md:flex md:justify-between"> */}
                   
                    <div className="grid grid-cols-2 gap-8 md:gap-6 md:grid-cols-6">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                        <img src={logo} className="h-14" alt="Logo" />
                        </a>
                    </div>
                        <div>
                            <h2 className="mb-6 text-xl font-semibold text-gray-900 ">Company</h2>
                            <ul className="text-gray-800">
                                <li className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">About Us</a>
                                </li>
                                <li   className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Delivery Information</a>
                                </li>
                                <li  className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Privacy Policy</a>
                                </li>
                                <li  className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Terms & Conditions</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Contact US</a>
                                </li>
                                <li  className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Support Center</a>
                                </li>
                                <li  className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Careers</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-xl font-semibold text-gray-900 ">Account</h2>
                            <ul className="text-gray-800">
                                <li className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Sign In</a>
                                </li>
                                <li   className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">View Cart</a>
                                </li>
                                <li  className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">My Wishlist</a>
                                </li>
                                <li  className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Track My Order</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Help Ticket</a>
                                </li>
                                <li  className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Shipping Details</a>
                                </li>
                                <li  className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Compare products</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-xl font-semibold text-gray-900">Corporate</h2>
                            <ul className="text-gray-800 ">
                                <li  className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Become a Vendor</a>
                                </li>
                                <li  className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Affiliate Program</a>
                                </li>
                                <li  className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Farm Business</a>
                                </li>
                                <li  className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Farm Careers</a>
                                </li>
                                <li  className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Our Suppliers</a>
                                </li>
                                <li  className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Accessibility</a>
                                </li>
                                <li  className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Promotions</a>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-xl font-semibold text-gray-900">Popular</h2>
                            <ul className="text-gray-800">
                                <li className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Milk & Flavoured Milk</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Butter and Margarine</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Eggs Substitutes</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Marmalades</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Sour Cream and Dips</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Tea & Kombucha
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:text-green-500 hover:ms-2">Cheese</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-xl font-semibold text-gray-900">Install App</h2>
                            <ul className="text-gray-800">
                                <li className="mb-2">
                                    <a href="#">From App Store or Google Play</a>
                                </li>
                                <li className="mb-2">
                                    <img src={apple} alt="" className="h-[40px]"/>
                                </li>
                                <li className="mb-5">
                                    <img src={google} alt="" className="h-[40px]" />
                                </li>
                                <li className="mb-2">
                                    <a href="#">Secured Payment Gateways</a>
                                </li>
                                <li>
                                    <img src={payments} alt="" className="h-[30px]"/>
                                </li>
                            </ul>
                        </div>



                    </div>
            {/* </div> */}
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-smsm:text-center ">© 2024 <a href="#" className="hover:underline"> <span className="font-bold text-green-500">Nest</span> - HTML Ecommerce Template</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                    <a href="#" className="text-green-500 hover:text-green-400">
                        <i className="text-xl bi bi-facebook"></i>
                        <span className="sr-only">Facebook page</span>
                    </a>
                    <a href="#" className="text-green-500 hover:text-green-400 ms-5">
                        <i className="text-xl bi bi-twitter"></i>
                        <span className="sr-only">Twitter page</span>
                    </a>
                    <a href="#" className="text-green-500 hover:text-green-400 ms-5">
                        <i className="text-xl bi bi-instagram"></i>
                        <span className="sr-only">Instagram account</span>
                    </a>
                    <a href="#" className="text-green-500 hover:text-green-400 ms-5">
                        <i className="text-xl bi bi-pinterest"></i>
                        <span className="sr-only">Pinterest account</span>
                    </a>
                    <a href="#" className="text-green-500 hover:text-green-400 ms-5">
                        <i className="text-xl bi bi-youtube"></i>
                        <span className="sr-only">Youtube</span>
                    </a>
                </div>
            </div>
            </div>
        </footer>

    </div>
  )
}