import React from 'react'
import { firestore } from '../firebase.utils';
import Cardlist from './Riwayatlist';


const Riwayat = () => {
    const [data, setdata] = React.useState([]);
    React.useEffect(() => {
        firestore.collection('riwayat').orderBy('tanggal')
            .onSnapshot((snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setdata(data)
            })
    }, [])

    console.log(data)
    return (

        <div class="antialiased font-sans bg-gray-200">
            <div class="container mx-auto px-4 sm:px-8">
                <div class="py-8">


                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Nama
                                        </th>

                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Tanggal Ambil
                                        </th>

                                    </tr>
                                </thead>
                               <Cardlist data={data}/>
                            </table>
                            <div
                                class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Riwayat
