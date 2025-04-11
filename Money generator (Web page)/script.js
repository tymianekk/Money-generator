 //generowanie
        let money = 0;
        let grosze = 0;
        let interval;
        let waluta = "PLN";

        function coPodgladasz() {
            if (grosze < 10){
                document.getElementById('generowane').textContent = `${money}.0${grosze} ${waluta}`;
            } else {
                document.getElementById('generowane').textContent = `${money}.${grosze} ${waluta}`;
            }
        }

        function generowanie() {
            grosze = grosze + 1;

            if (grosze > 99){
                money = money + 1;
                grosze = 0;
            }
            coPodgladasz()
        };

        function generowanieAutomatyczne() {

            if (!interval) {
                interval = setInterval(generowanie, 1)
            }
        }

        function stop() {
            clearInterval(interval);
            interval = null;
        }

        function reset() {
            grosze = 0;
            money = 0;
            stop();
            document.getElementById('generowane').textContent = `${money}.0${grosze} ${waluta}`;
        }       

        function zloty() {
            waluta = "PLN";
            reset()
        }

        function euro() {
            waluta = "€";
            reset()
        }

        function dolar() {
            waluta = "$";
            reset()
        }

        function pound() {
            waluta = "£";
            reset()
        }

        function farenfajty() {
            waluta = "FT";
            reset()
        }

        function youanJen() {
            waluta = "¥";
            reset()
        }

        function filip() {
            waluta = "₱";
            reset()
        }

        function ruble() {
            waluta = "₽";
            reset()
        }