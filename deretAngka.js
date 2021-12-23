console.log("DERET ANGKA\n=====================================");

function deretAngka(n) {
  let hasilDeretAngka = "";

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      hasilDeretAngka += "NIOMIC ";
    } else if (i % 3 === 0) {
      hasilDeretAngka += "NIO ";
    } else if (i % 5 === 0) {
      hasilDeretAngka += "MIC ";
    } else {
      hasilDeretAngka += i + " ";
    }
  }
  return hasilDeretAngka;
}

console.log(deretAngka(10));
console.log(deretAngka(20));
console.log(deretAngka(30));
