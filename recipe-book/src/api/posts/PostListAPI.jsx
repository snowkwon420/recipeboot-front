import { URL } from "../BaseURL";

/**
 * PostListAPI - 레시피 목록을 가져오는 API
 * @param {number} pageNo - 페이지 번호
 * @returns {Promise} - 레시피 목록 데이터의 프라미스
 */
const PostListAPI = (pageNo) => {
  /**
   * getPostList - 레시피 목록을 가져오는 함수
   * @returns {Promise} - 레시피 목록 데이터의 프라미스
   */
  const getPostList = async () => {
    try {
      const res = await fetch(`${URL}/posts?pageNo=${pageNo}&pageSize=10`, {
        method: "GET",
      });
      const data = await res.json(); // JSON 응답 파싱
      return data;
    } catch (error) {
      console.error("레시피 목록 데이터 전송 실패", error);
    }
  };

  return getPostList;
};

export default PostListAPI;
