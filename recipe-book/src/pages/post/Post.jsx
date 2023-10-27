import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Post() {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://rest-recipe-book-dptb.run.goorm.site/posts/${id}`);
            setPost(result.data.post);  // post 키를 통해 데이터에 접근
        }

        fetchData();
    }, [id]);

    // 데이터를 불러오는 동안 로딩 메시지 표시
    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <h1>제목 {post.title}</h1>
            <p>유저 아이디{post.user_id}</p>
            <p>내용{post.content}</p>
            <p>생성날짜{post.create_date}</p>
            <p>좋아요 수{post.like}</p>
            <p>수정 날짜{post.modify_date}</p>
            <p>가격 {post.price}</p>
        </div>
    );
}

export default Post;
