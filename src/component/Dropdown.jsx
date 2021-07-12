import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div>
            <div className={isOpen ? ' grid grid-rows-4 text-center items-center bg-blue-500 text-white' : 'hidden'} onClick={toggle}>
                <Link className="p-4" to="/">Beranda</Link>
                <Link className="p-4" to="/skl">SKL</Link>
                <Link className="p-4" to="/validasi">Validasi SKL</Link>
                <Link className="p-4" to="/input">Input Data</Link>
                <Link className="p-4" to="/riwayat">Riwayat</Link>
                <Link className="p-4" to="/contact">Logout</Link>
            </div>
        </div>
    )
}

export default Dropdown
