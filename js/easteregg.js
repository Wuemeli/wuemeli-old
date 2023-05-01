const easterEgg = new EasterEgg();
const easterEgg2 = new EasterEgg();

easterEgg.addEgg([32,32,32,13], () => {
    window.open("https://www.google.com/fbx?fbx=snake_arcade", "Snake Arcade", "width=600,height=600");
});

easterEgg2.addEgg([13], () => {
    alert("You found the easter egg!");
});