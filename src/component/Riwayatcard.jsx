import React from 'react'

const Riwayatcard = ({ nama, tanggal }) => {
    return (
        <tbody>
        <tr>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
                   
                    <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                           {nama}
                        </p>
                    </div>
                </div>
            </td>

            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                   {tanggal}
                </p>
            </td>

        </tr>
        </tbody>

    )
}

export default Riwayatcard
