import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
// import components
import { PageTitle, PageWrapper } from './Mans';
import { styled } from 'styled-components';

const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 33%;
    margin: 2rem auto 0 auto;
    padding: 2rem;
    font-size: 0.75rem;
    input.sign-up-submit {
        width: 33%;
        margin: 1rem auto 0 auto;
        padding: 0.5rem;
        font-weight: 700;
        background: none;
        outline: none;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        user-select: none;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
            rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        transition: 300ms all;
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 6px 0px,
                rgba(27, 31, 35, 0.25) 0px 0px 0px 2px;
        }
    }
`;

const FormRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    label {
        flex: 3;
        width: 30%;
        font-weight: 700;
    }
    input {
        flex: 7;
        width: 70%;
        padding: 0.5rem;
        border: none;
        border-bottom: 1px solid #ddd;
        outline: none;
        transition: 300ms all;
        &:focus {
            border-color: #6bb26b;
        }
    }
`;

export default function SignUp() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // handle data
    const onSubmit = (data) => {
        reset();
    };

    return (
        <PageWrapper>
            <PageTitle>Sign up</PageTitle>
            <SignUpForm onSubmit={handleSubmit(onSubmit)}>
                <FormRow>
                    <label>아이디</label>
                    <input
                        type="text"
                        placeholder="ID"
                        {...register('id', {
                            required: '필수 입력 항목입니다.',
                            maxLength: 20,
                            pattern: {
                                value: /^[a-zA-Z0-9_-]{3,20}$/,
                                message:
                                    '아이디는 영문자, 숫자, 언더스코어, 대시만 허용되며 3~20자여야 합니다.',
                            },
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="id"
                        className="errorM"
                    />
                </FormRow>
                <FormRow>
                    <label>비밀번호</label>
                    <input
                        type="password"
                        placeholder="password"
                        {...register('password', {
                            required: '필수 입력 항목입니다.',
                            maxLength: 20,
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                message:
                                    '비밀번호는 최소 8자 이상, 숫자와 문자를 포함해야 합니다.',
                            },
                        })}
                    />{' '}
                    <ErrorMessage
                        errors={errors}
                        name="password"
                        className="errorM"
                    />
                </FormRow>
                <FormRow>
                    <label>비밀번호 확인</label>
                    <input
                        type="password"
                        placeholder="password-check"
                        {...register('password check', {
                            required: '필수 입력 항목입니다.',
                            maxLength: 20,
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                message: '비밀번호가 일치하지 않습니다.',
                            },
                        })}
                    />
                    <ErrorMessage errors={errors} name="password check" />
                </FormRow>
                <FormRow>
                    <label>성</label>
                    <input
                        type="text"
                        placeholder="First name"
                        {...register('First name', {
                            required: '필수 입력 항목입니다.',
                            maxLength: 20,
                            pattern: {
                                value: /^[a-zA-Z가-힣]{1,20}$/,
                                message: '올바른 성을 입력해주세요.',
                            },
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="First name"
                        className="errorM"
                    />
                </FormRow>
                <FormRow>
                    <label>이름</label>
                    <input
                        type="text"
                        placeholder="Last name"
                        {...register('Last name', {
                            required: '필수 입력 항목입니다.',
                            maxLength: 30,
                            pattern: {
                                value: /^[a-zA-Z가-힣]{1,30}$/,
                                message: '올바른 이름을 입력해주세요.',
                            },
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="Last name"
                        className="errorM"
                    />
                </FormRow>
                <FormRow>
                    <label>이메일</label>
                    <input
                        type="text"
                        placeholder="Email"
                        {...register('Email', {
                            required: '필수 입력 항목입니다.',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: '올바른 이메일 주소를 입력해주세요.',
                            },
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="Email"
                        className="errorM"
                    />
                </FormRow>
                <FormRow>
                    <label>연락처</label>
                    <input
                        type="tel"
                        placeholder="Phone number"
                        {...register('phone number', {
                            required: '필수 입력 항목입니다.',
                            minLength: 6,
                            maxLength: 12,
                            pattern: {
                                value: /^[0-9-]+$/,
                                message: '올바른 전화번호를 입력해주세요.',
                            },
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="phone number"
                        className="errorM"
                    />
                </FormRow>
                <input
                    type="submit"
                    className="sign-up-submit"
                    value="회원가입"
                />
            </SignUpForm>
        </PageWrapper>
    );
}
