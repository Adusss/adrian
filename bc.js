const testDiv = document.getElementById("bc-img");

const bcimg = [
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/default.jpg", bc_num: "1", name: "Default" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/treeoftime.jpg", bc_num: "2", name: "Tree of Time" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/theastralexpress.jpg", bc_num: "3", name: "The Astral Express" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/shinsenkyo.jpg", bc_num: "4", name: "Shinsenkyo" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/godsfinalwarning.jpg", bc_num: "5", name: "God's Final Warning" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/lunanovamagicalacademy.jpg", bc_num: "6", name: "Luna Nova Magical Academy" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/springsnails.jpg", bc_num: "7", name: "Spring Snails" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/limitlessawakening.jpg", bc_num: "8", name: "Limitless Awakening" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/timeforpractice.jpg", bc_num: "9", name: "Time for Practice" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/familiacafeterrace.jpg", bc_num: "10", name: "Familia Café Terrace" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/differentfates.jpg", bc_num: "11", name: "Different Fates" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/fontaine.jpg", bc_num: "12", name: "Fontaine" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/howlsbathroom.jpg", bc_num: "13", name: "Howl's Bathroom" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/dreadfulwinter.jpg", bc_num: "14", name: "Dreadful Winter" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/islandofmusic.jpg", bc_num: "15", name: "Island of Music" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/oceansidespot.jpg", bc_num: "16", name: "Oceanside Spot" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/kuraiganaisland.jpg", bc_num: "17", name: "Kuraigana Island" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/marygeoise.jpg", bc_num: "18", name: "Mary Geoise" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/convergence.jpg", bc_num: "19", name: "Convergence" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/roserain.jpg", bc_num: "20", name: "Rose Rain" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/finalfarewells.jpg", bc_num: "21", name: "Final Farewells" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/hopefullights.jpg", bc_num: "22", name: "Hopeful Lights" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/eternalfreeze.jpg", bc_num: "23", name: "Eternal Freeze" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/airisfragment.jpg", bc_num: "24", name: "Airi's Fragment" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/musicroom.jpg", bc_num: "25", name: "Music Room" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/floralbedroom.jpg", bc_num: "26", name: "Floral Bedroom" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/childhoodpromises.jpg", bc_num: "27", name: "Childhood Promises" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/lucasleeestate.jpg", bc_num: "28", name: "Lucas Lee Estate" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/godardmystery.jpg", bc_num: "29", name: "Godard Mystery" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/fabiriophase.jpg", bc_num: "30", name: "Fabiriophase" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/scarletdevilmansion.jpg", bc_num: "31", name: "Scarlet Devil Mansion" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/underseadream.jpg", bc_num: "32", name: "Undersea Dream" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/cityofmagic.jpg", bc_num: "33", name: "City of Magic" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/digivicetri.jpg", bc_num: "34", name: "Digivice Tri" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/empathyforthedead.jpg", bc_num: "35", name: "Empathy for the Dead" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/thesuitcase.jpg", bc_num: "36", name: "The Suitcase" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/melusinevillage.jpg", bc_num: "37", name: "Melusine Village" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/blueroses.jpg", bc_num: "38", name: "Blue Roses" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/smellylidprison.jpg", bc_num: "39", name: "Smelly Lid Prison" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/thereverie.jpg", bc_num: "40", name: "The Reverie" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/thenihility.jpg", bc_num: "41", name: "The Nihility" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/littlestrawberryglasses.jpg", bc_num: "42", name: "Little Strawberry Glasses" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/jinzhou.jpg", bc_num: "43", name: "Jinzhou" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/marinsroom.jpg", bc_num: "44", name: "Marin's Room" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/adateatcatnip.jpg", bc_num: "45", name: "A Date at Catnip" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/dreamscape.jpg", bc_num: "46", name: "Dreamscape" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/cathedralofthesacredblood.jpg", bc_num: "47", name: "Cathedral of the Sacred Blood" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/lawlesscity.jpg", bc_num: "48", name: "Lawless City" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/kunimitogecemetery.jpg", bc_num: "49", name: "Kunimitoge Cemetery" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/goblinsdungeon.jpg", bc_num: "50", name: "Goblins Dungeon" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/copiedcity.jpg", bc_num: "51", name: "Copied City" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/tingarlaaquarium.jpg", bc_num: "52", name: "Tingarla Aquarium" },
  { bc_img: "http://d2l56h9h5tj8ue.cloudfront.net/images/backgrounds/natlan.jpg", bc_num: "53", name: "Natlan" },
];

let htmlContent = "";

for (const { bc_img, bc_num, name } of bcimg) {
  htmlContent += `
    <div class="bc-box">
      <img class="bc-img" src="${bc_img}" alt="${name}" />
      <div class="number-bc-box">
        <div class="number-bc">${bc_num}</div>
        <div class="name-bc">${name}</div>
      </div>
    </div>
  `;
}

testDiv.innerHTML = htmlContent;
