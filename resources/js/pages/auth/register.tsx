import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import AppLogoIcon from '@/components/app-logo-icon';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="bg-amber-500 shadow-10xl h-100 w-full">

            <div>
                <AuthLayout title="" description="" >
                    <form className=" mt-4 bg-amber-50 shadow-2xl p-10 h-full w-100 " onSubmit={submit}>
                        <div>
                            <div>
                                <AppLogoIcon className="size-9 fill-current text-[var(--foreground)] dark:text-white" />
                            </div>
                            <div>
                                <p className="text-centre mb-10 text-3xl text-bolder">Creer un compte</p>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            <div className="flex gap-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Nom </Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        disabled={processing}
                                        placeholder="entrer votre nom"
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="name">Premon</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        disabled={processing}
                                        placeholder="Entrer votre prenom"
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email">Adresse mail</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    tabIndex={2}
                                    autoComplete="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    disabled={processing}
                                    placeholder="entrer votre adresse mail"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password">Mot de pass</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    tabIndex={3}
                                    autoComplete="new-password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    disabled={processing}
                                    placeholder="entrer votre mots de pass"
                                />
                                <InputError message={errors.password} />
                            </div>

                            <Button type="submit" className="mt-2 w-full" tabIndex={5} disabled={processing}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Creer un compte
                            </Button>
                        </div>
                        <div className='mt-3'>
                            <div className="text-muted-foreground text-center text-sm">
                                Ou continuer avec
                                <TextLink href={route('login')} tabIndex={6}>
                                    Google
                                </TextLink>
                            </div>
                        </div>

                        <div className="text-muted-foreground text-center text-sm">
                            Vous avez déja un compte?{' '}
                            <TextLink href={route('login')} tabIndex={6}>
                                Connecter
                            </TextLink>
                        </div>
                    </form>
                </AuthLayout>
            </div>
        </div>
    );
}
