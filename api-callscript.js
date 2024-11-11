let pImage; 
document.getElementById('fetchBtn1').addEventListener('click', async () => {
try {
    const response = await fetch('https://api.waifu.pics/sfw/bully');
    const data = await response.json();
    pImage = document.getElementById('image').src; 
    document.getElementById('image').src = data.url;
    document.getElementById('image').style.display = 'block';
} catch (error) {
    console.error("Error fetching image for button 1:", error);
}
});

document.getElementById('prevBtn').addEventListener('click', () => {
if (pImage) {
    document.getElementById('image').src = pImage;
} else {
    console.warn("No preview image");
}
});