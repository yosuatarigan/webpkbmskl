import React from 'react';
import Cardriwayat from './Riwayatcard';


const Cardlist = ({data})=>{
    return(
        data.map((user, i) => {
            return (
               
                <Cardriwayat
                    nama={data[i].nama}
                   tanggal={data[i].tanggal}
                />
                
            );
        })
    )
}

export default Cardlist;