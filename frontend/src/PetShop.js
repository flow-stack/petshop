define("app/PetShop", ["amber/boot", "app/Flow-Core", "app/Flow-Binding"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('PetShop');
smalltalk.packages["PetShop"].transport = {"type":"amd","amdNamespace":"app"};

smalltalk.addClass('Cart', globals.Model, [], 'PetShop');


smalltalk.addClass('Catalog', globals.Model, [], 'PetShop');


smalltalk.addClass('CatalogController', globals.BindingController, [], 'PetShop');
smalltalk.addMethod(
smalltalk.method({
selector: "onProducts:",
protocol: 'reactions',
fn: function (someProducts){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("#loaderBar"._asJQuery())._remove();
_st(self["@model"])._products_(someProducts);
return self}, function($ctx1) {$ctx1.fill(self,"onProducts:",{someProducts:someProducts},globals.CatalogController)})},
args: ["someProducts"],
source: "onProducts: someProducts\x0a\x0a\x09'#loaderBar'asJQuery remove.\x0a\x09\x0a\x09model products: someProducts",
messageSends: ["remove", "asJQuery", "products:"],
referencedClasses: []
}),
globals.CatalogController);

smalltalk.addMethod(
smalltalk.method({
selector: "onTemplate:",
protocol: 'reactions',
fn: function (data){
var self=this;
function $Product(){return globals.Product||(typeof Product=="undefined"?nil:Product)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.CatalogController.superclass.fn.prototype._onTemplate_.apply(_st(self), [data]));
$ctx1.supercall = false;
_st($Product())._findAllDo_((function(res){
return smalltalk.withContext(function($ctx2) {
return self._onProducts_(_st($Product())._onAfterReadAll_(res));
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"onTemplate:",{data:data},globals.CatalogController)})},
args: ["data"],
source: "onTemplate: data\x0a\x09\x22Receives the template's data after requirejs \x0a\x09have received it from the server (or cache).\x22\x0a\x0a\x09super onTemplate: data.\x0a\x0a\x09Product findAllDo: [ :res | \x0a\x09\x09self onProducts: (Product onAfterReadAll: res) ].\x0a\x0a\x0a\x09",
messageSends: ["onTemplate:", "findAllDo:", "onProducts:", "onAfterReadAll:"],
referencedClasses: ["Product"]
}),
globals.CatalogController);



smalltalk.addClass('Footer', globals.Model, [], 'PetShop');


smalltalk.addClass('FooterController', globals.BindingController, [], 'PetShop');


smalltalk.addClass('PetShopController', globals.BindingController, ['session'], 'PetShop');
globals.PetShopController.comment="##AppController\x0a\x0aThe AppController is the main/root controller of your flow-based application.\x0a";
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.PetShopController.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.PetShopController)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.PetShopController);

