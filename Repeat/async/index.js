// addEventListener do not make code asynchronous
// callback functions also not make code asynchronous
// addEventListener listening for event and not doing any work in the background
// and simply waiting for a click happen

//? AJAX = asynchronous JavaScript And XML - allows to communicate with remote web servers in an asynchronous way. 
//? with AJAX calls you can REQUEST DATA from web servers DYNAMICALLY

// client request - response webserver
// GET, POST, PUT...
// WEB API - Application Programming Interface: PIECE OF SOFTWARE THAT CAN BE USED BY ANOTHER PIECE OF SOFTWARE, in order to allow applications to talk to each other and exchange information

// data formats: 
// xml(no API uses anymore),
// json(): JavaScript Object, converted to a String
// text() ...

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

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const createGame = async () => {
  const game = {
    name: 'Tetris',
  };

  const response = await fetch(`${url}games`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(game),
  });

  const gameID = await response.json();
  const str = gameID.result;

  storage.save({ gameID: str });

  return str;
};

console.log(createGame());