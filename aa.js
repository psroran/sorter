// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'https://media.discordapp.net/attachments/504180389418631178/';
var bln_ResultMode = 1;
var int_ResultImg = 2;
var int_ResultRank = 3;

var bln_ResultStyle = 0;

var bln_ProgessBar = 1;

var int_Colspan = 3;
var ary_TitleData = [
   "Sound Horizon",
   "Linked Horizon",
];

var ary_CharacterData = [
   [1, "2013 Danchou", [0,1], "678532317387423744/unknown.png?width=250&height=250"],
   [1, "Graveyard Danchou", [0,1], "678532662167601182/unknown.png?width=250&height=250"],
   [1, "Fuyu Danchou", [0,1], "678532850772869120/unknown.png?width=250&height=250"],
   [1, "Shinseki Danchou", [0,1], "678533035045552138/unknown.png?width=250&height=250"],
   [1, "Pirate Tabi", [0,1], "678533186288091146/unknown.png?width=250&height=250"],
   [1, "Tabi", [0,1], "678533729571962890/unknown.png?width=250&height=250"],
   [1, "Pippi", [1,0], "678533693610000384/unknown.png?width=250&height=250"],
   [1, "Hakua", [1,0], "678533935218688027/unknown.png?width=250&height=250"],
   [1, "Rebomi", [1,0], "678534108338454538/unknown.png?width=250&height=250"],
   [1, "Young Rebo", [1,0], "678538809469566976/unknown.png?width=250&height=250"],
   [1, "Rebotan", [1,0], "678539467006541854/unknown.png?width=250&height=250"],
   [1, "Coronation Rebo", [1,0], "678539641204506624/unknown.png?width=250&height=250"],
   [1, "Gold Rebo", [1,0], "678539970092466186/unknown.png?width=250&height=250"],
   [1, "TE2 Rebo", [1,0], "678540231275970560/unknown.png?width=250&height=250"],
   [1, "Dream Port Rebo", [1,0], "678540448892977153/unknown.png?width=250&height=250"],
   [1, "Karasu", [1,0], "678540822538485760/unknown.png?width=250&height=250"],
   [1, "Birthday Rebo", [1,0], "678541124503076864/unknown.png?width=250&height=250"],
   [1, "Ousama", [1,0], "678541261644234752/unknown.png?width=250&height=250"],
   [1, "Apfel", [1,0], "678541672883421194/unknown.png?width=250&height=250"],
   [1, "Bach", [1,0], "678541837425704979/unknown.png?width=250&height=250"],
   [1, "Glasses Aunty", [1,0], "678542215823491082/unknown.png?width=250&height=250"],
   [1, "Revive Aunty", [1,0], "678542355480969217/unknown.png?width=250&height=250"],
   [1, "Marchen Rebo", [1,0], "678542567020822530/unknown.png?width=250&height=250"],
   [1, "Pamphlet Tabi", [0,1], "678542807887118337/unknown.png?width=250&height=250"],
   [1, "Bad Tabi", [0,1], "678542964263223306/unknown.png?width=250&height=250"],
   [1, "Cursed Halloween", [1,0], "678543260368633856/unknown.png?width=250&height=250"],
   [1, "Masked man", [1,0], "678543342203568128/unknown.png?width=250&height=250"],
   [1, "Ima desho!?", [0,1], "678543511301259264/unknown.png?width=250&height=250"],
   [1, "Tree Rebo", [1,0], "678543668667482122/unknown.png?width=250&height=250"],
   [1, "Heart Rebo", [1,0], "678543771285061632/unknown.png?width=250&height=250"],
   [1, "Okinawa Rebo", [1,0], "678544116707229696/unknown.png?width=250&height=250"],
   [1, "Wall Rebo", [1,0], "678544317832364032/unknown.png?width=250&height=250"],
   [1, "Bad-shirt Okinawa Rebo", [1,0], "678544420999659560/unknown.png?width=250&height=250"],
   [1, "VR Rebo", [1,0], "678544514905931785/unknown.png?width=250&height=250"],
   [1, "Tea Party Rebo", [1,0], "678544822448947210/unknown.png?width=250&height=250"],
   [1, "King's Holiday Rebo", [1,0], "678545026095120394/unknown.png?width=250&height=250"],
   [1, "Shrine Rebo", [1,0], "678545110392373248/unknown.png?width=250&height=250"],
   [1, "NekoP", [1,0], "678545295864496137/unknown.png?width=250&height=250"],
   [1, "Ribbon Danchou", [0,1], "678545447853490196/unknown.png?width=250&height=250"],
   [1, "This Rebo", [1,0], "678546116882464783/unknown.png?width=250&height=250"],
   [1, "Lost Angel", [1,0], "678546279395098624/unknown.png?width=250&height=250"],
   [1, "Kajiura Rebo", [1,0], "678546482760253463/unknown.png?width=250&height=250"],
   [1, "RAN Rebo", [1,0], "678546575030747136/unknown.png?width=250&height=250"],
   [1, "Roman Rebo", [1,0], "678548744719040512/unknown.png?width=250&height=250"],
   [1, "Kouhaku Danchou", [0,1], "678553241469845514/unknown.png?width=250&height=250"],
];
