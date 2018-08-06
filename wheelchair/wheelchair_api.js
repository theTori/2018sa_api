
var isRunning = 1;
var notRunning = 1;
//낙타 표기법

URLreceive: {
    //http server require
}
events: {
    //행동을 URL Scheme에서 가져오는 내용 넣어야.
}
setup: {
    //이름 바꾸는 함수
    //긴 랜덤토큰 생성 함수(RSA 참고)
    const NodeRSA = require('node-rsa');
    const key = new NodeRSA({b: 512});
 
    const text = 'Hello RSA!';
    const encrypted = key.encrypt(text, 'base64');
    console.log('encrypted: ', encrypted);
    const decrypted = key.decrypt(encrypted, 'utf8');
    console.log('decrypted: ', decrypted);
    // npm install node-rsa
}
astp: {
    var distanceWall;
    var safeGap;// 안전한 거리를 나타내는 값으로 초기화
    
    if(distanceWall <= safeGap){
        // stop 명령 걸어준다
    }
}
token: {
    var passWord;
    //인증키가 맞는지 확인하는 과정(RSA 참고)
    // npm install node-rsa
    const NodeRSA = require('node-rsa');
    const key = new NodeRSA({b: 512});
 
    const text = 'Hello RSA!';
    const encrypted = key.encrypt(text, 'base64');
    console.log('encrypted: ', encrypted);
    const decrypted = key.decrypt(encrypted, 'utf8');
    console.log('decrypted: ', decrypted);


}
speed: {
    var wheelchairSpeed;
    if(wheelchairSpeed > 10){
        wheelchairSpeed = 10;
    }
    else if(wheelchairSpeed < -5){
        wheelchairSpeed = -5;
    }
    //입력 들어오면 if문으로 상황 구분 후 ++나 --로 속도 조절
    //speed가 양수면 앞으로. 아니면 뒤로 조절.
}
locQ: {
    //https://github.com/google/google-api-nodejs-client 참고해서 진행할 예정
    //npm install googlemaps
    var x, y;
}
turnL: {

}
turnR: {
    //모터 조정하는 npm 패키지 받아 조정.
    
}