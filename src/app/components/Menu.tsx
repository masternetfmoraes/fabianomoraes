import Image from 'next/image'
import Link from 'next/link'
export default function Menu(){
    type Inputs = {
        tabIndex: number,
      };
    return(
        <>
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
            <p className="offcanvas-title text-white fs-1" id="offcanvasExampleLabel">Menu</p>
            <svg xmlns="http://www.w3.org/2000/svg" data-bs-dismiss="offcanvas" aria-label="Close"
             className='close-menu ' width="35" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            
        </div>
        <div className="offcanvas-body">
            <div>
            <ul className="list-unstyled menu-lista">
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/work'>Work</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
            </ul>
            </div>
        </div>
        </div>
        </>
    )
}