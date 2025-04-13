document.addEventListener('DOMContentLoaded',
    function () {
        const animatedBackground = document.getElementById('animated-background');
        if (!animatedBackground) {
            console.error("#animated-background element not found!");
            return;
        }

        const background = animatedBackground.querySelector('#background');

        if (!background) {
            console.error("#background element not found within #animated-background!");
            return;
        }

        const numSpans = 125;

        const colors = ['oklch(0.6 0.25 260)', 'oklch(0.3 0.01 0)', 'oklch(1 0 0)', 'oklch(0.5 0.02 0)'];

        for (let i = 0; i < numSpans; i++) {
            const span = document.createElement('span');

            // Basic Styling
            span.style.width = '1vmin';
            span.style.height = '1vmin';
            span.style.borderRadius = '1vmin';
            span.style.backfaceVisibility = 'hidden';
            span.style.position = 'absolute';

            // Random Properties (adjust ranges as needed)
            const top = Math.floor(Math.random() * 101); // 0-100
            const left = Math.floor(Math.random() * 101); // 0-100
            const animationDuration = Math.floor(Math.random() * 200) + 15; // 15-215
            const animationDelay = Math.floor(Math.random() * 200) - 200; // -200 to 0
            const transformOriginX = Math.floor(Math.random() * 41) - 20; // -20 to 20
            const transformOriginY = Math.floor(Math.random() * 51) - 25; // -25 to 25
            const boxShadowSize = Math.random() * 1 + 0.2;  //0.2 - 1.2

            const color = colors[Math.floor(Math.random() * colors.length)]; // Random color from array

            // Apply styles
            span.style.color = color;
            span.style.top = `${top}%`;
            span.style.left = `${left}%`;
            span.style.animationDuration = `${animationDuration}s`;
            span.style.animationDelay = `${animationDelay}s`;
            span.style.transformOrigin = `${transformOriginX}vw ${transformOriginY}vh`;
            span.style.boxShadow = `2vmin 0 ${boxShadowSize}vmin currentColor`;

            // Animation
            span.style.animationName = 'move';
            span.style.animationTimingFunction = 'linear';
            span.style.animationIterationCount = 'infinite';
            background.appendChild(span);
        }
    }
);