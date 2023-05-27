import Head from "@/app/head"

interface Ende{
    params: {
        slug: string
    }
}

export default function Index({params}: Ende){
    return(
        <>
        <Head titulo={params.slug} />
        <h1>About</h1>
        </>
    )
}