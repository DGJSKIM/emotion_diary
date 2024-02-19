import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import DiaryList from "../components/DiaryList";

const Home = () => {
    const diaryList = useContext(DiaryStateContext);
    const [data, setData] = useState([]);
    const [curDate, setCurDate] = useState(new Date()); // 현재시각 초기값
    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`; // getMonth 는 1월을 0 으로 가져옴

    useEffect(() => {
        if(diaryList.length >= 1) {
            const firstDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth(),
                1
            ).getTime();
            const lastDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth() + 1,
                0,23,59,59
            ).getTime();

            setData(diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay));
            // 전체 목록중 firstDay <= it.date && it.date <= lastDay 인것만 보여주기
        }
    }, [diaryList, curDate]);

    const increaseMonth = () => {
        setCurDate(
            new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
        );
    };

    const decreaseMonth = () => {
        setCurDate(
            new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
        );
    };
    return (
        <div>
            <MyHeader
                headText={headText}
                leftChild={<MyButton text={"<"} onClick={decreaseMonth}/>}
                rightChild={<MyButton text={">"} onClick={increaseMonth}/>}
            />
        <DiaryList diaryList={data}/>
        </div>
    );
};

export default Home;