arr = [
  {
    pic: "https://images.unsplash.com/photo-1604514649606-2fdd0399de88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
  },
  {
    pic: "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
  },
  {
    pic: "https://images.unsplash.com/photo-1608477194635-63cd7d9c75bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    pic: "https://images.unsplash.com/photo-1604681742095-dd1ccc5e4900?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
  },
];
var stories = document.querySelector("#stories");
var pics = document.querySelector(".pics");
var temp = "";

arr.forEach(function (elem, index) {
  temp += `   
  <div class="story">
  <img id="${index}" src="${elem.pic}" alt="" />
  </div>   
  `;
});

stories.innerHTML = temp;

stories.addEventListener("click", function (dets) {
  showstory(Number(dets.target.id));
});

function showstory(index) {
  var prg = 0;
  var cap = index;
  document.querySelector(".pic img").setAttribute("src", arr[index].pic);
  pics.style.display = "initial";
  var s = setInterval(function () {
    if (document.querySelector(".prg").style.width != "100%") {
      document.querySelector(".prg").style.width = prg++ + "%";
    } else {
      prg = 0;
      document.querySelector(".prg").style.width = "0%";
      pics.style.display = "none";
      clearInterval(s);
      if (cap + 1 <= arr.length - 1) {
        showstory(cap + 1);
      }
    }
  }, 20);
}
