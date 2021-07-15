import React from "react";
import { NavLink } from "react-router-dom";



const Home = () => {
    return (
        <div>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 mt-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        Grow your Business with Shrishti.
                                    </h1>
                                    <h2 className="my-3">
                                        We are the team of devloper making website
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to="" className="btn-get-started">Get Started</NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid">
                   <div className="row">
                       <div className="container col-12 col-sm-6 col-md-8">
                          <div className="row">
                           <div className="col-md-1 p-2">All Posts</div>
                           <div className="col-md-1 p-2">Article</div>
                           <div className="col-md-1 p-2">Event</div>
                           <div className="col-md-2 p-2">Education</div>
                           <div className="col-md-2 p-2">Job</div>
                       
                       
                          <div className="container col-12 col-sm-6 col-md-2 mr-2 p-2">
                            <button className="btn btn-secondary dropdown-toggle ml-auto" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Write a Post
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                            
                            </div>
                            <div className="container col-12 col-sm-6 col-md-2 p-2"><button className="btn btn-primary">Overview</button></div>
                            
                            </div>
                        
                        </div>

                    
                   </div>
                </div>
            </section>
            <section>
            <div className="col-12 col-sm-6 col-md-8">
                <div className="container mt-4 mb-5">
                    <div className="d-flex justify-content-center row">
                        <div className="col-md-8">
                            <div className="feed p-2">
                                <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white border">
                                    <div className="feed-text px-2">
                                        <h6 className="text-black-50 mt-2">What's on your mind</h6>
                                    </div>
                                    <div className="feed-icon px-2"><i className="fa fa-long-arrow-up text-black-50"></i></div>
                                </div>
                                <div className="bg-white border mt-2">
                                    <div>
                                        <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                                            <div className="d-flex flex-row align-items-center feed-text px-2"><img class="rounded-circle" src="https://i.imgur.com/aoKusnD.jpg" width="45"/>
                                                <div className="d-flex flex-column flex-wrap ml-2"><span className="font-weight-bold">Thomson ben</span><span className="text-black-50 time">40 minutes ago</span></div>
                            </div>
                                                <div className="feed-icon px-2"><i className="fa fa-ellipsis-v text-black-50"></i></div>
                                            </div>
                                        </div>
                                        <div className="p-2 px-3"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                                        <div className="d-flex justify-content-end socials p-2 py-3"><i className="fa fa-thumbs-up"></i><i className="fa fa-comments-o"></i><i className="fa fa-share"></i></div>
                                    </div>
                                    <div className="bg-white border mt-2">
                                        <div>
                                            <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                                                <div className="d-flex flex-row align-items-center feed-text px-2"><img className="rounded-circle" src="https://i.imgur.com/aoKusnD.jpg" width="45" />
                                                    <div className="d-flex flex-column flex-wrap ml-2"><span className="font-weight-bold">Thomson ben</span><span className="text-black-50 time">40 minutes ago</span></div>
                            </div>
                                                    <div className="feed-icon px-2"><i class="fa fa-ellipsis-v text-black-50"></i></div>
                                                </div>
                                            </div>
                                            <div className="feed-image p-2 px-3"><img class="img-fluid img-responsive" src="https://i.imgur.com/aoKusnD.jpg" /></div>
                                                <div className="d-flex justify-content-end socials p-2 py-3"><i className="fa fa-thumbs-up"></i><i className="fa fa-comments-o"></i><i className="fa fa-share"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-6 col-md-4">

                            </div>
            </section>
                    </div>


                    );
};


                    export default Home;