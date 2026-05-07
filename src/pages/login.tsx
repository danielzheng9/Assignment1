import { useState } from "react";

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
export function AeroLoginButton() {
    return <button className="AeroLoginButton">Login</button>;
}
export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showHidden, setShowHidden] = useState(false);
    return <div className="centered full-viewport">
        <form className="loginItem">
            <h3>Login to DOGNET TECHNOLOGIES</h3>
            <LoginInputGroup>
                <LoginInputTitle>"username"</LoginInputTitle>
                <LoginInputInput value={username}changed={(text: string) => {
                setUsername(text.slice(0, 20));
            }}></LoginInputInput>
            </LoginInputGroup>
            <div className="sideGroup">
                <LoginInputGroup>
                <LoginInputTitle>"password"</LoginInputTitle>
                    <LoginInputInput value={password} changed={(text: string) => {
                        setUsername(text.slice(0, 256)); // sql string length in db
                    }}></LoginInputInput>
                </LoginInputGroup>

                <LoginInputGroup titled="password" type={showHidden ? "text" : "password"} value={password} changed={(text: string) => {
                    setPassword(text.slice(0, 256)); // sql string length in the db
                }}/>
                <button className="BlockButton"></button>
            </div>
            <AeroLoginButton/>
        </form>
    </div>
}