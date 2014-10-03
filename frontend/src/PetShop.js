define("app/PetShop", ["amber/boot", "app/Flow-Core", "app/Flow-Binding", "amber_core/Kernel-Objects"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('PetShop');
smalltalk.packages["PetShop"].transport = {"type":"amd","amdNamespace":"app"};

smalltalk.addClass('Cart', globals.Model, [], 'PetShop');


smalltalk.addClass('CartController', globals.BindingController, [], 'PetShop');

smalltalk.addMethod(
smalltalk.method({
selector: "defaultModel",
protocol: 'actions',
fn: function (){
var self=this;
function $Cart(){return globals.Cart||(typeof Cart=="undefined"?nil:Cart)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Cart())._localFindId_("cart");
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultModel",{},globals.CartController.klass)})},
args: [],
source: "defaultModel\x0a\x0a\x09^ Cart localFindId: 'cart' ",
messageSends: ["localFindId:"],
referencedClasses: ["Cart"]
}),
globals.CartController.klass);


smalltalk.addClass('Catalog', globals.Model, [], 'PetShop');


smalltalk.addClass('CatalogController', globals.BindingController, [], 'PetShop');
globals.CatalogController.comment="The `CatalogController` has the model with the list of `products`. It also has a `ListController` that is going to present and maintain a thumbnail for each product.\x0a\x0aThis controller uses the timely `onTemplate:` reaction to load Products from the backend and, once the answer arrives, react again in `onProducts:` to lazily create the list controller of those fresh products";
smalltalk.addMethod(
smalltalk.method({
selector: "onProducts:",
protocol: 'reactions',
fn: function (someProducts){
var self=this;
function $ListController(){return globals.ListController||(typeof ListController=="undefined"?nil:ListController)}
function $ProductThumbnailController(){return globals.ProductThumbnailController||(typeof ProductThumbnailController=="undefined"?nil:ProductThumbnailController)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1="#loaderBar"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._remove();
_st(self["@model"])._products_(someProducts);
_st(self._ifAbsentAt_put_("products",(function(){
return smalltalk.withContext(function($ctx2) {
$2=_st($ListController())._for_on_appendingTo_(self["@model"],self,".products"._asJQuery());
_st($2)._getItemsBlock_((function(m){
return smalltalk.withContext(function($ctx3) {
return _st(m)._products();
}, function($ctx3) {$ctx3.fillBlock({m:m},$ctx2,2)})}));
_st($2)._itemControllerClass_($ProductThumbnailController());
$3=_st($2)._yourself();
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})})))._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onProducts:",{someProducts:someProducts},globals.CatalogController)})},
args: ["someProducts"],
source: "onProducts: someProducts\x0a\x0a\x09'#loaderBar'asJQuery remove.\x0a\x09\x0a\x09model products: someProducts.\x0a\x09\x0a\x09(self ifAbsentAt: 'products' put: [\x0a\x09\x09\x22Lazy creation of the list controller for the thumbnails\x22\x0a\x09\x09(ListController \x0a\x09\x09\x09for: model \x0a\x09\x09\x09on: self \x0a\x09\x09\x09appendingTo: '.products' asJQuery)\x0a\x09\x09\x09\x09getItemsBlock: [:m| m products ];\x0a\x09\x09\x09\x09itemControllerClass: ProductThumbnailController;\x0a\x09\x09\x09\x09yourself]) refresh \x22be sure to display resh stuff\x22",
messageSends: ["remove", "asJQuery", "products:", "refresh", "ifAbsentAt:put:", "getItemsBlock:", "for:on:appendingTo:", "products", "itemControllerClass:", "yourself"],
referencedClasses: ["ListController", "ProductThumbnailController"]
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


smalltalk.addClass('PetShop', globals.Object, [], 'PetShop');

smalltalk.addMethod(
smalltalk.method({
selector: "publishObjects",
protocol: 'actions',
fn: function (){
var self=this;
function $Flow(){return globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
function $Transcript(){return globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(_st($Flow())._session())._api())._ws();
_st($1)._publish_at_(_st(_st(window)._flow())._app(),"app");
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
return self}, function($ctx1) {$ctx1.fill(self,"publishObjects",{},globals.PetShop.klass)})},
args: [],
source: "publishObjects\x0a\x09\x22Publish some local objects to be reached from backend\x22\x0a\x09\x0a\x09Flow session api ws\x0a\x09\x09publish: window flow app at: 'app';\x0a\x09\x09publish: Transcript current at: 'Transcript';\x0a\x09\x09publish: console at: 'console';\x0a\x09\x09publish: [ :sent | sent ] at: 'echo';\x0a\x09\x09publish: [ :ping | #pong ] at: 'ping';\x09\x09\x0a\x09\x09publish: [ :a :b | a + b ] at: 'sum';\x09\x0a\x09\x09yourself\x0a\x09\x0a\x09",
messageSends: ["publish:at:", "ws", "api", "session", "app", "flow", "current", "+", "yourself"],
referencedClasses: ["Flow", "Transcript"]
}),
globals.PetShop.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "shopVisitor",
protocol: 'accessing',
fn: function (){
var self=this;
var shopVisitor;
function $ShopVisitor(){return globals.ShopVisitor||(typeof ShopVisitor=="undefined"?nil:ShopVisitor)}
function $Cart(){return globals.Cart||(typeof Cart=="undefined"?nil:Cart)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
shopVisitor=_st($ShopVisitor())._localFindId_("me");
$2=_st(shopVisitor)._isNil();
if(smalltalk.assert($2)){
$3=_st($ShopVisitor())._new();
$ctx1.sendIdx["new"]=1;
_st($3)._cart_(_st($Cart())._new());
$4=_st($3)._yourself();
$1=$4;
} else {
$1=shopVisitor;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"shopVisitor",{shopVisitor:shopVisitor},globals.PetShop.klass)})},
args: [],
source: "shopVisitor\x0a\x0a\x09| shopVisitor |\x0a\x0a\x09\x22The strategy is to have something to model a shop visitor\x0a\x09so the controllers can use it and customize somewhow her / his visiting experience.\x0a\x09If is not a first timer we will have it stored locally at 'me''\x0a\x09and if not, we fallback to a default new model\x22\x0a\x09shopVisitor := \x09ShopVisitor localFindId: 'me'.\x0a\x09\x0a\x09^ shopVisitor isNil\x0a\x09\x09ifTrue:[ ShopVisitor new\x0a\x09\x09\x09\x09\x09cart: Cart new;\x0a\x09\x09\x09\x09\x09yourself ]\x0a\x09\x09ifFalse:[ shopVisitor ]",
messageSends: ["localFindId:", "ifTrue:ifFalse:", "isNil", "cart:", "new", "yourself"],
referencedClasses: ["ShopVisitor", "Cart"]
}),
globals.PetShop.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
protocol: 'actions',
fn: function (){
var self=this;
function $Flow(){return globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
function $Router(){return globals.Router||(typeof Router=="undefined"?nil:Router)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st($Flow())._app_(self);
$1=_st($Flow())._start();
self._publishObjects();
_st(_st($Flow())._session())._shopVisitor_(self._shopVisitor());
_st($Router())._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"start",{},globals.PetShop.klass)})},
args: [],
source: "start\x0a\x09\x22Starts the PetShop app\x22\x0a\x09\x0a\x09Flow app: self; start.\x0a\x09\x0a\x09self publishObjects.\x0a\x09\x0a\x09Flow session shopVisitor: self shopVisitor.\x0a\x09\x0a\x09Router refresh",
messageSends: ["app:", "start", "publishObjects", "shopVisitor:", "session", "shopVisitor", "refresh"],
referencedClasses: ["Flow", "Router"]
}),
globals.PetShop.klass);


smalltalk.addClass('PetShopController', globals.BindingController, ['session'], 'PetShop');
globals.PetShopController.comment="The `PetShopController` is the main controller in this PetShop sample application.\x0a\x0aAs you can see in class side `isValidFor: anURI`, it's going to be routed when the `URI` is at `/`.\x0a\x0aIt uses the default model, which is `aShopVisitor`, either loaded from localStorage using MiniMapless or, lazily, creating a brand new one.\x0a\x0aIf you take a look into `onOpen` you'll see that:\x0a\x0a- sets the model\x0a- activates the Router\x0a- creates a session\x0a- puts the instance in window.app (so you can reach it from the console)\x0a- and publishes some objects to be remotely reached by the backend";
smalltalk.addMethod(
smalltalk.method({
selector: "find",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(window)._alert_("Implement find please!");
return self}, function($ctx1) {$ctx1.fill(self,"find",{},globals.PetShopController)})},
args: [],
source: "find\x0a\x0a\x09window alert: 'Implement find please!'",
messageSends: ["alert:"],
referencedClasses: []
}),
globals.PetShopController);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
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
selector: "onAfterModel",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.PetShopController.superclass.fn.prototype._onAfterModel.apply(_st(self), []));
$ctx1.supercall = false;
_st(self._model())._updateQuantity();
return self}, function($ctx1) {$ctx1.fill(self,"onAfterModel",{},globals.PetShopController)})},
args: [],
source: "onAfterModel\x0a\x0a\x09super onAfterModel.\x0a\x09\x0a\x09self model updateQuantity\x0a\x0a\x09\x09",
messageSends: ["onAfterModel", "updateQuantity", "model"],
referencedClasses: []
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
$2=self._controllerAt_ifAbsentPut_("catalog",(function(){
return smalltalk.withContext(function($ctx2) {
$3=_st($Catalog())._new();
$ctx2.sendIdx["new"]=1;
$4="#catalog"._asJQuery();
$ctx2.sendIdx["asJQuery"]=2;
return _st($CatalogController())._for_on_appendingTo_($3,self,$4);
$ctx2.sendIdx["for:on:appendingTo:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["controllerAt:ifAbsentPut:"]=1;
_st($2)._refresh();
$ctx1.sendIdx["refresh"]=1;
_st(self._controllerAt_ifAbsentPut_("footer",(function(){
return smalltalk.withContext(function($ctx2) {
return _st($FooterController())._for_on_appendingTo_(_st($Footer())._new(),self,"#footer"._asJQuery());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})})))._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onTemplate:",{data:data},globals.PetShopController)})},
args: ["data"],
source: "onTemplate: data\x0a\x09\x22Receives the template's data after requirejs \x0a\x09have received it from the server (or cache).\x22\x0a\x0a\x09super onTemplate: data.\x0a\x0a\x09\x22Lets make sure we load the catalog using the #catalog div as its root\x0a\x09and refresh if already there\x22\x0a\x09'#loaderBar'asJQuery show.\x0a\x09(self controllerAt: 'catalog' ifAbsentPut:[ \x0a\x09\x09CatalogController for: Catalog new on: self appendingTo: '#catalog' asJQuery ]) refresh.\x0a\x0a\x09(self controllerAt: 'footer' ifAbsentPut:[ \x0a\x09\x09FooterController for: Footer new on: self appendingTo: '#footer' asJQuery ]) refresh.\x0a\x09\x09",
messageSends: ["onTemplate:", "show", "asJQuery", "refresh", "controllerAt:ifAbsentPut:", "for:on:appendingTo:", "new"],
referencedClasses: ["CatalogController", "Catalog", "FooterController", "Footer"]
}),
globals.PetShopController);

smalltalk.addMethod(
smalltalk.method({
selector: "saveState",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._model();
$ctx1.sendIdx["model"]=1;
$1=_st($2)._cart();
_st($1)._save();
$ctx1.sendIdx["save"]=1;
_st(self._model())._save();
return self}, function($ctx1) {$ctx1.fill(self,"saveState",{},globals.PetShopController)})},
args: [],
source: "saveState\x0a\x0a\x09self model cart save.\x0a\x09self model save.\x0a\x09",
messageSends: ["save", "cart", "model"],
referencedClasses: []
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
function $Flow(){return globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Flow())._session())._shopVisitor();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultModel",{},globals.PetShopController.klass)})},
args: [],
source: "defaultModel\x0a\x09\x22Answers the default model for this controller.\x22\x0a\x09\x0a\x09^ Flow session shopVisitor",
messageSends: ["shopVisitor", "session"],
referencedClasses: ["Flow"]
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
smalltalk.addMethod(
smalltalk.method({
selector: "addToCart",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._trigger_with_("addToCart:",self["@model"]);
return self}, function($ctx1) {$ctx1.fill(self,"addToCart",{},globals.ProductThumbnailController)})},
args: [],
source: "addToCart\x0a\x0a\x09self trigger: #addToCart: with: model",
messageSends: ["trigger:with:"],
referencedClasses: []
}),
globals.ProductThumbnailController);

