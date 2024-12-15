// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'http://i.imgur.com/';
var bln_ResultMode = 1;
var int_ResultImg = 2;
var int_ResultRank = 3;

var bln_ResultStyle = 0;

var bln_ProgessBar = 1;

var int_Colspan = 3;
var ary_TitleData = [
   "Sound Horizon"
   "Linked Horizon"
   "Albums"
   "Singles"
   "Revo"
   "Live Only"
];

var ary_CharacterData = [
   [1, "Chronicle - Black Chronicle",								[1,0,1,0,0,0], "KjhnAND.jpg"], 
   [1, "Chronicle - Sound Horizon",									[1,0,1,0,0,0], "KjhnAND.jpg"], 
   [1, "Chronicle - 詩人バラッドの悲劇",									[1,0,1,0,0,0], "KjhnAND.jpg"], 
   [1, "Chronicle - アーベルジュの戦い",									[1,0,1,0,0,0], "KjhnAND.jpg"], 
   [1, "Chronicle - 樹氷の君～凍てついた魔女～",							[1,0,1,0,0,0], "KjhnAND.jpg"], 
   [1, "Chronicle - 蒼と白の境界線",									[1,0,1,0,0,0], "KjhnAND.jpg"], 
   [1, "Chronicle - 雷神の左腕",										[1,0,1,0,0,0], "KjhnAND.jpg"], 
   [1, "Chronicle - 少女人形",										[1,0,1,0,0,0], "KjhnAND.jpg"], 
   [1, "Chronicle - 君が生まれてくる世界",								[1,0,1,0,0,0], "KjhnAND.jpg"], 
   [1, "Thanatos - Sound Horizon [mode：Thanatos]",					[1,0,1,0,0,0], "xgAagGD.jpg"], 
   [1, "Thanatos - そこに在る風景",									[1,0,1,0,0,0], "xgAagGD.jpg"], 
   [1, "Thanatos - 壊れたマリオネット",									[1,0,1,0,0,0], "xgAagGD.jpg"], 
   [1, "Thanatos - 銀色の馬車",										[1,0,1,0,0,0], "xgAagGD.jpg"], 
   [1, "Thanatos - 輪廻の砂時計",									[1,0,1,0,0,0], "xgAagGD.jpg"], 
   [1, "Thanatos - 珊瑚の城",										[1,0,1,0,0,0], "xgAagGD.jpg"], 
   [1, "Thanatos - タナトスの幻想",									[1,0,1,0,0,0], "xgAagGD.jpg"], 
   [1, "Lost - Sound Horizon [mode：Lost]",						[1,0,1,0,0,0], "DGa3ARp.jpg"], 
   [1, "Lost - 白の幻影 (White Illusion)",						[1,0,1,0,0,0], "DGa3ARp.jpg"], 
   [1, "Lost - 恋人を射ち堕とした日",								[1,0,1,0,0,0], "DGa3ARp.jpg"], 
   [1, "Lost - ",												[1,0,1,0,0,0], "DGa3ARp.jpg"], 
   [1, "Lost - ",												[1,0,1,0,0,0], "DGa3ARp.jpg"], 
   [1, "Lost - ",												[1,0,1,0,0,0], "DGa3ARp.jpg"], 
   [1, "Lost - ",												[1,0,1,0,0,0], "DGa3ARp.jpg"], 
   [1, "Lost - ",												[1,0,1,0,0,0], "DGa3ARp.jpg"], 
   [1, "Lost - ",												[1,0,1,0,0,0], "DGa3ARp.jpg"], 
   [1, "Lost - ",												[1,0,1,0,0,0], "DGa3ARp.jpg"], 
   [1, "Lost - ",												[1,0,1,0,0,0], "DGa3ARp.jpg"], 
   [1, "Lost - ",												[1,0,1,0,0,0], "DGa3ARp.jpg"], 
];