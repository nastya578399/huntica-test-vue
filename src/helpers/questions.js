import {QUESTION_NUMBER} from "@/constants";

export function getQuestionsList() {
    return [...Array(QUESTION_NUMBER).keys()].map(v => v + 1);
}
