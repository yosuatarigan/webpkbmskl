import React from 'react'
import Imagenya from '../Image/hero.png'


const Menuutama = () => {
    return (
        <div>
            <div class="pt-24">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p class="uppercase tracking-loose w-full">PKBM Hanuba Medan</p>
          <h1 class="my-4 text-5xl font-bold leading-tight">
            Aplikasi SKL PKBM Hanuba Medan
          </h1>
          <p class="leading-normal text-2xl mb-8">
            Mempermudah Pengelolaan SKL
          </p>
         
          
        </div>
        <div class="w-full md:w-3/5 py-6 text-center">
          <img class="w-full md:w-4/5 z-50" src={Imagenya} />
        </div>
      </div>
    </div>
        </div>
    )
}

export default Menuutama
