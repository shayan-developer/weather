import React from 'react'
import Footer from '../Footer'
import Menu from '../Menu/Menu'
import "../Styles/Layout.css"
function Layout({ children }) {
    return (
        <div className="container-fluid layout" >
            <Menu />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
