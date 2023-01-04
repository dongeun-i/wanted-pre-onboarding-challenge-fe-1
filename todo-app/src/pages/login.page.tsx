import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as S from "../styled";
import {
    InputComponent,
    LabelComponent,
    ButtonComponent,
    TextButtonComponent,
} from "../components";

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [isCheckEamil, setIsCheckEamil] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [isCheckPassword, setIsCheckPassword] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(true);

    useEffect(() => {
        if (/(?=.*@)(?=.*\.)/.test(email) && password.length > 7) {
            setIsCheckEamil(true);
        } else {
            setIsCheckEamil(false);
        }
    }, [email]);

    useEffect(() => {
        if (password.length > 7) {
            setIsCheckPassword(true);
        } else {
            setIsCheckPassword(false);
        }
    }, [password]);

    useEffect(() => {
        if (isCheckPassword && isCheckPassword) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [isCheckEamil, isCheckPassword]);
    const onclickLogin = () => {
        console.log("로그인버튼 클릭");
    };
    return (
        <S.LoginContainer>
            <S.LoginWrap>
                <S.FlexRow className="mb">
                    <S.Logo />
                </S.FlexRow>
                <S.FlexRow className="mb w-75">
                    <LabelComponent text="이메일" style={{ width: "150px" }} />
                    <InputComponent
                        type="text"
                        onChange={(e: any) => {
                            let value: string = e.target.value;
                            setEmail(value);
                        }}
                        placeholder="이메일을 입력해주세요."
                        radius={"20px"}
                    />
                </S.FlexRow>
                <S.FlexRow className="mb w-75">
                    <LabelComponent
                        text="패스워드"
                        style={{ width: "150px" }}
                    />
                    <InputComponent
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        onChange={(e: any) => {
                            let value: string = e.target.value;
                            setPassword(value);
                        }}
                        radius={"20px"}
                    />
                </S.FlexRow>
                <S.ButtonGroup>
                    <TextButtonComponent
                        onClick={() => {
                            navigate("/sign");
                        }}
                        text="회원가입"
                    />
                    <ButtonComponent
                        text="로그인"
                        onClick={onclickLogin}
                        radius="20px"
                        disable={disabled}
                    ></ButtonComponent>
                </S.ButtonGroup>
            </S.LoginWrap>
        </S.LoginContainer>
    );
};
export default LoginPage;
