import styled from "styled-components";
import NewsItem from "./NewsItems";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3em;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1em;
        padding-right: 1em;
    }

`;
const NewsList = ({category}) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
// 한개는 콜백()=>{} 서버다녀옴, 한개는 의존형배열[]

useEffect(()=> {
    // async 걸 함수 따로 만들어줘야함. 함수를 여기서 만들고, 함수가 비동기구간이 됨. 로딩바.
    const fetchData = async () => {
        // 로딩 할지 말지 결정, 잠깐 로딩걸리고 false에서 돌아옴
        setLoading(true);
        try{ // 참이면 all /아니면 category를 query 안에 넣음
            const query = category === "all" ? "all": `category=${category}`;
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=kr&${query}&apiKey=c287f71c270848a88d69ae95296d0904`
            );
            // ok 면 setArticles 데이터 들어옴
            if(response.data.status === "ok")
            // response하면 모든 정보만 들어오니까 data 구간의 articles만 가져옴. 
            setArticles(response.data.articles);
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    };
    //fetchData(); 를 넣는 이유? 위의 함수 실행시켜주려고. 
    fetchData();
}, [category]);
// 대기중일때
if(loading){
    return <Loading/>
}
return(
    <NewsListBlock>
        {articles && articles.map(article => (
        <NewsItem key={article.url} article={article}/>
        ))}
    </NewsListBlock>
    );
};


export default NewsList;