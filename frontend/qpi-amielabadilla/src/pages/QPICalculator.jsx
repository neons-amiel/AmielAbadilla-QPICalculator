import React from 'react';
import { useState, memo } from 'react';

{/* Importing Components */}
import ParticleBackground from '../components/CoolBg.jsx';


import noot from '../assets/nootnoot_photo.svg';

{/* Icons for Links */}
import github from '../assets/GITHUB.png';
import linkedin from '../assets/Linkedin (1).png';
import mail from '../assets/Mail.png';


function QPICalculator() {

    const MemoizedParticles = memo(ParticleBackground);
    const letters = ['A','B+','B','C+','C','D'];
    const numUnits = [3,2,1];

    const [courses, setCourses] = useState([
        {code: '', grade:'', units:''}
    ]);

    const addCourse = () => {
        setCourses([...courses, {code: '', grade: 'A', units: '3'}]);
    };

    const resetCourse = () => {
        setCourses([]);
    };

    const removeCourse = (indexRemove) => {
        setCourses(courses.filter((_, index) => index !== indexRemove));
    };

    const handleChange = (index, field, value) => {
        const updatedCourses = [...courses];
        updatedCourses[index][field] = value;
        setCourses(updatedCourses);
    };

    const bindField = (index, field) => ({
        value: courses[index][field],
        onChange: (e) => handleChange(index, field, e.target.value)
    });

    const gradePoint = {
        'A' : 4.0,
        'B+' : 3.5,
        'B' : 3.0,
        'C+' : 2.5,
        'C' : 2.0,
        'D' : 1.0,
        'F' : 0.0,
    }

    const QPI = () => {
        let totalPoints = 0;
        let totalUnits = 0;

        courses.forEach(course => {
            const gradeValue = gradePoint[course.grade];
            const units = parseFloat(course.units);

            if (!isNaN(gradeValue) && !isNaN(units)) {
                totalPoints += gradeValue * units;
                totalUnits += units;
            }
        });

        if(totalUnits === 0) return 0;
        return(totalPoints/totalUnits).toFixed(2);

    };
    
    return (
        
        <div className='min-h-screen w-full flex lg:flex-col flex-col font-montserrat m-0 p-0 '>
            
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
                                <button  onClick={addCourse}
                                class=' cursor-pointer lg:w-1/3 w-1/2 h-12 flex justify-center items-center px-3 py-1 bg-pink-600 rounded-xl hover:bg-pink-400  '>
                                    <p class='lg:text-xl text-sm'>+ Add Course</p>
                                </button>
                                <button onClick={resetCourse}
                                 class=' cursor-pointer lg:w-1/3 w-1/2 h-12 flex justify-center items-center px-3 py-1 bg-pink-600 rounded-xl hover:bg-pink-400'>
                                    <p class='lg:text-xl  text-sm'>Reset</p>
                                </button>

                            </div>

                         {/* Course, Grades, Units Section */}
                            <div class='w-full flex flex-row lg:justify-start justify-center lg:items-center items-start lg:p-10 gap-5 p-5 '>
                                <div class='w-1/3   h-15 flex justify-center text-center items-center px-3 py-1 bg-teal-500 rounded-xl'>
                                    <p class='lg:text-xl  text-sm'>Course Code</p>
                                </div>
                                <div class='w-1/3  h-15 flex justify-center text-center items-center px-3 py-1 bg-teal-500 rounded-xl'>
                                    <p class='lg:text-xl text-sm'>Letter Mark</p>
                                </div>
                                <div class='w-1/3  h-15 flex justify-center text-center items-center  px-3 py-1 bg-teal-500 rounded-xl'>
                                    <p class='lg:text-xl text-sm'>No. of Units</p>
                                </div>
                            </div>
                            <div class="w-full flex flex-col items-center justify-center gap-5 lg:px-10 lg:pt-3 p-5">
                                
                                {courses.map((course, index) => (
                                    <div key={index} class='w-full flex flex-row gap-5'>
                                        <input type="text" {...bindField(index, 'code')}class='w-1/3 px-2 py-1 border rounded-xl text-center' />
                                        <select name="" id=""  {...bindField(index, 'grade')} placeholder='' class='w-1/3 px-2 py-1 border rounded-xl text-center z-40 '>
                                            {letters.map((letter) => (
                                                <option key={letter} value={letter}  className='text-black rounded-md'>
                                                     {letter}
                                                </option>
                                            ))}
                                        </select>
                                        <select name="" id="" {...bindField(index, 'units')} class='w-1/3 px-2 py-1 border rounded-xl text-center z-40' >
                                            {numUnits.map((numUnits) => (
                                                <option value={numUnits} key={numUnits}className='text-black rounded-md'>
                                                    {numUnits}
                                                </option>
                                            ))}

                                        </select>

                                        <button
                                            onClick={() => removeCourse(index)}
                                            className="w-1/6 px-2 py-1 bg-red-500 hover:bg-red-400 rounded-xl text-white text-sm"
                                            >
                                            Delete
                                        </button>

                                    

                                    </div>
                                    
                            
                                    
                                    
                                )
                            )}

                            </div>
                                


                                
                               

                    
                            

                        </div>

                        {/* QPIU Result  */}
                        <div className='lg:w-1/2 w-full h-full flex flex-col gap-5 backdrop-blur-sm text-white'>
                            <div className='w-full h-50 border-4 border-pink-600 rounded-xl flex flex-col justify-between items-center py-5 '>
                                <h1 className='text-2xl'>Your QPI</h1>
                                <h1 className='lg:text-9xl text-8xl'>{QPI()}</h1>
                            </div>
                            <div className='w-full h-15 bg-pink-600 flex justify-center items-center rounded-xl'>
                                <h1 className='text-white text-md'>QPI Forecaster</h1>
                            </div>
                        {/* QPI Forecaster  */}
                            <div className='w-full flex flex-row justify-center items-center gap-5 '>
                                <div className='w-1/2 h-60 flex flex-col justify-between items-center lg:pt-4 lg:pb-10  p-4 border-4 rounded-xl border-pink-600'>
                                    <h1 className='mb-5 lg:text-2xl text-md'>Enter your Desired QPI</h1>
                                    <input type="number" name='desired' placeholder='0.00' className=' p-2 rounded-xl h-30 w-8/10 lg:text-6xl text-4xl text-center' />
                                </div>
                                <div className='w-1/2 h-60 flex flex-col justify-between items-center lg:pt-4 lg:pb-10 p-4 border-4 rounded-xl border-pink-600'>
                                    <h1 className='mb-5 lg:text-2xl text-md'>Enter Units Left to Take</h1>
                                    <input type="number" name='unitsLeft' placeholder='0.00' className=' p-2 rounded-xl h-30 w-8/10 lg:text-6xl text-4xl text-center' />
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


                