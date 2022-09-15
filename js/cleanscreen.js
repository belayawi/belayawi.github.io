window.onload = pageLoad;

function pageLoad() {
  //   let clicked = false;
  let button = document.getElementById('start');
  button.addEventListener('click', function () {
    // clicked = true;
    let backgroundColors = [
      '#F0F8FF',
      '#FFE4C4',
      '#A52A2A',
      '#FF7F50',
      '#8B008B',
      '#E9967A',
      '#9400D3',
      '#696969',
      '#FFD700',
      '#CD5C5C',
      '#7CFC00',
      '#191970',
      '#808000',
      '#CD853F',
      '#A0522D',
      '#008080',
    ];
    let randColor;
    let elements = [];
    let circleId;
    let newCircle;
    let radius = parseInt(document.getElementById('width').value);
    let growthAmount = parseInt(document.getElementById('growth').value);
    let interval = parseInt(document.getElementById('interval').value);
    let numbers = parseInt(document.getElementById('circles').value);

    for (let num = 0; num < numbers; num++) {
      circleId = 'circle-' + num;
      newCircle = document.createElement('div');
      newCircle.setAttribute('id', circleId);
      newCircle.style.width = radius + 'px';
      newCircle.style.height = radius + 'px';
      newCircle.style.borderRadius = radius + 'px';
      randColor =
        backgroundColors[Math.floor(Math.random) * backgroundColors.length];
      newCircle.style.backgroundColor = randColor;
      newCircle.style.visibility = 'visible';
      elements.push(newCircle);
    }
    $('.container').append(elements);
    let draw = function () {
      radius += growthAmount;
      for (var x = 0; x < elements.length; x++) {
        document.getElementById(`circle-${x}`).style.display = 'block';
        document.getElementById(`circle-${x}`).style.backgroundColor =
          backgroundColors[x];
        document.getElementById(`circle-${x}`).style.visibility = 'visible';
        document.getElementById(`circle-${x}`).style.width = radius + 'px';
        document.getElementById(`circle-${x}`).style.height = radius + 'px';
        document.getElementById(`circle-${x}`).style.borderRadius =
          radius + 'px';

        let circle = document.getElementById(`circle-${x}`);
        circle.addEventListener('click', (e) => {
            e.preventDefault();
          let index = elements.indexOf(circle);
          elements.splice(index, 1);
          circle.remove();
        });
      }
    };
    setInterval(draw, interval);
  });
}
