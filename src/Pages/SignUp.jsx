import { useForm } from 'react-hook-form';
// import components
import { PageTitle, PageWrapper } from './Mans';

export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // handle data
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <PageWrapper>
            <PageTitle>Sign up</PageTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="First name"
                    {...register('First name', {
                        required: true,
                        maxLength: 80,
                    })}
                />
                <input
                    type="text"
                    placeholder="Last name"
                    {...register('Last name', {
                        required: true,
                        maxLength: 100,
                    })}
                />
                <input
                    type="text"
                    placeholder="Email"
                    {...register('Email', {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                    })}
                />
                <input
                    type="tel"
                    placeholder="Mobile number"
                    {...register('Mobile number', {
                        required: true,
                        minLength: 6,
                        maxLength: 12,
                    })}
                />
                <select {...register('Title', { required: true })}>
                    <option value="male">M</option>
                    <option value="female">F</option>
                </select>

                <input type="submit" />
            </form>
        </PageWrapper>
    );
}
