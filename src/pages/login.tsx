import { useState } from "react";
import { NavLink } from "react-router-dom";

export function LoginInputTitle({children}: {children: React.ReactNode}) {
    return <p className="ghost">{children}</p>;
}
export function LoginInputInput({changed = () => {}, ...props}: {changed?: (text: string) => void} & React.ComponentProps<"input">) {
    return <input type="text" className="LoginInputItem" onChange={(thisElement) => {
            changed(thisElement.target.value);
        }} {...props}/>
}
export function LoginInputGroup({children}: {children: React.ReactNode}) {
    return <div className="LoginInputGroup">
        {children}
    </div>
}
export function AeroLoginButton({children, tags, ...props}: {children: React.ReactNode, tags?: string} & React.ComponentProps<"button">) {
    return <button className={`AeroLoginButton ${tags}`} {...props}>{children}</button>;
}
export function SideGroup({children}: {children: React.ReactNode}) {
    return <div className="sideGroup fillFull">{children}</div>
}
export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showHidden, setShowHidden] = useState(false);
    const [serverMessage, setServerMessage] = useState<string | undefined>();
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
    return <div className="centered full-viewport">
        <form className="loginItem">
            <h3>Login to DOGNET TECHNOLOGIES</h3>
            <LoginInputGroup>
                <LoginInputTitle>username</LoginInputTitle>
                <SideGroup>
                <LoginInputInput value={username}changed={(text: string) => {
                    setUsername(text.slice(0, 20));
                }}></LoginInputInput>
                </SideGroup>
            </LoginInputGroup>
            <LoginInputGroup>
                <LoginInputTitle>password</LoginInputTitle>
                <SideGroup>
                <LoginInputInput type={showHidden ? "text" : "password"} value={password} changed={(text: string) => {
                    setPassword(text.slice(0, 256)); // sql string length in db
                }}></LoginInputInput>
                    <button className="BlockButton" onClick={() => {
                        setShowHidden(!showHidden);
                    }}>
                        <i className={showHidden ? "fa fa-eye-slash" : "fa fa-eye"}/>
                    </button>
                </SideGroup>
            </LoginInputGroup>
            <NavLink to="/signup">Click here to sign up</NavLink>
            <p className={serverMessage ? "redServerMessage" : "hidden"}>{serverMessage}</p>
            <AeroLoginButton disabled={isButtonDisabled} tags={isButtonDisabled ? "disabled" : ""} onClick={() => {
                if (username.length === 0) return setServerMessage("The username field is empty");
                if (password.length === 0) return setServerMessage("The password field is empty");
                setIsButtonDisabled(true);
                setTimeout(() => {
                    setServerMessage("Incorrect password or username");
                    setIsButtonDisabled(false);
                }, 2000)
            }}>Login</AeroLoginButton>
        </form>
    </div>
}