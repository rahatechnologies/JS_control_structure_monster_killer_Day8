const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 10;
let choseMaxLife = 100;

let currentMonsterHealth = choseMaxLife;
let currentPlayerHealth = choseMaxLife;

adjustHealthBars(choseMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;

  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You Won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You Lost!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('Match Draw!');
  }
}

attackBtn.addEventListener('click', attackHandler);
