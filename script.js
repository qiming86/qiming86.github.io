fetch('https://qiming86.github.io/questions.json')
    .then(response => response.json())
    .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomImageURL = 'https://qiming86.github.io/' + data[randomIndex].imageURL;
        const randomImageName = data[randomIndex].imageName;

        const imageElement = document.getElementById('image');
        const resultElement = document.getElementById('result');

        const buttons = [
            document.getElementById('button1'),
            document.getElementById('button2'),
            document.getElementById('button3'),
            document.getElementById('button4')
        ];

        imageElement.src = randomImageURL;

        const availableNames = data.map(item => item.imageName).filter(name => name !== randomImageName);
        availableNames.sort(() => Math.random() - 0.5);

        for (let i = 0; i < buttons.length; i++) {
            if (i === 0) {
                buttons[i].textContent = randomImageName;
            } else {
                buttons[i].textContent = availableNames.pop();
            }
            buttons[i].addEventListener('click', function() {
                if (this.textContent === randomImageName) {
                    resultElement.textContent = 'Correct!';
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000); // Refresh after 1 second
                } else {
                    resultElement.textContent = 'Incorrect!';
                }
            });
        }
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });
