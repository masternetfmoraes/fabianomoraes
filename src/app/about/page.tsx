import Image from 'next/image'
import Link from 'next/link'
import Menu from "../components/Menu";
import Head from "../head"
import '../estilo.css'
export default async function Index(){
    const response = await fetch('https://dummyjson.com/products');
    const products = await response.json()
    console.log('oi')
    return(
        <div>
      <Head titulo="Sobre Fabiano Moraes website" />
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
            <div className="col">
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
                <Link className='linque nav-link ' href='https://www.twitter.com'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='icone' viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                </Link>
              </nav>
            </div>
          </div>
        </div>
        </div>
        <div className='col-sm-9 bordavertical px-5  '>
          <div className=''>
          <svg xmlns="http://www.w3.org/2000/svg" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
           className='icone-menu' width="35" height="35" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            <p className='text-warning flutua'>About!!</p>
            <p className='text-white display-1'><strong>Sobre <span className='yellow'>Mim</span> </strong></p>
            <hr className="borda" />
            <p className='text-white display-6'>Apaixonado por programação, atuando desde 2001</p>
            <div className="anima">
            <p className='text-white fs-6 animas'>
            &quot;Com uma trajetória sólida de mais de 20 anos como desenvolvedor web, sou especializado tanto no front-end quanto no back-end, além de possuir habilidades em design de sistemas. Desde 2001, tenho colaborado em diversos projetos, criando interfaces atraentes e intuitivas utilizando tecnologias como HTML, CSS, JavaScript e PHP. Minha experiência em programação e meu olhar estético me permitem desenvolver soluções web funcionais e visualmente agradáveis. Também tenho uma visão abrangente do desenvolvimento de sistemas, o que me permite criar arquiteturas eficientes e escaláveis. Sempre em busca de atualização, estou comprometido em fornecer produtos web de qualidade e soluções eficazes para os desafios tecnológicos.&quot;
            </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </section>
    </div>
    )
}