import React from 'react'

const OurServices = () => {
    const [stopScroll, setStopScroll] = React.useState(false);
    const cardData = [
        {
            title: "Unlock  to elevate your business via websites",
            btn: "Website building",
            image: "./website.jpg"
        },
        {
            title: "Design Your Digital Future",
            btn: "Poster Editing",
            image: "https://images.unsplash.com/photo-1529254479751-faeedc59e78f?w=1200&auto=format&fit=crop&q=60",
        },
        {
            title: "Build with Passion, Ship with Pride",
            btn: "Reels & Video Edit",
            image: "https://images.unsplash.com/photo-1618327907215-4e514efabd41?w=1200&auto=format&fit=crop&q=60",
        },
        {
            title: "Think Big, Code Smart",
            btn: "Photoframe",
            image: "https://images.unsplash.com/photo-1583407723467-9b2d22504831?w=1200&auto=format&fit=crop&q=60",
        },
        {
            title: "Tamilaga Vetri kalagam",
            btn: "TVK Membership card ",
            image: "./TVK.png",
        },
    ];



    return (
        <>
            <style>{`
                    .marquee-inner {
                        animation: marqueeScroll linear infinite;
                    }

                    @keyframes marqueeScroll {
                        0% {
                            transform: translateX(0%);
                        }

                        100% {
                            transform: translateX(-50%);
                        }
                    }
                `}</style>

            <div className='py-10 text-black'>
                <h1 className=' font-[poppins] text-black font-bold text-4xl mb-4 text-center'>
                    Our Services
                </h1>
            </div>
            <div className="overflow-hidden w-full relative max-w-6xl mx-auto" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
                <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: cardData.length * 5000 + "ms" }}>
                    <div className="flex">

                        {[...cardData, ...cardData].map((card, index) => (
                            <div key={index} className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300">
                                <img src={card.image} alt="card" className="w-full h-full object-cover" />
                                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 
                                transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full
                                bg-black/20">
                                    <p className="text-white text-lg font-semibold text-center cursor-pointer">
                                        {card.title}
                                    </p>

                                </div>
                                <div class="absolute bottom-2 flex items-center justify-around backdrop-blur-sm
                                w-full max-w-72 rounded bg-white/10 border border-white/20 py-2 cursor-pointer">
                                    <button type="button" class=" rounded-full px-6 py-1.5 text-black shadow">
                                        {card.btn}

                                    </button>
                                </div>
                                

                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
            </div>
        </>
    );
};


export default OurServices