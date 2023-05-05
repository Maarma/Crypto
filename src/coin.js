import { getCoins, getCoin, getCoinHistory } from "../api/coinService.js";

const data = await getCoins();

    const marketTrendsWrapper = document.querySelector("#market_trends");
    //console.log(marketTrendsWrapper);
    //console.log(data.data.coins);

    data.data.coins.forEach((coin) => {
      const article = document.createElement("article");

      article.setAttribute("data-uuid", coin.uuid);

        const articleClasses = [
            "border-2",
            "p-4",
            "rounded-2xl"
        ];
      
      const borderColorsWeDontWant = ['#000000', '#00042b', '#303030']; //not visible border colors list
      
      article.style.borderColor = borderColorsWeDontWant.includes(coin.color) ? '#73FDAA' : coin.color;
      // if border colors in list, use green

      article.classList.add(...articleClasses); //
      article.innerHTML = `
          <div class="flex mb-2">
            <div class="flex place-items-center justify-around w-4/5">
              <img class="w-12 h-12 object-cover" src="${coin.iconUrl}" alt="${coin.name}">
              <p class="mx-2">${coin.symbol}</p>
              <p class="text-[1.5vh] opacity-70">${coin.name}</p>
            </div>
            <img class="mx-auto mt-4 h-4 v-4" src="" alt="">
          </div>
          <div class="grid gap-2 px-6 pt-6 pb-2">
            <p class="text-2xl">$ ${Number(coin.price).toFixed(2)}</p>
            <p class="${String(coin.change).startsWith('-')
             ? 'text-red-500'
             : 'text-green-400'
            }">${coin.change} %</p>
          </div>
        `;
      marketTrendsWrapper.append(article);
    });

    const cards = document.querySelectorAll("#market_trends article");
    cards.forEach((node)=> {
      node.addEventListener('click', async (event) => {
        const uuid = event.currentTarget.getAttribute("data-uuid");
        console.log(uuid);
        const response = await getCoin(uuid);
        const history = await getCoinHistory(uuid);
        // console.log(response);
        // console.log(history);
        const result = {...response.data.coin, ...history.data}; // ... <- data for all coins
        console.log(result);
      });
    });
  