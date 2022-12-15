import { usePage, Link } from '@inertiajs/inertia-react';

export default function ProfileLinks({ href, active, children, method="get" }) {

    return (
        <Link
            method={method}
            preserveState
            href={href}
            className={
                active
                    ? 'bg-gray-100 block px-4 py-2 text-sm text-gray-700'
                    : 'block px-4 py-2 text-sm text-gray-700'
            }
        >
            {children}
        </Link>
    );
}
