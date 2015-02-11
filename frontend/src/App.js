define("flow-app/App", ["amber/boot", "amber_core/Kernel-Objects", "amber-mvc/MVC-Core", "amber-flow/Flow-Core"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('App');
$core.packages["App"].innerEval = function (expr) { return eval(expr); };
$core.packages["App"].transport = {"type":"amd","amdNamespace":"flow-app"};

$core.addClass('App', $globals.Object, [], 'App');

$globals.App.klass.iVarNames = ['main','session','announcer'];
$core.addMethod(
$core.method({
selector: "announce:",
protocol: 'actions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._announcer())._announce_(anAnnouncement);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "announce: anAnnouncement\x0a\x0a\x09^ self announcer announce: anAnnouncement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer"]
}),
$globals.App.klass);

$core.addMethod(
$core.method({
selector: "announcer",
protocol: 'accessing',
fn: function (){
var self=this;
function $Announcer(){return $globals.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@announcer"];
if(($receiver = $2) == null || $receiver.isNil){
self["@announcer"]=$recv($Announcer())._new();
$1=self["@announcer"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announcer",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x0a\x09^ announcer ifNil: [ announcer := Announcer new ]",
referencedClasses: ["Announcer"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.App.klass);

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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
shopVisitor=$recv($ShopVisitor())._localFindCid_($recv($recv(window)._localStorage())._getItem_("visitor"));
$2=$recv(shopVisitor)._isNil();
if($core.assert($2)){
$1=$recv($ShopVisitor())._new();
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
source: "getVisitor\x0a\x0a\x09| shopVisitor |\x0a\x0a\x09\x22The strategy is to have something to model a shop visitor\x0a\x09so the controllers can use it and customize somewhow her / his visiting experience.\x0a\x09If is not a first timer we will have it stored locally at 'me''\x0a\x09and if not, we fallback to a default new model\x22\x0a\x09shopVisitor := ShopVisitor localFindCid: (window localStorage getItem: 'visitor').\x0a\x09\x0a\x09^ shopVisitor isNil\x0a\x09\x09ifTrue: [ ShopVisitor new ]\x0a\x09\x09ifFalse: [ shopVisitor ]",
referencedClasses: ["ShopVisitor"],
//>>excludeEnd("ide");
messageSends: ["localFindCid:", "getItem:", "localStorage", "ifTrue:ifFalse:", "isNil", "new"]
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
self._setupFormatters();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self setupRouter.\x0a\x09self setupFormatters",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "setupRouter", "setupFormatters"]
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
selector: "on:do:",
protocol: 'actions',
fn: function (anAnnouncement,aReactionBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._announcer())._on_do_(anAnnouncement,aReactionBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:do:",{anAnnouncement:anAnnouncement,aReactionBlock:aReactionBlock},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement", "aReactionBlock"],
source: "on: anAnnouncement do: aReactionBlock\x0a\x0a\x09^ self announcer on: anAnnouncement do: aReactionBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["on:do:", "announcer"]
}),
$globals.App.klass);

$core.addMethod(
$core.method({
selector: "saveVisitor",
protocol: 'actions',
fn: function (){
var self=this;
function $App(){return $globals.App||(typeof App=="undefined"?nil:App)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
$1=$recv(window)._localStorage();
$4=$recv($App())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._visitor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visitor"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._cid();
$recv($1)._setItem_put_("visitor",$2);
$recv($recv($recv($App())._session())._visitor())._localSave();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"saveVisitor",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "saveVisitor\x0a\x0a\x09\x22Saves the visitor in the localStorage and the backend\x22\x0a\x09window localStorage setItem: 'visitor' put: App session visitor cid.\x0a\x09App session visitor localSave",
referencedClasses: ["App"],
//>>excludeEnd("ide");
messageSends: ["setItem:put:", "localStorage", "cid", "visitor", "session", "localSave"]
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
selector: "setupFormatters",
protocol: 'actions',
fn: function (){
var self=this;
function $RivetsJS(){return $globals.RivetsJS||(typeof RivetsJS=="undefined"?nil:RivetsJS)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$recv($RivetsJS())._addFormatter_at_((function(object){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(($receiver = object) == null || $receiver.isNil){
return (0);
} else {
return $recv(object)._asNumber();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({object:object},$ctx1,1)});
//>>excludeEnd("ctx");
}),"asNumber");
$1=$recv($RivetsJS())._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupFormatters",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupFormatters\x0a\x0a\x09RivetsJS  \x0a\x09\x09addFormatter: [ :object | \x0a\x09\x09\x09object ifNil: [ 0 ] ifNotNil: [ object asNumber ] ] \x0a\x09\x09at: #asNumber;\x0a\x09\x09yourself",
referencedClasses: ["RivetsJS"],
//>>excludeEnd("ide");
messageSends: ["addFormatter:at:", "ifNil:ifNotNil:", "asNumber", "yourself"]
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
self._saveVisitor();
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
source: "start\x0a\x09\x22Starts the App app\x22\x0a\x0a\x09Flow app: self; start.\x0a\x09window at: #app put: self.\x0a\x09\x0a\x09session := self getSession.\x0a\x09self saveVisitor.\x0a\x0a\x09self main show done: [ Router processHash ].",
referencedClasses: ["Flow", "Router"],
//>>excludeEnd("ide");
messageSends: ["app:", "start", "at:put:", "getSession", "saveVisitor", "done:", "show", "main", "processHash"]
}),
$globals.App.klass);

$core.addMethod(
$core.method({
selector: "unsubscribe:",
protocol: 'actions',
fn: function (aReceiver){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._announcer())._unsubscribe_(aReceiver);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unsubscribe:",{aReceiver:aReceiver},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aReceiver"],
source: "unsubscribe: aReceiver\x0a\x0a\x09^ self announcer unsubscribe: aReceiver",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unsubscribe:", "announcer"]
}),
$globals.App.klass);


$core.addClass('AppAnnouncements', $globals.Object, ['subject'], 'App');
$core.addMethod(
$core.method({
selector: "subject",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@subject"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "subject\x0a\x0a\x09^ subject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AppAnnouncements);

$core.addMethod(
$core.method({
selector: "subject:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@subject"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "subject: anObject\x0a\x0a\x09subject := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AppAnnouncements);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._subject_(anObject);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},$globals.AppAnnouncements.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "on: anObject\x0a\x0a\x09^ self new\x0a\x09\x09subject: anObject;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subject:", "new", "yourself"]
}),
$globals.AppAnnouncements.klass);


$core.addClass('AddToCart', $globals.AppAnnouncements, [], 'App');


$core.addClass('AddToWishlist', $globals.AppAnnouncements, [], 'App');


$core.addClass('RemoveFromCart', $globals.AppAnnouncements, [], 'App');


$core.addClass('RemoveFromWishlist', $globals.AppAnnouncements, [], 'App');


$core.addClass('Cart', $globals.Model, [], 'App');
$core.addMethod(
$core.method({
selector: "addProduct:",
protocol: 'actions',
fn: function (aProduct){
var self=this;
var ordered;
function $OrderedProduct(){return $globals.OrderedProduct||(typeof OrderedProduct=="undefined"?nil:OrderedProduct)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._orderedProducts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["orderedProducts"]=1;
//>>excludeEnd("ctx");
ordered=$recv($1)._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._product()).__eq(aProduct);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._orderedProducts())._add_($recv($OrderedProduct())._on_(aProduct));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(ordered)._addOne();
self._triggerEvent_with_("added:",ordered);
self._updateTotal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addProduct:",{aProduct:aProduct,ordered:ordered},$globals.Cart)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProduct"],
source: "addProduct: aProduct\x0a\x09\x22Adds aProduct to the cart.\x0a\x09Each product is added to the cart wrapped into an OrderedProduct\x0a\x09so it remembers price and quantity at the time of the act of adding.\x22\x0a\x09\x0a\x09| ordered |\x0a\x0a\x09ordered := self orderedProducts \x0a\x09\x09\x09\x09\x09\x09detect: [ :each | each product = aProduct ]\x0a\x09\x09\x09\x09\x09\x09ifNone: [ self orderedProducts add: (OrderedProduct on: aProduct) ].\x0a\x0a\x09ordered addOne.\x0a\x09\x0a\x09self triggerEvent: #added: with: ordered.\x0a\x09\x0a\x09self updateTotal.",
referencedClasses: ["OrderedProduct"],
//>>excludeEnd("ide");
messageSends: ["detect:ifNone:", "orderedProducts", "=", "product", "add:", "on:", "addOne", "triggerEvent:with:", "updateTotal"]
}),
$globals.Cart);

$core.addMethod(
$core.method({
selector: "orderedProducts",
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
$globals.Cart.superclass.fn.prototype._orderedProducts.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["orderedProducts"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
self._orderedProducts_($recv($OrderedCollection())._new());
} else {
$1;
};
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Cart.superclass.fn.prototype._orderedProducts.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"orderedProducts",{},$globals.Cart)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "orderedProducts\x0a\x0a\x09super orderedProducts ifNil: [\x0a\x09\x09self orderedProducts: OrderedCollection new ].\x0a\x09\x09\x0a\x09^ super orderedProducts",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "orderedProducts", "orderedProducts:", "new"]
}),
$globals.Cart);

$core.addMethod(
$core.method({
selector: "removeOrderedProductWith:",
protocol: 'actions',
fn: function (aProduct){
var self=this;
var ordered;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self._orderedProducts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["orderedProducts"]=1;
//>>excludeEnd("ctx");
ordered=$recv($1)._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._product()).__eq(aProduct);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
return nil;

}));
$2=ordered;
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
$recv(self._orderedProducts())._remove_ifAbsent_(ordered,(function(){
return nil;

}));
};
self._updateTotal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeOrderedProductWith:",{aProduct:aProduct,ordered:ordered},$globals.Cart)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProduct"],
source: "removeOrderedProductWith: aProduct\x0a\x09\x22Removes aProduct from the cart.\x0a\x09Each product is removed from the cart subtracting 1 unit of the OrderedProduct wrapper.\x0a\x09It removes that wrapper if quantity gets to zero.\x22\x0a\x09\x0a\x09| ordered |\x0a\x0a\x09ordered := self orderedProducts \x0a\x09\x09\x09\x09\x09\x09detect: [ :each | each product = aProduct ]\x0a\x09\x09\x09\x09\x09\x09ifNone: [ nil ].\x0a\x0a\x09ordered ifNotNil: [ self orderedProducts remove: ordered ifAbsent: [ nil ] ].\x0a\x09\x0a\x09self updateTotal",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:ifNone:", "orderedProducts", "=", "product", "ifNotNil:", "remove:ifAbsent:", "updateTotal"]
}),
$globals.Cart);

$core.addMethod(
$core.method({
selector: "removeProduct:",
protocol: 'actions',
fn: function (aProduct){
var self=this;
var ordered;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=self._orderedProducts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["orderedProducts"]=1;
//>>excludeEnd("ctx");
ordered=$recv($1)._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._product()).__eq(aProduct);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
return nil;

}));
$2=ordered;
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
$recv(ordered)._removeOne();
$3=$recv($recv(ordered)._quantity())._isZero();
if($core.assert($3)){
$recv(self._orderedProducts())._remove_ifNone_(ordered,(function(){
return nil;

}));
};
};
self._triggerEvent_with_("removed:",aProduct);
self._updateTotal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeProduct:",{aProduct:aProduct,ordered:ordered},$globals.Cart)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProduct"],
source: "removeProduct: aProduct\x0a\x09\x22Removes aProduct from the cart.\x0a\x09Each product is removed from the cart subtracting 1 unit of the OrderedProduct wrapper.\x0a\x09It removes that wrapper if quantity gets to zero.\x22\x0a\x09\x0a\x09| ordered |\x0a\x0a\x09ordered := self orderedProducts \x0a\x09\x09\x09\x09\x09\x09detect: [ :each | each product = aProduct ]\x0a\x09\x09\x09\x09\x09\x09ifNone: [ nil ].\x0a\x0a\x09ordered ifNotNil: [\x0a\x09\x09ordered removeOne.\x0a\x09\x09ordered quantity isZero ifTrue: [ self orderedProducts remove: ordered ifNone: [ nil ] ]].\x0a\x0a \x09self triggerEvent: #removed: with: aProduct. \x0a\x09\x0a\x09self updateTotal",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:ifNone:", "orderedProducts", "=", "product", "ifNotNil:", "removeOne", "ifTrue:", "isZero", "quantity", "remove:ifNone:", "triggerEvent:with:", "updateTotal"]
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
self._total_($recv(self._orderedProducts())._inject_into_((0),(function(sum,e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(sum).__plus($recv(e)._total());
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
source: "updateTotal\x0a\x0a\x09self total: (self orderedProducts inject: 0 into: [ :sum :e | sum + e total ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["total:", "inject:into:", "orderedProducts", "+", "total"]
}),
$globals.Cart);



$core.addClass('CartController', $globals.BindingController, [], 'App');
$core.addMethod(
$core.method({
selector: "newProductInCartControllerFor:",
protocol: 'actions',
fn: function (anOrderedProduct){
var self=this;
function $OrderedProductController(){return $globals.OrderedProductController||(typeof OrderedProductController=="undefined"?nil:OrderedProductController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($OrderedProductController())._on_in_appendingTo_(anOrderedProduct,self,"#ordered-products-wrapper"._asJQuery());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newProductInCartControllerFor:",{anOrderedProduct:anOrderedProduct},$globals.CartController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anOrderedProduct"],
source: "newProductInCartControllerFor: anOrderedProduct\x0a\x0a\x09^ OrderedProductController\x0a\x09\x09on: anOrderedProduct\x09\x09\x09\x09\x0a\x09\x09in: self\x0a\x09\x09appendingTo: '#ordered-products-wrapper' asJQuery",
referencedClasses: ["OrderedProductController"],
//>>excludeEnd("ide");
messageSends: ["on:in:appendingTo:", "asJQuery"]
}),
$globals.CartController);

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
$recv($recv($recv($recv($App())._session())._visitor())._cart())._when_do_("removedOne:",(function(evt,product){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onRemovedOne_(product);
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
source: "observeEvents\x0a\x0a\x09super observeEvents.\x0a\x09\x0a\x09self when: #onAfterModel do: [ self model updateTotal ].\x0a\x09\x0a\x09App session visitor cart\x0a\x09\x09when: #removedOne: \x0a\x09\x09do:[ :evt :product | self onRemovedOne: product ].",
referencedClasses: ["App"],
//>>excludeEnd("ide");
messageSends: ["observeEvents", "when:do:", "updateTotal", "model", "cart", "visitor", "session", "onRemovedOne:"]
}),
$globals.CartController);

$core.addMethod(
$core.method({
selector: "orderedProducts",
protocol: 'accessing',
fn: function (){
var self=this;
function $ListController(){return $globals.ListController||(typeof ListController=="undefined"?nil:ListController)}
function $ListModel(){return $globals.ListModel||(typeof ListModel=="undefined"?nil:ListModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$1=self._ifAbsentAt_put_("orderedProducts",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($ListController())._for_on_appendingTo_($recv($ListModel())._on_($recv(self["@model"])._orderedProducts()),self,"#ordered-products-wrapper"._asJQuery());
$recv($2)._newItemControllerBlock_((function(m){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._newProductInCartControllerFor_(m);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({m:m},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$3=$recv($2)._yourself();
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"orderedProducts",{},$globals.CartController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "orderedProducts\x0a\x0a\x09^ self ifAbsentAt: #orderedProducts put: [\x0a\x09\x09\x09(ListController \x0a\x09\x09\x09\x09for: (ListModel on: model orderedProducts)\x0a\x09\x09\x09\x09on: self \x0a\x09\x09\x09\x09appendingTo: '#ordered-products-wrapper' asJQuery)\x0a\x09\x09\x09\x09\x09newItemControllerBlock: [ :m | self newProductInCartControllerFor: m ];\x0a\x09\x09\x09\x09\x09yourself ]",
referencedClasses: ["ListController", "ListModel"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "newItemControllerBlock:", "for:on:appendingTo:", "on:", "orderedProducts", "asJQuery", "newProductInCartControllerFor:", "yourself"]
}),
$globals.CartController);

$core.addMethod(
$core.method({
selector: "show",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CartController.superclass.fn.prototype._show.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show"]=1;
//>>excludeEnd("ctx");
$recv($1)._done_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._orderedProducts())._show();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show",{},$globals.CartController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "show\x0a\x0a\x09super show done: [ self orderedProducts show ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["done:", "show", "orderedProducts"]
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
$globals.Catalog.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._update();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Catalog)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self update",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "update"]
}),
$globals.Catalog);

$core.addMethod(
$core.method({
selector: "update",
protocol: 'actions',
fn: function (){
var self=this;
function $App(){return $globals.App||(typeof App=="undefined"?nil:App)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv($App())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._visitor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visitor"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._cartSize();
self._cartSize_($1);
self._wishlistSize_($recv($recv($recv($App())._session())._visitor())._wishlistSize());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.Catalog)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x0a\x09self cartSize: App session visitor cartSize.\x0a\x09self wishlistSize: App session visitor wishlistSize.",
referencedClasses: ["App"],
//>>excludeEnd("ide");
messageSends: ["cartSize:", "cartSize", "visitor", "session", "wishlistSize:", "wishlistSize"]
}),
$globals.Catalog);



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

$core.addMethod(
$core.method({
selector: "update",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@model"])._update();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.CatalogController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x0a\x09model update",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["update"]
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
selector: "cart",
protocol: 'accessing',
fn: function (){
var self=this;
function $CartController(){return $globals.CartController||(typeof CartController=="undefined"?nil:CartController)}
function $App(){return $globals.App||(typeof App=="undefined"?nil:App)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._ifAbsentAt_put_("cart",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($CartController())._on_in_appendingTo_($recv($recv($recv($App())._session())._visitor())._cart(),self,"#cart-wrapper"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cart",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cart\x0a\x0a\x09^ self ifAbsentAt: #cart put: [\x0a\x09\x09\x09CartController \x0a\x09\x09\x09\x09on: App session visitor cart\x0a\x09\x09\x09\x09in: self \x0a\x09\x09\x09\x09appendingTo: '#cart-wrapper' asJQuery ]",
referencedClasses: ["CartController", "App"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "on:in:appendingTo:", "cart", "visitor", "session", "asJQuery"]
}),
$globals.MainController);

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
selector: "observeEvents",
protocol: 'actions',
fn: function (){
var self=this;
function $App(){return $globals.App||(typeof App=="undefined"?nil:App)}
function $AddToCart(){return $globals.AddToCart||(typeof AddToCart=="undefined"?nil:AddToCart)}
function $AddToWishlist(){return $globals.AddToWishlist||(typeof AddToWishlist=="undefined"?nil:AddToWishlist)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.MainController.superclass.fn.prototype._observeEvents.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($App())._on_do_($AddToCart(),(function(ann){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(ann)._subject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["subject"]=1;
//>>excludeEnd("ctx");
return self._onAddedToCart_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
$recv($App())._on_do_($AddToWishlist(),(function(ann){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onAddedToWishlist_($recv(ann)._subject());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeEvents",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeEvents\x0a\x0a\x09super observeEvents.\x0a\x09\x0a\x09App on: AddToCart do: [ :ann | self onAddedToCart: ann subject ].\x0a\x09App on: AddToWishlist do: [ :ann | self onAddedToWishlist: ann subject ].",
referencedClasses: ["App", "AddToCart", "AddToWishlist"],
//>>excludeEnd("ide");
messageSends: ["observeEvents", "on:do:", "onAddedToCart:", "subject", "onAddedToWishlist:"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "onAddedToCart:",
protocol: 'reactions',
fn: function (aProduct){
var self=this;
function $App(){return $globals.App||(typeof App=="undefined"?nil:App)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$5,$4,$3;
$2=$recv($App())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._visitor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visitor"]=1;
//>>excludeEnd("ctx");
$recv($1)._localSave();
$5=$recv($App())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._visitor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visitor"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._cart();
$recv($3)._addProduct_(aProduct);
$recv($recv($recv($App())._session())._visitor())._updateCartSize();
$recv($App())._saveVisitor();
$recv(self._catalog())._update();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onAddedToCart:",{aProduct:aProduct},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProduct"],
source: "onAddedToCart: aProduct\x0a\x0a\x09App session visitor localSave.\x0a\x09\x0a\x09App session visitor cart addProduct: aProduct.\x0a\x09App session visitor updateCartSize.\x0a\x09App saveVisitor.\x0a\x0a\x09self catalog update",
referencedClasses: ["App"],
//>>excludeEnd("ide");
messageSends: ["localSave", "visitor", "session", "addProduct:", "cart", "updateCartSize", "saveVisitor", "update", "catalog"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "onAddedToWishlist:",
protocol: 'reactions',
fn: function (aProduct){
var self=this;
function $App(){return $globals.App||(typeof App=="undefined"?nil:App)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$5,$4,$3;
$2=$recv($App())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._visitor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visitor"]=1;
//>>excludeEnd("ctx");
$recv($1)._localSave();
$5=$recv($App())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._visitor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visitor"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._wishlist();
$recv($3)._addProduct_(aProduct);
$recv($recv($recv($App())._session())._visitor())._updateWishlistSize();
$recv($App())._saveVisitor();
$recv(self._catalog())._update();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onAddedToWishlist:",{aProduct:aProduct},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProduct"],
source: "onAddedToWishlist: aProduct\x0a\x0a\x09App session visitor localSave.\x0a\x09\x0a\x09App session visitor wishlist addProduct: aProduct.\x0a\x09App session visitor updateWishlistSize.\x0a\x09App saveVisitor.\x0a\x0a\x09self catalog update",
referencedClasses: ["App"],
//>>excludeEnd("ide");
messageSends: ["localSave", "visitor", "session", "addProduct:", "wishlist", "updateWishlistSize", "saveVisitor", "update", "catalog"]
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
selector: "showCart",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._hideAll();
$recv(self._cart())._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showCart",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showCart\x0a\x09\x0a\x09self hideAll.\x0a\x09self cart show",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hideAll", "show", "cart"]
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
self._hideAll();
$recv(self._catalog())._show();
self._showFooter();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showCatalog",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showCatalog\x0a\x09\x0a\x09self hideAll.\x09\x0a\x09self catalog show.\x0a\x09self showFooter",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hideAll", "show", "catalog", "showFooter"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "showFooter",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._footer())._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showFooter",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showFooter\x0a\x09\x0a\x09self footer show",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["show", "footer"]
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
$recv(self._model())._updateWishlistSize();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x0a\x09self model updateCartSize.\x0a\x09self model updateWishlistSize.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updateCartSize", "model", "updateWishlistSize"]
}),
$globals.MainController);



$core.addClass('OrderedProduct', $globals.Model, [], 'App');
$core.addMethod(
$core.method({
selector: "addOne",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._quantity_($recv(self._quantity()).__plus((1)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addOne",{},$globals.OrderedProduct)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addOne\x0a\x0a\x09self quantity: self quantity + 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["quantity:", "+", "quantity"]
}),
$globals.OrderedProduct);

$core.addMethod(
$core.method({
selector: "price",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.OrderedProduct.superclass.fn.prototype._price.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["price"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
self._price_((0));
} else {
$1;
};
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.OrderedProduct.superclass.fn.prototype._price.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"price",{},$globals.OrderedProduct)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "price\x0a\x0a\x09super price ifNil: [\x0a\x09\x09self price: 0 ].\x0a\x09\x09\x0a\x09^ super price",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "price", "price:"]
}),
$globals.OrderedProduct);

$core.addMethod(
$core.method({
selector: "quantity",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.OrderedProduct.superclass.fn.prototype._quantity.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["quantity"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
self._quantity_((0));
} else {
$1;
};
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.OrderedProduct.superclass.fn.prototype._quantity.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"quantity",{},$globals.OrderedProduct)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "quantity\x0a\x0a\x09super quantity ifNil: [\x0a\x09\x09self quantity: 0 ].\x0a\x09\x09\x0a\x09^ super quantity",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "quantity", "quantity:"]
}),
$globals.OrderedProduct);

$core.addMethod(
$core.method({
selector: "removeOne",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._quantity();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["quantity"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__gt((0));
if($core.assert($1)){
self._quantity_($recv(self._quantity()).__minus((1)));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeOne",{},$globals.OrderedProduct)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeOne\x0a\x0a\x09self quantity > 0 ifTrue: [\x0a\x09\x09self quantity: self quantity - 1 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", ">", "quantity", "quantity:", "-"]
}),
$globals.OrderedProduct);

$core.addMethod(
$core.method({
selector: "total",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._quantity()).__star(self._price());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"total",{},$globals.OrderedProduct)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "total\x0a\x0a\x09^ self quantity * self price",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["*", "quantity", "price"]
}),
$globals.OrderedProduct);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'actions',
fn: function (aProduct){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._product_(aProduct);
$recv($2)._quantity_((0));
$recv($2)._price_($recv(aProduct)._price());
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aProduct:aProduct},$globals.OrderedProduct.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProduct"],
source: "on: aProduct\x0a\x0a\x09^ self new\x0a\x09\x09product: aProduct;\x0a\x09\x09quantity: 0;\x0a\x09\x09price: aProduct price;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["product:", "new", "quantity:", "price:", "price", "yourself"]
}),
$globals.OrderedProduct.klass);


$core.addClass('OrderedProductController', $globals.BindingController, [], 'App');
$core.addMethod(
$core.method({
selector: "addOne",
protocol: 'actions',
fn: function (){
var self=this;
function $App(){return $globals.App||(typeof App=="undefined"?nil:App)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv($App())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._visitor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visitor"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._cart();
$recv($1)._addProduct_(self["@model"]);
$recv($App())._saveVisitor();
$recv($recv($recv($App())._session())._visitor())._updateCartSize();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addOne",{},$globals.OrderedProductController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addOne\x0a\x0a\x09App session visitor cart addProduct: model.\x0a\x09App saveVisitor.\x0a\x09App session visitor updateCartSize",
referencedClasses: ["App"],
//>>excludeEnd("ide");
messageSends: ["addProduct:", "cart", "visitor", "session", "saveVisitor", "updateCartSize"]
}),
$globals.OrderedProductController);

$core.addMethod(
$core.method({
selector: "removeOne",
protocol: 'actions',
fn: function (){
var self=this;
function $App(){return $globals.App||(typeof App=="undefined"?nil:App)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv($App())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._visitor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visitor"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._cart();
$recv($1)._removeProduct_(self["@model"]);
$recv($App())._saveVisitor();
$recv($recv($recv($App())._session())._visitor())._updateCartSize();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeOne",{},$globals.OrderedProductController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeOne\x0a\x0a\x09App session visitor cart removeProduct: model.\x0a\x09App saveVisitor.\x0a\x09App session visitor updateCartSize",
referencedClasses: ["App"],
//>>excludeEnd("ide");
messageSends: ["removeProduct:", "cart", "visitor", "session", "saveVisitor", "updateCartSize"]
}),
$globals.OrderedProductController);

$core.addMethod(
$core.method({
selector: "removeOrderedProduct",
protocol: 'actions',
fn: function (){
var self=this;
function $App(){return $globals.App||(typeof App=="undefined"?nil:App)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($recv($recv($App())._session())._visitor())._cart())._removeOrderedProductWith_(self["@model"]);
$recv($App())._saveVisitor();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeOrderedProduct",{},$globals.OrderedProductController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeOrderedProduct\x0a\x0a\x09App session visitor cart removeOrderedProductWith: model.\x0a\x09App saveVisitor",
referencedClasses: ["App"],
//>>excludeEnd("ide");
messageSends: ["removeOrderedProductWith:", "cart", "visitor", "session", "saveVisitor"]
}),
$globals.OrderedProductController);



$core.addClass('Product', $globals.Model, [], 'App');
$core.addMethod(
$core.method({
selector: "updateImageUrl",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._imageUrl_("img/products/".__comma(self._image()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateImageUrl",{},$globals.Product)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateImageUrl\x0a\x0a\x09self imageUrl: 'img/products/', self image",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["imageUrl:", ",", "image"]
}),
$globals.Product);



$core.addClass('ProductController', $globals.BindingController, [], 'App');


$core.addClass('ProductInWishListController', $globals.BindingController, [], 'App');
$core.addMethod(
$core.method({
selector: "removeFromCart",
protocol: 'actions',
fn: function (){
var self=this;
function $App(){return $globals.App||(typeof App=="undefined"?nil:App)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$5,$4,$3,$6,$7,$8;
$2=$recv($App())._session();
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
$5=$recv($App())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._shopVisitor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["shopVisitor"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._wishlist();
$recv($3)._removeProduct_(self["@model"]);
$6=$recv($3)._localSave();
$recv($recv($recv($App())._session())._shopVisitor())._updateWishlistSize();
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
source: "removeFromCart\x0a\x0a\x09App session shopVisitor localSave.\x0a\x09model localSave.\x0a\x09\x0a\x09App session shopVisitor wishlist removeProduct: model; localSave.\x0a\x09App session shopVisitor updateWishlistSize.\x0a\x09\x0a\x09'#alertsRoot' asJQuery html: '<div class=\x22alert alert-warning\x22 role=\x22alert\x22>We''ve removed one ',model description,' from your wish list</div>'.\x0a\x0a\x09['#alertsRoot' asJQuery empty ] valueWithTimeout: 2000.",
referencedClasses: ["App"],
//>>excludeEnd("ide");
messageSends: ["localSave", "shopVisitor", "session", "removeProduct:", "wishlist", "updateWishlistSize", "html:", "asJQuery", ",", "description", "valueWithTimeout:", "empty"]
}),
$globals.ProductInWishListController);



$core.addClass('ProductThumbnailController', $globals.BindingController, [], 'App');
$core.addMethod(
$core.method({
selector: "addToCart",
protocol: 'actions',
fn: function (){
var self=this;
function $App(){return $globals.App||(typeof App=="undefined"?nil:App)}
function $AddToCart(){return $globals.AddToCart||(typeof AddToCart=="undefined"?nil:AddToCart)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv($App())._announce_($recv($AddToCart())._on_(self["@model"]));
$1="#alertsRoot"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$2=$recv("<div class=\x22alert alert-success\x22 role=\x22alert\x22>Done. We've added one ".__comma($recv(self["@model"])._description())).__comma(" to your cart!</div>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._html_($2);
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
source: "addToCart\x0a\x0a\x09App announce: (AddToCart on: model).\x0a\x09\x0a\x09'#alertsRoot' asJQuery html: '<div class=\x22alert alert-success\x22 role=\x22alert\x22>Done. We''ve added one ',model description,' to your cart!</div>'.\x0a\x09['#alertsRoot' asJQuery empty ] valueWithTimeout: 2000.",
referencedClasses: ["App", "AddToCart"],
//>>excludeEnd("ide");
messageSends: ["announce:", "on:", "html:", "asJQuery", ",", "description", "valueWithTimeout:", "empty"]
}),
$globals.ProductThumbnailController);

$core.addMethod(
$core.method({
selector: "addToWishlist",
protocol: 'actions',
fn: function (){
var self=this;
function $App(){return $globals.App||(typeof App=="undefined"?nil:App)}
function $AddToWishlist(){return $globals.AddToWishlist||(typeof AddToWishlist=="undefined"?nil:AddToWishlist)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv($App())._announce_($recv($AddToWishlist())._on_(self["@model"]));
$1="#alertsRoot"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$2=$recv("<div class=\x22alert alert-info\x22 role=\x22alert\x22>We've added one ".__comma($recv(self["@model"])._description())).__comma(" to your wishlist. It got sooo whishable!</div>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._html_($2);
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
}, function($ctx1) {$ctx1.fill(self,"addToWishlist",{},$globals.ProductThumbnailController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addToWishlist\x0a\x0a\x09App announce: (AddToWishlist on: model).\x0a\x09\x0a\x09'#alertsRoot' asJQuery html: '<div class=\x22alert alert-info\x22 role=\x22alert\x22>We''ve added one ',model description,' to your wishlist. It got sooo whishable!</div>'.\x0a\x0a\x09[ '#alertsRoot' asJQuery empty ] valueWithTimeout: 2000.",
referencedClasses: ["App", "AddToWishlist"],
//>>excludeEnd("ide");
messageSends: ["announce:", "on:", "html:", "asJQuery", ",", "description", "valueWithTimeout:", "empty"]
}),
$globals.ProductThumbnailController);

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
$globals.ProductThumbnailController.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._when_do_("onAfterModel",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._model())._updateImageUrl();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ProductThumbnailController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self when: #onAfterModel do: [ self model updateImageUrl ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "when:do:", "updateImageUrl", "model"]
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
function $Cart(){return $globals.Cart||(typeof Cart=="undefined"?nil:Cart)}
function $Wishlist(){return $globals.Wishlist||(typeof Wishlist=="undefined"?nil:Wishlist)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ShopVisitor.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._searchText_("");
$1=$recv($Cart())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self._cart_($1);
self._wishlist_($recv($Wishlist())._new());
self._update();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ShopVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self searchText: ''.\x0a\x09self cart: Cart new.\x0a\x09self wishlist: Wishlist new.\x0a\x09self update",
referencedClasses: ["Cart", "Wishlist"],
//>>excludeEnd("ide");
messageSends: ["initialize", "searchText:", "cart:", "new", "wishlist:", "update"]
}),
$globals.ShopVisitor);

$core.addMethod(
$core.method({
selector: "update",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._updateCartSize();
self._updateWishlist();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.ShopVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x0a\x09self updateCartSize.\x0a\x09self updateWishlist.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updateCartSize", "updateWishlist"]
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
self._cartSize_($recv($recv(self._cart())._orderedProducts())._inject_into_((0),(function(sum,e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(sum).__plus($recv(e)._quantity());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({sum:sum,e:e},$ctx1,1)});
//>>excludeEnd("ctx");
})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateCartSize",{},$globals.ShopVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateCartSize\x0a\x0a\x09self cartSize: (self cart orderedProducts inject: 0 into: [ :sum :e | sum + e quantity ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cartSize:", "inject:into:", "orderedProducts", "cart", "+", "quantity"]
}),
$globals.ShopVisitor);

$core.addMethod(
$core.method({
selector: "updateWishlistSize",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._wishlistSize_($recv($recv(self._wishlist())._wishedProducts())._inject_into_((0),(function(sum,e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(sum).__plus($recv(e)._quantity());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({sum:sum,e:e},$ctx1,1)});
//>>excludeEnd("ctx");
})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateWishlistSize",{},$globals.ShopVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateWishlistSize\x0a\x0a\x09self wishlistSize: (self wishlist wishedProducts inject: 0 into: [ :sum :e | sum + e quantity ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["wishlistSize:", "inject:into:", "wishedProducts", "wishlist", "+", "quantity"]
}),
$globals.ShopVisitor);



$core.addClass('Wishlist', $globals.Model, [], 'App');
$core.addMethod(
$core.method({
selector: "addProduct:",
protocol: 'actions',
fn: function (aProduct){
var self=this;
var ordered;
function $OrderedProduct(){return $globals.OrderedProduct||(typeof OrderedProduct=="undefined"?nil:OrderedProduct)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._wishedProducts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["wishedProducts"]=1;
//>>excludeEnd("ctx");
ordered=$recv($1)._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._product()).__eq(aProduct);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._wishedProducts())._add_($recv($OrderedProduct())._on_(aProduct));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(ordered)._addOne();
self._triggerEvent_with_("added:",ordered);
self._updateTotal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addProduct:",{aProduct:aProduct,ordered:ordered},$globals.Wishlist)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProduct"],
source: "addProduct: aProduct\x0a\x09\x22Adds aProduct to the cart.\x0a\x09Each product is added to the cart wrapped into an OrderedProduct\x0a\x09so it remembers price and quantity at the time of the act of adding.\x22\x0a\x09\x0a\x09| ordered |\x0a\x0a\x09ordered := self wishedProducts \x0a\x09\x09\x09\x09\x09\x09detect: [ :each | each product = aProduct ]\x0a\x09\x09\x09\x09\x09\x09ifNone: [ self wishedProducts add: (OrderedProduct on: aProduct) ].\x0a\x0a\x09ordered addOne.\x0a\x09\x0a\x09self triggerEvent: #added: with: ordered.\x0a\x09\x0a\x09self updateTotal.",
referencedClasses: ["OrderedProduct"],
//>>excludeEnd("ide");
messageSends: ["detect:ifNone:", "wishedProducts", "=", "product", "add:", "on:", "addOne", "triggerEvent:with:", "updateTotal"]
}),
$globals.Wishlist);

$core.addMethod(
$core.method({
selector: "removeProduct:",
protocol: 'actions',
fn: function (aProduct){
var self=this;
var ordered;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=self._wishedProducts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["wishedProducts"]=1;
//>>excludeEnd("ctx");
ordered=$recv($1)._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._product()).__eq(aProduct);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
return nil;

}));
$2=ordered;
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
$recv(ordered)._removeOne();
$3=$recv($recv(ordered)._quantity())._isZero();
if($core.assert($3)){
$recv(self._wishedProducts())._remove_ifNone_(ordered,(function(){
return nil;

}));
};
};
self._triggerEvent_with_("removed:",aProduct);
self._updateTotal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeProduct:",{aProduct:aProduct,ordered:ordered},$globals.Wishlist)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProduct"],
source: "removeProduct: aProduct\x0a\x09\x22Removes aProduct from the wishlist.\x0a\x09Each product is removed from the wishlist subtracting 1 unit of the OrderedProduct wrapper.\x0a\x09It removes that wrapper if quantity gets to zero.\x22\x0a\x09\x0a\x09| ordered |\x0a\x0a\x09ordered := self wishedProducts \x0a\x09\x09\x09\x09\x09\x09detect: [ :each | each product = aProduct ]\x0a\x09\x09\x09\x09\x09\x09ifNone: [ nil ].\x0a\x0a\x09ordered ifNotNil: [\x0a\x09\x09ordered removeOne.\x0a\x09\x09ordered quantity isZero ifTrue: [ self wishedProducts remove: ordered ifNone: [ nil ] ]].\x0a\x0a \x09self triggerEvent: #removed: with: aProduct. \x0a\x09\x0a\x09self updateTotal",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:ifNone:", "wishedProducts", "=", "product", "ifNotNil:", "removeOne", "ifTrue:", "isZero", "quantity", "remove:ifNone:", "triggerEvent:with:", "updateTotal"]
}),
$globals.Wishlist);

$core.addMethod(
$core.method({
selector: "updateTotal",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._total_($recv(self._wishedProducts())._inject_into_((0),(function(sum,e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(sum).__plus($recv(e)._total());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({sum:sum,e:e},$ctx1,1)});
//>>excludeEnd("ctx");
})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateTotal",{},$globals.Wishlist)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateTotal\x0a\x0a\x09self total: (self wishedProducts inject: 0 into: [ :sum :e | sum + e total ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["total:", "inject:into:", "wishedProducts", "+", "total"]
}),
$globals.Wishlist);

$core.addMethod(
$core.method({
selector: "wishedProducts",
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
$globals.Wishlist.superclass.fn.prototype._wishedProducts.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["wishedProducts"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
self._wishedProducts_($recv($OrderedCollection())._new());
} else {
$1;
};
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Wishlist.superclass.fn.prototype._wishedProducts.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"wishedProducts",{},$globals.Wishlist)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "wishedProducts\x0a\x0a\x09super wishedProducts ifNil:[\x0a\x09\x09self wishedProducts: OrderedCollection new ].\x0a\x09\x09\x0a\x09^ super wishedProducts",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "wishedProducts", "wishedProducts:", "new"]
}),
$globals.Wishlist);


$core.addMethod(
$core.method({
selector: "getBindableModel",
protocol: '*App',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@model"])._asJSON();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getBindableModel",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getBindableModel\x0a\x09\x22Returns the model in a way that is appropiate for binding (usable by rivets).\x0a\x09By default BindingController assumes you are using a plain javascript object as model\x0a\x09but subclasses might differ if they please to do so.\x22\x0a\x0a\x09\x22We are assuming here that you are working with aMapless as model so you\x0a\x09can use regular Amber objects as models in your application.\x0a\x09Mapless are implemented using a plain JavaScript object at its core so \x0a\x09you'll have a single source of truth for your models and enjoy the \x0a\x09two-way data binding an other RivetJS features simultaneously.\x22\x0a\x09^ model asJSON",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asJSON"]
}),
$globals.BindingController);

});
