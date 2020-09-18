const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();

    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours();

    const html = `
    <span>${hr}</span> :
    <span>${min}</span> :
    <span>${sec}</span>
    `;
    clock.innerHTML = html;
}
setInterval(tick, 1000);