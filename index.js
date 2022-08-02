import { Cirkas } from './js/Cirkas.js';
console.clear();

const besieliuCirkas = new Cirkas('Besieliai');

console.log('\n' + besieliuCirkas.intro());

console.log('\n' + besieliuCirkas.tvarkarastis());
// // "Besieliai" cirko tvarkarastis:
// // Siuo metu pasirodymu nera suplanuota.

console.log('\n' + besieliuCirkas.naujasPasirodymas(2022, 9, 1));
// // Naujas pasirodymas 2022 Rugsėjo 1 dieną!

console.log('\n' + besieliuCirkas.naujasPasirodymas(2022, 8, 25));
// // Naujas pasirodymas 2022 Rugpjūčio 25 dieną!

console.log('\n' + besieliuCirkas.naujasPasirodymas(2022, 3, 17));
// // Naujas pasirodymas 2022 Kovo 17 dieną!

// // READ: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
console.log('\n' + besieliuCirkas.tvarkarastis());
// // "Besieliai" cirko tvarkarastis:
// // 1) 2022 Kovo 17d (jau įvykęs);
// // 2) 2022 Rugpjūčio 25d;
// // 3) 2022 Rugsėjo 1d.

console.log('\n' + besieliuCirkas.pakeistiData(3, 2022, 9, 2));
// // Pasirodymo data pakeista į 2022 Rugsėjo 2 dieną!

console.log('\n' + besieliuCirkas.tvarkarastis());
// // "Besieliai" cirko tvarkarastis:
// // 1) 2022 Kovo 17d (jau įvykęs);
// // 2) 2022 Rugpjūčio 25d;
// // 3) 2022 Rugsėjo 2d.

console.log('\n' + besieliuCirkas.atsauktiPasirodyma(1));
// // Atsaukti jau praejusio pasirodymo negalima!

console.log('\n' + besieliuCirkas.atsauktiPasirodyma(2));
// // Pasirodymas atsauktas (2022 Rugpjūčio 25d)!

console.log('\n' + besieliuCirkas.tvarkarastis());
// // "Besieliai" cirko tvarkarastis:
// // 1) 2022 Kovo 17d (jau įvykęs);
// // 2) 2022 Rugsėjo 2d.
