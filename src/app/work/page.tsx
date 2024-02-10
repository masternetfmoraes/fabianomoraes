'use client';
import Image from 'next/image'
import Link from 'next/link'
//
import { useForm, SubmitHandler } from "react-hook-form";

//
import Head from '../head'
import '../estilo.css'
import Menu from '../components/Menu'

import enviaEmail from '../api/enviaEmail'

//tipos

type Inputs = {
    name: string,
    email: string,
    assunto: string,
    texto: string,
  };
export default function Work(){
    
    
    return(
        <div>
        <Head titulo="Work Fabiano Moraes website" />
        <section id="topo">
        <div className='container-fluid background py-1'>
        <Menu />
        
        <div className='row fadeentra'>
            <div className='col-sm-3 camada'>
            <p className='text-white display-6 pt-5'><strong>Web Developer</strong></p>
            <Image
            className='imagem'
            src="/img/photo.jpg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
            />
            <p className='text-white fs-3 text-center'>Fabiano Moraes</p>
            <p className='text-white fs-5 text-center'>Hortolândia, São Paulo - Brasil</p>
            <hr className="borda" />
            <div className='container'>
            <div className="row">
                <div className="col text-center">
                <nav className="nav justify-content-center ">
                    <Link className='linque nav-link' href='https://www.facebook.com'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='icone' viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                    </Link>
                    <Link className='linque nav-link' href='https://www.linkedin.com'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='icone' viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                    </Link>
                    <Link className='linque nav-link' href='https://www.youtube.com'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='icone' viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                    </Link>
                    <Link className='linque nav-link' href='https://www.twitter.com'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='icone' viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                    </Link>
                </nav>
                <button type="button" className="btn btn-outline-warning mt-2">
                    <>
                    <svg xmlns="http://www.w3.org/2000/svg" className='mx-2' width="15px" fill="#E4A11B" viewBox="0 0 384 512"><path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"/></svg>
                    </>
                    Download my CV
                </button>
                </div>
            </div>
            </div>
            </div>
            <div className='col-sm-9 bordavertical px-5'>
            <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
            className='icone-menu' width="35" height="35" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                <p className='flutua text-warning'>Work with me !!</p>
                <p className='text-white display-1'><strong>Work <span className='yellow'>here</span></strong></p>
                <hr className="borda" />
                <p className='text-white fs-3'>Section work Here</p>
                <p className="h1">Soon !!</p>
                
            </div>
            </div>
        </div>
        </div>
        </section>
        </div>
    )
}