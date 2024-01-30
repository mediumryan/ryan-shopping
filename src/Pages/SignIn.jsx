import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
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
                border-bottom: 1px solid #ddd;
                outline: none;
                width: 100%;
                padding: 0.5rem;
                &:focus {
                    border-color: grey;
                }
            }
        }
        button.sign-in-submit {
            font-size: 0.75rem;
            font-weight: 700;
            background: none;
            outline: none;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            user-select: none;
            margin-top: 1rem;
            padding: 0.5rem;
            box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
                rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
            transition: 300ms all;
            &:hover {
                box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px 0px,
                    rgba(27, 31, 35, 0.5) 0px 0px 0px 2px;
            }
        }
        div.sign-in-buttons {
            display: flex;
            justify-content: center;
            margin: 2rem 0;
            button.sign-in-sign-up {
                background: none;
                border: 1px solid #b3d4b3;
                border-radius: 4px;
                outline: none;
                padding: 0.5rem;
                margin: 0.5rem;
                font-size: 0.75rem;
                box-shadow: #b3d4b3 0px 3px 8px;
                transition: 150ms all;
                cursor: pointer;
                user-select: none;
                &:hover {
                    color: #b3d4b3;
                    border-color: transparent;
                }
            }
            button.sign-in-forget {
                background: none;
                border: none;
                outline: none;
                text-decoration: underline;
                color: #ccc;
                margin-left: 2rem;
                cursor: pointer;
                user-select: none;
                font-size: 0.75rem;
                transition: 300ms color;
                &:hover {
                    color: #000;
                }
            }
        }
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
        const isUser = userInfo.filter((a) => a.id === data.id);
        if (isUser.length > 0) {
            if (isUser[0].pw === data.pw) {
                alert(`환영합니다. ${data.id}님`);
                setId(data.id);
                setPw(data.pw);
                setIsSigned(true);
                setValue('id', '');
                setValue('pw', '');
                navigate('/');
            } else {
                alert('비밀번호가 일치하지 않습니다.');
            }
        } else {
            alert('일치하는 아이디 정보가 없습니다.');
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
                        <button className="sign-in-sign-up">Sign up</button>
                        <button className="sign-in-forget">
                            forget your password?
                        </button>
                    </div>
                </form>
            </SignInInner>
        </PageWrapper>
    );
}
