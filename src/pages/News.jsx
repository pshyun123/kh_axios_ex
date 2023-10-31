import { useState, useCallback } from "react";
import NewsList from "../component/NewsList";
import Categories from "../component/Categories";

const News = () => {
    const [category, setCategory] = useState("all");
    // useCallback으로 불필요한 호출 줄임, 
    const onSelect = useCallback(category => setCategory(category),[]);
    return(
        <>
        {/* onSelect가 중요 */}
        <Categories category={category} onSelect={onSelect} />
        <NewsList category={category}/>
        </>
    );
};
// category현재 눌려진 상태
// onSelect 부모한테 뭐가 눌렸는지
// NewsList
export default News;