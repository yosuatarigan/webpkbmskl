import React from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../firebase.utils';

const Navbar = ({ toggle }) => {
    const handlesignout = () => {
        auth.signOut()
    }
    return (
        <nav className='sticky top-0 z-50 flex justify-between items-center h-16 bg-blue-400 text-white shadow-sm font-mono'
            role='navigation'>
            <Link to="/" className='pl-8'>PKBM Hanuba Medan</Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="p-4" to="/">Beranda</Link>
                <Link className="p-4" to="/skl">SKL</Link>
                <Link className="p-4" to="/validasi">Validasi SKL</Link>
                <Link className="p-4" to="/input">Input Data</Link>
                <Link className="p-4" to="/riwayat">Riwayat</Link>
                <button className="p-4" onClick={handlesignout} >Logout</button>
            </div>
        </nav>
    )
}

export default Navbar;
