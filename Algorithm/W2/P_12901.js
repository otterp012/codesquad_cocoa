function solution(a, b) {
    var answer = '';
    let day = "2016-"+a+"-"+b;
    let data = new Date(day);
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    answer = days[data.getDay()];

    return answer;
}