// 웹팩 홈페이지 참고, document -> configuration

const path = require('path');
//플러그인은 직접 가져와야 한다.
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html 탬플릿 자동으로 만들어주는 플러그인

module.exports={
    mode :"development",
    entry : { // 여러개의 entry를 설정하는 법
        index : "./source/index.js",
        about : "./source/about.js"
    },
    output : {
        path : path.resolve(__dirname, "public"),
        filename : '[name]_bundle.js' // [name] : 약속이다. entry에서 정한 index나 about이 들어가게 된다.
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
    },
    plugins:[
        new HtmlWebpackPlugin({
            template : './source/index.html',
            filename : './index.html',
            chunks:['index'],
        }),
        new HtmlWebpackPlugin({
            template : './source/about.html',
            filename : './about.html',
            chunks:['about'],
        }),
    ]
}
