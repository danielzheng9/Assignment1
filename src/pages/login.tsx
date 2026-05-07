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
export function AeroLoginButton({children}: {children: React.ReactNode}) {
    return <button className="AeroLoginButton">{children}</button>;
}
export function SideGroup({children}: {children: React.ReactNode}) {
    return <div className="sideGroup fillFull">{children}</div>
}
export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showHidden, setShowHidden] = useState(false);
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
            <AeroLoginButton>Login</AeroLoginButton>
        </form>
    </div>
}