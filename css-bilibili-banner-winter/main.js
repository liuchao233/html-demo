let startingPoint
const header = document.querySelector('header')

header.addEventListener('mouseenter', (e) => {
  startingPoint = e.clientX;
  header.classList.add('moving');
})

header.addEventListener('mouseout', (e) => {
  // 鼠标移出后，恢复初始的状态
  header.style.setProperty('--percentage', 0.5)
  header.classList.remove('moving');
})

header.addEventListener('mousemove', (e) => {
  // 计算相对起始点的偏移量
  let percentage = (e.clientX - startingPoint) / window.outerWidth + 0.5;

  // 设置 css 变量 --percentage 
  header.style.setProperty('--percentage', percentage);
})