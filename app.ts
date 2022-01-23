// const icecream = {
//     'small': {
//     'price': 10
//     },
//     'big': {
//     'price': 25,
//     'dopants': {
//     'chocolate': 5,
//     'caramel': 6,
//     'berry': 10
//     }
//     },
//     'marmalow': {
//     'price': 5
//     }
    
//     };
//     let buyIcecream = () : void => {
//     let price: number = 0;
//     let type: string = prompt ('Ice cream type?', 'small');
//     switch(type) {
//     case 'small':
//     price = price + icecream.small.price;
//     break;
//     case 'big':
//     price = price + icecream.big.price + chosedopants();
//     break;
//     }
//     let marmalow: string = prompt ('Do you need marmalow?');
//     if (marmalow == 'yes') {
//     price = price + icecream.marmalow.price;
//     }
//     alert(`Ice cream price" ${price}`);
//     };
    
//     let chosedopants = () : number => {
//     let dopantsPrice: number = 0;
//     let dopantsList : string = prompt('Choose dopants. Available: chocolate, caramel, berry.', 'chocolate');
    
//     let countToppingPrice = () => {
//     let dopantsArr = dopantsList.split(', ');
//     for(let i = 0; i < dopantsArr.length; i++) {
//     switch(dopantsArr[i]) {
//     case 'chocolate':
//     dopantsPrice = dopantsPrice + icecream.big.dopants.chocolate;
//     break;
//     case 'caramel':
//     dopantsPrice = dopantsPrice + icecream.big.dopants.caramel;
//     break;
//     case 'berry':
//     dopantsPrice = dopantsPrice + icecream.big.dopants.berry;
//     break;
//     default:
//     validatedopantsList();
//     break;
//     }
//     }
//     };
    
//     let validatedopantsList = () => {
//     dopantsList = prompt('You must choose one of dopants. Available: chocolate, caramel, berry.', 'chocolate');
//     countToppingPrice();
//     };
    
//     if (dopantsList == undefined) {
//     validatedopantsList();
//     }
//     else {
//     countToppingPrice();
//     }
    
//     return dopantsPrice;
//     };
    
//     buyIcecream();



const iceCream: number = Number(prompt(
    "нажмите 1 для маленького стакана мороженного, 2 для большого стакана"
));

const dopants = {
    berrie: 10,
    choko: 5,
    caramel: 6
};

const sum = (size: number, dopants: object): number => {
    let total: number = 0;
    switch (size) {
    case 1:
        total += 10;
        break;
    case 2:
        total += 25;
        break;
    default:
        break;
    }
    
    let dopant = prompt(
        "какую добавку вы хотите?(шоколад, карамель, ягоды)"
    ).toLowerCase();
    let marshmello: boolean = confirm("вам с маршмелло?");
    if (marshmello) total += 5;

    if (total) total += dopants[dopant];
    return total;
};

alert(sum(iceCream, dopants));