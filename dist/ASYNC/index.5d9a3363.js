const imgContainer=document.querySelector(".images"),wait=e=>new Promise((o=>{setTimeout(o,1e3*e)})),createImg=function(e){return new Promise((function(o,a){const n=document.createElement("img");n.src=e,n.addEventListener("load",(function(){imgContainer.append(n),o(n)})),n.addEventListener("error",(function(){a(new Error("Image not found!!!"))}))}))};let currImg;const LoadNPause=async function(){try{let e=await createImg("img/img-1.jpg");console.log("Image 1 loaded"),await wait(2),e.style.display="none",e=await createImg("img/img-2.jpg"),console.log("Image 2 loaded"),await wait(2),e.style.display="none"}catch(e){console.error("err: ",e)}},loadAll=async function(e){try{const o=e.map((async e=>await createImg(e)));console.log("imgs: ",o);const a=await Promise.all(o);console.log("imgsEl: ",a),a.forEach((e=>e.classList.add("parallel")))}catch(e){console.log(e)}};loadAll(["img/img-1.jpg","img/img-2.jpg","img/img-3.jpg"]);
//# sourceMappingURL=index.5d9a3363.js.map
