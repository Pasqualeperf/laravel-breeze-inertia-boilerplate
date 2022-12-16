import LayoutApp from '@/Layouts/LayoutApp';
import { Head } from '@inertiajs/inertia-react';

const Homepage = (props) => {
    return (
       <>
        <LayoutApp auth={props.auth}>
            <Head title="Homepage" />
            <h1>Homepage</h1>
            <div className="cards-container min-h-screen flex flex-col md:flex-row items-center justify-center max-w-md py-8 md:py-3 space-y-9 md:space-y-0 md:space-x-6 mx-auto">
                {/* Cards 1 */}
                <div className="max-w-xs rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://picsum.photos/300/300" alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    </div>
                </div>
                {/* Cards 2 */}
                <div className="max-w-xs rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://picsum.photos/300/300" alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    </div>
                </div>
            </div>
        </LayoutApp>

       </>
    );
}

export default Homepage;
