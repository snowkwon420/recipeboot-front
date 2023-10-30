import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as LikeIcon } from '../../assets/img/icon-like.svg';
import { useLocation } from 'react-router-dom';
import PostDetailAPI from '../../api/posts/PostDetailAPI';
import { dateTrance } from './PostListContent';
import Loading from '../loading/Loading';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { accessTokenAtom, csrfTokenAtom } from '../../atom/Atom';
import { useRecoilValue } from 'recoil';
import PostCommentAPI from '../../api/posts/PostCommentAPI';

function Post() {
  // 게시물 데이터 및 관련 상태 변수 초기화
  const [data, setData] = useState({ post: {} }); // 게시물 데이터
  const [commentData, setCommentData] = useState([]); // 댓글 데이터
  const [comment, setComment] = useState(''); // 댓글 입력 필드
  const [newComment, setNewComment] = useState(''); // 새로운 댓글 입력 필드

  // 현재 경로 정보 가져오기
  const location = useLocation();

  // 현재 게시물 ID 추출
  const postID = location.state.id;

  // 게시물 상세 정보를 가져오기 위한 API 호출 함수
  const getPostDetail = PostDetailAPI(postID);

  // Recoil을 통해 액세스 토큰 및 CSRF 토큰 가져오기
  const token = useRecoilValue(accessTokenAtom);
  const csrfToken = useRecoilValue(csrfTokenAtom);

  // 새로운 댓글을 게시하는 API 호출 함수
  const postComment = PostCommentAPI(postID, token, csrfToken, newComment);

  // 게시물 데이터와 댓글 데이터를 가져오는 함수
  async function fetchData() {
    const res = await getPostDetail();
    setData(res.post);
    setCommentData(res.comments);
    return res;
  }

  // 컴포넌트가 로드될 때 게시물 데이터와 댓글 데이터 가져오기
  useEffect(() => {
    fetchData();
  }, []);

  // 댓글 입력 값이 변경될 때 호출되는 함수
  const commentChange = (e) => {
    setNewComment(e.target.value);
  };

  const time = dateTrance(data.create_date);

  // 댓글 제출 처리 함수
  async function commentSubmitHandler(e) {
    e.preventDefault();
    await postComment();
    setNewComment('');
    const newRes = await fetchData();
    setCommentData(newRes.comments);
  }

    return (
      <>
        <h2>{data.title}</h2>
        <SectionWrapper>
          {data.content}
          <StyledLike>
            <LikeIcon /> {data.like}
          </StyledLike>
          <StyledTime>{time}</StyledTime>
        </SectionWrapper>
        <StyledComment>comment : {commentData.length}</StyledComment>
        <CommentInput>
          <form onSubmit={commentSubmitHandler}>
            <Input
              width={'100%'}
              onChange={commentChange}
              type='text'
              id='comment'
              value={newComment}
            />
            <Button
              type='submit'
              height={'42px'}
              width={'82px'}
              content={'댓글 등록'}
              backgroundcolor={'white'}
              color={'var(--main-color)'}
              style={{
                position: 'absolute',
                right: '0px',
                top: '15px',
                border: '1px solid var(--main-color)',
              }}
            />
          </form>
        </CommentInput>
        <CommentSection>
          {commentData.length > 0 ? (
            commentData.map((comment, index) => (
              <Comments key={index}>
                <StyledId>
                  {comment.username}
                </StyledId>
                <p>{comment.content}</p>
                <StyledTime style={{ top: '5px', bottom: '0', fontSize: '10px' }}>
                  {dateTrance(comment.create_date)}
                </StyledTime>
              </Comments>
            ))
          ) : (
            <Loading />
          )}
        </CommentSection>
      </>
    );
}

const CommentInput = styled.div`
  position: relative;
`;
const StyledId = styled.div`
  height: 10px;
  font-size: 10px;
  margin-bottom: 2px;
`;

const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 220px;
  border: 1px solid rgba(103, 103, 103, 0.3);
  border-radius: 10px;
`;

const CommentSection = styled.section``;

const Comments = styled.div`
  /* box-shadow: inset 0 0 10px red; */
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 2px solid rgba(103, 103, 103, 0.5);
  margin-top: 10px;
  border-radius: 5px;
`;

const StyledLike = styled.div`
  position: absolute;
  justify-content: center;
  margin-left: 20px;
  bottom: 10px;
`;

const StyledTime = styled(StyledLike)`
  bottom: 10px;
  right: 20px;
`;

const StyledComment = styled.div`
  width: 114px;
  height: 26px;
  color: #676767;
  border: 2px solid rgba(103, 103, 103, 1);
  text-align: center;
  line-height: 26px;
  border-radius: 5px;
`;

export default Post;
