function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

function encodeText() {
    var text = document.getElementById("encodeText").value.toUpperCase().replace(/[^A-Z]/g, '_');
    var shift = parseInt(document.getElementById("encodeShift").value);
    var repeats = parseInt(document.getElementById("encodeRepeats").value);
    var result = text;

    for (var i = 0; i < repeats; i++) {
        result = result.replace(/[A-Z]/g, function(char) {
            return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
        });
    }

    document.getElementById("encodeResult").textContent = result;
}

function decodeText() {
    var text = document.getElementById("decodeText").value.toUpperCase().replace(/[^A-Z]/g, '_');
    var shift = parseInt(document.getElementById("decodeShift").value);
    var repeats = parseInt(document.getElementById("decodeRepeats").value);
    var result = text;

    for (var i = 0; i < repeats; i++) {
        result = result.replace(/[A-Z]/g, function(char) {
            return String.fromCharCode(((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
        });
    }

    document.getElementById("decodeResult").textContent = result;
}

function copyToClipboard(elementId) {
    var text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Text copied to clipboard!");
        })
        .catch((error) => {
            console.error("Failed to copy text: ", error);
        });
}