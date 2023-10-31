export function getAllGames() {
  return fetch(`http://localhost:8080/products`, { method: "GET" }).then(
    (response) => response.json()
  );
}

export function getGameById(id) {
  return fetch(`http://localhost:8080/products/${id}`, { method: "GET" }).then(
    (response) => response.json()
  );
}

//구매
export function purchaseGames(games) {
  const purchaseList = games.map((game) => ({
    game: game,
    quantity: 1,
  }));
  return fetch(`http://localhost:8080/products/purchaselist`, {
    method: "POST",
    body: JSON.stringify(purchaseList),
  }).then((response) => response.json());
}

//구매한 게임들
export function getAllPurchasedGames() {
  return fetch(`http://localhost:8080/products/purchase`, {
    method: "GET",
  }).then((response) => response.json());
}
