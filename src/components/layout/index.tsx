import React, { ReactComponentElement, ReactElement, ReactNode } from "react";
import Footer from "../footer";
import Navbar from "../navbar";
import SideBar from "../sidebar";



const Layout = ({children}: {children: ReactNode}) => {
    return (props: any) => {
        return (
            <>
                <div className="row">
                    <div className="col-md-3">
                        <SideBar />
                    </div>
                    <div className="col-md-9">
                        <div className="main">
                            <Navbar />
                            {
                                children
                            }
                            <Footer />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Layout;