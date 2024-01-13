import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const Review = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto">
                <div className="flex flex-col items-center text-center justify-center mx-auto mt-10  max-w-2xl gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div className="mx-auto mt-14 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Reviews</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
                    </div>
                    <SwiperContainer>
                        <Swiper
                            spaceBetween={30}
                            effect={'fade'}
                            // navigation={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, EffectFade, Navigation, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <article className="flex max-w-xl flex-col justify-center m-5">
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                                        <a href="/" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a href="/">
                                                <span className="absolute inset-0"></span>
                                                Engaging visuals amazing
                                            </a>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">The use of engaging visuals, including book covers and author images, adds a personal touch to the website. The ability to preview excerpts or sample chapters is a fantastic feature, allowing users to get a feel for the content before making a purchase.</p>
                                    </div>
                                    <div className="relative mt-8 flex justify-end items-end gap-x-4">
                                        <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-gray-900">
                                                <a href="/">
                                                    <span className="absolute inset-0"></span>
                                                    Michael Foster
                                                </a>
                                            </p>
                                            <p className="text-gray-600">Co-Founder / CTO</p>
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                            <SwiperSlide>
                                <article className="flex max-w-xl flex-col `     justify-between m-5">
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                                        <a href="/" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a href="/">
                                                <span className="absolute inset-0"></span>
                                                Efficient Search
                                            </a>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                            The search functionality and filters are efficient, making it easy to narrow down choices based on genres, authors, or other criteria. This feature significantly enhances the overall usability of the platform.</p>
                                    </div>
                                    <div className="relative mt-8 flex justify-end items-end gap-x-4">
                                        <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-gray-900">
                                                <a href="/">
                                                    <span className="absolute inset-0"></span>
                                                    Michael Foster
                                                </a>
                                            </p>
                                            <p className="text-gray-600">Co-Founder / CTO</p>
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                            <SwiperSlide>
                                <article className="flex max-w-xl flex-col  justify-between m-5">
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                                        <a href="/" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a href="/">
                                                <span className="absolute inset-0"></span>
                                                User-Friendly Design
                                            </a>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                            The website's design is not only aesthetically pleasing but also incredibly user-friendly. Navigating through different sections and finding the information I needed was a breeze. The intuitive layout made my browsing experience enjoyable.</p>
                                    </div>
                                    <div className="relative mt-8 flex justify-end items-end gap-x-4">
                                        <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-gray-900">
                                                <a href="/">
                                                    <span className="absolute inset-0"></span>
                                                    Michael Foster
                                                </a>
                                            </p>
                                            <p className="text-gray-600">Co-Founder / CTO</p>
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                            <SwiperSlide>
                                <article className="flex max-w-xl flex-col  justify-between m-5">
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                                        <a href="/" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a href="/">
                                                <span className="absolute inset-0"></span>
                                                Rich Content and Variety
                                            </a>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                            Your collection of books is impressive, and I appreciate the wide variety of genres available. The detailed descriptions and author information provided for each book are helpful in making informed decisions. It's evident that there's a thoughtful curation of content.</p>
                                    </div>
                                    <div className="relative mt-8 flex justify-end items-end gap-x-4">
                                        <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-gray-900">
                                                <a href="/">
                                                    <span className="absolute inset-0"></span>
                                                    Michael Foster
                                                </a>
                                            </p>
                                            <p className="text-gray-600">Co-Founder / CTO</p>
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                        </Swiper>
                    </SwiperContainer>

                </div>
            </div>
        </div>

    )
}
const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .mySwiper {
    width: 100%;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-size: cover;
    background-color: #CABDB6;
    height: 100%;
    width: 100%;
  }
  .swiper-pagination-bullet {
    background-color: #78523D;
  }

`;

export default Review
