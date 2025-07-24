import React from 'react';

const Starting = () => {
    const steps = [
        {
            title: 'Explore Our Service',
            desc: 'Start by browsing our wide range of services (like poster making, website development, reels video, photoframe, and farewell frames) and document printing services from the list given.'
        },
        {
            title: 'Upload Your Documents',
            desc: 'Upload high-resolution photos or scans of your documents directly on our website. You can upload any format.'
        },
        {
            title: 'Place Your Order',
            desc: 'Add your delivery details and pay securely online.'
        },
        {
            title: 'Receive your PVC Cards',
            desc: 'We will process your order and ship the photocopies to your address. It’s that simple!'
        }
    ];

    return (
        <section className='py-10 bg-white'>
            <div className='2xl:container mx-auto'>
                <div className='w-[90%] mx-auto flex flex-col items-center'>
                    
                    {/* Heading Section */}
                    <div className='text-center mb-10'>
                        <h1 className='font-[poppins] text-black font-bold text-4xl mb-4'>
                            How we work?
                        </h1>
                        <div className='h-1 w-20 bg-orange-400 mx-auto rounded-full'></div>
                    </div>

                    {/* Cards Section */}
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {steps.map((item, idx) => (
                            <div
                                key={idx}
                                className='bg-orange-300 flex flex-col justify-center items-center text-center p-6 rounded-2xl 
                                shadow-md hover:scale-[1.03] transition-transform duration-300'
                            >
                                <h2 className='font-bold text-xl mb-2'>{item.title}</h2>
                                <p className='font-[poppins] text-black text-[15px] font-light'>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Starting;
