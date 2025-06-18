function test12(){
    console.clear();
    // 함수가 실행되면 <h3>안녕하세요</h3> 추가
    // 1. innerHTML 사용
    // document.querySelector(".result").innerHTML = "<h3>안녕하세요</h3>"
    // 2. document의 객체생성 메서드 사용
    // 1) elementNode 생성 메서드
    const h3 = document.createElement("h3"); // <h3></h3> 생성
    console.log(h3);
    // 2) textNode 생성 메서드
    const textNode = document.createTextNode("안녕하십니까");
    console.log(textNode);
    // 3) 두 노드 연결(계층구조 설정)
    h3.appendChild(textNode); // <h3>안녕하십니까</h3>
    // 4) DOM에 추가
    document.querySelector(".result").appendChild(h3);
}
function test13(){
    console.clear();
    /*
        img태그 동적 생성
        <img src="이미지파일 경로" width/height art style>
    */
    const img = document.createElement("img");
    img.src="./resources/window.png";
    img.width = "200"; // img.style = "200px";
    document.querySelector(".img-wrapper").appendChild(img);
};
function deleteNode(node){
    node.remove();
};
function test14(){

};