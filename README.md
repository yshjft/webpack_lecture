생활코딩 웹팩 수업내용입니다.
======================================

번들러 : 여러개의 파일을 묶어주는 파일(webpack,...)         
webpack : 하나의 자바스크립트 파일에 js, css, 이미지와 같은 모듈들을 모두 몰아 넣을 수 있다.             
여러개의 리소스 파일(js, css, jpg)을 하나의 js 파일로 묶어주는 도구인 웹팩         


### how to use

1. npm init
     
2. npm i -D webpack webpack-cli
       
3. npx webpack --entry ./source/index.js --output ./public/index_bundle.js                
내가 작업하고 있는 프로젝트에서 entry file은 source 폴더의 index.js다.           
그리고 public 폴더에 index_bundle.js라는 이름으로 index.js와 index.js가 사용하고 있는 파일들을 하나로 만들어서 가져다 놔!!!           
           
### configuration 파일
항상 npx webpack --entry ./source/index.js --output ./public/index_bundle.js 작성할 수 없다. 또한 프로젝트 규모가 커지게 되면 명령어로 웹팩을 사용하기 어려워진다. 따라서 configuration 파일을 생성하여 사용한다.
        
1. webpack.config.js 파일 작성
      
2. npx webpack --config webpack.config.js 입력 (만약 파일 이름을 webpack.config.js로 작성하면 npm webpack이라고만 작성해도 된다.)