import React from 'react'
import './home.css'


function Home() {
    return (
        <div classNameNameName="main">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>
                    <a className="navbar-brand" href="#">ThinkLabs</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Trang chủ <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Về chúng tối</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">R & D</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sản phẩm
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">tRadar</a>
                                    <a className="dropdown-item" href="#">THospital</a>
                                    <a className="dropdown-item" href="#">CLINIC</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Đối tác</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tuyển dụng</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tin tức</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/*carousel*/}
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className='banner' style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/background.jpg'})`}}></div>

                    </div>
                    <div class="carousel-item">
                    <div className='banner' style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/chim.jpg'})`}}></div>
                    </div>
                    <div class="carousel-item">
                    <div className='banner' style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/dep3.jpg'})`}}></div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>


    )
}

export default Home
