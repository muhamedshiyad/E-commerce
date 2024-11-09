exports.id=696,exports.ids=[696],exports.modules={3322:(t,e,i)=>{i.d(e,{TimelineWebviewProvider:()=>TimelineWebviewProvider});var n=i(1398),o=i(6238),s=i(1416),r=i(1624),a=i(1728),h=i(6774),d=i(2635),l=i(1309),u=i(4358),g=i(3713),p=i(8371),c=i(2838),m=i(4357),v=i(30),x=i(5217),C=i(8732),y=i(7024),b=i(2044),_=i(3302);let S="timeline",w=new _.Q2(S,"point/open"),f=new _.Q2(S,"period/update"),D=new _.C1(S,"didChange");var P=Object.defineProperty,T=Object.getOwnPropertyDescriptor,R=(t,e,i,n)=>{for(var o,s=n>1?void 0:n?T(e,i):e,r=t.length-1;r>=0;r--)(o=t[r])&&(s=(n?o(e,i,s):o(s))||s);return n&&s&&P(e,i,s),s};let TimelineWebviewProvider=class TimelineWebviewProvider{constructor(t,e){this.container=t,this.host=e,this._context={uri:void 0,period:"3|M",etagRepositories:this.container.git.etag,etagRepository:0,etagSubscription:this.container.subscription.etag},this._context={...this._context,...this._pendingContext},this._pendingContext=void 0,this.host.isHost("editor")?this._disposable=n.Disposable.from(this.container.subscription.onDidChange(this.onSubscriptionChanged,this),this.container.git.onDidChangeRepository(this.onRepositoryChanged,this)):(this.host.description=o.lD,this._disposable=n.Disposable.from(this.container.subscription.onDidChange(this.onSubscriptionChanged,this),this.container.git.onDidChangeRepository(this.onRepositoryChanged,this),this.container.git.onDidChangeRepositories(this.onRepositoriesChanged,this),n.window.onDidChangeActiveTextEditor((0,g.sg)(this.onActiveEditorChanged,250),this),this.container.events.on("file:selected",(0,g.sg)(this.onFileSelected,250),this)))}_bootstraping=!0;_context;_pendingContext;_disposable;dispose(){this._disposable.dispose()}onReloaded(){this.notifyDidChangeState(!0)}canReuseInstance(...t){let e;let[i]=t;return null!=i?i instanceof n.Uri?e=i:(0,C.k)(i)?e=i.uri:(0,b.c)(i)&&null!=i.state.uri&&(e=n.Uri.parse(i.state.uri)):e=n.window.activeTextEditor?.document.uri,e?.toString()===this._context.uri?.toString()||void 0}getSplitArgs(){return null!=this._context.uri?[this._context.uri]:[]}getTelemetryContext(){return{...this.host.getTelemetryContext(),"context.period":this._context.period}}onShowing(t,e,...i){let[o]=i;null!=o?o instanceof n.Uri?this.updatePendingUri(o):(0,C.k)(o)?this.updatePendingUri(o.uri):(0,b.c)(o)&&this.updatePendingContext({period:o.state.period,uri:null!=o.state.uri?n.Uri.parse(o.state.uri):void 0}):this.updatePendingEditor(n.window.activeTextEditor),t?(this._context={...this._context,...this._pendingContext},this._pendingContext=void 0):this.updateState();let s=(0,c.Bq)(v.H.get("visualHistory"),"context.config",{joinArrays:!0});return[!0,{...this.getTelemetryContext(),...s,"context.period":this._context.period}]}includeBootstrap(){return this._bootstraping=!0,this._context={...this._context,...this._pendingContext},this._pendingContext=void 0,this.getState(this._context)}registerCommands(){let t=[];return this.host.isHost("view")&&t.push((0,m.Lb)(`${this.host.id}.refresh`,()=>this.host.refresh(!0),this),(0,m.Lb)(`${this.host.id}.openInTab`,()=>{null!=this._context.uri&&((0,m.RS)(s.T.ShowInTimeline,this._context.uri),this.container.telemetry.sendEvent("timeline/action/openInEditor",this.getTelemetryContext()))},this)),t}onVisibilityChanged(t){t&&(this.host.isHost("view")&&this.updatePendingEditor(n.window.activeTextEditor),(!this._bootstraping||(this._bootstraping=!1,null!=this._pendingContext&&"uri"in this._pendingContext))&&this.updateState())}async onMessageReceived(t){switch(!0){case w.is(t):{if(null==t.params.data||!t.params.data.selected||null==this._context.uri)return;let e=this.container.git.getRepository(this._context.uri);if(null==e)return;let i=await e.git.getCommit(t.params.data.id);if(null==i)return;this.container.events.fire("commit:selected",{commit:i,interaction:"active",preserveFocus:!0,preserveVisibility:!1},{source:this.host.id}),this.container.telemetry.sendEvent("timeline/commit/selected",this.getTelemetryContext()),this.container.commitDetailsView.ready||this.container.commitDetailsView.show({preserveFocus:!0},{commit:i,interaction:"active",preserveVisibility:!1});break}case f.is(t):{let e=this._context.period;this.updatePendingContext({period:t.params.period})&&(this.updateState(!0),this.container.telemetry.sendEvent("timeline/period/changed",{...this.getTelemetryContext(),"period.old":e,"period.new":t.params.period}))}}}onActiveEditorChanged(t){if(null!=t){if(!(0,x.oU)(t))return;this.container.git.isTrackable(t.document.uri)||(t=void 0)}this.updatePendingEditor(t)&&(this.updateState(),this.container.telemetry.sendEvent("timeline/editor/changed",this.getTelemetryContext()))}onFileSelected(t){if(null==t.data)return;let e=t.data.uri;null==e||this.container.git.isTrackable(e)||(e=void 0),this.updatePendingUri(e)&&this.updateState()}onRepositoriesChanged(t){let e=this.updatePendingUri(this._context.uri);(this.updatePendingContext({etagRepositories:t.etag})||e)&&this.updateState()}onRepositoryChanged(t){t.changed(d.Z_.Heads,d.Z_.Index,d.Ti.Any)&&this.updatePendingContext({etagRepository:t.repository.etag})&&this.updateState()}onSubscriptionChanged(t){this.updatePendingContext({etagSubscription:t.etag})&&this.updateState()}async getState(t){let e=v.H.get("defaultDateFormat")??"MMMM Do, YYYY h:mma",i=v.H.get("defaultDateShortFormat")??"short",s=t.period??"3|M",d=null!=t.uri?await a.nk.fromUri(t.uri):void 0,u=d?.repoPath;this.host.isHost("editor")?this.host.title=null==d?this.host.originalTitle:`${this.host.originalTitle}: ${d.fileName}`:this.host.description=d?.fileName??o.lD;let g=await this.container.git.access(r.k.Timeline,u);if(null==t.uri||null==d||null==u||!1===g.allowed){let n=await this.container.git.access(r.k.Timeline,u);return{...this.host.baseWebviewState,period:s,title:d?.relativePath,sha:d?.shortSha,uri:t.uri?.toString(),dateFormat:e,shortDateFormat:i,access:n}}let[c,m]=await Promise.all([this.container.git.getCurrentUser(u),this.container.git.getLogForFile(u,d.fsPath,{limit:0,ref:d.sha,since:(function(t){let e;if("all"===t)return;let[i,n]=t.split("|");switch(n){case"D":e=(0,l.Tl)(new Date,{days:-parseInt(i,10)});break;case"M":e=(0,l.Tl)(new Date,{months:-parseInt(i,10)});break;case"Y":e=(0,l.Tl)(new Date,{years:-parseInt(i,10)});break;default:e=(0,l.Tl)(new Date,{months:-3})}return e.getHours()>=12&&e.setDate(e.getDate()+1),e.setHours(0,0,0,0),e})(s)?.toISOString()})]);if(null==m)return{...this.host.baseWebviewState,dataset:[],period:s,title:d.relativePath,sha:d.shortSha,uri:t.uri.toString(),dateFormat:e,shortDateFormat:i,access:g};let x=[...(0,p.pb)(m.commits.values(),t=>t.file?.stats==null&&1!==(0,h.Zx)(t.stats?.changedFiles))];if(0!==x.length){let e=v.H.get("visualHistory.queryLimit")??20,i=this.container.git.getRepository(t.uri),o=i?.provider.name;x.length>e&&(n.window.showWarningMessage(`Unable able to show more than the first ${e} commits for the specified time period because of ${o?`${o} `:""}rate limits.`),x=x.slice(0,20)),await Promise.allSettled(x.map(t=>t.ensureFullDetails()))}let C=c?.name?`${c.name} (you)`:"You",y=[];for(let t of m.commits.values()){let e=t.file?.stats??(1===(0,h.Zx)(t.stats?.changedFiles)?t.stats:void 0);y.push({author:"You"===t.author.name?C:t.author.name,additions:e?.additions,deletions:e?.deletions,commit:t.sha,date:t.date.toISOString(),message:t.message??t.summary,sort:t.date.getTime()})}return y.sort((t,e)=>e.sort-t.sort),{...this.host.baseWebviewState,dataset:y,period:s,title:d.relativePath,sha:d.shortSha,uri:t.uri.toString(),dateFormat:e,shortDateFormat:i,access:g}}updatePendingContext(t,e){let[i,n]=(0,y.ql)(this._context,this._pendingContext,t,e);return i&&(this._pendingContext=n),i}updatePendingEditor(t,e){return!(null==t&&(0,x.e0)(this._context.uri??this._pendingContext?.uri))&&(null==t||!!(0,x.oU)(t))&&this.updatePendingUri(t?.document.uri,e)}updatePendingUri(t,e){let i;if(null!=t){let e=this.container.git.getRepository(t);i=e?.etag??0}else i=0;return this.updatePendingContext({uri:t,etagRepository:i},e)}_notifyDidChangeStateDebounced=void 0;updateState(t=!1){if(t){this.notifyDidChangeState();return}null==this._notifyDidChangeStateDebounced&&(this._notifyDidChangeStateDebounced=(0,g.sg)(this.notifyDidChangeState.bind(this),500)),this._notifyDidChangeStateDebounced()}async notifyDidChangeState(t=!1){let e;return this._notifyDidChangeStateDebounced?.cancel(),(!!t||null!=this._pendingContext)&&(null!=this._pendingContext?(e={...this._context,...this._pendingContext},this._context=e,this._pendingContext=void 0):e=this._context,this.host.notify(D,{state:await this.getState(e)}))}};R([(0,u.Yz)()],TimelineWebviewProvider.prototype,"onActiveEditorChanged",1),R([(0,u.Yz)({args:!1})],TimelineWebviewProvider.prototype,"onFileSelected",1),R([(0,u.Yz)({args:!1})],TimelineWebviewProvider.prototype,"onRepositoriesChanged",1),R([(0,u.Yz)({args:!1})],TimelineWebviewProvider.prototype,"onRepositoryChanged",1),R([(0,u.Yz)({args:!1})],TimelineWebviewProvider.prototype,"onSubscriptionChanged",1),R([(0,u.Yz)({args:!1})],TimelineWebviewProvider.prototype,"getState",1),R([(0,u.Yz)()],TimelineWebviewProvider.prototype,"updateState",1),R([(0,u.Yz)()],TimelineWebviewProvider.prototype,"notifyDidChangeState",1)}};