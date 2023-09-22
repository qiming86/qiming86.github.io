fetch('https://qiming86.github.io/questions.json')
    .then(response => response.json())
    .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomImageURL = 'https://qiming86.github.io/' + data[randomIndex].imageURL;
        const randomImageName = data[randomIndex].imageName;

        const imageElement = document.getElementById('image');
        const resultElement = document.getElementById('result');
		const avilElement = document.getElementById('availNames');

        const buttons = [
            document.getElementById('button1'),
            document.getElementById('button2'),
            document.getElementById('button3'),
            document.getElementById('button4')
        ];

        imageElement.src = randomImageURL;

		availableNames = data.map(item => item.imageName).filter(name => name !== randomImageName);
        availableNames = availableNames.sort(() => Math.random() - 0.5).slice(0, 3);
		availableNames.push(randomImageName).sort(() => Math.random() - 0.5);
		avilElement.textContent = availableNames;
		

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].textContent = 'hello';
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
