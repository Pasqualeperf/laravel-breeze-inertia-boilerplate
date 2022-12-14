import LayoutApp from '@/Layouts/LayoutApp';
import { Link, Head } from '@inertiajs/inertia-react';

const Homepage = (props) => {
    return (
       <>
        <LayoutApp auth={props.auth}>
            <Head title="Homepage" />
            <h1>Homepage</h1>
        </LayoutApp>

       </>
    );
}

export default Homepage;
