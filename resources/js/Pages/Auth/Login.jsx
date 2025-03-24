import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import axios from 'axios';

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        phone: '', // Aanpassen als je inlogt met telefoonnummer
        password: '',
    });

    useEffect(() => {
        axios.get('/sanctum/csrf-cookie'); // Haal de CSRF-token op
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => {
                reset('password');
                window.location.href = '/beerlist'; // Redirect na succesvolle login
            },
        });
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="phone">Telefoonnummer</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                    />
                    {errors.phone && <span>{errors.phone}</span>}
                </div>
                <div>
                    <label htmlFor="password">Wachtwoord</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <button type="submit" disabled={processing}>Login</button>
            </form>
        </div>
    );
}
