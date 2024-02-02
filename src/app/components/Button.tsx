export default function Button ({ children, title }:any){
    return(
        <>
        <button className="btn btn-outline-warning anima2" title={title}>{children}</button>
        </>
    )
}