"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[351],{80351:function(t,e,c){c.d(e,{diagram:function(){return N}});var a=c(51893),r=c(36783);c(89539),c(99824),c(68985);var n=function(){var t=function(t,e,c,a){for(c=c||{},a=t.length;a--;c[t[a]]=e);return c},e=[1,3],c=[1,6],a=[1,4],r=[1,5],n=[2,5],i=[1,12],o=[5,7,13,19,21,23,24,26,28,31,36,39,46],s=[7,13,19,21,23,24,26,28,31,36,39],l=[7,12,13,19,21,23,24,26,28,31,36,39],h=[7,13,46],m=[1,42],u=[1,41],y=[7,13,29,32,34,37,46],g=[1,55],p=[1,56],b=[1,57],d=[7,13,32,34,41,46],f={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,GG:5,document:6,EOF:7,":":8,DIR:9,options:10,body:11,OPT:12,NL:13,line:14,statement:15,commitStatement:16,mergeStatement:17,cherryPickStatement:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,section:24,branchStatement:25,CHECKOUT:26,ref:27,BRANCH:28,ORDER:29,NUM:30,CHERRY_PICK:31,COMMIT_ID:32,STR:33,COMMIT_TAG:34,EMPTYSTR:35,MERGE:36,COMMIT_TYPE:37,commitType:38,COMMIT:39,commit_arg:40,COMMIT_MSG:41,NORMAL:42,REVERSE:43,HIGHLIGHT:44,ID:45,";":46,$accept:0,$end:1},terminals_:{2:"error",5:"GG",7:"EOF",8:":",9:"DIR",12:"OPT",13:"NL",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"section",26:"CHECKOUT",28:"BRANCH",29:"ORDER",30:"NUM",31:"CHERRY_PICK",32:"COMMIT_ID",33:"STR",34:"COMMIT_TAG",35:"EMPTYSTR",36:"MERGE",37:"COMMIT_TYPE",39:"COMMIT",41:"COMMIT_MSG",42:"NORMAL",43:"REVERSE",44:"HIGHLIGHT",45:"ID",46:";"},productions_:[0,[3,2],[3,3],[3,4],[3,5],[6,0],[6,2],[10,2],[10,1],[11,0],[11,2],[14,2],[14,1],[15,1],[15,1],[15,1],[15,2],[15,2],[15,1],[15,1],[15,1],[15,2],[25,2],[25,4],[18,3],[18,5],[18,5],[18,5],[18,5],[17,2],[17,4],[17,4],[17,4],[17,6],[17,6],[17,6],[17,6],[17,6],[17,6],[17,8],[17,8],[17,8],[17,8],[17,8],[17,8],[16,2],[16,3],[16,3],[16,5],[16,5],[16,3],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,3],[16,5],[16,5],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[40,0],[40,1],[38,1],[38,1],[38,1],[27,1],[27,1],[4,1],[4,1],[4,1]],performAction:function(t,e,c,a,r,n,i){var o=n.length-1;switch(r){case 2:return n[o];case 3:return n[o-1];case 4:return a.setDirection(n[o-3]),n[o-1];case 6:a.setOptions(n[o-1]),this.$=n[o];break;case 7:n[o-1]+=n[o],this.$=n[o-1];break;case 9:this.$=[];break;case 10:n[o-1].push(n[o]),this.$=n[o-1];break;case 11:this.$=n[o-1];break;case 16:this.$=n[o].trim(),a.setAccTitle(this.$);break;case 17:case 18:this.$=n[o].trim(),a.setAccDescription(this.$);break;case 19:a.addSection(n[o].substr(8)),this.$=n[o].substr(8);break;case 21:a.checkout(n[o]);break;case 22:a.branch(n[o]);break;case 23:a.branch(n[o-2],n[o]);break;case 24:a.cherryPick(n[o],"",void 0);break;case 25:a.cherryPick(n[o-2],"",n[o]);break;case 26:case 28:a.cherryPick(n[o-2],"","");break;case 27:a.cherryPick(n[o],"",n[o-2]);break;case 29:a.merge(n[o],"","","");break;case 30:a.merge(n[o-2],n[o],"","");break;case 31:a.merge(n[o-2],"",n[o],"");break;case 32:a.merge(n[o-2],"","",n[o]);break;case 33:a.merge(n[o-4],n[o],"",n[o-2]);break;case 34:a.merge(n[o-4],"",n[o],n[o-2]);break;case 35:a.merge(n[o-4],"",n[o-2],n[o]);break;case 36:a.merge(n[o-4],n[o-2],n[o],"");break;case 37:a.merge(n[o-4],n[o-2],"",n[o]);break;case 38:a.merge(n[o-4],n[o],n[o-2],"");break;case 39:a.merge(n[o-6],n[o-4],n[o-2],n[o]);break;case 40:a.merge(n[o-6],n[o],n[o-4],n[o-2]);break;case 41:a.merge(n[o-6],n[o-4],n[o],n[o-2]);break;case 42:a.merge(n[o-6],n[o-2],n[o-4],n[o]);break;case 43:a.merge(n[o-6],n[o],n[o-2],n[o-4]);break;case 44:a.merge(n[o-6],n[o-2],n[o],n[o-4]);break;case 45:a.commit(n[o]);break;case 46:a.commit("","",a.commitType.NORMAL,n[o]);break;case 47:a.commit("","",n[o],"");break;case 48:a.commit("","",n[o],n[o-2]);break;case 49:a.commit("","",n[o-2],n[o]);break;case 50:a.commit("",n[o],a.commitType.NORMAL,"");break;case 51:a.commit("",n[o-2],a.commitType.NORMAL,n[o]);break;case 52:a.commit("",n[o],a.commitType.NORMAL,n[o-2]);break;case 53:a.commit("",n[o-2],n[o],"");break;case 54:a.commit("",n[o],n[o-2],"");break;case 55:a.commit("",n[o-4],n[o-2],n[o]);break;case 56:a.commit("",n[o-4],n[o],n[o-2]);break;case 57:a.commit("",n[o-2],n[o-4],n[o]);break;case 58:a.commit("",n[o],n[o-4],n[o-2]);break;case 59:a.commit("",n[o],n[o-2],n[o-4]);break;case 60:a.commit("",n[o-2],n[o],n[o-4]);break;case 61:a.commit(n[o],"",a.commitType.NORMAL,"");break;case 62:a.commit(n[o],"",a.commitType.NORMAL,n[o-2]);break;case 63:a.commit(n[o-2],"",a.commitType.NORMAL,n[o]);break;case 64:a.commit(n[o-2],"",n[o],"");break;case 65:a.commit(n[o],"",n[o-2],"");break;case 66:a.commit(n[o],n[o-2],a.commitType.NORMAL,"");break;case 67:a.commit(n[o-2],n[o],a.commitType.NORMAL,"");break;case 68:a.commit(n[o-4],"",n[o-2],n[o]);break;case 69:a.commit(n[o-4],"",n[o],n[o-2]);break;case 70:a.commit(n[o-2],"",n[o-4],n[o]);break;case 71:a.commit(n[o],"",n[o-4],n[o-2]);break;case 72:a.commit(n[o],"",n[o-2],n[o-4]);break;case 73:a.commit(n[o-2],"",n[o],n[o-4]);break;case 74:a.commit(n[o-4],n[o],n[o-2],"");break;case 75:a.commit(n[o-4],n[o-2],n[o],"");break;case 76:a.commit(n[o-2],n[o],n[o-4],"");break;case 77:a.commit(n[o],n[o-2],n[o-4],"");break;case 78:a.commit(n[o],n[o-4],n[o-2],"");break;case 79:a.commit(n[o-2],n[o-4],n[o],"");break;case 80:a.commit(n[o-4],n[o],a.commitType.NORMAL,n[o-2]);break;case 81:a.commit(n[o-4],n[o-2],a.commitType.NORMAL,n[o]);break;case 82:a.commit(n[o-2],n[o],a.commitType.NORMAL,n[o-4]);break;case 83:a.commit(n[o],n[o-2],a.commitType.NORMAL,n[o-4]);break;case 84:a.commit(n[o],n[o-4],a.commitType.NORMAL,n[o-2]);break;case 85:a.commit(n[o-2],n[o-4],a.commitType.NORMAL,n[o]);break;case 86:a.commit(n[o-6],n[o-4],n[o-2],n[o]);break;case 87:a.commit(n[o-6],n[o-4],n[o],n[o-2]);break;case 88:a.commit(n[o-6],n[o-2],n[o-4],n[o]);break;case 89:a.commit(n[o-6],n[o],n[o-4],n[o-2]);break;case 90:a.commit(n[o-6],n[o-2],n[o],n[o-4]);break;case 91:a.commit(n[o-6],n[o],n[o-2],n[o-4]);break;case 92:a.commit(n[o-4],n[o-6],n[o-2],n[o]);break;case 93:a.commit(n[o-4],n[o-6],n[o],n[o-2]);break;case 94:a.commit(n[o-2],n[o-6],n[o-4],n[o]);break;case 95:a.commit(n[o],n[o-6],n[o-4],n[o-2]);break;case 96:a.commit(n[o-2],n[o-6],n[o],n[o-4]);break;case 97:a.commit(n[o],n[o-6],n[o-2],n[o-4]);break;case 98:a.commit(n[o],n[o-4],n[o-2],n[o-6]);break;case 99:a.commit(n[o-2],n[o-4],n[o],n[o-6]);break;case 100:a.commit(n[o],n[o-2],n[o-4],n[o-6]);break;case 101:a.commit(n[o-2],n[o],n[o-4],n[o-6]);break;case 102:a.commit(n[o-4],n[o-2],n[o],n[o-6]);break;case 103:a.commit(n[o-4],n[o],n[o-2],n[o-6]);break;case 104:a.commit(n[o-2],n[o-4],n[o-6],n[o]);break;case 105:a.commit(n[o],n[o-4],n[o-6],n[o-2]);break;case 106:a.commit(n[o-2],n[o],n[o-6],n[o-4]);break;case 107:a.commit(n[o],n[o-2],n[o-6],n[o-4]);break;case 108:a.commit(n[o-4],n[o-2],n[o-6],n[o]);break;case 109:a.commit(n[o-4],n[o],n[o-6],n[o-2]);break;case 110:this.$="";break;case 111:this.$=n[o];break;case 112:this.$=a.commitType.NORMAL;break;case 113:this.$=a.commitType.REVERSE;break;case 114:this.$=a.commitType.HIGHLIGHT}},table:[{3:1,4:2,5:e,7:c,13:a,46:r},{1:[3]},{3:7,4:2,5:e,7:c,13:a,46:r},{6:8,7:n,8:[1,9],9:[1,10],10:11,13:i},t(o,[2,117]),t(o,[2,118]),t(o,[2,119]),{1:[2,1]},{7:[1,13]},{6:14,7:n,10:11,13:i},{8:[1,15]},t(s,[2,9],{11:16,12:[1,17]}),t(l,[2,8]),{1:[2,2]},{7:[1,18]},{6:19,7:n,10:11,13:i},{7:[2,6],13:[1,22],14:20,15:21,16:23,17:24,18:25,19:[1,26],21:[1,27],23:[1,28],24:[1,29],25:30,26:[1,31],28:[1,35],31:[1,34],36:[1,33],39:[1,32]},t(l,[2,7]),{1:[2,3]},{7:[1,36]},t(s,[2,10]),{4:37,7:c,13:a,46:r},t(s,[2,12]),t(h,[2,13]),t(h,[2,14]),t(h,[2,15]),{20:[1,38]},{22:[1,39]},t(h,[2,18]),t(h,[2,19]),t(h,[2,20]),{27:40,33:m,45:u},t(h,[2,110],{40:43,32:[1,46],33:[1,48],34:[1,44],37:[1,45],41:[1,47]}),{27:49,33:m,45:u},{32:[1,50],34:[1,51]},{27:52,33:m,45:u},{1:[2,4]},t(s,[2,11]),t(h,[2,16]),t(h,[2,17]),t(h,[2,21]),t(y,[2,115]),t(y,[2,116]),t(h,[2,45]),{33:[1,53]},{38:54,42:g,43:p,44:b},{33:[1,58]},{33:[1,59]},t(h,[2,111]),t(h,[2,29],{32:[1,60],34:[1,62],37:[1,61]}),{33:[1,63]},{33:[1,64],35:[1,65]},t(h,[2,22],{29:[1,66]}),t(h,[2,46],{32:[1,68],37:[1,67],41:[1,69]}),t(h,[2,47],{32:[1,71],34:[1,70],41:[1,72]}),t(d,[2,112]),t(d,[2,113]),t(d,[2,114]),t(h,[2,50],{34:[1,73],37:[1,74],41:[1,75]}),t(h,[2,61],{32:[1,78],34:[1,76],37:[1,77]}),{33:[1,79]},{38:80,42:g,43:p,44:b},{33:[1,81]},t(h,[2,24],{34:[1,82]}),{32:[1,83]},{32:[1,84]},{30:[1,85]},{38:86,42:g,43:p,44:b},{33:[1,87]},{33:[1,88]},{33:[1,89]},{33:[1,90]},{33:[1,91]},{33:[1,92]},{38:93,42:g,43:p,44:b},{33:[1,94]},{33:[1,95]},{38:96,42:g,43:p,44:b},{33:[1,97]},t(h,[2,30],{34:[1,99],37:[1,98]}),t(h,[2,31],{32:[1,101],34:[1,100]}),t(h,[2,32],{32:[1,102],37:[1,103]}),{33:[1,104],35:[1,105]},{33:[1,106]},{33:[1,107]},t(h,[2,23]),t(h,[2,48],{32:[1,108],41:[1,109]}),t(h,[2,52],{37:[1,110],41:[1,111]}),t(h,[2,62],{32:[1,113],37:[1,112]}),t(h,[2,49],{32:[1,114],41:[1,115]}),t(h,[2,54],{34:[1,116],41:[1,117]}),t(h,[2,65],{32:[1,119],34:[1,118]}),t(h,[2,51],{37:[1,120],41:[1,121]}),t(h,[2,53],{34:[1,122],41:[1,123]}),t(h,[2,66],{34:[1,125],37:[1,124]}),t(h,[2,63],{32:[1,127],37:[1,126]}),t(h,[2,64],{32:[1,129],34:[1,128]}),t(h,[2,67],{34:[1,131],37:[1,130]}),{38:132,42:g,43:p,44:b},{33:[1,133]},{33:[1,134]},{33:[1,135]},{33:[1,136]},{38:137,42:g,43:p,44:b},t(h,[2,25]),t(h,[2,26]),t(h,[2,27]),t(h,[2,28]),{33:[1,138]},{33:[1,139]},{38:140,42:g,43:p,44:b},{33:[1,141]},{38:142,42:g,43:p,44:b},{33:[1,143]},{33:[1,144]},{33:[1,145]},{33:[1,146]},{33:[1,147]},{33:[1,148]},{33:[1,149]},{38:150,42:g,43:p,44:b},{33:[1,151]},{33:[1,152]},{33:[1,153]},{38:154,42:g,43:p,44:b},{33:[1,155]},{38:156,42:g,43:p,44:b},{33:[1,157]},{33:[1,158]},{33:[1,159]},{38:160,42:g,43:p,44:b},{33:[1,161]},t(h,[2,36],{34:[1,162]}),t(h,[2,37],{37:[1,163]}),t(h,[2,35],{32:[1,164]}),t(h,[2,38],{34:[1,165]}),t(h,[2,33],{37:[1,166]}),t(h,[2,34],{32:[1,167]}),t(h,[2,59],{41:[1,168]}),t(h,[2,72],{32:[1,169]}),t(h,[2,60],{41:[1,170]}),t(h,[2,83],{37:[1,171]}),t(h,[2,73],{32:[1,172]}),t(h,[2,82],{37:[1,173]}),t(h,[2,58],{41:[1,174]}),t(h,[2,71],{32:[1,175]}),t(h,[2,57],{41:[1,176]}),t(h,[2,77],{34:[1,177]}),t(h,[2,70],{32:[1,178]}),t(h,[2,76],{34:[1,179]}),t(h,[2,56],{41:[1,180]}),t(h,[2,84],{37:[1,181]}),t(h,[2,55],{41:[1,182]}),t(h,[2,78],{34:[1,183]}),t(h,[2,79],{34:[1,184]}),t(h,[2,85],{37:[1,185]}),t(h,[2,69],{32:[1,186]}),t(h,[2,80],{37:[1,187]}),t(h,[2,68],{32:[1,188]}),t(h,[2,74],{34:[1,189]}),t(h,[2,75],{34:[1,190]}),t(h,[2,81],{37:[1,191]}),{33:[1,192]},{38:193,42:g,43:p,44:b},{33:[1,194]},{33:[1,195]},{38:196,42:g,43:p,44:b},{33:[1,197]},{33:[1,198]},{33:[1,199]},{33:[1,200]},{38:201,42:g,43:p,44:b},{33:[1,202]},{38:203,42:g,43:p,44:b},{33:[1,204]},{33:[1,205]},{33:[1,206]},{33:[1,207]},{33:[1,208]},{33:[1,209]},{33:[1,210]},{38:211,42:g,43:p,44:b},{33:[1,212]},{33:[1,213]},{33:[1,214]},{38:215,42:g,43:p,44:b},{33:[1,216]},{38:217,42:g,43:p,44:b},{33:[1,218]},{33:[1,219]},{33:[1,220]},{38:221,42:g,43:p,44:b},t(h,[2,39]),t(h,[2,41]),t(h,[2,40]),t(h,[2,42]),t(h,[2,44]),t(h,[2,43]),t(h,[2,100]),t(h,[2,101]),t(h,[2,98]),t(h,[2,99]),t(h,[2,103]),t(h,[2,102]),t(h,[2,107]),t(h,[2,106]),t(h,[2,105]),t(h,[2,104]),t(h,[2,109]),t(h,[2,108]),t(h,[2,97]),t(h,[2,96]),t(h,[2,95]),t(h,[2,94]),t(h,[2,92]),t(h,[2,93]),t(h,[2,91]),t(h,[2,90]),t(h,[2,89]),t(h,[2,88]),t(h,[2,86]),t(h,[2,87])],defaultActions:{7:[2,1],13:[2,2],18:[2,3],36:[2,4]},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var c=Error(t);throw c.hash=e,c}},parse:function(t){var e=this,c=[0],a=[],r=[null],n=[],i=this.table,o="",s=0,l=0,h=n.slice.call(arguments,1),m=Object.create(this.lexer),u={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(u.yy[y]=this.yy[y]);m.setInput(t,u.yy),u.yy.lexer=m,u.yy.parser=this,void 0===m.yylloc&&(m.yylloc={});var g=m.yylloc;n.push(g);var p=m.options&&m.options.ranges;"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var b,d,f,k,x,_,E,T,w={};;){if(d=c[c.length-1],this.defaultActions[d]?f=this.defaultActions[d]:(null==b&&(b=function(){var t;return"number"!=typeof(t=a.pop()||m.lex()||1)&&(t instanceof Array&&(t=(a=t).pop()),t=e.symbols_[t]||t),t}()),f=i[d]&&i[d][b]),void 0===f||!f.length||!f[0]){var L="";for(x in T=[],i[d])this.terminals_[x]&&x>2&&T.push("'"+this.terminals_[x]+"'");L=m.showPosition?"Parse error on line "+(s+1)+":\n"+m.showPosition()+"\nExpecting "+T.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(s+1)+": Unexpected "+(1==b?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(L,{text:m.match,token:this.terminals_[b]||b,line:m.yylineno,loc:g,expected:T})}if(f[0]instanceof Array&&f.length>1)throw Error("Parse Error: multiple actions possible at state: "+d+", token: "+b);switch(f[0]){case 1:c.push(b),r.push(m.yytext),n.push(m.yylloc),c.push(f[1]),b=null,l=m.yyleng,o=m.yytext,s=m.yylineno,g=m.yylloc;break;case 2:if(_=this.productions_[f[1]][1],w.$=r[r.length-_],w._$={first_line:n[n.length-(_||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(_||1)].first_column,last_column:n[n.length-1].last_column},p&&(w._$.range=[n[n.length-(_||1)].range[0],n[n.length-1].range[1]]),void 0!==(k=this.performAction.apply(w,[o,l,s,u.yy,f[1],r,n].concat(h))))return k;_&&(c=c.slice(0,-1*_*2),r=r.slice(0,-1*_),n=n.slice(0,-1*_)),c.push(this.productions_[f[1]][0]),r.push(w.$),n.push(w._$),E=i[c[c.length-2]][c[c.length-1]],c.push(E);break;case 3:return!0}}return!0}};function k(){this.yy={}}return f.lexer={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,c=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===a.length?this.yylloc.first_column:0)+a[a.length-c.length].length-c[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var c,a,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(a=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=a.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:a?a[a.length-1].length-a[a.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],c=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack)for(var n in r)this[n]=r[n];return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,c,a,r=this._currentRules(),n=0;n<r.length;n++)if((c=this._input.match(this.rules[r[n]]))&&(!e||c[0].length>e[0].length)){if(e=c,a=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(c,r[n])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[a]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,c,a){switch(c){case 0:return this.begin("acc_title"),19;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),21;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:case 29:case 33:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 13;case 8:case 9:break;case 10:return 5;case 11:return 39;case 12:return 32;case 13:return 37;case 14:return 41;case 15:return 42;case 16:return 43;case 17:return 44;case 18:return 34;case 19:return 28;case 20:return 29;case 21:return 36;case 22:return 31;case 23:return 26;case 24:case 25:return 9;case 26:return 8;case 27:return"CARET";case 28:this.begin("options");break;case 30:return 12;case 31:return 35;case 32:this.begin("string");break;case 34:return 33;case 35:return 30;case 36:return 45;case 37:return 7}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:gitGraph\b)/i,/^(?:commit(?=\s|$))/i,/^(?:id:)/i,/^(?:type:)/i,/^(?:msg:)/i,/^(?:NORMAL\b)/i,/^(?:REVERSE\b)/i,/^(?:HIGHLIGHT\b)/i,/^(?:tag:)/i,/^(?:branch(?=\s|$))/i,/^(?:order:)/i,/^(?:merge(?=\s|$))/i,/^(?:cherry-pick(?=\s|$))/i,/^(?:checkout(?=\s|$))/i,/^(?:LR\b)/i,/^(?:TB\b)/i,/^(?::)/i,/^(?:\^)/i,/^(?:options\r?\n)/i,/^(?:[ \r\n\t]+end\b)/i,/^(?:[\s\S]+(?=[ \r\n\t]+end))/i,/^(?:["]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[0-9]+(?=\s|$))/i,/^(?:\w([-\./\w]*[-\w])?)/i,/^(?:$)/i,/^(?:\s+)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},options:{rules:[29,30],inclusive:!1},string:{rules:[33,34],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,31,32,35,36,37,38],inclusive:!0}}},k.prototype=f,f.Parser=k,new k}();n.parser=n;let i=(0,a.c)().gitGraph.mainBranchName,o=(0,a.c)().gitGraph.mainBranchOrder,s={},l=null,h={};h[i]={name:i,order:o};let m={};m[i]=l;let u=i,y="LR",g=0;function p(){return(0,a.x)({length:7})}let b={},d=function(t){if(void 0===m[t=a.e.sanitizeText(t,(0,a.c)())]){let e=Error('Trying to checkout branch which is not yet created. (Help try using "branch '+t+'")');throw e.hash={text:"checkout "+t,token:"checkout "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"branch '+t+'"']},e}l=s[m[u=t]]};function f(t,e,c){let a=t.indexOf(e);-1===a?t.push(c):t.splice(a,1,c)}let k=function(){let t=Object.keys(s).map(function(t){return s[t]});return t.forEach(function(t){a.l.debug(t.id)}),t.sort((t,e)=>t.seq-e.seq),t},x={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},_={getConfig:()=>(0,a.c)().gitGraph,setDirection:function(t){y=t},setOptions:function(t){a.l.debug("options str",t),t=(t=t&&t.trim())||"{}";try{b=JSON.parse(t)}catch(t){a.l.error("error while parsing gitGraph options",t.message)}},getOptions:function(){return b},commit:function(t,e,c,r){a.l.debug("Entering commit:",t,e,c,r),e=a.e.sanitizeText(e,(0,a.c)()),t=a.e.sanitizeText(t,(0,a.c)()),r=a.e.sanitizeText(r,(0,a.c)());let n={id:e||g+"-"+p(),message:t,seq:g++,type:c||x.NORMAL,tag:r||"",parents:null==l?[]:[l.id],branch:u};l=n,s[n.id]=n,m[u]=n.id,a.l.debug("in pushCommit "+n.id)},branch:function(t,e){if(void 0===m[t=a.e.sanitizeText(t,(0,a.c)())])m[t]=null!=l?l.id:null,h[t]={name:t,order:e?parseInt(e,10):null},d(t),a.l.debug("in createBranch");else{let e=Error('Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout '+t+'")');throw e.hash={text:"branch "+t,token:"branch "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"checkout '+t+'"']},e}},merge:function(t,e,c,r){t=a.e.sanitizeText(t,(0,a.c)()),e=a.e.sanitizeText(e,(0,a.c)());let n=s[m[u]],i=s[m[t]];if(u===t){let e=Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},e}if(void 0!==n&&n){if(void 0===m[t]){let e=Error('Incorrect usage of "merge". Branch to be merged ('+t+") does not exist");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch "+t]},e}if(void 0!==i&&i){if(n===i){let e=Error('Incorrect usage of "merge". Both branches have same head');throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},e}if(e&&void 0!==s[e]){let a=Error('Incorrect usage of "merge". Commit with id:'+e+" already exists, use different custom Id");throw a.hash={text:"merge "+t+e+c+r,token:"merge "+t+e+c+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["merge "+t+" "+e+"_UNIQUE "+c+" "+r]},a}}else{let e=Error('Incorrect usage of "merge". Branch to be merged ('+t+") has no commits");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"commit"']},e}}else{let e=Error('Incorrect usage of "merge". Current branch ('+u+")has no commits");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["commit"]},e}let o={id:e||g+"-"+p(),message:"merged branch "+t+" into "+u,seq:g++,parents:[null==l?null:l.id,m[t]],branch:u,type:x.MERGE,customType:c,customId:!!e,tag:r||""};l=o,s[o.id]=o,m[u]=o.id,a.l.debug(m),a.l.debug("in mergeBranch")},cherryPick:function(t,e,c){if(a.l.debug("Entering cherryPick:",t,e,c),t=a.e.sanitizeText(t,(0,a.c)()),e=a.e.sanitizeText(e,(0,a.c)()),c=a.e.sanitizeText(c,(0,a.c)()),!t||void 0===s[t]){let c=Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw c.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},c}let r=s[t],n=r.branch;if(r.type===x.MERGE){let c=Error('Incorrect usage of "cherryPick". Source commit should not be a merge commit');throw c.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},c}if(!e||void 0===s[e]){if(n===u){let c=Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw c.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},c}let i=s[m[u]];if(void 0===i||!i){let c=Error('Incorrect usage of "cherry-pick". Current branch ('+u+")has no commits");throw c.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},c}let o={id:g+"-"+p(),message:"cherry-picked "+r+" into "+u,seq:g++,parents:[null==l?null:l.id,r.id],branch:u,type:x.CHERRY_PICK,tag:null!=c?c:"cherry-pick:"+r.id};l=o,s[o.id]=o,m[u]=o.id,a.l.debug(m),a.l.debug("in cherryPick")}},checkout:d,prettyPrint:function(){a.l.debug(s),function t(e){let c=e.reduce((t,e)=>t.seq>e.seq?t:e,e[0]),r="";e.forEach(function(t){t===c?r+="	*":r+="	|"});let n=[r,c.id,c.seq];for(let t in m)m[t]===c.id&&n.push(t);if(a.l.debug(n.join(" ")),c.parents&&2==c.parents.length){let t=s[c.parents[0]];f(e,c,t),e.push(s[c.parents[1]])}else{if(0==c.parents.length)return;let t=s[c.parents];f(e,c,t)}t(e=function(t,e){let c=Object.create(null);return t.reduce((t,a)=>{let r=e(a);return c[r]||(c[r]=!0,t.push(a)),t},[])}(e,t=>t.id))}([k()[0]])},clear:function(){s={},l=null;let t=(0,a.c)().gitGraph.mainBranchName,e=(0,a.c)().gitGraph.mainBranchOrder;(m={})[t]=null,(h={})[t]={name:t,order:e},u=t,g=0,(0,a.t)()},getBranchesAsObjArray:function(){return Object.values(h).map((t,e)=>null!==t.order?t:{...t,order:parseFloat("0.".concat(e),10)}).sort((t,e)=>t.order-e.order).map(t=>{let{name:e}=t;return{name:e}})},getBranches:function(){return m},getCommits:function(){return s},getCommitsArray:k,getCurrentBranch:function(){return u},getDirection:function(){return y},getHead:function(){return l},setAccTitle:a.s,getAccTitle:a.g,getAccDescription:a.a,setAccDescription:a.b,setDiagramTitle:a.q,getDiagramTitle:a.r,commitType:x},E={},T={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},w={},L={},R=[],M=0,I="LR",v=()=>{w={},L={},E={},M=0,R=[],I="LR"},A=t=>{let e=document.createElementNS("http://www.w3.org/2000/svg","text");for(let c of"string"==typeof t?t.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(t)?t:[]){let t=document.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","0"),t.setAttribute("class","row"),t.textContent=c.trim(),e.appendChild(t)}return e},C=(t,e,c)=>{let r=(0,a.c)().gitGraph,n=t.append("g").attr("class","commit-bullets"),i=t.append("g").attr("class","commit-labels"),o=0;"TB"===I&&(o=30),Object.keys(e).sort((t,c)=>e[t].seq-e[c].seq).forEach(t=>{let a=e[t],s="TB"===I?o+10:w[a.branch].pos,l="TB"===I?w[a.branch].pos:o+10;if(c){let t;let e=void 0!==a.customType&&""!==a.customType?a.customType:a.type;switch(e){case T.NORMAL:t="commit-normal";break;case T.REVERSE:t="commit-reverse";break;case T.HIGHLIGHT:t="commit-highlight";break;case T.MERGE:t="commit-merge";break;case T.CHERRY_PICK:t="commit-cherry-pick";break;default:t="commit-normal"}if(e===T.HIGHLIGHT){let e=n.append("rect");e.attr("x",l-10),e.attr("y",s-10),e.attr("height",20),e.attr("width",20),e.attr("class","commit ".concat(a.id," commit-highlight").concat(w[a.branch].index%8," ").concat(t,"-outer")),n.append("rect").attr("x",l-6).attr("y",s-6).attr("height",12).attr("width",12).attr("class","commit ".concat(a.id," commit").concat(w[a.branch].index%8," ").concat(t,"-inner"))}else if(e===T.CHERRY_PICK)n.append("circle").attr("cx",l).attr("cy",s).attr("r",10).attr("class","commit ".concat(a.id," ").concat(t)),n.append("circle").attr("cx",l-3).attr("cy",s+2).attr("r",2.75).attr("fill","#fff").attr("class","commit ".concat(a.id," ").concat(t)),n.append("circle").attr("cx",l+3).attr("cy",s+2).attr("r",2.75).attr("fill","#fff").attr("class","commit ".concat(a.id," ").concat(t)),n.append("line").attr("x1",l+3).attr("y1",s+1).attr("x2",l).attr("y2",s-5).attr("stroke","#fff").attr("class","commit ".concat(a.id," ").concat(t)),n.append("line").attr("x1",l-3).attr("y1",s+1).attr("x2",l).attr("y2",s-5).attr("stroke","#fff").attr("class","commit ".concat(a.id," ").concat(t));else{let c=n.append("circle");if(c.attr("cx",l),c.attr("cy",s),c.attr("r",a.type===T.MERGE?9:10),c.attr("class","commit ".concat(a.id," commit").concat(w[a.branch].index%8)),e===T.MERGE){let e=n.append("circle");e.attr("cx",l),e.attr("cy",s),e.attr("r",6),e.attr("class","commit ".concat(t," ").concat(a.id," commit").concat(w[a.branch].index%8))}e===T.REVERSE&&n.append("path").attr("d","M ".concat(l-5,",").concat(s-5,"L").concat(l+5,",").concat(s+5,"M").concat(l-5,",").concat(s+5,"L").concat(l+5,",").concat(s-5)).attr("class","commit ".concat(t," ").concat(a.id," commit").concat(w[a.branch].index%8))}}if("TB"===I?L[a.id]={x:l,y:o+10}:L[a.id]={x:o+10,y:s},c){if(a.type!==T.CHERRY_PICK&&(a.customId&&a.type===T.MERGE||a.type!==T.MERGE)&&r.showCommitLabel){let t=i.append("g"),e=t.insert("rect").attr("class","commit-label-bkg"),c=t.append("text").attr("x",o).attr("y",s+25).attr("class","commit-label").text(a.id),n=c.node().getBBox();if(e.attr("x",o+10-n.width/2-2).attr("y",s+13.5).attr("width",n.width+4).attr("height",n.height+4),"TB"===I&&(e.attr("x",l-(n.width+16+5)).attr("y",s-12),c.attr("x",l-(n.width+16)).attr("y",s+n.height-12)),"TB"!==I&&c.attr("x",o+10-n.width/2),r.rotateCommitLabel){if("TB"===I)c.attr("transform","rotate(-45, "+l+", "+s+")"),e.attr("transform","rotate(-45, "+l+", "+s+")");else{let e=-7.5-(n.width+10)/25*9.5,c=10+n.width/25*8.5;t.attr("transform","translate("+e+", "+c+") rotate(-45, "+o+", "+s+")")}}}if(a.tag){let t=i.insert("polygon"),e=i.append("circle"),c=i.append("text").attr("y",s-16).attr("class","tag-label").text(a.tag),r=c.node().getBBox();c.attr("x",o+10-r.width/2);let n=r.height/2,h=s-19.2;t.attr("class","tag-label-bkg").attr("points","\n          ".concat(o-r.width/2-2,",").concat(h+2,"\n          ").concat(o-r.width/2-2,",").concat(h-2,"\n          ").concat(o+10-r.width/2-4,",").concat(h-n-2,"\n          ").concat(o+10+r.width/2+4,",").concat(h-n-2,"\n          ").concat(o+10+r.width/2+4,",").concat(h+n+2,"\n          ").concat(o+10-r.width/2-4,",").concat(h+n+2)),e.attr("cx",o-r.width/2+2).attr("cy",h).attr("r",1.5).attr("class","tag-hole"),"TB"===I&&(t.attr("class","tag-label-bkg").attr("points","\n            ".concat(l,",").concat(o+2,"\n            ").concat(l,",").concat(o-2,"\n            ").concat(l+10,",").concat(o-n-2,"\n            ").concat(l+10+r.width+4,",").concat(o-n-2,"\n            ").concat(l+10+r.width+4,",").concat(o+n+2,"\n            ").concat(l+10,",").concat(o+n+2)).attr("transform","translate(12,12) rotate(45, "+l+","+o+")"),e.attr("cx",l+2).attr("cy",o).attr("transform","translate(12,12) rotate(45, "+l+","+o+")"),c.attr("x",l+5).attr("y",o+3).attr("transform","translate(14,14) rotate(45, "+l+","+o+")"))}}(o+=50)>M&&(M=o)})},O=(t,e,c)=>Object.keys(c).filter(a=>c[a].branch===e.branch&&c[a].seq>t.seq&&c[a].seq<e.seq).length>0,S=function(t,e){let c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=t+Math.abs(t-e)/2;if(c>5)return a;if(R.every(t=>Math.abs(t-a)>=10))return R.push(a),a;let r=Math.abs(t-e);return S(t,e-r/5,c+1)},P=(t,e,c,a)=>{let r;let n=L[e.id],i=L[c.id],o=O(e,c,a),s="",l="",h=0,m=0,u=w[c.branch].index;if(o){s="A 10 10, 0, 0, 0,",l="A 10 10, 0, 0, 1,",h=10,m=10,u=w[c.branch].index;let t=n.y<i.y?S(n.y,i.y):S(i.y,n.y),e=n.x<i.x?S(n.x,i.x):S(i.x,n.x);r="TB"===I?n.x<i.x?"M ".concat(n.x," ").concat(n.y," L ").concat(e-h," ").concat(n.y," ").concat(l," ").concat(e," ").concat(n.y+m," L ").concat(e," ").concat(i.y-h," ").concat(s," ").concat(e+m," ").concat(i.y," L ").concat(i.x," ").concat(i.y):"M ".concat(n.x," ").concat(n.y," L ").concat(e+h," ").concat(n.y," ").concat(s," ").concat(e," ").concat(n.y+m," L ").concat(e," ").concat(i.y-h," ").concat(l," ").concat(e-m," ").concat(i.y," L ").concat(i.x," ").concat(i.y):n.y<i.y?"M ".concat(n.x," ").concat(n.y," L ").concat(n.x," ").concat(t-h," ").concat(s," ").concat(n.x+m," ").concat(t," L ").concat(i.x-h," ").concat(t," ").concat(l," ").concat(i.x," ").concat(t+m," L ").concat(i.x," ").concat(i.y):"M ".concat(n.x," ").concat(n.y," L ").concat(n.x," ").concat(t+h," ").concat(l," ").concat(n.x+m," ").concat(t," L ").concat(i.x-h," ").concat(t," ").concat(s," ").concat(i.x," ").concat(t-m," L ").concat(i.x," ").concat(i.y)}else"TB"===I?(n.x<i.x&&(s="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",h=20,m=20,u=w[c.branch].index,r="M ".concat(n.x," ").concat(n.y," L ").concat(i.x-h," ").concat(n.y," ").concat(l," ").concat(i.x," ").concat(n.y+m," L ").concat(i.x," ").concat(i.y)),n.x>i.x&&(s="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",h=20,m=20,u=w[e.branch].index,r="M ".concat(n.x," ").concat(n.y," L ").concat(n.x," ").concat(i.y-h," ").concat(l," ").concat(n.x-m," ").concat(i.y," L ").concat(i.x," ").concat(i.y)),n.x===i.x&&(u=w[e.branch].index,r="M ".concat(n.x," ").concat(n.y," L ").concat(n.x+h," ").concat(n.y," ").concat(s," ").concat(n.x+m," ").concat(i.y+h," L ").concat(i.x," ").concat(i.y))):(n.y<i.y&&(s="A 20 20, 0, 0, 0,",h=20,m=20,u=w[c.branch].index,r="M ".concat(n.x," ").concat(n.y," L ").concat(n.x," ").concat(i.y-h," ").concat(s," ").concat(n.x+m," ").concat(i.y," L ").concat(i.x," ").concat(i.y)),n.y>i.y&&(s="A 20 20, 0, 0, 0,",h=20,m=20,u=w[e.branch].index,r="M ".concat(n.x," ").concat(n.y," L ").concat(i.x-h," ").concat(n.y," ").concat(s," ").concat(i.x," ").concat(n.y-m," L ").concat(i.x," ").concat(i.y)),n.y===i.y&&(u=w[e.branch].index,r="M ".concat(n.x," ").concat(n.y," L ").concat(n.x," ").concat(i.y-h," ").concat(s," ").concat(n.x+m," ").concat(i.y," L ").concat(i.x," ").concat(i.y)));t.append("path").attr("d",r).attr("class","arrow arrow"+u%8)},G=(t,e)=>{let c=t.append("g").attr("class","commit-arrows");Object.keys(e).forEach(t=>{let a=e[t];a.parents&&a.parents.length>0&&a.parents.forEach(t=>{P(c,e[t],a,e)})})},B=(t,e)=>{let c=(0,a.c)().gitGraph,r=t.append("g");e.forEach((t,e)=>{let a=e%8,n=w[t.name].pos,i=r.append("line");i.attr("x1",0),i.attr("y1",n),i.attr("x2",M),i.attr("y2",n),i.attr("class","branch branch"+a),"TB"===I&&(i.attr("y1",30),i.attr("x1",n),i.attr("y2",M),i.attr("x2",n)),R.push(n);let o=A(t.name),s=r.insert("rect"),l=r.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+a);l.node().appendChild(o);let h=o.getBBox();s.attr("class","branchLabelBkg label"+a).attr("rx",4).attr("ry",4).attr("x",-h.width-4-(!0===c.rotateCommitLabel?30:0)).attr("y",-h.height/2+8).attr("width",h.width+18).attr("height",h.height+4),l.attr("transform","translate("+(-h.width-14-(!0===c.rotateCommitLabel?30:0))+", "+(n-h.height/2-1)+")"),"TB"===I&&(s.attr("x",n-h.width/2-10).attr("y",0),l.attr("transform","translate("+(n-h.width/2-5)+", 0)")),"TB"!==I&&s.attr("transform","translate(-19, "+(n-h.height/2)+")")})},N={parser:n,db:_,renderer:{draw:function(t,e,c,n){var i;v();let o=(0,a.c)(),s=o.gitGraph;a.l.debug("in gitgraph renderer",t+"\n","id:",e,c),E=n.db.getCommits();let l=n.db.getBranchesAsObjArray();I=n.db.getDirection();let h=(0,r.Ys)('[id="'.concat(e,'"]')),m=0;l.forEach((t,e)=>{let c=A(t.name),a=h.append("g"),r=a.insert("g").attr("class","branchLabel"),n=r.insert("g").attr("class","label branch-label");n.node().appendChild(c);let i=c.getBBox();w[t.name]={pos:m,index:e},m+=50+(s.rotateCommitLabel?40:0)+("TB"===I?i.width/2:0),n.remove(),r.remove(),a.remove()}),C(h,E,!1),s.showBranches&&B(h,l),G(h,E),C(h,E,!0),a.u.insertTitle(h,"gitTitleText",s.titleTopMargin,n.db.getDiagramTitle()),(0,a.y)(void 0,h,s.diagramPadding,null!==(i=s.useMaxWidth)&&void 0!==i?i:o.useMaxWidth)}},styles:t=>"\n  .commit-id,\n  .commit-msg,\n  .branch-label {\n    fill: lightgrey;\n    color: lightgrey;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n  ".concat([0,1,2,3,4,5,6,7].map(e=>"\n        .branch-label".concat(e," { fill: ").concat(t["gitBranchLabel"+e],"; }\n        .commit").concat(e," { stroke: ").concat(t["git"+e],"; fill: ").concat(t["git"+e],"; }\n        .commit-highlight").concat(e," { stroke: ").concat(t["gitInv"+e],"; fill: ").concat(t["gitInv"+e],"; }\n        .label").concat(e,"  { fill: ").concat(t["git"+e],"; }\n        .arrow").concat(e," { stroke: ").concat(t["git"+e],"; }\n        ")).join("\n"),"\n\n  .branch {\n    stroke-width: 1;\n    stroke: ").concat(t.lineColor,";\n    stroke-dasharray: 2;\n  }\n  .commit-label { font-size: ").concat(t.commitLabelFontSize,"; fill: ").concat(t.commitLabelColor,";}\n  .commit-label-bkg { font-size: ").concat(t.commitLabelFontSize,"; fill: ").concat(t.commitLabelBackground,"; opacity: 0.5; }\n  .tag-label { font-size: ").concat(t.tagLabelFontSize,"; fill: ").concat(t.tagLabelColor,";}\n  .tag-label-bkg { fill: ").concat(t.tagLabelBackground,"; stroke: ").concat(t.tagLabelBorder,"; }\n  .tag-hole { fill: ").concat(t.textColor,"; }\n\n  .commit-merge {\n    stroke: ").concat(t.primaryColor,";\n    fill: ").concat(t.primaryColor,";\n  }\n  .commit-reverse {\n    stroke: ").concat(t.primaryColor,";\n    fill: ").concat(t.primaryColor,";\n    stroke-width: 3;\n  }\n  .commit-highlight-outer {\n  }\n  .commit-highlight-inner {\n    stroke: ").concat(t.primaryColor,";\n    fill: ").concat(t.primaryColor,";\n  }\n\n  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}\n  .gitTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ").concat(t.textColor,";\n  }\n")}}}]);