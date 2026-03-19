function roomSwitch() {
  //Validasi lampu2 diruangan 1
  let roomLamp1 = document.getElementById("room-toggle1");
  if (roomLamp1.checked) {
    lampu1.src = "assets/images/pic_bulbon.gif";
    lampu2.src = "assets/images/pic_bulbon.gif";
    lampu3.src = "assets/images/pic_bulbon.gif";
  } else {
    lampu1.src = "assets/images/pic_bulboff.gif";
    lampu2.src = "assets/images/pic_bulboff.gif";
    lampu3.src = "assets/images/pic_bulboff.gif";
  }

  //Validasi lampu2 diruangan 2
  let roomLamp2 = document.getElementById("room-toggle2");
  if (roomLamp2.checked) {
    lampu4.src = "assets/images/pic_bulbon.gif";
  } else {
    lampu4.src = "assets/images/pic_bulboff.gif";
  }

  //Validasi lampu2 diruangan 3
  let roomLamp3 = document.getElementById("room-toggle3");
  if (roomLamp3.checked) {
    lampu5.src = "assets/images/pic_bulbon.gif";
    lampu6.src = "assets/images/pic_bulbon.gif";
  } else {
    lampu5.src = "assets/images/pic_bulboff.gif";
    lampu6.src = "assets/images/pic_bulboff.gif";
  }

  //Validasi lampu2 diruangan 4
  let roomLamp4 = document.getElementById("room-toggle4");
  if (roomLamp4.checked) {
    lampu7.src = "assets/images/pic_bulbon.gif";
    lampu8.src = "assets/images/pic_bulbon.gif";
    lampu9.src = "assets/images/pic_bulbon.gif";
    lampu10.src = "assets/images/pic_bulbon.gif";
  } else {
    lampu7.src = "assets/images/pic_bulboff.gif";
    lampu8.src = "assets/images/pic_bulboff.gif";
    lampu9.src = "assets/images/pic_bulboff.gif";
    lampu10.src = "assets/images/pic_bulboff.gif";
  }
}


function saklar(action) {  

        // Validasi lampu2 di ruangan 1
        let toggle1 = document.getElementById("default-toggle1");
        let toggle2 = document.getElementById("default-toggle2");
        let toggle3 = document.getElementById("default-toggle3");
    if(toggle1.checked) {
      lampu1.src = "assets/images/pic_bulbon.gif";
    } else {
      lampu1.src = "assets/images/pic_bulboff.gif";
    }

    if (toggle2.checked) {
      lampu2.src = "assets/images/pic_bulbon.gif";
    } else {
      lampu2.src = "assets/images/pic_bulboff.gif";
    }
    
    if (toggle3.checked) {
        lampu3.src = "assets/images/pic_bulbon.gif";
    } else {
        lampu3.src = "assets/images/pic_bulboff.gif";
    }

        // Validasi lampu2 diruangan 2
        let toggle4 = document.getElementById("default-toggle4");
    if (toggle4.checked) {
        lampu4.src = "assets/images/pic_bulbon.gif";
    } else {
        lampu4.src = "assets/images/pic_bulboff.gif";
    }

        //Validasi lampu2 diruangan 3
        let toggle5 = document.getElementById("default-toggle5");
        let toggle6 = document.getElementById("default-toggle6");
    if (toggle5.checked) {
        lampu5.src = "assets/images/pic_bulbon.gif";
    } else {
        lampu5.src = "assets/images/pic_bulboff.gif";
    }

    if (toggle6.checked) {
        lampu6.src = "assets/images/pic_bulbon.gif";
    } else {
        lampu6.src = "assets/images/pic_bulboff.gif";
    }

        //Validasi lampu2 diruangan 4
        let toggle7 = document.getElementById("default-toggle7");
        let toggle8 = document.getElementById("default-toggle8");
        let toggle9 = document.getElementById("default-toggle9");
        let toggle10 = document.getElementById("default-toggle10");

    if (toggle7.checked) {
      lampu7.src = "assets/images/pic_bulbon.gif";
    } else {
      lampu7.src = "assets/images/pic_bulboff.gif";
    }

    if (toggle8.checked) {
      lampu8.src = "assets/images/pic_bulbon.gif";
    } else {
      lampu8.src = "assets/images/pic_bulboff.gif";
    }

    if (toggle9.checked) {
      lampu9.src = "assets/images/pic_bulbon.gif";
    } else {
      lampu9.src = "assets/images/pic_bulboff.gif";
    }

    if (toggle10.checked) {
      lampu10.src = "assets/images/pic_bulbon.gif";
    } else {
      lampu10.src = "assets/images/pic_bulboff.gif";
    }
}

    //    if (lamp == 2) {
    //      lampu2.src = "assets/images/pic_bulbon.gif";
    //    }
    //     if (lamp == 3) {
    //       lampu3.src = "assets/images/pic_bulbon.gif";
    //     }
    //   
    //}
