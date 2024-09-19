import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Spinner } from '@nextui-org/react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, error } = useSelector(state => state.auth);

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = {
            username,
            email: "",
            password,
            phone_number: "",
            input_code: 0,
        };

        try {
            await dispatch(loginUser(formData));
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed: ', error);
        }
    };

    return (
        <section className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-sm space-y-8 rounded-xl border-2 p-8 py-14 shadow-md">
                <h2 className="mb-10 text-center text-4xl font-extrabold text-gray-700">
                    Login
                </h2>

                {error && (
                    <div className="rounded bg-red-100 p-4 text-red-700">
                        <p>{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <Input
                            id="username"
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                            label="Username"
                            variant="bordered"
                        />
                    </div>

                    <div>
                        <Input
                            label="Password"
                            id="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            variant="bordered"
                        />
                    </div>

                    <div className="flex justify-center">
                        <Button
                            color="primary"
                            size="lg"
                            type="submit"
                            className={`font-bold ${isLoading && 'cursor-not-allowed'}`}
                        >
                            {isLoading ? <Spinner color="white" /> : 'Login'}
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default LoginPage;
