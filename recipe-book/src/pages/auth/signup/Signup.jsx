import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        passwordConfirm:'',
        email: ''
    });

    const { username, password, passwordConfirm, email } = userData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // axios를 사용하여 백엔드 서버로 데이터를 전송
            const response = await axios.post('https://rest-recipe-book-dptb.run.goorm.site/members/forms', userData);
            if (response.data.result === 'success') {
                alert('회원 가입 성공');
            }
            else {
                alert('회원 가입 실패: ' + response.data.message);
            }
        } catch (error) {
            console.error('회원 가입 요청 중 에러 발생 :', error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={username} onChange={handleChange} placeholder="사용자 이름" required />
            <input type="password" name="password" value={password} onChange={handleChange} placeholder="비밀번호" required />
            <input type="passwordConfirm" name="passwordConfirm" value={passwordConfirm} onChange={handleChange} placeholder="비밀번호 확인" required />
            <input type="email" name="email" value={email} onChange={handleChange} placeholder="이메일" required />
            <button type="submit">회원 가입</button>
        </form>
    );
}

export default Signup;