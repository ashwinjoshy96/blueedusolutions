var autoslider = autoslider || {
    el: {
      slides: document.getElementsByClassName('slide')
    },
    
    defaultDuration: 1000,
    
    init: function () {
      console.log('ini');
      
      this.current = 0;
      this.max = this.el.slides.length - 1;
      this.timer = this.getTimerValue(this.current);
      this.next();
    },
    
    next: function () {
      var that = this,
          nextIndex = this.current + 1;
      
      if (this.current === this.max) {
        nextIndex = 0;  
      }
      
      this.timer = this.getTimerValue(this.current);
      
      setTimeout(function () {
        that.changeSlide(nextIndex);
        that.current = nextIndex;
        that.next();
      }, this.timer, nextIndex);
    },
    
    changeSlide: function (nextIndex) {
      this.el.slides[this.current].classList.remove('active');
      this.el.slides[nextIndex].classList.add('active');
    },
    
    getTimerValue: function (index) {
      return this.el.slides[index].dataset.duration || this.defaultDuration;
    }
  };
  
$(function () {
    autoslider.init();
});
  