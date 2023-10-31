import{useState} from 'react';
import axios from 'axios'; // 엑시오스 라이브러리 가져다 씀

const Axios = () => {
    const [data, setData] = useState(null);
    const onClick = async() => {
    //     axios.get("https://jsonplaceholder.typicode.com/todos/1")
    //     // 헤더영역의 데이터도 불러와져서 데이터만 받음
    //     .then(response => {
    //         console.log(response);
    //         setData(response.data);
    //     });
    // 어웨이트 함수 내부만 대신 대기를 하고, 나머지 부분은 수행중
    // 값이 들어오면 setData를 때림. 렌더링 일어남. 이구간을 제외하고 나머지는 작동하고 있음
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        setData(response.data);
    };
    return(
        <>
            <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            {/* data가 있으면 앞의 값 */}
            {data && (
            <textarea rows={7} value={JSON.stringify(data)} reasonOnly={true} />
            )}
        </>
    );

};

export default Axios;