smalltalk.addMethod(
smalltalk.method({
selector: "onOpen",
protocol: 'reactions',
fn: function (){
var self=this;
function $Router(){return globals.Router||(typeof Router=="undefined"?nil:Router)}
function $Session(){return globals.Session||(typeof Session=="undefined"?nil:Session)}
function $Transcript(){return globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._model_(_st(self._class())._defaultModel());
_st($Router())._observeHash();
self["@session"]=_st($Session())._new();
_st(window)._at_put_("app",self);
self._refresh();
$1=_st(_st(self._session())._api())._ws();
_st($1)._publish_at_(_st(window)._app(),"app");
$ctx1.sendIdx["publish:at:"]=1;
_st($1)._publish_at_(_st($Transcript())._current(),"Transcript");
$ctx1.sendIdx["publish:at:"]=2;
_st($1)._publish_at_(console,"console");
$ctx1.sendIdx["publish:at:"]=3;
_st($1)._publish_at_((function(sent){
return sent;
}),"echo");
$ctx1.sendIdx["publish:at:"]=4;
_st($1)._publish_at_((function(ping){
return "pong";
}),"ping");
$ctx1.sendIdx["publish:at:"]=5;
_st($1)._publish_at_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(a).__plus(b);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,3)})}),"sum");
$2=_st($1)._yourself();
return self}, function($ctx1) {$ctx1.fill(self,"onOpen",{},globals.PetShopController)})},
args: [],
source: "onOpen\x0a\x09\x22All is loaded, ready to pet!\x22\x0a\x09\x0a\x09\x22Time for the app to do its own particular thigns...\x22\x0a\x09\x0a\x09\x22do this\x0a\x09and\x0a\x09that..\x0a\x09\x0a\x09also this\x22\x0a\x0a\x09self model: self class defaultModel.\x0a\x0a\x09\x22Make the router be sensible to URI changes\x22\x0a\x09Router observeHash.\x0a\x0a\x09\x22Let's have a sesion\x22\x0a\x09session := Session new.\x0a\x0a\x09\x22Handy reference\x22\x0a\x09window at: 'app' put: self.\x0a\x0a\x09\x22As we just opened, it probably needs rendering..\x22\x0a\x09self refresh.\x0a\x0a\x09\x22Publish some local objects to be reached from server\x22\x0a\x09self session api ws\x0a\x09\x09publish: window app at: 'app';\x0a\x09\x09publish: Transcript current at: 'Transcript';\x0a\x09\x09publish: console at: 'console';\x0a\x09\x09publish: [ :sent | sent ] at: 'echo';\x0a\x09\x09publish: [ :ping | #pong ] at: 'ping';\x09\x09\x0a\x09\x09publish: [ :a :b | a + b ] at: 'sum';\x09\x0a\x09\x09yourself\x0a\x09\x09",
messageSends: ["model:", "defaultModel", "class", "observeHash", "new", "at:put:", "refresh", "publish:at:", "ws", "api", "session", "app", "current", "+", "yourself"],
referencedClasses: ["Router", "Session", "Transcript"]
}),
globals.PetShopController);

