document.addEventListener('scroll', function (e) {
  var top  = window.pageYOffset + window.innerHeight,
      isVisibleAnim = top > document.querySelector('#anim').offsetTop;
      isVisibleReAnim = top > document.querySelector('#revanim').offsetTop;
      isVisibleAnimTwo = top > document.querySelector('#animtwo').offsetTop;
      isSkillVisible = top > document.querySelector('#skill-bar').offsetTop;

   if (isVisibleAnim) {
     document.getElementById('anim').classList.add('animate');
   }
   if(isVisibleReAnim) {
    document.getElementById('revanim').classList.add('rev-animate');
   }
   if(isVisibleAnimTwo) {
    document.getElementById('animtwo').classList.add('animate');
   }
   if(isSkillVisible) {
    document.getElementById('skill-bar').classList.add('skill-animate');
   }
});