import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Swal from 'sweetalert2';
// import components
import { PageTitle, PageWrapper } from './Mans';
import { isSignedState, userId, userPw } from '../data/signIn';
import { userInfoState } from '../data/userInfo';
import { useNavigate } from 'react-router-dom';

const SignInInner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    margin: 5rem auto 0 auto;
    font-size: 0.95rem;
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        div.sign-in-id-pw {
            width: 100%;
            height: 40px;
            input {
                border: none;
                border-bottom: 1px solid var(--white-200);
                outline: none;
                width: 100%;
                padding: 0.5rem;
                &:focus {
                    border-color: var(--black-200);
                }
            }
        }
        button.sign-in-submit {
            width: 50%;
            font-size: 0.75rem;
            font-weight: 700;
            background: none;
            color: var(--black-200);
            outline: none;
            border: 1px solid var(--black-200);
            border-radius: 4px;
            cursor: pointer;
            margin: 1rem auto 0 auto;
            padding: 0.5rem;
            transition: 300ms all;
            &:hover {
                border-color: var(--accent-200);
                color: var(--accent-200);
            }
        }
        div.sign-in-buttons {
            display: flex;
            justify-content: center;
            margin: 2rem 0;
            button.sign-in-sign-up {
                background: none;
                border: 1px solid var(--black-200);
                color: var(--black-200);
                border-radius: 4px;
                outline: none;
                padding: 0.5rem 1rem;
                margin: 0.5rem;
                font-size: 0.75rem;
                font-weight: 700;
                transition: 150ms all;
                cursor: pointer;
                user-select: none;
                &:hover {
                    color: var(--accent-200);
                    border-color: var(--accent-200);
                }
            }
            button.sign-in-forget {
                background: none;
                border: none;
                outline: none;
                text-decoration: underline;
                color: var(--white-200);
                margin-left: 2rem;
                cursor: pointer;
                user-select: none;
                font-size: 0.75rem;
                transition: 300ms color;
                &:hover {
                    color: var(--black-200);
                }
            }
        }
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 60%;
    }
`;

export default function SignIn() {
    const { register, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

    const userInfo = useRecoilValue(userInfoState);
    const setId = useSetRecoilState(userId);
    const setPw = useSetRecoilState(userPw);
    const setIsSigned = useSetRecoilState(isSignedState);

    const handleSignIn = (data) => {
        const isUser = userInfo.filter((a) => a.userId === data.id);
        if (isUser.length > 0) {
            if (isUser[0].password === data.pw) {
                Swal.fire({
                    icon: 'success',
                    title: '환영합니다!',
                    text: `안녕하세요, ${data.id}님`,
                });
                setId(data.id);
                setPw(data.pw);
                setIsSigned(true);
                setValue('id', '');
                setValue('pw', '');
                navigate('/');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '비밀번호가 일치하지 않습니다.',
                });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '일치하는 아이디 정보가 없습니다.',
            });
        }
    };

    return (
        <PageWrapper>
            <PageTitle>Sign in</PageTitle>
            <SignInInner>
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <div className="sign-in-id-pw">
                        <input
                            type="text"
                            placeholder="ID"
                            {...register('id', { required: true })}
                        />
                    </div>
                    <div className="sign-in-id-pw">
                        <input
                            type="password"
                            placeholder="PW"
                            {...register('pw', { required: true })}
                        />
                    </div>
                    <button className="sign-in-submit">Submit</button>
                    <div className="sign-in-buttons">
                        <button
                            className="sign-in-sign-up"
                            onClick={() => navigate('/sign-up')}
                        >
                            Sign up
                        </button>
                        <button className="sign-in-forget">
                            forget your password?
                        </button>
                    </div>
                </form>
            </SignInInner>
        </PageWrapper>
    );
}
