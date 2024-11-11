let e,t;var o,n,i,r,s,a,l,c,h={};h.d=(e,t)=>{for(var o in t)h.o(t,o)&&!h.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),void 0!==h&&Object.defineProperty(h,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var d={};h.d(d,{b:()=>nm,F:()=>nb});class u{constructor(e,t=!1,o=!1){this.method=e,this.reset=t,this.pack=o}}class p extends u{}class f extends u{}function g(e,t,o){e.method===t.method&&o(t.params,e)}let b=new p("webview/ready"),m=new p("webview/focus"),v=new p("command/execute");new p("configuration/preview"),new p("configuration/update"),new f("configuration/didChange"),new f("configuration/didPreview"),new f("webview/didOpenAnchor");let y=new p("commit/actions"),w=new p("commit/file/actions"),k=new p("commit/file/open"),$=new p("commit/file/openOnRemote"),x=new p("commit/file/compareWorking"),_=new p("commit/file/comparePrevious"),C=new p("commit/file/stage"),S=new p("commit/file/unstage"),A=new p("commit/pickCommit"),P=new p("commit/searchCommit"),E=new p("commit/switchMode"),R=new p("commit/autolinkSettings"),D=new p("commit/explain"),O=new p("commit/pin"),T=new p("commit/navigate"),M=new p("commit/preferences/update"),L=new p("commit/wip/createPatch"),U=new f("commit/didChange",!0),I=new f("commit/didChange/wip"),F=new f("commit/didExplain");function N(e){let t=.001*performance.now(),o=Math.floor(t),n=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],(n-=e[1])<0&&(o--,n+=1e9)),[o,n]}let B=/\(([\s\S]*)\)/,H=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,j=/\s?=.*$/;var z=((o=z||{})[o.Off=0]="Off",o[o.Error=1]="Error",o[o.Warn=2]="Warn",o[o.Info=3]="Info",o[o.Debug=4]="Debug",o);let V=new class{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=W(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=W(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output=this.output??this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let o;(!(this.level<4)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...o){let n;if(!(this.level<1)||this.isDebugging){if(null==(n=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??""}${this.toLoggableParams(!1,o)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let o;(!(this.level<3)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let o;(!(this.level<2)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let o=t.map(e=>this.toLoggable(e)).join(", ");return 0!==o.length?` \u2014 ${o}`:""}};function W(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}function q(e){let t;if("function"==typeof e){if(e.prototype?.constructor==null)return e.name;t=e.prototype.constructor.name??""}else t=e.constructor?.name??"";let o=t.indexOf("_");return -1===o?t:t.substr(o+1)}let G={enabled:e=>V.enabled(e)||V.isDebugging,log:(e,t,o,...n)=>{switch(e){case"error":V.error("",t,o,...n);break;case"warn":V.warn(t,o,...n);break;case"info":V.log(t,o,...n);break;default:V.debug(t,o,...n)}}},K=new Map,Y=0;function Q(e,t){if(null!=t)return{scopeId:t.scopeId,prefix:`${t.prefix}${e}`};let o=J();return{scopeId:o,prefix:`[${String(o).padStart(5)}] ${e}`}}function J(){return 1073741824===Y&&(Y=0),++Y}var Z=((n=Z||{})[n.Hash=35]="Hash",n[n.Slash=47]="Slash",n[n.Digit0=48]="Digit0",n[n.Digit1=49]="Digit1",n[n.Digit2=50]="Digit2",n[n.Digit3=51]="Digit3",n[n.Digit4=52]="Digit4",n[n.Digit5=53]="Digit5",n[n.Digit6=54]="Digit6",n[n.Digit7=55]="Digit7",n[n.Digit8=56]="Digit8",n[n.Digit9=57]="Digit9",n[n.Backslash=92]="Backslash",n[n.A=65]="A",n[n.B=66]="B",n[n.C=67]="C",n[n.D=68]="D",n[n.E=69]="E",n[n.F=70]="F",n[n.Z=90]="Z",n[n.a=97]="a",n[n.b=98]="b",n[n.c=99]="c",n[n.d=100]="d",n[n.e=101]="e",n[n.f=102]="f",n[n.z=122]="z",n),X=((i=X||{}).ActionPrefix="gitlens.action.",i.AddAuthors="gitlens.addAuthors",i.BrowseRepoAtRevision="gitlens.browseRepoAtRevision",i.BrowseRepoAtRevisionInNewWindow="gitlens.browseRepoAtRevisionInNewWindow",i.BrowseRepoBeforeRevision="gitlens.browseRepoBeforeRevision",i.BrowseRepoBeforeRevisionInNewWindow="gitlens.browseRepoBeforeRevisionInNewWindow",i.ClearFileAnnotations="gitlens.clearFileAnnotations",i.CloseUnchangedFiles="gitlens.closeUnchangedFiles",i.CloseWelcomeView="gitlens.closeWelcomeView",i.CompareWith="gitlens.compareWith",i.CompareHeadWith="gitlens.compareHeadWith",i.CompareWorkingWith="gitlens.compareWorkingWith",i.ComputingFileAnnotations="gitlens.computingFileAnnotations",i.ConnectRemoteProvider="gitlens.connectRemoteProvider",i.CopyAutolinkUrl="gitlens.copyAutolinkUrl",i.CopyCurrentBranch="gitlens.copyCurrentBranch",i.CopyDeepLinkToBranch="gitlens.copyDeepLinkToBranch",i.CopyDeepLinkToCommit="gitlens.copyDeepLinkToCommit",i.CopyDeepLinkToComparison="gitlens.copyDeepLinkToComparison",i.CopyDeepLinkToRepo="gitlens.copyDeepLinkToRepo",i.CopyDeepLinkToTag="gitlens.copyDeepLinkToTag",i.CopyDeepLinkToWorkspace="gitlens.copyDeepLinkToWorkspace",i.CopyMessageToClipboard="gitlens.copyMessageToClipboard",i.CopyRemoteBranchesUrl="gitlens.copyRemoteBranchesUrl",i.CopyRemoteBranchUrl="gitlens.copyRemoteBranchUrl",i.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",i.CopyRemoteComparisonUrl="gitlens.copyRemoteComparisonUrl",i.CopyRemoteFileUrl="gitlens.copyRemoteFileUrlToClipboard",i.CopyRemoteFileUrlWithoutRange="gitlens.copyRemoteFileUrlWithoutRange",i.CopyRemoteFileUrlFrom="gitlens.copyRemoteFileUrlFrom",i.CopyRemoteIssueUrl="gitlens.copyRemoteIssueUrl",i.CopyRemotePullRequestUrl="gitlens.copyRemotePullRequestUrl",i.CopyRemoteRepositoryUrl="gitlens.copyRemoteRepositoryUrl",i.CopyShaToClipboard="gitlens.copyShaToClipboard",i.CopyRelativePathToClipboard="gitlens.copyRelativePathToClipboard",i.CreatePatch="gitlens.createPatch",i.CreateCloudPatch="gitlens.createCloudPatch",i.CreatePullRequestOnRemote="gitlens.createPullRequestOnRemote",i.DiffDirectory="gitlens.diffDirectory",i.DiffDirectoryWithHead="gitlens.diffDirectoryWithHead",i.DiffWith="gitlens.diffWith",i.DiffWithNext="gitlens.diffWithNext",i.DiffWithNextInDiffLeft="gitlens.diffWithNextInDiffLeft",i.DiffWithNextInDiffRight="gitlens.diffWithNextInDiffRight",i.DiffWithPrevious="gitlens.diffWithPrevious",i.DiffWithPreviousInDiffLeft="gitlens.diffWithPreviousInDiffLeft",i.DiffWithPreviousInDiffRight="gitlens.diffWithPreviousInDiffRight",i.DiffLineWithPrevious="gitlens.diffLineWithPrevious",i.DiffWithRevision="gitlens.diffWithRevision",i.DiffWithRevisionFrom="gitlens.diffWithRevisionFrom",i.DiffWithWorking="gitlens.diffWithWorking",i.DiffWithWorkingInDiffLeft="gitlens.diffWithWorkingInDiffLeft",i.DiffWithWorkingInDiffRight="gitlens.diffWithWorkingInDiffRight",i.DiffLineWithWorking="gitlens.diffLineWithWorking",i.DisconnectRemoteProvider="gitlens.disconnectRemoteProvider",i.DisableDebugLogging="gitlens.disableDebugLogging",i.EnableDebugLogging="gitlens.enableDebugLogging",i.DisableRebaseEditor="gitlens.disableRebaseEditor",i.EnableRebaseEditor="gitlens.enableRebaseEditor",i.ExternalDiff="gitlens.externalDiff",i.ExternalDiffAll="gitlens.externalDiffAll",i.FetchRepositories="gitlens.fetchRepositories",i.GenerateCommitMessage="gitlens.generateCommitMessage",i.GetStarted="gitlens.getStarted",i.InviteToLiveShare="gitlens.inviteToLiveShare",i.OpenAutolinkUrl="gitlens.openAutolinkUrl",i.OpenBlamePriorToChange="gitlens.openBlamePriorToChange",i.OpenBranchesOnRemote="gitlens.openBranchesOnRemote",i.OpenBranchOnRemote="gitlens.openBranchOnRemote",i.OpenCurrentBranchOnRemote="gitlens.openCurrentBranchOnRemote",i.OpenChangedFiles="gitlens.openChangedFiles",i.OpenCommitOnRemote="gitlens.openCommitOnRemote",i.OpenComparisonOnRemote="gitlens.openComparisonOnRemote",i.OpenFileHistory="gitlens.openFileHistory",i.OpenFileFromRemote="gitlens.openFileFromRemote",i.OpenFileOnRemote="gitlens.openFileOnRemote",i.OpenFileOnRemoteFrom="gitlens.openFileOnRemoteFrom",i.OpenFileAtRevision="gitlens.openFileRevision",i.OpenFileAtRevisionFrom="gitlens.openFileRevisionFrom",i.OpenFolderHistory="gitlens.openFolderHistory",i.OpenOnRemote="gitlens.openOnRemote",i.OpenIssueOnRemote="gitlens.openIssueOnRemote",i.OpenCloudPatch="gitlens.openCloudPatch",i.OpenPatch="gitlens.openPatch",i.OpenPullRequestOnRemote="gitlens.openPullRequestOnRemote",i.OpenAssociatedPullRequestOnRemote="gitlens.openAssociatedPullRequestOnRemote",i.OpenRepoOnRemote="gitlens.openRepoOnRemote",i.OpenRevisionFile="gitlens.openRevisionFile",i.OpenRevisionFileInDiffLeft="gitlens.openRevisionFileInDiffLeft",i.OpenRevisionFileInDiffRight="gitlens.openRevisionFileInDiffRight",i.OpenWalkthrough="gitlens.openWalkthrough",i.OpenWorkingFile="gitlens.openWorkingFile",i.OpenWorkingFileInDiffLeft="gitlens.openWorkingFileInDiffLeft",i.OpenWorkingFileInDiffRight="gitlens.openWorkingFileInDiffRight",i.PullRepositories="gitlens.pullRepositories",i.PushRepositories="gitlens.pushRepositories",i.GitCommands="gitlens.gitCommands",i.GitCommandsBranch="gitlens.gitCommands.branch",i.GitCommandsCherryPick="gitlens.gitCommands.cherryPick",i.GitCommandsMerge="gitlens.gitCommands.merge",i.GitCommandsRebase="gitlens.gitCommands.rebase",i.GitCommandsReset="gitlens.gitCommands.reset",i.GitCommandsRevert="gitlens.gitCommands.revert",i.GitCommandsSwitch="gitlens.gitCommands.switch",i.GitCommandsTag="gitlens.gitCommands.tag",i.GitCommandsWorktree="gitlens.gitCommands.worktree",i.GitCommandsWorktreeOpen="gitlens.gitCommands.worktree.open",i.OpenOrCreateWorktreeForGHPR="gitlens.ghpr.views.openOrCreateWorktree",i.PlusHide="gitlens.plus.hide",i.PlusLoginOrSignUp="gitlens.plus.loginOrSignUp",i.PlusLogout="gitlens.plus.logout",i.PlusManage="gitlens.plus.manage",i.PlusPurchase="gitlens.plus.purchase",i.PlusResendVerification="gitlens.plus.resendVerification",i.PlusRestore="gitlens.plus.restore",i.PlusShowPlans="gitlens.plus.showPlans",i.PlusStartPreviewTrial="gitlens.plus.startPreviewTrial",i.PlusValidate="gitlens.plus.validate",i.QuickOpenFileHistory="gitlens.quickOpenFileHistory",i.RefreshFocus="gitlens.focus.refresh",i.RefreshGraph="gitlens.graph.refresh",i.RefreshHover="gitlens.refreshHover",i.ResetAvatarCache="gitlens.resetAvatarCache",i.ResetAIKey="gitlens.resetAIKey",i.ResetSuppressedWarnings="gitlens.resetSuppressedWarnings",i.ResetTrackedUsage="gitlens.resetTrackedUsage",i.ResetViewsLayout="gitlens.resetViewsLayout",i.RevealCommitInView="gitlens.revealCommitInView",i.ShareAsCloudPatch="gitlens.shareAsCloudPatch",i.SearchCommits="gitlens.showCommitSearch",i.SearchCommitsInView="gitlens.views.searchAndCompare.searchCommits",i.ShowBranchesView="gitlens.showBranchesView",i.ShowCommitDetailsView="gitlens.showCommitDetailsView",i.ShowCommitInView="gitlens.showCommitInView",i.ShowCommitsInView="gitlens.showCommitsInView",i.ShowCommitsView="gitlens.showCommitsView",i.ShowContributorsView="gitlens.showContributorsView",i.ShowDraftsView="gitlens.showDraftsView",i.ShowFileHistoryView="gitlens.showFileHistoryView",i.ShowFocusPage="gitlens.showFocusPage",i.ShowGraph="gitlens.showGraph",i.ShowGraphPage="gitlens.showGraphPage",i.ShowGraphView="gitlens.showGraphView",i.ShowHomeView="gitlens.showHomeView",i.ShowAccountView="gitlens.showAccountView",i.ShowInCommitGraph="gitlens.showInCommitGraph",i.ShowInCommitGraphView="gitlens.showInCommitGraphView",i.ShowInDetailsView="gitlens.showInDetailsView",i.ShowInTimeline="gitlens.showInTimeline",i.ShowLastQuickPick="gitlens.showLastQuickPick",i.ShowLineCommitInView="gitlens.showLineCommitInView",i.ShowLineHistoryView="gitlens.showLineHistoryView",i.OpenOnlyChangedFiles="gitlens.openOnlyChangedFiles",i.ShowPatchDetailsPage="gitlens.showPatchDetailsPage",i.ShowQuickBranchHistory="gitlens.showQuickBranchHistory",i.ShowQuickCommit="gitlens.showQuickCommitDetails",i.ShowQuickCommitFile="gitlens.showQuickCommitFileDetails",i.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",i.ShowQuickFileHistory="gitlens.showQuickFileHistory",i.ShowQuickRepoStatus="gitlens.showQuickRepoStatus",i.ShowQuickCommitRevision="gitlens.showQuickRevisionDetails",i.ShowQuickCommitRevisionInDiffLeft="gitlens.showQuickRevisionDetailsInDiffLeft",i.ShowQuickCommitRevisionInDiffRight="gitlens.showQuickRevisionDetailsInDiffRight",i.ShowQuickStashList="gitlens.showQuickStashList",i.ShowRemotesView="gitlens.showRemotesView",i.ShowRepositoriesView="gitlens.showRepositoriesView",i.ShowSearchAndCompareView="gitlens.showSearchAndCompareView",i.ShowSettingsPage="gitlens.showSettingsPage",i.ShowSettingsPageAndJumpToBranchesView="gitlens.showSettingsPage!branches-view",i.ShowSettingsPageAndJumpToCommitsView="gitlens.showSettingsPage!commits-view",i.ShowSettingsPageAndJumpToContributorsView="gitlens.showSettingsPage!contributors-view",i.ShowSettingsPageAndJumpToFileHistoryView="gitlens.showSettingsPage!file-history-view",i.ShowSettingsPageAndJumpToLineHistoryView="gitlens.showSettingsPage!line-history-view",i.ShowSettingsPageAndJumpToRemotesView="gitlens.showSettingsPage!remotes-view",i.ShowSettingsPageAndJumpToRepositoriesView="gitlens.showSettingsPage!repositories-view",i.ShowSettingsPageAndJumpToSearchAndCompareView="gitlens.showSettingsPage!search-compare-view",i.ShowSettingsPageAndJumpToStashesView="gitlens.showSettingsPage!stashes-view",i.ShowSettingsPageAndJumpToTagsView="gitlens.showSettingsPage!tags-view",i.ShowSettingsPageAndJumpToWorkTreesView="gitlens.showSettingsPage!worktrees-view",i.ShowSettingsPageAndJumpToViews="gitlens.showSettingsPage!views",i.ShowSettingsPageAndJumpToCommitGraph="gitlens.showSettingsPage!commit-graph",i.ShowSettingsPageAndJumpToAutolinks="gitlens.showSettingsPage!autolinks",i.ShowStashesView="gitlens.showStashesView",i.ShowTagsView="gitlens.showTagsView",i.ShowTimelinePage="gitlens.showTimelinePage",i.ShowTimelineView="gitlens.showTimelineView",i.ShowWelcomePage="gitlens.showWelcomePage",i.ShowWorktreesView="gitlens.showWorktreesView",i.ShowWorkspacesView="gitlens.showWorkspacesView",i.StashApply="gitlens.stashApply",i.StashSave="gitlens.stashSave",i.StashSaveFiles="gitlens.stashSaveFiles",i.SwitchAIModel="gitlens.switchAIModel",i.SwitchMode="gitlens.switchMode",i.ToggleCodeLens="gitlens.toggleCodeLens",i.ToggleFileBlame="gitlens.toggleFileBlame",i.ToggleFileBlameInDiffLeft="gitlens.toggleFileBlameInDiffLeft",i.ToggleFileBlameInDiffRight="gitlens.toggleFileBlameInDiffRight",i.ToggleFileChanges="gitlens.toggleFileChanges",i.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",i.ToggleFileHeatmap="gitlens.toggleFileHeatmap",i.ToggleFileHeatmapInDiffLeft="gitlens.toggleFileHeatmapInDiffLeft",i.ToggleFileHeatmapInDiffRight="gitlens.toggleFileHeatmapInDiffRight",i.ToggleGraph="gitlens.toggleGraph",i.ToggleMaximizedGraph="gitlens.toggleMaximizedGraph",i.ToggleLineBlame="gitlens.toggleLineBlame",i.ToggleReviewMode="gitlens.toggleReviewMode",i.ToggleZenMode="gitlens.toggleZenMode",i.ViewsCopy="gitlens.views.copy",i.ViewsOpenDirectoryDiff="gitlens.views.openDirectoryDiff",i.ViewsOpenDirectoryDiffWithWorking="gitlens.views.openDirectoryDiffWithWorking",i.Deprecated_DiffHeadWith="gitlens.diffHeadWith",i.Deprecated_DiffWorkingWith="gitlens.diffWorkingWith",i.Deprecated_OpenBranchesInRemote="gitlens.openBranchesInRemote",i.Deprecated_OpenBranchInRemote="gitlens.openBranchInRemote",i.Deprecated_OpenCommitInRemote="gitlens.openCommitInRemote",i.Deprecated_OpenFileInRemote="gitlens.openFileInRemote",i.Deprecated_OpenInRemote="gitlens.openInRemote",i.Deprecated_OpenRepoInRemote="gitlens.openRepoInRemote",i.Deprecated_ShowFileHistoryInView="gitlens.showFileHistoryInView",i),ee=((r=ee||{}).AngleBracketLeftHeavy="❰",r.AngleBracketRightHeavy="❱",r.ArrowBack="↩",r.ArrowDown="↓",r.ArrowDownUp="⇵",r.ArrowDropRight="⤷",r.ArrowHeadRight="➤",r.ArrowLeft="←",r.ArrowLeftDouble="⇐",r.ArrowLeftRight="↔",r.ArrowLeftRightDouble="⇔",r.ArrowLeftRightDoubleStrike="⇎",r.ArrowLeftRightLong="⟷",r.ArrowRight="→",r.ArrowRightDouble="⇒",r.ArrowRightHollow="⇨",r.ArrowUp="↑",r.ArrowUpDown="⇅",r.ArrowUpRight="↗",r.ArrowsHalfLeftRight="⇋",r.ArrowsHalfRightLeft="⇌",r.ArrowsLeftRight="⇆",r.ArrowsRightLeft="⇄",r.Asterisk="∗",r.Check="✔",r.Dash="—",r.Dot="•",r.Ellipsis="…",r.EnDash="–",r.Envelope="✉",r.EqualsTriple="≡",r.Flag="⚑",r.FlagHollow="⚐",r.MiddleEllipsis="⋯",r.MuchLessThan="≪",r.MuchGreaterThan="≫",r.Pencil="✎",r.Space=" ",r.SpaceThin=" ",r.SpaceThinnest=" ",r.SquareWithBottomShadow="❏",r.SquareWithTopShadow="❐",r.Warning="⚠",r.ZeroWidthSpace="​",r),et=((s=et||{}).DebugConsole="debug",s.File="file",s.Git="git",s.GitHub="github",s.GitLens="gitlens",s.Output="output",s.PRs="pr",s.Terminal="vscode-terminal",s.Vsls="vsls",s.VslsScc="vsls-scc",s.Virtual="vscode-vfs",s),eo=((a=eo||{}).Version="gitlens:synced:version",a.PreReleaseVersion="gitlens:synced:preVersion",a.HomeViewWelcomeVisible="gitlens:views:welcome:visible",a);let{fromCharCode:en}=String;function ei(e){let[t,o]=N(e);return 1e3*t+Math.floor(o/1e6)}function er(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;let n=1===t?e:o.plural??`${e}s`;return o.only?n:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${n}`}new TextEncoder;let es=Symbol("logInstanceNameFn");Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class ea{constructor(e,t,...o){let n;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:Q(e??""),n="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??G,this._time=N(),null!=n){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=N(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=N(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t){this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);return}let[o,n]=N(this._time),i=1e3*o+Math.floor(n/1e6),r=e?.message??"";this.logProvider.log(i>250?"warn":this.logLevel,this.logScope,`${r?`${r} `:""}[${i}ms]${e?.suffix??""}`)}}function el(e,t){let o=e+t;return Math.round(t<0?o<0?0:o:o>255?255:o)}function ec(e,t){let o=function(e){let t=ew(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;let[n,i,r,s]=o,a=255*t/100;return`rgba(${el(n,a)}, ${el(i,a)}, ${el(r,a)}, ${s})`}function eh(e,t){let o=em.from(e);return null==o?e:o.transparent(t/100).toString()}function ed(e,t){let o=Math.pow(10,t);return Math.round(e*o)/o}(l=c||(c={})).on=function(e,t,o,n){let i=!1;if("string"==typeof e){let r=function(t){let n=t?.target?.closest(e);null!=n&&o(t,n)};return document.addEventListener(t,r,n??!0),{dispose:()=>{i||(i=!0,document.removeEventListener(t,r,n??!0))}}}let r=function(e){o(e,this)};return e.addEventListener(t,r,n??!1),{dispose:()=>{i||(i=!0,e.removeEventListener(t,r,n??!1))}}},l.insertTemplate=function(e,t,o){let n=document.getElementById(e);if(t.replaceChildren(n?.content.cloneNode(!0)),t.className=n.className,o?.visible!=null)for(let e of t.querySelectorAll("[data-visible]")){let t=e.dataset.visible;t&&(o.visible[t]?e.style.display="initial":e.style.display="none")}if(o?.bindings!=null)for(let e of t.querySelectorAll("[data-bind]")){let t=e.dataset.bind;if(!t)continue;let n=o.bindings[t];null!=n&&(e.textContent=String(n))}},l.resetSlot=function(e){e.replaceChildren(),e.className=""};class eu{constructor(e,t,o,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=ed(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class ep{constructor(e,t,o,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=ed(Math.max(Math.min(1,t),0),3),this.l=ed(Math.max(Math.min(1,o),0),3),this.a=ed(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,n=e.b/255,i=e.a,r=Math.max(t,o,n),s=Math.min(t,o,n),a=0,l=0,c=(s+r)/2,h=r-s;if(h>0){switch(l=Math.min(c<=.5?h/(2*c):h/(2-2*c),1),r){case t:a=(o-n)/h+(o<n?6:0);break;case o:a=(n-t)/h+2;break;case n:a=(t-o)/h+4}a*=60,a=Math.round(a)}return new ep(a,l,c,i)}static _hue2rgb(e,t,o){return(o<0&&(o+=1),o>1&&(o-=1),o<1/6)?e+(t-e)*6*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){let t,o,n;let i=e.h/360,{s:r,l:s,a}=e;if(0===r)t=o=n=s;else{let e=s<.5?s*(1+r):s+r-s*r,a=2*s-e;t=ep._hue2rgb(a,e,i+1/3),o=ep._hue2rgb(a,e,i),n=ep._hue2rgb(a,e,i-1/3)}return new eu(Math.round(255*t),Math.round(255*o),Math.round(255*n),a)}}class ef{constructor(e,t,o,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=ed(Math.max(Math.min(1,t),0),3),this.v=ed(Math.max(Math.min(1,o),0),3),this.a=ed(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,n=e.b/255,i=Math.max(t,o,n),r=i-Math.min(t,o,n);return new ef(Math.round(60*(0===r?0:i===t?((o-n)/r%6+6)%6:i===o?(n-t)/r+2:(t-o)/r+4)),0===i?0:r/i,i,e.a)}static toRGBA(e){let{h:t,s:o,v:n,a:i}=e,r=n*o,s=r*(1-Math.abs(t/60%2-1)),a=n-r,[l,c,h]=[0,0,0];return t<60?(l=r,c=s):t<120?(l=s,c=r):t<180?(c=r,h=s):t<240?(c=s,h=r):t<300?(l=s,h=r):t<=360&&(l=r,h=s),new eu(l=Math.round((l+a)*255),c=Math.round((c+a)*255),h=Math.round((h+a)*255),i)}}function eg(e,t){return t.getPropertyValue(e).trim()}let eb=class e{static from(t){return t instanceof e?t:ew(t)||e.red}static fromCssVariable(t,o){return ew(eg(t,o))||e.red}static fromHex(t){return ek(t)||e.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:ep.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:ef.fromRGBA(this.rgba)}constructor(e){if(e){if(e instanceof eu)this.rgba=e;else if(e instanceof ep)this._hsla=e,this.rgba=ep.toRGBA(e);else if(e instanceof ef)this._hsva=e,this.rgba=ef.toRGBA(e);else throw Error("Invalid color ctor argument")}else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&eu.equals(this.rgba,e.rgba)&&ep.equals(this.hsla,e.hsla)&&ef.equals(this.hsva,e.hsva)}getRelativeLuminance(){let t=e._relativeLuminanceForComponent(this.rgba.r);return ed(.2126*t+.7152*e._relativeLuminanceForComponent(this.rgba.g)+.0722*e._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new em(new eu(0,0,0,e.rgba.a));if(1===t)return new em(new eu(255,255,255,e.rgba.a));let o=e.getRelativeLuminance(),n=20,i=(e,o)=>{let r=e.mix(o,.5),s=r.getRelativeLuminance();return!(1e-7>Math.abs(t-s))&&n--?s>t?i(e,r):i(r,o):r},r=(o>t?i(em.black,e):i(e,em.white)).rgba;return new em(new eu(r.r,r.g,r.b,e.rgba.a))}(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(t){return new e(new ep(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*t,this.hsla.a))}darken(t){return new e(new ep(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*t,this.hsla.a))}transparent(t){let{r:o,g:n,b:i,a:r}=this.rgba;return new e(new eu(o,n,i,r*t))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new e(new eu(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(t){let o=t.rgba,n=this.rgba.a,i=o.a,r=n+i*(1-n);return r<1e-6?e.transparent:new e(new eu(this.rgba.r*n/r+o.r*i*(1-n)/r,this.rgba.g*n/r+o.g*i*(1-n)/r,this.rgba.b*n/r+o.b*i*(1-n)/r,r))}mix(e,t){return function(e,t,o){let n=e.rgba,i=t.rgba;return new em(new eu(n.r+o*(i.r-n.r),n.g+o*(i.g-n.g),n.b+o*(i.b-n.b),n.a+o*(i.a-n.a)))}(this,e,t)}makeOpaque(t){if(this.isOpaque()||1!==t.rgba.a)return this;let{r:o,g:n,b:i,a:r}=this.rgba;return new e(new eu(t.rgba.r-r*(t.rgba.r-o),t.rgba.g-r*(t.rgba.g-n),t.rgba.b-r*(t.rgba.b-i),1))}flatten(...t){let o=t.reduceRight((t,o)=>e._flatten(o,t));return e._flatten(this,o)}static _flatten(t,o){let n=1-t.rgba.a;return new e(new eu(n*o.rgba.r+t.rgba.a*t.rgba.r,n*o.rgba.g+t.rgba.a*t.rgba.g,n*o.rgba.b+t.rgba.a*t.rgba.b))}toString(){var e;return this._toString||(this._toString=(e=this,e.isOpaque()?`#${ev(e.rgba.r)}${ev(e.rgba.g)}${ev(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;let n=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(i-n)/i,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;let n=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(n-i)/n,e.darken(o)}};eb.white=new eb(new eu(255,255,255,1)),eb.black=new eb(new eu(0,0,0,1)),eb.red=new eb(new eu(255,0,0,1)),eb.blue=new eb(new eu(0,0,255,1)),eb.green=new eb(new eu(0,255,0,1)),eb.cyan=new eb(new eu(0,255,255,1)),eb.lightgrey=new eb(new eu(211,211,211,1)),eb.transparent=new eb(new eu(0,0,0,0));let em=eb;function ev(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let ey=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function ew(e){let t;if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===Z.Hash)return ek(e);let o=ey.exec(e);if(null==o)return null;let n=o[1];switch(n){case"rgb":case"hsl":t=[parseInt(o[2],10),parseInt(o[3],10),parseInt(o[4],10),1];break;case"rgba":case"hsla":t=[parseInt(o[2],10),parseInt(o[3],10),parseInt(o[4],10),parseFloat(o[5])];break;default:return null}switch(n){case"rgb":case"rgba":return new em(new eu(t[0],t[1],t[2],t[3]));case"hsl":case"hsla":return new em(new ep(t[0],t[1],t[2],t[3]))}return em.red}function ek(e){let t=(e=e.trim()).length;if(0===t||e.charCodeAt(0)!==Z.Hash)return null;switch(t){case 7:return new em(new eu(16*e$(e.charCodeAt(1))+e$(e.charCodeAt(2)),16*e$(e.charCodeAt(3))+e$(e.charCodeAt(4)),16*e$(e.charCodeAt(5))+e$(e.charCodeAt(6)),1));case 9:{let t=16*e$(e.charCodeAt(1))+e$(e.charCodeAt(2));return new em(new eu(t,16*e$(e.charCodeAt(3))+e$(e.charCodeAt(4)),16*e$(e.charCodeAt(5))+e$(e.charCodeAt(6)),(16*e$(e.charCodeAt(7))+e$(e.charCodeAt(8)))/255))}case 4:{let t=e$(e.charCodeAt(1)),o=e$(e.charCodeAt(2)),n=e$(e.charCodeAt(3));return new em(new eu(16*t+t,16*o+o,16*n+n))}case 5:{let t=e$(e.charCodeAt(1)),o=e$(e.charCodeAt(2)),n=e$(e.charCodeAt(3)),i=e$(e.charCodeAt(4));return new em(new eu(16*t+t,16*o+o,16*n+n,(16*i+i)/255))}default:return null}}function e$(e){switch(e){case Z.Digit0:break;case Z.Digit1:return 1;case Z.Digit2:return 2;case Z.Digit3:return 3;case Z.Digit4:return 4;case Z.Digit5:return 5;case Z.Digit6:return 6;case Z.Digit7:return 7;case Z.Digit8:return 8;case Z.Digit9:return 9;case Z.a:case Z.A:return 10;case Z.b:case Z.B:return 11;case Z.c:case Z.C:return 12;case Z.d:case Z.D:return 13;case Z.e:case Z.E:return 14;case Z.f:case Z.F:return 15}return 0}let ex=class e{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(t,o,n)=>{null==this.listeners&&(this.listeners=new eS);let i=this.listeners.push(null==o?t:[t,o]),r={dispose:()=>{r.dispose=e._noop,this._disposed||i()}};return Array.isArray(n)&&n.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new eS);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};ex._noop=function(){};let e_={done:!0,value:void 0},eC=class e{constructor(t){this.element=t,this.next=e.Undefined,this.prev=e.Undefined}};eC.Undefined=new eC(void 0);class eS{constructor(){this._first=eC.Undefined,this._last=eC.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===eC.Undefined}clear(){this._first=eC.Undefined,this._last=eC.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let o=new eC(e);if(this._first===eC.Undefined)this._first=o,this._last=o;else if(t){let e=this._last;this._last=o,o.prev=e,e.next=o}else{let e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===eC.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===eC.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==eC.Undefined&&e.next!==eC.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===eC.Undefined&&e.next===eC.Undefined?(this._first=eC.Undefined,this._last=eC.Undefined):e.next===eC.Undefined?(this._last=this._last.prev,this._last.next=eC.Undefined):e.prev===eC.Undefined&&(this._first=this._first.next,this._first.prev=eC.Undefined);this._size-=1}iterator(){let e;let t=this._first;return{next:function(){return t===eC.Undefined?e_:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==eC.Undefined;t=t.next)e.push(t.element);return e}}let eA=new ex,eP=eA.event;function eE(e){let t=document.documentElement,o=window.getComputedStyle(t),n=document.body.classList,i=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),r=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),s=t.style,a=eg("--vscode-editor-background",o),l=eg("--vscode-editor-foreground",o);l||(l=eg("--vscode-foreground",o));let c=eg("--color-background",o);return s.setProperty("--color-background--lighten-05",ec(c,5)),s.setProperty("--color-background--darken-05",ec(c,-5)),s.setProperty("--color-background--lighten-075",ec(c,7.5)),s.setProperty("--color-background--darken-075",ec(c,-7.5)),s.setProperty("--color-background--lighten-10",ec(c,10)),s.setProperty("--color-background--darken-10",ec(c,-10)),s.setProperty("--color-background--lighten-15",ec(c,15)),s.setProperty("--color-background--darken-15",ec(c,-15)),s.setProperty("--color-background--lighten-30",ec(c,30)),s.setProperty("--color-background--darken-30",ec(c,-30)),s.setProperty("--color-background--lighten-50",ec(c,50)),s.setProperty("--color-background--darken-50",ec(c,-50)),c=eg("--color-button-background",o),s.setProperty("--color-button-background--darken-30",ec(c,-30)),c=eg("--color-highlight",o),s.setProperty("--color-highlight--75",eh(c,75)),s.setProperty("--color-highlight--50",eh(c,50)),s.setProperty("--color-highlight--25",eh(c,25)),c=eg("--color-button-secondary-background",o),s.setProperty("--color-button-secondary-background--darken-30",ec(c,-30)),c=eg("--color-foreground",o),s.setProperty("--color-foreground--85",eh(c,85)),s.setProperty("--color-foreground--75",eh(c,75)),s.setProperty("--color-foreground--65",eh(c,65)),s.setProperty("--color-foreground--50",eh(c,50)),c=eg("--color-link-foreground",o),s.setProperty("--color-link-foreground--darken-20",ec(c,-20)),s.setProperty("--color-link-foreground--lighten-20",ec(c,20)),c=eg("--color-alert-infoBackground",o),s.setProperty("--color-alert-infoHoverBackground",i?ec(c,-5):ec(c,5)),c=eg("--color-alert-warningBackground",o),s.setProperty("--color-alert-warningHoverBackground",i?ec(c,-5):ec(c,5)),c=eg("--color-alert-errorBackground",o),s.setProperty("--color-alert-errorHoverBackground",i?ec(c,-5):ec(c,5)),c=i?ec(a,-5):ec(a,5),s.setProperty("--color-alert-neutralBackground",c),s.setProperty("--color-alert-neutralHoverBackground",i?ec(c,-5):ec(c,5)),{colors:{background:a,foreground:l},computedStyle:o,isLightTheme:i,isHighContrastTheme:r,isInitializing:null==e}}var eR=Object.defineProperty,eD=Object.getOwnPropertyDescriptor;let eO=0;function eT(){return 1073741824===eO?eO=1:eO++,`webview:${eO}`}let eM=new TextDecoder;class eL{constructor(e){this.appName=e;let t=[],o=eE();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(eP(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",V.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=acquireVsCodeApi(),null!=this.state){let e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){let e=new MutationObserver(e=>{eA.fire(eE(e))});return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame(()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(c.on(window,"message",e=>this.onMessageReceivedCore(e))),this.sendCommand(b,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}}),t.push(c.on(window,"pagehide",()=>{t?.forEach(e=>e.dispose()),this.bindDisposables?.forEach(e=>e.dispose()),this.bindDisposables=void 0}))}onMessageReceivedCore(e){let t=K.get(Y),o=e.data;if(o.packed&&o.params instanceof Uint8Array){let n=function(e,t,...o){return(t?.provider??G).enabled(t?.logLevel??"info")?new ea(e,t,...o):void 0}(Q(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});o.params=JSON.parse(eM.decode(o.params)),n?.stop()}this.onMessageReceived(o)}bind(){this.bindDisposables?.forEach(e=>e.dispose()),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);let e=function(e,t){let o,n,i,r,s;function a(e){let o=e-(n??0);return null==n||o>=t||o<0}function l(){let e=Date.now();a(e)?c():s=setTimeout(l,t-(e-(n??0)))}function c(){return(s=void 0,o)?function(){let t=o,n=i;return o=i=void 0,r=e.apply(n,t)}():(o=i=void 0,r)}function h(...e){let c=Date.now(),d=a(c);return(o=e,i=this,n=c,d&&null==s)?s=setTimeout(l,t):null==s&&(s=setTimeout(l,t)),r}return h.cancel=function(){null!=s&&clearTimeout(s),o=n=i=s=void 0},h.flush=function(){return null!=s?c():r},h.pending=function(){return null!=s},h}(e=>{this.sendCommand(m,e)},150);this.bindDisposables.push(c.on(document,"focusin",t=>{let o=t.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==o)&&(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))}),c.on(document,"focusout",()=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))}))}log(e,...t){"string"==typeof e?V.log(e,...t):V.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){let o=eT();this.log(`${this.appName}.sendCommand(${o}): name=${e.method}`),this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,o){let n=eT();this.log(`${this.appName}.sendCommandWithCompletion(${n}): name=${e.method}`);let i=new Promise((e,t)=>{let i;let r=[c.on(window,"message",t=>{g(o,t.data,o=>{t.data.completionId===n&&(r.forEach(e=>e.dispose()),queueMicrotask(()=>e(o)))})}),{dispose:function(){null!=i&&(clearTimeout(i),i=void 0)}}];i=setTimeout(()=>{i=void 0,r.forEach(e=>e.dispose()),t(Error(`Timed out waiting for completion of ${o.method}`))},6e4)});return this.postMessage({id:n,method:e.method,params:t,completionId:n}),i}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}((e,t,o,n)=>{for(var i,r=n>1?void 0:n?eD(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&eR(t,o,r)})([function(e,t=!1){let o,n,i,r;let s=0,a=!1,l=!1,c=!0;null!=e&&({args:o,enter:n,exit:i,prefix:r,logThreshold:s=0,scoped:a=!0,singleLine:l=!1,timed:c=!0}=e),s>0&&(l=!0,c=!0),c&&(a=!0);let h=V.isDebugging,d=t?V.debug:V.log,u=h?"debug":"info";return(e,t,p)=>{let f,g;if("function"==typeof p.value?(f=p.value,g="value"):"function"==typeof p.get&&(f=p.get,g="get"),null==f||null==g)throw Error("Not supported");let b=!1!==o?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),o=(t=(t=t.replace(H,"")||t).slice(0,t.indexOf("{"))).indexOf("("),n=t.indexOf(")");o=o>=0?o+1:0,n=n>0?n:t.indexOf("="),t=t.slice(o,n),t=`(${t})`;let i=B.exec(t);return null!=i?i[1].split(",").map(e=>e.trim().replace(j,"")):[]}(f):[];p[g]=function(...e){var p,g;let m,v;if(!h&&!V.enabled(u))return f.apply(this,e);let y=J(),w=this!=null?this.constructor?.[es]?.(this,q(this))??q(this):void 0,k=w?a?`[${y.toString(16).padStart(5)}] ${w}.${t}`:`${w}.${t}`:t;null!=r&&(k=r({id:y,instance:this,instanceName:w??"",name:t,prefix:k},...e)),a&&(p=m={scopeId:y,prefix:k},K.set(y,p));let $=null!=n?n(...e):"";if(!1===o||0===e.length)v="",l||d.call(V,`${k}${$}`);else{let t,n,i,r;v="";let s=-1;for(r of e){if(n=b[++s],null!=(t=o?.[s])){if("boolean"==typeof t)continue;if(v.length>0&&(v+=", "),"string"==typeof t){v+=t;continue}i=String(t(r))}else v.length>0&&(v+=", "),i=V.toLoggable(r);v+=n?`${n}=${i}`:i}l||d.call(V,v?`${k}${$}(${v})`:`${k}${$}`)}if(l||c||null!=i){let t;let o=c?N():void 0,n=e=>{let t=void 0!==o?` [${ei(o)}ms]`:"";l?V.error(e,v?`${k}${$}(${v})`:`${k}${$}`,m?.exitDetails?`failed${m.exitDetails}${t}`:`failed${t}`):V.error(e,k,m?.exitDetails?`failed${m.exitDetails}${t}`:`failed${t}`),a&&K.delete(y)};try{t=f.apply(this,e)}catch(e){throw n(e),e}let r=e=>{let t,n,r,c;if(null!=o?(t=ei(o))>500?(n=V.warn,r=` [*${t}ms] (slow)`):(n=d,r=` [${t}ms]`):(r="",n=d),null!=i){if("function"==typeof i)try{c=i(e)}catch(e){c=`@log.exit error: ${e}`}else!0===i&&(c=`returned ${V.toLoggable(e)}`)}else m?.exitFailed?(c=m.exitFailed,n=V.error):c="completed";l?(0===s||t>s)&&n.call(V,v?`${k}${$}(${v}) ${c}${m?.exitDetails||""}${r}`:`${k}${$} ${c}${m?.exitDetails||""}${r}`):n.call(V,v?`${k}(${v}) ${c}${m?.exitDetails||""}${r}`:`${k} ${c}${m?.exitDetails||""}${r}`),a&&K.delete(y)};return null!=t&&null!=(g=t)&&(g instanceof Promise||"function"==typeof g?.then)?t.then(r,n):r(t),t}return f.apply(this,e)}}}({args:{0:e=>`${e.data.id}, method=${e.data.method}`}},!0)],eL.prototype,"onMessageReceivedCore",1);let eU=globalThis,eI=eU.ShadowRoot&&(void 0===eU.ShadyCSS||eU.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,eF=Symbol(),eN=new WeakMap;class eB{constructor(e,t,o){if(this._$cssResult$=!0,o!==eF)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(eI&&void 0===e){let o=void 0!==t&&1===t.length;o&&(e=eN.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&eN.set(t,e))}return e}toString(){return this.cssText}}let eH=e=>new eB("string"==typeof e?e:e+"",void 0,eF),ej=(e,...t)=>new eB(1===e.length?e[0]:t.reduce((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]),e,eF),ez=(e,t)=>{if(eI)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let o of t){let t=document.createElement("style"),n=eU.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=o.cssText,e.appendChild(t)}},eV=eI?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return eH(t)})(e):e,{is:eW,defineProperty:eq,getOwnPropertyDescriptor:eG,getOwnPropertyNames:eK,getOwnPropertySymbols:eY,getPrototypeOf:eQ}=Object,eJ=globalThis,eZ=eJ.trustedTypes,eX=eZ?eZ.emptyScript:"",e0=eJ.reactiveElementPolyfillSupport,e1=(e,t)=>e,e2={toAttribute(e,t){switch(t){case Boolean:e=e?eX:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},e5=(e,t)=>!eW(e,t),e6={attribute:!0,type:String,converter:e2,reflect:!1,hasChanged:e5};Symbol.metadata??=Symbol("metadata"),eJ.litPropertyMetadata??=new WeakMap;class e3 extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=e6){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&eq(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){let{get:n,set:i}=eG(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){let r=n?.call(this);i.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??e6}static _$Ei(){if(this.hasOwnProperty(e1("elementProperties")))return;let e=eQ(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(e1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(e1("properties"))){let e=this.properties;for(let t of[...eK(e),...eY(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,o]of t)this.elementProperties.set(e,o)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let o of new Set(e.flat(1/0).reverse()))t.unshift(eV(o));else void 0!==e&&t.push(eV(e));return t}static _$Eu(e,t){let o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ez(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){let o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){let i=(void 0!==o.converter?.toAttribute?o.converter:e2).toAttribute(t,o.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){let o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){let e=o.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:e2;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,n=!1,i){if(void 0!==e){if(!((o??=this.constructor.getPropertyOptions(e)).hasChanged??e5)(n?i:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$E_?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}}e3.elementStyles=[],e3.shadowRootOptions={mode:"open"},e3[e1("elementProperties")]=new Map,e3[e1("finalized")]=new Map,e0?.({ReactiveElement:e3}),(eJ.reactiveElementVersions??=[]).push("2.0.2");let e7=globalThis,e4=e7.trustedTypes,e8=e4?e4.createPolicy("lit-html",{createHTML:e=>e}):void 0,e9="$lit$",te=`lit$${(Math.random()+"").slice(9)}$`,tt="?"+te,to=`<${tt}>`,tn=document,ti=()=>tn.createComment(""),tr=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ts=Array.isArray,ta=e=>ts(e)||"function"==typeof e?.[Symbol.iterator],tl="[ 	\n\f\r]",tc=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,th=/-->/g,td=/>/g,tu=RegExp(`>|${tl}(?:([^\\s"'>=/]+)(${tl}*=${tl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tp=/'/g,tf=/"/g,tg=/^(?:script|style|textarea|title)$/i,tb=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),tm=tb(1),tv=(tb(2),Symbol.for("lit-noChange")),ty=Symbol.for("lit-nothing"),tw=new WeakMap,tk=tn.createTreeWalker(tn,129);function t$(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e8?e8.createHTML(t):t}let tx=(e,t)=>{let o=e.length-1,n=[],i,r=2===t?"<svg>":"",s=tc;for(let t=0;t<o;t++){let o=e[t],a,l,c=-1,h=0;for(;h<o.length&&(s.lastIndex=h,null!==(l=s.exec(o)));)h=s.lastIndex,s===tc?"!--"===l[1]?s=th:void 0!==l[1]?s=td:void 0!==l[2]?(tg.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=tu):void 0!==l[3]&&(s=tu):s===tu?">"===l[0]?(s=i??tc,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?tu:'"'===l[3]?tf:tp):s===tf||s===tp?s=tu:s===th||s===td?s=tc:(s=tu,i=void 0);let d=s===tu&&e[t+1].startsWith("/>")?" ":"";r+=s===tc?o+to:c>=0?(n.push(a),o.slice(0,c)+e9+o.slice(c)+te+d):o+te+(-2===c?t:d)}return[t$(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),n]};class t_{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0,s=e.length-1,a=this.parts,[l,c]=tx(e,t);if(this.el=t_.createElement(l,o),tk.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=tk.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(let e of n.getAttributeNames())if(e.endsWith(e9)){let t=c[r++],o=n.getAttribute(e).split(te),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:i,name:s[2],strings:o,ctor:"."===s[1]?tE:"?"===s[1]?tR:"@"===s[1]?tD:tP}),n.removeAttribute(e)}else e.startsWith(te)&&(a.push({type:6,index:i}),n.removeAttribute(e));if(tg.test(n.tagName)){let e=n.textContent.split(te),t=e.length-1;if(t>0){n.textContent=e4?e4.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],ti()),tk.nextNode(),a.push({type:2,index:++i});n.append(e[t],ti())}}}else if(8===n.nodeType){if(n.data===tt)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(te,e+1));)a.push({type:7,index:i}),e+=te.length-1}}i++}}static createElement(e,t){let o=tn.createElement("template");return o.innerHTML=e,o}}function tC(e,t,o=e,n){if(t===tv)return t;let i=void 0!==n?o._$Co?.[n]:o._$Cl,r=tr(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),void 0===r?i=void 0:(i=new r(e))._$AT(e,o,n),void 0!==n?(o._$Co??=[])[n]=i:o._$Cl=i),void 0!==i&&(t=tC(e,i._$AS(e,t.values),i,n)),t}class tS{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??tn).importNode(t,!0);tk.currentNode=n;let i=tk.nextNode(),r=0,s=0,a=o[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new tA(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new tO(i,this,e)),this._$AV.push(t),a=o[++s]}r!==a?.index&&(i=tk.nextNode(),r++)}return tk.currentNode=tn,n}p(e){let t=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class tA{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=ty,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){tr(e=tC(this,e,t))?e===ty||null==e||""===e?(this._$AH!==ty&&this._$AR(),this._$AH=ty):e!==this._$AH&&e!==tv&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):ta(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==ty&&tr(this._$AH)?this._$AA.nextSibling.data=e:this.$(tn.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=t_.createElement(t$(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{let e=new tS(n,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=tw.get(e.strings);return void 0===t&&tw.set(e.strings,t=new t_(e)),t}T(e){ts(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,n=0;for(let i of e)n===t.length?t.push(o=new tA(this.k(ti()),this.k(ti()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class tP{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,i){this.type=1,this._$AH=ty,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=ty}_$AI(e,t=this,o,n){let i=this.strings,r=!1;if(void 0===i)(r=!tr(e=tC(this,e,t,0))||e!==this._$AH&&e!==tv)&&(this._$AH=e);else{let n,s;let a=e;for(e=i[0],n=0;n<i.length-1;n++)(s=tC(this,a[o+n],t,n))===tv&&(s=this._$AH[n]),r||=!tr(s)||s!==this._$AH[n],s===ty?e=ty:e!==ty&&(e+=(s??"")+i[n+1]),this._$AH[n]=s}r&&!n&&this.O(e)}O(e){e===ty?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class tE extends tP{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===ty?void 0:e}}class tR extends tP{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==ty)}}class tD extends tP{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){if((e=tC(this,e,t,0)??ty)===tv)return;let o=this._$AH,n=e===ty&&o!==ty||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==ty&&(o===ty||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class tO{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){tC(this,e)}}let tT=e7.litHtmlPolyfillSupport;tT?.(t_,tA),(e7.litHtmlVersions??=[]).push("3.1.0");let tM=(e,t,o)=>{let n=o?.renderBefore??t,i=n._$litPart$;if(void 0===i){let e=o?.renderBefore??null;n._$litPart$=i=new tA(t.insertBefore(ti(),e),e,void 0,o??{})}return i._$AI(e),i};class tL extends e3{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=tM(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return tv}}tL._$litElement$=!0,tL.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:tL});let tU=globalThis.litElementPolyfillSupport;tU?.({LitElement:tL}),(globalThis.litElementVersions??=[]).push("4.0.2");let tI=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},tF={attribute:!0,type:String,converter:e2,reflect:!1,hasChanged:e5},tN=(e=tF,t,o)=>{let{kind:n,metadata:i}=o,r=globalThis.litPropertyMetadata.get(i);if(void 0===r&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(o.name,e),"accessor"===n){let{name:n}=o;return{set(o){let i=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){let{name:n}=o;return function(o){let i=this[n];t.call(this,o),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function tB(e){return(t,o)=>"object"==typeof o?tN(e,t,o):((e,t,o)=>{let n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function tH(e){return tB({...e,state:!0,attribute:!1})}let tj=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function tz(e){return(t,o)=>{let{slot:n,selector:i}=e??{},r="slot"+(n?`[name=${n}]`:":not([name])");return tj(t,o,{get(){let t=this.renderRoot?.querySelector(r),o=t?.assignedElements(e)??[];return void 0===i?o:o.filter(e=>e.matches(i))}})}}var tV=Object.defineProperty,tW=Object.getOwnPropertyDescriptor,tq=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?tW(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&tV(t,o,r),r};let tG=class extends tL{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};tG.styles=ej`
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
	`,tq([tB()],tG.prototype,"icon",2),tq([tB()],tG.prototype,"modifier",2),tq([tB({type:Number})],tG.prototype,"size",2),tG=tq([tI("code-icon")],tG);var tK=Object.defineProperty,tY=Object.getOwnPropertyDescriptor,tQ=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?tY(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&tK(t,o,r),r};let tJ=class extends tL{constructor(){super(...arguments),this.label="",this.icon=""}render(){return tm`
			<a
				role="${this.href?ty:"button"}"
				type="${this.href?ty:"button"}"
				aria-label="${this.label}"
				title="${this.label}"
			>
				<code-icon icon="${this.icon}"></code-icon>
			</a>
		`}};tJ.styles=ej`
		:host {
			box-sizing: border-box;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			border-radius: 0.5rem;
			color: inherit;
			padding: 0.2rem;
			vertical-align: text-bottom;
			text-decoration: none;
			cursor: pointer;
		}

		:host(:focus) {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: -1px;
		}

		:host(:hover) {
			background-color: var(--vscode-toolbar-hoverBackground);
		}

		:host(:active) {
			background-color: var(--vscode-toolbar-activeBackground);
		}
	`,tQ([tB()],tJ.prototype,"href",2),tQ([tB()],tJ.prototype,"label",2),tQ([tB()],tJ.prototype,"icon",2),tJ=tQ([tI("action-item")],tJ);var tZ=Object.defineProperty,tX=Object.getOwnPropertyDescriptor,t0=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?tX(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&tZ(t,o,r),r};let t1=class extends tL{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.()}render(){return tm`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<2)return;let t=this.handleKeydown.bind(this),o=`${this.actionNodes.length}`,n=this.actionNodes.map((e,n)=>(e.setAttribute("aria-posinset",`${n+1}`),e.setAttribute("aria-setsize",o),e.setAttribute("tabindex",0===n?"0":"-1"),e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}}));this._slotSubscriptionsDisposer=()=>{n?.forEach(({dispose:e})=>e())}}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;let t=e.target,o=parseInt(t.getAttribute("aria-posinset")??"0",10),n=null;if("ArrowLeft"===e.key){let e=1===o?this.actionNodes.length-1:o-2;n=this.actionNodes[e]}else if("ArrowRight"===e.key){let e=o===this.actionNodes.length?0:o;n=this.actionNodes[e]}null!=n&&n!==t&&(t.setAttribute("tabindex","-1"),n.setAttribute("tabindex","0"),n.focus())}};t1.styles=ej`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,t0([tz({flatten:!0})],t1.prototype,"actionNodes",2),t1=t0([tI("action-nav")],t1);let t2=()=>({toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))}),t5=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,t6=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,t3=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],t7=new Map,t4=["th","st","nd","rd"];var t8=Object.defineProperty,t9=Object.getOwnPropertyDescriptor,oe=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?t9(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&t8(t,o,r),r};let ot=class extends tL{constructor(){super(...arguments),this.format="MMMM Do, YYYY h:mma",this.date=new Date}render(){return tm`<time datetime="${this.date}" title="${function(t,o,n,i=!0){o=o??void 0;let r=`${n??""}:${o}`,s=t7.get(r);if(null==s){let t=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=t6.exec(e);if(t?.groups!=null){let{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}let o={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(t5))if(null!=t)for(let e in t){let n=t[e];if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":"DD"===n?o.day="2-digit":o.day="numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(o);s=new Intl.DateTimeFormat(null==n?e:"system"===n?void 0:[n],t),i&&t7.set(r,s)}if(null==o||t6.test(o))return s.format(t);let a=s.formatToParts(t);return o.replace(t5,(o,r,s,l,c,h,d,u,p,f,g,b,m,v,y)=>{if(null!=r)return r.substring(1,r.length-1);for(let o in y){let r=y[o];if(null==r)continue;let s=a.find(e=>e.type===o);if("Do"===r&&s?.type==="day")return function(e){let t=e%100;return`${e}${t4[(t-20)%10]??t4[t]??"th"}`}(Number(s.value));if("a"===r&&s?.type==="dayPeriod"){let o=(function(t){let o=`${n??""}:time:${t}`,r=t7.get(o);if(null==r){let s;s=null==n?e:"system"===n?void 0:[n],r=new Intl.DateTimeFormat(s,{localeMatcher:"best fit",timeStyle:t}),i&&t7.set(o,r)}return r})("short").formatToParts(t).find(e=>"dayPeriod"===e.type);return` ${(o??s)?.value??""}`}return s?.value??""}return""})}(this.date,this.format??"MMMM Do, YYYY h:mma")}"
			>${function(o,n){let i=("number"==typeof o?o:o.getTime())-new Date().getTime();for(let[o,n,r,s]of t3)if(Math.abs(i)>=n||1e3===n)return null==t&&(t=new Intl.RelativeTimeFormat(e,{localeMatcher:"best fit",numeric:"auto",style:"long"})),t.format(Math.round(i/r),o);return""}(this.date)}</time
		>`}};oe([tB()],ot.prototype,"format",2),oe([tB({converter:t2(),reflect:!0})],ot.prototype,"date",2),ot=oe([tI("formatted-date")],ot);var oo=Object.defineProperty,on=Object.getOwnPropertyDescriptor,oi=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?on(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&oo(t,o,r),r};let or=class extends tL{constructor(){super(...arguments),this.name="",this.email="",this.avatarUrl="https://www.gravatar.com/avatar/?s=64&d=robohash",this.showAvatar=!1,this.dateFormat="MMMM Do, YYYY h:mma",this.committer=!1,this.actionLabel="committed"}render(){let e=this.showAvatar&&null!=this.avatarUrl&&this.avatarUrl.length>0;return tm`
			<a class="avatar" href="${this.email?`mailto:${this.email}`:"#"}">
				${e?tm`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:tm`<code-icon icon="person" size="32"></code-icon>`}
			</a>
			<a class="name" href="${this.email?`mailto:${this.email}`:"#"}">${this.name}</a>
			<span class="date">
				${this.actionLabel}
				<formatted-date date=${this.date?.getTime()} format=${this.dateFormat}> </formatted-date>
			</span>
		`}};or.styles=ej`
		:host {
			display: grid;
			gap: 0rem 1rem;
			justify-content: start;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.avatar {
			grid-column: 1;
			grid-row: 1 / 3;
			width: 36px;
		}

		.thumb {
			width: 100%;
			height: auto;
			border-radius: 0.4rem;
		}

		.name {
			grid-column: 2;
			grid-row: 1;
			font-size: 1.5rem;
		}

		.date {
			grid-column: 2;
			grid-row: 2;
			font-size: 1.3rem;
		}
	`,oi([tB()],or.prototype,"name",2),oi([tB()],or.prototype,"email",2),oi([tB({converter:t2(),reflect:!0})],or.prototype,"date",2),oi([tB()],or.prototype,"avatarUrl",2),oi([tB({type:Boolean})],or.prototype,"showAvatar",2),oi([tB()],or.prototype,"dateFormat",2),oi([tB({type:Boolean})],or.prototype,"committer",2),oi([tB()],or.prototype,"actionLabel",2),or=oi([tI("commit-identity")],or);var os=Object.defineProperty,oa=Object.getOwnPropertyDescriptor,ol=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?oa(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&os(t,o,r),r};let oc=class extends tL{constructor(){super(...arguments),this.url="",this.name="",this.date="",this.status="merged",this.type="autolink",this.key=""}renderDate(){return""===this.date?ty:tm`<formatted-date date="${this.date}"></formatted-date>`}render(){let e;switch(this.type){case"issue":e="closed"===this.status?"pass":"issues";break;case"pr":switch(this.status){case"merged":e="git-merge";break;case"closed":e="git-pull-request-closed";break;default:e="git-pull-request"}break;default:e="link"}return tm`
			<span class="icon"><code-icon icon=${e}></code-icon></span>
			<p class="title">
				<a href="${this.url}">${this.name}</a>
			</p>
			<p class="date">${this.key} ${this.status?this.status:ty} ${this.renderDate()}</p>
		`}};oc.styles=ej`
		:host {
			display: grid;
			gap: 0.25rem 0.6rem;
			justify-content: start;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.icon {
			grid-column: 1;
			grid-row: 1 / 3;
			color: var(--vscode-gitlens-mergedPullRequestIconColor);
			text-align: center;
			padding-top: 0.1rem;
		}

		.title {
			grid-column: 2;
			grid-row: 1;
			margin: 0;
			font-size: 1.4rem;
		}

		.date {
			grid-column: 2;
			grid-row: 2;
			margin: 0;
			font-size: 1.3rem;
		}
	`,ol([tB()],oc.prototype,"url",2),ol([tB()],oc.prototype,"name",2),ol([tB()],oc.prototype,"date",2),ol([tB()],oc.prototype,"status",2),ol([tB()],oc.prototype,"type",2),ol([tB()],oc.prototype,"key",2),oc=ol([tI("issue-pull-request")],oc);var oh=Object.defineProperty,od=Object.getOwnPropertyDescriptor,ou=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?od(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&oh(t,o,r),r};let op=class extends tL{constructor(){super(...arguments),this.lines=1}render(){let e=`--skeleton-lines: ${this.lines};`;return tm`<div class="skeleton" style=${e}></div>`}};function of(e,t,o){return e?t(e):o?.(e)}op.styles=ej`
		:host {
			--skeleton-line-height: 1.2;
			--skeleton-lines: 1;
		}

		.skeleton {
			position: relative;
			display: block;
			overflow: hidden;
			border-radius: 0.25em;
			width: 100%;
			height: calc(1em * var(--skeleton-line-height, 1.2) * var(--skeleton-lines, 1));
			background-color: var(--color-background--lighten-15);
		}

		.skeleton::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(
				to right,
				transparent 0%,
				var(--color-background--lighten-15) 20%,
				var(--color-background--lighten-30) 60%,
				transparent 100%
			);
			transform: translateX(-100%);
			animation: skeleton-loader 2s ease-in-out infinite;
		}

		@keyframes skeleton-loader {
			100% {
				transform: translateX(100%);
			}
		}
	`,ou([tB({type:Number})],op.prototype,"lines",2),op=ou([tI("skeleton-loader")],op);var og=Object.defineProperty,ob=Object.getOwnPropertyDescriptor,om=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?ob(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&og(t,o,r),r};let ov=class extends tL{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return tm`
			${of(null!=this.added,()=>tm`<span class="stat added" title="${this.added} added" aria-label="${this.added} added"
						><span class="label">+${this.added}</span></span
					>`)}
			${of(null!=this.modified,()=>tm`<span
						class="stat modified"
						title="${this.modified} modified"
						aria-label="${this.modified} modified"
						><span class="label">~${this.modified}</span></span
					>`)}
			${of(null!=this.removed,()=>tm`<span class="stat deleted" title="${this.removed} removed" aria-label="${this.removed} removed"
						><span class="label">-${this.removed}</span></span
					>`)}
		`}};ov.styles=ej`
		:host {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
		}

		.stat {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
		}

		.stat code-icon {
			margin-right: 0.25rem;
		}

		.added {
			color: var(--vscode-gitDecoration-addedResourceForeground);
		}
		.modified {
			color: var(--vscode-gitDecoration-modifiedResourceForeground);
		}
		.deleted {
			color: var(--vscode-gitDecoration-deletedResourceForeground);
		}

		.label {
			flex-basis: 100%;
			text-align: center;
		}
	`,om([tB({type:Number})],ov.prototype,"added",2),om([tB({type:Number})],ov.prototype,"modified",2),om([tB({type:Number})],ov.prototype,"removed",2),ov=om([tI("commit-stats")],ov),ej`
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
`;let oy=ej`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,ow=ej`
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
`;ej`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${oy}
	}
	a:hover {
		text-decoration: underline;
	}
`;let ok=ej`
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
`;var o$=Object.defineProperty,ox=Object.getOwnPropertyDescriptor,o_=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?ox(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&o$(t,o,r),r};let oC=class extends tL{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return tm`<div class="progress-bar"></div>`}};oC.styles=ej`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='bottom']) {
			bottom: 0;
		}

		:host([position='top']) {
			top: 0;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([active]:not([active='false'])) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,o_([tB({reflect:!0})],oC.prototype,"mode",2),o_([tB({type:Boolean})],oC.prototype,"active",2),o_([tB()],oC.prototype,"position",2),oC=o_([tI("progress-indicator")],oC);var oS=Object.defineProperty,oA=Object.getOwnPropertyDescriptor,oP=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?oA(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&oS(t,o,r),r};let oE=class extends tL{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?tm`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:tm`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return tm`
			<header class="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator ?active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" part="content" class="content scrollable">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};oE.styles=[ok,ej`
			:host {
				display: flex;
				flex-direction: column;
				background-color: var(--vscode-sideBar-background);
			}

			* {
				box-sizing: border-box;
			}

			.header {
				flex: none;
				display: flex;
				background-color: var(--vscode-sideBarSectionHeader-background);
				color: var(--vscode-sideBarSectionHeader-foreground);
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
				position: relative;
			}

			.header:focus-within {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.label {
				appearance: none;
				display: flex;
				flex-direction: row;
				align-items: center;
				width: 100%;
				padding: 0;
				border: none;
				text-align: left;
				font-family: var(--font-family);
				font-size: 1.1rem;
				line-height: 2.2rem;
				height: 2.2rem;
				background: transparent;
				color: inherit;
				outline: none;
				text-overflow: ellipsis;
				user-select: none;
			}

			:host([collapsable]) .label {
				cursor: pointer;
			}

			.title {
				font-weight: bold;
				text-transform: uppercase;
			}

			:host(:not([collapsable])) .title {
				margin-left: 0.8rem;
			}

			.subtitle {
				margin-left: 1rem;
				opacity: 0.6;
			}

			.icon {
				font-weight: normal;
				margin: 0 0.2rem;
			}

			.content {
				flex: 1;
				overflow: auto;
				min-height: 0;
				/*
			scrollbar-gutter: stable;
			box-shadow: #000000 0 0.6rem 0.6rem -0.6rem inset;
			*/
				padding-top: 0.6rem;
			}

			:host([collapsable]:not([expanded])) .content,
			:host([collapsable][expanded='false']) .content {
				display: none;
			}

			slot[name='actions']::slotted(*) {
				flex: none;
				margin-left: auto;
			}
		`],oP([tB({type:Boolean,reflect:!0})],oE.prototype,"collapsable",2),oP([tB({type:Boolean,reflect:!0})],oE.prototype,"expanded",2),oP([tB({type:Boolean,reflect:!0})],oE.prototype,"loading",2),oE=oP([tI("webview-pane")],oE);var oR={408:(e,t)=>{var o=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),p=Symbol.iterator,f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,b={};function m(e,t,o){this.props=e,this.context=t,this.refs=b,this.updater=o||f}function v(){}function y(e,t,o){this.props=e,this.context=t,this.refs=b,this.updater=o||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var w=y.prototype=new v;w.constructor=y,g(w,m.prototype),w.isPureReactComponent=!0;var k=Array.isArray,$=Object.prototype.hasOwnProperty,x={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var i,r={},s=null,a=null;if(null!=t)for(i in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)$.call(t,i)&&!_.hasOwnProperty(i)&&(r[i]=t[i]);var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){for(var c=Array(l),h=0;h<l;h++)c[h]=arguments[h+2];r.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===r[i]&&(r[i]=l[i]);return{$$typeof:o,type:e,key:s,ref:a,props:r,_owner:x.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var A=/\/+/g;function P(e,t){var o,n;return"object"==typeof e&&null!==e&&null!=e.key?(o=""+e.key,n={"=":"=0",":":"=2"},"$"+o.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function E(e,t,i){if(null==e)return e;var r=[],s=0;return function e(t,i,r,s,a){var l,c,h,d=typeof t;"undefined"!==d&&"boolean"!==d||(t=null);var u=!1;if(null===t)u=!0;else switch(d){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case o:case n:u=!0}}if(u)return a=a(u=t),t=""===s?"."+P(u,0):s,k(a)?(r="",null!=t&&(r=t.replace(A,"$&/")+"/"),e(a,i,r,"",function(e){return e})):null!=a&&(S(a)&&(l=a,c=r+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(A,"$&/")+"/")+t,a={$$typeof:o,type:l.type,key:c,ref:l.ref,props:l.props,_owner:l._owner}),i.push(a)),1;if(u=0,s=""===s?".":s+":",k(t))for(var f=0;f<t.length;f++){var g=s+P(d=t[f],f);u+=e(d,i,r,g,a)}else if("function"==typeof(g=null===(h=t)||"object"!=typeof h?null:"function"==typeof(h=p&&h[p]||h["@@iterator"])?h:null))for(t=g.call(t),f=0;!(d=t.next()).done;)u+=e(d=d.value,i,r,g=s+P(d,f++),a);else if("object"===d)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(i=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":i)+"). If you meant to render a collection of children, use an array instead.");return u}(e,r,"","",function(e){return t.call(i,e,s++)}),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},O={transition:null};t.Children={map:E,forEach:function(e,t,o){E(e,function(){t.apply(this,arguments)},o)},count:function(e){var t=0;return E(e,function(){t++}),t},toArray:function(e){return E(e,function(e){return e})||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=i,t.Profiler=s,t.PureComponent=y,t.StrictMode=r,t.Suspense=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:O,ReactCurrentOwner:x},t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=g({},e.props),r=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=x.current),void 0!==t.key&&(r=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)$.call(t,c)&&!_.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){l=Array(c);for(var h=0;h<c;h++)l[h]=arguments[h+2];i.children=l}return{$$typeof:o,type:e.type,key:r,ref:s,props:i,_owner:a}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return D.current.useCallback(e,t)},t.useContext=function(e){return D.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return D.current.useDeferredValue(e)},t.useEffect=function(e,t){return D.current.useEffect(e,t)},t.useId=function(){return D.current.useId()},t.useImperativeHandle=function(e,t,o){return D.current.useImperativeHandle(e,t,o)},t.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return D.current.useMemo(e,t)},t.useReducer=function(e,t,o){return D.current.useReducer(e,t,o)},t.useRef=function(e){return D.current.useRef(e)},t.useState=function(e){return D.current.useState(e)},t.useSyncExternalStore=function(e,t,o){return D.current.useSyncExternalStore(e,t,o)},t.useTransition=function(){return D.current.useTransition()},t.version="18.2.0"},294:(e,t,o)=>{e.exports=o(408)}},oD={};function oO(e){var t=oD[e];if(void 0!==t)return t.exports;var o=oD[e]={exports:{}};return oR[e](o,o.exports,oO),o.exports}oO.d=(e,t)=>{for(var o in t)oO.o(t,o)&&!oO.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},oO.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var oT={};(()=>{let e,t,o,n;oO.d(oT,{Tn:()=>td,qE:()=>tk,HE:()=>t$,Ct:()=>tS,zx:()=>tR,M1:()=>tM,sX:()=>tY,D0:()=>tG,fs:()=>tK,Tw:()=>tm,ud:()=>tx,wt:()=>t_,ne:()=>tA,Ku:()=>tD,FU:()=>tL,XO:()=>tQ,Ze:()=>tJ,K$:()=>tZ,cX:()=>ot,Js:()=>oo,J9:()=>on,si:()=>tz,sg:()=>os,hW:()=>oa,II:()=>t6,v2:()=>t8,sN:()=>t9,Lb:()=>oe,J2:()=>ta,$$:()=>tj,Vp:()=>or,u:()=>tc,fW:()=>function e(...t){t.forEach(t=>{t.elementName&&!customElements.get(t.elementName)&&(customElements.define(t.elementName,t),t.components&&t.components.length>0&&e(...t.components))})},WV:()=>ek,h4:()=>ew,kZ:()=>ey});let i=globalThis,r=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),a=new WeakMap;class l{constructor(e,t,o){if(this._$cssResult$=!0,o!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(r&&void 0===e){let o=void 0!==t&&1===t.length;o&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&a.set(t,e))}return e}toString(){return this.cssText}}let c=(e,...t)=>new l(1===e.length?e[0]:t.reduce((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]),e,s),h=(e,t)=>{if(r)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let o of t){let t=document.createElement("style"),n=i.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=o.cssText,e.appendChild(t)}},d=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{var t;let o="";for(let t of e.cssRules)o+=t.cssText;return new l("string"==typeof(t=o)?t:t+"",void 0,s)})(e):e,{is:u,defineProperty:p,getOwnPropertyDescriptor:f,getOwnPropertyNames:g,getOwnPropertySymbols:b,getPrototypeOf:m}=Object,v=globalThis,y=v.trustedTypes,w=y?y.emptyScript:"",k=v.reactiveElementPolyfillSupport,$=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?w:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},_=(e,t)=>!u(e,t),C={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=C){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&p(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){let{get:n,set:i}=f(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){let r=n?.call(this);i.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??C}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;let e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){let e=this.properties;for(let t of[...g(e),...b(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,o]of t)this.elementProperties.set(e,o)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let o of new Set(e.flat(1/0).reverse()))t.unshift(d(o));else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){let o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return h(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){let o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){let i=(void 0!==o.converter?.toAttribute?o.converter:x).toAttribute(t,o.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){let o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){let e=o.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:x;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,n=!1,i){if(void 0!==e){if(!((o??=this.constructor.getPropertyOptions(e)).hasChanged??_)(n?i:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$ES?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[$("elementProperties")]=new Map,S[$("finalized")]=new Map,k?.({ReactiveElement:S}),(v.reactiveElementVersions??=[]).push("2.0.0");let A=globalThis,P=A.trustedTypes,E=P?P.createPolicy("lit-html",{createHTML:e=>e}):void 0,R="$lit$",D=`lit$${(Math.random()+"").slice(9)}$`,O="?"+D,T=`<${O}>`,M=document,L=()=>M.createComment(""),U=e=>null===e||"object"!=typeof e&&"function"!=typeof e,I=Array.isArray,F=e=>I(e)||"function"==typeof e?.[Symbol.iterator],N="[ 	\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,j=/>/g,z=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,W=/"/g,q=/^(?:script|style|textarea|title)$/i,G=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),K=G(1),Y=(G(2),Symbol.for("lit-noChange")),Q=Symbol.for("lit-nothing"),J=new WeakMap,Z=M.createTreeWalker(M,129);function X(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}let ee=(e,t)=>{let o=e.length-1,n=[],i,r=2===t?"<svg>":"",s=B;for(let t=0;t<o;t++){let o=e[t],a,l,c=-1,h=0;for(;h<o.length&&(s.lastIndex=h,null!==(l=s.exec(o)));)h=s.lastIndex,s===B?"!--"===l[1]?s=H:void 0!==l[1]?s=j:void 0!==l[2]?(q.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=z):void 0!==l[3]&&(s=z):s===z?">"===l[0]?(s=i??B,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?z:'"'===l[3]?W:V):s===W||s===V?s=z:s===H||s===j?s=B:(s=z,i=void 0);let d=s===z&&e[t+1].startsWith("/>")?" ":"";r+=s===B?o+T:c>=0?(n.push(a),o.slice(0,c)+R+o.slice(c)+D+d):o+D+(-2===c?t:d)}return[X(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),n]};class et{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0,s=e.length-1,a=this.parts,[l,c]=ee(e,t);if(this.el=et.createElement(l,o),Z.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Z.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(let e of n.getAttributeNames())if(e.endsWith(R)){let t=c[r++],o=n.getAttribute(e).split(D),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:i,name:s[2],strings:o,ctor:"."===s[1]?es:"?"===s[1]?ea:"@"===s[1]?el:er}),n.removeAttribute(e)}else e.startsWith(D)&&(a.push({type:6,index:i}),n.removeAttribute(e));if(q.test(n.tagName)){let e=n.textContent.split(D),t=e.length-1;if(t>0){n.textContent=P?P.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],L()),Z.nextNode(),a.push({type:2,index:++i});n.append(e[t],L())}}}else if(8===n.nodeType){if(n.data===O)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(D,e+1));)a.push({type:7,index:i}),e+=D.length-1}}i++}}static createElement(e,t){let o=M.createElement("template");return o.innerHTML=e,o}}function eo(e,t,o=e,n){if(t===Y)return t;let i=void 0!==n?o._$Co?.[n]:o._$Cl,r=U(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),void 0===r?i=void 0:(i=new r(e))._$AT(e,o,n),void 0!==n?(o._$Co??=[])[n]=i:o._$Cl=i),void 0!==i&&(t=eo(e,i._$AS(e,t.values),i,n)),t}class en{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??M).importNode(t,!0);Z.currentNode=n;let i=Z.nextNode(),r=0,s=0,a=o[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new ei(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new ec(i,this,e)),this._$AV.push(t),a=o[++s]}r!==a?.index&&(i=Z.nextNode(),r++)}return Z.currentNode=M,n}p(e){let t=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class ei{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){U(e=eo(this,e,t))?e===Q||null==e||""===e?(this._$AH!==Q&&this._$AR(),this._$AH=Q):e!==this._$AH&&e!==Y&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):F(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Q&&U(this._$AH)?this._$AA.nextSibling.data=e:this.$(M.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=et.createElement(X(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{let e=new en(n,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=J.get(e.strings);return void 0===t&&J.set(e.strings,t=new et(e)),t}T(e){I(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,n=0;for(let i of e)n===t.length?t.push(o=new ei(this.k(L()),this.k(L()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class er{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,i){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Q}_$AI(e,t=this,o,n){let i=this.strings,r=!1;if(void 0===i)(r=!U(e=eo(this,e,t,0))||e!==this._$AH&&e!==Y)&&(this._$AH=e);else{let n,s;let a=e;for(e=i[0],n=0;n<i.length-1;n++)(s=eo(this,a[o+n],t,n))===Y&&(s=this._$AH[n]),r||=!U(s)||s!==this._$AH[n],s===Q?e=Q:e!==Q&&(e+=(s??"")+i[n+1]),this._$AH[n]=s}r&&!n&&this.j(e)}j(e){e===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class es extends er{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Q?void 0:e}}class ea extends er{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Q)}}class el extends er{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){if((e=eo(this,e,t,0)??Q)===Y)return;let o=this._$AH,n=e===Q&&o!==Q||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==Q&&(o===Q||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ec{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){eo(this,e)}}let eh=A.litHtmlPolyfillSupport;eh?.(et,ei),(A.litHtmlVersions??=[]).push("3.0.0");class ed extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{let n=o?.renderBefore??t,i=n._$litPart$;if(void 0===i){let e=o?.renderBefore??null;n._$litPart$=i=new ei(t.insertBefore(L(),e),e,void 0,o??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}}ed._$litElement$=!0,ed.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ed});let eu=globalThis.litElementPolyfillSupport;eu?.({LitElement:ed}),(globalThis.litElementVersions??=[]).push("4.0.0");let ep={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:_},ef=(e=ep,t,o)=>{let{kind:n,metadata:i}=o,r=globalThis.litPropertyMetadata.get(i);if(void 0===r&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(o.name,e),"accessor"===n){let{name:n}=o;return{set(o){let i=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){let{name:n}=o;return function(o){let i=this[n];t.call(this,o),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function eg(e){return(t,o)=>"object"==typeof o?ef(e,t,o):((e,t,o)=>{let n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}let eb=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function em(e,t){return(o,n,i)=>{let r=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:s}="object"==typeof n?o:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return eb(o,n,{get(){if(t){let t=e.call(this);return void 0===t&&(t=r(this),s.call(this,t)),t}return r(this)}})}return eb(o,n,{get(){return r(this)}})}}class ev extends ed{}let ey=c`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,ew=c``,ek=c`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,e$=Math.min,ex=Math.max,e_=Math.round,eC=e=>({x:e,y:e}),eS={left:"right",right:"left",bottom:"top",top:"bottom"},eA={start:"end",end:"start"};function eP(e,t){return"function"==typeof e?e(t):e}function eE(e){return e.split("-")[0]}function eR(e){return e.split("-")[1]}function eD(e){return"x"===e?"y":"x"}function eO(e){return"y"===e?"height":"width"}function eT(e){return["top","bottom"].includes(eE(e))?"y":"x"}function eM(e){return e.replace(/start|end/g,e=>eA[e])}function eL(e){return e.replace(/left|right|bottom|top/g,e=>eS[e])}function eU(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function eI(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function eF(e,t,o){let n,{reference:i,floating:r}=e,s=eT(t),a=eD(eT(t)),l=eO(a),c=eE(t),h="y"===s,d=i.x+i.width/2-r.width/2,u=i.y+i.height/2-r.height/2,p=i[l]/2-r[l]/2;switch(c){case"top":n={x:d,y:i.y-r.height};break;case"bottom":n={x:d,y:i.y+i.height};break;case"right":n={x:i.x+i.width,y:u};break;case"left":n={x:i.x-r.width,y:u};break;default:n={x:i.x,y:i.y}}switch(eR(t)){case"start":n[a]-=p*(o&&h?-1:1);break;case"end":n[a]+=p*(o&&h?-1:1)}return n}async function eN(e,t){var o;void 0===t&&(t={});let{x:n,y:i,platform:r,rects:s,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:p=0}=eP(t,e),f=eU(p),g=a[u?"floating"===d?"reference":"floating":d],b=eI(await r.getClippingRect({element:null==(o=await (null==r.isElement?void 0:r.isElement(g)))||o?g:g.contextElement||await (null==r.getDocumentElement?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),m="floating"===d?{...s.floating,x:n,y:i}:s.reference,v=await (null==r.getOffsetParent?void 0:r.getOffsetParent(a.floating)),y=await (null==r.isElement?void 0:r.isElement(v))&&await (null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},w=eI(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:m,offsetParent:v,strategy:l}):m);return{top:(b.top-w.top+f.top)/y.y,bottom:(w.bottom-b.bottom+f.bottom)/y.y,left:(b.left-w.left+f.left)/y.x,right:(w.right-b.right+f.right)/y.x}}function eB(e){return ez(e)?(e.nodeName||"").toLowerCase():"#document"}function eH(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function ej(e){var t;return null==(t=(ez(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function ez(e){return e instanceof Node||e instanceof eH(e).Node}function eV(e){return e instanceof Element||e instanceof eH(e).Element}function eW(e){return e instanceof HTMLElement||e instanceof eH(e).HTMLElement}function eq(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof eH(e).ShadowRoot)}function eG(e){let{overflow:t,overflowX:o,overflowY:n,display:i}=eJ(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(i)}function eK(e){let t=eY(),o=eJ(e);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some(e=>(o.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(o.contain||"").includes(e))}function eY(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function eQ(e){return["html","body","#document"].includes(eB(e))}function eJ(e){return eH(e).getComputedStyle(e)}function eZ(e){return eV(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function eX(e){if("html"===eB(e))return e;let t=e.assignedSlot||e.parentNode||eq(e)&&e.host||ej(e);return eq(t)?t.host:t}function e0(e){let t=eJ(e),o=parseFloat(t.width)||0,n=parseFloat(t.height)||0,i=eW(e),r=i?e.offsetWidth:o,s=i?e.offsetHeight:n,a=e_(o)!==r||e_(n)!==s;return a&&(o=r,n=s),{width:o,height:n,$:a}}function e1(e){return eV(e)?e:e.contextElement}function e2(e){let t=e1(e);if(!eW(t))return eC(1);let o=t.getBoundingClientRect(),{width:n,height:i,$:r}=e0(t),s=(r?e_(o.width):o.width)/n,a=(r?e_(o.height):o.height)/i;return s&&Number.isFinite(s)||(s=1),a&&Number.isFinite(a)||(a=1),{x:s,y:a}}let e5=eC(0);function e6(e){let t=eH(e);return eY()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:e5}function e3(e,t,o,n){var i;void 0===t&&(t=!1),void 0===o&&(o=!1);let r=e.getBoundingClientRect(),s=e1(e),a=eC(1);t&&(n?eV(n)&&(a=e2(n)):a=e2(e));let l=(void 0===(i=o)&&(i=!1),!(!n||i&&n!==eH(s))&&i)?e6(s):eC(0),c=(r.left+l.x)/a.x,h=(r.top+l.y)/a.y,d=r.width/a.x,u=r.height/a.y;if(s){let e=eH(s),t=n&&eV(n)?eH(n):n,o=e.frameElement;for(;o&&n&&t!==e;){let e=e2(o),t=o.getBoundingClientRect(),n=eJ(o),i=t.left+(o.clientLeft+parseFloat(n.paddingLeft))*e.x,r=t.top+(o.clientTop+parseFloat(n.paddingTop))*e.y;c*=e.x,h*=e.y,d*=e.x,u*=e.y,c+=i,h+=r,o=eH(o).frameElement}}return eI({width:d,height:u,x:c,y:h})}function e7(e){return e3(ej(e)).left+eZ(e).scrollLeft}function e4(e,t,o){let n;if("viewport"===t)n=function(e,t){let o=eH(e),n=ej(e),i=o.visualViewport,r=n.clientWidth,s=n.clientHeight,a=0,l=0;if(i){r=i.width,s=i.height;let e=eY();(!e||e&&"fixed"===t)&&(a=i.offsetLeft,l=i.offsetTop)}return{width:r,height:s,x:a,y:l}}(e,o);else if("document"===t)n=function(e){let t=ej(e),o=eZ(e),n=e.ownerDocument.body,i=ex(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=ex(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight),s=-o.scrollLeft+e7(e),a=-o.scrollTop;return"rtl"===eJ(n).direction&&(s+=ex(t.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:a}}(ej(e));else if(eV(t))n=function(e,t){let o=e3(e,!0,"fixed"===t),n=o.top+e.clientTop,i=o.left+e.clientLeft,r=eW(e)?e2(e):eC(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:i*r.x,y:n*r.y}}(t,o);else{let o=e6(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return eI(n)}function e8(e,t){return eW(e)&&"fixed"!==eJ(e).position?t?t(e):e.offsetParent:null}function e9(e,t){let o=eH(e);if(!eW(e))return o;let n=e8(e,t);for(;n&&["table","td","th"].includes(eB(n))&&"static"===eJ(n).position;)n=e8(n,t);return n&&("html"===eB(n)||"body"===eB(n)&&"static"===eJ(n).position&&!eK(n))?o:n||function(e){let t=eX(e);for(;eW(t)&&!eQ(t);){if(eK(t))return t;t=eX(t)}return null}(e)||o}let te={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:n}=e,i=eW(o),r=ej(o);if(o===r)return t;let s={scrollLeft:0,scrollTop:0},a=eC(1),l=eC(0);if((i||!i&&"fixed"!==n)&&(("body"!==eB(o)||eG(r))&&(s=eZ(o)),eW(o))){let e=e3(o);a=e2(o),l.x=e.x+o.clientLeft,l.y=e.y+o.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-s.scrollLeft*a.x+l.x,y:t.y*a.y-s.scrollTop*a.y+l.y}},getDocumentElement:ej,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:n,strategy:i}=e,r=[..."clippingAncestors"===o?function(e,t){let o=t.get(e);if(o)return o;let n=(function e(t,o,n){var i;void 0===o&&(o=[]),void 0===n&&(n=!0);let r=function e(t){let o=eX(t);return eQ(o)?t.ownerDocument?t.ownerDocument.body:t.body:eW(o)&&eG(o)?o:e(o)}(t),s=r===(null==(i=t.ownerDocument)?void 0:i.body),a=eH(r);return s?o.concat(a,a.visualViewport||[],eG(r)?r:[],a.frameElement&&n?e(a.frameElement):[]):o.concat(r,e(r,[],n))})(e,[],!1).filter(e=>eV(e)&&"body"!==eB(e)),i=null,r="fixed"===eJ(e).position,s=r?eX(e):e;for(;eV(s)&&!eQ(s);){let t=eJ(s),o=eK(s);o||"fixed"!==t.position||(i=null),(r?!o&&!i:!o&&"static"===t.position&&i&&["absolute","fixed"].includes(i.position)||eG(s)&&!o&&function e(t,o){let n=eX(t);return!(n===o||!eV(n)||eQ(n))&&("fixed"===eJ(n).position||e(n,o))}(e,s))?n=n.filter(e=>e!==s):i=t,s=eX(s)}return t.set(e,n),n}(t,this._c):[].concat(o),n],s=r[0],a=r.reduce((e,o)=>{let n=e4(t,o,i);return e.top=ex(n.top,e.top),e.right=e$(n.right,e.right),e.bottom=e$(n.bottom,e.bottom),e.left=ex(n.left,e.left),e},e4(t,s,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:e9,getElementRects:async function(e){let{reference:t,floating:o,strategy:n}=e,i=this.getOffsetParent||e9,r=this.getDimensions;return{reference:function(e,t,o){let n=eW(t),i=ej(t),r="fixed"===o,s=e3(e,!0,r,t),a={scrollLeft:0,scrollTop:0},l=eC(0);if(n||!n&&!r){if(("body"!==eB(t)||eG(i))&&(a=eZ(t)),n){let e=e3(t,!0,r,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else i&&(l.x=e7(i))}return{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}(t,await i(o),n),floating:{x:0,y:0,...await r(o)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return e0(e)},getScale:e2,isElement:eV,isRTL:function(e){return"rtl"===eJ(e).direction}},tt=(e,t,o)=>{let n=new Map,i={platform:te,...o},r={...i.platform,_c:n};return(async(e,t,o)=>{let{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,a=r.filter(Boolean),l=await (null==s.isRTL?void 0:s.isRTL(t)),c=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:d}=eF(c,n,l),u=n,p={},f=0;for(let o=0;o<a.length;o++){let{name:r,fn:g}=a[o],{x:b,y:m,data:v,reset:y}=await g({x:h,y:d,initialPlacement:n,placement:u,strategy:i,middlewareData:p,rects:c,platform:s,elements:{reference:e,floating:t}});h=null!=b?b:h,d=null!=m?m:d,p={...p,[r]:{...p[r],...v}},y&&f<=50&&(f++,"object"==typeof y&&(y.placement&&(u=y.placement),y.rects&&(c=!0===y.rects?await s.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:h,y:d}=eF(c,u,l)),o=-1)}return{x:h,y:d,placement:u,strategy:i,middlewareData:p}})(e,t,{...i,platform:r})},to=c`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var tn,ti,tr,ts=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class ta extends ev{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[ek,ey,to]}static{this.elementName="gk-popover"}firstUpdated(e){let t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame(()=>{this.popoverEl?.focus()})):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){var e,t,o;let n=[{name:"offset",options:6,async fn(e){let{x:t,y:o}=e,n=await async function(e,t){let{placement:o,platform:n,elements:i}=e,r=await (null==n.isRTL?void 0:n.isRTL(i.floating)),s=eE(o),a=eR(o),l="y"===eT(o),c=["left","top"].includes(s)?-1:1,h=r&&l?-1:1,d=eP(6,e),{mainAxis:u,crossAxis:p,alignmentAxis:f}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&"number"==typeof f&&(p="end"===a?-1*f:f),l?{x:p*h,y:u*c}:{x:u*c,y:p*h}}(e,0);return{x:t+n.x,y:o+n.y,data:n}}},(void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var o,n,i,r,s;let{placement:a,middlewareData:l,rects:c,initialPlacement:h,platform:d,elements:u}=e,{mainAxis:p=!0,crossAxis:f=!0,fallbackPlacements:g,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:v=!0,...y}=eP(t,e);if(null!=(o=l.arrow)&&o.alignmentOffset)return{};let w=eE(a),k=eE(h)===h,$=await (null==d.isRTL?void 0:d.isRTL(u.floating)),x=g||(k||!v?[eL(h)]:function(e){let t=eL(e);return[eM(e),t,eM(t)]}(h));g||"none"===m||x.push(...function(e,t,o,n){let i=eR(e),r=function(e,t,o){let n=["left","right"],i=["right","left"];switch(e){case"top":case"bottom":return o?t?i:n:t?n:i;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(eE(e),"start"===o,n);return i&&(r=r.map(e=>e+"-"+i),t&&(r=r.concat(r.map(eM)))),r}(h,v,m,$));let _=[h,...x],C=await eN(e,y),S=[],A=(null==(n=l.flip)?void 0:n.overflows)||[];if(p&&S.push(C[w]),f){let e=function(e,t,o){void 0===o&&(o=!1);let n=eR(e),i=eD(eT(e)),r=eO(i),s="x"===i?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return t.reference[r]>t.floating[r]&&(s=eL(s)),[s,eL(s)]}(a,c,$);S.push(C[e[0]],C[e[1]])}if(A=[...A,{placement:a,overflows:S}],!S.every(e=>e<=0)){let e=((null==(i=l.flip)?void 0:i.index)||0)+1,t=_[e];if(t)return{data:{index:e,overflows:A},reset:{placement:t}};let o=null==(r=A.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:r.placement;if(!o)switch(b){case"bestFit":{let e=null==(s=A.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:s[0];e&&(o=e);break}case"initialPlacement":o=h}if(a!==o)return{reset:{placement:o}}}return{}}}),{name:"shift",options:e={padding:5},async fn(t){let{x:o,y:n,placement:i}=t,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...l}=eP(e,t),c={x:o,y:n},h=await eN(t,l),d=eT(eE(i)),u=eD(d),p=c[u],f=c[d];if(r){let e="y"===u?"bottom":"right";p=ex(p+h["y"===u?"top":"left"],e$(p,p-h[e]))}if(s){let e="y"===d?"bottom":"right";f=ex(f+h["y"===d?"top":"left"],e$(f,f-h[e]))}let g=a.fn({...t,[u]:p,[d]:f});return{...g,data:{x:g.x-o,y:g.y-n}}}}];this.arrowEl&&n.push({name:"arrow",options:o={element:this.arrowEl},async fn(e){let{x:t,y:n,placement:i,rects:r,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:h=0}=eP(o,e)||{};if(null==c)return{};let d=eU(h),u={x:t,y:n},p=eD(eT(i)),f=eO(p),g=await s.getDimensions(c),b="y"===p,m=b?"clientHeight":"clientWidth",v=r.reference[f]+r.reference[p]-u[p]-r.floating[f],y=u[p]-r.reference[p],w=await (null==s.getOffsetParent?void 0:s.getOffsetParent(c)),k=w?w[m]:0;k&&await (null==s.isElement?void 0:s.isElement(w))||(k=a.floating[m]||r.floating[f]);let $=k/2-g[f]/2-1,x=e$(d[b?"top":"left"],$),_=e$(d[b?"bottom":"right"],$),C=k-g[f]-_,S=k/2-g[f]/2+(v/2-y/2),A=ex(x,e$(S,C)),P=!l.arrow&&null!=eR(i)&&S!=A&&r.reference[f]/2-(S<x?x:_)-g[f]/2<0,E=P?S<x?S-x:S-C:0;return{[p]:u[p]+E,data:{[p]:A,centerOffset:S-A-E,...P&&{alignmentOffset:E}},reset:P}}}),await tt(this.triggerEl,this.popoverEl,{middleware:n,placement:this.placement}).then(({x:e,y:t,placement:o,middlewareData:n})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){let e=n.arrow?.x,t=n.arrow?.y,i={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[i]:"-4px"})}})}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?K`<div part="arrow" class="arrow"></div>`:""}render(){return K`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}}ts([eg({type:Boolean})],ta.prototype,"arrow",void 0),ts([eg({type:Boolean})],ta.prototype,"hover",void 0),ts([eg()],ta.prototype,"placement",void 0),ts([eg({attribute:"popover-id"})],ta.prototype,"popoverId",void 0),ts([eg({attribute:"sr-visible",type:Boolean})],ta.prototype,"srVisible",void 0),ts([em('slot[name="trigger"]')],ta.prototype,"triggerSlot",void 0),ts([em(".popover")],ta.prototype,"popoverEl",void 0),ts([em(".arrow")],ta.prototype,"arrowEl",void 0),ts([eg({state:!0,attribute:!1})],ta.prototype,"open",void 0);let tl=c`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);border-radius:var(--gk-tooltip-border-radius,0);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);line-height:var(--gk-tooltip-line-height, 14px);max-width:var(--gk-tooltip-max-width,none);padding:var(--gk-tooltip-padding,10px 16px);text-align:var(--gk-tooltip-text-align,left);width:max-content}`;class tc extends ev{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[ek,ey,tl]}static{this.elementName="gk-tooltip"}static{this.components=[ta]}render(){return K`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([eg({attribute:"sr-visible",type:Boolean})],tc.prototype,"srVisible",void 0);let th=c`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;class td extends ev{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=th}static{this.elementName="gk-additions-deletions"}static{this.components=[tc]}render(){return K`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([eg({attribute:"tooltip-text"})],td.prototype,"tooltipText",void 0);let tu=new Set(["children","localName","ref","style","className"]),tp=new WeakMap,tf=(e,t,o,n,i)=>{let r,s;let a=i?.[t];void 0===a||o===n?(e[t]=o,null==o&&t in HTMLElement.prototype&&e.removeAttribute(t)):(void 0===(r=tp.get(e))&&tp.set(e,r=new Map),s=r.get(a),void 0!==o?void 0===s?(r.set(a,s={handleEvent:o}),e.addEventListener(a,s)):s.handleEvent=o:void 0!==s&&(r.delete(a),e.removeEventListener(a,s)))},tg=({react:e,tagName:t,elementClass:o,events:n,displayName:i})=>{let r=new Set(Object.keys(n??{})),s=e.forwardRef((i,s)=>{let a=e.useRef(null),l=e.useRef(null),c={},h={};for(let[e,t]of Object.entries(i))tu.has(e)?c["className"===e?"class":e]=t:r.has(e)||e in o.prototype?h[e]=t:c[e]=t;return e.useLayoutEffect(()=>{if(null!==l.current){for(let e in h)tf(l.current,e,i[e],a.current?a.current[e]:void 0,n);a.current=i}}),e.useLayoutEffect(()=>{l.current?.removeAttribute("defer-hydration")},[]),c.suppressHydrationWarning=!0,e.createElement(t,{...c,ref:e=>{l.current=e,"function"==typeof s?s(e):null!==s&&(s.current=e)}})});return s.displayName=i??o.name,s};var tb=oO(294);let tm=tg({react:tb,tagName:td.elementName,elementClass:td}),tv=c`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,ty=c`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var tw=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class tk extends ev{static{this.styles=[ek,tv]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?K`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:K`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}}tw([eg()],tk.prototype,"src",void 0),tw([eg()],tk.prototype,"indicator",void 0);class t$ extends ev{static{this.elementName="gk-avatar-group"}static{this.styles=[ek,ty]}render(){return K`<slot class="avatar-group" part="base"></slot>`}}let tx=tg({react:tb,tagName:tk.elementName,elementClass:tk}),t_=tg({react:tb,tagName:t$.elementName,elementClass:t$}),tC=c`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;class tS extends ev{constructor(){super(...arguments),this.variant="outline"}static{this.styles=tC}static{this.elementName="gk-badge"}render(){return K`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([eg()],tS.prototype,"variant",void 0);let tA=tg({react:tb,tagName:tS.elementName,elementClass:tS}),tP=c`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var tE=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class tR extends ev{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=tP}static{this.elementName="gk-button"}get allClasses(){let e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return K`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}}tE([eg({type:Boolean,reflect:!0})],tR.prototype,"disabled",void 0),tE([eg({reflect:!0})],tR.prototype,"type",void 0),tE([eg()],tR.prototype,"variant",void 0);let tD=tg({react:tb,tagName:tR.elementName,elementClass:tR,events:{onClick:"click"}}),tO=c`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var tT=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class tM extends ev{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[ek,ey,tO]}static{this.elementName="gk-complexity-indicator"}render(){let e=[];for(let t=0;t<this.level;t++)e.push(t);return K`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map(()=>K`<span class="complexity-indicator__box"></span>`)}</div>`}}tT([eg({type:Number})],tM.prototype,"level",void 0),tT([eg()],tM.prototype,"label",void 0);let tL=tg({react:tb,tagName:tM.elementName,elementClass:tM}),tU=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,tI=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,tF=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],tN=new Map,tB=["th","st","nd","rd"];var tH=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class tj extends ev{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[ek]}static{this.elementName="gk-date-from"}static{this.components=[tc]}get relativeTime(){return function(i,r){let s=("number"==typeof i?i:i.getTime())-(new Date).getTime();for(let[i,a,l,c]of tF){let h=Math.abs(s);if(h>=a||1e3===a)return r?(null==e&&(e=null!=n?n.resolvedOptions().locale:null!=o?o.resolvedOptions().locale:(n=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})).resolvedOptions().locale),"en"===e||e?.startsWith("en-")?`${Math.round(h/l)}${c}`:(null==n&&(n=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),n.format(Math.round(s/l),i))):(null==o&&(o=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"auto",style:"long"})),o.format(Math.round(s/l),i))}return""}(this.date,!0)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return K`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,o,n,i=!0){let r=`${n??""}:${o=o??void 0}`,s=tN.get(r);if(null==s){let e;let a=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=tI.exec(e);if(null!=t?.groups){let{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}let o={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(tU))if(null!=t)for(let e in t){let n=t[e];if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(o);e=null==n?t:"system"===n?void 0:[n],s=new Intl.DateTimeFormat(e,a),i&&tN.set(r,s)}if(null==o||tI.test(o))return s.format(e);let a=s.formatToParts(e);return o.replace(tU,(o,r,s,l,c,h,d,u,p,f,g,b,m,v,y)=>{if(null!=r)return r.substring(1,r.length-1);for(let o in y){let r=y[o];if(null==r)continue;let s=a.find(e=>e.type===o);if("Do"===r&&"day"===s?.type)return function(e){let t=e%100;return`${e}${tB[(t-20)%10]??tB[t]??"th"}`}(Number(s.value));if("a"===r&&"dayPeriod"===s?.type){let o=(function(e){let o=`${n??""}:time:${e}`,r=tN.get(o);if(null==r){let s;s=null==n?t:"system"===n?void 0:[n],r=new Intl.DateTimeFormat(s,{localeMatcher:"best fit",timeStyle:e}),i&&tN.set(o,r)}return r})("short").formatToParts(e).find(e=>"dayPeriod"===e.type);return`${(o??s)?.value??""}`}return s?.value??""}return""})}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}}tH([eg({converter:(tn=navigator.language,{toAttribute:e=>e.toLocaleDateString(tn),fromAttribute:e=>new Date(e)}),reflect:!0})],tj.prototype,"date",void 0),tH([eg()],tj.prototype,"format",void 0);let tz=tg({react:tb,tagName:tj.elementName,elementClass:tj}),tV=c`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,tW=c`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,tq=c`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;class tG extends ev{static{this.styles=[ek,tq]}static{this.elementName="gk-focus-item"}render(){return K`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}}class tK extends ev{static{this.styles=[ek,tW]}static{this.elementName="gk-focus-row"}render(){return K`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}}class tY extends ev{static{this.styles=[ek,tW,tq,tV]}static{this.elementName="gk-focus-container"}render(){return K`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}}let tQ=tg({react:tb,tagName:tG.elementName,elementClass:tG}),tJ=tg({react:tb,tagName:tK.elementName,elementClass:tK}),tZ=tg({react:tb,tagName:tY.elementName,elementClass:tY});class tX{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}let t0=(ti=class extends tX{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.it){for(let o in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[o]&&!this.st?.has(o)&&this.it.add(o);return this.render(t)}let o=e.element.classList;for(let e of this.it)e in t||(o.remove(e),this.it.delete(e));for(let e in t){let n=!!t[e];n===this.it.has(e)||this.st?.has(e)||(n?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return Y}},(...e)=>({_$litDirective$:ti,values:e})),t1=e=>e??Q,t2=c`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var t5=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class t6 extends ev{static{this.formAssociated=!0}static{this.styles=[ek,ey,t2]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="";try{this.internals=this.attachInternals()}catch{}}firstUpdated(){this.internals&&this.internals.setFormValue(this.value)}render(){return K`<div class="field"><label class="${t0({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${t0({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${t1(this.autocomplete)}" autocorrect="${t1(this.autocorrect)}" class="input" ?disabled="${this.disabled}" id="input" name="${t1(this.name)}" part="input" placeholder="${t1(this.placeholder)}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals&&this.internals.setFormValue(this.value)}}t5([eg()],t6.prototype,"autocomplete",void 0),t5([eg()],t6.prototype,"autocorrect",void 0),t5([eg({type:Boolean,reflect:!0})],t6.prototype,"disabled",void 0),t5([eg()],t6.prototype,"label",void 0),t5([eg({attribute:"label-visibility"})],t6.prototype,"labelVisibility",void 0),t5([eg()],t6.prototype,"name",void 0),t5([eg()],t6.prototype,"placeholder",void 0),t5([eg({type:Boolean,reflect:!0})],t6.prototype,"required",void 0),t5([eg({reflect:!0})],t6.prototype,"type",void 0),t5([eg()],t6.prototype,"value",void 0);let t3=c`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,t7=c`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,t4=c`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;class t8 extends ev{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[ek,t3]}static{this.elementName="gk-menu"}_handleSlotChange(){let e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();let t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;let o=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(o)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this._getAllItems(),o=t.length,n=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?n=(n-1+o)%o:"ArrowDown"===e.key?n=(n+1)%o:"Home"===e.key?n=0:"End"===e.key&&(n=o-1),this._setCurrentItem(t[n]),t[n].focus()}}_handleMouseDown(e){let t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){let t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter(e=>this._isMenuItem(e))}_setTabIndex(){this._getAllItems().forEach(e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")})}render(){return K`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([(tr={flatten:!0},(e,t)=>{let{slot:o,selector:n}=tr??{},i="slot"+(o?`[name=${o}]`:":not([name])");return eb(e,t,{get(){let e=this.renderRoot?.querySelector(i),t=e?.assignedElements(tr)??[];return void 0===n?t:t.filter(e=>e.matches(n))}})})],t8.prototype,"slotChildren",void 0);class t9 extends ev{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[ek,t7]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return K`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([eg({type:Boolean,reflect:!0})],t9.prototype,"disabled",void 0);class oe extends ev{static{this.styles=[ek,t4]}static{this.elementName="gk-menu-label"}render(){return K`<slot class="menu-label" part="base"></slot>`}}let ot=tg({react:tb,tagName:t8.elementName,elementClass:t8,events:{onClick:"select"}}),oo=tg({react:tb,tagName:t9.elementName,elementClass:t9}),on=tg({react:tb,tagName:oe.elementName,elementClass:oe}),oi=c`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;class or extends ev{static{this.styles=[ek,oi]}static{this.elementName="gk-tag"}render(){return K`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([eg()],or.prototype,"variant",void 0);let os=tg({react:tb,tagName:or.elementName,elementClass:or}),oa=tg({react:tb,tagName:tc.elementName,elementClass:tc})})(),oT.Tn,oT.qE,oT.HE;var oM=oT.Ct,oL=(oT.zx,oT.M1,oT.sX,oT.D0,oT.fs,oT.Tw,oT.ud,oT.wt,oT.ne,oT.Ku,oT.FU,oT.XO,oT.Ze,oT.K$,oT.cX,oT.Js,oT.J9,oT.si,oT.sg,oT.hW,oT.II,oT.v2,oT.sN,oT.Lb,oT.J2,oT.$$,oT.Vp,oT.u,oT.fW);oT.WV,oT.h4,oT.kZ;let oU=e=>e??ty;var oI=Object.defineProperty,oF=Object.getOwnPropertyDescriptor,oN=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?oF(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&oI(t,o,r),r};let oB=class extends tL{constructor(){super(...arguments),this.full=!1,this.disabled=!1,this.tabIndex=0}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.setAttribute("aria-disabled",this.disabled.toString()))}render(){let e=tm`<slot></slot>`;return null!=this.href?tm`<a href=${this.href}>${e}</a>`:e}};oB.styles=[ow,ej`
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
				${oy}
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
		`],oN([tB({type:Boolean,reflect:!0})],oB.prototype,"full",2),oN([tB({type:Boolean,reflect:!0})],oB.prototype,"disabled",2),oN([tB({reflect:!0})],oB.prototype,"density",2),oN([tB()],oB.prototype,"href",2),oN([tB({reflect:!0})],oB.prototype,"role",1),oN([tB()],oB.prototype,"appearance",2),oN([tB({type:Number,reflect:!0})],oB.prototype,"tabIndex",2),oB=oN([tI("gl-button")],oB);class oH{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class oj extends oH{constructor(e){if(super(e),this.et=ty,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ty||null==e)return this.vt=void 0,this.et=e;if(e===tv)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;let t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}oj.directiveName="unsafeHTML",oj.resultType=1;let oz=(...e)=>({_$litDirective$:oj,values:e});class oV extends tL{fireEvent(e,t){return this.dispatchEvent(new CustomEvent(e,{detail:t}))}}var oW=Object.defineProperty,oq=Object.getOwnPropertyDescriptor,oG=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?oq(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&oW(t,o,r),r};let oK={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"},oY=class extends tL{get statusName(){return this.status?oK[this.status]:""}updated(e){super.updated(e),e.has("status")&&(this.statusName?this.setAttribute("title",this.statusName):this.removeAttribute("title"))}renderIgnored(){return tm`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#969696"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM10 4l-6.01 6.01 1.06 1.061 6.01-6.01L10 4z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUntracked(){return tm`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3.942-3.942l7.5-7.5.884.884-.664.664c.95.655 1.65 1.524 2.222 2.394-1.15 1.75-2.824 3.5-6 3.5-.696 0-1.32-.084-1.882-.234l-1.176 1.176-.884-.884zm5.188-3.42l1.629-1.629c.634.393 1.147.913 1.594 1.491C10.99 8.767 9.692 9.75 7.5 9.75c-.287 0-.56-.017-.817-.05l.455-.454a1.5 1.5 0 0 0 1.608-1.608zM7.362 6.254L5.754 7.862a1.5 1.5 0 0 1 1.608-1.608zm.955-.955A6.595 6.595 0 0 0 7.5 5.25c-2.192 0-3.49.982-4.469 2.25.447.578.96 1.098 1.594 1.491l-.903.903C2.772 9.239 2.072 8.369 1.5 7.5 2.65 5.75 4.324 4 7.5 4c.696 0 1.32.084 1.882.234L8.317 5.299z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderAdded(){return tm`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#388A34"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm.75-6.75h3v-1.5h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderDeleted(){return tm`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#9E121D"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-6.75v-1.5h-7.5v1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderModified(){return tm`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#1B80B2"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-9.5V7h-3v2.5h-1.5V7h-3V5.5h3v-3h1.5v3h3zm0 5V12h-7.5v-1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderRenamed(){return tm`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#C63"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.25 4.5v1.25h1.25l1 1v2.5l-1 1H9.25v1.25H10v1.25H7V11.5h.75v-1.25H4l-1-1v-2.5l1-1h3.75V4.5H7V3.25h3V4.5h-.75zm-5 2.5h3.5v2h-3.5V7zm5 0v2h1V7h-1z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderCopied(){return tm`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#692C77"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM6.964 3.75L5.893 4.813v.53h1.071v-.53h3.215v4.25h-.536v1.062h.536l1.071-1.063v-4.25L10.179 3.75H6.964zM3.75 6.938l1.071-1.063h3.215l1.071 1.063v4.25L8.036 12.25H4.82L3.75 11.187v-4.25zm1.071 0v4.25h3.215v-4.25H4.82z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderConflict(){return tm`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#7F4E7E"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-4.03-4.53L6.44 7.5 3.47 4.53l1.06-1.06L7.5 6.44l2.97-2.97 1.06 1.06L8.56 7.5l2.97 2.97-1.06 1.06L7.5 8.56l-2.97 2.97-1.06-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUnknown(){return tm`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.19 2.822c-.439-.215-.97-.322-1.596-.322-1.25 0-2.282.478-3.094 1.435l1.05.798c.275-.331.579-.574.91-.728.331-.154.66-.231.987-.231.415 0 .76.093 1.036.28.275.182.413.448.413.798 0 .275-.082.509-.245.7-.159.187-.36.364-.602.532a9.506 9.506 0 0 0-.728.56 2.66 2.66 0 0 0-.602.763c-.159.299-.238.679-.238 1.141v.483h1.498v-.413c0-.364.086-.663.259-.896a2.76 2.76 0 0 1 .637-.616c.252-.177.504-.362.756-.553.257-.196.471-.436.644-.721.173-.285.259-.651.259-1.099 0-.387-.114-.749-.343-1.085-.229-.34-.562-.616-1.001-.826zm-1.169 7.917a1.024 1.024 0 0 0-.763-.315c-.294 0-.544.105-.749.315-.2.205-.301.453-.301.742 0 .294.1.546.301.756.205.205.455.308.749.308.303 0 .558-.103.763-.308.205-.21.308-.462.308-.756 0-.29-.103-.537-.308-.742z"
					clip-rule="evenodd"
				/>
			</svg>
		`}render(){switch(this.status){case"!":return this.renderIgnored();case"?":return this.renderUntracked();case"A":return this.renderAdded();case"D":return this.renderDeleted();case"M":case"T":case"U":return this.renderModified();case"R":return this.renderRenamed();case"C":return this.renderCopied();case"AA":case"AU":case"UA":case"DD":case"DU":case"UD":case"UU":return this.renderConflict()}return this.renderUnknown()}};oY.styles=[ej`
			:host-context(.vscode-high-contrast),
			:host-context(.vscode-dark) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host-context(.vscode-high-contrast-light),
			:host-context(.vscode-light) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host {
				display: inline-block;
				width: 16px;
				aspect-ratio: 1 / 1;
			}

			svg {
				display: inline-block;
				vertical-align: text-bottom;
			}
		`],oG([tB()],oY.prototype,"status",2),oG([tH()],oY.prototype,"statusName",1),oY=oG([tI("gl-git-status")],oY);let oQ=[ow,ej``],oJ=[ow,ej`
		:host {
			--tree-connector-spacing: 0.6rem;
			--tree-connector-size: var(--gitlens-tree-indent, 1.6rem);
			box-sizing: border-box;
			padding-left: var(--gitlens-gutter-width);
			/* padding-right: var(--gitlens-scrollbar-gutter-width); */
			padding-right: 0.5rem;
			padding-top: 0.1rem;
			padding-bottom: 0.1rem;
			line-height: 2.2rem;
			height: 2.2rem;

			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			font-size: var(--vscode-font-size);
			color: var(--vscode-foreground);

			content-visibility: auto;
			contain-intrinsic-size: auto 2.2rem;
			cursor: pointer;
		}

		:host([aria-hidden='true']) {
			display: none;
		}

		:host(:hover) {
			color: var(--vscode-list-hoverForeground);
			background-color: var(--vscode-list-hoverBackground);
		}

		:host([aria-selected='true']) {
			color: var(--vscode-list-inactiveSelectionForeground);
			background-color: var(--vscode-list-inactiveSelectionBackground);
		}

		/* TODO: these should be :has(.input:focus) instead of :focus-within */
		:host(:focus-within) {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}

		:host([aria-selected='true']:focus-within) {
			color: var(--vscode-list-activeSelectionForeground);
			background-color: var(--vscode-list-activeSelectionBackground);
		}

		.item {
			appearance: none;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: 0.6rem;
			width: 100%;
			padding: 0;
			font-family: inherit;
			font-size: inherit;
			text-decoration: none;
			color: inherit;
			background: none;
			border: none;
			outline: none;
			cursor: pointer;
			min-width: 0;
		}

		/* FIXME: remove, this is for debugging
		.item:focus {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}
 		*/
		.icon {
			display: inline-block;
			width: 1.6rem;
			text-align: center;
		}

		slot[name='icon']::slotted(*) {
			width: 1.6rem;
			aspect-ratio: 1;
			vertical-align: text-bottom;
		}

		.node {
			display: inline-block;
			width: var(--tree-connector-size);
			text-align: center;
			flex: none;
		}

		.node:last-of-type {
			margin-right: 0.3rem;
		}

		.node--connector {
			position: relative;
		}

		.node--connector::before {
			content: '';
			position: absolute;
			height: 2.2rem;
			border-left: 1px solid transparent;
			top: 50%;
			transform: translate(-1px, -50%);
			left: 0.8rem;
			width: 0.1rem;
			transition: border-color 0.1s linear;
			opacity: 0.4;
		}

		:host-context([guides='always']) .node--connector::before,
		:host-context([guides='onHover']:focus-within) .node--connector::before,
		:host-context([guides='onHover']:hover) .node--connector::before {
			border-color: var(--vscode-tree-indentGuidesStroke);
		}

		.branch {
			margin-right: 0.6rem;
		}

		.text {
			line-height: 1.6rem;
			overflow: hidden;
			white-space: nowrap;
			text-align: left;
			text-overflow: ellipsis;
			flex: 1;
		}

		.main {
			display: inline;
		}

		.description {
			display: inline;
			opacity: 0.7;
			font-size: 0.9em;
			margin-left: 0.3rem;
		}

		.actions {
			flex: none;
			user-select: none;
			color: var(--vscode-icon-foreground);
		}

		:host(:focus-within) .actions {
			color: var(--vscode-list-activeSelectionIconForeground);
		}

		:host(:not(:hover):not(:focus-within)) .actions {
			display: none;
		}

		.checkbox {
			position: relative;
			display: inline-flex;
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			text-align: center;
			color: var(--vscode-checkbox-foreground);
			background: var(--vscode-checkbox-background);
			border: 1px solid var(--vscode-checkbox-border);
			border-radius: 0.3rem;
			// overflow: hidden;
			margin-right: 0.6rem;
		}

		.checkbox:has(:checked) {
			color: var(--vscode-inputOption-activeForeground);
			border-color: var(--vscode-inputOption-activeBorder);
			background-color: var(--vscode-inputOption-activeBackground);
		}

		.checkbox:has(:disabled) {
			opacity: 0.4;
		}

		.checkbox__input {
			position: absolute;
			top: 0;
			left: 0;
			appearance: none;
			width: 1.4rem;
			aspect-ratio: 1 / 1;
			margin: 0;
			cursor: pointer;
			border-radius: 0.3rem;
		}

		.checkbox__input:disabled {
			cursor: default;
		}

		.checkbox__check {
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			opacity: 0;
			transition: opacity 0.1s linear;
			color: var(--vscode-checkbox-foreground);
			pointer-events: none;
		}

		.checkbox__input:checked + .checkbox__check {
			opacity: 1;
		}

		slot[name='decorations'] {
			display: inline-block;
			margin-left: 0.4rem;
		}
	`];var oZ=Object.defineProperty,oX=Object.getOwnPropertyDescriptor,o0=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?oX(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&oZ(t,o,r),r};let o1=class extends tL{disconnectedCallback(){super.disconnectedCallback(),this._slotSubscriptionsDisposer?.()}firstUpdated(){this.setAttribute("role","tree")}render(){return tm`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(){if(!this.treeItems?.length)return;let e=this.handleKeydown.bind(this),t=this.handleBeforeSelected.bind(this),o=this.handleSelected.bind(this),n=this.treeItems.map(n=>(n.addEventListener("keydown",e,!1),n.addEventListener("gl-tree-item-select",t,!1),n.addEventListener("gl-tree-item-selected",o,!1),{dispose:function(){n?.removeEventListener("keydown",e,!1),n?.removeEventListener("gl-tree-item-select",t,!1),n?.removeEventListener("gl-tree-item-selected",o,!1)}}));this._slotSubscriptionsDisposer=()=>{n?.forEach(({dispose:e})=>e())}}handleKeydown(e){if(!e.target)return;let t=e.target;if("ArrowUp"===e.key){let e=t.previousElementSibling;e?.focus()}else if("ArrowDown"===e.key){let e=t.nextElementSibling;e?.focus()}}handleBeforeSelected(e){if(!e.target)return;let t=e.target;null!=this._lastSelected&&this._lastSelected!==t&&this._lastSelected.deselect(),this._lastSelected=t}handleSelected(e){if(!e.target||!e.detail.node.branch)return;let t=e.target,o=t.level,n=t.nextElementSibling;for(;n&&o!==n.level;){let t=function(e){let t=e.level,o=e.previousElementSibling;for(;o;){if(o.level<t)return o;o=o.previousElementSibling}}(n);n.parentExpanded=t?.expanded!==!1,n.expanded=e.detail.node.expanded,n=n.nextElementSibling}}};o1.styles=oQ,o0([tB({reflect:!0})],o1.prototype,"guides",2),o0([tz({flatten:!0})],o1.prototype,"treeItems",2),o1=o0([tI("gl-tree")],o1);var o2=Object.defineProperty,o5=Object.getOwnPropertyDescriptor,o6=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?o5(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&o2(t,o,r),r};let o3=class extends oV{constructor(){super(...arguments),this.branch=!1,this.expanded=!0,this.path="",this.level=0,this.size=1,this.position=1,this.checkable=!1,this.checked=!1,this.disableCheck=!1,this.showIcon=!0,this.selected=!1,this.focused=!1,this.onComponentClickBound=this.onComponentClick.bind(this)}get isHidden(){return!1===this.parentExpanded||!this.branch&&!this.expanded}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.onComponentClickBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.onComponentClickBound)}onComponentClick(e){this.selectCore({dblClick:!1,altKey:e.altKey}),this.buttonEl.focus()}updateAttrs(e,t=!1){(e.has("expanded")||t)&&this.setAttribute("aria-expanded",this.expanded.toString()),(e.has("parentExpanded")||t)&&this.setAttribute("aria-hidden",this.isHidden.toString()),(e.has("selected")||t)&&this.setAttribute("aria-selected",this.selected.toString()),(e.has("size")||t)&&this.setAttribute("aria-setsize",this.size.toString()),(e.has("position")||t)&&this.setAttribute("aria-posinset",this.position.toString()),(e.has("level")||t)&&this.setAttribute("aria-level",this.level.toString())}firstUpdated(){this.role="treeitem"}updated(e){this.updateAttrs(e)}renderBranching(){let e=this.level-1;if(e<1&&!this.branch)return ty;let t=[];if(e>0)for(let o=0;o<e;o++)t.push(tm`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`);return this.branch&&t.push(tm`<code-icon class="branch" icon="${this.expanded?"chevron-down":"chevron-right"}"></code-icon>`),t}renderCheckbox(){return this.checkable?tm`<span class="checkbox"
			><input
				class="checkbox__input"
				id="checkbox"
				type="checkbox"
				.checked=${this.checked}
				?disabled=${this.disableCheck}
				@change=${this.onCheckboxChange}
				@click=${this.onCheckboxClick} /><code-icon icon="check" size="14" class="checkbox__check"></code-icon
		></span>`:ty}renderActions(){return tm`<action-nav class="actions"><slot name="actions"></slot></action-nav>`}renderDecorations(){return tm`<slot name="decorations" class="decorations"></slot>`}render(){return tm`
			${this.renderBranching()}${this.renderCheckbox()}
			<button
				id="button"
				class="item"
				type="button"
				@click=${this.onButtonClick}
				@dblclick=${this.onButtonDblClick}
			>
				${of(this.showIcon,()=>tm`<slot name="icon" class="icon"></slot>`)}
				<span class="text">
					<slot class="main"></slot>
					<slot name="description" class="description"></slot>
				</span>
			</button>
			${this.renderActions()}${this.renderDecorations()}
		`}selectCore(e,t=!1){this.fireEvent("gl-tree-item-select"),this.branch&&(this.expanded=!this.expanded),this.selected=!0,t||window.requestAnimationFrame(()=>{this.fireEvent("gl-tree-item-selected",{node:this,dblClick:e?.dblClick??!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1})})}select(){this.selectCore(void 0,!0)}deselect(){this.selected=!1}focus(){this.buttonEl.focus()}onButtonClick(e){e.stopPropagation(),this.selectCore({dblClick:!1,altKey:e.altKey})}onButtonDblClick(e){e.stopPropagation(),this.selectCore({dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onCheckboxClick(e){e.stopPropagation()}onCheckboxChange(e){e.preventDefault(),e.stopPropagation(),this.checked=e.target.checked,this.fireEvent("gl-tree-item-checked",{node:this,checked:this.checked})}};o3.styles=oJ,o6([tB({type:Boolean})],o3.prototype,"branch",2),o6([tB({type:Boolean})],o3.prototype,"expanded",2),o6([tB({type:String})],o3.prototype,"path",2),o6([tB({type:String,attribute:"parent-path"})],o3.prototype,"parentPath",2),o6([tB({type:Boolean,attribute:"parent-expanded"})],o3.prototype,"parentExpanded",2),o6([tB({type:Number})],o3.prototype,"level",2),o6([tB({type:Number})],o3.prototype,"size",2),o6([tB({type:Number})],o3.prototype,"position",2),o6([tB({type:Boolean})],o3.prototype,"checkable",2),o6([tB({type:Boolean})],o3.prototype,"checked",2),o6([tB({type:Boolean})],o3.prototype,"disableCheck",2),o6([tB({type:Boolean})],o3.prototype,"showIcon",2),o6([tH()],o3.prototype,"selected",2),o6([tH()],o3.prototype,"focused",2),o6([(e,t,o)=>{let n=e=>e.renderRoot?.querySelector("#button")??null;return tj(e,t,{get(){return n(this)}})}],o3.prototype,"buttonEl",2),o3=o6([tI("gl-tree-item")],o3);var o7=Object.defineProperty,o4=Object.getOwnPropertyDescriptor,o8=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?o4(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&o7(t,o,r),r};let o9=class extends oV{constructor(){super(...arguments),this.treeItems=void 0}set model(e){let t;if(this._model!==e){if(this._model=e,null!=this._model){let e=this._model.length;t=this._model.reduce((t,o,n)=>(t.push(...function e(t,o=1,n=1){let i={size:o,position:n};for(let[e,o]of Object.entries(t))null!=o&&"children"!==e&&(i[e]=o);let r=[i];if(null!=t.children&&t.children.length>0){let o=t.children.length;for(let n=0;n<o;n++)r.push(...e(t.children[n],o,n+1))}return r}(o,e,n+1)),t),[])}this.treeItems=t}}get model(){return this._model}renderIcon(e){return null==e?ty:"string"==typeof e?tm`<code-icon slot="icon" icon=${e}></code-icon>`:"status"!==e.type?ty:tm`<gl-git-status slot="icon" .status=${e.name}></gl-git-status>`}renderActions(e){let t=e.actions;return null==t||0===t.length?ty:t.map(t=>tm`<action-item
				slot="actions"
				.icon=${t.icon}
				.label=${t.label}
				@click=${o=>this.onTreeItemActionClicked(o,e,t)}
			></action-item>`)}renderDecorations(e){let t=e.decorations;return null==t||0===t.length?ty:t.map(e=>"icon"===e.type?tm`<code-icon
					slot="decorations"
					title="${e.label}"
					aria-label="${e.label}"
					.icon=${e.icon}
				></code-icon>`:"text"===e.type?tm`<span slot="decorations">${e.label}</span>`:void 0)}renderTreeItem(e){return tm`<gl-tree-item
			.branch=${e.branch}
			.expanded=${e.expanded}
			.path=${e.path}
			.parentPath=${e.parentPath}
			.parentExpanded=${e.parentExpanded}
			.level=${e.level}
			.size=${e.size}
			.position=${e.position}
			.checkable=${e.checkable}
			.checked=${e.checked??!1}
			.disableCheck=${e.disableCheck??!1}
			.showIcon=${null!=e.icon}
			@gl-tree-item-selected=${t=>this.onTreeItemSelected(t,e)}
			@gl-tree-item-checked=${t=>this.onTreeItemChecked(t,e)}
		>
			${this.renderIcon(e.icon)}
			${e.label}${of(null!=e.description,()=>tm`<span slot="description">${e.description}</span>`)}
			${this.renderActions(e)} ${this.renderDecorations(e)}
		</gl-tree-item>`}renderTree(e){return e?.map(e=>this.renderTreeItem(e))}render(){return tm`<gl-tree>${this.renderTree(this.treeItems)}</gl-tree>`}onTreeItemSelected(e,t){e.stopPropagation(),this.fireEvent("gl-tree-generated-item-selected",{...e.detail,node:t,context:t.context})}onTreeItemChecked(e,t){e.stopPropagation(),this.fireEvent("gl-tree-generated-item-checked",{...e.detail,node:t,context:t.context})}onTreeItemActionClicked(e,t,o){e.stopPropagation(),this.fireEvent("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:o,dblClick:!1,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}};o9.styles=ej`
		:host {
			display: contents;
		}
	`,o8([tH()],o9.prototype,"treeItems",2),o8([tB({reflect:!0})],o9.prototype,"guides",2),o8([tB({type:Array,attribute:!1})],o9.prototype,"model",1),o9=o8([tI("gl-tree-generator")],o9);var ne=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,no=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?nt(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&ne(t,o,r),r};class nn extends tL{constructor(){super(...arguments),this.tab="commit",this.isUncommitted=!1,this.emptyText="No Files"}get fileLayout(){return this.preferences?.files?.layout??"auto"}get isCompact(){return this.preferences?.files?.compact??!0}get indentGuides(){return this.preferences?.indentGuides??"none"}renderChangedFiles(e,t){let o=this.isTree(this.files?.length??0),n="tree",i="list-tree",r="View as Tree";switch(this.fileLayout){case"auto":n="list",i="gl-list-auto",r="View as List";break;case"list":n="tree",i="list-flat",r="View as Tree";break;case"tree":n="auto",i="list-tree",r="View as Auto"}let s=this.createTreeModel(e,this.files??[],o,this.isCompact);return tm`
			<webview-pane collapsable expanded>
				<span slot="title">Files changed </span>
				<span slot="subtitle" data-region="stats">${t}</span>
				<action-nav slot="actions">
					<action-item
						data-action="files-layout"
						data-files-layout="${n}"
						label="${r}"
						icon="${i}"
					></action-item>
				</action-nav>

				${this.renderTreeFileModel(s)}
			</webview-pane>
		`}onShareWipChanges(e,t,o){if(!o)return;let n=new CustomEvent("share-wip",{detail:{checked:t}});this.dispatchEvent(n)}createRenderRoot(){return this}isTree(e){return"auto"===this.fileLayout?e>(this.preferences?.files?.threshold??5):"tree"===this.fileLayout}createTreeModel(e,t,o=!1,n=!0){if(!this.isUncommitted)return this.createFileTreeModel(e,t,o,n);let i=[],r=[],s=[];for(let e of t)e.staged?r.push(e):s.push(e);return 0===r.length||0===s.length?i.push(...this.createFileTreeModel(e,t,o,n)):(r.length&&i.push({label:"Staged Changes",path:"",level:1,branch:!0,checkable:!1,expanded:!0,checked:!1,context:["staged"],children:this.createFileTreeModel(e,r,o,n,{level:2}),actions:this.getStagedActions()}),s.length&&i.push({label:"Unstaged Changes",path:"",level:1,branch:!0,checkable:!1,expanded:!0,checked:!1,context:["unstaged"],children:this.createFileTreeModel(e,s,o,n,{level:2}),actions:this.getUnstagedActions()})),i}sortChildren(e){return e.sort((e,t)=>e.branch&&!t.branch?-1:!e.branch&&t.branch?1:e.label<t.label?-1:e.label>t.label?1:0),e}createFileTreeModel(e,t,o=!1,n=!0,i={level:1}){if(void 0===i.level&&(i.level=1),!t.length)return[{label:"No changes",path:"",level:i.level,branch:!1,checkable:!1,expanded:!0,checked:!1}];let r=[];if(o){let e=function(e,t,o,n=!1,i){let r={name:"",relativePath:"",children:new Map,descendants:[]},s=e.reduce((e,n)=>{let i=e,r="";for(let e of t(n)){r=o(r,e),void 0===i.children&&(i.children=new Map);let t=i.children.get(e);void 0===t&&(t={name:e,relativePath:r,parent:i,children:void 0,descendants:void 0},i.children.set(e,t)),void 0===i.descendants&&(i.descendants=[]),i.descendants.push(n),i=t}return i.value=n,e},r);return n&&(s=function e(t,o,n=!0,i){if(void 0===t.children)return t;let r=[...t.children.values()];for(let t of r)e(t,o,!1,i);if(!n&&1===r.length){let e=r[0];(void 0===e.value||i?.(e.value))&&(t.name=o(t.name,e.name),t.relativePath=e.relativePath,t.children=e.children,t.descendants=e.descendants,t.value=e.value)}return t}(s,o,!0,void 0)),s}(t,e=>e.path.split("/"),(...e)=>e.join("/"),n);if(null!=e.children)for(let t of e.children.values()){let e=this.walkFileTree(t,{level:i.level});r.push(e)}}else for(let e of t){let t=this.fileToTreeModel(e,{level:i.level,branch:!1},!0);r.push(t)}return this.sortChildren(r),r}walkFileTree(e,t={level:1}){let o;if(void 0===t.level&&(t.level=1),o=null==e.value?this.folderToTreeModel(e.name,t):this.fileToTreeModel(e.value,t),null!=e.children){let n=[];for(let o of e.children.values()){let e=this.walkFileTree(o,{...t,level:t.level+1});n.push(e)}n.length>0&&(this.sortChildren(n),o.branch=!0,o.children=n)}return o}getStagedActions(e){return"wip"===this.tab?[{icon:"gl-cloud-patch-share",label:"Share Staged Changes",action:"staged-create-patch"}]:[]}getUnstagedActions(e){return"wip"===this.tab?[{icon:"gl-cloud-patch-share",label:"Share Unstaged Changes",action:"unstaged-create-patch"}]:[]}getFileActions(e,t){return[]}fileToTreeModel(e,t,o=!1,n="/"){let i=e.path.lastIndexOf(n),r=-1!==i?e.path.substring(i+1):e.path,s=o&&-1!==i?e.path.substring(0,i):"";return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:{type:"status",name:e.status},label:r,description:!0===o?s:void 0,context:[e],actions:this.getFileActions(e,t),...t}}folderToTreeModel(e,t){return{branch:!1,expanded:!0,path:e,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...t}}renderTreeFileModel(e){return tm`<gl-tree-generator
			.model=${e}
			.guides=${this.indentGuides}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}onTreeItemActionClicked(e){if(e.detail.context&&e.detail.action)switch(e.detail.action.action){case"staged-create-patch":this.onCreatePatch(e);break;case"unstaged-create-patch":this.onCreatePatch(e,!0);break;case"file-open":this.onOpenFile(e);break;case"file-unstage":this.onUnstageFile(e);break;case"file-stage":this.onStageFile(e);break;case"file-compare-working":this.onCompareWorking(e);break;case"file-open-on-remote":this.onOpenFileOnRemote(e);break;case"file-more-actions":this.onMoreActions(e)}}onTreeItemSelected(e){e.detail.context&&this.onComparePrevious(e)}onCreatePatch(e,t=!1){let o=new CustomEvent("create-patch",{detail:{checked:!!t||"staged"}});this.dispatchEvent(o)}onOpenFile(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-open",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}onOpenFileOnRemote(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-open-on-remote",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}onCompareWorking(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-compare-working",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}onComparePrevious(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-compare-previous",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}onMoreActions(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-more-actions",{detail:this.getEventDetail(t)});this.dispatchEvent(o)}onStageFile(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-stage",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}onUnstageFile(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-unstage",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}getEventDetail(e,t){return{path:e.path,repoPath:e.repoPath,status:e.status,staged:e.staged,showOptions:t}}}no([tB({type:Array})],nn.prototype,"files",2),no([tB({type:Boolean})],nn.prototype,"isUncommitted",2),no([tB({type:Object})],nn.prototype,"preferences",2),no([tB({attribute:"empty-text"})],nn.prototype,"emptyText",2);var ni=Object.defineProperty,nr=Object.getOwnPropertyDescriptor,ns=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?nr(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&ni(t,o,r),r};let na=class extends nn{constructor(){super(...arguments),this.tab="commit",this.explainBusy=!1}get isStash(){return this.state?.commit?.stashNumber!=null}get shortSha(){return this.state?.commit?.shortSha??""}get navigation(){if(this.state?.navigationStack==null)return{back:!1,forward:!1};let e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}updated(e){e.has("explain")&&(this.explainBusy=!1,this.querySelector('[data-region="commit-explanation"]')?.scrollIntoView())}renderEmptyContent(){return tm`
			<div class="section section--empty" id="empty">
				<p>Rich details for commits and stashes are shown as you navigate:</p>

				<ul class="bulleted">
					<li>lines in the text editor</li>
					<li>
						commits in the <a href="command:gitlens.showGraph">Commit Graph</a>,
						<a href="command:gitlens.showTimelineView">Visual File History</a>, or
						<a href="command:gitlens.showCommitsView">Commits view</a>
					</li>
					<li>stashes in the <a href="command:gitlens.showStashesView">Stashes view</a></li>
				</ul>

				<p>Alternatively, show your work-in-progress, or search for or choose a commit</p>

				<p class="button-container">
					<button class="button button--full" type="button" data-action="wip">Show Working Changes</button>
				</p>
				<p class="button-container">
					<span class="button-group button-group--single">
						<button class="button button--full" type="button" data-action="pick-commit">
							Choose Commit...
						</button>
						<button
							class="button"
							type="button"
							data-action="search-commit"
							aria-label="Search for Commit"
							title="Search for Commit"
						>
							<code-icon icon="search"></code-icon>
						</button>
					</span>
				</p>
			</div>
		`}renderCommitMessage(){if(this.state?.commit==null)return;let e=this.state.commit.message,t=e.indexOf("\x00\n\x00");return tm`
			<div class="section section--message">
				<div class="message-block">
					${of(-1===t,()=>tm`<p class="message-block__text scrollable" data-region="message">
								<strong>${oz(e)}</strong>
							</p>`,()=>tm`<p class="message-block__text scrollable" data-region="message">
								<strong>${oz(e.substring(0,t))}</strong><br /><span
									>${oz(e.substring(t+3))}</span
								>
							</p>`)}
				</div>
			</div>
		`}renderAutoLinks(){if(this.isUncommitted)return;let e=new Map;if(this.state?.commit?.autolinks!=null)for(let t of this.state.commit.autolinks)e.set(t.id,{type:"autolink",value:t});if(this.state?.autolinkedIssues!=null)for(let t of this.state.autolinkedIssues)e.set(t.id,{type:"issue",value:t});this.state?.pullRequest!=null&&e.set(this.state.pullRequest.id,{type:"pr",value:this.state.pullRequest});let t=[],o=[],n=[];for(let i of e.values())switch(i.type){case"autolink":t.push(i.value);break;case"issue":o.push(i.value);break;case"pr":n.push(i.value)}return tm`
			<webview-pane
				collapsable
				?expanded=${this.state?.preferences?.autolinksExpanded??!0}
				?loading=${!this.state?.includeRichContent}
				data-region="rich-pane"
			>
				<span slot="title">Autolinks</span>
				<span slot="subtitle" data-region="autolink-count"
					>${this.state?.includeRichContent||e.size?`${e.size} found `:""}${this.state?.includeRichContent?"":"…"}</span
				>
				${of(null==this.state,()=>tm`
						<div class="section" data-region="autolinks">
							<section class="auto-link" aria-label="Custom Autolinks" data-region="custom-autolinks">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
							<section class="pull-request" aria-label="Pull request" data-region="pull-request">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
							<section class="issue" aria-label="Issue" data-region="issue">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
						</div>
					`,()=>0===e.size?tm`
								<div class="section" data-region="rich-info">
									<p>
										<code-icon icon="info"></code-icon>&nbsp;Use
										<a href="#" data-action="autolink-settings" title="Configure autolinks"
											>autolinks</a
										>
										to linkify external references, like Jira issues or Zendesk tickets, in commit
										messages.
									</p>
								</div>
							`:tm`
							<div class="section" data-region="autolinks">
								${t.length?tm`
											<section
												class="auto-link"
												aria-label="Custom Autolinks"
												data-region="custom-autolinks"
											>
												${t.map(e=>{let t=e.description??e.title;return void 0===t&&(t=`Custom Autolink ${e.prefix}${e.id}`),tm`
														<issue-pull-request
															type="autolink"
															name="${t}"
															url="${e.url}"
															key="${e.prefix}${e.id}"
															status=""
														></issue-pull-request>
													`})}
											</section>
									  `:void 0}
								${n.length?tm`
											<section
												class="pull-request"
												aria-label="Pull request"
												data-region="pull-request"
											>
												${n.map(e=>tm`
														<issue-pull-request
																type="pr"
																name="${e.title}"
																url="${e.url}"
																key="#${e.id}"
																status="${e.state}"
																date=${e.date}
																dateFormat="${this.state.preferences.dateFormat}"
															></issue-pull-request>
														</section>
									  				`)}
											</section>
									  `:void 0}
								${o.length?tm`
											<section class="issue" aria-label="Issue" data-region="issue">
												${o.map(e=>tm`
														<issue-pull-request
															type="issue"
															name="${e.title}"
															url="${e.url}"
															key="${e.id}"
															status="${e.state}"
															date="${e.closed?e.closedDate:e.date}"
															dateFormat="${this.state.preferences.dateFormat}"
														></issue-pull-request>
													`)}
											</section>
									  `:void 0}
							</div>
						`)}
			</webview-pane>
		`}renderExplainAi(){return tm`
			<webview-pane collapsable data-region="explain-pane">
				<span slot="title">Explain (AI)</span>
				<span slot="subtitle"><code-icon icon="beaker" size="12"></code-icon></span>
				<action-nav slot="actions">
					<action-item data-action="switch-ai" label="Switch AI Model" icon="hubot"></action-item>
				</action-nav>

				<div class="section">
					<p>Let AI assist in understanding the changes made with this commit.</p>
					<p class="button-container">
						<span class="button-group button-group--single">
							<button
								class="button button--full button--busy"
								type="button"
								data-action="explain-commit"
								aria-busy="${this.explainBusy?"true":ty}"
								@click=${this.onExplainChanges}
								@keydown=${this.onExplainChanges}
							>
								<code-icon icon="loading" modifier="spin"></code-icon>Explain Changes
							</button>
						</span>
					</p>
					${of(this.explain,()=>tm`
							<div
								class="ai-content${this.explain?.error?" has-error":""}"
								data-region="commit-explanation"
							>
								${of(this.explain?.error,()=>tm`<p class="ai-content__summary scrollable">
											${this.explain.error.message??"Error retrieving content"}
										</p>`)}
								${of(this.explain?.summary,()=>tm`<p class="ai-content__summary scrollable">${this.explain.summary}</p>`)}
							</div>
						`)}
				</div>
			</webview-pane>
		`}render(){if(this.state?.commit==null)return this.renderEmptyContent();let e=this.state.commit,t=this.state.pinned?"Unpin this Commit\nRestores Automatic Following":"Pin this Commit\nSuspends Automatic Following";return tm`
			<div class="top-details">
				<div class="top-details__top-menu">
					<div class="top-details__actionbar${this.state.pinned?" is-pinned":""}">
						<div class="top-details__actionbar-group">
							<a
								class="commit-action${this.state.pinned?" is-active":""}"
								href="#"
								data-action="pin"
								aria-label="${t}"
								title="${t}"
								><code-icon
									icon="${this.state.pinned?"gl-pinned-filled":"pin"}"
									data-region="commit-pin"
								></code-icon
							></a>
							<a
								class="commit-action${this.navigation.back?"":" is-disabled"}"
								aria-disabled="${this.navigation.back?ty:"true"}"
								href="#"
								data-action="back"
								aria-label="Back"
								title="Back"
								><code-icon icon="arrow-left" data-region="commit-back"></code-icon
							></a>
							${of(this.navigation.forward,()=>tm`
									<a
										class="commit-action"
										href="#"
										data-action="forward"
										aria-label="Forward"
										title="Forward"
										><code-icon icon="arrow-right" data-region="commit-forward"></code-icon
									></a>
								`)}
							${of(this.state.navigationStack?.hint,()=>tm`
									<a
										class="commit-action commit-action--emphasis-low"
										href="#"
										title="View this Commit"
										data-action="${this.state?.pinned?"forward":"back"}"
										><code-icon icon="git-commit"></code-icon
										><span data-region="commit-hint">${this.state.navigationStack?.hint}</span></a
									>
								`)}
						</div>
						<div class="top-details__actionbar-group">
							${of(!this.isUncommitted,()=>tm`
									<a
										class="commit-action"
										href="#"
										data-action="commit-actions"
										data-action-type="sha"
										aria-label="Copy SHA
[⌥] Pick Commit..."
										title="Copy SHA
[⌥] Pick Commit..."
									>
										<code-icon icon="git-commit"></code-icon>
										<span class="top-details__sha" data-region="shortsha">${this.shortSha}</span></a
									>
								`,()=>tm`
									<a
										class="commit-action"
										href="#"
										data-action="commit-actions"
										data-action-type="scm"
										aria-label="Open SCM view"
										title="Open SCM view"
										><code-icon icon="source-control"></code-icon
									></a>
								`)}
							<a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="graph"
								aria-label="Open in Commit Graph"
								title="Open in Commit Graph"
								><code-icon icon="gl-graph"></code-icon
							></a>
							${of(!this.isUncommitted,()=>tm`
									<a
										class="commit-action"
										href="#"
										data-action="commit-actions"
										data-action-type="more"
										aria-label="Show Commit Actions"
										title="Show Commit Actions"
										><code-icon icon="kebab-vertical"></code-icon
									></a>
								`)}
						</div>
					</div>
					${of(null!=e&&!this.isStash,()=>tm`
							<ul class="top-details__authors" aria-label="Authors">
								<li class="top-details__author" data-region="author">
									<commit-identity
										name="${e.author.name}"
										email="${e.author.email}"
										date=${e.author.date}
										dateFormat="${this.preferences?.dateFormat}"
										avatarUrl="${e.author.avatar??""}"
										showAvatar="${this.preferences?.avatars??!0}"
										actionLabel="${e.sha===nb?"modified":"committed"}"
									></commit-identity>
								</li>
							</ul>
						`)}
				</div>
			</div>
			${this.renderCommitMessage()} ${this.renderAutoLinks()}
			${this.renderChangedFiles(this.isStash?"stash":"commit",this.renderCommitStats(e?.stats))}
			${this.renderExplainAi()}
		`}onExplainChanges(e){if(!0===this.explainBusy||e instanceof KeyboardEvent&&"Enter"!==e.key){e.preventDefault(),e.stopPropagation();return}this.explainBusy=!0}renderCommitStats(e){if(e?.changedFiles==null)return;if("number"==typeof e.changedFiles)return tm`<commit-stats added="?" modified="${e.changedFiles}" removed="?"></commit-stats>`;let{added:t,deleted:o,changed:n}=e.changedFiles;return tm`<commit-stats added="${t}" modified="${n}" removed="${o}"></commit-stats>`}getFileActions(e,t){let o=[{icon:"go-to-file",label:"Open file",action:"file-open"}];return this.isUncommitted||(o.push({icon:"git-compare",label:"Open Changes with Working File",action:"file-compare-working"}),this.isStash||o.push({icon:"globe",label:"Open on remote",action:"file-open-on-remote"},{icon:"ellipsis",label:"Show more actions",action:"file-more-actions"})),o}};ns([tB({type:Object})],na.prototype,"state",2),ns([tH()],na.prototype,"isStash",1),ns([tH()],na.prototype,"shortSha",1),ns([tH()],na.prototype,"explainBusy",2),ns([tB({type:Object})],na.prototype,"explain",2),na=ns([tI("gl-commit-details")],na);var nl=Object.defineProperty,nc=Object.getOwnPropertyDescriptor,nh=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?nc(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&nl(t,o,r),r};let nd=class extends nn{constructor(){super(...arguments),this.tab="wip"}render(){return tm`
			<div class="top-details">
				<div class="top-details__top-menu">
					<div class="top-details__actionbar">
						<div class="top-details__actionbar-group">
							${of(this.wip?.changes==null||null==this.files,()=>"Loading...",()=>tm`<span
										>${er("change",this.files.length)} on
										<span
											class="top-details__actionbar--highlight"
											title="${this.wip.repositoryCount>1?`${this.wip.changes.repository.name}:${this.wip.changes.branchName}`:this.wip.changes.branchName}"
											>${this.wip.repositoryCount>1?`${this.wip.changes.repository.name}:${this.wip.changes.branchName}`:this.wip.changes.branchName}</span
										></span
									>`)}
						</div>
						<div class="top-details__actionbar-group">
							<a
								class="commit-action"
								href="#"
								data-action="create-patch"
								aria-label="Share as Cloud Patch"
								title="Share as Cloud Patch"
							>
								<code-icon icon="gl-cloud-patch-share"></code-icon>
								<span class="top-details__sha">Share</span>
							</a>
							<a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="scm"
								aria-label="Open SCM view"
								title="Open SCM view"
								><code-icon icon="source-control"></code-icon
							></a>
							<a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="graph"
								aria-label="Open in Commit Graph"
								title="Open in Commit Graph"
								><code-icon icon="gl-graph"></code-icon
							></a>
						</div>
					</div>
				</div>
			</div>
			${this.renderChangedFiles("wip")}
		`}getFileActions(e,t){let o={icon:"go-to-file",label:"Open file",action:"file-open"};return!0===e.staged?[o,{icon:"remove",label:"Unstage changes",action:"file-unstage"}]:[o,{icon:"plus",label:"Stage changes",action:"file-stage"}]}};nh([tB({type:Object})],nd.prototype,"wip",2),nd=nh([tI("gl-wip-details")],nd);var nu=Object.defineProperty,np=Object.getOwnPropertyDescriptor,nf=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?np(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&nu(t,o,r),r};let ng=class extends tL{constructor(){super(),this.indentPreference=16,oL(oM)}get isUncommitted(){return this.state?.commit?.sha===nb}get isStash(){return this.state?.commit?.stashNumber!=null}get navigation(){if(this.state?.navigationStack==null)return{back:!1,forward:!1};let e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}updateDocumentProperties(){let e=this.state?.preferences?.indent;e!==this.indentPreference&&(this.indentPreference=e??16,document.documentElement.style.setProperty("--gitlens-tree-indent",`${this.indentPreference}px`))}updated(e){e.has("state")&&this.updateDocumentProperties()}render(){let e=this.state?.wip;return tm`
			<div class="commit-detail-panel scrollable">
				<main id="main" tabindex="-1">
					<nav class="details-tab">
						<button
							class="details-tab__item ${this.state?.mode==="commit"?" is-active":""}"
							data-action="details"
						>
							${this.isStash?"Stash":"Commit"}
						</button>
						<button
							class="details-tab__item ${this.state?.mode==="wip"?" is-active":""}"
							data-action="wip"
							title="${oU(this.state?.mode==="wip"&&e?.changes?.files.length?`${er("change",e.changes.files.length)} on ${e.repositoryCount>1?`${e.changes.repository.name}:${e.changes.branchName}`:e.changes.branchName}`:void 0)}"
						>
							Working
							Changes${oU(this.state?.mode==="wip"&&e?.changes?.files.length?tm` &nbsp;<gk-badge variant="filled">${e.changes.files.length}</gk-badge>`:void 0)}
						</button>
					</nav>
					${of(this.state?.mode==="commit",()=>tm`<gl-commit-details
								.state=${this.state}
								.files=${this.state?.commit?.files}
								.explain=${this.explain}
								.preferences=${this.state?.preferences}
								.isUncommitted=${this.isUncommitted}
							></gl-commit-details>`,()=>tm`<gl-wip-details
								.wip=${e}
								.files=${e?.changes?.files}
								.preferences=${this.state?.preferences}
								.isUncommitted=${!0}
								.emptyText=${"No working changes"}
							></gl-wip-details>`)}
				</main>
			</div>
		`}createRenderRoot(){return this}};nf([tB({type:Object})],ng.prototype,"state",2),nf([tB({type:Object})],ng.prototype,"explain",2),nf([tH()],ng.prototype,"isUncommitted",1),nf([tH()],ng.prototype,"isStash",1),ng=nf([tI("gl-commit-details-app")],ng);let nb="0000000000000000000000000000000000000000";class nm extends eL{constructor(){super("CommitDetailsApp")}onInitialize(){this.attachState()}onBind(){return[c.on('[data-action="commit-actions"]',"click",e=>this.onCommitActions(e)),c.on('[data-action="pick-commit"]',"click",e=>this.onPickCommit(e)),c.on('[data-action="wip"]',"click",e=>this.onSwitchMode(e,"wip")),c.on('[data-action="details"]',"click",e=>this.onSwitchMode(e,"commit")),c.on('[data-action="search-commit"]',"click",e=>this.onSearchCommit(e)),c.on('[data-action="autolink-settings"]',"click",e=>this.onAutolinkSettings(e)),c.on('[data-action="files-layout"]',"click",e=>this.onToggleFilesLayout(e)),c.on('[data-action="pin"]',"click",e=>this.onTogglePin(e)),c.on('[data-action="back"]',"click",e=>this.onNavigate("back",e)),c.on('[data-action="forward"]',"click",e=>this.onNavigate("forward",e)),c.on('[data-action="create-patch"]',"click",e=>this.onCreatePatchFromWip(!0)),c.on('[data-region="rich-pane"]',"expanded-change",e=>this.onExpandedChange(e.detail)),c.on('[data-action="explain-commit"]',"click",e=>this.onExplainCommit(e)),c.on('[data-action="switch-ai"]',"click",e=>this.onSwitchAiModel(e)),c.on("gl-wip-details","create-patch",e=>this.onCreatePatchFromWip(e.detail.checked)),c.on("gl-commit-details","file-open-on-remote",e=>this.onOpenFileOnRemote(e.detail)),c.on("gl-commit-details,gl-wip-details","file-open",e=>this.onOpenFile(e.detail)),c.on("gl-commit-details","file-compare-working",e=>this.onCompareFileWithWorking(e.detail)),c.on("gl-commit-details,gl-wip-details","file-compare-previous",e=>this.onCompareFileWithPrevious(e.detail)),c.on("gl-commit-details","file-more-actions",e=>this.onFileMoreActions(e.detail)),c.on("gl-wip-details","file-stage",e=>this.onStageFile(e.detail)),c.on("gl-wip-details","file-unstage",e=>this.onUnstageFile(e.detail))]}onMessageReceived(e){switch(e.method){case U.method:g(U,e,e=>{e.state,this.state=e.state,this.setState(this.state),this.attachState()});break;case I.method:g(I,e,e=>{this.state={...this.state,...e},this.setState(this.state),this.attachState()});break;default:super.onMessageReceived?.(e)}}onCreatePatchFromWip(e=!0){this.state.wip?.changes!=null&&this.sendCommand(L,{changes:this.state.wip?.changes,checked:e})}onCommandClickedCore(e){let t=e?.startsWith("command:")?e.slice(8):e;null!=t&&this.sendCommand(v,{command:t})}onSwitchAiModel(e){this.onCommandClickedCore("gitlens.switchAIModel")}async onExplainCommit(e){try{let e=await this.sendCommandWithCompletion(D,void 0,F);e.error?this.component.explain={error:{message:e.error.message??"Error retrieving content"}}:e.summary?this.component.explain={summary:e.summary}:this.component.explain=void 0}catch(e){this.component.explain={error:{message:"Error retrieving content"}}}}onToggleFilesLayout(e){let t=e.target?.dataset.filesLayout??void 0;if(t===this.state.preferences?.files?.layout)return;let o={...this.state.preferences?.files,layout:t??"auto"};this.state={...this.state,preferences:{...this.state.preferences,files:o}},this.attachState(),this.sendCommand(M,{files:o})}onExpandedChange(e){this.state={...this.state,preferences:{...this.state.preferences,autolinksExpanded:e.expanded}},this.attachState(),this.sendCommand(M,{autolinksExpanded:e.expanded})}onNavigate(e,t){t.preventDefault(),this.sendCommand(T,{direction:e})}onTogglePin(e){e.preventDefault(),this.sendCommand(O,{pin:!this.state.pinned})}onAutolinkSettings(e){e.preventDefault(),this.sendCommand(R,void 0)}onPickCommit(e){this.sendCommand(A,void 0)}onSearchCommit(e){this.sendCommand(P,void 0)}onSwitchMode(e,t){this.state={...this.state,mode:t},this.attachState(),this.sendCommand(E,{mode:t,repoPath:this.state.commit?.repoPath})}onOpenFileOnRemote(e){this.sendCommand($,e)}onOpenFile(e){this.sendCommand(k,e)}onCompareFileWithWorking(e){this.sendCommand(x,e)}onCompareFileWithPrevious(e){this.sendCommand(_,e)}onFileMoreActions(e){this.sendCommand(w,e)}onStageFile(e){this.sendCommand(C,e)}onUnstageFile(e){this.sendCommand(S,e)}onCommitActions(e){if(e.preventDefault(),void 0===this.state.commit){e.stopPropagation();return}let t=e.target?.getAttribute("data-action-type");null!=t&&this.sendCommand(y,{action:t,alt:e.altKey})}get component(){return null==this._component&&(this._component=document.getElementById("app")),this._component}attachState(){this.component.state=this.state}}new nm;var nv=d.b,ny=d.F;export{nv as CommitDetailsApp,ny as uncommittedSha};