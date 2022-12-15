import LayoutApp from '@/Layouts/LayoutApp';
import { Link, Head } from '@inertiajs/inertia-react';

const Homepage = (props) => {
    return (
       <>
        <LayoutApp auth={props.auth}>
            <Head title="Homepage" />
            <h1>Homepage</h1>
            <div className="cards-container min-h-screen flex flex-col md:flex-row align-center justify-center max-w-md space-y-9 md:space-y-0 md:space-x-6 mx-auto">
                {/* Cards 1 */}
                <div class="max-w-xs rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="https://picsum.photos/300/300" alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    </div>
                </div>
                {/* Cards 2 */}
                <div class="max-w-xs rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="https://picsum.photos/300/300" alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    </div>
                </div>
            </div>
        </LayoutApp>

       </>
    );
}

export default Homepage;
