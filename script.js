const userName = document.getElementById('name');

const age = document.getElementById('age');
const occupation = document.getElementById('occupation');

age.addEventListener('keypress',(event)=>{
    if (event.key =='Enter') {
        document.getElementById('submit').click();
    }
})
class objInformation{

    constructor(username, age, occupation){
        this.userName = username;
        this.age = age;
        this.occupation = occupation;
    }

}



let fullInfoObj=[];

document.getElementById('submit').addEventListener('click', () =>{
    
    const nameValue = userName.value;
    const ageValue = age.value;
    const occupationValue = occupation.value;
   
    const informationContainer = new objInformation(nameValue,ageValue,occupationValue);
  

    fullInfoObj.push(informationContainer);
    localCheck();
    console.log(fullInfoObj);
    const ageValueFloat = parseFloat(ageValue);
   
    draw(ageValueFloat);
})



       
    const localCheck = () =>{
      
             const setItem = localStorage.setItem('fullInfo', JSON.stringify(fullInfoObj));
         
    }


    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
     const draw = (n) =>{
         console.log(n);
       const c = canvas.getContext('2d');

       c.fillStyle = 'green';
     
       c.fillRect(n,n, 100, 100);
    //    c.fillRect(100,200, 100, 100);
    //    c.fillRect(200,300, 100, 100);
    //    c.fillRect(50,50, 100, 100);
    //    c.fillRect(50,50, 100, 100);
    //    c.fillRect(50,50, 100, 100);
     

     }
  

     function line() {
        const c = canvas.getContext('2d');
      
        c.beginPath();
        c.moveTo(23, 23);
        c.lineTo(23,400);
        c.lineTo(300,400);
        c.lineTo(400,400);
        c.lineTo(400,23);
        c.lineTo(23,23);
        c.strokeStyle='red';
        c.lineWidth = 30;
        c.direction='4tr';
        c.stroke();
       
        // c.arc();
        
     }
     line()