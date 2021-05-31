let priceRange = $(".price-slider")[0]; //we need this price range 
let minvalue = $('.price-range .values .min')[0];//this one
let maxvalue = $(".price-range .values .max")[0];//this one
let sizeRange = $('.size-slider')[0];
let sqrft = $('.filters .sqrft')[0]; 
let resetBtn = $('.resetbtn');


// ************** copy every thing below till the comment *****************
const urlParams = new URLSearchParams(window.location.search)
  let minParam = urlParams.get('min')
  let maxParam = urlParams.get('max')
   

let minPrice = priceRange.getAttribute('data-min')
let maxPrice = priceRange.getAttribute('data-max')


const getParams = () =>{
  if(minParam && maxParam){
    return [minParam, maxParam]
  }else{
    return [minPrice , maxPrice]
  }
}


noUiSlider.create(priceRange, {
   
  start: getParams(),
  connect: true,
  range: {
    min: parseInt(minPrice),
    max: parseInt(maxPrice),
  }
})

let timeout;
priceRange.noUiSlider.on('update', (values, handle) => {
  
  minvalue.innerHTML = Math.floor(values[0]);
   maxvalue.innerHTML = Math.floor(values[1]);
   clearTimeout(timeout);
    
  })

  priceRange.noUiSlider.on('set', (values, handle) =>{
    const parmaString = `min=${ Math.floor(values[0])}&max=${Math.floor(values[1])}`
    const urlParams = new URLSearchParams(parmaString)
     
     
     timeout = setTimeout(() =>{
       window.location = location.protocol+ '//' + location.host + location.pathname + "?" + urlParams.toString()
     },[1000])
  })
 
  //******************************** till here *********************** */




noUiSlider.create(sizeRange, {
  start: 50,
  connect: [true, false],
  range: {
    min: 0,
    max: 150,
  }
});

sizeRange.noUiSlider.on('update', (values, handle) => {
  sqrft.innerHTML = Math.floor(values[handle]);
});

resetBtn.on('click', () => {
  priceRange.noUiSlider.updateOptions({
    start: [20, 100],
    
  });
  sizeRange.noUiSlider.updateOptions({
    start: 50,
  })
})

$(document).ready(() => {
  $('.filter-btn').on("click", () => {
    $('.filters').toggleClass('filters-up');
  });
  $('.filters .btns button[type = submit]').on('click', (e) => {
    e.preventDefault();
    $('.filters').toggleClass('filters-up')
  });
  

})
