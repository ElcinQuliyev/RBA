const url = "http://localhost:3031";
const divcart = document.querySelector(".divcarts");
// ----Section(3)---
const ShowCours = async () => {
  const res = await axios.get(url + "/cartCourses");
  const data = res.data;
  console.log(data);

  data.map((cours) => {
    divcart.innerHTML += `
    <div class="cart1">
    <div class="cartimg1">
      <img src="${cours.img}" alt="" />
    </div>
    <div class="center">
      <div class="iconstar">
       ${cours.starIcon}
      </div>
      <div class="hourname">
       ${cours.hour}
        <div class="ellipsis"></div>
        ${cours.elipName}
      </div>
      <h5 class="titleh5">${cours.titleBootm}</h5>
     
      <div class="hoverP">
        <p>
         ${cours.description}
        </p>
      </div>
      <div class="btnmany">
        <button type="button" class="btnsec3 changebg" id="btn3">
          Ətraflı
        </button>
        <p>10 AZN <sup class="aydesign"> ay</sup></p>
      </div>
      <div class="bgborder positlove">
        <a href="#"
          ><img src="./img/icons8-love-20.png" alt=""
        /></a>
      </div>
    </div>
  </div>
    `;
  });
};
ShowCours();

const divcart2 = document.querySelector(".divcarts2");
// ---Section(6)----
const ShowExsam = async () => {
  const res = await axios.get(url + "/cartExsam");
  const exams = res.data;
  console.log(exams);
  exams.forEach((exsam) => {
    divcart2.innerHTML += `
    <div class="cart1">
              <div class="cartimg2">
                <img src="${exsam.img}" alt="" />
              </div>
              <div class="center">
                <div class="hourname">
                  ${exsam.month}
                  <div class="ellipsis"></div>
                ${exsam.allExsam}
                </div>
                <h5 class="titleh5sec6">${exsam.titleBootm}</h5>
                <div class="hoverP">
                  <p>
                    ${exsam.description}
                  </p>
                </div>
                <div class="btnmany">
                  <button type="button" class="btnsec3 changebg">
                    Ətraflı
                  </button>
                  <p>10 AZN</p>
                </div>
              </div>
            </div>
    
    
    `;
  });
};
ShowExsam();

const divcart3 = document.querySelector(".divcarts3");
// ---Section(9)--
const GraduatChild = async () => {
  const res = await axios.get(url + "/graduatesChild");
  const data = res.data;
  console.log(data);
  data.forEach((exsten) => {
    divcart3.innerHTML += `
    <div class="cart1">
    <div class="cartimg2">
      <img src="${exsten.img}" alt="" />
    </div>
    <div class="center">
      <div class="hourname">
      ${exsten.allExsam}

      </div>
      <h5 class="titleh5sec9">${exsten.titleBootm}</h5>
      <div class="hoverP">
        <p>
         ${exsten.description}
        </p>
      </div>
      <div class="btnmany changebtnmany">
        <p>${exsten.entrancBall} bal</p>
      </div>
    </div>
  </div>
    `;
  });
};
GraduatChild();

// ----Section(12)----

const divcart4 = document.querySelector(".divcarts4");

const cartsNewses = async () => {
  const res = await axios.get(url + "/cartsNews");

  const data = res.data;
  console.log(data);
  data.forEach((exsten) => {
    divcart4.innerHTML += `   
    <div class="cart2">
              <a href="../singlexeberler/index.html?id=${exsten.id}" class="cartimg2">
                <img src="${exsten.img}" alt="" />
              </a>
              <div class="center">
                <h5 class="titleh5">${exsten.allExsam}</h5>
                <p>
                  ${exsten.description}
                </p>
                <div class="changediv">
                  <p style="color: red; margin: 0px 5px">${exsten.date}</p>
                  <p>${exsten.month}</p>
                </div>
              </div>
            </div>   
    `;
  });
};
cartsNewses();

// const id = new URLSearchParams(window.location.search).get("id");

// const newsCard = async () => {
//   const res = await axios.get(url + "/cartsNews");
//   const data = res.data;
//   console.log(data);
//   data.forEach((exsten) => {
//     divcart4.innerHTML += `
//     <div class="cart2">
//               <div class="cartimg2">
//                 <img src="${exsten.img}" alt="" />
//               </div>
//               <div class="center">
//                 <h5 class="titleh5">${exsten.allExsam}</h5>
//                 <p>
//                   ${exsten.description}
//                 </p>
//                 <div class="changediv">
//                   <p style="color: red; margin: 0px 5px">${exsten.date}</p>
//                   <p>${exsten.month}</p>
//                 </div>
//               </div>
//             </div>
//     `;
//   });
// };

// divcart4.addEventListener("click", newsCard);

// const btn = document.querySelector(".btn4");
// btn.addEventListener("click", ShowNews);

// async function ShowNews() {
//   const { data } = await axios.get(url + "/cartsNews");
//   console.log(data);
// }
