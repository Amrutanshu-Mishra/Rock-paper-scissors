const gameContainer=document.querySelector(".container");
const userResult=document.querySelector(".user_result img");
const cpuResult=document.querySelector(".cpu_result img");
const result=document.querySelector(".result");
const optionImages=document.querySelectorAll(".option_image");


optionImages.forEach((image,index)=>{
     image.addEventListener("click",(e)=>{
          image.classList.add("active");

          userResult.src=cpuResult.src="./rock-paper-scissor-game-images/images/rock.png";
          result.textContent="Wait...";
          optionImages.forEach((image2,index2)=>{
               index!==index2 && image2.classList.remove("active");
          });

          gameContainer.classList.add("start");


          let time=setTimeout(()=>{

               gameContainer.classList.remove("start");
               let imageSrc=e.target.querySelector("img").src;
               // console.log(e.target);
               userResult.src=imageSrc;

               let random_number=Math.floor(Math.random()*3);
               let options_for_cpu=["./rock-paper-scissor-game-images/images/rock.png","./rock-paper-scissor-game-images/images/paper.png","./rock-paper-scissor-game-images/images/scissors.png"];
               // console.log(random_number);
               cpuResult.src=options_for_cpu[random_number];
               
               let arr_of_opt=["R","P","S"];
               let cpu_choice=arr_of_opt[random_number];
               let user_choice=arr_of_opt[index];
               
               let outcomes={
                    RR:"Draw",
                    RP:"Cpu",
                    RS:"User",
                    PP:"Draw",
                    PR:"User",
                    PS:"Cpu",
                    SS:"Draw",
                    SR:"Cpu",
                    SP:"User",
               };
               let finalOutcome=outcomes[user_choice+cpu_choice];
               // console.log(finalOutcome);
               result.textContent= user_choice===cpu_choice ? "Match Draw" : `${finalOutcome} won !!`;
          },2500);


          
     });
});