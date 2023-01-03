import React, { useEffect, useState } from "react";
import * as S from "../styled";
import { InputComponent } from "../components";

const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [verifyPassword, setVerifyPassword] = useState<string>("");

    return (
        <S.Container>
            <S.Wrap>
                <S.FlexRow>
                    <label>이메일</label>
                    <InputComponent
                        type="text"
                        onChange={(e: any) => {
                            console.log("id", e);
                        }}
                        placeholder="이메일을 입력해주세요."
                    />
                </S.FlexRow>
                <S.FlexRow>
                    <label>비밀번호</label>
                    <InputComponent
                        type="password"
                        onChange={(e: any) => {
                            console.log("password", e);
                        }}
                    />
                </S.FlexRow>
            </S.Wrap>
        </S.Container>
    );
};
export default LoginPage;
