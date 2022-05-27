import React from 'react';
import { Link } from 'react-router-dom';
import rumonImg from '../../images/rumon.png';

const Portfolio = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={rumonImg} class="max-w-sm rounded-lg shadow-2xl" alt='Md. Rumon Khan' />
                    <div>
                        <h1 class="text-5xl font-bold">Md. Rumon Khan!</h1>
                        <p class="py-6">A self-motivated and enthusiastic web developer with a deep interest in programming. To work in the Software industry with modern web technologies of different local and multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                        <button class="btn btn-active">Resume</button>
                    </div>
                </div>
            </div>
            <div class="m-12 ">
                <div class="">
                    <h5 className='text-2xl font-bold text-gray-900'>Technology🥇</h5>
                    <div className='grid grid-cols-2 md:grid-cols-5'>
                        <span class="p-3 bg-slate-100 m-3">HTML5</span>
                        <span class="p-3 bg-slate-100 m-3">CSS3</span>
                        <span class="p-3 bg-slate-100 m-3">Tailwind</span>
                        <span class="p-3 bg-slate-100 m-3">React Tailwind</span>
                        <span class="p-3 bg-slate-100 m-3">Bootstrap</span>
                        <span class="p-3 bg-slate-100 m-3">React Bootstrap</span>
                        <span class="p-3 bg-slate-100 m-3">JavaScript</span>
                        <span class="p-3 bg-slate-100 m-3">React</span>
                        <span class="p-3 bg-slate-100 m-3">Firebase</span>
                        <span class="p-3 bg-slate-100 m-3">React firebase hook</span>
                        <span class="p-3 bg-slate-100 m-3">Json web token</span>
                        <span class="p-3 bg-slate-100 m-3">MongoDB</span>
                        <span class="p-3 bg-slate-100 m-3">Express</span>
                    </div>

                </div>
            </div>
            <div class="m-12 ">
                <div class="">
                    <h5 className='text-2xl font-bold text-gray-900'>Tools & Technologies🥇</h5>
                    <div className='grid grid-cols-2 md:grid-cols-5'>
                        <span class="p-3 bg-slate-100 m-3">VS Code</span>
                        <span class="p-3 bg-slate-100 m-3">Github</span>
                        <span class="p-3 bg-slate-100 m-3">Figma</span>
                        <span class="p-3 bg-slate-100 m-3">Heroku</span>
                        <span class="p-3 bg-slate-100 m-3">Netlify</span>
                    </div>

                </div>
            </div>
            <div class="m-12 ">
                <div class="">
                    <h5 className='text-2xl font-bold text-gray-900'>Some Best Website🥇</h5>
                    <div className='grid grid-cols-2 md:grid-cols-3'>
                        <Link to='https://warehouse-management-c2a0a.web.app/' target='_blank' class="p-3 text-blue-900 bg-slate-100 m-3">Bd Car House</Link>
                        <Link to='https://candid-beignet-aef95e.netlify.app/' target='_blank' class="p-3 text-blue-900 bg-slate-100 m-3">Elon Musk</Link>
                        <Link to='https://tangerine-chimera-463d0f.netlify.app/' target='_blank' class="p-3  bg-slate-100 text-blue-900 m-3">Laptop review</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Portfolio;