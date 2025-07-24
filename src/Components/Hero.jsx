import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className='container grid grid-cols-1 md:grid-cols-2 
        min-h-[650px] relative px-10 py-10
        mx-auto'>
            <div className='flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0'>
                <div className='text-center md:text-left space-y-6'>
                    <p className='text-orange-600 uppercase font-semibold'>
                        100% Satisfaction Guarantee
                    </p>
                    <h1 className='text-5xl font-bold lg:text-6xl'>
                        Find your perfect <br />
                        <span className='text-orange-500'>
                            Tutor
                        </span>
                    </h1>
                    <p>
                        We help you find the perfect tutor for 1-on-1 lessons.
                        It is completely free and private.
                    </p>
                    <div className='flex flex-col-2 gap-8'>
                        <button className='bg-orange-500 rounded-3xl hover:bg-orange-00 p-2 cursor-pointer'>
                            Get Started
                        </button>
                        <button className='rounded-2xl border-2 border-orange-500 px-6 py-2 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300'>
                            See how it works
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col rounded-2xl justify-center items-center'>
        <motion.img
            src={assets.HeroImg}
            alt="printing image"
            className='w-[350px] md:w-[550px] xl:w-[700px] 
            justify-center items-center'
            whileHover={{ scale: 1.1, rotate: 0 }}
            
            initial={{ opacity: 0, y: 100 }}
            transition={{ type:"spring", stiffness:100,  delay: 0.2 }}
            animate={{opacity:0.9, y:0}}
        />
            </div>
        </div>
    )
}

export default Hero