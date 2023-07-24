const url = "http://localhost:3031";
const divcart3 = document.querySelector(".centers");
const GraduatChild = async () => {
  const res = await axios.get(url + "/graduatesChild");
  const data = res.data;
  console.log(data);
  data.forEach((exsten) => {
    divcart3.innerHTML += `
      <div class="cart1">
      <div class="cartimg2">
        <img src="${exsten.img}" class="widImg" alt="" />
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
