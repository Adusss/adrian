const testDiv = document.getElementById("icon-img");

const iconimg = [
  {
    icon_img: "img/1.jpg",
  },
  {
    icon_img: "",
  },
  {
    icon_img: "",
  },
  {
    icon_img: "",
  },
  {
    icon_img: "img/5.png",
  },



  {
    icon_img: "img/6.png",
  },
  {
    icon_img: "img/7.png",
  },
  {
    icon_img: "img/8.png",
  },
  {
    icon_img: "img/9.png",
  },
  {
    icon_img: "img/10.png",
  },



  

  {
    icon_img: "img/11.png",
  },
  {
    icon_img: "img/12.png",
  },
  {
    icon_img: "img/13.png",
  },
  {
    icon_img: "img/14.png",
  },
  {
    icon_img: "img/15.png",
  },




  {
    icon_img: "img/16.png",
  },
  {
    icon_img: "img/17.png",
  },
  {
    icon_img: "img/18.png",
  },
  {
    icon_img: "img/19.png",
  },
  {
    icon_img: "img/20.png",
  },



  
  {
    icon_img: "img/21.png",
  },
  {
    icon_img: "img/22.png",
  },
  {
    icon_img: "img/23.png",
  },
  {
    icon_img: "img/24.png",
  },
  {
    icon_img: "img/25.png",
  },



  
  {
    icon_img: "img/26.png",
  },
  {
    icon_img: "img/27.png",
  },
  {
    icon_img: "img/28.png",
  },
  {
    icon_img: "img/29.png",
  },
  {
    icon_img: "img/30.png",
  },



  
  {
    icon_img: "img/31.png",
  },
  {
    icon_img: "img/32.png",
  },
  {
    icon_img: "img/33.png",
  },
  {
    icon_img: "img/34.png",
  },
  {
    icon_img: "img/35.png",
  },



  
  {
    icon_img: "img/36.png",
  },
  {
    icon_img: "img/37.png",
  },
  {
    icon_img: "img/38.png",
  },
  {
    icon_img: "img/39.png",
  },
  {
    icon_img: "img/40.png",
  },



  
  {
    icon_img: "img/41.png",
  },
  {
    icon_img: "img/42.png",
  },
  {
    icon_img: "img/43.png",
  },
  {
    icon_img: "img/44.png",
  },
  {
    icon_img: "img/45.png",
  },



  
  {
    icon_img: "img/46.png",
  },
  {
    icon_img: "img/47.png",
  },
  {
    icon_img: "img/48.png",
  },
  {
    icon_img: "img/49.png",
  },
  {
    icon_img: "img/50.png",
  },



  
  {
    icon_img: "img/51.png",
  },
  {
    icon_img: "img/52.png",
  },
  {
    icon_img: "img/53.png",
  },
  {
    icon_img: "img/54.png",
  },
  {
    icon_img: "img/55.png",
  },




  {
    icon_img: "img/56.png",
  },
  {
    icon_img: "img/57.png",
  },
  {
    icon_img: "img/58.png",
  },
  {
    icon_img: "img/59.png",
  },
  {
    icon_img: "img/60.png",
  },




  {
    icon_img: "img/61.png",
  },
  {
    icon_img: "img/62.png",
  },
  {
    icon_img: "img/63.png",
  },
  {
    icon_img: "img/64.png",
  },
  {
    icon_img: "img/65.png",
  },




  {
    icon_img: "img/66.png",
  },
  {
    icon_img: "img/67.png",
  },
  {
    icon_img: "img/68.png",
  },
  {
    icon_img: "img/69.png",
  },
  {
    icon_img: "img/70.png",
  },




  {
    icon_img: "img/71.png",
  },
  {
    icon_img: "img/72.png",
  },
  {
    icon_img: "img/73.png",
  },
  {
    icon_img: "img/74.png",
  },
  {
    icon_img: "img/75.png",
  },



  


  

  
  


];

for (icon of iconimg) {
  testDiv.innerHTML += `
    <div class="icon-box"><img class="icon-img" src="${icon.icon_img}" alt=""></div>
  `;
}