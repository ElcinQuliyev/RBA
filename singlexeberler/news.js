const divCenter = document.querySelector(".div-center");
const url = "https://my-json-server.typicode.com/ElcinQuliyev/dbJson";

const id = new URLSearchParams(window.location.search).get("id");

const cardData = async () => {
  const { data } = await axios.get(`${url}/cartsNews/${id}`);

  const html = `
    <div class="section1">
        <div class="divImgCenter">
            <img src=".${data.img}" class="imgWidth" alt="${data.allExsam}" />
        </div>

        <div class="centerDivText">
            <span class="spanDate">${data.date} ${data.month} 2023</span>

            <h3>
            ${data.allExsam}
            </h3>

            <p>
                ${data.description}
            </p>
        </div>
    </div>
  `;

  divCenter.innerHTML = html;
};

cardData();

const divTexter = document.querySelector(".div-texter");
const divCour = document.querySelector(".div-cours");
const divExsam = document.querySelector(".div-exsam");
const ShowCourses = async () => {
  const { data } = await axios.get(`${url}/cartCourses`);
  console.log(data);
  data.map((cours) => {
    divCour.innerHTML += `
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
      
    </div>
  </div>
    `;
  });
};
const ShowExsam = async () => {
  const { data } = await axios.get(`${url}/cartExsam`);

  data.forEach((exsam) => {
    divExsam.innerHTML += `
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

ShowCourses();
const ShowNews = async () => {
  const { data } = await axios.get(`${url}/cartsNews`);

  console.log(data);

  data.map((exsten) => {
    console.log(exsten);
    showhtml = `

  <div class="cart2">
  <a href="../../RBA/xeberler/index.html?id=${exsten.id}" class="cartimg2">
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
    divTexter.innerHTML += showhtml;
  });
};
ShowNews();
