import React from 'react';

{/* Importing Components */}
import ParticleBackground from '../components/CoolBg.jsx';


import noot from '../assets/nootnoot_photo.svg';

{/* Icons for Links */}
import github from '../assets/GITHUB.png';
import linkedin from '../assets/Linkedin (1).png';
import mail from '../assets/Mail.png';


function QPICalculator() {



    return (
        <div className='min-h-screen w-full flex lg:flex-col flex-col font-montserrat m-0 p-0 '>
            <ParticleBackground />
            <div className='lg:px-20 px-3'>
                
                <div className='flex lg:flex-col flex-col justify-center items-center  py-10 gap-3 text-white '>
                    <img src={noot} alt="nootnoot"/>
                    <h1 className='text-5xl font-light'>noot&milk's</h1>
                    <div className='flex justify-center items-center px-4 py-2 bg-pink-600 lg:w-50 rounded-md mb-15 '>
                        <h2 className='text-white text-md'>QPI Calculator</h2>                  
                    </div>


                    {/* Main Body */}
                    <div className='w-full min-h-screen flex lg:flex-row flex-col justify-start lg:items-start items-center gap-5 lg:p-5 pt-5 px-3 '>
                        
                        {/* Add Course and Reset Section */}
                        <div className='lg:w-1/2 w-full h-full flex flex-col border-teal-500 border-4 rounded-xl backdrop-blur-sm '>
                            <div class="w-full flex flex-row lg:justify-start justify-center lg:items-center items-start lg:p-10 p-5 gap-5">
                                <div class=' cursor-pointer lg:w-1/3 w-1/2 h-12 flex justify-center items-center px-3 py-1 bg-pink-600 rounded-xl hover:bg-pink-400  '>
                                    <p class='lg:text-xl text-sm'>+ Add Course</p>
                                </div>
                                <div class=' cursor-pointer lg:w-1/3 w-1/2 h-12 flex justify-center items-center px-3 py-1 bg-pink-600 rounded-xl hover:bg-pink-400'>
                                    <p class='lg:text-xl text-sm'>Reset</p>
                                </div>

                            </div>

                         {/* Course, Grades, Units Section */}
                            <div class='w-full flex flex-row lg:justify-start justify-center lg:items-center items-start lg:p-10 gap-5 p-5 '>
                                <div class='w-1/3 flex justify-center text-center px-3 py-1 bg-teal-500 rounded-xl'>
                                    <p class='lg:text-xl text-sm'>Course Code</p>
                                </div>
                                <div class='w-1/3 flex justify-center text-center px-3 py-1 bg-teal-500 rounded-xl'>
                                    <p class='lg:text-xl text-sm'>Letter Mark</p>
                                </div>
                                <div class='w-1/3 flex justify-center text-center px-3 py-1 bg-teal-500 rounded-xl'>
                                    <p class='lg:text-xl text-sm'>No. of Units</p>
                                </div>
                            </div>
                            

                        </div>

                        {/* QPIU Result  */}
                        <div className='lg:w-1/2 w-full h-full flex flex-col gap-5 backdrop-blur-sm text-white'>
                            <div className='w-full h-50 border-4 border-pink-600 rounded-xl flex flex-col justify-between items-center py-5 '>
                                <h1 className='text-2xl'>Your QPI</h1>
                                <h1 className='lg:text-9xl text-8xl'>4.00</h1>
                            </div>
                            <div className='w-full h-15 bg-pink-600 flex justify-center items-center rounded-xl'>
                                <h1 className='text-white text-md'>QPI Forecaster</h1>
                            </div>
                        {/* QPI Forecaster  */}
                            <div className='w-full flex flex-row justify-center items-center gap-5 '>
                                <div className='w-1/2 h-60 flex flex-col justify-between items-center lg:pt-4 lg:pb-10  p-4 border-4 rounded-xl border-pink-600'>
                                    <h1 className='mb-5 lg:text-2xl text-md'>Enter your Desired QPI</h1>
                                    <input type="number" name='desired' placeholder='0.00' className=' p-2 rounded-xl h-30 w-3/4 lg:text-7xl text-4xl text-center' />
                                </div>
                                <div className='w-1/2 h-60 flex flex-col justify-between items-center lg:pt-4 lg:pb-10 p-4 border-4 rounded-xl border-pink-600'>
                                    <h1 className='mb-5 lg:text-2xl text-md'>Enter Units Left to Take</h1>
                                    <input type="number" name='unitsLeft' placeholder='0.00' className=' p-2 rounded-xl h-30 w-3/4 lg:text-7xl text-4xl text-center' />
                                </div>

                            </div>
                        {/* Minimum QPI Result  */}
                            <div>
                                <div className='w-full lg:h-60 border-4 border-pink-600 rounded-xl flex flex-col justify-between items-center lg:py-5 p-4 gap-3 pb-2 '>
                                    <h1 className='lg:text-2xl text-xl'>Minimum QPI Needed To Get Desired</h1>
                                    <h1 className='lg:text-9xl text-8xl'>0.00</h1>
                                </div>                            
                            </div>                           
                        </div>
                    </div>
                    <footer class='w-full h-20 flex justify-between items-end  pt-5 lg:p-5  px-5 '>
                        <p lg:text-3xl text-sm>Robert Amiel Abadilla. All Rights Reserved</p>
                        <div class='flex flex-row gap-7'>
                            <a href="https://github.com/neons-amiel"> <img src={github} alt="Github" className='w-10 h-10 ' /> </a>
                            <a href="https://www.linkedin.com/in/amiel-abadilla"> <img src={linkedin} alt="Linkedin" className='w-10 h-10 ' /> </a>
                            <a href="mailto:robertamiel.abadilla@gmail.com"> <img src={mail} alt="Mail" className='w-10 h-10 ' /> </a>


                        </div>

                    </footer>

                    
                    
                    
                    

                </div>
                
            </div>
        </div>
    )
}

export default QPICalculator;


                