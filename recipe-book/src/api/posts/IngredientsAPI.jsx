import { URL } from "../BaseURL";

const IngredientsAPI = () => {
  const GetIngredients = async () => {
    try {
      const res = await fetch(`${URL}/posts/forms/ingredients`, {
        method: "GET",
      });
      const ingredients = await res.json();
      return ingredients;
    } catch (error) {
      console.error("재료 목록 데이터 전송 실패", error);
    }
  };

  return GetIngredients;
};

export default IngredientsAPI;
