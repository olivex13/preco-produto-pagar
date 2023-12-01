console.log("Quanto devo pagar pelo produto?");
console.log ("    ");
console.log("Formas de pagamento: ");
console.log ("    ");
console.log("1 - Debito (10% OFF)");
console.log("2 - Dinheiro ou PIX (15% OFF)");
console.log("3 - Parcelado em até 2x (SEM JUROS)");
console.log("4 - Parcelado em mais 3x (10% JUROS)");

const produto = "Calça Jeans"
const precoEtiqueta = 100.00
let formaPagamento = 4

console.log ("    ");

if (formaPagamento === 1){
    desconto = precoEtiqueta * 0.1;
    precoFinal = precoEtiqueta - desconto;
    console.log(`Você está comprando o produto ${produto} que custa R$ ${precoEtiqueta.toFixed(2)}, selecionou a opção de pagamento DÉBITO e recebeu 10% de desconto. O valor a pagar é R$ ${precoFinal.toFixed(2)}`)
} else if (formaPagamento === 2){
        desconto = precoEtiqueta * 0.15;
        precoFinal = precoEtiqueta - desconto;
        console.log(`Você está comprando o produto ${produto} que custa R$ ${precoEtiqueta.toFixed(2)}, selecionou a opção de pagamento DINHEIRO ou PIX e recebeu 15% de desconto. O valor a pagar é R$ ${precoFinal.toFixed(2)}`)
    } else if (formaPagamento === 3){
        desconto = precoEtiqueta * 0.00;
        precoFinal = precoEtiqueta - desconto;
        console.log(`Você está comprando o produto ${produto} que custa R$ ${precoEtiqueta.toFixed(2)}, selecionou a opção de pagamento PARCELADO EM ATÉ 2x. O valor a pagar é R$ ${precoFinal.toFixed(2)}`)
    }else if (formaPagamento === 4){
        juros = precoEtiqueta * 0.10;
        precoFinal = precoEtiqueta + juros;
        console.log(`Você está comprando o produto ${produto} que custa R$ ${precoEtiqueta.toFixed(2)}, selecionou a opção de pagamento PARCELADO EM MAIS DE 3x e teve 10% de juros. O valor a pagar é R$ ${precoFinal.toFixed(2)}`)
    }