const container = document.querySelector('.container');
const imgs = document.querySelectorAll('img');

// 绑定鼠标移入事件
container.addEventListener('mouseenter', function(e) {
  this.x = e.clientX;

  
})

container.addEventListener('mousemove', function(e) {
  // 计算鼠标移动的偏移
  // 设置各个图层图片的变化
})

container.addEventListener('mouseleave', function(e) {
  // 鼠标离开后，让图片恢复原始状态

  imgs[0].style.transform = 'transform: scale(1) translate(0px, -15px) rotate(0deg)';
  imgs[0].style.opacity = 1;

  imgs[1].style.transform = 'transform: scale(1) translate(1100px, 0) rotate(0deg)';
  imgs[1].style.opacity = 1;

  imgs[2].style.transform = 'transform: scale(1) translate(675px, 0) rotate(0deg)';
  imgs[2].style.opacity = 1; 

  imgs[3].style.transform = 'transform: scale(1) translate(675px, 0) rotate(0deg)';
  imgs[3].style.opacity = 1; 
})

