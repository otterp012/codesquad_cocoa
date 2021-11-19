let answer;
let location1 = x1;
let location2 = x2;

if(v1 <= v2) answer = "NO";
else {
    while(location2 <= Number.MAX_SAFE_INTEGER) {
        location1 += v1;
        location2 += v2;

        if(location1 === location2) {
            answer = "YES";
            break;
        } else if(location1 > location2) {
            answer = "NO";
            break;
        }
    }
}
return answer;