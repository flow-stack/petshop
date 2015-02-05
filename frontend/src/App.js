define("flow-app/App", ["amber/boot", "amber_core/Kernel-Objects", "amber-mvc/MVC-Core", "amber-flow/Flow-Core"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('App');
$core.packages["App"].innerEval = function (expr) { return eval(expr); };
$core.packages["App"].transport = {"type":"amd","amdNamespace":"flow-app"};

$core.addClass('App', $globals.Object, [], 'App');

$globals.App.klass.iVarNames = ['main','session'];
$core.addMethod(
$core.method({
selector: "getSession",
protocol: 'actions',
fn: function (){
var self=this;
function $ShopSession(){return $globals.ShopSession||(typeof ShopSession=="undefined"?nil:ShopSession)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($ShopSession())._new();
$recv($2)._visitor_(self._getVisitor());
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getSession",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getSession\x0a\x0a\x09^ ShopSession new\x0a\x09\x09visitor:  self getVisitor;\x0a\x09\x09yourself",
referencedClasses: ["ShopSession"],
//>>excludeEnd("ide");
messageSends: ["visitor:", "new", "getVisitor", "yourself"]
}),
$globals.App.klass);

$core.addMethod(
$core.method({
selector: "getVisitor",
protocol: 'actions',
fn: function (){
var self=this;
var shopVisitor;
function $ShopVisitor(){return $globals.ShopVisitor||(typeof ShopVisitor=="undefined"?nil:ShopVisitor)}
function $Cart(){return $globals.Cart||(typeof Cart=="undefined"?nil:Cart)}
function $WishList(){return $globals.WishList||(typeof WishList=="undefined"?nil:WishList)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$6,$1;
shopVisitor=$recv($ShopVisitor())._localFindCid_($recv($recv(window)._localStorage())._getItem_("visitor"));
$2=$recv(shopVisitor)._isNil();
if($core.assert($2)){
$3=$recv($ShopVisitor())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$4=$3;
$5=$recv($Cart())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv($4)._cart_($5);
$recv($3)._wishList_($recv($WishList())._new());
$6=$recv($3)._yourself();
$1=$6;
} else {
$1=shopVisitor;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getVisitor",{shopVisitor:shopVisitor},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getVisitor\x0a\x0a\x09| shopVisitor |\x0a\x0a\x09\x22The strategy is to have something to model a shop visitor\x0a\x09so the controllers can use it and customize somewhow her / his visiting experience.\x0a\x09If is not a first timer we will have it stored locally at 'me''\x0a\x09and if not, we fallback to a default new model\x22\x0a\x09shopVisitor := ShopVisitor localFindCid: (window localStorage getItem: 'visitor').\x0a\x09\x0a\x09^ shopVisitor isNil\x0a\x09\x09ifTrue:[ ShopVisitor new\x0a\x09\x09\x09\x09\x09cart: Cart new;\x0a\x09\x09\x09\x09\x09wishList: WishList new;\x0a\x09\x09\x09\x09\x09yourself ]\x0a\x09\x09ifFalse:[ shopVisitor ]",
referencedClasses: ["ShopVisitor", "Cart", "WishList"],
//>>excludeEnd("ide");
messageSends: ["localFindCid:", "getItem:", "localStorage", "ifTrue:ifFalse:", "isNil", "cart:", "new", "wishList:", "yourself"]
}),
$globals.App.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.App.klass.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._setupRouter();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self setupRouter",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "setupRouter"]
}),
$globals.App.klass);

$core.addMethod(
$core.method({
selector: "initializeMain",
protocol: 'initialization',
fn: function (){
var self=this;
function $MainController(){return $globals.MainController||(typeof MainController=="undefined"?nil:MainController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@main"]=$recv($MainController())._in_appendingTo_(nil,"#main-wrapper"._asJQuery());
$1=self["@main"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeMain",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeMain\x0a\x0a\x09^ main := MainController \x0a\x09\x09\x09\x09\x09in: nil\x0a\x09\x09\x09\x09\x09appendingTo: '#main-wrapper' asJQuery",
referencedClasses: ["MainController"],
//>>excludeEnd("ide");
messageSends: ["in:appendingTo:", "asJQuery"]
}),
$globals.App.klass);

$core.addMethod(
$core.method({
selector: "main",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@main"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._initializeMain();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"main",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "main\x0a\x0a\x09^ main ifNil: [ self initializeMain ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initializeMain"]
}),
$globals.App.klass);

$core.addMethod(
$core.method({
selector: "saveVisitor",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($recv($recv(self._main())._session())._model())._visitor())._localSave();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"saveVisitor",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "saveVisitor\x0a\x0a\x09self main session model visitor localSave",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["localSave", "visitor", "model", "session", "main"]
}),
$globals.App.klass);

$core.addMethod(
$core.method({
selector: "session",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@session"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "session\x0a\x0a\x09^ session",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.App.klass);

$core.addMethod(
$core.method({
selector: "session:",
protocol: 'accessing',
fn: function (aSession){
var self=this;
self["@session"]=aSession;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSession"],
source: "session: aSession\x0a\x0a\x09session := aSession",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.App.klass);

$core.addMethod(
$core.method({
selector: "setupRouter",
protocol: 'actions',
fn: function (){
var self=this;
function $Router(){return $globals.Router||(typeof Router=="undefined"?nil:Router)}
function $App(){return $globals.App||(typeof App=="undefined"?nil:App)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$8,$7,$6,$5,$9,$11,$10,$12;
$1=$recv($Router())._rlite();
$recv($1)._add_do_("",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Router())._set_("#/home");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["set:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:do:"]=1;
//>>excludeEnd("ctx");
$recv($1)._add_do_("#",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Router())._set_("#/home");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["set:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:do:"]=2;
//>>excludeEnd("ctx");
$recv($1)._add_do_("#/",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Router())._set_("#/home");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["set:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:do:"]=3;
//>>excludeEnd("ctx");
$recv($1)._add_do_("/",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Router())._set_("#/home");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["set:"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:do:"]=4;
//>>excludeEnd("ctx");
$recv($1)._add_do_("home",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($App())._main();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["main"]=1;
//>>excludeEnd("ctx");
return $recv($2)._reset();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:do:"]=5;
//>>excludeEnd("ctx");
$recv($1)._add_do_("cart",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv($App())._main();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["main"]=2;
//>>excludeEnd("ctx");
return $recv($3)._showCart();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:do:"]=6;
//>>excludeEnd("ctx");
$recv($1)._add_do_("catalog",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv($App())._main();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["main"]=3;
//>>excludeEnd("ctx");
return $recv($4)._showCatalog();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:do:"]=7;
//>>excludeEnd("ctx");
$recv($1)._add_do_("product/:id",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$8=$recv(r)._params();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["params"]=1;
//>>excludeEnd("ctx");
$7=$recv($8)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=1;
//>>excludeEnd("ctx");
$6="#/products/".__comma($7);
$5=$recv($6).__comma("/view");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($Router())._set_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,8)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:do:"]=8;
//>>excludeEnd("ctx");
$recv($1)._add_do_("product/:id/view",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$9=$recv($App())._main();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["main"]=4;
//>>excludeEnd("ctx");
$11=$recv(r)._params();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["params"]=2;
//>>excludeEnd("ctx");
$10=$recv($11)._id();
return $recv($9)._showProductId_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,9)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:do:"]=9;
//>>excludeEnd("ctx");
$recv($1)._add_do_("search/:target",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($App())._main())._showSearchResultsFor_($recv($recv(r)._params())._target());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,10)});
//>>excludeEnd("ctx");
}));
$12=$recv($1)._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupRouter",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupRouter\x0a\x0a\x09Router rlite\x0a\x09\x09add: '' do: [ :r | Router set: '#/home' ];\x0a\x09\x09add: '#' do: [ :r | Router set: '#/home' ];\x0a\x09\x09add: '#/' do: [ :r | Router set: '#/home' ];\x0a\x09\x09add: '/' do: [ :r | Router set: '#/home' ];\x0a\x09\x09\x0a\x09\x09add: 'home' do: [ :r | App main reset ];\x0a\x0a\x09\x09add: 'cart' do: [ :r | App main showCart ];\x0a\x09\x09add: 'catalog' do: [ :r | App main showCatalog ];\x0a\x09\x09\x0a\x09\x09add: 'product/:id' do: [ :r | Router set: '#/products/',r params id,'/view' ];\x09\x0a\x09\x09add: 'product/:id/view' do: [ :r | App main showProductId: r params id ];\x09\x0a\x0a\x09\x09add: 'search/:target' do: [ :r | App main showSearchResultsFor: r params target ];\x0a\x09\x09\x0a\x09\x09yourself",
referencedClasses: ["Router", "App"],
//>>excludeEnd("ide");
messageSends: ["add:do:", "rlite", "set:", "reset", "main", "showCart", "showCatalog", ",", "id", "params", "showProductId:", "showSearchResultsFor:", "target", "yourself"]
}),
$globals.App.klass);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'actions',
fn: function (){
var self=this;
function $Flow(){return $globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
function $Router(){return $globals.Router||(typeof Router=="undefined"?nil:Router)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv($Flow())._app_(self);
$1=$recv($Flow())._start();
$recv(window)._at_put_("app",self);
self["@session"]=self._getSession();
$recv($recv(self._main())._show())._done_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Router())._processHash();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09\x22Starts the App app\x22\x0a\x0a\x09Flow app: self; start.\x0a\x09window at: #app put: self.\x0a\x09\x0a\x09session := self getSession.\x0a\x09self main show done: [ Router processHash ] ",
referencedClasses: ["Flow", "Router"],
//>>excludeEnd("ide");
messageSends: ["app:", "start", "at:put:", "getSession", "done:", "show", "main", "processHash"]
}),
$globals.App.klass);


$core.addClass('Cart', $globals.Model, [], 'App');
$core.addMethod(
$core.method({
selector: "addProduct:",
protocol: 'actions',
fn: function (aProduct){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._products();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["products"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._includes_(aProduct);
if(!$core.assert($1)){
$recv(self._products())._add_(aProduct);
};
self._trigger_with_("added:",aProduct);
self._updateTotal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addProduct:",{aProduct:aProduct},$globals.Cart)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProduct"],
source: "addProduct: aProduct\x0a\x0a\x09(self products includes: aProduct) ifFalse: [\x0a\x09\x09self products add: aProduct ].\x0a\x0a\x09self trigger: #added: with: aProduct.\x0a\x09\x0a\x09self updateTotal.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "includes:", "products", "add:", "trigger:with:", "updateTotal"]
}),
$globals.Cart);

$core.addMethod(
$core.method({
selector: "products",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Cart.superclass.fn.prototype._products.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["products"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
self._products_($recv($OrderedCollection())._new());
} else {
$1;
};
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Cart.superclass.fn.prototype._products.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"products",{},$globals.Cart)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "products\x0a\x0a\x09super products ifNil: [\x0a\x09\x09self products: OrderedCollection new ].\x0a\x09\x09\x0a\x09^ super products",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "products", "products:", "new"]
}),
$globals.Cart);

$core.addMethod(
$core.method({
selector: "removeProduct:",
protocol: 'actions',
fn: function (aProduct){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._products())._remove_ifAbsent_(aProduct,(function(){
return nil;

}));
self._trigger_with_("removed:",aProduct);
self._updateTotal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeProduct:",{aProduct:aProduct},$globals.Cart)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProduct"],
source: "removeProduct: aProduct\x0a\x0a\x09self products\x0a\x09\x09remove: aProduct\x0a\x09\x09ifAbsent: [ nil ].\x0a\x0a\x09self trigger: #removed: with: aProduct. \x0a\x09\x0a\x09self updateTotal",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:ifAbsent:", "products", "trigger:with:", "updateTotal"]
}),
$globals.Cart);

$core.addMethod(
$core.method({
selector: "updateTotal",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._total_($recv(self._products())._inject_into_((0),(function(sum,e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(sum).__plus($recv(e)._price());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({sum:sum,e:e},$ctx1,1)});
//>>excludeEnd("ctx");
})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateTotal",{},$globals.Cart)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateTotal\x0a\x0a\x09self total: (self products inject: 0 into: [ :sum :e | sum + e price ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["total:", "inject:into:", "products", "+", "price"]
}),
$globals.Cart);



$core.addClass('CartController', $globals.BindingController, [], 'App');
$core.addMethod(
$core.method({
selector: "observeEvents",
protocol: 'actions',
fn: function (){
var self=this;
function $App(){return $globals.App||(typeof App=="undefined"?nil:App)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CartController.superclass.fn.prototype._observeEvents.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._when_do_("onAfterModel",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._model())._updateTotal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["when:do:"]=1;
//>>excludeEnd("ctx");
$recv($recv($recv($recv($App())._session())._shopVisitor())._cart())._when_do_("removed:",(function(evt,product){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onRemoved_(product);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt,product:product},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeEvents",{},$globals.CartController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeEvents\x0a\x0a\x09super observeEvents.\x0a\x09\x0a\x09self when: #onAfterModel do: [ self model updateTotal ].\x0a\x09\x0a\x09App session shopVisitor cart \x0a\x09\x09when: #removed: \x0a\x09\x09do:[ :evt :product | self onRemoved: product ].",
referencedClasses: ["App"],
//>>excludeEnd("ide");
messageSends: ["observeEvents", "when:do:", "updateTotal", "model", "cart", "shopVisitor", "session", "onRemoved:"]
}),
$globals.CartController);

$core.addMethod(
$core.method({
selector: "onAfterModel",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CartController.superclass.fn.prototype._onAfterModel.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self._model())._updateTotal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onAfterModel",{},$globals.CartController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onAfterModel\x0a\x0a\x09super onAfterModel.\x0a\x09\x0a\x09self model updateTotal",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onAfterModel", "updateTotal", "model"]
}),
$globals.CartController);

$core.addMethod(
$core.method({
selector: "onRemoved:",
protocol: 'reactions',
fn: function (aProduct){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._controllerAt_("products"))._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onRemoved:",{aProduct:aProduct},$globals.CartController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProduct"],
source: "onRemoved: aProduct\x0a\x0a\x09(self controllerAt: 'products') refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["refresh", "controllerAt:"]
}),
$globals.CartController);

$core.addMethod(
$core.method({
selector: "onTemplate:",
protocol: 'reactions',
fn: function (data){
var self=this;
function $ListController(){return $globals.ListController||(typeof ListController=="undefined"?nil:ListController)}
function $ProductInCartController(){return $globals.ProductInCartController||(typeof ProductInCartController=="undefined"?nil:ProductInCartController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CartController.superclass.fn.prototype._onTemplate_.apply($recv(self), [data]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1="#loaderBar"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._remove();
$recv(self._ifAbsentAt_put_andDo_("products",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($ListController())._for_on_appendingTo_(self["@model"],self,".products"._asJQuery());
$recv($2)._getItemsBlock_((function(m){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(m)._products();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({m:m},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$recv($2)._itemControllerClass_($ProductInCartController());
$3=$recv($2)._yourself();
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(lc){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._observeProducts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({lc:lc},$ctx1,3)});
//>>excludeEnd("ctx");
})))._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onTemplate:",{data:data},$globals.CartController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["data"],
source: "onTemplate: data\x0a\x09\x22Receives the template's data after requirejs \x0a\x09have received it from the server (or cache).\x22\x0a\x0a\x09super onTemplate: data.\x0a\x0a\x09'#loaderBar'asJQuery remove.\x0a\x09\x09\x0a\x09(self ifAbsentAt: 'products' \x0a\x09\x09put: [\x0a\x09\x09\x09\x22Lazy creation of the list controller for the thumbnails\x22\x0a\x09\x09\x09(ListController \x0a\x09\x09\x09\x09for: model \x0a\x09\x09\x09\x09on: self \x0a\x09\x09\x09\x09appendingTo: '.products' asJQuery)\x0a\x09\x09\x09\x09\x09getItemsBlock: [:m| m products ];\x0a\x09\x09\x09\x09\x09itemControllerClass: ProductInCartController;\x0a\x09\x09\x09\x09\x09yourself]\x0a\x09\x09andDo:[ :lc | self observeProducts ]) refresh \x22be sure to display resh stuff\x22",
referencedClasses: ["ListController", "ProductInCartController"],
//>>excludeEnd("ide");
messageSends: ["onTemplate:", "remove", "asJQuery", "refresh", "ifAbsentAt:put:andDo:", "getItemsBlock:", "for:on:appendingTo:", "products", "itemControllerClass:", "yourself", "observeProducts"]
}),
$globals.CartController);

$core.addMethod(
$core.method({
selector: "update",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._model())._updateTotal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.CartController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09\x0a\x09self model updateTotal",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updateTotal", "model"]
}),
$globals.CartController);


$core.addMethod(
$core.method({
selector: "defaultModel",
protocol: 'actions',
fn: function (){
var self=this;
function $Flow(){return $globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv($Flow())._session())._shopVisitor())._cart();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultModel",{},$globals.CartController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultModel\x0a\x09\x22Answers the default model for this controller.\x22\x0a\x09\x0a\x09^ Flow session shopVisitor cart",
referencedClasses: ["Flow"],
//>>excludeEnd("ide");
messageSends: ["cart", "shopVisitor", "session"]
}),
$globals.CartController.klass);


$core.addClass('Catalog', $globals.Model, [], 'App');


$core.addClass('CatalogController', $globals.BindingController, [], 'App');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CatalogController.comment="The `CatalogController` has the model with the list of `products`. It also has a `ListController` that is going to present and maintain a thumbnail for each product.\x0a\x0aThis controller uses the timely `onTemplate:` reaction to load Products from the backend and, once the answer arrives, react again in `onProducts:` to lazily create the list controller of those fresh products";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "products",
protocol: 'accessing',
fn: function (){
var self=this;
function $ListController(){return $globals.ListController||(typeof ListController=="undefined"?nil:ListController)}
function $ProductThumbnailController(){return $globals.ProductThumbnailController||(typeof ProductThumbnailController=="undefined"?nil:ProductThumbnailController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$1=self._ifAbsentAt_put_("products",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($ListController())._in_appendingTo_(self,"#products-wrapper"._asJQuery());
$recv($2)._itemControllerClass_($ProductThumbnailController());
$3=$recv($2)._yourself();
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"products",{},$globals.CatalogController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "products\x0a\x0a\x09^ self ifAbsentAt: 'products' put: [\x0a\x09\x09\x22Lazy creation of the list controller for the thumbnails\x22\x0a\x09\x09(ListController \x0a\x09\x09\x09in: self \x0a\x09\x09\x09appendingTo: '#products-wrapper' asJQuery)\x0a\x09\x09\x09\x09itemControllerClass: ProductThumbnailController;\x0a\x09\x09\x09\x09yourself ]",
referencedClasses: ["ListController", "ProductThumbnailController"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "itemControllerClass:", "in:appendingTo:", "asJQuery", "yourself"]
}),
$globals.CatalogController);

$core.addMethod(
$core.method({
selector: "show",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CatalogController.superclass.fn.prototype._show.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($2)._done_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._showProducts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show",{},$globals.CatalogController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "show\x0a\x0a\x09^ super show done: [ self showProducts ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["done:", "show", "showProducts"]
}),
$globals.CatalogController);

$core.addMethod(
$core.method({
selector: "showProducts",
protocol: 'actions',
fn: function (){
var self=this;
function $Product(){return $globals.Product||(typeof Product=="undefined"?nil:Product)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($Product())._findAllThen_((function(products){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._showProducts_(products);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({products:products},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showProducts",{},$globals.CatalogController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showProducts\x0a\x0a\x09Product findAllThen: [ :products | \x0a\x09\x09self showProducts: products ].",
referencedClasses: ["Product"],
//>>excludeEnd("ide");
messageSends: ["findAllThen:", "showProducts:"]
}),
$globals.CatalogController);

$core.addMethod(
$core.method({
selector: "showProducts:",
protocol: 'actions',
fn: function (someProducts){
var self=this;
function $ListModel(){return $globals.ListModel||(typeof ListModel=="undefined"?nil:ListModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self._products();
$recv($1)._model_($recv($ListModel())._on_(someProducts));
$2=$recv($1)._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showProducts:",{someProducts:someProducts},$globals.CatalogController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someProducts"],
source: "showProducts: someProducts\x0a\x0a\x0a\x09self products \x0a\x09\x09model: (ListModel on: someProducts);\x0a\x09\x09show",
referencedClasses: ["ListModel"],
//>>excludeEnd("ide");
messageSends: ["model:", "products", "on:", "show"]
}),
$globals.CatalogController);



$core.addClass('Footer', $globals.Model, [], 'App');


$core.addClass('FooterController', $globals.BindingController, [], 'App');


$core.addClass('MainController', $globals.BindingController, [], 'App');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MainController.comment="The `MainController` is the main controller in this App sample application.\x0a\x0aAs you can see in class side `isValidFor: anURI`, it's going to be routed when the `URI` is at `/`.\x0a\x0aIt uses the default model, which is `aShopVisitor`, either loaded from localStorage using MiniMapless or, lazily, creating a brand new one.\x0a\x0aIf you take a look into `onOpen` you'll see that:\x0a\x0a- sets the model\x0a- activates the Router\x0a- creates a session\x0a- puts the instance in window.app (so you can reach it from the console)\x0a- and publishes some objects to be remotely reached by the backend";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "catalog",
protocol: 'accessing',
fn: function (){
var self=this;
function $CatalogController(){return $globals.CatalogController||(typeof CatalogController=="undefined"?nil:CatalogController)}
function $Catalog(){return $globals.Catalog||(typeof Catalog=="undefined"?nil:Catalog)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._ifAbsentAt_put_("catalog",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($CatalogController())._on_in_appendingTo_($recv($Catalog())._new(),self,"#catalog-wrapper"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"catalog",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "catalog\x0a\x0a\x09^ self ifAbsentAt: #catalog put: [\x0a\x09\x09\x09CatalogController \x0a\x09\x09\x09\x09on: Catalog new \x0a\x09\x09\x09\x09in: self \x0a\x09\x09\x09\x09appendingTo: '#catalog-wrapper' asJQuery ]",
referencedClasses: ["CatalogController", "Catalog"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "on:in:appendingTo:", "new", "asJQuery"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "find",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(window)._alert_("Implement find please!");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"find",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "find\x0a\x0a\x09window alert: 'Implement find please!'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["alert:"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "footer",
protocol: 'accessing',
fn: function (){
var self=this;
function $FooterController(){return $globals.FooterController||(typeof FooterController=="undefined"?nil:FooterController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._ifAbsentAt_put_("footer",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($FooterController())._in_appendingTo_(self,"#footer-wrapper"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"footer",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "footer\x0a\x0a\x09^ self ifAbsentAt: #footer put: [ \x0a\x09\x09\x09FooterController \x0a\x09\x09\x09\x09in: self \x0a\x09\x09\x09\x09appendingTo: '#footer-wrapper' asJQuery ]",
referencedClasses: ["FooterController"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "in:appendingTo:", "asJQuery"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "reset",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._showCatalog();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reset",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09\x0a\x09self showCatalog",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["showCatalog"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "saveState",
protocol: 'actions',
fn: function (){
var self=this;
function $App(){return $globals.App||(typeof App=="undefined"?nil:App)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($App())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._cart();
$recv($1)._save();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["save"]=1;
//>>excludeEnd("ctx");
$recv($recv($App())._session())._save();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"saveState",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "saveState\x0a\x0a\x09App session cart save.\x0a\x09App session save.",
referencedClasses: ["App"],
//>>excludeEnd("ide");
messageSends: ["save", "cart", "session"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "showCatalog",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._hideAllBut_("footer");
$recv(self._catalog())._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showCatalog",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showCatalog\x0a\x09\x0a\x09self hideAllBut: #footer.\x0a\x09\x0a\x09self catalog show",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hideAllBut:", "show", "catalog"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "update",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$recv($1)._updateCartSize();
$recv(self._model())._updateWishListSize();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x0a\x09self model updateCartSize.\x0a\x09self model updateWishListSize.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updateCartSize", "model", "updateWishListSize"]
}),
$globals.MainController);



$core.addClass('Product', $globals.Model, [], 'App');


$core.addClass('ProductController', $globals.BindingController, [], 'App');


$core.addClass('ProductInCartController', $globals.BindingController, [], 'App');
$core.addMethod(
$core.method({
selector: "removeFromCart",
protocol: 'actions',
fn: function (){
var self=this;
function $Flow(){return $globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$5,$4,$3,$6,$7,$8;
$2=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._shopVisitor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["shopVisitor"]=1;
//>>excludeEnd("ctx");
$recv($1)._localSave();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localSave"]=1;
//>>excludeEnd("ctx");
$recv(self["@model"])._localSave();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localSave"]=2;
//>>excludeEnd("ctx");
$5=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._shopVisitor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["shopVisitor"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._cart();
$recv($3)._removeProduct_(self["@model"]);
$6=$recv($3)._localSave();
$recv($recv($recv($Flow())._session())._shopVisitor())._updateCartSize();
$7="#alertsRoot"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$8=$recv("<div class=\x22alert alert-warning\x22 role=\x22alert\x22>We've removed one ".__comma($recv(self["@model"])._description())).__comma(" from your cart</div>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($7)._html_($8);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv("#alertsRoot"._asJQuery())._empty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((2000));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeFromCart",{},$globals.ProductInCartController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeFromCart\x0a\x0a\x09Flow session shopVisitor localSave.\x0a\x09model localSave.\x0a\x09\x0a\x09Flow session shopVisitor cart removeProduct: model; localSave.\x0a\x09Flow session shopVisitor updateCartSize.\x0a\x09\x0a\x09'#alertsRoot' asJQuery html: '<div class=\x22alert alert-warning\x22 role=\x22alert\x22>We''ve removed one ',model description,' from your cart</div>'.\x0a\x0a\x09['#alertsRoot' asJQuery empty ] valueWithTimeout: 2000.",
referencedClasses: ["Flow"],
//>>excludeEnd("ide");
messageSends: ["localSave", "shopVisitor", "session", "removeProduct:", "cart", "updateCartSize", "html:", "asJQuery", ",", "description", "valueWithTimeout:", "empty"]
}),
$globals.ProductInCartController);



$core.addClass('ProductInWishListController', $globals.BindingController, [], 'App');
$core.addMethod(
$core.method({
selector: "removeFromCart",
protocol: 'actions',
fn: function (){
var self=this;
function $Flow(){return $globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$5,$4,$3,$6,$7,$8;
$2=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._shopVisitor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["shopVisitor"]=1;
//>>excludeEnd("ctx");
$recv($1)._localSave();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localSave"]=1;
//>>excludeEnd("ctx");
$recv(self["@model"])._localSave();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localSave"]=2;
//>>excludeEnd("ctx");
$5=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._shopVisitor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["shopVisitor"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._wishList();
$recv($3)._removeProduct_(self["@model"]);
$6=$recv($3)._localSave();
$recv($recv($recv($Flow())._session())._shopVisitor())._updateWishListSize();
$7="#alertsRoot"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$8=$recv("<div class=\x22alert alert-warning\x22 role=\x22alert\x22>We've removed one ".__comma($recv(self["@model"])._description())).__comma(" from your wish list</div>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($7)._html_($8);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv("#alertsRoot"._asJQuery())._empty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((2000));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeFromCart",{},$globals.ProductInWishListController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeFromCart\x0a\x0a\x09Flow session shopVisitor localSave.\x0a\x09model localSave.\x0a\x09\x0a\x09Flow session shopVisitor wishList removeProduct: model; localSave.\x0a\x09Flow session shopVisitor updateWishListSize.\x0a\x09\x0a\x09'#alertsRoot' asJQuery html: '<div class=\x22alert alert-warning\x22 role=\x22alert\x22>We''ve removed one ',model description,' from your wish list</div>'.\x0a\x0a\x09['#alertsRoot' asJQuery empty ] valueWithTimeout: 2000.",
referencedClasses: ["Flow"],
//>>excludeEnd("ide");
messageSends: ["localSave", "shopVisitor", "session", "removeProduct:", "wishList", "updateWishListSize", "html:", "asJQuery", ",", "description", "valueWithTimeout:", "empty"]
}),
$globals.ProductInWishListController);



$core.addClass('ProductThumbnailController', $globals.BindingController, [], 'App');
$core.addMethod(
$core.method({
selector: "addToCart",
protocol: 'actions',
fn: function (){
var self=this;
function $Flow(){return $globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$5,$4,$3,$6,$7,$8;
$2=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._shopVisitor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["shopVisitor"]=1;
//>>excludeEnd("ctx");
$recv($1)._localSave();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localSave"]=1;
//>>excludeEnd("ctx");
$recv(self["@model"])._localSave();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localSave"]=2;
//>>excludeEnd("ctx");
$5=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._shopVisitor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["shopVisitor"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._cart();
$recv($3)._addProduct_(self["@model"]);
$6=$recv($3)._localSave();
$recv($recv($recv($Flow())._session())._shopVisitor())._updateCartSize();
$7="#alertsRoot"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$8=$recv("<div class=\x22alert alert-success\x22 role=\x22alert\x22>Done. We've added one ".__comma($recv(self["@model"])._description())).__comma(" to your cart!</div>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($7)._html_($8);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv("#alertsRoot"._asJQuery())._empty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((2000));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addToCart",{},$globals.ProductThumbnailController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addToCart\x0a\x0a\x09Flow session shopVisitor localSave.\x0a\x09model localSave.\x0a\x09\x0a\x09Flow session shopVisitor cart addProduct: model; localSave.\x0a\x09Flow session shopVisitor updateCartSize.\x0a\x09\x0a\x09'#alertsRoot' asJQuery html: '<div class=\x22alert alert-success\x22 role=\x22alert\x22>Done. We''ve added one ',model description,' to your cart!</div>'.\x0a\x09['#alertsRoot' asJQuery empty ] valueWithTimeout: 2000.",
referencedClasses: ["Flow"],
//>>excludeEnd("ide");
messageSends: ["localSave", "shopVisitor", "session", "addProduct:", "cart", "updateCartSize", "html:", "asJQuery", ",", "description", "valueWithTimeout:", "empty"]
}),
$globals.ProductThumbnailController);

$core.addMethod(
$core.method({
selector: "addToWishList",
protocol: 'actions',
fn: function (){
var self=this;
function $Flow(){return $globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$5,$4,$3,$6,$7,$8;
$2=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._shopVisitor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["shopVisitor"]=1;
//>>excludeEnd("ctx");
$recv($1)._localSave();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localSave"]=1;
//>>excludeEnd("ctx");
$recv(self["@model"])._localSave();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localSave"]=2;
//>>excludeEnd("ctx");
$5=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._shopVisitor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["shopVisitor"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._wishList();
$recv($3)._addProduct_(self["@model"]);
$6=$recv($3)._localSave();
$recv($recv($recv($Flow())._session())._shopVisitor())._updateWishListSize();
$7="#alertsRoot"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$8=$recv("<div class=\x22alert alert-info\x22 role=\x22alert\x22>We've added one ".__comma($recv(self["@model"])._description())).__comma(" to your wishlist. It got sooo whishable!</div>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($7)._html_($8);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv("#alertsRoot"._asJQuery())._empty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((2000));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addToWishList",{},$globals.ProductThumbnailController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addToWishList\x0a\x0a\x09Flow session shopVisitor localSave.\x0a\x09model localSave.\x0a\x09\x0a\x09Flow session shopVisitor wishList addProduct: model; localSave.\x0a\x09Flow session shopVisitor updateWishListSize.\x0a\x09\x0a\x09'#alertsRoot' asJQuery html: '<div class=\x22alert alert-info\x22 role=\x22alert\x22>We''ve added one ',model description,' to your wishlist. It got sooo whishable!</div>'.\x0a\x0a\x09['#alertsRoot' asJQuery empty ] valueWithTimeout: 2000.",
referencedClasses: ["Flow"],
//>>excludeEnd("ide");
messageSends: ["localSave", "shopVisitor", "session", "addProduct:", "wishList", "updateWishListSize", "html:", "asJQuery", ",", "description", "valueWithTimeout:", "empty"]
}),
$globals.ProductThumbnailController);

$core.addMethod(
$core.method({
selector: "getModelAsArgument",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@model"])._data();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getModelAsArgument",{},$globals.ProductThumbnailController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getModelAsArgument\x0a\x09\x22Returns the model in a way that is appropiate for binding (usable by rivets).\x0a\x09By default BindingController assumes you are using mapless as controllers model\x0a\x09so we send their data but subclasses might differ if they please.\x22\x09\x0a\x09^ model data",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["data"]
}),
$globals.ProductThumbnailController);

$core.addMethod(
$core.method({
selector: "onAfterModel",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ProductThumbnailController.superclass.fn.prototype._onAfterModel.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$recv($1)._imageUrl_("img/products/".__comma($recv(self._model())._image()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onAfterModel",{},$globals.ProductThumbnailController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onAfterModel\x0a\x0a\x09super onAfterModel.\x0a\x09\x0a\x09self model imageUrl: 'img/products/', self model image",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onAfterModel", "imageUrl:", "model", ",", "image"]
}),
$globals.ProductThumbnailController);



$core.addClass('ShopSession', $globals.Session, [], 'App');


$core.addClass('ShopVisitor', $globals.Model, [], 'App');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ShopVisitor.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._searchText_("");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ShopVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self searchText: ''.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "searchText:"]
}),
$globals.ShopVisitor);

$core.addMethod(
$core.method({
selector: "updateCartSize",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._cartSize_($recv($recv(self._cart())._products())._size());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateCartSize",{},$globals.ShopVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateCartSize\x0a\x0a\x09self cartSize: self cart products size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cartSize:", "size", "products", "cart"]
}),
$globals.ShopVisitor);

$core.addMethod(
$core.method({
selector: "updateWishListSize",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._wishListSize_($recv($recv(self._wishList())._products())._size());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateWishListSize",{},$globals.ShopVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateWishListSize\x0a\x0a\x09self wishListSize: self wishList products size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["wishListSize:", "size", "products", "wishList"]
}),
$globals.ShopVisitor);



$core.addClass('WishList', $globals.Model, [], 'App');
$core.addMethod(
$core.method({
selector: "addProduct:",
protocol: 'actions',
fn: function (aProduct){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._products();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["products"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._includes_(aProduct);
if(!$core.assert($1)){
$recv(self._products())._add_(aProduct);
};
self._trigger_with_("added:",aProduct);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addProduct:",{aProduct:aProduct},$globals.WishList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProduct"],
source: "addProduct: aProduct\x0a\x0a\x09(self products includes: aProduct) ifFalse:[\x0a\x09\x09self products add: aProduct ].\x0a\x09\x09\x0a\x09self trigger: #added: with: aProduct",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "includes:", "products", "add:", "trigger:with:"]
}),
$globals.WishList);

$core.addMethod(
$core.method({
selector: "products",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.WishList.superclass.fn.prototype._products.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["products"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
self._products_($recv($OrderedCollection())._new());
} else {
$1;
};
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.WishList.superclass.fn.prototype._products.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"products",{},$globals.WishList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "products\x0a\x0a\x09super products ifNil:[\x0a\x09\x09self products: OrderedCollection new ].\x0a\x09\x09\x0a\x09^ super products",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "products", "products:", "new"]
}),
$globals.WishList);

$core.addMethod(
$core.method({
selector: "removeProduct:",
protocol: 'actions',
fn: function (aProduct){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._products())._remove_ifAbsent_(aProduct,(function(){
return nil;

}));
self._trigger_with_("removed:",aProduct);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeProduct:",{aProduct:aProduct},$globals.WishList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProduct"],
source: "removeProduct: aProduct\x0a\x0a\x09self products \x0a\x09\x09remove: aProduct\x0a\x09\x09ifAbsent:[ nil ].\x0a\x09\x09\x0a\x09self trigger: #removed: with: aProduct",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:ifAbsent:", "products", "trigger:with:"]
}),
$globals.WishList);


});
