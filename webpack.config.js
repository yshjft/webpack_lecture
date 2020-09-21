// 웹팩 홈페이지 참고, document -> configuration

const path = require('path');

module.exports={
    mode :"development",
    entry : "./source/index.js",
    output : {
        path : path.resolve(__dirname, "public"),
        filename : 'index_bundle.js'
    },
    module:{
        rules: [
            {
                test : /\.css/, //확장자가 css인 파일을 아래와 같이 표현한다.
                use:[
                    'style-loader', // 웹팩으로 가져온 css 코드를 웹페이지 안에 style태그로 주입해 준다 (실행순서 2)
                    'css-loader' // css 파일을 읽어와서 웹팩으로 가져오는 역할 (실행순서 1)
                ]
            }

        ]
    }
}
