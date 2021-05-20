'is strict';

//============= FIRST ATTEMPT =============

let aminoAcid;
let codones = [];
let protein = [];

// let codone = prompt('Enter the codone');
let rna = 'AAACCCGGGUUU';
console.log('mRNA: ', rna);
console.log('===========================');
for (let i = 0; i < rna.length; i += 3) {
  const codone = rna[i] + rna[i + 1] + rna[i + 2];
  console.log(codone);

  codones.push(codone);
}

console.log(codones);

for (let i = 0; i < codones.length; i += 1) {
  let codone = codones[i];
  
  switch (codones[i].toUpperCase()) {
    case 'UUU':
      case 'UUC':
      aminoAcid = 'Fen';
      break;

    case 'UUA':
    case 'UUG':
    case 'CUU':
    case 'CUC':
    case 'CUA':
    case 'CUG':
      aminoAcid = 'Leu';
      break;

    case 'AUU':
    case 'AUC':
    case 'AUA':
      aminoAcid = 'Ile';
      break;

    case 'AUG':
      aminoAcid = 'Met';
      break;

    case 'GUU':
    case 'GUC':
    case 'GUA':
    case 'GUG':
      aminoAcid = 'Val';
      break;

    case 'UCU':
    case 'UCC':
    case 'UCA':
    case 'UCG':
    case 'AGU':
    case 'AGU':
      aminoAcid = 'Ser';
      break;

    case 'CCU':
    case 'CCC':
    case 'CCA':
    case 'CCG':
      aminoAcid = 'Pro';
      break;

    case 'ACU':
    case 'ACC':
    case 'ACA':
    case 'ACG':
      aminoAcid = 'Thr';
      break;

    case 'GCU':
    case 'GCC':
    case 'GCA':
    case 'GCG':
      aminoAcid = 'Ala';
      break;

    case 'UAU':
    case 'UAU':
      aminoAcid = 'Tyr';
      break;

    case 'UAA':
    case 'UAG':
    case 'UGA':
      aminoAcid = 'Stop';
      break;

    case 'CAU':
    case 'CAC':
      aminoAcid = 'His';
      break;

    case 'CAA':
    case 'CG':
      aminoAcid = 'Gln';
      break;

    case 'AAU':
    case 'AAC':
      aminoAcid = 'Asn';
      break;

    case 'AAA':
    case 'AAG':
      aminoAcid = 'Lys';
      break;

    case 'GAU':
    case 'GAC':
      aminoAcid = 'Asp';
      break;

    case 'GAA':
    case 'GAG':
      aminoAcid = 'Glu';
      break;

    case 'UGU':
    case 'UGU':
      aminoAcid = 'Cys';
      break;

    case 'UGG':
      aminoAcid = 'Trp';
      break;

    case 'CGU':
    case 'CGC':
    case 'CGA':
    case 'CGG':
    case 'AGA':
    case 'AGG':
      aminoAcid = 'Arg';
      break;

    case 'GGU':
    case 'GGC':
    case 'GGA':
    case 'GGG':
      aminoAcid = 'Gly';
      break;

    default:
      console.log('Wrong codone');
  }
}
console.log(aminoAcid)