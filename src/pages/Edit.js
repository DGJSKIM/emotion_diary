import {useNavigate, useSearchParams} from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get("id");
    const mode = searchParams.get("mode");

    return (
        <div>
            <h1>Home</h1>
            <p>이곳은 수정페이지 입니다</p>
            <button onClick={() => setSearchParams({who: 'jinseok'})}>QS바꾸기</button>
            <button onClick={() => {
                navigate("/home");
            }}>HOME으로가기
            </button>
            <button onClick={() => {
                navigate(-1);
            }}>뒤로가기
            </button>
        </div>
    );
};

export default Edit;