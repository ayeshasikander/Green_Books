import React from 'react';

const Intro = () => {
  return (
    <div className="bg-gray relative">
        <div className="mx-auto max-w-2xl py-5 sm:py-10 lg:py-20 lg:w-1/2">
          <div className="text-center px-5">
            <h1 className="font-italianno tracking-wide	 text-6xl font-medium	 text-white sm:text-6xl">Data to enrich your online business</h1>
            <p className="mt-3 text-lg leading-8 text-white">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
            <div className="mt-5 flex items-center justify-center gap-x-6">
              <a href="/aboutUs" className="text-md font-semibold leading-6 text-[#3d2312]">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
       
      </div>

  )
}

export default Intro;
