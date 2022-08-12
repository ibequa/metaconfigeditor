let nameEn = new SimpleType('en');
let nameRu = new SimpleType('ru');
let nameDe = new SimpleType('de');
let nameFr = new SimpleType('fr');
let nameJa = new SimpleType('ja');
let nameEsMx = new SimpleType('es_mx');
let namePtBr = new SimpleType('pt_br');
let sseLangList = new ComplexType('sseLangList', COMPOSITOR_TYPE.SEQUENCE)
    .addElement('en', nameEn)
    .addElement('ru', nameRu, 0)
    .addElement('de', nameDe, 0)
    .addElement('fr', nameFr, 0)
    .addElement('ja', nameJa, 0)
    .addElement('es_mx', nameEsMx, 0)
    .addElement('pt_br', namePtBr, 0);

let timePeriod = new ComplexType('timePeriod', COMPOSITOR_TYPE.SEQUENCE)
    .addAttribs('startTime', 'finishTime');

let desc = new ComplexType('desc', COMPOSITOR_TYPE.SEQUENCE)
    .addAttribs('imageId', 'bannerImageId', 'menuImageId', 'mainRewardImageId', 'mainRewardImageIdValue')
    .addElement('name', sseLangList);


let rewardRotationType = new ComplexType('rewardRotationType', COMPOSITOR_TYPE.SEQUENCE);

let level = new ComplexType('level', COMPOSITOR_TYPE.SEQUENCE)
    .addAttribs('count');

let levels = new ComplexType('levels', COMPOSITOR_TYPE.SEQUENCE);
