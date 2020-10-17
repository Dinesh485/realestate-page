let priceRange = $(".price-slider")[0];
let minvalue = $('.values .min')[0];
let maxvalue = $(".values .max")[0];
let sizeRange = $('.size-slider')[0];
let sqrft = $('.sqrft')[0];
let resetBtn = $('.resetbtn');

noUiSlider.create(priceRange, {
  start: [20, 100],
  connect: true,
  range: {
    min: 10,
    max: 150,
  }
})

priceRange.noUiSlider.on('update', (values, handle) => {
  minvalue.innerHTML = Math.floor(values[0]);
   maxvalue.innerHTML = Math.floor(values[1]);
  })

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

