import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import DiaryEditor from "../components/DiaryEditor";

const getStringDate = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
        month = `0${month}`;
    }
    if (day < 10) {
        day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
}
const New = () => {
    return (
        <div>
            <DiaryEditor/>
        </div>
    )
};

export default New;