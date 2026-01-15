function showMap() {
    const anfahrt = document.getElementById("anfahrt-div");
    anfahrt.innerHTML = "";
    anfahrt.style.padding = "0";
    const iframe = document.createElement("iframe");
    iframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1294.6582250227536!2d11.31207211632297!3d49.139727026497745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f6b544634cb75%3A0xaa2fb71d0b2a8480!2sH%C3%A4usern%2016%2C%2091161%20Hilpoltstein!5e0!3m2!1sde!2sde!4v1747988111537!5m2!1sde!2sde";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style="border:0; border-radius:10px";
    iframe.allowfullscreen="false";
    iframe.loading="lazy";
    iframe.referrerpolicy="no-referrer-when-downgrade";
    anfahrt.appendChild(iframe);
}

function showDescription(targetDiv) {
    if(typeof targetDiv !== 'string'){
        console.error('Type mismatch.');
        return;
    }
    //alert("Läuft!");
    const descriptionParent = document.getElementById("description-div");
    for(const child of descriptionParent.children) {
        if(child.id === 'general-description' || child.id === targetDiv){
            continue;
        }
        child.style.display = 'none';
    }
    const targetDescription = document.getElementById(targetDiv);
    if(targetDescription && targetDescription.style.display === 'none' || targetDescription.style.display === ''){
        targetDescription.style.display='block';
    } else {
        targetDescription.style.display = 'none';
    }
}