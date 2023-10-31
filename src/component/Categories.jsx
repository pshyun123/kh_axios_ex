import styled,{css} from "styled-components";
const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    },
]
const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        /* 가로축 스크롤바 생김 */
        overflow-x: auto;
    }
`;
// 각각의 아이템을 띄우는 부분
const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre; // 공백, 줄바꿈 있는 경우 그대로 표시
    text-decoration: none;
    color: inherit;
    padding-bottom: .25rem;

    &:hover {
        color: 495057;
    }
    ${props => 
    // 선택된 항목 스타일 바뀌는 것
    // 스타일 재정의
    props.active && css`
        font-weight: 600;
        border-bottom: 2px solid #22bbcf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    `}
    & + &{
        margin-left: 1rem;
    }
`;
// 상위 메뉴(부모)인 News가 알아야함-상태 관리
//onSelect는 함수(상태를 변경할 수 있는 state포함된)를 넘겨줌.  
// Category는 뒷부분
const Categories = ({onSelect, category}) => {
    return(
        <CategoriesBlock>
            {/* 넘어온 이름이랑 카테고리가 같으면 바꿔줌 */}
            {categories.map(c => (
                <Category 
                key={c.name} 
                active={category === c.name} 
                onClick={()=>onSelect(c.name)} //onSelect부모가 날려준 함수, 눌러진 상태 가지고 역으로 props 날리기위해(부모->자식), 
                >{c.text}</Category>
                // 
            ))}
        </CategoriesBlock>
    );
};

export default Categories;