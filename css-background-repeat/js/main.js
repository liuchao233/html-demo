var $right = $('.right');

$('.left').on('click', 'div', function (e) {
  var $this = $(this);
  if ($this.hasClass('active')) {
    return;
  }

  var $active = $('.active');
  $active.removeClass('active');
  
  $right.removeClass($active.attr('class'));
  $right.addClass($this.attr('class'));
  
  $this.addClass('active');
})