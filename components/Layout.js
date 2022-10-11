import React from 'react'

import dynamic from 'next/dynamic'
const Header = dynamic(() => import("./Header"), { ssr: false }); 
const Footer = dynamic(() => import("./Footer"), { ssr: false }); 

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
