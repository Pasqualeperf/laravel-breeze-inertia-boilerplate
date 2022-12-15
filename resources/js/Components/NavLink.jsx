import { usePage, Link } from '@inertiajs/inertia-react';

export default function NavLink({ href, active, children, method }) {
    return (
        <Link
            method={method}
            preserveState
            href={href}
            className={
                active
                    ? 'active inline-flex items-center mr-2 px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-white focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out'
                    : 'inline-flex items-center mr-2 px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-white hover:text-gray-100 hover:border-gray-300 focus:outline-none focus:text-gray-100 focus:border-gray-300 transition duration-150 ease-in-out'
            }
        >
            {children}
        </Link>
    );
}
