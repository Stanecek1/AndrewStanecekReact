import InfiniteScroller from '../Components/InfiniteScroller';
import MyThree from '../Components/MyThree';

export default function Home() {
    return(
        <div>
            <div className='absolute'>
                <MyThree></MyThree>
            </div>
    
            <div className='grid grid-cols-1 md:grid-cols-2 content-center bg-black h-screen text-white'>
                <div className='relative flex justify-center '>
                    <div className='my-auto'>
                        <h1 className='text-4xl text-left name'>Andrew</h1>
                        <h1 className='text-9xl name'>Stanecek</h1>
                    </div>
                </div>
                <InfiniteScroller></InfiniteScroller>
            </div>
        </div>
    )
}


