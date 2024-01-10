import React from 'react';

function Animate() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8 flex flex-col lg:flex-row">
      {/* <img src="https://cdn.pixabay.com/photo/2020/11/01/21/45/architecture-5705042_1280.jpg" alt="" className="fixed  inset-0 -z-10 h-full w-full object-cover object-right md:object-center"/> */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32 lg:w-1/2">
          <div className="hidden sm:mb-8 sm:flex justify-start">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding. <a href="/" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <div className="justify-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Data to enrich your online business</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
            <div className="mt-10 flex items-center justify-start gap-x-6">
              <a href="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
              <a href="/" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32 lg:w-1/2">
          <img className="object-cover w-full h-full" src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9b7ede174527529.64a42303725e6.jpg" alt="slow network" />
        </div>

      </div>
    </div>
  );
}

export default Animate;
