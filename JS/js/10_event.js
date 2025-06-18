function test1(){
    console.log("요소에 이벤트 발생");
};
/*
    html페이지 로딩이 완료된 이후에 코드를 실행하고자 할 때 - window.onload사용
*/
// 속성 지정 방식과 addEventListener메서드의 차이점 : 덮어씌워짐
document.querySelector("#btn2").onclick = test1;
document.querySelector("#btn2").onclick = function(e){
    console.log("하이");
}
document.querySelector("#btn3").addEventListener("click",function(){
    console.log("#btn3 clicked!");
});
document.querySelector("#btn3").addEventListener("click",function(){
    console.log("#btn3 clicked! 2");
});

/*
    Event객체
     - 발생한 이벤트 관련 모든 정보를 가지고 있는 객체
     - 이벤트가 발생한 요소, 발생한 이벤트의 유형, html내부의 위치정보 등 다양한 정보를 가지고 있다.
     - 이벤트 발생시 브라우저는 이벤트 핸들러 함수의 첫 번째 매개변수로 항상 이벤트 객체를 주입한다.

    Event target 객체
     - 이벤트가 발생한 객체
     - 이벤트 객체의 target속성의 값
*/
document.querySelector(".box").onmouseover = function(e){
    console.log(e);
    console.log(e.target);
    e.target.innerHTML = "하이";
    // this.innerHTML = "하이하이";
}
document.querySelector(".box").onmouseout = function(e){
    console.log(e);
    console.log(e.target);
    e.target.innerHTML = "바이";
    // this.innerHTML = "바이바이";
}

/*
    keyEvent
    
    1. keydown
    2. keypress
    3. keyup
       (input이라는 이벤트도 존재한다.)
*/
document.querySelector("#userInput").addEventListener("keydown",function(e){
    console.log(e);
    document.querySelector(".text-wrapper").innerHTML = e.target.value;
});
document.querySelector("#userInput").addEventListener("keypress",function(e){
    console.log(e);
    document.querySelector(".text-wrapper").innerHTML = e.target.value;
});
document.querySelector("#userInput").addEventListener("keyup",function(e){
    console.log(e);
    document.querySelector(".text-wrapper").innerHTML = e.target.value;
});

/*
    submit event
     - 사용자가 입력한 값이 유효한 값인지 유효성 검사를 진행하기 위한 목적으로 작성한다.
    
    1. 아이디 검사
    2. 비밀번호 검사
    * 4글자 이상으로 작성해야 한다고 가정
*/
document.querySelector("form").onsubmit = function(e){
    console.log(e);
    const userId = document.querySelector("#userId");
    if(userId.value.length < 4){
        console.log("유효한 아이디를 입력하세요.");
        userId.focus();
        e.preventDefault(); // return false
        /*
            기본이벤트 실행 방지
            기본이벤트 : 각 태그마다 내장되어있는 이벤트 기능
            ex) button:submit -> submit이벤트 / a태그 -> click이벤트
        */
        // console.log("하이"); // return false 사용시 실행x
    }
    const userPwd = document.querySelector("#userPwd");
    if(userPwd.value.length < 4){
        console.log("유효한 비밀번호를 입력하세요.");
        userPwd.select();
        e.preventDefault();
    }
    return true; // 검사를 모두 통과할 경우 true 반환
};

function displayMsg(e,boxx){
    console.log(e.target, boxx.dataset.text);

    // 상위요소로의 이벤트 전파를 막는 요소
    // e.stopPropagation();
}