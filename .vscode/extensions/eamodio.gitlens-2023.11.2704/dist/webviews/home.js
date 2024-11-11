var e,t,o,n,i,r,s,c,a={};a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),void 0!==a&&Object.defineProperty(a,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var l={};a.d(l,{z:()=>tD});class h{constructor(e,t=!1,o=!1){this.method=e,this.reset=t,this.pack=o}}class b extends h{}class f extends h{}function d(e,t,o){e.method===t.method&&o(t.params,e)}let g=new b("webview/ready"),u=new b("webview/focus"),p=new b("command/execute");new b("configuration/preview"),new b("configuration/update"),new f("configuration/didChange"),new f("configuration/didPreview"),new f("webview/didOpenAnchor");let m=new f("repositories/didChange");function w(e){let t=.001*performance.now(),o=Math.floor(t),n=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],(n-=e[1])<0&&(o--,n+=1e9)),[o,n]}let v=/\(([\s\S]*)\)/,y=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,$=/\s?=.*$/;var k=((e=k||{})[e.Off=0]="Off",e[e.Error=1]="Error",e[e.Warn=2]="Warn",e[e.Info=3]="Info",e[e.Debug=4]="Debug",e);let _=new class{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=A(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=A(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output=this.output??this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let o;(!(this.level<4)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...o){let n;if(!(this.level<1)||this.isDebugging){if(null==(n=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??""}${this.toLoggableParams(!1,o)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let o;(!(this.level<3)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let o;(!(this.level<2)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let o=t.map(e=>this.toLoggable(e)).join(", ");return 0!==o.length?` \u2014 ${o}`:""}};function A(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}function C(e){let t;if("function"==typeof e){if(e.prototype?.constructor==null)return e.name;t=e.prototype.constructor.name??""}else t=e.constructor?.name??"";let o=t.indexOf("_");return -1===o?t:t.substr(o+1)}let S={enabled:e=>_.enabled(e)||_.isDebugging,log:(e,t,o,...n)=>{switch(e){case"error":_.error("",t,o,...n);break;case"warn":_.warn(t,o,...n);break;case"info":_.log(t,o,...n);break;default:_.debug(t,o,...n)}}},R=new Map,P=0;function D(e,t){if(null!=t)return{scopeId:t.scopeId,prefix:`${t.prefix}${e}`};let o=x();return{scopeId:o,prefix:`[${String(o).padStart(5)}] ${e}`}}function x(){return 1073741824===P&&(P=0),++P}var L=((t=L||{})[t.Hash=35]="Hash",t[t.Slash=47]="Slash",t[t.Digit0=48]="Digit0",t[t.Digit1=49]="Digit1",t[t.Digit2=50]="Digit2",t[t.Digit3=51]="Digit3",t[t.Digit4=52]="Digit4",t[t.Digit5=53]="Digit5",t[t.Digit6=54]="Digit6",t[t.Digit7=55]="Digit7",t[t.Digit8=56]="Digit8",t[t.Digit9=57]="Digit9",t[t.Backslash=92]="Backslash",t[t.A=65]="A",t[t.B=66]="B",t[t.C=67]="C",t[t.D=68]="D",t[t.E=69]="E",t[t.F=70]="F",t[t.Z=90]="Z",t[t.a=97]="a",t[t.b=98]="b",t[t.c=99]="c",t[t.d=100]="d",t[t.e=101]="e",t[t.f=102]="f",t[t.z=122]="z",t),O=((o=O||{}).ActionPrefix="gitlens.action.",o.AddAuthors="gitlens.addAuthors",o.BrowseRepoAtRevision="gitlens.browseRepoAtRevision",o.BrowseRepoAtRevisionInNewWindow="gitlens.browseRepoAtRevisionInNewWindow",o.BrowseRepoBeforeRevision="gitlens.browseRepoBeforeRevision",o.BrowseRepoBeforeRevisionInNewWindow="gitlens.browseRepoBeforeRevisionInNewWindow",o.ClearFileAnnotations="gitlens.clearFileAnnotations",o.CloseUnchangedFiles="gitlens.closeUnchangedFiles",o.CloseWelcomeView="gitlens.closeWelcomeView",o.CompareWith="gitlens.compareWith",o.CompareHeadWith="gitlens.compareHeadWith",o.CompareWorkingWith="gitlens.compareWorkingWith",o.ComputingFileAnnotations="gitlens.computingFileAnnotations",o.ConnectRemoteProvider="gitlens.connectRemoteProvider",o.CopyAutolinkUrl="gitlens.copyAutolinkUrl",o.CopyCurrentBranch="gitlens.copyCurrentBranch",o.CopyDeepLinkToBranch="gitlens.copyDeepLinkToBranch",o.CopyDeepLinkToCommit="gitlens.copyDeepLinkToCommit",o.CopyDeepLinkToComparison="gitlens.copyDeepLinkToComparison",o.CopyDeepLinkToRepo="gitlens.copyDeepLinkToRepo",o.CopyDeepLinkToTag="gitlens.copyDeepLinkToTag",o.CopyDeepLinkToWorkspace="gitlens.copyDeepLinkToWorkspace",o.CopyMessageToClipboard="gitlens.copyMessageToClipboard",o.CopyRemoteBranchesUrl="gitlens.copyRemoteBranchesUrl",o.CopyRemoteBranchUrl="gitlens.copyRemoteBranchUrl",o.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",o.CopyRemoteComparisonUrl="gitlens.copyRemoteComparisonUrl",o.CopyRemoteFileUrl="gitlens.copyRemoteFileUrlToClipboard",o.CopyRemoteFileUrlWithoutRange="gitlens.copyRemoteFileUrlWithoutRange",o.CopyRemoteFileUrlFrom="gitlens.copyRemoteFileUrlFrom",o.CopyRemoteIssueUrl="gitlens.copyRemoteIssueUrl",o.CopyRemotePullRequestUrl="gitlens.copyRemotePullRequestUrl",o.CopyRemoteRepositoryUrl="gitlens.copyRemoteRepositoryUrl",o.CopyShaToClipboard="gitlens.copyShaToClipboard",o.CopyRelativePathToClipboard="gitlens.copyRelativePathToClipboard",o.CreatePatch="gitlens.createPatch",o.CreateCloudPatch="gitlens.createCloudPatch",o.CreatePullRequestOnRemote="gitlens.createPullRequestOnRemote",o.DiffDirectory="gitlens.diffDirectory",o.DiffDirectoryWithHead="gitlens.diffDirectoryWithHead",o.DiffWith="gitlens.diffWith",o.DiffWithNext="gitlens.diffWithNext",o.DiffWithNextInDiffLeft="gitlens.diffWithNextInDiffLeft",o.DiffWithNextInDiffRight="gitlens.diffWithNextInDiffRight",o.DiffWithPrevious="gitlens.diffWithPrevious",o.DiffWithPreviousInDiffLeft="gitlens.diffWithPreviousInDiffLeft",o.DiffWithPreviousInDiffRight="gitlens.diffWithPreviousInDiffRight",o.DiffLineWithPrevious="gitlens.diffLineWithPrevious",o.DiffWithRevision="gitlens.diffWithRevision",o.DiffWithRevisionFrom="gitlens.diffWithRevisionFrom",o.DiffWithWorking="gitlens.diffWithWorking",o.DiffWithWorkingInDiffLeft="gitlens.diffWithWorkingInDiffLeft",o.DiffWithWorkingInDiffRight="gitlens.diffWithWorkingInDiffRight",o.DiffLineWithWorking="gitlens.diffLineWithWorking",o.DisconnectRemoteProvider="gitlens.disconnectRemoteProvider",o.DisableDebugLogging="gitlens.disableDebugLogging",o.EnableDebugLogging="gitlens.enableDebugLogging",o.DisableRebaseEditor="gitlens.disableRebaseEditor",o.EnableRebaseEditor="gitlens.enableRebaseEditor",o.ExternalDiff="gitlens.externalDiff",o.ExternalDiffAll="gitlens.externalDiffAll",o.FetchRepositories="gitlens.fetchRepositories",o.GenerateCommitMessage="gitlens.generateCommitMessage",o.GetStarted="gitlens.getStarted",o.InviteToLiveShare="gitlens.inviteToLiveShare",o.OpenAutolinkUrl="gitlens.openAutolinkUrl",o.OpenBlamePriorToChange="gitlens.openBlamePriorToChange",o.OpenBranchesOnRemote="gitlens.openBranchesOnRemote",o.OpenBranchOnRemote="gitlens.openBranchOnRemote",o.OpenCurrentBranchOnRemote="gitlens.openCurrentBranchOnRemote",o.OpenChangedFiles="gitlens.openChangedFiles",o.OpenCommitOnRemote="gitlens.openCommitOnRemote",o.OpenComparisonOnRemote="gitlens.openComparisonOnRemote",o.OpenFileHistory="gitlens.openFileHistory",o.OpenFileFromRemote="gitlens.openFileFromRemote",o.OpenFileOnRemote="gitlens.openFileOnRemote",o.OpenFileOnRemoteFrom="gitlens.openFileOnRemoteFrom",o.OpenFileAtRevision="gitlens.openFileRevision",o.OpenFileAtRevisionFrom="gitlens.openFileRevisionFrom",o.OpenFolderHistory="gitlens.openFolderHistory",o.OpenOnRemote="gitlens.openOnRemote",o.OpenIssueOnRemote="gitlens.openIssueOnRemote",o.OpenCloudPatch="gitlens.openCloudPatch",o.OpenPatch="gitlens.openPatch",o.OpenPullRequestOnRemote="gitlens.openPullRequestOnRemote",o.OpenAssociatedPullRequestOnRemote="gitlens.openAssociatedPullRequestOnRemote",o.OpenRepoOnRemote="gitlens.openRepoOnRemote",o.OpenRevisionFile="gitlens.openRevisionFile",o.OpenRevisionFileInDiffLeft="gitlens.openRevisionFileInDiffLeft",o.OpenRevisionFileInDiffRight="gitlens.openRevisionFileInDiffRight",o.OpenWalkthrough="gitlens.openWalkthrough",o.OpenWorkingFile="gitlens.openWorkingFile",o.OpenWorkingFileInDiffLeft="gitlens.openWorkingFileInDiffLeft",o.OpenWorkingFileInDiffRight="gitlens.openWorkingFileInDiffRight",o.PullRepositories="gitlens.pullRepositories",o.PushRepositories="gitlens.pushRepositories",o.GitCommands="gitlens.gitCommands",o.GitCommandsBranch="gitlens.gitCommands.branch",o.GitCommandsCherryPick="gitlens.gitCommands.cherryPick",o.GitCommandsMerge="gitlens.gitCommands.merge",o.GitCommandsRebase="gitlens.gitCommands.rebase",o.GitCommandsReset="gitlens.gitCommands.reset",o.GitCommandsRevert="gitlens.gitCommands.revert",o.GitCommandsSwitch="gitlens.gitCommands.switch",o.GitCommandsTag="gitlens.gitCommands.tag",o.GitCommandsWorktree="gitlens.gitCommands.worktree",o.GitCommandsWorktreeOpen="gitlens.gitCommands.worktree.open",o.OpenOrCreateWorktreeForGHPR="gitlens.ghpr.views.openOrCreateWorktree",o.PlusHide="gitlens.plus.hide",o.PlusLoginOrSignUp="gitlens.plus.loginOrSignUp",o.PlusLogout="gitlens.plus.logout",o.PlusManage="gitlens.plus.manage",o.PlusPurchase="gitlens.plus.purchase",o.PlusResendVerification="gitlens.plus.resendVerification",o.PlusRestore="gitlens.plus.restore",o.PlusShowPlans="gitlens.plus.showPlans",o.PlusStartPreviewTrial="gitlens.plus.startPreviewTrial",o.PlusValidate="gitlens.plus.validate",o.QuickOpenFileHistory="gitlens.quickOpenFileHistory",o.RefreshFocus="gitlens.focus.refresh",o.RefreshGraph="gitlens.graph.refresh",o.RefreshHover="gitlens.refreshHover",o.ResetAvatarCache="gitlens.resetAvatarCache",o.ResetAIKey="gitlens.resetAIKey",o.ResetSuppressedWarnings="gitlens.resetSuppressedWarnings",o.ResetTrackedUsage="gitlens.resetTrackedUsage",o.ResetViewsLayout="gitlens.resetViewsLayout",o.RevealCommitInView="gitlens.revealCommitInView",o.ShareAsCloudPatch="gitlens.shareAsCloudPatch",o.SearchCommits="gitlens.showCommitSearch",o.SearchCommitsInView="gitlens.views.searchAndCompare.searchCommits",o.ShowBranchesView="gitlens.showBranchesView",o.ShowCommitDetailsView="gitlens.showCommitDetailsView",o.ShowCommitInView="gitlens.showCommitInView",o.ShowCommitsInView="gitlens.showCommitsInView",o.ShowCommitsView="gitlens.showCommitsView",o.ShowContributorsView="gitlens.showContributorsView",o.ShowDraftsView="gitlens.showDraftsView",o.ShowFileHistoryView="gitlens.showFileHistoryView",o.ShowFocusPage="gitlens.showFocusPage",o.ShowGraph="gitlens.showGraph",o.ShowGraphPage="gitlens.showGraphPage",o.ShowGraphView="gitlens.showGraphView",o.ShowHomeView="gitlens.showHomeView",o.ShowAccountView="gitlens.showAccountView",o.ShowInCommitGraph="gitlens.showInCommitGraph",o.ShowInCommitGraphView="gitlens.showInCommitGraphView",o.ShowInDetailsView="gitlens.showInDetailsView",o.ShowInTimeline="gitlens.showInTimeline",o.ShowLastQuickPick="gitlens.showLastQuickPick",o.ShowLineCommitInView="gitlens.showLineCommitInView",o.ShowLineHistoryView="gitlens.showLineHistoryView",o.OpenOnlyChangedFiles="gitlens.openOnlyChangedFiles",o.ShowPatchDetailsPage="gitlens.showPatchDetailsPage",o.ShowQuickBranchHistory="gitlens.showQuickBranchHistory",o.ShowQuickCommit="gitlens.showQuickCommitDetails",o.ShowQuickCommitFile="gitlens.showQuickCommitFileDetails",o.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",o.ShowQuickFileHistory="gitlens.showQuickFileHistory",o.ShowQuickRepoStatus="gitlens.showQuickRepoStatus",o.ShowQuickCommitRevision="gitlens.showQuickRevisionDetails",o.ShowQuickCommitRevisionInDiffLeft="gitlens.showQuickRevisionDetailsInDiffLeft",o.ShowQuickCommitRevisionInDiffRight="gitlens.showQuickRevisionDetailsInDiffRight",o.ShowQuickStashList="gitlens.showQuickStashList",o.ShowRemotesView="gitlens.showRemotesView",o.ShowRepositoriesView="gitlens.showRepositoriesView",o.ShowSearchAndCompareView="gitlens.showSearchAndCompareView",o.ShowSettingsPage="gitlens.showSettingsPage",o.ShowSettingsPageAndJumpToBranchesView="gitlens.showSettingsPage!branches-view",o.ShowSettingsPageAndJumpToCommitsView="gitlens.showSettingsPage!commits-view",o.ShowSettingsPageAndJumpToContributorsView="gitlens.showSettingsPage!contributors-view",o.ShowSettingsPageAndJumpToFileHistoryView="gitlens.showSettingsPage!file-history-view",o.ShowSettingsPageAndJumpToLineHistoryView="gitlens.showSettingsPage!line-history-view",o.ShowSettingsPageAndJumpToRemotesView="gitlens.showSettingsPage!remotes-view",o.ShowSettingsPageAndJumpToRepositoriesView="gitlens.showSettingsPage!repositories-view",o.ShowSettingsPageAndJumpToSearchAndCompareView="gitlens.showSettingsPage!search-compare-view",o.ShowSettingsPageAndJumpToStashesView="gitlens.showSettingsPage!stashes-view",o.ShowSettingsPageAndJumpToTagsView="gitlens.showSettingsPage!tags-view",o.ShowSettingsPageAndJumpToWorkTreesView="gitlens.showSettingsPage!worktrees-view",o.ShowSettingsPageAndJumpToViews="gitlens.showSettingsPage!views",o.ShowSettingsPageAndJumpToCommitGraph="gitlens.showSettingsPage!commit-graph",o.ShowSettingsPageAndJumpToAutolinks="gitlens.showSettingsPage!autolinks",o.ShowStashesView="gitlens.showStashesView",o.ShowTagsView="gitlens.showTagsView",o.ShowTimelinePage="gitlens.showTimelinePage",o.ShowTimelineView="gitlens.showTimelineView",o.ShowWelcomePage="gitlens.showWelcomePage",o.ShowWorktreesView="gitlens.showWorktreesView",o.ShowWorkspacesView="gitlens.showWorkspacesView",o.StashApply="gitlens.stashApply",o.StashSave="gitlens.stashSave",o.StashSaveFiles="gitlens.stashSaveFiles",o.SwitchAIModel="gitlens.switchAIModel",o.SwitchMode="gitlens.switchMode",o.ToggleCodeLens="gitlens.toggleCodeLens",o.ToggleFileBlame="gitlens.toggleFileBlame",o.ToggleFileBlameInDiffLeft="gitlens.toggleFileBlameInDiffLeft",o.ToggleFileBlameInDiffRight="gitlens.toggleFileBlameInDiffRight",o.ToggleFileChanges="gitlens.toggleFileChanges",o.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",o.ToggleFileHeatmap="gitlens.toggleFileHeatmap",o.ToggleFileHeatmapInDiffLeft="gitlens.toggleFileHeatmapInDiffLeft",o.ToggleFileHeatmapInDiffRight="gitlens.toggleFileHeatmapInDiffRight",o.ToggleGraph="gitlens.toggleGraph",o.ToggleMaximizedGraph="gitlens.toggleMaximizedGraph",o.ToggleLineBlame="gitlens.toggleLineBlame",o.ToggleReviewMode="gitlens.toggleReviewMode",o.ToggleZenMode="gitlens.toggleZenMode",o.ViewsCopy="gitlens.views.copy",o.ViewsOpenDirectoryDiff="gitlens.views.openDirectoryDiff",o.ViewsOpenDirectoryDiffWithWorking="gitlens.views.openDirectoryDiffWithWorking",o.Deprecated_DiffHeadWith="gitlens.diffHeadWith",o.Deprecated_DiffWorkingWith="gitlens.diffWorkingWith",o.Deprecated_OpenBranchesInRemote="gitlens.openBranchesInRemote",o.Deprecated_OpenBranchInRemote="gitlens.openBranchInRemote",o.Deprecated_OpenCommitInRemote="gitlens.openCommitInRemote",o.Deprecated_OpenFileInRemote="gitlens.openFileInRemote",o.Deprecated_OpenInRemote="gitlens.openInRemote",o.Deprecated_OpenRepoInRemote="gitlens.openRepoInRemote",o.Deprecated_ShowFileHistoryInView="gitlens.showFileHistoryInView",o),T=((n=T||{}).AngleBracketLeftHeavy="❰",n.AngleBracketRightHeavy="❱",n.ArrowBack="↩",n.ArrowDown="↓",n.ArrowDownUp="⇵",n.ArrowDropRight="⤷",n.ArrowHeadRight="➤",n.ArrowLeft="←",n.ArrowLeftDouble="⇐",n.ArrowLeftRight="↔",n.ArrowLeftRightDouble="⇔",n.ArrowLeftRightDoubleStrike="⇎",n.ArrowLeftRightLong="⟷",n.ArrowRight="→",n.ArrowRightDouble="⇒",n.ArrowRightHollow="⇨",n.ArrowUp="↑",n.ArrowUpDown="⇅",n.ArrowUpRight="↗",n.ArrowsHalfLeftRight="⇋",n.ArrowsHalfRightLeft="⇌",n.ArrowsLeftRight="⇆",n.ArrowsRightLeft="⇄",n.Asterisk="∗",n.Check="✔",n.Dash="—",n.Dot="•",n.Ellipsis="…",n.EnDash="–",n.Envelope="✉",n.EqualsTriple="≡",n.Flag="⚑",n.FlagHollow="⚐",n.MiddleEllipsis="⋯",n.MuchLessThan="≪",n.MuchGreaterThan="≫",n.Pencil="✎",n.Space=" ",n.SpaceThin=" ",n.SpaceThinnest=" ",n.SquareWithBottomShadow="❏",n.SquareWithTopShadow="❐",n.Warning="⚠",n.ZeroWidthSpace="​",n),E=((i=E||{}).DebugConsole="debug",i.File="file",i.Git="git",i.GitHub="github",i.GitLens="gitlens",i.Output="output",i.PRs="pr",i.Terminal="vscode-terminal",i.Vsls="vsls",i.VslsScc="vsls-scc",i.Virtual="vscode-vfs",i),F=((r=F||{}).Version="gitlens:synced:version",r.PreReleaseVersion="gitlens:synced:preVersion",r.HomeViewWelcomeVisible="gitlens:views:welcome:visible",r);let{fromCharCode:I}=String;function M(e){let[t,o]=w(e);return 1e3*t+Math.floor(o/1e6)}new TextEncoder;let U=Symbol("logInstanceNameFn");Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class W{constructor(e,t,...o){let n;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:D(e??""),n="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??S,this._time=w(),null!=n){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=w(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=w(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t){this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);return}let[o,n]=w(this._time),i=1e3*o+Math.floor(n/1e6),r=e?.message??"";this.logProvider.log(i>250?"warn":this.logLevel,this.logScope,`${r?`${r} `:""}[${i}ms]${e?.suffix??""}`)}}function B(e,t){let o=e+t;return Math.round(t<0?o<0?0:o:o>255?255:o)}function H(e,t){let o=function(e){let t=X(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;let[n,i,r,s]=o,c=255*t/100;return`rgba(${B(n,c)}, ${B(i,c)}, ${B(r,c)}, ${s})`}function V(e,t){let o=J.from(e);return null==o?e:o.transparent(t/100).toString()}function z(e,t){let o=Math.pow(10,t);return Math.round(e*o)/o}(s=c||(c={})).on=function(e,t,o,n){let i=!1;if("string"==typeof e){let r=function(t){let n=t?.target?.closest(e);null!=n&&o(t,n)};return document.addEventListener(t,r,n??!0),{dispose:()=>{i||(i=!0,document.removeEventListener(t,r,n??!0))}}}let r=function(e){o(e,this)};return e.addEventListener(t,r,n??!1),{dispose:()=>{i||(i=!0,e.removeEventListener(t,r,n??!1))}}},s.insertTemplate=function(e,t,o){let n=document.getElementById(e);if(t.replaceChildren(n?.content.cloneNode(!0)),t.className=n.className,o?.visible!=null)for(let e of t.querySelectorAll("[data-visible]")){let t=e.dataset.visible;t&&(o.visible[t]?e.style.display="initial":e.style.display="none")}if(o?.bindings!=null)for(let e of t.querySelectorAll("[data-bind]")){let t=e.dataset.bind;if(!t)continue;let n=o.bindings[t];null!=n&&(e.textContent=String(n))}},s.resetSlot=function(e){e.replaceChildren(),e.className=""};class N{constructor(e,t,o,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=z(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class q{constructor(e,t,o,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=z(Math.max(Math.min(1,t),0),3),this.l=z(Math.max(Math.min(1,o),0),3),this.a=z(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,n=e.b/255,i=e.a,r=Math.max(t,o,n),s=Math.min(t,o,n),c=0,a=0,l=(s+r)/2,h=r-s;if(h>0){switch(a=Math.min(l<=.5?h/(2*l):h/(2-2*l),1),r){case t:c=(o-n)/h+(o<n?6:0);break;case o:c=(n-t)/h+2;break;case n:c=(t-o)/h+4}c*=60,c=Math.round(c)}return new q(c,a,l,i)}static _hue2rgb(e,t,o){return(o<0&&(o+=1),o>1&&(o-=1),o<1/6)?e+(t-e)*6*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){let t,o,n;let i=e.h/360,{s:r,l:s,a:c}=e;if(0===r)t=o=n=s;else{let e=s<.5?s*(1+r):s+r-s*r,c=2*s-e;t=q._hue2rgb(c,e,i+1/3),o=q._hue2rgb(c,e,i),n=q._hue2rgb(c,e,i-1/3)}return new N(Math.round(255*t),Math.round(255*o),Math.round(255*n),c)}}class G{constructor(e,t,o,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=z(Math.max(Math.min(1,t),0),3),this.v=z(Math.max(Math.min(1,o),0),3),this.a=z(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,n=e.b/255,i=Math.max(t,o,n),r=i-Math.min(t,o,n);return new G(Math.round(60*(0===r?0:i===t?((o-n)/r%6+6)%6:i===o?(n-t)/r+2:(t-o)/r+4)),0===i?0:r/i,i,e.a)}static toRGBA(e){let{h:t,s:o,v:n,a:i}=e,r=n*o,s=r*(1-Math.abs(t/60%2-1)),c=n-r,[a,l,h]=[0,0,0];return t<60?(a=r,l=s):t<120?(a=s,l=r):t<180?(l=r,h=s):t<240?(l=s,h=r):t<300?(a=s,h=r):t<=360&&(a=r,h=s),new N(a=Math.round((a+c)*255),l=Math.round((l+c)*255),h=Math.round((h+c)*255),i)}}function Q(e,t){return t.getPropertyValue(e).trim()}let j=class e{static from(t){return t instanceof e?t:X(t)||e.red}static fromCssVariable(t,o){return X(Q(t,o))||e.red}static fromHex(t){return Y(t)||e.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:q.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:G.fromRGBA(this.rgba)}constructor(e){if(e){if(e instanceof N)this.rgba=e;else if(e instanceof q)this._hsla=e,this.rgba=q.toRGBA(e);else if(e instanceof G)this._hsva=e,this.rgba=G.toRGBA(e);else throw Error("Invalid color ctor argument")}else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&N.equals(this.rgba,e.rgba)&&q.equals(this.hsla,e.hsla)&&G.equals(this.hsva,e.hsva)}getRelativeLuminance(){let t=e._relativeLuminanceForComponent(this.rgba.r);return z(.2126*t+.7152*e._relativeLuminanceForComponent(this.rgba.g)+.0722*e._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new J(new N(0,0,0,e.rgba.a));if(1===t)return new J(new N(255,255,255,e.rgba.a));let o=e.getRelativeLuminance(),n=20,i=(e,o)=>{let r=e.mix(o,.5),s=r.getRelativeLuminance();return!(1e-7>Math.abs(t-s))&&n--?s>t?i(e,r):i(r,o):r},r=(o>t?i(J.black,e):i(e,J.white)).rgba;return new J(new N(r.r,r.g,r.b,e.rgba.a))}(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(t){return new e(new q(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*t,this.hsla.a))}darken(t){return new e(new q(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*t,this.hsla.a))}transparent(t){let{r:o,g:n,b:i,a:r}=this.rgba;return new e(new N(o,n,i,r*t))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new e(new N(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(t){let o=t.rgba,n=this.rgba.a,i=o.a,r=n+i*(1-n);return r<1e-6?e.transparent:new e(new N(this.rgba.r*n/r+o.r*i*(1-n)/r,this.rgba.g*n/r+o.g*i*(1-n)/r,this.rgba.b*n/r+o.b*i*(1-n)/r,r))}mix(e,t){return function(e,t,o){let n=e.rgba,i=t.rgba;return new J(new N(n.r+o*(i.r-n.r),n.g+o*(i.g-n.g),n.b+o*(i.b-n.b),n.a+o*(i.a-n.a)))}(this,e,t)}makeOpaque(t){if(this.isOpaque()||1!==t.rgba.a)return this;let{r:o,g:n,b:i,a:r}=this.rgba;return new e(new N(t.rgba.r-r*(t.rgba.r-o),t.rgba.g-r*(t.rgba.g-n),t.rgba.b-r*(t.rgba.b-i),1))}flatten(...t){let o=t.reduceRight((t,o)=>e._flatten(o,t));return e._flatten(this,o)}static _flatten(t,o){let n=1-t.rgba.a;return new e(new N(n*o.rgba.r+t.rgba.a*t.rgba.r,n*o.rgba.g+t.rgba.a*t.rgba.g,n*o.rgba.b+t.rgba.a*t.rgba.b))}toString(){var e;return this._toString||(this._toString=(e=this,e.isOpaque()?`#${Z(e.rgba.r)}${Z(e.rgba.g)}${Z(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;let n=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(i-n)/i,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;let n=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(n-i)/n,e.darken(o)}};j.white=new j(new N(255,255,255,1)),j.black=new j(new N(0,0,0,1)),j.red=new j(new N(255,0,0,1)),j.blue=new j(new N(0,0,255,1)),j.green=new j(new N(0,255,0,1)),j.cyan=new j(new N(0,255,255,1)),j.lightgrey=new j(new N(211,211,211,1)),j.transparent=new j(new N(0,0,0,0));let J=j;function Z(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let K=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function X(e){let t;if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===L.Hash)return Y(e);let o=K.exec(e);if(null==o)return null;let n=o[1];switch(n){case"rgb":case"hsl":t=[parseInt(o[2],10),parseInt(o[3],10),parseInt(o[4],10),1];break;case"rgba":case"hsla":t=[parseInt(o[2],10),parseInt(o[3],10),parseInt(o[4],10),parseFloat(o[5])];break;default:return null}switch(n){case"rgb":case"rgba":return new J(new N(t[0],t[1],t[2],t[3]));case"hsl":case"hsla":return new J(new q(t[0],t[1],t[2],t[3]))}return J.red}function Y(e){let t=(e=e.trim()).length;if(0===t||e.charCodeAt(0)!==L.Hash)return null;switch(t){case 7:return new J(new N(16*ee(e.charCodeAt(1))+ee(e.charCodeAt(2)),16*ee(e.charCodeAt(3))+ee(e.charCodeAt(4)),16*ee(e.charCodeAt(5))+ee(e.charCodeAt(6)),1));case 9:{let t=16*ee(e.charCodeAt(1))+ee(e.charCodeAt(2));return new J(new N(t,16*ee(e.charCodeAt(3))+ee(e.charCodeAt(4)),16*ee(e.charCodeAt(5))+ee(e.charCodeAt(6)),(16*ee(e.charCodeAt(7))+ee(e.charCodeAt(8)))/255))}case 4:{let t=ee(e.charCodeAt(1)),o=ee(e.charCodeAt(2)),n=ee(e.charCodeAt(3));return new J(new N(16*t+t,16*o+o,16*n+n))}case 5:{let t=ee(e.charCodeAt(1)),o=ee(e.charCodeAt(2)),n=ee(e.charCodeAt(3)),i=ee(e.charCodeAt(4));return new J(new N(16*t+t,16*o+o,16*n+n,(16*i+i)/255))}default:return null}}function ee(e){switch(e){case L.Digit0:break;case L.Digit1:return 1;case L.Digit2:return 2;case L.Digit3:return 3;case L.Digit4:return 4;case L.Digit5:return 5;case L.Digit6:return 6;case L.Digit7:return 7;case L.Digit8:return 8;case L.Digit9:return 9;case L.a:case L.A:return 10;case L.b:case L.B:return 11;case L.c:case L.C:return 12;case L.d:case L.D:return 13;case L.e:case L.E:return 14;case L.f:case L.F:return 15}return 0}let et=class e{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(t,o,n)=>{null==this.listeners&&(this.listeners=new ei);let i=this.listeners.push(null==o?t:[t,o]),r={dispose:()=>{r.dispose=e._noop,this._disposed||i()}};return Array.isArray(n)&&n.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new ei);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};et._noop=function(){};let eo={done:!0,value:void 0},en=class e{constructor(t){this.element=t,this.next=e.Undefined,this.prev=e.Undefined}};en.Undefined=new en(void 0);class ei{constructor(){this._first=en.Undefined,this._last=en.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===en.Undefined}clear(){this._first=en.Undefined,this._last=en.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let o=new en(e);if(this._first===en.Undefined)this._first=o,this._last=o;else if(t){let e=this._last;this._last=o,o.prev=e,e.next=o}else{let e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===en.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===en.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==en.Undefined&&e.next!==en.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===en.Undefined&&e.next===en.Undefined?(this._first=en.Undefined,this._last=en.Undefined):e.next===en.Undefined?(this._last=this._last.prev,this._last.next=en.Undefined):e.prev===en.Undefined&&(this._first=this._first.next,this._first.prev=en.Undefined);this._size-=1}iterator(){let e;let t=this._first;return{next:function(){return t===en.Undefined?eo:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==en.Undefined;t=t.next)e.push(t.element);return e}}let er=new et,es=er.event;function ec(e){let t=document.documentElement,o=window.getComputedStyle(t),n=document.body.classList,i=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),r=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),s=t.style,c=Q("--vscode-editor-background",o),a=Q("--vscode-editor-foreground",o);a||(a=Q("--vscode-foreground",o));let l=Q("--color-background",o);return s.setProperty("--color-background--lighten-05",H(l,5)),s.setProperty("--color-background--darken-05",H(l,-5)),s.setProperty("--color-background--lighten-075",H(l,7.5)),s.setProperty("--color-background--darken-075",H(l,-7.5)),s.setProperty("--color-background--lighten-10",H(l,10)),s.setProperty("--color-background--darken-10",H(l,-10)),s.setProperty("--color-background--lighten-15",H(l,15)),s.setProperty("--color-background--darken-15",H(l,-15)),s.setProperty("--color-background--lighten-30",H(l,30)),s.setProperty("--color-background--darken-30",H(l,-30)),s.setProperty("--color-background--lighten-50",H(l,50)),s.setProperty("--color-background--darken-50",H(l,-50)),l=Q("--color-button-background",o),s.setProperty("--color-button-background--darken-30",H(l,-30)),l=Q("--color-highlight",o),s.setProperty("--color-highlight--75",V(l,75)),s.setProperty("--color-highlight--50",V(l,50)),s.setProperty("--color-highlight--25",V(l,25)),l=Q("--color-button-secondary-background",o),s.setProperty("--color-button-secondary-background--darken-30",H(l,-30)),l=Q("--color-foreground",o),s.setProperty("--color-foreground--85",V(l,85)),s.setProperty("--color-foreground--75",V(l,75)),s.setProperty("--color-foreground--65",V(l,65)),s.setProperty("--color-foreground--50",V(l,50)),l=Q("--color-link-foreground",o),s.setProperty("--color-link-foreground--darken-20",H(l,-20)),s.setProperty("--color-link-foreground--lighten-20",H(l,20)),l=Q("--color-alert-infoBackground",o),s.setProperty("--color-alert-infoHoverBackground",i?H(l,-5):H(l,5)),l=Q("--color-alert-warningBackground",o),s.setProperty("--color-alert-warningHoverBackground",i?H(l,-5):H(l,5)),l=Q("--color-alert-errorBackground",o),s.setProperty("--color-alert-errorHoverBackground",i?H(l,-5):H(l,5)),l=i?H(c,-5):H(c,5),s.setProperty("--color-alert-neutralBackground",l),s.setProperty("--color-alert-neutralHoverBackground",i?H(l,-5):H(l,5)),{colors:{background:c,foreground:a},computedStyle:o,isLightTheme:i,isHighContrastTheme:r,isInitializing:null==e}}var ea=Object.defineProperty,el=Object.getOwnPropertyDescriptor;let eh=0;function eb(){return 1073741824===eh?eh=1:eh++,`webview:${eh}`}let ef=new TextDecoder;class ed{constructor(e){this.appName=e;let t=[],o=ec();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(es(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",_.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=acquireVsCodeApi(),null!=this.state){let e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){let e=new MutationObserver(e=>{er.fire(ec(e))});return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame(()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(c.on(window,"message",e=>this.onMessageReceivedCore(e))),this.sendCommand(g,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}}),t.push(c.on(window,"pagehide",()=>{t?.forEach(e=>e.dispose()),this.bindDisposables?.forEach(e=>e.dispose()),this.bindDisposables=void 0}))}onMessageReceivedCore(e){let t=R.get(P),o=e.data;if(o.packed&&o.params instanceof Uint8Array){let n=function(e,t,...o){return(t?.provider??S).enabled(t?.logLevel??"info")?new W(e,t,...o):void 0}(D(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});o.params=JSON.parse(ef.decode(o.params)),n?.stop()}this.onMessageReceived(o)}bind(){this.bindDisposables?.forEach(e=>e.dispose()),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);let e=function(e,t){let o,n,i,r,s;function c(e){let o=e-(n??0);return null==n||o>=t||o<0}function a(){let e=Date.now();c(e)?l():s=setTimeout(a,t-(e-(n??0)))}function l(){return(s=void 0,o)?function(){let t=o,n=i;return o=i=void 0,r=e.apply(n,t)}():(o=i=void 0,r)}function h(...e){let l=Date.now(),b=c(l);return(o=e,i=this,n=l,b&&null==s)?s=setTimeout(a,t):null==s&&(s=setTimeout(a,t)),r}return h.cancel=function(){null!=s&&clearTimeout(s),o=n=i=s=void 0},h.flush=function(){return null!=s?l():r},h.pending=function(){return null!=s},h}(e=>{this.sendCommand(u,e)},150);this.bindDisposables.push(c.on(document,"focusin",t=>{let o=t.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==o)&&(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))}),c.on(document,"focusout",()=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))}))}log(e,...t){"string"==typeof e?_.log(e,...t):_.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){let o=eb();this.log(`${this.appName}.sendCommand(${o}): name=${e.method}`),this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,o){let n=eb();this.log(`${this.appName}.sendCommandWithCompletion(${n}): name=${e.method}`);let i=new Promise((e,t)=>{let i;let r=[c.on(window,"message",t=>{d(o,t.data,o=>{t.data.completionId===n&&(r.forEach(e=>e.dispose()),queueMicrotask(()=>e(o)))})}),{dispose:function(){null!=i&&(clearTimeout(i),i=void 0)}}];i=setTimeout(()=>{i=void 0,r.forEach(e=>e.dispose()),t(Error(`Timed out waiting for completion of ${o.method}`))},6e4)});return this.postMessage({id:n,method:e.method,params:t,completionId:n}),i}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}((e,t,o,n)=>{for(var i,r=n>1?void 0:n?el(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&ea(t,o,r)})([function(e,t=!1){let o,n,i,r;let s=0,c=!1,a=!1,l=!0;null!=e&&({args:o,enter:n,exit:i,prefix:r,logThreshold:s=0,scoped:c=!0,singleLine:a=!1,timed:l=!0}=e),s>0&&(a=!0,l=!0),l&&(c=!0);let h=_.isDebugging,b=t?_.debug:_.log,f=h?"debug":"info";return(e,t,d)=>{let g,u;if("function"==typeof d.value?(g=d.value,u="value"):"function"==typeof d.get&&(g=d.get,u="get"),null==g||null==u)throw Error("Not supported");let p=!1!==o?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),o=(t=(t=t.replace(y,"")||t).slice(0,t.indexOf("{"))).indexOf("("),n=t.indexOf(")");o=o>=0?o+1:0,n=n>0?n:t.indexOf("="),t=t.slice(o,n),t=`(${t})`;let i=v.exec(t);return null!=i?i[1].split(",").map(e=>e.trim().replace($,"")):[]}(g):[];d[u]=function(...e){var d,u;let m,v;if(!h&&!_.enabled(f))return g.apply(this,e);let y=x(),$=this!=null?this.constructor?.[U]?.(this,C(this))??C(this):void 0,k=$?c?`[${y.toString(16).padStart(5)}] ${$}.${t}`:`${$}.${t}`:t;null!=r&&(k=r({id:y,instance:this,instanceName:$??"",name:t,prefix:k},...e)),c&&(d=m={scopeId:y,prefix:k},R.set(y,d));let A=null!=n?n(...e):"";if(!1===o||0===e.length)v="",a||b.call(_,`${k}${A}`);else{let t,n,i,r;v="";let s=-1;for(r of e){if(n=p[++s],null!=(t=o?.[s])){if("boolean"==typeof t)continue;if(v.length>0&&(v+=", "),"string"==typeof t){v+=t;continue}i=String(t(r))}else v.length>0&&(v+=", "),i=_.toLoggable(r);v+=n?`${n}=${i}`:i}a||b.call(_,v?`${k}${A}(${v})`:`${k}${A}`)}if(a||l||null!=i){let t;let o=l?w():void 0,n=e=>{let t=void 0!==o?` [${M(o)}ms]`:"";a?_.error(e,v?`${k}${A}(${v})`:`${k}${A}`,m?.exitDetails?`failed${m.exitDetails}${t}`:`failed${t}`):_.error(e,k,m?.exitDetails?`failed${m.exitDetails}${t}`:`failed${t}`),c&&R.delete(y)};try{t=g.apply(this,e)}catch(e){throw n(e),e}let r=e=>{let t,n,r,l;if(null!=o?(t=M(o))>500?(n=_.warn,r=` [*${t}ms] (slow)`):(n=b,r=` [${t}ms]`):(r="",n=b),null!=i){if("function"==typeof i)try{l=i(e)}catch(e){l=`@log.exit error: ${e}`}else!0===i&&(l=`returned ${_.toLoggable(e)}`)}else m?.exitFailed?(l=m.exitFailed,n=_.error):l="completed";a?(0===s||t>s)&&n.call(_,v?`${k}${A}(${v}) ${l}${m?.exitDetails||""}${r}`:`${k}${A} ${l}${m?.exitDetails||""}${r}`):n.call(_,v?`${k}(${v}) ${l}${m?.exitDetails||""}${r}`:`${k} ${l}${m?.exitDetails||""}${r}`),c&&R.delete(y)};return null!=t&&null!=(u=t)&&(u instanceof Promise||"function"==typeof u?.then)?t.then(r,n):r(t),t}return g.apply(this,e)}}}({args:{0:e=>`${e.data.id}, method=${e.data.method}`}},!0)],ed.prototype,"onMessageReceivedCore",1);let eg=globalThis,eu=eg.ShadowRoot&&(void 0===eg.ShadyCSS||eg.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ep=Symbol(),em=new WeakMap;class ew{constructor(e,t,o){if(this._$cssResult$=!0,o!==ep)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(eu&&void 0===e){let o=void 0!==t&&1===t.length;o&&(e=em.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&em.set(t,e))}return e}toString(){return this.cssText}}let ev=e=>new ew("string"==typeof e?e:e+"",void 0,ep),ey=(e,...t)=>new ew(1===e.length?e[0]:t.reduce((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]),e,ep),e$=(e,t)=>{if(eu)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let o of t){let t=document.createElement("style"),n=eg.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=o.cssText,e.appendChild(t)}},ek=eu?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return ev(t)})(e):e,{is:e_,defineProperty:eA,getOwnPropertyDescriptor:eC,getOwnPropertyNames:eS,getOwnPropertySymbols:eR,getPrototypeOf:eP}=Object,eD=globalThis,ex=eD.trustedTypes,eL=ex?ex.emptyScript:"",eO=eD.reactiveElementPolyfillSupport,eT=(e,t)=>e,eE={toAttribute(e,t){switch(t){case Boolean:e=e?eL:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},eF=(e,t)=>!e_(e,t),eI={attribute:!0,type:String,converter:eE,reflect:!1,hasChanged:eF};Symbol.metadata??=Symbol("metadata"),eD.litPropertyMetadata??=new WeakMap;class eM extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=eI){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&eA(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){let{get:n,set:i}=eC(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){let r=n?.call(this);i.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??eI}static _$Ei(){if(this.hasOwnProperty(eT("elementProperties")))return;let e=eP(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(eT("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(eT("properties"))){let e=this.properties;for(let t of[...eS(e),...eR(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,o]of t)this.elementProperties.set(e,o)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let o of new Set(e.flat(1/0).reverse()))t.unshift(ek(o));else void 0!==e&&t.push(ek(e));return t}static _$Eu(e,t){let o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return e$(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){let o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){let i=(void 0!==o.converter?.toAttribute?o.converter:eE).toAttribute(t,o.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){let o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){let e=o.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:eE;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,n=!1,i){if(void 0!==e){if(!((o??=this.constructor.getPropertyOptions(e)).hasChanged??eF)(n?i:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$E_?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}}eM.elementStyles=[],eM.shadowRootOptions={mode:"open"},eM[eT("elementProperties")]=new Map,eM[eT("finalized")]=new Map,eO?.({ReactiveElement:eM}),(eD.reactiveElementVersions??=[]).push("2.0.2");let eU=globalThis,eW=eU.trustedTypes,eB=eW?eW.createPolicy("lit-html",{createHTML:e=>e}):void 0,eH="$lit$",eV=`lit$${(Math.random()+"").slice(9)}$`,ez="?"+eV,eN=`<${ez}>`,eq=document,eG=()=>eq.createComment(""),eQ=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ej=Array.isArray,eJ=e=>ej(e)||"function"==typeof e?.[Symbol.iterator],eZ="[ 	\n\f\r]",eK=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,eX=/-->/g,eY=/>/g,e0=RegExp(`>|${eZ}(?:([^\\s"'>=/]+)(${eZ}*=${eZ}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),e1=/'/g,e5=/"/g,e2=/^(?:script|style|textarea|title)$/i,e6=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),e7=e6(1),e3=(e6(2),Symbol.for("lit-noChange")),e8=Symbol.for("lit-nothing"),e9=new WeakMap,e4=eq.createTreeWalker(eq,129);function te(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==eB?eB.createHTML(t):t}let tt=(e,t)=>{let o=e.length-1,n=[],i,r=2===t?"<svg>":"",s=eK;for(let t=0;t<o;t++){let o=e[t],c,a,l=-1,h=0;for(;h<o.length&&(s.lastIndex=h,null!==(a=s.exec(o)));)h=s.lastIndex,s===eK?"!--"===a[1]?s=eX:void 0!==a[1]?s=eY:void 0!==a[2]?(e2.test(a[2])&&(i=RegExp("</"+a[2],"g")),s=e0):void 0!==a[3]&&(s=e0):s===e0?">"===a[0]?(s=i??eK,l=-1):void 0===a[1]?l=-2:(l=s.lastIndex-a[2].length,c=a[1],s=void 0===a[3]?e0:'"'===a[3]?e5:e1):s===e5||s===e1?s=e0:s===eX||s===eY?s=eK:(s=e0,i=void 0);let b=s===e0&&e[t+1].startsWith("/>")?" ":"";r+=s===eK?o+eN:l>=0?(n.push(c),o.slice(0,l)+eH+o.slice(l)+eV+b):o+eV+(-2===l?t:b)}return[te(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),n]};class to{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0,s=e.length-1,c=this.parts,[a,l]=tt(e,t);if(this.el=to.createElement(a,o),e4.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=e4.nextNode())&&c.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(let e of n.getAttributeNames())if(e.endsWith(eH)){let t=l[r++],o=n.getAttribute(e).split(eV),s=/([.?@])?(.*)/.exec(t);c.push({type:1,index:i,name:s[2],strings:o,ctor:"."===s[1]?tc:"?"===s[1]?ta:"@"===s[1]?tl:ts}),n.removeAttribute(e)}else e.startsWith(eV)&&(c.push({type:6,index:i}),n.removeAttribute(e));if(e2.test(n.tagName)){let e=n.textContent.split(eV),t=e.length-1;if(t>0){n.textContent=eW?eW.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],eG()),e4.nextNode(),c.push({type:2,index:++i});n.append(e[t],eG())}}}else if(8===n.nodeType){if(n.data===ez)c.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(eV,e+1));)c.push({type:7,index:i}),e+=eV.length-1}}i++}}static createElement(e,t){let o=eq.createElement("template");return o.innerHTML=e,o}}function tn(e,t,o=e,n){if(t===e3)return t;let i=void 0!==n?o._$Co?.[n]:o._$Cl,r=eQ(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),void 0===r?i=void 0:(i=new r(e))._$AT(e,o,n),void 0!==n?(o._$Co??=[])[n]=i:o._$Cl=i),void 0!==i&&(t=tn(e,i._$AS(e,t.values),i,n)),t}class ti{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??eq).importNode(t,!0);e4.currentNode=n;let i=e4.nextNode(),r=0,s=0,c=o[0];for(;void 0!==c;){if(r===c.index){let t;2===c.type?t=new tr(i,i.nextSibling,this,e):1===c.type?t=new c.ctor(i,c.name,c.strings,this,e):6===c.type&&(t=new th(i,this,e)),this._$AV.push(t),c=o[++s]}r!==c?.index&&(i=e4.nextNode(),r++)}return e4.currentNode=eq,n}p(e){let t=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class tr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=e8,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){eQ(e=tn(this,e,t))?e===e8||null==e||""===e?(this._$AH!==e8&&this._$AR(),this._$AH=e8):e!==this._$AH&&e!==e3&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):eJ(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==e8&&eQ(this._$AH)?this._$AA.nextSibling.data=e:this.$(eq.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=to.createElement(te(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{let e=new ti(n,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=e9.get(e.strings);return void 0===t&&e9.set(e.strings,t=new to(e)),t}T(e){ej(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,n=0;for(let i of e)n===t.length?t.push(o=new tr(this.k(eG()),this.k(eG()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ts{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,i){this.type=1,this._$AH=e8,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=e8}_$AI(e,t=this,o,n){let i=this.strings,r=!1;if(void 0===i)(r=!eQ(e=tn(this,e,t,0))||e!==this._$AH&&e!==e3)&&(this._$AH=e);else{let n,s;let c=e;for(e=i[0],n=0;n<i.length-1;n++)(s=tn(this,c[o+n],t,n))===e3&&(s=this._$AH[n]),r||=!eQ(s)||s!==this._$AH[n],s===e8?e=e8:e!==e8&&(e+=(s??"")+i[n+1]),this._$AH[n]=s}r&&!n&&this.O(e)}O(e){e===e8?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class tc extends ts{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===e8?void 0:e}}class ta extends ts{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==e8)}}class tl extends ts{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){if((e=tn(this,e,t,0)??e8)===e3)return;let o=this._$AH,n=e===e8&&o!==e8||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==e8&&(o===e8||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class th{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){tn(this,e)}}let tb=eU.litHtmlPolyfillSupport;tb?.(to,tr),(eU.litHtmlVersions??=[]).push("3.1.0");let tf=(e,t,o)=>{let n=o?.renderBefore??t,i=n._$litPart$;if(void 0===i){let e=o?.renderBefore??null;n._$litPart$=i=new tr(t.insertBefore(eG(),e),e,void 0,o??{})}return i._$AI(e),i};class td extends eM{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=tf(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return e3}}td._$litElement$=!0,td.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:td});let tg=globalThis.litElementPolyfillSupport;tg?.({LitElement:td}),(globalThis.litElementVersions??=[]).push("4.0.2");let tu=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},tp={attribute:!0,type:String,converter:eE,reflect:!1,hasChanged:eF},tm=(e=tp,t,o)=>{let{kind:n,metadata:i}=o,r=globalThis.litPropertyMetadata.get(i);if(void 0===r&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(o.name,e),"accessor"===n){let{name:n}=o;return{set(o){let i=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){let{name:n}=o;return function(o){let i=this[n];t.call(this,o),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function tw(e){return(t,o)=>"object"==typeof o?tm(e,t,o):((e,t,o)=>{let n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}ey`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}
`;let tv=ey`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,ty=ey`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`;ey`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${tv}
	}
	a:hover {
		text-decoration: underline;
	}
`,ey`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}
`;var t$=Object.defineProperty,tk=Object.getOwnPropertyDescriptor,t_=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?tk(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&t$(t,o,r),r};let tA=class extends td{constructor(){super(...arguments),this.full=!1,this.disabled=!1,this.tabIndex=0}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.setAttribute("aria-disabled",this.disabled.toString()))}render(){let e=e7`<slot></slot>`;return null!=this.href?e7`<a href=${this.href}>${e}</a>`:e}};tA.styles=[ty,ey`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem 1.1rem;
				--button-compact-padding: 0.4rem 0.4rem;
				--button-line-height: 1.694;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius);
			}

			:host(:not([href])) {
				padding: var(--button-padding);
			}

			:host([href]) > a {
				display: inline-block;
				padding: var(--button-padding);

				color: inherit;
				text-decoration: none;

				width: 100%;
				height: 100%;
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus) {
				${tv}
			}

			:host([full]) {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-padding: 0.4rem;
				--button-line-height: 1.6;
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) {
				padding: var(--button-compact-padding);
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}
		`],t_([tw({type:Boolean,reflect:!0})],tA.prototype,"full",2),t_([tw({type:Boolean,reflect:!0})],tA.prototype,"disabled",2),t_([tw({reflect:!0})],tA.prototype,"density",2),t_([tw()],tA.prototype,"href",2),t_([tw({reflect:!0})],tA.prototype,"role",1),t_([tw()],tA.prototype,"appearance",2),t_([tw({type:Number,reflect:!0})],tA.prototype,"tabIndex",2),tA=t_([tu("gl-button")],tA);var tC=Object.defineProperty,tS=Object.getOwnPropertyDescriptor,tR=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?tS(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&tC(t,o,r),r};let tP=class extends td{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};tP.styles=ey`
		:host {
			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: text-bottom;
			letter-spacing: normal;
		}

		:host([icon='add']):before {
			content: '\\ea60';
		}
		:host([icon='plus']):before {
			content: '\\ea60';
		}
		:host([icon='gist-new']):before {
			content: '\\ea60';
		}
		:host([icon='repo-create']):before {
			content: '\\ea60';
		}
		:host([icon='lightbulb']):before {
			content: '\\ea61';
		}
		:host([icon='light-bulb']):before {
			content: '\\ea61';
		}
		:host([icon='repo']):before {
			content: '\\ea62';
		}
		:host([icon='repo-delete']):before {
			content: '\\ea62';
		}
		:host([icon='gist-fork']):before {
			content: '\\ea63';
		}
		:host([icon='repo-forked']):before {
			content: '\\ea63';
		}
		:host([icon='git-pull-request']):before {
			content: '\\ea64';
		}
		:host([icon='git-pull-request-abandoned']):before {
			content: '\\ea64';
		}
		:host([icon='record-keys']):before {
			content: '\\ea65';
		}
		:host([icon='keyboard']):before {
			content: '\\ea65';
		}
		:host([icon='tag']):before {
			content: '\\ea66';
		}
		:host([icon='tag-add']):before {
			content: '\\ea66';
		}
		:host([icon='tag-remove']):before {
			content: '\\ea66';
		}
		:host([icon='person']):before {
			content: '\\ea67';
		}
		:host([icon='person-follow']):before {
			content: '\\ea67';
		}
		:host([icon='person-outline']):before {
			content: '\\ea67';
		}
		:host([icon='person-filled']):before {
			content: '\\ea67';
		}
		:host([icon='git-branch']):before {
			content: '\\ea68';
		}
		:host([icon='git-branch-create']):before {
			content: '\\ea68';
		}
		:host([icon='git-branch-delete']):before {
			content: '\\ea68';
		}
		:host([icon='source-control']):before {
			content: '\\ea68';
		}
		:host([icon='mirror']):before {
			content: '\\ea69';
		}
		:host([icon='mirror-public']):before {
			content: '\\ea69';
		}
		:host([icon='star']):before {
			content: '\\ea6a';
		}
		:host([icon='star-add']):before {
			content: '\\ea6a';
		}
		:host([icon='star-delete']):before {
			content: '\\ea6a';
		}
		:host([icon='star-empty']):before {
			content: '\\ea6a';
		}
		:host([icon='comment']):before {
			content: '\\ea6b';
		}
		:host([icon='comment-add']):before {
			content: '\\ea6b';
		}
		:host([icon='alert']):before {
			content: '\\ea6c';
		}
		:host([icon='warning']):before {
			content: '\\ea6c';
		}
		:host([icon='search']):before {
			content: '\\ea6d';
		}
		:host([icon='search-save']):before {
			content: '\\ea6d';
		}
		:host([icon='log-out']):before {
			content: '\\ea6e';
		}
		:host([icon='sign-out']):before {
			content: '\\ea6e';
		}
		:host([icon='log-in']):before {
			content: '\\ea6f';
		}
		:host([icon='sign-in']):before {
			content: '\\ea6f';
		}
		:host([icon='eye']):before {
			content: '\\ea70';
		}
		:host([icon='eye-unwatch']):before {
			content: '\\ea70';
		}
		:host([icon='eye-watch']):before {
			content: '\\ea70';
		}
		:host([icon='circle-filled']):before {
			content: '\\ea71';
		}
		:host([icon='primitive-dot']):before {
			content: '\\ea71';
		}
		:host([icon='close-dirty']):before {
			content: '\\ea71';
		}
		:host([icon='debug-breakpoint']):before {
			content: '\\ea71';
		}
		:host([icon='debug-breakpoint-disabled']):before {
			content: '\\ea71';
		}
		:host([icon='debug-hint']):before {
			content: '\\ea71';
		}
		:host([icon='primitive-square']):before {
			content: '\\ea72';
		}
		:host([icon='edit']):before {
			content: '\\ea73';
		}
		:host([icon='pencil']):before {
			content: '\\ea73';
		}
		:host([icon='info']):before {
			content: '\\ea74';
		}
		:host([icon='issue-opened']):before {
			content: '\\ea74';
		}
		:host([icon='gist-private']):before {
			content: '\\ea75';
		}
		:host([icon='git-fork-private']):before {
			content: '\\ea75';
		}
		:host([icon='lock']):before {
			content: '\\ea75';
		}
		:host([icon='mirror-private']):before {
			content: '\\ea75';
		}
		:host([icon='close']):before {
			content: '\\ea76';
		}
		:host([icon='remove-close']):before {
			content: '\\ea76';
		}
		:host([icon='x']):before {
			content: '\\ea76';
		}
		:host([icon='repo-sync']):before {
			content: '\\ea77';
		}
		:host([icon='sync']):before {
			content: '\\ea77';
		}
		:host([icon='clone']):before {
			content: '\\ea78';
		}
		:host([icon='desktop-download']):before {
			content: '\\ea78';
		}
		:host([icon='beaker']):before {
			content: '\\ea79';
		}
		:host([icon='microscope']):before {
			content: '\\ea79';
		}
		:host([icon='vm']):before {
			content: '\\ea7a';
		}
		:host([icon='device-desktop']):before {
			content: '\\ea7a';
		}
		:host([icon='file']):before {
			content: '\\ea7b';
		}
		:host([icon='file-text']):before {
			content: '\\ea7b';
		}
		:host([icon='more']):before {
			content: '\\ea7c';
		}
		:host([icon='ellipsis']):before {
			content: '\\ea7c';
		}
		:host([icon='kebab-horizontal']):before {
			content: '\\ea7c';
		}
		:host([icon='mail-reply']):before {
			content: '\\ea7d';
		}
		:host([icon='reply']):before {
			content: '\\ea7d';
		}
		:host([icon='organization']):before {
			content: '\\ea7e';
		}
		:host([icon='organization-filled']):before {
			content: '\\ea7e';
		}
		:host([icon='organization-outline']):before {
			content: '\\ea7e';
		}
		:host([icon='new-file']):before {
			content: '\\ea7f';
		}
		:host([icon='file-add']):before {
			content: '\\ea7f';
		}
		:host([icon='new-folder']):before {
			content: '\\ea80';
		}
		:host([icon='file-directory-create']):before {
			content: '\\ea80';
		}
		:host([icon='trash']):before {
			content: '\\ea81';
		}
		:host([icon='trashcan']):before {
			content: '\\ea81';
		}
		:host([icon='history']):before {
			content: '\\ea82';
		}
		:host([icon='clock']):before {
			content: '\\ea82';
		}
		:host([icon='folder']):before {
			content: '\\ea83';
		}
		:host([icon='file-directory']):before {
			content: '\\ea83';
		}
		:host([icon='symbol-folder']):before {
			content: '\\ea83';
		}
		:host([icon='logo-github']):before {
			content: '\\ea84';
		}
		:host([icon='mark-github']):before {
			content: '\\ea84';
		}
		:host([icon='github']):before {
			content: '\\ea84';
		}
		:host([icon='terminal']):before {
			content: '\\ea85';
		}
		:host([icon='console']):before {
			content: '\\ea85';
		}
		:host([icon='repl']):before {
			content: '\\ea85';
		}
		:host([icon='zap']):before {
			content: '\\ea86';
		}
		:host([icon='symbol-event']):before {
			content: '\\ea86';
		}
		:host([icon='error']):before {
			content: '\\ea87';
		}
		:host([icon='stop']):before {
			content: '\\ea87';
		}
		:host([icon='variable']):before {
			content: '\\ea88';
		}
		:host([icon='symbol-variable']):before {
			content: '\\ea88';
		}
		:host([icon='array']):before {
			content: '\\ea8a';
		}
		:host([icon='symbol-array']):before {
			content: '\\ea8a';
		}
		:host([icon='symbol-module']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-package']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-namespace']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-object']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-method']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-function']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-constructor']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-boolean']):before {
			content: '\\ea8f';
		}
		:host([icon='symbol-null']):before {
			content: '\\ea8f';
		}
		:host([icon='symbol-numeric']):before {
			content: '\\ea90';
		}
		:host([icon='symbol-number']):before {
			content: '\\ea90';
		}
		:host([icon='symbol-structure']):before {
			content: '\\ea91';
		}
		:host([icon='symbol-struct']):before {
			content: '\\ea91';
		}
		:host([icon='symbol-parameter']):before {
			content: '\\ea92';
		}
		:host([icon='symbol-type-parameter']):before {
			content: '\\ea92';
		}
		:host([icon='symbol-key']):before {
			content: '\\ea93';
		}
		:host([icon='symbol-text']):before {
			content: '\\ea93';
		}
		:host([icon='symbol-reference']):before {
			content: '\\ea94';
		}
		:host([icon='go-to-file']):before {
			content: '\\ea94';
		}
		:host([icon='symbol-enum']):before {
			content: '\\ea95';
		}
		:host([icon='symbol-value']):before {
			content: '\\ea95';
		}
		:host([icon='symbol-ruler']):before {
			content: '\\ea96';
		}
		:host([icon='symbol-unit']):before {
			content: '\\ea96';
		}
		:host([icon='activate-breakpoints']):before {
			content: '\\ea97';
		}
		:host([icon='archive']):before {
			content: '\\ea98';
		}
		:host([icon='arrow-both']):before {
			content: '\\ea99';
		}
		:host([icon='arrow-down']):before {
			content: '\\ea9a';
		}
		:host([icon='arrow-left']):before {
			content: '\\ea9b';
		}
		:host([icon='arrow-right']):before {
			content: '\\ea9c';
		}
		:host([icon='arrow-small-down']):before {
			content: '\\ea9d';
		}
		:host([icon='arrow-small-left']):before {
			content: '\\ea9e';
		}
		:host([icon='arrow-small-right']):before {
			content: '\\ea9f';
		}
		:host([icon='arrow-small-up']):before {
			content: '\\eaa0';
		}
		:host([icon='arrow-up']):before {
			content: '\\eaa1';
		}
		:host([icon='bell']):before {
			content: '\\eaa2';
		}
		:host([icon='bold']):before {
			content: '\\eaa3';
		}
		:host([icon='book']):before {
			content: '\\eaa4';
		}
		:host([icon='bookmark']):before {
			content: '\\eaa5';
		}
		:host([icon='debug-breakpoint-conditional-unverified']):before {
			content: '\\eaa6';
		}
		:host([icon='debug-breakpoint-conditional']):before {
			content: '\\eaa7';
		}
		:host([icon='debug-breakpoint-conditional-disabled']):before {
			content: '\\eaa7';
		}
		:host([icon='debug-breakpoint-data-unverified']):before {
			content: '\\eaa8';
		}
		:host([icon='debug-breakpoint-data']):before {
			content: '\\eaa9';
		}
		:host([icon='debug-breakpoint-data-disabled']):before {
			content: '\\eaa9';
		}
		:host([icon='debug-breakpoint-log-unverified']):before {
			content: '\\eaaa';
		}
		:host([icon='debug-breakpoint-log']):before {
			content: '\\eaab';
		}
		:host([icon='debug-breakpoint-log-disabled']):before {
			content: '\\eaab';
		}
		:host([icon='briefcase']):before {
			content: '\\eaac';
		}
		:host([icon='broadcast']):before {
			content: '\\eaad';
		}
		:host([icon='browser']):before {
			content: '\\eaae';
		}
		:host([icon='bug']):before {
			content: '\\eaaf';
		}
		:host([icon='calendar']):before {
			content: '\\eab0';
		}
		:host([icon='case-sensitive']):before {
			content: '\\eab1';
		}
		:host([icon='check']):before {
			content: '\\eab2';
		}
		:host([icon='checklist']):before {
			content: '\\eab3';
		}
		:host([icon='chevron-down']):before {
			content: '\\eab4';
		}
		:host([icon='chevron-left']):before {
			content: '\\eab5';
		}
		:host([icon='chevron-right']):before {
			content: '\\eab6';
		}
		:host([icon='chevron-up']):before {
			content: '\\eab7';
		}
		:host([icon='chrome-close']):before {
			content: '\\eab8';
		}
		:host([icon='chrome-maximize']):before {
			content: '\\eab9';
		}
		:host([icon='chrome-minimize']):before {
			content: '\\eaba';
		}
		:host([icon='chrome-restore']):before {
			content: '\\eabb';
		}
		:host([icon='circle-outline']):before {
			content: '\\eabc';
		}
		:host([icon='debug-breakpoint-unverified']):before {
			content: '\\eabc';
		}
		:host([icon='circle-slash']):before {
			content: '\\eabd';
		}
		:host([icon='circuit-board']):before {
			content: '\\eabe';
		}
		:host([icon='clear-all']):before {
			content: '\\eabf';
		}
		:host([icon='clippy']):before {
			content: '\\eac0';
		}
		:host([icon='close-all']):before {
			content: '\\eac1';
		}
		:host([icon='cloud-download']):before {
			content: '\\eac2';
		}
		:host([icon='cloud-upload']):before {
			content: '\\eac3';
		}
		:host([icon='code']):before {
			content: '\\eac4';
		}
		:host([icon='collapse-all']):before {
			content: '\\eac5';
		}
		:host([icon='color-mode']):before {
			content: '\\eac6';
		}
		:host([icon='comment-discussion']):before {
			content: '\\eac7';
		}
		:host([icon='credit-card']):before {
			content: '\\eac9';
		}
		:host([icon='dash']):before {
			content: '\\eacc';
		}
		:host([icon='dashboard']):before {
			content: '\\eacd';
		}
		:host([icon='database']):before {
			content: '\\eace';
		}
		:host([icon='debug-continue']):before {
			content: '\\eacf';
		}
		:host([icon='debug-disconnect']):before {
			content: '\\ead0';
		}
		:host([icon='debug-pause']):before {
			content: '\\ead1';
		}
		:host([icon='debug-restart']):before {
			content: '\\ead2';
		}
		:host([icon='debug-start']):before {
			content: '\\ead3';
		}
		:host([icon='debug-step-into']):before {
			content: '\\ead4';
		}
		:host([icon='debug-step-out']):before {
			content: '\\ead5';
		}
		:host([icon='debug-step-over']):before {
			content: '\\ead6';
		}
		:host([icon='debug-stop']):before {
			content: '\\ead7';
		}
		:host([icon='debug']):before {
			content: '\\ead8';
		}
		:host([icon='device-camera-video']):before {
			content: '\\ead9';
		}
		:host([icon='device-camera']):before {
			content: '\\eada';
		}
		:host([icon='device-mobile']):before {
			content: '\\eadb';
		}
		:host([icon='diff-added']):before {
			content: '\\eadc';
		}
		:host([icon='diff-ignored']):before {
			content: '\\eadd';
		}
		:host([icon='diff-modified']):before {
			content: '\\eade';
		}
		:host([icon='diff-removed']):before {
			content: '\\eadf';
		}
		:host([icon='diff-renamed']):before {
			content: '\\eae0';
		}
		:host([icon='diff']):before {
			content: '\\eae1';
		}
		:host([icon='discard']):before {
			content: '\\eae2';
		}
		:host([icon='editor-layout']):before {
			content: '\\eae3';
		}
		:host([icon='empty-window']):before {
			content: '\\eae4';
		}
		:host([icon='exclude']):before {
			content: '\\eae5';
		}
		:host([icon='extensions']):before {
			content: '\\eae6';
		}
		:host([icon='eye-closed']):before {
			content: '\\eae7';
		}
		:host([icon='file-binary']):before {
			content: '\\eae8';
		}
		:host([icon='file-code']):before {
			content: '\\eae9';
		}
		:host([icon='file-media']):before {
			content: '\\eaea';
		}
		:host([icon='file-pdf']):before {
			content: '\\eaeb';
		}
		:host([icon='file-submodule']):before {
			content: '\\eaec';
		}
		:host([icon='file-symlink-directory']):before {
			content: '\\eaed';
		}
		:host([icon='file-symlink-file']):before {
			content: '\\eaee';
		}
		:host([icon='file-zip']):before {
			content: '\\eaef';
		}
		:host([icon='files']):before {
			content: '\\eaf0';
		}
		:host([icon='filter']):before {
			content: '\\eaf1';
		}
		:host([icon='flame']):before {
			content: '\\eaf2';
		}
		:host([icon='fold-down']):before {
			content: '\\eaf3';
		}
		:host([icon='fold-up']):before {
			content: '\\eaf4';
		}
		:host([icon='fold']):before {
			content: '\\eaf5';
		}
		:host([icon='folder-active']):before {
			content: '\\eaf6';
		}
		:host([icon='folder-opened']):before {
			content: '\\eaf7';
		}
		:host([icon='gear']):before {
			content: '\\eaf8';
		}
		:host([icon='gift']):before {
			content: '\\eaf9';
		}
		:host([icon='gist-secret']):before {
			content: '\\eafa';
		}
		:host([icon='gist']):before {
			content: '\\eafb';
		}
		:host([icon='git-commit']):before {
			content: '\\eafc';
		}
		:host([icon='git-compare']):before {
			content: '\\eafd';
		}
		:host([icon='compare-changes']):before {
			content: '\\eafd';
		}
		:host([icon='git-merge']):before {
			content: '\\eafe';
		}
		:host([icon='github-action']):before {
			content: '\\eaff';
		}
		:host([icon='github-alt']):before {
			content: '\\eb00';
		}
		:host([icon='globe']):before {
			content: '\\eb01';
		}
		:host([icon='grabber']):before {
			content: '\\eb02';
		}
		:host([icon='graph']):before {
			content: '\\eb03';
		}
		:host([icon='gripper']):before {
			content: '\\eb04';
		}
		:host([icon='heart']):before {
			content: '\\eb05';
		}
		:host([icon='home']):before {
			content: '\\eb06';
		}
		:host([icon='horizontal-rule']):before {
			content: '\\eb07';
		}
		:host([icon='hubot']):before {
			content: '\\eb08';
		}
		:host([icon='inbox']):before {
			content: '\\eb09';
		}
		:host([icon='issue-reopened']):before {
			content: '\\eb0b';
		}
		:host([icon='issues']):before {
			content: '\\eb0c';
		}
		:host([icon='italic']):before {
			content: '\\eb0d';
		}
		:host([icon='jersey']):before {
			content: '\\eb0e';
		}
		:host([icon='json']):before {
			content: '\\eb0f';
		}
		:host([icon='kebab-vertical']):before {
			content: '\\eb10';
		}
		:host([icon='key']):before {
			content: '\\eb11';
		}
		:host([icon='law']):before {
			content: '\\eb12';
		}
		:host([icon='lightbulb-autofix']):before {
			content: '\\eb13';
		}
		:host([icon='link-external']):before {
			content: '\\eb14';
		}
		:host([icon='link']):before {
			content: '\\eb15';
		}
		:host([icon='list-ordered']):before {
			content: '\\eb16';
		}
		:host([icon='list-unordered']):before {
			content: '\\eb17';
		}
		:host([icon='live-share']):before {
			content: '\\eb18';
		}
		:host([icon='loading']):before {
			content: '\\eb19';
		}
		:host([icon='location']):before {
			content: '\\eb1a';
		}
		:host([icon='mail-read']):before {
			content: '\\eb1b';
		}
		:host([icon='mail']):before {
			content: '\\eb1c';
		}
		:host([icon='markdown']):before {
			content: '\\eb1d';
		}
		:host([icon='megaphone']):before {
			content: '\\eb1e';
		}
		:host([icon='mention']):before {
			content: '\\eb1f';
		}
		:host([icon='milestone']):before {
			content: '\\eb20';
		}
		:host([icon='mortar-board']):before {
			content: '\\eb21';
		}
		:host([icon='move']):before {
			content: '\\eb22';
		}
		:host([icon='multiple-windows']):before {
			content: '\\eb23';
		}
		:host([icon='mute']):before {
			content: '\\eb24';
		}
		:host([icon='no-newline']):before {
			content: '\\eb25';
		}
		:host([icon='note']):before {
			content: '\\eb26';
		}
		:host([icon='octoface']):before {
			content: '\\eb27';
		}
		:host([icon='open-preview']):before {
			content: '\\eb28';
		}
		:host([icon='package']):before {
			content: '\\eb29';
		}
		:host([icon='paintcan']):before {
			content: '\\eb2a';
		}
		:host([icon='pin']):before {
			content: '\\eb2b';
		}
		:host([icon='play']):before {
			content: '\\eb2c';
		}
		:host([icon='run']):before {
			content: '\\eb2c';
		}
		:host([icon='plug']):before {
			content: '\\eb2d';
		}
		:host([icon='preserve-case']):before {
			content: '\\eb2e';
		}
		:host([icon='preview']):before {
			content: '\\eb2f';
		}
		:host([icon='project']):before {
			content: '\\eb30';
		}
		:host([icon='pulse']):before {
			content: '\\eb31';
		}
		:host([icon='question']):before {
			content: '\\eb32';
		}
		:host([icon='quote']):before {
			content: '\\eb33';
		}
		:host([icon='radio-tower']):before {
			content: '\\eb34';
		}
		:host([icon='reactions']):before {
			content: '\\eb35';
		}
		:host([icon='references']):before {
			content: '\\eb36';
		}
		:host([icon='refresh']):before {
			content: '\\eb37';
		}
		:host([icon='regex']):before {
			content: '\\eb38';
		}
		:host([icon='remote-explorer']):before {
			content: '\\eb39';
		}
		:host([icon='remote']):before {
			content: '\\eb3a';
		}
		:host([icon='remove']):before {
			content: '\\eb3b';
		}
		:host([icon='replace-all']):before {
			content: '\\eb3c';
		}
		:host([icon='replace']):before {
			content: '\\eb3d';
		}
		:host([icon='repo-clone']):before {
			content: '\\eb3e';
		}
		:host([icon='repo-force-push']):before {
			content: '\\eb3f';
		}
		:host([icon='repo-pull']):before {
			content: '\\eb40';
		}
		:host([icon='repo-push']):before {
			content: '\\eb41';
		}
		:host([icon='report']):before {
			content: '\\eb42';
		}
		:host([icon='request-changes']):before {
			content: '\\eb43';
		}
		:host([icon='rocket']):before {
			content: '\\eb44';
		}
		:host([icon='root-folder-opened']):before {
			content: '\\eb45';
		}
		:host([icon='root-folder']):before {
			content: '\\eb46';
		}
		:host([icon='rss']):before {
			content: '\\eb47';
		}
		:host([icon='ruby']):before {
			content: '\\eb48';
		}
		:host([icon='save-all']):before {
			content: '\\eb49';
		}
		:host([icon='save-as']):before {
			content: '\\eb4a';
		}
		:host([icon='save']):before {
			content: '\\eb4b';
		}
		:host([icon='screen-full']):before {
			content: '\\eb4c';
		}
		:host([icon='screen-normal']):before {
			content: '\\eb4d';
		}
		:host([icon='search-stop']):before {
			content: '\\eb4e';
		}
		:host([icon='server']):before {
			content: '\\eb50';
		}
		:host([icon='settings-gear']):before {
			content: '\\eb51';
		}
		:host([icon='settings']):before {
			content: '\\eb52';
		}
		:host([icon='shield']):before {
			content: '\\eb53';
		}
		:host([icon='smiley']):before {
			content: '\\eb54';
		}
		:host([icon='sort-precedence']):before {
			content: '\\eb55';
		}
		:host([icon='split-horizontal']):before {
			content: '\\eb56';
		}
		:host([icon='split-vertical']):before {
			content: '\\eb57';
		}
		:host([icon='squirrel']):before {
			content: '\\eb58';
		}
		:host([icon='star-full']):before {
			content: '\\eb59';
		}
		:host([icon='star-half']):before {
			content: '\\eb5a';
		}
		:host([icon='symbol-class']):before {
			content: '\\eb5b';
		}
		:host([icon='symbol-color']):before {
			content: '\\eb5c';
		}
		:host([icon='symbol-constant']):before {
			content: '\\eb5d';
		}
		:host([icon='symbol-enum-member']):before {
			content: '\\eb5e';
		}
		:host([icon='symbol-field']):before {
			content: '\\eb5f';
		}
		:host([icon='symbol-file']):before {
			content: '\\eb60';
		}
		:host([icon='symbol-interface']):before {
			content: '\\eb61';
		}
		:host([icon='symbol-keyword']):before {
			content: '\\eb62';
		}
		:host([icon='symbol-misc']):before {
			content: '\\eb63';
		}
		:host([icon='symbol-operator']):before {
			content: '\\eb64';
		}
		:host([icon='symbol-property']):before {
			content: '\\eb65';
		}
		:host([icon='wrench']):before {
			content: '\\eb65';
		}
		:host([icon='wrench-subaction']):before {
			content: '\\eb65';
		}
		:host([icon='symbol-snippet']):before {
			content: '\\eb66';
		}
		:host([icon='tasklist']):before {
			content: '\\eb67';
		}
		:host([icon='telescope']):before {
			content: '\\eb68';
		}
		:host([icon='text-size']):before {
			content: '\\eb69';
		}
		:host([icon='three-bars']):before {
			content: '\\eb6a';
		}
		:host([icon='thumbsdown']):before {
			content: '\\eb6b';
		}
		:host([icon='thumbsup']):before {
			content: '\\eb6c';
		}
		:host([icon='tools']):before {
			content: '\\eb6d';
		}
		:host([icon='triangle-down']):before {
			content: '\\eb6e';
		}
		:host([icon='triangle-left']):before {
			content: '\\eb6f';
		}
		:host([icon='triangle-right']):before {
			content: '\\eb70';
		}
		:host([icon='triangle-up']):before {
			content: '\\eb71';
		}
		:host([icon='twitter']):before {
			content: '\\eb72';
		}
		:host([icon='unfold']):before {
			content: '\\eb73';
		}
		:host([icon='unlock']):before {
			content: '\\eb74';
		}
		:host([icon='unmute']):before {
			content: '\\eb75';
		}
		:host([icon='unverified']):before {
			content: '\\eb76';
		}
		:host([icon='verified']):before {
			content: '\\eb77';
		}
		:host([icon='versions']):before {
			content: '\\eb78';
		}
		:host([icon='vm-active']):before {
			content: '\\eb79';
		}
		:host([icon='vm-outline']):before {
			content: '\\eb7a';
		}
		:host([icon='vm-running']):before {
			content: '\\eb7b';
		}
		:host([icon='watch']):before {
			content: '\\eb7c';
		}
		:host([icon='whitespace']):before {
			content: '\\eb7d';
		}
		:host([icon='whole-word']):before {
			content: '\\eb7e';
		}
		:host([icon='window']):before {
			content: '\\eb7f';
		}
		:host([icon='word-wrap']):before {
			content: '\\eb80';
		}
		:host([icon='zoom-in']):before {
			content: '\\eb81';
		}
		:host([icon='zoom-out']):before {
			content: '\\eb82';
		}
		:host([icon='list-filter']):before {
			content: '\\eb83';
		}
		:host([icon='list-flat']):before {
			content: '\\eb84';
		}
		:host([icon='list-selection']):before {
			content: '\\eb85';
		}
		:host([icon='selection']):before {
			content: '\\eb85';
		}
		:host([icon='list-tree']):before {
			content: '\\eb86';
		}
		:host([icon='debug-breakpoint-function-unverified']):before {
			content: '\\eb87';
		}
		:host([icon='debug-breakpoint-function']):before {
			content: '\\eb88';
		}
		:host([icon='debug-breakpoint-function-disabled']):before {
			content: '\\eb88';
		}
		:host([icon='debug-stackframe-active']):before {
			content: '\\eb89';
		}
		:host([icon='debug-stackframe-dot']):before {
			content: '\\eb8a';
		}
		:host([icon='debug-stackframe']):before {
			content: '\\eb8b';
		}
		:host([icon='debug-stackframe-focused']):before {
			content: '\\eb8b';
		}
		:host([icon='debug-breakpoint-unsupported']):before {
			content: '\\eb8c';
		}
		:host([icon='symbol-string']):before {
			content: '\\eb8d';
		}
		:host([icon='debug-reverse-continue']):before {
			content: '\\eb8e';
		}
		:host([icon='debug-step-back']):before {
			content: '\\eb8f';
		}
		:host([icon='debug-restart-frame']):before {
			content: '\\eb90';
		}
		:host([icon='debug-alt']):before {
			content: '\\eb91';
		}
		:host([icon='call-incoming']):before {
			content: '\\eb92';
		}
		:host([icon='call-outgoing']):before {
			content: '\\eb93';
		}
		:host([icon='menu']):before {
			content: '\\eb94';
		}
		:host([icon='expand-all']):before {
			content: '\\eb95';
		}
		:host([icon='feedback']):before {
			content: '\\eb96';
		}
		:host([icon='group-by-ref-type']):before {
			content: '\\eb97';
		}
		:host([icon='ungroup-by-ref-type']):before {
			content: '\\eb98';
		}
		:host([icon='account']):before {
			content: '\\eb99';
		}
		:host([icon='bell-dot']):before {
			content: '\\eb9a';
		}
		:host([icon='debug-console']):before {
			content: '\\eb9b';
		}
		:host([icon='library']):before {
			content: '\\eb9c';
		}
		:host([icon='output']):before {
			content: '\\eb9d';
		}
		:host([icon='run-all']):before {
			content: '\\eb9e';
		}
		:host([icon='sync-ignored']):before {
			content: '\\eb9f';
		}
		:host([icon='pinned']):before {
			content: '\\eba0';
		}
		:host([icon='github-inverted']):before {
			content: '\\eba1';
		}
		:host([icon='server-process']):before {
			content: '\\eba2';
		}
		:host([icon='server-environment']):before {
			content: '\\eba3';
		}
		:host([icon='pass']):before {
			content: '\\eba4';
		}
		:host([icon='issue-closed']):before {
			content: '\\eba4';
		}
		:host([icon='stop-circle']):before {
			content: '\\eba5';
		}
		:host([icon='play-circle']):before {
			content: '\\eba6';
		}
		:host([icon='record']):before {
			content: '\\eba7';
		}
		:host([icon='debug-alt-small']):before {
			content: '\\eba8';
		}
		:host([icon='vm-connect']):before {
			content: '\\eba9';
		}
		:host([icon='cloud']):before {
			content: '\\ebaa';
		}
		:host([icon='merge']):before {
			content: '\\ebab';
		}
		:host([icon='export']):before {
			content: '\\ebac';
		}
		:host([icon='graph-left']):before {
			content: '\\ebad';
		}
		:host([icon='magnet']):before {
			content: '\\ebae';
		}
		:host([icon='notebook']):before {
			content: '\\ebaf';
		}
		:host([icon='redo']):before {
			content: '\\ebb0';
		}
		:host([icon='check-all']):before {
			content: '\\ebb1';
		}
		:host([icon='pinned-dirty']):before {
			content: '\\ebb2';
		}
		:host([icon='pass-filled']):before {
			content: '\\ebb3';
		}
		:host([icon='circle-large-filled']):before {
			content: '\\ebb4';
		}
		:host([icon='circle-large-outline']):before {
			content: '\\ebb5';
		}
		:host([icon='combine']):before {
			content: '\\ebb6';
		}
		:host([icon='gather']):before {
			content: '\\ebb6';
		}
		:host([icon='table']):before {
			content: '\\ebb7';
		}
		:host([icon='variable-group']):before {
			content: '\\ebb8';
		}
		:host([icon='type-hierarchy']):before {
			content: '\\ebb9';
		}
		:host([icon='type-hierarchy-sub']):before {
			content: '\\ebba';
		}
		:host([icon='type-hierarchy-super']):before {
			content: '\\ebbb';
		}
		:host([icon='git-pull-request-create']):before {
			content: '\\ebbc';
		}
		:host([icon='run-above']):before {
			content: '\\ebbd';
		}
		:host([icon='run-below']):before {
			content: '\\ebbe';
		}
		:host([icon='notebook-template']):before {
			content: '\\ebbf';
		}
		:host([icon='debug-rerun']):before {
			content: '\\ebc0';
		}
		:host([icon='workspace-trusted']):before {
			content: '\\ebc1';
		}
		:host([icon='workspace-untrusted']):before {
			content: '\\ebc2';
		}
		:host([icon='workspace-unknown']):before {
			content: '\\ebc3';
		}
		:host([icon='terminal-cmd']):before {
			content: '\\ebc4';
		}
		:host([icon='terminal-debian']):before {
			content: '\\ebc5';
		}
		:host([icon='terminal-linux']):before {
			content: '\\ebc6';
		}
		:host([icon='terminal-powershell']):before {
			content: '\\ebc7';
		}
		:host([icon='terminal-tmux']):before {
			content: '\\ebc8';
		}
		:host([icon='terminal-ubuntu']):before {
			content: '\\ebc9';
		}
		:host([icon='terminal-bash']):before {
			content: '\\ebca';
		}
		:host([icon='arrow-swap']):before {
			content: '\\ebcb';
		}
		:host([icon='copy']):before {
			content: '\\ebcc';
		}
		:host([icon='person-add']):before {
			content: '\\ebcd';
		}
		:host([icon='filter-filled']):before {
			content: '\\ebce';
		}
		:host([icon='wand']):before {
			content: '\\ebcf';
		}
		:host([icon='debug-line-by-line']):before {
			content: '\\ebd0';
		}
		:host([icon='inspect']):before {
			content: '\\ebd1';
		}
		:host([icon='layers']):before {
			content: '\\ebd2';
		}
		:host([icon='layers-dot']):before {
			content: '\\ebd3';
		}
		:host([icon='layers-active']):before {
			content: '\\ebd4';
		}
		:host([icon='compass']):before {
			content: '\\ebd5';
		}
		:host([icon='compass-dot']):before {
			content: '\\ebd6';
		}
		:host([icon='compass-active']):before {
			content: '\\ebd7';
		}
		:host([icon='azure']):before {
			content: '\\ebd8';
		}
		:host([icon='issue-draft']):before {
			content: '\\ebd9';
		}
		:host([icon='git-pull-request-closed']):before {
			content: '\\ebda';
		}
		:host([icon='git-pull-request-draft']):before {
			content: '\\ebdb';
		}
		:host([icon='debug-all']):before {
			content: '\\ebdc';
		}
		:host([icon='debug-coverage']):before {
			content: '\\ebdd';
		}
		:host([icon='run-errors']):before {
			content: '\\ebde';
		}
		:host([icon='folder-library']):before {
			content: '\\ebdf';
		}
		:host([icon='debug-continue-small']):before {
			content: '\\ebe0';
		}
		:host([icon='beaker-stop']):before {
			content: '\\ebe1';
		}
		:host([icon='graph-line']):before {
			content: '\\ebe2';
		}
		:host([icon='graph-scatter']):before {
			content: '\\ebe3';
		}
		:host([icon='pie-chart']):before {
			content: '\\ebe4';
		}
		:host([icon='bracket']):before {
			content: '\\eb0f';
		}
		:host([icon='bracket-dot']):before {
			content: '\\ebe5';
		}
		:host([icon='bracket-error']):before {
			content: '\\ebe6';
		}
		:host([icon='lock-small']):before {
			content: '\\ebe7';
		}
		:host([icon='azure-devops']):before {
			content: '\\ebe8';
		}
		:host([icon='verified-filled']):before {
			content: '\\ebe9';
		}
		:host([icon='newline']):before {
			content: '\\ebea';
		}
		:host([icon='layout']):before {
			content: '\\ebeb';
		}
		:host([icon='layout-activitybar-left']):before {
			content: '\\ebec';
		}
		:host([icon='layout-activitybar-right']):before {
			content: '\\ebed';
		}
		:host([icon='layout-panel-left']):before {
			content: '\\ebee';
		}
		:host([icon='layout-panel-center']):before {
			content: '\\ebef';
		}
		:host([icon='layout-panel-justify']):before {
			content: '\\ebf0';
		}
		:host([icon='layout-panel-right']):before {
			content: '\\ebf1';
		}
		:host([icon='layout-panel']):before {
			content: '\\ebf2';
		}
		:host([icon='layout-sidebar-left']):before {
			content: '\\ebf3';
		}
		:host([icon='layout-sidebar-right']):before {
			content: '\\ebf4';
		}
		:host([icon='layout-statusbar']):before {
			content: '\\ebf5';
		}
		:host([icon='layout-menubar']):before {
			content: '\\ebf6';
		}
		:host([icon='layout-centered']):before {
			content: '\\ebf7';
		}
		:host([icon='target']):before {
			content: '\\ebf8';
		}

		:host([icon='indent']):before {
			content: '\\ebf9';
		}
		:host([icon='record-small']):before {
			content: '\\ebfa';
		}
		:host([icon='error-small']):before {
			content: '\\ebfb';
		}
		:host([icon='terminal-decoration-error']):before {
			content: '\\ebfb';
		}
		:host([icon='arrow-circle-down']):before {
			content: '\\ebfc';
		}
		:host([icon='arrow-circle-left']):before {
			content: '\\ebfd';
		}
		:host([icon='arrow-circle-right']):before {
			content: '\\ebfe';
		}
		:host([icon='arrow-circle-up']):before {
			content: '\\ebff';
		}
		:host([icon='layout-sidebar-right-off']):before {
			content: '\\ec00';
		}
		:host([icon='layout-panel-off']):before {
			content: '\\ec01';
		}
		:host([icon='layout-sidebar-left-off']):before {
			content: '\\ec02';
		}
		:host([icon='blank']):before {
			content: '\\ec03';
		}
		:host([icon='heart-filled']):before {
			content: '\\ec04';
		}
		:host([icon='map']):before {
			content: '\\ec05';
		}
		:host([icon='map-filled']):before {
			content: '\\ec06';
		}
		:host([icon='circle-small']):before {
			content: '\\ec07';
		}
		:host([icon='bell-slash']):before {
			content: '\\ec08';
		}
		:host([icon='bell-slash-dot']):before {
			content: '\\ec09';
		}
		:host([icon='comment-unresolved']):before {
			content: '\\ec0a';
		}
		:host([icon='git-pull-request-go-to-changes']):before {
			content: '\\ec0b';
		}
		:host([icon='git-pull-request-new-changes']):before {
			content: '\\ec0c';
		}
		:host([icon='search-fuzzy']):before {
			content: '\\ec0d';
		}
		:host([icon='comment-draft']):before {
			content: '\\ec0e';
		}
		:host([icon='send']):before {
			content: '\\ec0f';
		}
		:host([icon='sparkle']):before {
			content: '\\ec10';
		}
		:host([icon='insert']):before {
			content: '\\ec11';
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}
		:host([icon='gl-commit-horizontal']):before {
			content: '\\f101';
		}
		:host([icon='gl-graph']):before {
			content: '\\f102';
		}
		:host([icon='gl-next-commit']):before {
			content: '\\f103';
		}
		:host([icon='gl-prev-commit-menu']):before {
			content: '\\f104';
		}
		:host([icon='gl-prev-commit']):before {
			content: '\\f105';
		}
		:host([icon='gl-compare-ref-working']):before {
			content: '\\f106';
		}
		:host([icon='gl-branches-view']):before {
			content: '\\f107';
		}
		:host([icon='gl-commit-view']):before {
			content: '\\f108';
		}
		:host([icon='gl-commits-view']):before {
			content: '\\f109';
		}
		:host([icon='gl-compare-view']):before {
			content: '\\f10a';
		}
		:host([icon='gl-contributors-view']):before {
			content: '\\f10b';
		}
		:host([icon='gl-history-view']):before {
			content: '\\f10c';
		}
		:host([icon='gl-remotes-view']):before {
			content: '\\f10d';
		}
		:host([icon='gl-repositories-view']):before {
			content: '\\f10e';
		}
		:host([icon='gl-search-view']):before {
			content: '\\f10f';
		}
		:host([icon='gl-stashes-view']):before {
			content: '\\f110';
		}
		:host([icon='gl-tags-view']):before {
			content: '\\f111';
		}
		:host([icon='gl-worktrees-view']):before {
			content: '\\f112';
		}
		:host([icon='gl-gitlens']):before {
			content: '\\f113';
		}
		:host([icon='gl-stash-pop']):before {
			content: '\\f114';
		}
		:host([icon='gl-stash-save']):before {
			content: '\\f115';
		}
		:host([icon='gl-unplug']):before {
			content: '\\f116';
		}
		:host([icon='gl-open-revision']):before {
			content: '\\f117';
		}
		:host([icon='gl-switch']):before {
			content: '\\f118';
		}
		:host([icon='gl-expand']):before {
			content: '\\f119';
		}
		:host([icon='gl-list-auto']):before {
			content: '\\f11a';
		}
		:host([icon='gl-arrow-up-force']):before {
			content: '\\f11b';
		}
		:host([icon='gl-pinned-filled']):before {
			content: '\\f11c';
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}
		:host([icon='gl-clock']):before {
			content: '\\f11d';
		}
		:host([icon='gl-provider-azdo']):before {
			content: '\\f11e';
		}
		:host([icon='gl-provider-bitbucket']):before {
			content: '\\f11f';
		}
		:host([icon='gl-provider-gerrit']):before {
			content: '\\f120';
		}
		:host([icon='gl-provider-gitea']):before {
			content: '\\f121';
		}
		:host([icon='gl-provider-github']):before {
			content: '\\f122';
		}
		:host([icon='gl-provider-gitlab']):before {
			content: '\\f123';
		}
		:host([icon='gl-gitlens-inspect']):before {
			content: '\\f124';
		}
		:host([icon='gl-workspaces-view']):before {
			content: '\\f125';
		}
		:host([icon='gl-cloud-patch']):before {
			content: '\\f128';
		}
		:host([icon='gl-cloud-patch-share']):before {
			content: '\\f129';
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}
	`,tR([tw()],tP.prototype,"icon",2),tR([tw()],tP.prototype,"modifier",2),tR([tw({type:Number})],tP.prototype,"size",2),tP=tR([tu("code-icon")],tP);class tD extends ed{constructor(){super("HomeApp")}get blockRepoFeatures(){let{repositories:{openCount:e,hasUnsafe:t,trusted:o}}=this.state;return!o||0===e||t}onInitialize(){this.state=this.getState()??this.state,this.updateState()}onBind(){let e=super.onBind?.()??[];return e.push(c.on("[data-action]","click",(e,t)=>this.onDataActionClicked(e,t)),c.on('[data-requires="repo"]',"click",(e,t)=>this.onRepoFeatureClicked(e,t))),e}onMessageReceived(e){e.method===m.method?d(m,e,e=>{this.state.repositories=e,this.state.timestamp=Date.now(),this.setState(this.state),this.updateNoRepo()}):super.onMessageReceived?.(e)}onRepoFeatureClicked(e,t){return!this.blockRepoFeatures||(e.preventDefault(),e.stopPropagation(),!1)}onDataActionClicked(e,t){let o=t.dataset.action;this.onActionClickedCore(o)}onActionClickedCore(e){e?.startsWith("command:")&&this.sendCommand(p,{command:e.slice(8)})}updateNoRepo(){let{repositories:{openCount:e,hasUnsafe:t,trusted:o}}=this.state,n=document.getElementById("header");if(!o){n.hidden=!1,tx("untrusted-alert",!0),tx("no-repo-alert",!1),tx("unsafe-repo-alert",!1);return}tx("untrusted-alert",!1);let i=0===e;tx("no-repo-alert",i&&!t),tx("unsafe-repo-alert",t),n.hidden=!i&&!t}updateState(){this.updateNoRepo()}}function tx(e,t){let o;null!=(o="string"==typeof e?document.getElementById(e):e)&&(t?(o.removeAttribute("aria-hidden"),o.removeAttribute("hidden")):(o.setAttribute("aria-hidden",""),o?.setAttribute("hidden","")))}new tD;var tL=l.z;export{tL as HomeApp};