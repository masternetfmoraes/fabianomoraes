import Image from 'next/image'
import Link from 'next/link'
import Head from '../head'
import '../estiloskeleton.css'
export default function Skeleton(){
    return(
        <>
        <div  className="skeleton-container">
        <div  className="row">
            <div  className="skeleton-col-3">
            <div  className="title"></div>
            <div  className="img"></div>
            <div  className="title"></div>
            <div  className="title"></div>
            </div>
            <div  className="skeleton-col-9">
            <div  className="title"></div>
            <div  className="title"></div>
            <div  className="img"></div>
            <div  className="title"></div>
            <div  className="title"></div>
            <div  className="title"></div>
            <div  className="title"></div>
            </div>
        </div>
        </div>
        </>
    )
}