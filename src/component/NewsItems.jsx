import styled from "styled-components";

const NewsItemBlock = styled.div`
    display: flex;
    .thumbnail {
        margin-right: 1em;
        img{
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }
    .contents {
        h2 {
            margin: 0;
            a{
                color: black;
            }
        }
        p{
            margin:0;
            line-height: 1.5;
            margin-top: .5rem; // 8px정도
            white-space: normal;
        }
    }
    // 인접형제 선택자. NewsItemBlock과 NewsItemBlock 사이. 하나의 뉴스 사이에 공간주기
    & + & {
        margin-top: 3em; 
    }
`;
// 구조분해 props 안의 요소 article을 뽑아냄, 
//(articles은 배열로 들어옴/articles안에는 객체(article)가 여러개 존재)
const NewsItem = ({article}) => {
    // 여기서 다시 뽑아냄
    const {title, description, url, urlToImage} = article;
    return (
        <NewsItemBlock>
            {/* urlToImage가 있으면~ 없으면 */}
            {urlToImage && (
                <div className="thumbnail">
                    {/* _blank : 새창에서 띄우기, noopener noreferrer": 보안성때문에 사용, 이전페이지 참조불가 */}
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail"/>
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    );
};

export default NewsItem;