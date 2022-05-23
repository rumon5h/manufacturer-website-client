import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
            <h2 className='text-gray-900 font-bold text-2xl my-5 mx-auto w-[fit-content]'>Business Summary</h2>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-5 mx-auto">
                    <div class="flex flex-wrap -m-4 text-center">
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
                            <p class="leading-relaxed">Customers</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">100.8K</h2>
                            <p class="leading-relaxed">Tools</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">120M</h2>
                            <p class="leading-relaxed">Annual revenue</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">33K</h2>
                            <p class="leading-relaxed">Reviews</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BusinessSummary;