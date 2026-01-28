"use client";

import { useEffect, useRef } from "react";

export default function Oneko() {
    const nekoElRef = useRef(null);
    const stateRef = useRef({
        nekoPosX: 32,
        nekoPosY: 32,
        mousePosX: 0,
        mousePosY: 0,
        frameCount: 0,
        idleTime: 0,
        idleAnimation: null,
        idleAnimationFrame: 0,
        lastFrameTimestamp: null,
    });

    useEffect(() => {
        const isReducedMotion =
            window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
            window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

        if (isReducedMotion) return;

        const nekoEl = nekoElRef.current;
        const state = stateRef.current;

        // Initial position from storage
        try {
            const storedNeko = JSON.parse(window.localStorage.getItem("oneko"));
            if (storedNeko) {
                state.nekoPosX = storedNeko.nekoPosX;
                state.nekoPosY = storedNeko.nekoPosY;
                state.mousePosX = storedNeko.mousePosX;
                state.mousePosY = storedNeko.mousePosY;
                state.frameCount = storedNeko.frameCount;
                state.idleTime = storedNeko.idleTime;
                state.idleAnimation = storedNeko.idleAnimation;
                state.idleAnimationFrame = storedNeko.idleAnimationFrame;
            }
        } catch (e) {
            console.error("Failed to load oneko state", e);
        }

        const nekoSpeed = 10;
        const spriteSets = {
            idle: [[-3, -3]],
            alert: [[-7, -3]],
            scratchSelf: [
                [-5, 0],
                [-6, 0],
                [-7, 0],
            ],
            scratchWallN: [
                [0, 0],
                [0, -1],
            ],
            scratchWallS: [
                [-7, -1],
                [-6, -2],
            ],
            scratchWallE: [
                [-2, -2],
                [-2, -3],
            ],
            scratchWallW: [
                [-4, 0],
                [-4, -1],
            ],
            tired: [[-3, -2]],
            sleeping: [
                [-2, 0],
                [-2, -1],
            ],
            N: [
                [-1, -2],
                [-1, -3],
            ],
            NE: [
                [0, -2],
                [0, -3],
            ],
            E: [
                [-3, 0],
                [-3, -1],
            ],
            SE: [
                [-5, -1],
                [-5, -2],
            ],
            S: [
                [-6, -3],
                [-7, -2],
            ],
            SW: [
                [-5, -3],
                [-6, -1],
            ],
            W: [
                [-4, -2],
                [-4, -3],
            ],
            NW: [
                [-1, 0],
                [-1, -1],
            ],
        };

        function setSprite(name, frame) {
            const sprite = spriteSets[name][frame % spriteSets[name].length];
            nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
        }

        function resetIdleAnimation() {
            state.idleAnimation = null;
            state.idleAnimationFrame = 0;
        }

        function idle() {
            state.idleTime += 1;

            // every ~ 20 seconds
            if (
                state.idleTime > 10 &&
                Math.floor(Math.random() * 200) === 0 &&
                state.idleAnimation == null
            ) {
                let avalibleIdleAnimations = ["sleeping", "scratchSelf"];
                if (state.nekoPosX < 32) {
                    avalibleIdleAnimations.push("scratchWallW");
                }
                if (state.nekoPosY < 32) {
                    avalibleIdleAnimations.push("scratchWallN");
                }
                if (state.nekoPosX > window.innerWidth - 32) {
                    avalibleIdleAnimations.push("scratchWallE");
                }
                if (state.nekoPosY > window.innerHeight - 32) {
                    avalibleIdleAnimations.push("scratchWallS");
                }
                state.idleAnimation =
                    avalibleIdleAnimations[
                    Math.floor(Math.random() * avalibleIdleAnimations.length)
                    ];
            }

            switch (state.idleAnimation) {
                case "sleeping":
                    if (state.idleAnimationFrame < 8) {
                        setSprite("tired", 0);
                        break;
                    }
                    setSprite("sleeping", Math.floor(state.idleAnimationFrame / 4));
                    if (state.idleAnimationFrame > 192) {
                        resetIdleAnimation();
                    }
                    break;
                case "scratchWallN":
                case "scratchWallS":
                case "scratchWallE":
                case "scratchWallW":
                case "scratchSelf":
                    setSprite(state.idleAnimation, state.idleAnimationFrame);
                    if (state.idleAnimationFrame > 9) {
                        resetIdleAnimation();
                    }
                    break;
                default:
                    setSprite("idle", 0);
                    return;
            }
            state.idleAnimationFrame += 1;
        }

        function frame() {
            state.frameCount += 1;
            const diffX = state.nekoPosX - state.mousePosX;
            const diffY = state.nekoPosY - state.mousePosY;
            const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

            if (distance < nekoSpeed || distance < 48) {
                idle();
                return;
            }

            state.idleAnimation = null;
            state.idleAnimationFrame = 0;

            if (state.idleTime > 1) {
                setSprite("alert", 0);
                // count down after being alerted before moving
                state.idleTime = Math.min(state.idleTime, 7);
                state.idleTime -= 1;
                return;
            }

            let direction;
            direction = diffY / distance > 0.5 ? "N" : "";
            direction += diffY / distance < -0.5 ? "S" : "";
            direction += diffX / distance > 0.5 ? "W" : "";
            direction += diffX / distance < -0.5 ? "E" : "";
            setSprite(direction, state.frameCount);

            state.nekoPosX -= (diffX / distance) * nekoSpeed;
            state.nekoPosY -= (diffY / distance) * nekoSpeed;

            state.nekoPosX = Math.min(Math.max(16, state.nekoPosX), window.innerWidth - 16);
            state.nekoPosY = Math.min(Math.max(16, state.nekoPosY), window.innerHeight - 16);

            nekoEl.style.left = `${state.nekoPosX - 16}px`;
            nekoEl.style.top = `${state.nekoPosY - 16}px`;
        }

        let animationFrameId;

        function onAnimationFrame(timestamp) {
            if (!state.lastFrameTimestamp) {
                state.lastFrameTimestamp = timestamp;
            }
            if (timestamp - state.lastFrameTimestamp > 100) {
                state.lastFrameTimestamp = timestamp;
                frame();
            }
            animationFrameId = window.requestAnimationFrame(onAnimationFrame);
        }

        const onMouseMove = (event) => {
            state.mousePosX = event.clientX;
            state.mousePosY = event.clientY;
        };

        const onBeforeUnload = () => {
            try {
                window.localStorage.setItem("oneko", JSON.stringify({
                    nekoPosX: state.nekoPosX,
                    nekoPosY: state.nekoPosY,
                    mousePosX: state.mousePosX,
                    mousePosY: state.mousePosY,
                    frameCount: state.frameCount,
                    idleTime: state.idleTime,
                    idleAnimation: state.idleAnimation,
                    idleAnimationFrame: state.idleAnimationFrame,
                }));
            } catch (e) {
                console.error("Failed to save oneko state", e);
            }
        };

        document.addEventListener("mousemove", onMouseMove);
        window.addEventListener("beforeunload", onBeforeUnload);
        animationFrameId = window.requestAnimationFrame(onAnimationFrame);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("beforeunload", onBeforeUnload);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            ref={nekoElRef}
            id="oneko"
            aria-hidden="true"
            style={{
                width: "32px",
                height: "32px",
                position: "fixed",
                pointerEvents: "none",
                imageRendering: "pixelated",
                left: "16px",
                top: "16px",
                zIndex: 2147483647,
                backgroundImage: "url('/oneko-dog.gif')",
            }}
        />
    );
}