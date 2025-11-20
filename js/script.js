


document.addEventListener("DOMContentLoaded", creaTitolo);

document.addEventListener("DOMContentLoaded", function(){
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl, {
            
            trigger: 'hover focus'
        });
        
    });
})



let l1 = document.querySelector("#l1");
let l2 = document.querySelector("#l2");
let l3 = document.querySelector("#l3");
let l4 = document.querySelector("#l4");
let l5 = document.querySelector("#l5");
let l6 = document.querySelector("#l6");
let l7 = document.querySelector("#l7");
let l8 = document.querySelector("#l8");
let l9 = document.querySelector("#l9");
let l10 = document.querySelector("#l10");
let l11 = document.querySelector("#l11");
let l12 = document.querySelector("#l12");
let l13 = document.querySelector("#l13");
let l14 = document.querySelector("#l14");



let neonBlu = document.querySelectorAll(".neonH1");




let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");
let p4 = document.querySelector("#p4");
let p5 = document.querySelector("#p5");
let p6 = document.querySelector("#p6");
let p7 = document.querySelector("#p7");
let p8 = document.querySelector("#p8");
let p9 = document.querySelector("#p9");
let p10 = document.querySelector("#p10");
let p11 = document.querySelector("#p11");
let p12 = document.querySelector("#p12");
let p13 = document.querySelector("#p13");

function creaTitolo() {
    
    
    setTimeout(() => { l1.classList.add("neon-blu"); }, 2300);
    setTimeout(() => { l2.classList.add("neon-blu"); }, 2000);
    setTimeout(() => { l3.classList.add("neon-blu"); }, 1700);
    setTimeout(() => { l4.classList.add("neon-blu"); }, 1400);
    setTimeout(() => { l5.classList.add("neon-blu"); }, 1100);
    setTimeout(() => { l6.classList.add("neon-blu"); }, 800);
    setTimeout(() => { l7.classList.add("neon-blu"); }, 500);
    setTimeout(() => { l8.classList.add("neon-blu"); }, 500);
    setTimeout(() => { l9.classList.add("neon-blu"); }, 800);
    setTimeout(() => { l10.classList.add("neon-blu"); }, 1100);
    setTimeout(() => { l11.classList.add("neon-blu"); }, 1400);
    setTimeout(() => { l12.classList.add("neon-blu"); }, 1700);
    setTimeout(() => { l13.classList.add("neon-blu"); }, 2000);
    setTimeout(() => { l14.classList.add("neon-blu"); }, 2300);
    
    
    
    
    setTimeout(() => {
        neonBlu.forEach(elemento => elemento.classList.add("neon"));
    }, 2600);
    
    
    setTimeout(() => { p1.classList.add("neon"); }, 500);
    setTimeout(() => { p2.classList.add("neon"); }, 700);
    setTimeout(() => { p3.classList.add("neon"); }, 900);
    setTimeout(() => { p4.classList.add("neon"); }, 1100);
    setTimeout(() => { p5.classList.add("neon"); }, 1300);
    setTimeout(() => { p6.classList.add("neon"); }, 1500);
    setTimeout(() => { p7.classList.add("neon"); }, 1700);
    setTimeout(() => { p8.classList.add("neon"); }, 1900);
    setTimeout(() => { p9.classList.add("neon"); }, 2100);
    setTimeout(() => { p10.classList.add("neon"); }, 2300);
    setTimeout(() => { p11.classList.add("neon"); }, 2500);
    setTimeout(() => { p12.classList.add("neon"); }, 2700);
    setTimeout(() => { p13.classList.add("neon"); }, 2900);
    
    
}




let form = document.querySelector('#contactForm');
let statusDiv = document.querySelector('#status');
let submitButton = document.querySelector('#submitButton');
let scrittaStatus = document.querySelector(".scritta-status-ok");
let svgEnvelope = document.querySelector("#svg-envelope");



form.addEventListener('submit', function (event) {
    
    
    event.preventDefault();
    
    
    submitButton.disabled = true;
    
    
    
    let data = new FormData(form);
    
    
    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        
            if (response.ok) {

                scrittaStatus.textContent = "Messaggio inviato!";
                svgEnvelope.classList.add("bi", "bi-envelope-check");
                statusDiv.classList.add("status-ok");
                setTimeout(() => {
                    statusDiv.classList.remove("status-ok");
                    scrittaStatus.textContent = "";
                    svgEnvelope.classList.remove("bi", "bi-envelope-check");
                }, 5000);
                form.reset();

                
            } else {
                
                scrittaStatus.textContent = "Errore nell'invio del messagio, prova più tardi!";
                svgEnvelope.classList.add("bi", "bi-envelope-exclamation");
                statusDiv.classList.add("status-error");
                setTimeout(() => {
                    statusDiv.classList.remove("status-error");
                    scrittaStatus.textContent = "";
                    svgEnvelope.classList.remove("bi", "bi-envelope-exclamation");
                }, 5000);
                form.reset();
            }
        })
        .catch(error => {
            
            scrittaStatus.textContent = "Errore di rete!";
            svgEnvelope.classList.add("bi", "bi-envelope-exclamation");
            statusDiv.classList.add("status-error");
            setTimeout(() => {
                statusDiv.classList.remove("status-error");
                scrittaStatus.textContent = "";
                svgEnvelope.classList.remove("bi", "bi-envelope-exclamation");
            }, 5000);
            
        })
        
        .finally(() => {
            
            submitButton.disabled = false;
            
        });
        
        
        
        
        
        
    });
