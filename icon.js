const testDiv = document.getElementById("icon-img");

const iconimg = [];
for (let i = 1; i <= 100; i++) {
  iconimg.push({
    icon_img: `img/${i}.png`,
    icon_num: `${i}`,
  });
}

let htmlContent = "";

for (let icon of iconimg) {
  htmlContent += `
    <div class="icon-box">
      <img class="icon-img" src="${icon.icon_img}" alt="Ikona ${icon.icon_num}">
      <div class="number-icon-box">
        <div class="number-icon">${icon.icon_num}</div>
      </div>
    </div>
  `;
}

testDiv.innerHTML = htmlContent;
