const quiz = [
    {
       questions: '次の計算の答えを求めよ',
       GAZOU : 'pikatyuu-BW.gif',
       answers: ['5','7','9','12'],
       correct: '12'
       },{
           questions: '次の計算の答えを求めなさい',
           GAZOU : 'pikatyuu-BW.gif',
           answers: ['5','7','5','12'],
           correct: '12'
           },{
               questions: '次の計算の答えを求めるのだ',
               GAZOU : 'pikatyuu-DP.gif',
               answers: ['5','7','9','12'],
               correct: '12'
               },{
                   questions: '次の計算の答えを求めましょう',
                   answers: ['5','7','9','12'],
                   GAZOU : 'pikatyuu-RS.gif',
                   correct: '12'
                   },{
                       questions: '次の計算の答えを求めていいよ',
                       GAZOU :'pikatyuu-RS.gif',
                       answers: ['5','7','9','12'],
                       correct: '12'
                       },{
                           questions: '次の計算の答えを求めろ',
                           GAZOU : 'pikatyuu-akamidori.webp',
                           answers: ['5','7','9','12'],
                           correct: '12'
                           },{
                               questions: '次の計算の答えを求めるんだ',
                               GAZOU : 'tubotubo.gif',
                               answers: ['5','7','9','12'],
                               correct: '12'
                               },];
   
   const quizLength = quiz.length;
   let quizIndex = 0;
   let score = 0;
   
   const $button = document.getElementsByTagName('button');
   const $image = document.getElementById('gazou');
   const buttonLength = $button.length;
   //クイズの問題文、選択を定義
   const setupQuiz = () => {
       document.getElementById('js-question').textContent = quiz[quizIndex].questions;
       let buttonIndex = 0;
       while(buttonIndex < buttonLength){
           //ここに命令
           $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
           $image.src = quiz[quizIndex].GAZOU;
           buttonIndex++;
       }
   }
   setupQuiz();
   
   const clickHandler = (e) => {
       if(quiz[quizIndex].correct === e.target.textContent){
           window.alert('正解！');
           score++;
       } else {
           window.alert('不正解');
       }
   
       quizIndex++;
       
       if(quizIndex < quizLength) {
      //問題数がまだあればこちら実行
      setupQuiz();
       } else { 
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
       } 
    };
       
   //ボタンをクリックしてら正誤判定
   let HandlerIndex = 0;
   while (HandlerIndex < buttonLength) {
       $button[HandlerIndex].addEventListener('click', (e) => {
           clickHandler(e);
       });
       HandlerIndex++;
   }