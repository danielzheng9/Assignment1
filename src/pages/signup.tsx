import { useContext, useState } from "react";
import { LoginInputGroup, LoginInputTitle, SideGroup, LoginInputInput, AeroLoginButton } from "./login.js";
import { Navigate, NavLink } from "react-router-dom";
import { AppContext } from "../app.js";
export function Signup() {
    const appContext = useContext(AppContext);
    if (!appContext) return <></>;
    const hasLoggedIn = appContext.isLoggedIn;
    const setLoggedIn = appContext.setIsLoggedIn;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [showHidden, setShowHidden] = useState(false);
    const [serverMessage, setServerMessage] = useState<string | undefined>();
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
    const characters = ["superman", "batman", "wonder woman", "joker", "the joker"];
    return <div className="centered full-viewport dolphinBackground">
        {hasLoggedIn ? <Navigate to="/" replace={false} state/> : <></>}
        <form className="loginItem" onSubmit={(event) => {
            event.preventDefault();
        }}>
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
            <p className={serverMessage ? "redServerMessage" : "hidden"}>{serverMessage}</p>
            <AeroLoginButton tags={isButtonDisabled ? "disabled" : ""} onClick={() => {
                if (username.length === 0) return setServerMessage("The username field is empty");
                if (password.length === 0) return setServerMessage("The password field is empty");
                if (password.length < 12) return setServerMessage("Password must have more than 12 characters");
                if (password !== repeatPassword) return setServerMessage("Password does not match repeat password");
                let hasCharacter = false;
                characters.forEach((superhero: string) => {
                    if (password.toLowerCase().includes(superhero)) hasCharacter = true;
                });
                if (!hasCharacter) return setServerMessage("Password should contain atleast one hero character");
                setIsButtonDisabled(true);
                setServerMessage("");
                setTimeout(() => {
                    if (username.length < 5) { 
                        setServerMessage("Account with the same username already exists");
                        return;
                    }
                    if (password.length < 128) {
                        setServerMessage("Your password is already being used by another account");
                        return;
                    }
                    setLoggedIn(true);
                }, 2000)
                setTimeout(() => {
                    setIsButtonDisabled(false);
                }, 2000)
            }}>Sign up</AeroLoginButton>
        </form>
    </div>
}