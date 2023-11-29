import { Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./home.js"
import SignIn from "./users/signin";

function Project() {
    return (
        <div className="container-fluid">
            <h1>Project</h1>
            <div className="row">
                <div className="col-3">
                    <div className="list-group">
                        <Link to="/project/signin" className="list-group-item">
                            Signin
                        </Link>
                        <Link to="/project/home" className="list-group-item">
                            Home
                        </Link>
                        {/*<Link to="/project/account" className="list-group-item">
                            Account
                        </Link>
                        <Link to="/project/users" className="list-group-item">
                            Users
                        </Link>*/}
                    </div>
                </div>
                <div className="col-9">
                    <Routes>
                        <Route path="/" element={<Navigate to="signin" />}/>
                        <Route path="signin" element={<SignIn />} />
                        <Route path= "home" element={<Home/>}/>
                        {/*<Route path="/account" element={<Account />} />
                        <Route path="/users" element={<UserList />} />
                        <Route path="/users/:id" element={<UserDetails />} />*/}
                    </Routes>
                </div>
            </div>
        </div>

    );
}

export default Project;