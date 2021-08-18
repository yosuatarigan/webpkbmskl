import React from 'react'
import { adddatacustomid } from '../firebase.utils';
const { formatFullDate, formatDate } = require('node-format-date');


const Inputdata = () => {

    const dataaawal = {

        nama: '',
        tempatlahir: '',
        tanggallahir: '',
        namaorangtua: '',
        nisn: '',
        nis: '',
        npsn: '',
        paketsekolah: '',
        nilai: {}
    }

    const [datadaftar, setdatadaftar] = React.useState(dataaawal)


    const resetdata = () => {
        setdatadaftar(dataaawal)
    }

    const handleupload = async (e) => {
        // const storageRef = firebase.storage().ref(`images/${datadaftar.cover.name}`)
        // await storageRef.put(cover)
        // const data =  await storageRef.getDownloadURL()
        const tgldaftar = new Date();
        if (datadaftar.nama &&
            datadaftar.tempatlahir &&
            datadaftar.tanggallahir &&
            datadaftar.namaorangtua &&
            datadaftar.nisn &&
            datadaftar.nis &&
            datadaftar.nilai &&
            datadaftar.paketsekolah !== "") {
            adddatacustomid('datawargabelajar', datadaftar.nisn, { ...datadaftar, tgldaftar: tgldaftar })
            resetdata()
            alert('data sudah ditambah')
            // pdfgenerator()


        }
        else {

            alert("data belum lengkap")
        }
    }
    



    return (
        <div>
            <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    {/* <h3 class="font-bold text-2xl">Welcome to Menu SKL PKBM Hanuba Medan</h3> */}
                    <p class="text-gray-600 pt-2">Input Data Warga Belajar</p>
                </section>

                <section class="mt-10">
                    <div class="flex flex-col" method="POST" action="#">
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="label-input" for="email">Nama</label>
                            <input type="text" required  onChange={(e) => setdatadaftar({ ...datadaftar, nama: e.target.value })} id="nama" class="input-field" />
                        </div>
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="label-input" for="email">Tempat Lahir</label>
                            <input type="text" onChange={(e) => setdatadaftar({ ...datadaftar, tempatlahir: e.target.value })} id="nama" class="input-field" />
                        </div>
                       
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="label-input" for="email">Tanggal Lahir</label>
                            <input type="date" onChange={(e) => setdatadaftar({ ...datadaftar, tanggallahir: formatDate(e.target.value) })} id="nama" class="input-field" />
                        </div>
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="label-input" for="email">Nama Orang Tua</label>
                            <input type="text" onChange={(e) => setdatadaftar({ ...datadaftar, namaorangtua: e.target.value })} id="nama" class="input-field" />
                        </div>
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="label-input" for="email">NISN</label>
                            <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nisn: e.target.value })} id="nama" class="input-field" />
                        </div>
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="label-input" for="email">NIS</label>
                            <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nis: e.target.value })} id="nama" class="input-field" />
                        </div>
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="label-input" for="email">NPSN</label>
                            <input type="text" onChange={(e) => setdatadaftar({ ...datadaftar, npsn: e.target.value })} id="nama" class="input-field" />
                        </div>
                        <div class="md:flex mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-select">
                                    Paket Sekolah
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <select name="paketsekolah" onChange={(e) => setdatadaftar({ ...datadaftar, paketsekolah: e.target.value })} class="form-select block w-full focus:bg-white" id="my-select">
                                    <option value={datadaftar.paketsekolah} >..</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C-IPA">C-IPA</option>
                                    <option value="C-IPS">C-IPS</option>
                                </select>
                            </div>
                        </div>
                        {
                            datadaftar.paketsekolah === "A" ?
                                <div>
                                    <div class="mb-6 pt-3 rounded bg-gray-200">
                                        <label class="label-input" for="email">PKN</label>
                                        <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, pkn: {nilainya : e.target.value, mp : 'Pendidikan Kewarganegaraan', no: 1} } })} id="nama" class="input-field" />
                                    </div>
                                    <div class="mb-6 pt-3 rounded bg-gray-200">
                                        <label class="label-input" for="email">Bahasa Indonesia</label>
                                        <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, bahasaindonesia: {nilainya : e.target.value, mp : 'Bahasa Indonesia', no: 2} } })} id="nama" class="input-field" />
                                    </div>
                                    <div class="mb-6 pt-3 rounded bg-gray-200">
                                        <label class="label-input" for="email">Matematika</label>
                                        <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, matematika: {nilainya : e.target.value, mp : 'Matematika', no: 3} } })} id="nama" class="input-field" />
                                    </div>
                                    <div class="mb-6 pt-3 rounded bg-gray-200">
                                        <label class="label-input" for="email">IPA</label>
                                        <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, ipa: {nilainya : e.target.value, mp : 'IPA', no: 4} } })} id="nama" class="input-field" />
                                    </div>
                                    <div class="mb-6 pt-3 rounded bg-gray-200">
                                        <label class="label-input" for="email">IPS</label>
                                        <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, ips: {nilainya : e.target.value, mp : 'IPS', no: 5} } })} id="nama" class="input-field" />
                                    </div>

                                </div>
                                : datadaftar.paketsekolah === "B" ?
                                    <div>
                                        <div class="mb-6 pt-3 rounded bg-gray-200">
                                            <label class="label-input" for="email">Agama</label>
                                            <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, agama: {nilainya : e.target.value, mp : 'Agama', no: 1} } })} id="nama" class="input-field" />
                                        </div>
                                        <div class="mb-6 pt-3 rounded bg-gray-200">
                                            <label class="label-input" for="email">PKN</label>
                                            <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, pkn: {nilainya : e.target.value, mp : 'Pendidikan Kewarganegaraan', no: 2} } })} id="nama" class="input-field" />
                                        </div>
                                        <div class="mb-6 pt-3 rounded bg-gray-200">
                                            <label class="label-input" for="email">Bahasa Indonesia</label>
                                            <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, bahasaindonesia: {nilainya : e.target.value, mp : 'Bahasa Indonesia', no: 3} } })} id="nama" class="input-field" />
                                        </div>
                                        <div class="mb-6 pt-3 rounded bg-gray-200">
                                            <label class="label-input" for="email">Matematika</label>
                                            <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, matematika: {nilainya : e.target.value, mp : 'Matematika', no: 4} } })} id="nama" class="input-field" />
                                        </div>
                                        <div class="mb-6 pt-3 rounded bg-gray-200">
                                            <label class="label-input" for="email">Bahasa inggris</label>
                                            <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, bahasainggris: {nilainya : e.target.value, mp : 'Bahasa Inggris', no: 5} } })} id="nama" class="input-field" />
                                        </div>
                                        <div class="mb-6 pt-3 rounded bg-gray-200">
                                            <label class="label-input" for="email">IPA</label>
                                            <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, ipa: {nilainya : e.target.value, mp : 'IPA', no: 6} } })} id="nama" class="input-field" />
                                        </div>
                                        <div class="mb-6 pt-3 rounded bg-gray-200">
                                            <label class="label-input" for="email">IPS</label>
                                            <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, ips: {nilainya : e.target.value, mp : 'IPS', no: 7} } })} id="nama" class="input-field" />
                                        </div>
                                    </div>
                                    : datadaftar.paketsekolah === "C-IPS" ?
                                        <div>
                                            <div class="mb-6 pt-3 rounded bg-gray-200">
                                                <label class="label-input" for="email">Agama</label>
                                                <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, agama: {nilainya : e.target.value, mp : 'Agama', no: 1} } })} id="nama" class="input-field" />
                                            </div>
                                            <div class="mb-6 pt-3 rounded bg-gray-200">
                                                <label class="label-input" for="email">PKN</label>
                                                <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, pkn: {nilainya : e.target.value, mp : 'Pendidikan Kewarganegaraan', no: 2} } })} id="nama" class="input-field" />
                                            </div>
                                            <div class="mb-6 pt-3 rounded bg-gray-200">
                                                <label class="label-input" for="email">Bahasa Indonesia</label>
                                                <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, bahasaindonesia: {nilainya : e.target.value, mp : 'Bahasa Indonesia', no: 3} } })} id="nama" class="input-field" />
                                            </div>
                                            <div class="mb-6 pt-3 rounded bg-gray-200">
                                                <label class="label-input" for="email">Bahasa Inggris</label>
                                                <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, bahasainggris: {nilainya : e.target.value, mp : 'Bahasa Inggris', no: 4} } })} id="nama" class="input-field" />
                                            </div>
                                            <div class="mb-6 pt-3 rounded bg-gray-200">
                                                <label class="label-input" for="email">Ekonomi</label>
                                                <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, ekonomi: {nilainya : e.target.value, mp : 'Ekonomi', no: 5} } })} id="nama" class="input-field" />
                                            </div>
                                            <div class="mb-6 pt-3 rounded bg-gray-200">
                                                <label class="label-input" for="email">Geografi</label>
                                                <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, geografi: {nilainya : e.target.value, mp : 'Geografi', no: 6} } })} id="nama" class="input-field" />
                                            </div>
                                            <div class="mb-6 pt-3 rounded bg-gray-200">
                                                <label class="label-input" for="email">Sosiologi</label>
                                                <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, sosiologi: {nilainya : e.target.value, mp : 'Sosiologi', no: 7} } })} id="nama" class="input-field" />
                                            </div>
                                            <div class="mb-6 pt-3 rounded bg-gray-200">
                                                <label class="label-input" for="email">Matematika</label>
                                                <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, matematika: {nilainya : e.target.value, mp : 'Matematika', no: 8} } })} id="nama" class="input-field" />
                                            </div>
                                            <div class="mb-6 pt-3 rounded bg-gray-200">
                                                <label class="label-input" for="email">Seni Budaya</label>
                                                <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, senibudaya: {nilainya : e.target.value, mp : 'Seni Budaya', no: 9} } })} id="nama" class="input-field" />
                                            </div>
                                            <div class="mb-6 pt-3 rounded bg-gray-200">
                                                <label class="label-input" for="email">PJOK</label>
                                                <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, pjok: {nilainya : e.target.value, mp : 'PJOK', no: 10} } })} id="nama" class="input-field" />
                                            </div>
                                            <div class="mb-6 pt-3 rounded bg-gray-200">
                                                <label class="label-input" for="email">Mulok</label>
                                                <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, mulok: {nilainya : e.target.value, mp : 'Mulok', no: 11} } })} id="nama" class="input-field" />
                                            </div>
                                        </div>
                                        : datadaftar.paketsekolah === "C-IPA" ?
                                            <div>
                                                <div class="mb-6 pt-3 rounded bg-gray-200">
                                                    <label class="label-input" for="email">Agama</label>
                                                    <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, agama: {nilainya : e.target.value, mp : 'Agama', no: 1} } })} id="nama" class="input-field" />
                                                </div>
                                                <div class="mb-6 pt-3 rounded bg-gray-200">
                                                    <label class="label-input" for="email">PKN</label>
                                                    <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, pkn: {nilainya : e.target.value, mp : 'Pendidikan Kewarganegaraan', no: 2} } })} id="nama" class="input-field" />
                                                </div>
                                                <div class="mb-6 pt-3 rounded bg-gray-200">
                                                    <label class="label-input" for="email">Bahasa Indonesia</label>
                                                    <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, bahasaindonesia: {nilainya : e.target.value, mp : 'Bahasa Indonesia', no: 3} } })} id="nama" class="input-field" />
                                                </div>
                                                <div class="mb-6 pt-3 rounded bg-gray-200">
                                                    <label class="label-input" for="email">Bahasa Inggris</label>
                                                    <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, bahasainggris: {nilainya : e.target.value, mp : 'Bahasa Inggris', no: 4} } })} id="nama" class="input-field" />
                                                </div>
                                                <div class="mb-6 pt-3 rounded bg-gray-200">
                                                    <label class="label-input" for="email">Biologi</label>
                                                    <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, biologi: {nilainya : e.target.value, mp : 'Biologi', no: 5} } })} id="nama" class="input-field" />
                                                </div>
                                                <div class="mb-6 pt-3 rounded bg-gray-200">
                                                    <label class="label-input" for="email">Kimia</label>
                                                    <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, kimia: {nilainya : e.target.value, mp : 'Kimia', no: 6} } })} id="nama" class="input-field" />
                                                </div>
                                                <div class="mb-6 pt-3 rounded bg-gray-200">
                                                    <label class="label-input" for="email">Fisika</label>
                                                    <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, fisika: {nilainya : e.target.value, mp : 'Fisika', no: 7} } })} id="nama" class="input-field" />
                                                </div>
                                                <div class="mb-6 pt-3 rounded bg-gray-200">
                                                    <label class="label-input" for="email">Matematika</label>
                                                    <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, matematika: {nilainya : e.target.value, mp : 'Matematika', no: 8} } })} id="nama" class="input-field" />
                                                </div>
                                                <div class="mb-6 pt-3 rounded bg-gray-200">
                                                    <label class="label-input" for="email">Seni Budaya</label>
                                                    <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, senibudaya: {nilainya : e.target.value, mp : 'Seni Budaya', no: 9} } })} id="nama" class="input-field" />
                                                </div>

                                                <div class="mb-6 pt-3 rounded bg-gray-200">
                                                    <label class="label-input" for="email">PJOK</label>
                                                    <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, pjok: {nilainya : e.target.value, mp : 'PJOK', no: 10} } })} id="nama" class="input-field" />
                                                </div>
                                                <div class="mb-6 pt-3 rounded bg-gray-200">
                                                    <label class="label-input" for="email">Mulok</label>
                                                    <input type="number" onChange={(e) => setdatadaftar({ ...datadaftar, nilai: { ...datadaftar.nilai, mulok: {nilainya : e.target.value, mp : 'Mulok', no: 11} } })} id="nama" class="input-field" />
                                                </div>
                                            </div>
                                            : null

                        }

                        {/* <div class="flex justify-end">
                    <a href="#" class="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</a>
                </div> */}
                        <button onClick={()=>handleupload()} class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Submit</button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Inputdata
