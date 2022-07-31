/* -- START HP TYPING ANIMATION -- */

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
/* -- END HP TYPING ANIMATION -- */

/* -- START SORT LESSONS -- */
// ----- Typing Effect -----

// setup
// var typed = new Typed('.typing', {
//   strings: [  "בלט ", " מודרני ", " היפ הופ "],
//   loop: true,
//   typeSpeed: 180,
//   backSpeed: 180,
//   backDelay: 1000,
//   showCursor: false
// });

// ----- Filter Courses -----
var allCoursesContentContainers = document.getElementsByClassName(
  "courses-content-container"
);
var allCourses = document.getElementsByClassName("courses-course");
var groupA = document.getElementsByClassName("courses-group-a");
var groupB = document.getElementsByClassName("courses-group-b");
var groupC = document.getElementsByClassName("courses-group-c");
var groupD = document.getElementsByClassName("courses-group-d");
var groupE = document.getElementsByClassName("courses-group-e");
var groupF = document.getElementsByClassName("courses-group-f");
var groupG = document.getElementsByClassName("courses-group-g");
var groupH = document.getElementsByClassName("courses-group-h");
var getDropdown = document.getElementById("filter-age");

// -------------------*****---------------
getDropdown.addEventListener("change", function () {
  if (getDropdown.value == "courses-group-a") {
    for (var a = 0; a < allCourses.length; a++) {
      allCourses[a].style.display = "none";
    }

    for (var i = 0; i < groupA.length; i++) {
      groupA[i].style.display = "block";
    }
    // ---
    // for(var e = 0; e < allCoursesContentContainers.length; e++) {
    //   if(allCoursesContentContainers[e].children.length < 1) {
    //     allCoursesContentContainers[e].style.display = "none";
    //   }
    // }
    // ---
  } else if (getDropdown.value == "courses-group-b") {
    for (var a = 0; a < allCourses.length; a++) {
      allCourses[a].style.display = "none";
    }
    for (var i = 0; i < groupB.length; i++) {
      groupB[i].style.display = "block";
    }
  } else if (getDropdown.value == "courses-group-c") {
    for (var a = 0; a < allCourses.length; a++) {
      allCourses[a].style.display = "none";
    }

    for (var i = 0; i < groupC.length; i++) {
      groupC[i].style.display = "block";
    }
  } else if (getDropdown.value == "courses-group-d") {
    for (var a = 0; a < allCourses.length; a++) {
      allCourses[a].style.display = "none";
    }

    for (var i = 0; i < groupD.length; i++) {
      groupD[i].style.display = "block";
    }
  } else if (getDropdown.value == "courses-group-e") {
    for (var a = 0; a < allCourses.length; a++) {
      allCourses[a].style.display = "none";
    }

    for (var i = 0; i < groupE.length; i++) {
      groupE[i].style.display = "block";
    }
  } else if (getDropdown.value == "courses-group-f") {
    for (var a = 0; a < allCourses.length; a++) {
      allCourses[a].style.display = "none";
    }

    for (var i = 0; i < groupF.length; i++) {
      groupF[i].style.display = "block";
    }
  } else if (getDropdown.value == "courses-group-g") {
    for (var a = 0; a < allCourses.length; a++) {
      allCourses[a].style.display = "none";
    }

    for (var i = 0; i < groupG.length; i++) {
      groupG[i].style.display = "block";
    }
  } else if (getDropdown.value == "courses-group-h") {
    for (var a = 0; a < allCourses.length; a++) {
      allCourses[a].style.display = "none";
    }

    for (var i = 0; i < groupH.length; i++) {
      groupH[i].style.display = "block";
    }
  } else {
    for (var a = 0; a < allCourses.length; a++) {
      allCourses[a].style.display = "block";
    }
  }
});

// -------------------*****---------------

// schedule hide and show toggle
function scheduleHadarHamToggle() {
  var x = document.getElementById("hadar-ham-toggle-container");
  var b = document.getElementById("hadar-ham-toggle-button");
  if (x.style.display === "none") {
    x.style.display = "block";
    b.innerHTML = "הסתר מערכת שעות";
  } else {
    x.style.display = "none";
    b.innerHTML = "הצג מערכת שעות";
  }
}

function scheduleTzoranToggle() {
  var x = document.getElementById("tzoran-toggle-container");
  var b = document.getElementById("tzoran-toggle-button");
  if (x.style.display === "none") {
    x.style.display = "block";
    b.innerHTML = "הסתר מערכת שעות";
  } else {
    x.style.display = "none";
    b.innerHTML = "הצג מערכת שעות";
  }
}

/* -- END SORT LESSONS -- */
