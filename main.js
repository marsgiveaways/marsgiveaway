        // Get the modal elements
        var modaliPhone12 = document.getElementById('modal-iphone12');
        var modaliPadPro = document.getElementById('modal-ipadpro');
        var modalMacBookAir = document.getElementById('modal-macbookair');
        var modaliMac = document.getElementById('modal-imac');
        var modalAirPodsPro = document.getElementById('modal-airpodspro');
        var modalWatch = document.getElementById('modal-watch');

        // Get the button elements
        var buttoniPhone12 = document.getElementById('button-iphone12');
        var buttoniPadPro = document.getElementById('button-ipadpro');
        var buttonMacBookAir = document.getElementById('button-macbookair');
        var buttoniMac = document.getElementById('button-imac');
        var buttonAirPodsPro = document.getElementById('button-airpodspro');
        var buttonWatch = document.getElementById('button-watch');

        // Get the span element for closing the modal
        var span = document.getElementsByClassName('close')[0];

        // When the user clicks on the button, open the modal
        buttoniPhone12.onclick = function () {
            modaliPhone12.style.display = 'block';
        }

        buttoniPadPro.onclick = function () {
            modaliPadPro.style.display = 'block';
        }

        buttonMacBookAir.onclick = function () {
            modalMacBookAir.style.display = 'block';
        }

        buttoniMac.onclick = function () {
            modaliMac.style.display = 'block';
        }

        buttonAirPodsPro.onclick = function () {
            modalAirPodsPro.style.display = 'block';
        }

        buttonWatch.onclick = function () {
            modalWatch.style.display = 'block';
        }

        // When the user clicks on the close button, close the modal
        span.onclick = function () {
            modaliPhone12.style.display = 'none';
            modaliPadPro.style.display = 'none';
            modalMacBookAir.style.display = 'none';
            modaliMac.style.display = 'none';
            modalAirPodsPro.style.display = 'none';
            modalWatch.style.display = 'none';
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modaliPhone12) {
                modaliPhone12.style.display = 'none';
            }
            else if (event.target == modaliPadPro) {
                modaliPadPro.style.display = 'none';
            }
            else if (event.target == modalMacBookAir) {
                modalMacBookAir.style.display = 'none';
            }
            else if (event.target == modaliMac) {
                modaliMac.style.display = 'none';
            }
            else if (event.target == modalAirPodsPro) {
                modalAirPodsPro.style.display = 'none';
            }
            else if (event.target == modalWatch) {
                modalWatch.style.display = 'none';
            }
        }