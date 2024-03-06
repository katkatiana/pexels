const imageSection = document.querySelector(".image-section")
const button = document.querySelector("#try")
const search = function(){
    fetch("https://api.pexels.com/v1/search?query=sea", 
     {headers: {
        Authorization : "HofAM1dUrakfBTZs4nbDYKC14En5MxNO7g3hgFC74GLw6HayGGytc68l"
        }
    })
    .then((response) => response.json())
    .then((data) = () => {
        imageSection.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
    })
}
button.addEventListener("click", search)
