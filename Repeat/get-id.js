class LocStorManager {
  save = (obj) => {
    const strObj = JSON.stringify(obj);
    window.localStorage.setItem('object1', strObj);
  }

  retrieve = () => {
    const serialObj = window.localStorage.getItem('object1');
    const obj = JSON.parse(serialObj) || null;

    return (obj === null) ? null : obj.gameID;
  }
}

const storage = new LocStorManager();

// const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

APP_NAME ='Movie API'

const createGame = async () => {
  // const game = {
  //   name: 'Tetris',
  // };

  const response = await fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      name: APP_NAME,
    }),
  });

  // const gameID = await response.json();
  // const str = gameID.result;

  // storage.save({ gameID: str });

  // return str;

  const data = await response.text();
  return data;
};

console.log(createGame());