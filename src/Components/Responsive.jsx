// import { AnimatePresence, motion } from 'framer-motion';

// const Responsive = ({ isMenuOpen }) => {
//     return (
//         <AnimatePresence>
//             {isMenuOpen && (
//                 <motion.div
//                     // Animate from top and fade in
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.3 }}
//                     className="absolute top-20 left-0 w-full h-screen bg-orange-500 z-10 flex justify-center items-start pt-10"
//                 >
//                     <div className='text-xl font-semibold uppercase text-white'>
//                         <ul className="space-y-6 text-center">
//                             <li className="hover:text-black cursor-pointer">Home</li>
//                             <li className="hover:text-black cursor-pointer">About</li>
//                             <li className="hover:text-black cursor-pointer">Services</li>
//                             <li className="hover:text-black cursor-pointer">Contact</li>
//                         </ul>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// };

// export default Responsive;
