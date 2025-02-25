let time = 1500;
        let timerInterval;

        function updateTimerDisplay() {
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            document.getElementById('timer').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }

        function startTimer() {
            if (!timerInterval) {
                timerInterval = setInterval(() => {
                    if (time > 0) {
                        time--;
                        updateTimerDisplay();
                    } else {
                        clearInterval(timerInterval);
                        timerInterval = null;
                        alert('Time is up!');
                    }
                }, 1000);
            }
        }

        function pauseTimer() {
            clearInterval(timerInterval);
            timerInterval = null;
        }

        function resetTimer() {
            clearInterval(timerInterval);
            timerInterval = null;
            time = 1500;
            updateTimerDisplay();
        }

        updateTimerDisplay();