document.addEventListener("keydown", function(event) {
    event.preventDefault(); // Prevent default action
    
    const keyInfo = `
        Key: ${event.key}
        Key Code: ${event.keyCode}
        Code: ${event.code}
    `;
    
    console.clear();
    console.log(keyInfo);

    let infoDiv = document.getElementById("key-info");
    if (!infoDiv) {
        infoDiv = document.createElement("div");
        infoDiv.id = "key-info";
        infoDiv.style.position = "fixed";
        infoDiv.style.top = "10px";
        infoDiv.style.left = "10px";
        infoDiv.style.padding = "10px";
        infoDiv.style.background = "#000";
        infoDiv.style.color = "#fff";
        infoDiv.style.fontSize = "16px";
        infoDiv.style.borderRadius = "5px";
        document.body.appendChild(infoDiv);
    }
    infoDiv.textContent = keyInfo;
});