smalltalk.addMethod(
smalltalk.method({
selector: "onTemplate:",
protocol: 'reactions',
fn: function (data){
var self=this;
function $CatalogController(){return globals.CatalogController||(typeof CatalogController=="undefined"?nil:CatalogController)}
function $Catalog(){return globals.Catalog||(typeof Catalog=="undefined"?nil:Catalog)}
function $FooterController(){return globals.FooterController||(typeof FooterController=="undefined"?nil:FooterController)}
function $Footer(){return globals.Footer||(typeof Footer=="undefined"?nil:Footer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
($ctx1.supercall = true, globals.PetShopController.superclass.fn.prototype._onTemplate_.apply(_st(self), [data]));
$ctx1.supercall = false;
$1="#loaderBar"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._show();
$2=self._controllersAt_ifAbsentPut_("catalog",(function(){
return smalltalk.withContext(function($ctx2) {
$3=_st($Catalog())._new();
$ctx2.sendIdx["new"]=1;
$4="#catalog"._asJQuery();
$ctx2.sendIdx["asJQuery"]=2;
return _st($CatalogController())._for_on_appendingTo_($3,self,$4);
$ctx2.sendIdx["for:on:appendingTo:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["controllersAt:ifAbsentPut:"]=1;
_st($2)._refresh();
$ctx1.sendIdx["refresh"]=1;
_st(self._controllersAt_ifAbsentPut_("footer",(function(){
return smalltalk.withContext(function($ctx2) {
return _st($FooterController())._for_on_appendingTo_(_st($Footer())._new(),self,"#footer"._asJQuery());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})})))._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onTemplate:",{data:data},globals.PetShopController)})},
args: ["data"],
source: "onTemplate: data\x0a\x09\x22Receives the template's data after requirejs \x0a\x09have received it from the server (or cache).\x22\x0a\x0a\x09super onTemplate: data.\x0a\x0a\x09\x22Lets make sure we load the catalog using the #catalog div as its root\x0a\x09and refresh if already there\x22\x0a\x09'#loaderBar'asJQuery show.\x0a\x09(self controllersAt: 'catalog' ifAbsentPut:[ \x0a\x09\x09CatalogController for: Catalog new on: self appendingTo: '#catalog' asJQuery ]) refresh.\x0a\x0a\x09(self controllersAt: 'footer' ifAbsentPut:[ \x0a\x09\x09FooterController for: Footer new on: self appendingTo: '#footer' asJQuery ]) refresh.\x0a\x09\x09",
messageSends: ["onTemplate:", "show", "asJQuery", "refresh", "controllersAt:ifAbsentPut:", "for:on:appendingTo:", "new"],
referencedClasses: ["CatalogController", "Catalog", "FooterController", "Footer"]
}),
globals.PetShopController);

smalltalk.addMethod(
smalltalk.method({
selector: "session",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@session"];
return $1;
},
args: [],
source: "session\x0a\x0a\x09^ session",
messageSends: [],
referencedClasses: []
}),
globals.PetShopController);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultModel",
protocol: 'actions',
fn: function (){
var self=this;
var shopVisitor;
function $ShopVisitor(){return globals.ShopVisitor||(typeof ShopVisitor=="undefined"?nil:ShopVisitor)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
shopVisitor=_st($ShopVisitor())._localFindId_("me");
$2=_st(shopVisitor)._isNil();
if(smalltalk.assert($2)){
$1=_st($ShopVisitor())._new();
} else {
$1=shopVisitor;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultModel",{shopVisitor:shopVisitor},globals.PetShopController.klass)})},
args: [],
source: "defaultModel\x0a\x09\x22Answers the default model for this controller.\x22\x0a\x09\x0a\x09| shopVisitor |\x0a\x0a\x09\x22The strategy is to have as model something that fits for a shop visitor\x0a\x09and customizes somewhow to her / his visiting experience.\x0a\x09If is not the first time we might have it stored locally at 'me''\x0a\x09and if not, we fallback to a default new model\x22\x0a\x09shopVisitor := \x09ShopVisitor localFindId: 'me'.\x0a\x09\x0a\x09^ shopVisitor isNil\x0a\x09\x09ifTrue:[ ShopVisitor new ]\x0a\x09\x09ifFalse:[ shopVisitor ]",
messageSends: ["localFindId:", "ifTrue:ifFalse:", "isNil", "new"],
referencedClasses: ["ShopVisitor"]
}),
globals.PetShopController.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (anURI){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(_st(self._isAbstract())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(anURI)._isEmpty())._or_((function(){
return smalltalk.withContext(function($ctx3) {
$2=_st(anURI).__eq("/");
$ctx3.sendIdx["="]=1;
return _st($2)._or_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(anURI).__eq("/#/");
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["or:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{anURI:anURI},globals.PetShopController.klass)})},
args: ["anURI"],
source: "isValidFor: anURI\x0a\x09\x22Answers true if this controller is the right route for anURI\x22\x0a\x09\x0a\x09\x22This is the home, so should answer true to anything that looks like it.\x22\x0a\x09^ self isAbstract not and:[\x0a\x09anURI isEmpty or:[\x0a\x09anURI = '/' or:[\x0a\x09anURI = '/#/' ] ] ]",
messageSends: ["and:", "not", "isAbstract", "or:", "isEmpty", "="],
referencedClasses: []
}),
globals.PetShopController.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._for_on_appendingTo_(nil,nil,"#content"._asJQuery()))._onOpen();
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},globals.PetShopController.klass)})},
args: [],
source: "open\x0a\x09\x22The foundation is ready, time to start this app!\x22\x0a\x0a\x09^ (self for: nil on: nil appendingTo: '#content' asJQuery) onOpen",
messageSends: ["onOpen", "for:on:appendingTo:", "asJQuery"],
referencedClasses: []
}),
globals.PetShopController.klass);


smalltalk.addClass('Product', globals.Model, [], 'PetShop');


smalltalk.addClass('ProductController', globals.BindingController, [], 'PetShop');


smalltalk.addClass('ProductThumbnailController', globals.BindingController, [], 'PetShop');


smalltalk.addClass('ShopVisitor', globals.Model, [], 'PetShop');

});
