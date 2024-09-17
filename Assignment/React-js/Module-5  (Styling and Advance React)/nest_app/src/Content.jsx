import banner1 from './assets/banner-1.png'
import banner2 from './assets/banner-2.png'
import banner3 from './assets/banner-3.png'
import cate1 from './assets/cat-1.png'
import cate2 from './assets/cat-2.png'
import cate3 from './assets/cat-3.png'
import cate4 from './assets/cat-4.png'
import cate5 from './assets/cat-5.png'
import cate9 from './assets/cat-9.png'
import cate11 from './assets/cat-11.png'
import cate12 from './assets/cat-12.png'
import cate14 from './assets/cat-14.png'


export default function MainContent() {
    return (
        <div>
            <div className="container-fluid px-5 my-10">
                <h1 className='text-3xl font-bold'>Featured Categories</h1>

                <div className='flex gap-2 mt-5 flex-nowrap md:flex-wrap fruits-category overflow-x-auto'>

                    <div className="rounded-lg px-4 border-2 hover:shadow-lg hover:border-green-500 bg-green-100 h-48">
                        <a href="#" className='d-flex justify-center align'>
                            <img className=" rounded-t-lg" src={cate1} alt="product image" />
                        </a>
                        <div className="px-5 text-center">
                            <a href="#">
                                <h5 className="text-base font-bold tracking-tight text-nowrap text-center hover:text-green-600">Vegetables</h5>
                                <span className='text-nowrap'>72 items</span>
                            </a>
                        </div>
                    </div>
                    <div className="rounded-lg px-4 border-2 hover:shadow-lg hover:border-green-500 bg-red-100 h-48">
                        <a href="#" className='d-flex justify-center align'>
                            <img className=" rounded-t-lg" src={cate2} alt="product image" />
                        </a>
                        <div className="px-5 text-center">
                            <a href="#">
                                <h5 className="text-base font-bold tracking-tight text-nowrap text-center hover:text-green-600 text-nowrap">Strawberry</h5>
                                <span className='text-nowrap'>72 items</span>
                            </a>
                        </div>
                    </div>
                    <div className="rounded-lg px-4 border-2 hover:shadow-lg hover:border-green-500 bg-amber-100 h-48">
                        <a href="#" className='d-flex justify-center align'>
                            <img className=" rounded-t-lg" src={cate3} alt="product image" />
                        </a>
                        <div className="px-5 text-center">
                            <a href="#">
                                <h5 className="text-base font-bold tracking-tight text-nowrap text-center hover:text-green-600">snack</h5>
                                <span className='text-nowrap'>72 items</span>
                            </a>
                        </div>
                    </div>
                    <div className="rounded-lg px-4 border-2 hover:shadow-lg hover:border-green-500 bg-gray-100 h-48">
                        <a href="#" className='d-flex justify-center align'>
                            <img className=" rounded-t-lg" src={cate4} alt="product image" />
                        </a>
                        <div className="px-5 text-center">
                            <a href="#">
                                <h5 className="text-base font-bold tracking-tight text-nowrap text-center hover:text-green-600">Black plum</h5>
                                <span className='text-nowrap'>72 items</span>
                            </a>
                        </div>
                    </div>
                    <div className="rounded-lg px-4 border-2 hover:shadow-lg hover:border-green-500 bg-green-100 h-48">
                        <a href="#" className='d-flex justify-center align'>
                            <img className=" rounded-t-lg" src={cate5} alt="product image" />
                        </a>
                        <div className="px-5 text-center">
                            <a href="#">
                                <h5 className="text-base font-bold tracking-tight text-nowrap text-center hover:text-green-600">Custard apple</h5>
                                <span className='text-nowrap'>72 items</span>
                            </a>
                        </div>
                    </div>
                    <div className="rounded-lg px-4 border-2 hover:shadow-lg hover:border-green-500 bg-red-100 h-48">
                        <a href="#" className='d-flex justify-center align'>
                            <img className=" rounded-t-lg" src={cate9} alt="product image" />
                        </a>
                        <div className="px-5 text-center">
                            <a href="#">
                                <h5 className="text-base font-bold tracking-tight text-nowrap text-center hover:text-green-600">Red apple</h5>
                                <span className='text-nowrap'>72 items</span>
                            </a>
                        </div>
                    </div>
                    <div className="rounded-lg px-4 border-2 hover:shadow-lg hover:border-green-500 bg-orange-100 h-48">
                        <a href="#" className='d-flex justify-center align'>
                            <img className=" rounded-t-lg" src={cate11} alt="product image" />
                        </a>
                        <div className="px-5 text-center">
                            <a href="#">
                                <h5 className="text-base font-bold tracking-tight text-nowrap text-center hover:text-green-600">Peach</h5>
                                <span className='text-nowrap'>72 items</span>
                            </a>
                        </div>
                    </div>
                    <div className="rounded-lg px-4 border-2 hover:shadow-lg hover:border-green-500 bg-green-100 h-48">
                        <a href="#" className='d-flex justify-center align'>
                            <img className=" rounded-t-lg" src={cate12} alt="product image" />
                        </a>
                        <div className="px-5 text-center">
                            <a href="#">
                                <h5 className="text-base font-bold tracking-tight text-nowrap text-center hover:text-green-600">Organic kiwi</h5>
                                <span className='text-nowrap'>72 items</span>
                            </a>
                        </div>
                    </div>
                    <div className="rounded-lg px-4 border-2 hover:shadow-lg hover:border-green-500 bg-amber-100 h-48">
                        <a href="#" className='d-flex justify-center align'>
                            <img className=" rounded-t-lg" src={cate14} alt="product image" />
                        </a>
                        <div className="px-5 text-center">
                            <a href="#">
                                <h5 className="text-base font-bold tracking-tight text-nowrap text-center hover:text-green-600">Cofee & Tea </h5>
                                <span className='text-nowrap'>72 items</span>
                            </a>
                        </div>
                    </div>



                </div>
            </div>

            <div className="relative row px-5 my-10">
                <div className="relative col-lg-4 my-2">
                    <div className="card text-bg-dark border-0">
                        <img src={banner1} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title px-10 pt-5 text-2xl font-bold text-black animate-bounce lg:text-2xl md:text-sm">Everyday Fresh & Clean with Our Products</h5>
                            <a href="#" className="btn btn-lg bg-green-500 hover:bg-yellow-500 text-white mx-10">Show More</a>
                        </div>
                    </div>
                </div>
                <div className="relative col-lg-4 my-2">
                    <div className="card text-bg-dark border-0">
                        <img src={banner2} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title px-10 pt-5 text-2xl font-bold text-black lg:pt-0 animate-bounce lg:text-2xl md:text-sm">Make your Breakfast Healthy and <br></br>Easy</h5>
                            <a href="#" className="btn btn-lg bg-green-500 hover:bg-yellow-500 text-white mx-10">Show More</a>
                        </div>
                    </div>
                </div>
                <div className="relative col-lg-4 my-2">
                    <div className="card text-bg-dark border-0">
                        <img src={banner3} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title px-10 pt-5 text-2xl font-bold text-black animate-bounce lg:text-2xl md:text-sm">The best Organic Products Online</h5>
                            <a href="#" className="btn btn-lg bg-green-500 hover:bg-yellow-500 text-white mx-10">Show More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}