//同步测试
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let p=document.querySelector('h2');
p.textContent='龙猫！！！';
    /*document.querySelector('html').onclick = function() {
        alert('别戳我，我怕疼。');
    }*/x
    let myImage = document.querySelector('img');

    myImage.onclick = function() {
        let mySrc = myImage.getAttribute('src');
        if(mySrc === 'images/LM.png.jpeg') {
          myImage.setAttribute('src', 'images/bc.jpeg');
        } else {
          myImage.setAttribute('src', 'ab.jpeg');
        }
    }//切换图片
    
    function setHeading(name) {
        let myHeading = document.querySelector('h1');
        myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
      }
      
      function setUserName() {
        let myName = prompt('请输入你的名字');
        localStorage.setItem('name', myName);
        setHeading(myName);
      } 
      
      let storedName = localStorage.getItem('name');
      if(!storedName) {
         setUserName();
      } else {
         setHeading(storedName);
      }
      
      let myButton = document.querySelector('button'); 
      myButton.onclick = setUserName;//切换个性化用户