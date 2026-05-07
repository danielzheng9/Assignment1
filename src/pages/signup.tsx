import { useState } from "react";
import { LoginInputGroup, LoginInputTitle, SideGroup, LoginInputInput, AeroLoginButton } from "./login.js";
import { NavLink } from "react-router-dom";
export function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [showHidden, setShowHidden] = useState(false);
    return <div className="centered full-viewport dolphinBackground">
        <form className="loginItem">
            <h3>Create your account!</h3>
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
                </SideGroup>
            </LoginInputGroup>
            <LoginInputGroup>
                <LoginInputTitle>repeat that password</LoginInputTitle>
                <SideGroup>
                <LoginInputInput type={showHidden ? "text" : "password"} value={repeatPassword} changed={(text: string) => {
                    setRepeatPassword(text.slice(0, 256)); // sql string length in db
                }}></LoginInputInput>
                </SideGroup>
            </LoginInputGroup>
            <NavLink to="/login">Click here to login</NavLink>
            <AeroLoginButton>Sign up</AeroLoginButton>
        </form>
    </div>
}