smalltalk.addMethod(
smalltalk.method({
selector: "addToWishList",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._trigger_with_("addToWishList:",self["@model"]);
return self}, function($ctx1) {$ctx1.fill(self,"addToWishList",{},globals.ProductThumbnailController)})},
args: [],
source: "addToWishList\x0a\x0a\x09self trigger: #addToWishList: with: model",
messageSends: ["trigger:with:"],
referencedClasses: []
}),
globals.ProductThumbnailController);

smalltalk.addMethod(
smalltalk.method({
selector: "onAfterModel",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
($ctx1.supercall = true, globals.ProductThumbnailController.superclass.fn.prototype._onAfterModel.apply(_st(self), []));
$ctx1.supercall = false;
$1=self._model();
$ctx1.sendIdx["model"]=1;
_st($1)._imageUrl_("img/products/".__comma(_st(self._model())._image()));
return self}, function($ctx1) {$ctx1.fill(self,"onAfterModel",{},globals.ProductThumbnailController)})},
args: [],
source: "onAfterModel\x0a\x0a\x09super onAfterModel.\x0a\x09\x0a\x09self model imageUrl: 'img/products/', self model image",
messageSends: ["onAfterModel", "imageUrl:", "model", ",", "image"],
referencedClasses: []
}),
globals.ProductThumbnailController);



