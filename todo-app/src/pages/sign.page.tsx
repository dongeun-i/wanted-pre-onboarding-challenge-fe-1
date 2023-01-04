import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as S from "../styled";
import { InputComponent, LabelComponent, ButtonComponent } from "../components";

const SignPage = () => {
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
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [isCheckEamil, isCheckPassword]);

    const onclickSign = () => {
        console.log("로그인버튼 클릭");
    };
    return (
        <S.SignContainer>
            <S.SignWrap>
                <S.FlexRow className="mb start">
                    <LabelComponent text="이메일" style={{ width: "150px" }} />
                    <S.FlexColumns className="start">
                        <InputComponent
                            type="text"
                            onChange={(e: any) => {
                                let value: string = e.target.value;
                                setEmail(value);
                            }}
                            placeholder="이메일을 입력해주세요."
                            radius={"20px"}
                        />
                        {email != "" && !isCheckEamil && (
                            <S.WarningText>
                                이메일 형식이 올바르지 않습니다.
                            </S.WarningText>
                        )}
                    </S.FlexColumns>
                </S.FlexRow>
                <S.FlexRow className="mb start">
                    <LabelComponent
                        text="패스워드"
                        style={{ width: "150px" }}
                    />
                    <S.FlexColumns className="start">
                        <InputComponent
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                            onChange={(e: any) => {
                                let value: string = e.target.value;
                                setPassword(value);
                            }}
                            radius={"20px"}
                        />
                        {password && isCheckPassword && (
                            <S.WarningText>
                                8자 이상 입력해주세요.
                            </S.WarningText>
                        )}
                    </S.FlexColumns>
                </S.FlexRow>
                <S.ButtonGroup>
                    <ButtonComponent
                        text="회원가입"
                        onClick={onclickSign}
                        radius="20px"
                        disable={disabled}
                    ></ButtonComponent>
                </S.ButtonGroup>
            </S.SignWrap>
        </S.SignContainer>
    );
};
export default SignPage;
