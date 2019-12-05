import html2canvas from "html2canvas";

/* eslint-disable no-param-reassign */

const desintegrate = async (target: HTMLElement) => {
  const parent = target.parentNode;
  // @ts-ignore
  parent.style.pointerEvents = "none";
  if (!parent) return;

  const canvas: HTMLCanvasElement = await html2canvas(target, {
    logging: process.env.NODE_ENV !== "production"
  });

  canvas.style.width = `${target.offsetWidth}px`;
  canvas.style.height = `${target.offsetHeight}px`;

  const container = document.createElement("div");

  // setup the frames for animation
  const frames = generateFrames(canvas);
  if (!frames) return;
  frames.forEach((frame, i) => {
    frame.style.transitionDelay = `${(1.35 * i) / frames.length}s`;
    frame.style.position = "absolute";
    frame.style.left = "0";
    frame.style.top = "0";
    frame.style.transition = "transform 1s ease-out, opacity 1s ease-out";
    frame.style.opacity = "1";
    frame.style.transform = "rotate(0deg) translate(0px, 0px) rotate(0deg)";
    // @ts-ignore
    frame.style.willChange = "transform, opacity";
    container.appendChild(frame);
  });

  target.style.opacity = "0";
  container.style.position = "absolute";
  container.style.top = "20px";
  container.style.pointerEvents = "none";
  parent.appendChild(container);

  // eslint-disable-next-line no-unused-expressions, chai-friendly/no-unused-expressions, @typescript-eslint/no-unused-expressions
  container.offsetLeft; // forces reflow, so CSS we apply below does transition
  // set the values the frame should animate to
  // note that this is done after reflow so the transitions trigger
  frames.forEach(frame => {
    const randomRadian = 2 * Math.PI * (Math.random() - 0.5);
    frame.style.transform = `rotate(${15 *
      (Math.random() - 0.5)}deg) translate(${60 *
      Math.cos(randomRadian)}px, ${30 * Math.sin(randomRadian)}px) rotate(${15 *
      (Math.random() - 0.5)}deg)`;
    frame.style.opacity = "0";
  });

  setTimeout(() => {
    parent.removeChild(container);
  }, 2000);
};

/**
 * Generates the individual subsets of pixels that are animated to create the effect
 * @param {HTMLCanvasElement} canvas Source canvas
 * @param {number} count The higher the frame count, the less grouped the pixels will look - Google use 32, but for our elms we use 128 since we have images near the edges
 * @return {HTMLCanvasElement[]} Each canvas contains a subset of the original pixels
 */
function generateFrames(
  canvas: HTMLCanvasElement,
  count = 32
): Array<HTMLCanvasElement> | null {
  const { width, height } = canvas;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  const originalData = ctx.getImageData(0, 0, width, height);
  const imageDatas = [...Array(count)].map((_, i) =>
    ctx.createImageData(width, height)
  );

  // assign the pixels to a canvas
  // each pixel is assigned to 2 canvas', based on its x-position
  for (let x = 0; x < width; ++x) {
    for (let y = 0; y < height; ++y) {
      for (let i = 0; i < 2; ++i) {
        const dataIndex = Math.floor(
          (count * (Math.random() + (2 * x) / width)) / 3
        );
        const pixelIndex = (y * width + x) * 4;
        // copy the pixel over from the original image
        for (let offset = 0; offset < 4; ++offset) {
          imageDatas[dataIndex].data[pixelIndex + offset] =
            originalData.data[pixelIndex + offset];
        }
      }
    }
  }

  // turn image datas into canvas'
  return imageDatas.map(
    (data): HTMLCanvasElement => {
      // @ts-ignore
      const clone: HTMLCanvasElement = canvas.cloneNode(true);
      // @ts-ignore
      clone.getContext("2d").putImageData(data, 0, 0);
      return clone;
    }
  );
}

export default desintegrate;
