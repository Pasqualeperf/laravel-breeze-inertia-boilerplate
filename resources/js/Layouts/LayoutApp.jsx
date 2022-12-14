import Navbar from '@/Components/Navbar';

export default function LayoutApp({ auth, header, children }) {

    return (
        <>
            <Navbar auth={auth}/>
            <div className="min-h-screen bg-gray-100">

                {header && (
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}

                <main>{children}</main>
            </div>
        </>
    );
}
