import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';
import Swal from 'sweetalert2';
// import components
import { PageTitle, PageWrapper } from './Mans';
// import state data
import { userInfoState } from '../data/userInfo';
import { useNavigate } from 'react-router-dom';

const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 33%;
    margin: 2rem auto 0 auto;
    padding: 2rem;
    font-size: 0.75rem;
    /* submit button */
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
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 75%;
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
    div.input {
        display: flex;
        flex-direction: column;
        flex: 7;
        width: 70%;
    }
    input {
        padding: 0.5rem;
        margin-bottom: 1rem;
        border: none;
        border-bottom: 1px solid var(--black-200);
        outline: none;
        transition: 300ms all;
        &:focus {
            border-color: var(--accent-200);
        }
        &::placeholder {
            color: var(--white-200);
        }
    }
`;

export default function SignUp() {
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        reset,
        formState: { errors },
    } = useForm();

    // handle data
    const onSubmit = (data) => {
        const newUser = {
            id: new Date(),
            userId: data.id,
            password: data.password,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
        };

        const alreadyIsId = userInfo.filter((a) => a.userId === data.id);
        const passwordChecker = data.password === data.passwordCheck;

        if (alreadyIsId.length > 0) {
            Swal.fire({
                icon: 'warning',
                title: 'ID error',
                text: '이미 존재하는 ID 입니다.',
            }).then(() => {
                setValue('id', '');
            });
        } else {
            if (!passwordChecker) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Password error',
                    text: '비밀번호가 일치하지 않습니다.',
                }).then(() => {
                    setValue('passwordCheck', '');
                });
            } else {
                setUserInfo((prev) => [...prev, newUser]);
                Swal.fire({
                    icon: 'success',
                    title: '회원가입이 완료되었습니다.',
                    text: `환영합니다. ${data.id}님`,
                    showDenyButton: true,
                    confirmButtonText: '홈으로',
                    denyButtonText: `로그인`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        reset();
                        navigate('/');
                    } else if (result.isDenied) {
                        navigate('/sign-in');
                    }
                });
            }
        }
    };

    //     const alreadyIsId = prev.find((a) => a.userId === data.id);
    //     const passwordChecker = data.password === data.passwordCheck;
    //     console.log(passwordChecker);
    //     // check the length of the userInfo state is less than 1
    //     if (prev.length < 1) {
    //         return newUser;
    //     } else {
    //         // check overlapping user id
    //         if (alreadyIsId) {
    //             Swal.fire({
    //                 icon: 'warning',
    //                 title: 'ID error',
    //                 text: '이미 존재하는 ID 입니다.',
    //             });
    //             setValue('id', '');
    //             return;
    //         } else {
    //             if (!passwordChecker) {
    //                 Swal.fire({
    //                     icon: 'warning',
    //                     title: 'Password error',
    //                     text: '비밀번호가 일치하지 않습니다.',
    //                 });
    //                 setValue('password', '');
    //                 return;
    //             } else {
    //                 Swal.fire({
    //                     icon: 'success',
    //                     title: '회원가입이 완료되었습니다.',
    //                     text: `환영합니다. ${data.id}님`,
    //                     showDenyButton: true,
    //                     confirmButtonText: '홈으로',
    //                     denyButtonText: `로그인`,
    //                 }).then((result) => {
    //                     if (result.isConfirmed) {
    //                         reset();
    //                         navigate('/');
    //                     } else if (result.isDenied) {
    //                         navigate('/sign-in');
    //                     }
    //                 });
    //                 const newUserInfo = [...prev];
    //                 newUserInfo.push(newUser);
    //                 return newUserInfo;
    //             }
    //         }
    //     }
    //     return;
    // });
    // reset();

    return (
        <PageWrapper>
            <PageTitle>Sign up</PageTitle>
            <SignUpForm onSubmit={handleSubmit(onSubmit)}>
                <FormRow>
                    <label>아이디</label>
                    <div className="input">
                        <input
                            type="text"
                            placeholder="ryan"
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
                    </div>
                </FormRow>
                <FormRow>
                    <label>비밀번호</label>
                    <div className="input">
                        <input
                            type="password"
                            placeholder="qwer1234!!"
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
                    </div>
                </FormRow>
                <FormRow>
                    <label>비밀번호 확인</label>
                    <div className="input">
                        <input
                            type="password"
                            placeholder="qwer1234!!"
                            {...register('passwordCheck', {
                                required: '필수 입력 항목입니다.',
                                maxLength: 20,
                                validate: {
                                    matchesPassword: (value) =>
                                        value === getValues('password') ||
                                        '비밀번호가 일치하지 않습니다.',
                                },
                            })}
                        />
                        <ErrorMessage errors={errors} name="passwordCheck" />
                    </div>
                </FormRow>
                <FormRow>
                    <label>성</label>
                    <div className="input">
                        <input
                            type="text"
                            placeholder="Lee"
                            {...register('firstName', {
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
                            name="firstName"
                            className="errorM"
                        />
                    </div>
                </FormRow>
                <FormRow>
                    <label>이름</label>
                    <div className="input">
                        <input
                            type="text"
                            placeholder="Ryan"
                            {...register('lastName', {
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
                            name="lastName"
                            className="errorM"
                        />
                    </div>
                </FormRow>
                <FormRow>
                    <label>이메일</label>
                    <div className="input">
                        <input
                            type="text"
                            placeholder="mediumryan@ryan.com"
                            {...register('email', {
                                required: '필수 입력 항목입니다.',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message:
                                        '올바른 이메일 주소를 입력해주세요.',
                                },
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="email"
                            className="errorM"
                        />
                    </div>
                </FormRow>
                <FormRow>
                    <label>연락처</label>
                    <div className="input">
                        <input
                            type="tel"
                            placeholder="010-1234-5678"
                            {...register('phoneNumber', {
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
                            name="tel"
                            className="errorM"
                        />
                    </div>
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
