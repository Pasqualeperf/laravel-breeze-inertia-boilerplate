import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import FileInput from '@/Components/FileInput';
import { Link, useForm, usePage } from '@inertiajs/inertia-react';
import { Transition } from '@headlessui/react';
import { useState } from 'react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className }) {
    const user = usePage().props.auth.user;

    const [avatar, setAvatar] = useState(user.avatar);

    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
        avatar: undefined
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('profile.update'));
    };

    const changeAvatar = (e) => {
        setAvatar(URL.createObjectURL(e.target.files[0]));
        setData('avatar', e.target.files[0]);
    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form encType='multipart/form-data' onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel for="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        handleChange={(e) => setData('name', e.target.value)}
                        required
                        autofocus
                        autocomplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel for="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        handleChange={(e) => setData('email', e.target.value)}
                        required
                        autocomplete="email"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div className='flex flex-col md:flex-row items-center'>
                    <div>
                        <InputLabel value="Avatar" />
                        <FileInput
                            id="avatar"
                            name="avatar"
                            type="file"
                            className="mt-1 block w-full"
                            handleChange={(e) => changeAvatar(e)}
                            required
                        />
                        <InputError className="mt-2" message={errors.email} />
                    </div>

                    <div className="avatar-cont mt-6 md:mt-0 py-2">
                        <img
                            className="h-20 w-20 rounded-full"
                            src={avatar ? '/storage/avatars/'+avatar : "https://ui-avatars.com/api/?name="+user.name+user.surname+"?rounded=true"}
                            alt=""
                        />
                    </div>
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton processing={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