smalltalk.addClass('ShopVisitor', globals.Model, [], 'PetShop');
smalltalk.addMethod(
smalltalk.method({
selector: "items",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=($ctx1.supercall = true, globals.ShopVisitor.superclass.fn.prototype._items.apply(_st(self), []));
$ctx1.supercall = false;
$ctx1.sendIdx["items"]=1;
if(($receiver = $1) == null || $receiver.isNil){
self._items_(_st($OrderedCollection())._new());
} else {
$1;
};
$2=($ctx1.supercall = true, globals.ShopVisitor.superclass.fn.prototype._items.apply(_st(self), []));
$ctx1.supercall = false;
return $2;
}, function($ctx1) {$ctx1.fill(self,"items",{},globals.ShopVisitor)})},
args: [],
source: "items\x0a\x0a\x09super items ifNil:[\x0a\x09\x09self items: OrderedCollection new ].\x0a\x09\x09\x0a\x09^ super items",
messageSends: ["ifNil:", "items", "items:", "new"],
referencedClasses: ["OrderedCollection"]
}),
globals.ShopVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "updateQuantity",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._quantity_(_st(self._items())._size());
return self}, function($ctx1) {$ctx1.fill(self,"updateQuantity",{},globals.ShopVisitor)})},
args: [],
source: "updateQuantity\x0a\x0a\x09self quantity: self items size",
messageSends: ["quantity:", "size", "items"],
referencedClasses: []
}),
globals.ShopVisitor);


});
