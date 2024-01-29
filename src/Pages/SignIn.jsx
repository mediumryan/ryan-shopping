import { styled } from 'styled-components';
// import components
import { PageTitle, PageWrapper } from './Mans';

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
    return (
        <PageWrapper>
            <PageTitle>Sign in</PageTitle>
            <SignInInner>
                <form>
                    <div className="sign-in-id-pw">
                        <input type="text" placeholder="ID" />
                    </div>
                    <div className="sign-in-id-pw">
                        <input type="password" placeholder="PW" />
                    </div>
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
