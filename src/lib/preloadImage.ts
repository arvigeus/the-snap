const preloadImage = (url: string) =>
  new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", () => {
      reject(new Error(`Failed to load image's URL: ${url}`));
    });
    img.src = url;
  });

export default preloadImage;
