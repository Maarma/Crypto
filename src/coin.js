const API_KEY = "0351f0f65fmsh2cbaf2af67b65fdp13011ajsnf444b1f4fe65";
const BASE_URL = "coinranking1.p.rapidapi.com";

fetch(`https://${BASE_URL}/coins`, {
  headers: {
    'X-RapidAPI-Key': API_KEY,
    "X-RapidAPI-Host": BASE_URL
  }
})
  .then((response) => response.json())
  //  .then((data) => console.log(data));
  .then((data) => {
    const marketTrendsWrapper = document.querySelector("#market_trends");
    console.log(marketTrendsWrapper);
    console.log(data.data.coins);

    data.data.coins.forEach((coin) => {
      const article = document.createElement("article");
        const articleClasses = [
            "border-2",
            "p-4",
            "border-[#73FDAA]",
            "rounded-2xl"
        ]
      article.classList.add(...articleClasses);
      article.innerHTML = `
          <div class="flex mb-2">
            <div class="flex place-items-center justify-around w-2/3">
              <img class="w-12 h-12 object-cover" src="${coin.iconUrl}" alt="${coin.name}">
              <p class="mx-2">${coin.symbol}</p>
              <p class="text-[1.5vh] opacity-70">${coin.name}</p>
            </div>
            <img class="mx-auto mt-4 h-4 v-4" src="" alt="">
          </div>
          <div class="grid gap-2 px-6 pt-6 pb-2">
            <p class="text-2xl">$ ${Number(coin.price).toFixed(2)}</p>
            <p>${coin.change} %</p>
          </div>
        `;
      marketTrendsWrapper.append(article);
    });
  });