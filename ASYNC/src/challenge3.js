const imgContainer = document.querySelector('.images');

const wait = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000)
  });
};

const createImg = function(imgPath) {
  return new Promise (function(resolve, reject) {

    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function() {
      imgContainer.append(img);

      resolve(img);
    })

    img.addEventListener('error', function() {

      reject(new Error('Image not found!!!'));
    })
  })
}

let currImg;

// createImg('img/img-1.jpg')
//   .then(img => {
//     currImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currImg.style.display = 'none';
    
//     return createImg('img/img-2.jpg');
//   })
//   .then(img => {
//     currImg = img;
//     console.log('Image 2 loaded');
//     return wait(2)
//   })
//   .then(() => {
//     currImg.style.display = 'none';
//   })
//   .catch(err => console.error('err: ', err))


// PART 1
const LoadNPause = async function() {
  try {
    // Load img 1
      let img = await createImg('img/img-1.jpg')
      console.log('Image 1 loaded');

      await wait(2)
      img.style.display = 'none';

    // Load img 2
    img = await createImg('img/img-2.jpg')
    console.log('Image 2 loaded');

    await wait(2)
    img.style.display = 'none';
      
  } catch(err) {
    console.error('err: ', err);
  } 
}

// LoadNPause();


// PART 2
const loadAll = async function(imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImg(img));
    console.log('imgs: ', imgs);
    
  } catch (err) {
    console.log(err);
  }
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])

// imgs:  
// Array(3)
// 0: Promise {<fulfilled>: img}
// 1: Promise {<fulfilled>: img}
// 2: Promise {<fulfilled>: img}
// length: 3
// [[Prototype]]: Array(0)
