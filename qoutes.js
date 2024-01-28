const loading = document.getElementById("loading");
const author_name = document.getElementById("author");
const apiurl  ="https://api.quotable.io/random";

async function apifetch(url){
  const apivalue = await fetch(url);
  var apidata = await apivalue.json();
  // console.log(apidata.author)
  loading.innerHTML = apidata.content;
  author_name.innerHTML = apidata.author;
} 
apifetch(apiurl);

function tweet(){
  window.open("https://twitter.com/intent/tweet?text="+loading.innerHTML+" ---by "+author_name.innerHTML);
}
