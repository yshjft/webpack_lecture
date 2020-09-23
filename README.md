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


### webpack 운영 모드
웹팩은 굉장히 많은 설정을 가지고 있고 이를 사용자가 모두 기억할 수 없으므로 3가지 모드를 제공한다. (production, none, development)        
            
### webpack 로더(굉장히 중요하다.)
웹팩은 javascript가 아닌 css나 png도 번들링 해준다. 그리고 이역할을 로더가 수행한다.        

설치)       
npm install -D style-loader css-loader       

로더 : 입력한 asset들을 가공하여 우리가 원하는 output을 만들어주는 일종의 가공 공정          
(이러한 로더를 module의 rules라는 부분에 로더를 setting한다.         
test는 로더에 해당되는 이름을 검출하는 코드를 작성한다.          
test에 해당되는 파일이 발견되면 use에 작성된 로더를 통해 처리한다. 로더는 뒤쪽에 있는 것 부터 먼저 실행 된다.)   
                
                
### output 설정
어떻게 최종적인 결과를 원하는데로 만들것인가를 배운다.