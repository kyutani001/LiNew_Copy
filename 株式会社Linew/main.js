const targets = document.querySelectorAll(".target");

const callback = function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const animationType = entry.target.getAttribute('data-animation');
            if (animationType === 'up') {
                entry.target.classList.add("up-animation");
            } else if (animationType === 'down') {
                entry.target.classList.add("down-animation");
            } else if (animationType === 'left') {
                entry.target.classList.add("left-animation");
            } else if (animationType === 'right') {
                entry.target.classList.add("right-animation");
            } else if (animationType === 'up2s') {
                entry.target.classList.add("up2s-animation");
            }else if (animationType === 'down2s') {
                entry.target.classList.add("down2s-animation");
            }
        } else {
            entry.target.classList.remove("up-animation", "down-animation", "left-animation", "right-animation", "up2s-animation");
        }
    });
}

const io = new IntersectionObserver(callback);

targets.forEach(target => {
    io.observe(target);
});