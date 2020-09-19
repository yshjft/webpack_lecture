const express=require('express');
const app=express();

/*
    express.static 함수에 제공되는 경로는 node 프로세스가 실행되는 디렉토리에 대해 상대적입니다.
    Express 앱을 다른 디렉토리에서 실행하는 경우에는 다음과 같이 제공하기 원하는 디렉토리의 절대 경로를 사용하는 것이 더 안전합니다.
*/
// app.use('/source', express.static(__dirname + '/source'));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.listen('3000', ()=>{
    console.log('port 3000')
})