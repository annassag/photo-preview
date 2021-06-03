  const images = [
    "assets/1.jpg", // 1
    "assets/a.jpg", // 2 Mickey
    "assets/2.jpg", // 3 
    "assets/b.jpg", // 4 Ronghui
    "assets/c.jpg", // 5 Tarah
    "assets/3.jpg", // 6
    "assets/d.jpg", // 7 Jackie
    "assets/e.jpg", // 8 Max
    "assets/4.jpg", // 9
    "assets/f.jpg", // 10 Nabil
    "assets/g.jpg", // 11 Dylan
    "assets/h.jpg", // 12 Annie
    "assets/5.jpg", // 13
    "assets/i.jpg", // 14 Alex
    "assets/j.jpg", // 15 Rosy
    ];

var preloadedImages = [];

function preload(imageSrcs) {
  for (var i = 0; i < imageSrcs.length; i++) {
    var img = new Image();
    img.src = imageSrcs[i];
    preloadedImages.push(img);
  }
}

preload(images);