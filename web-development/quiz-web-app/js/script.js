var questions = [
    {
        question:"Apa fungsi dari elemen HTML <P>?",
        option1: "Menentukan gaya CSS untuk eleman",
        option2: "Menampilkan text paragraf",
        option3: "Membuat tautan ke halaman lain",
        option4: "Membuat daftar terurut",
        answer: "Menampilkan text paragraf.",
        },
        {
        question:"Apa yang dilakukan elemen HTML <a>?",
        option1: "Membuat tautan ke halaman lain",
        option2: "Menampilkan gambar",
        option3: "Membuat daftar tidak terurut",
        option4: "Menentukan gaya CSS untuk elemen",
        answer: "Membuat tautan ke halaman lain.",
        },
        {
        question:"Apa fungsi dari elemen HTML <img>?",
        option1: "Menampilkan gambar",
        option2: "Membuat tautan ke halaman lain",
        option3: "Menentukan gaya CSS untuk elemen",
        option4: "Membuat daftar terurut",
        answer: "Menampilkan gambar.",
        },
        {
        question:"Apa yang dilakukan elemen HTML <ul>?",
        option1: "Membuat daftar terurut",
        option2: "Membuat daftar tidak terurut",
        option3: "Menampilkan gambar",
        option4: "Menentukan gaya CSS untuk elemen",
        answer: "Membuat daftar tidak terurut.",
        },
        {
        question:"Apa fungsi dari elemen HTML <div>?",
        option1: "Menentukan gaya CSS untuk elemen",
        option2: "Membuat tautan ke halaman lain",
        option3: "Membuat daftar terurut",
        option4: "Mengelompokkan konten dalam blok",
        answer: "Mengelompokkan konten dalam blok.",
        },
    ]

    var startBtn = document.querySelector(".startBtn");
    var login_form = document.querySelector(".login_form"); 
    var emailPass = document.querySelector(".emailPass");
    var hideBtn = document.querySelector(".hideBtn");
    var userEmail = document.getElementById("uEmail"); 
    var userPass = document.getElementById("uPassword");
    var infoBox = document.querySelector(".info_box");
    var quizStart = document.querySelector(".quiz_container");
    var resultBox = document.querySelector(".result_box");
    var scoreText = document.querySelector(".score_text");
    var inputs = document.querySelector(".inputs");
    var links = document.querySelector(".links");
    var progressBar = document.querySelector(".circular-progress");
    var progressValue = document.querySelector(".progress-value");
    var form = document.querySelector(".form");
    var countDown = document.getElementById("timer");
    var index = 0; // Question Counting
    var score = 0; // Score Counting
    var counter; // Timer Counting
    var timeValue = 25; // Timer Value

    //Registration Forms
    var singUpName = document.getElementById("sName");
    var singUpEmail = document.getElementById("sEmail");
    var singUpPass = document.getElementById("sPass");

    function submitForm() {
        event.preventDefault();
        var registerUser = {
        name: singUpName.value,
        email: singUpEmail.value,
        password: singUpPass.value
        }

        localStorage.setItem("user", JSON.stringify(registerUser));
        alert("Registration Successful!");
        window.location.href = "../index.html";
    }

    // Login Form 
    function loginForm () {
        // get data user to localStorage
        var getUserData = localStorage.getItem("user");
        getUserData = JSON.parse(getUserData);

        var getEmail = getUserData.email;
        var getPass  = getUserData.password;

        if (userEmail.value === "" || userPass.value === "") {
                // Email atau password kosong
                const Toast = Swal.mixin({
                    toast: true,    
                    position: 'top',
                    showConfirmButton: true,
                });
                Toast.fire({
                    title: '<h2>Form Login Kosong!</h2>',
                    html: '<p>Silakan isi email dan password Anda.</p>',
                    icon: 'warning',
                });

            } else if (userEmail.value === "" && userPass.value === getPass) {
                
                // Email kosong
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top',
                    showConfirmButton: true,
                });
                Toast.fire({
                    title: '<h2>Email Kosong!</h2>',
                    html: '<p>Silakan isi email Anda.</p>',
                    icon: 'warning',
                });
            } else if (userEmail.value === getEmail && userPass.value === getPass) {
                // Login berhasil Cek kecocokan email dan password
                infoBox.style.display = "block";
                login_form.style.display = "none";
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: false,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer);
                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                    },
                });
                Toast.fire({
                    title: '<h2>Login Berhasil!</h2>',
                html: '<p>Selamat datang, ' + getUserData.name + '!</p>',
                icon: 'success',
            });
        } else {
            // Email atau password salah
            const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 1500,
            });

            Toast.fire({
                title: '<h2>Email atau Password Salah!</h2>',
                html: '<p>Periksa kembali email dan password Anda.</p>',
                icon: 'error',
            });
        }
    }

    // Quit Quiz
    function quit() {
        location.reload();
    }

    //Start Quiz 
    function enterQuiz() {
        infoBox.style.display = "none";
        startBtn.style.display = "block";
    }

    //Tampilkan Pertanyaan
    function renderQuestion() {
        var question = document.getElementById("questionContainer");
        var options = document.getElementByName("options");
        var questionNo = document.getElementById("questionNo");
        clearInterval(counter);
        startTimer(timeValue);

        for (var i = 0; i < options.lenght; i++) {
            if (options[i].checked) {
            if (options[i].value === questions[index - 1].answer) {
                score++;
            }
            }
        }
    }

    var percetage = (score / questions.length) * 100;
    window.addEventListener("blur", () => {
        clearInterval(counter);
        resultbox.style.display = "flex";
        quizStart.style.display = "none";
        if (score === 0) {
            scoreText.innerHTML = `
            <span style="text-align:center; margin: 5px 0; font-size: 22px">
            Anda dilarang untuk keluar dari aplikasi Quiz, Anda dikualifikasi <span>`;
        } else {
            var progressbar = document.querySelector(".progressBar");
            if (progressbar) {
                progressbar.innerHTML = `
                <p>$(percetage)%</p>;
            }
        }
        scoreText.innerHTML = `
         <span>Score: <p>${score}</p> out of <p>${questions.length + 1}</p></span>`
    });

    if (!questions[index]) {
        clearInterval(counter);
        resultBox.style.display = "flex";
        quizStart.style.display = "none";

        scoreText.innerHTML = `
        <span>Score: <p>${score}</p> out of <p>${questions.length + 1}</p></span>`;

        var circularProgress = document.querySelector(".circular-progress"),
        progressValue = document.querySelector(".progress-value");

        var progressStartValue = 0,
        progressEndValue = percetage,
        speed = 25;

        var progress = setInterval(() => {
            progressStartValue++;

            progressValue.textContent = `${progressStartValue}%`;
            circularProgress.style.background = `conic-gradient(var(--primaryColor) ${
                progressStartValue * 3.6
            }deg, #ededef 0deg)`;
    

            if (progressStartValue === progressEndValue) {
                clearInterval(progress);
            }
        }, speed);
        retrun;

    var number = index + 1;

    var question.value = questions[index];
    questions.innerHTML = `
    <div id="question">
         <span>${index}<?span>
         <p>${questions.value.question}</p>
    </div>
    <div class="options_list">
        <label for="option1" class"options"><input type="checkbox" name="options" id="option1" value="${questions.value.option1}">${questions.value.option1}<span class="checkmark"></span></label>
        <label for="option2" class"options"><input type="checkbox" name="options" id="option2" value="${questions.value.option2}">${questions.value.option2}<span class="checkmark"></span></label>
        <label for="option3" class"options"><input type="checkbox" name="options" id="option3" value="${questions.value.option3}">${questions.value.option3}<span class="checkmark"></span></label>
        <label for="option4" class"options"><input type="checkbox" name="options" id="option4" value="${questions.value.option4}">${questions.value.option4}<span class="checkmark"></span></label>
    </div>
    `

    index++;
    questionNo.innerHTML = index;
    
    }

    // Timer 
    function startTimer(time) {
        counter = setInterval(timer, 1000);
        function timer() {
            countDown.textContent = time;
            time--;
            if (time < 0) {
                clearInterval(counter);
                renderQuestion();
                countDown.textContent = "Waktu Habis!";
                showResult();
            }
        }
    }

    //Start Quiz 
    function startQuiz() {
        quizStart.style.display = "block";
        infoBox.style.display = "none";
        renderQuestion();

        //set page fullscreen when start quiz
        document.documentElement.requestFullscreen();
    }
