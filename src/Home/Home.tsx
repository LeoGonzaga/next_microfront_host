import dynamic from 'next/dynamic';


const SampleComponent = dynamic(() => import("mf1/sidebar"), {
    ssr: false,
    loading({ error }) {
      if (error) {
        console.log(error)
        return <p>{JSON.stringify(error)}</p>;
      }
  
      return <p>Loading...</p>;
    }
  });


export default function Home() {
    return (
        <div>
            <SampleComponent/>
            <main >
                <h1 >
                    HOST
                </h1>
            </main>
        </div>
    )
}