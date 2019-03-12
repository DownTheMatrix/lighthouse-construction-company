const init = () => {
  /* Smooth Scrolling */
  function smoothScroll(target, duration) {
    const navbarHeight =
      parseInt(
        getComputedStyle(document.getElementsByTagName("nav")[0]).height
      ) - 1;
    target = document.querySelector(target);
    let targetPosition = target.getBoundingClientRect().top - navbarHeight;
    let startPosition = window.pageYOffset || window.scrollY;
    let startTime = null;

    function loop(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(loop);
    }
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(loop);
  }

  const homeLink = document.querySelector('a[href="#header"]');
  const servicesLink = document.querySelector('a[href="#services"]');
  const branchesLink = document.querySelector('a[href="#branches"]');
  const teamLink = document.querySelector('a[href="#team"]');
  const contactLink = document.querySelector('a[href="#cooperation"]');

  homeLink.addEventListener("click", () => smoothScroll("#header", 1000));
  servicesLink.addEventListener("click", () => smoothScroll("#services", 1000));
  branchesLink.addEventListener("click", () => smoothScroll("#branches", 1000));
  teamLink.addEventListener("click", () => smoothScroll("#team", 1000));
  contactLink.addEventListener("click", () => smoothScroll("#cooperation", 1000));

  /* Toggle Modal Box */
  const modalBtn = document.querySelector(".modal-btn");
  const modalBOx = document.querySelector("#modal-box");
  const docBody = document.querySelector("body"); 
  const closeBtn = document.querySelector(".close-btn");

  const toggleModal = () => {
    modalBOx.classList.toggle("modal-show");
    docBody.classList.toggle("body-overflow");
  };

  modalBtn.addEventListener("click", toggleModal);
  closeBtn.addEventListener("click", toggleModal);
};

document.addEventListener("DOMContentLoaded", init);