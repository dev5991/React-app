import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-md-12">

            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-1">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">ATG⚽WORLD</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    
  
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline col-md-4 col-sm-6 ml-auto my-2 my-lg-0">
                    
                    
                         <input className="form-control-lg col-sm-15" type="search" placeholder="🔍Search " aria-label="Search" />
                       
                    </form>

                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        
                            <li className="nav-item">
                            <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Create Account <em>It's free</em></button>
<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-lg">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                    ×</button>
                <h4 className="modal-title" id="myModalLabel">
                    Login/Registration - <a href="http://www.jquery2dotnet.com">ATG-World</a></h4>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col-md-8">
                    
                        <ul className="nav nav-tabs">
                            <li className="active m-1 p-2"><a href="#Login" data-toggle="tab">Login</a></li>
                            <li className="m-1 p-2"><a href="#Registration" data-toggle="tab">Registration</a></li>
                        </ul>
                        
                        <div className="tab-content">
                            <div className="tab-pane active" id="Login">
                                <form role="form" className="form-horizontal">
                                <div className="form-group">
                                    <label for="email" className="col-sm-2 control-label">
                                        Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="email1" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1" className="col-sm-2 control-label">
                                        Password</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                    </div>
                                    <div className="col-sm-10">
                                        <button type="submit" className="btn btn-primary btn-sm">
                                            Submit</button>
                                        <a href="javascript:;">Forgot your password?</a>
                                    </div>
                                </div>
                                </form>
                            </div>
                            <div className="tab-pane" id="Registration">
                                <form role="form" className="form-horizontal">
                                <div className="form-group">
                                    <label for="email" className="col-sm-2 control-label">
                                        Name</label>
                                    <div className="col-sm-10">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <select className="form-control">
                                                    <option>Mr.</option>
                                                    <option>Ms.</option>
                                                    <option>Mrs.</option>
                                                </select>
                                            </div>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control" placeholder="Name" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="email" className="col-sm-2 control-label">
                                        Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="mobile" className="col-sm-2 control-label">
                                        Mobile</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="mobile" placeholder="Mobile" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="password" className="col-sm-2 control-label">
                                        Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" id="password" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                    </div>
                                    <div className="col-sm-10">
                                        <button type="button" className="btn btn-primary btn-sm">
                                            Save & Continue</button>
                                        <button type="button" className="btn btn-default btn-sm">
                                            Cancel</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                        <div id="OR" className="hidden-xs text-center">
                            OR</div>
                    </div>
                    <div className="col-md-4">
                        <div className="row text-center sign-with">
                            <div className="col-md-12">
                                <h3>
                                    Sign in with</h3>
                            </div>
                            <div className="col-md-12">
                                <div className="btn-group btn-group-justified">
                                    <a href="#" className="btn btn-primary">Facebook</a> <a href="#" className="btn btn-danger">
                                        Google</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

                            </li>
                            
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>


                    </div>
                </div >
            </div >

        </div >

    );
 };

export default Navbar;