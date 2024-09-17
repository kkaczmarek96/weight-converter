let kgbe
let t

document.getElementById("submitttokg").onclick = function () {
    t = document.getElementById("mytextttokg").value;
    t = Number(t);
    kgbe = t * 1000
    document.getElementById("wynikttop").textContent = kgbe + "kg";
}

  
let kg
let kgtog

document.getElementById("submikgtog").onclick = function () {
    kg = document.getElementById("mytextkgtog").value;
    kg = Number(kg)
    kgtog = kg * 1000
    document.getElementById("wynikkgtog").textContent = kgtog + "g"
}