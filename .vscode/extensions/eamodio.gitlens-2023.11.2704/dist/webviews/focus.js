let e,t,o,n;var i,r,s,a,l,c,h,d,u,p,f,g,b={};b.d=(e,t)=>{for(var o in t)b.o(t,o)&&!b.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},b.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),void 0!==b&&Object.defineProperty(b,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var m={};b.d(m,{S:()=>ic});class v{constructor(e,t=!1,o=!1){this.method=e,this.reset=t,this.pack=o}}class y extends v{}class w extends v{}function k(e,t,o){e.method===t.method&&o(t.params,e)}let $=new y("webview/ready"),_=new y("webview/focus");new y("command/execute"),new y("configuration/preview"),new y("configuration/update"),new w("configuration/didChange"),new w("configuration/didPreview"),new w("webview/didOpenAnchor");let x=new y("focus/pr/openWorktree"),C=new y("focus/pr/openBranch"),S=new y("focus/pr/switchToBranch"),A=new y("focus/pr/snooze"),R=new y("focus/pr/pin"),P=new y("focus/issue/snooze"),E=new y("focus/issue/pin"),T=new w("focus/didChange",!0);function O(e){let t=.001*performance.now(),o=Math.floor(t),n=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],(n-=e[1])<0&&(o--,n+=1e9)),[o,n]}function D(e,t){let o,n,i,r,s;function a(e){let o=e-(n??0);return null==n||o>=t||o<0}function l(){let e=Date.now();a(e)?c():s=setTimeout(l,t-(e-(n??0)))}function c(){return(s=void 0,o)?function(){let t=o,n=i;return o=i=void 0,r=e.apply(n,t)}():(o=i=void 0,r)}function h(...e){let c=Date.now(),d=a(c);return(o=e,i=this,n=c,d&&null==s)?s=setTimeout(l,t):null==s&&(s=setTimeout(l,t)),r}return h.cancel=function(){null!=s&&clearTimeout(s),o=n=i=s=void 0},h.flush=function(){return null!=s?c():r},h.pending=function(){return null!=s},h}let M=/\(([\s\S]*)\)/,L=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,F=/\s?=.*$/;var N=((i=N||{})[i.Off=0]="Off",i[i.Error=1]="Error",i[i.Warn=2]="Warn",i[i.Info=3]="Info",i[i.Debug=4]="Debug",i);let I=new class{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=B(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=B(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output=this.output??this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let o;(!(this.level<4)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...o){let n;if(!(this.level<1)||this.isDebugging){if(null==(n=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??""}${this.toLoggableParams(!1,o)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let o;(!(this.level<3)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let o;(!(this.level<2)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let o=t.map(e=>this.toLoggable(e)).join(", ");return 0!==o.length?` \u2014 ${o}`:""}};function B(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}function U(e){let t;if("function"==typeof e){if(e.prototype?.constructor==null)return e.name;t=e.prototype.constructor.name??""}else t=e.constructor?.name??"";let o=t.indexOf("_");return -1===o?t:t.substr(o+1)}let H={enabled:e=>I.enabled(e)||I.isDebugging,log:(e,t,o,...n)=>{switch(e){case"error":I.error("",t,o,...n);break;case"warn":I.warn(t,o,...n);break;case"info":I.log(t,o,...n);break;default:I.debug(t,o,...n)}}},z=new Map,W=0;function V(e,t){if(null!=t)return{scopeId:t.scopeId,prefix:`${t.prefix}${e}`};let o=j();return{scopeId:o,prefix:`[${String(o).padStart(5)}] ${e}`}}function j(){return 1073741824===W&&(W=0),++W}var q=((r=q||{})[r.Hash=35]="Hash",r[r.Slash=47]="Slash",r[r.Digit0=48]="Digit0",r[r.Digit1=49]="Digit1",r[r.Digit2=50]="Digit2",r[r.Digit3=51]="Digit3",r[r.Digit4=52]="Digit4",r[r.Digit5=53]="Digit5",r[r.Digit6=54]="Digit6",r[r.Digit7=55]="Digit7",r[r.Digit8=56]="Digit8",r[r.Digit9=57]="Digit9",r[r.Backslash=92]="Backslash",r[r.A=65]="A",r[r.B=66]="B",r[r.C=67]="C",r[r.D=68]="D",r[r.E=69]="E",r[r.F=70]="F",r[r.Z=90]="Z",r[r.a=97]="a",r[r.b=98]="b",r[r.c=99]="c",r[r.d=100]="d",r[r.e=101]="e",r[r.f=102]="f",r[r.z=122]="z",r),G=((s=G||{}).ActionPrefix="gitlens.action.",s.AddAuthors="gitlens.addAuthors",s.BrowseRepoAtRevision="gitlens.browseRepoAtRevision",s.BrowseRepoAtRevisionInNewWindow="gitlens.browseRepoAtRevisionInNewWindow",s.BrowseRepoBeforeRevision="gitlens.browseRepoBeforeRevision",s.BrowseRepoBeforeRevisionInNewWindow="gitlens.browseRepoBeforeRevisionInNewWindow",s.ClearFileAnnotations="gitlens.clearFileAnnotations",s.CloseUnchangedFiles="gitlens.closeUnchangedFiles",s.CloseWelcomeView="gitlens.closeWelcomeView",s.CompareWith="gitlens.compareWith",s.CompareHeadWith="gitlens.compareHeadWith",s.CompareWorkingWith="gitlens.compareWorkingWith",s.ComputingFileAnnotations="gitlens.computingFileAnnotations",s.ConnectRemoteProvider="gitlens.connectRemoteProvider",s.CopyAutolinkUrl="gitlens.copyAutolinkUrl",s.CopyCurrentBranch="gitlens.copyCurrentBranch",s.CopyDeepLinkToBranch="gitlens.copyDeepLinkToBranch",s.CopyDeepLinkToCommit="gitlens.copyDeepLinkToCommit",s.CopyDeepLinkToComparison="gitlens.copyDeepLinkToComparison",s.CopyDeepLinkToRepo="gitlens.copyDeepLinkToRepo",s.CopyDeepLinkToTag="gitlens.copyDeepLinkToTag",s.CopyDeepLinkToWorkspace="gitlens.copyDeepLinkToWorkspace",s.CopyMessageToClipboard="gitlens.copyMessageToClipboard",s.CopyRemoteBranchesUrl="gitlens.copyRemoteBranchesUrl",s.CopyRemoteBranchUrl="gitlens.copyRemoteBranchUrl",s.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",s.CopyRemoteComparisonUrl="gitlens.copyRemoteComparisonUrl",s.CopyRemoteFileUrl="gitlens.copyRemoteFileUrlToClipboard",s.CopyRemoteFileUrlWithoutRange="gitlens.copyRemoteFileUrlWithoutRange",s.CopyRemoteFileUrlFrom="gitlens.copyRemoteFileUrlFrom",s.CopyRemoteIssueUrl="gitlens.copyRemoteIssueUrl",s.CopyRemotePullRequestUrl="gitlens.copyRemotePullRequestUrl",s.CopyRemoteRepositoryUrl="gitlens.copyRemoteRepositoryUrl",s.CopyShaToClipboard="gitlens.copyShaToClipboard",s.CopyRelativePathToClipboard="gitlens.copyRelativePathToClipboard",s.CreatePatch="gitlens.createPatch",s.CreateCloudPatch="gitlens.createCloudPatch",s.CreatePullRequestOnRemote="gitlens.createPullRequestOnRemote",s.DiffDirectory="gitlens.diffDirectory",s.DiffDirectoryWithHead="gitlens.diffDirectoryWithHead",s.DiffWith="gitlens.diffWith",s.DiffWithNext="gitlens.diffWithNext",s.DiffWithNextInDiffLeft="gitlens.diffWithNextInDiffLeft",s.DiffWithNextInDiffRight="gitlens.diffWithNextInDiffRight",s.DiffWithPrevious="gitlens.diffWithPrevious",s.DiffWithPreviousInDiffLeft="gitlens.diffWithPreviousInDiffLeft",s.DiffWithPreviousInDiffRight="gitlens.diffWithPreviousInDiffRight",s.DiffLineWithPrevious="gitlens.diffLineWithPrevious",s.DiffWithRevision="gitlens.diffWithRevision",s.DiffWithRevisionFrom="gitlens.diffWithRevisionFrom",s.DiffWithWorking="gitlens.diffWithWorking",s.DiffWithWorkingInDiffLeft="gitlens.diffWithWorkingInDiffLeft",s.DiffWithWorkingInDiffRight="gitlens.diffWithWorkingInDiffRight",s.DiffLineWithWorking="gitlens.diffLineWithWorking",s.DisconnectRemoteProvider="gitlens.disconnectRemoteProvider",s.DisableDebugLogging="gitlens.disableDebugLogging",s.EnableDebugLogging="gitlens.enableDebugLogging",s.DisableRebaseEditor="gitlens.disableRebaseEditor",s.EnableRebaseEditor="gitlens.enableRebaseEditor",s.ExternalDiff="gitlens.externalDiff",s.ExternalDiffAll="gitlens.externalDiffAll",s.FetchRepositories="gitlens.fetchRepositories",s.GenerateCommitMessage="gitlens.generateCommitMessage",s.GetStarted="gitlens.getStarted",s.InviteToLiveShare="gitlens.inviteToLiveShare",s.OpenAutolinkUrl="gitlens.openAutolinkUrl",s.OpenBlamePriorToChange="gitlens.openBlamePriorToChange",s.OpenBranchesOnRemote="gitlens.openBranchesOnRemote",s.OpenBranchOnRemote="gitlens.openBranchOnRemote",s.OpenCurrentBranchOnRemote="gitlens.openCurrentBranchOnRemote",s.OpenChangedFiles="gitlens.openChangedFiles",s.OpenCommitOnRemote="gitlens.openCommitOnRemote",s.OpenComparisonOnRemote="gitlens.openComparisonOnRemote",s.OpenFileHistory="gitlens.openFileHistory",s.OpenFileFromRemote="gitlens.openFileFromRemote",s.OpenFileOnRemote="gitlens.openFileOnRemote",s.OpenFileOnRemoteFrom="gitlens.openFileOnRemoteFrom",s.OpenFileAtRevision="gitlens.openFileRevision",s.OpenFileAtRevisionFrom="gitlens.openFileRevisionFrom",s.OpenFolderHistory="gitlens.openFolderHistory",s.OpenOnRemote="gitlens.openOnRemote",s.OpenIssueOnRemote="gitlens.openIssueOnRemote",s.OpenCloudPatch="gitlens.openCloudPatch",s.OpenPatch="gitlens.openPatch",s.OpenPullRequestOnRemote="gitlens.openPullRequestOnRemote",s.OpenAssociatedPullRequestOnRemote="gitlens.openAssociatedPullRequestOnRemote",s.OpenRepoOnRemote="gitlens.openRepoOnRemote",s.OpenRevisionFile="gitlens.openRevisionFile",s.OpenRevisionFileInDiffLeft="gitlens.openRevisionFileInDiffLeft",s.OpenRevisionFileInDiffRight="gitlens.openRevisionFileInDiffRight",s.OpenWalkthrough="gitlens.openWalkthrough",s.OpenWorkingFile="gitlens.openWorkingFile",s.OpenWorkingFileInDiffLeft="gitlens.openWorkingFileInDiffLeft",s.OpenWorkingFileInDiffRight="gitlens.openWorkingFileInDiffRight",s.PullRepositories="gitlens.pullRepositories",s.PushRepositories="gitlens.pushRepositories",s.GitCommands="gitlens.gitCommands",s.GitCommandsBranch="gitlens.gitCommands.branch",s.GitCommandsCherryPick="gitlens.gitCommands.cherryPick",s.GitCommandsMerge="gitlens.gitCommands.merge",s.GitCommandsRebase="gitlens.gitCommands.rebase",s.GitCommandsReset="gitlens.gitCommands.reset",s.GitCommandsRevert="gitlens.gitCommands.revert",s.GitCommandsSwitch="gitlens.gitCommands.switch",s.GitCommandsTag="gitlens.gitCommands.tag",s.GitCommandsWorktree="gitlens.gitCommands.worktree",s.GitCommandsWorktreeOpen="gitlens.gitCommands.worktree.open",s.OpenOrCreateWorktreeForGHPR="gitlens.ghpr.views.openOrCreateWorktree",s.PlusHide="gitlens.plus.hide",s.PlusLoginOrSignUp="gitlens.plus.loginOrSignUp",s.PlusLogout="gitlens.plus.logout",s.PlusManage="gitlens.plus.manage",s.PlusPurchase="gitlens.plus.purchase",s.PlusResendVerification="gitlens.plus.resendVerification",s.PlusRestore="gitlens.plus.restore",s.PlusShowPlans="gitlens.plus.showPlans",s.PlusStartPreviewTrial="gitlens.plus.startPreviewTrial",s.PlusValidate="gitlens.plus.validate",s.QuickOpenFileHistory="gitlens.quickOpenFileHistory",s.RefreshFocus="gitlens.focus.refresh",s.RefreshGraph="gitlens.graph.refresh",s.RefreshHover="gitlens.refreshHover",s.ResetAvatarCache="gitlens.resetAvatarCache",s.ResetAIKey="gitlens.resetAIKey",s.ResetSuppressedWarnings="gitlens.resetSuppressedWarnings",s.ResetTrackedUsage="gitlens.resetTrackedUsage",s.ResetViewsLayout="gitlens.resetViewsLayout",s.RevealCommitInView="gitlens.revealCommitInView",s.ShareAsCloudPatch="gitlens.shareAsCloudPatch",s.SearchCommits="gitlens.showCommitSearch",s.SearchCommitsInView="gitlens.views.searchAndCompare.searchCommits",s.ShowBranchesView="gitlens.showBranchesView",s.ShowCommitDetailsView="gitlens.showCommitDetailsView",s.ShowCommitInView="gitlens.showCommitInView",s.ShowCommitsInView="gitlens.showCommitsInView",s.ShowCommitsView="gitlens.showCommitsView",s.ShowContributorsView="gitlens.showContributorsView",s.ShowDraftsView="gitlens.showDraftsView",s.ShowFileHistoryView="gitlens.showFileHistoryView",s.ShowFocusPage="gitlens.showFocusPage",s.ShowGraph="gitlens.showGraph",s.ShowGraphPage="gitlens.showGraphPage",s.ShowGraphView="gitlens.showGraphView",s.ShowHomeView="gitlens.showHomeView",s.ShowAccountView="gitlens.showAccountView",s.ShowInCommitGraph="gitlens.showInCommitGraph",s.ShowInCommitGraphView="gitlens.showInCommitGraphView",s.ShowInDetailsView="gitlens.showInDetailsView",s.ShowInTimeline="gitlens.showInTimeline",s.ShowLastQuickPick="gitlens.showLastQuickPick",s.ShowLineCommitInView="gitlens.showLineCommitInView",s.ShowLineHistoryView="gitlens.showLineHistoryView",s.OpenOnlyChangedFiles="gitlens.openOnlyChangedFiles",s.ShowPatchDetailsPage="gitlens.showPatchDetailsPage",s.ShowQuickBranchHistory="gitlens.showQuickBranchHistory",s.ShowQuickCommit="gitlens.showQuickCommitDetails",s.ShowQuickCommitFile="gitlens.showQuickCommitFileDetails",s.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",s.ShowQuickFileHistory="gitlens.showQuickFileHistory",s.ShowQuickRepoStatus="gitlens.showQuickRepoStatus",s.ShowQuickCommitRevision="gitlens.showQuickRevisionDetails",s.ShowQuickCommitRevisionInDiffLeft="gitlens.showQuickRevisionDetailsInDiffLeft",s.ShowQuickCommitRevisionInDiffRight="gitlens.showQuickRevisionDetailsInDiffRight",s.ShowQuickStashList="gitlens.showQuickStashList",s.ShowRemotesView="gitlens.showRemotesView",s.ShowRepositoriesView="gitlens.showRepositoriesView",s.ShowSearchAndCompareView="gitlens.showSearchAndCompareView",s.ShowSettingsPage="gitlens.showSettingsPage",s.ShowSettingsPageAndJumpToBranchesView="gitlens.showSettingsPage!branches-view",s.ShowSettingsPageAndJumpToCommitsView="gitlens.showSettingsPage!commits-view",s.ShowSettingsPageAndJumpToContributorsView="gitlens.showSettingsPage!contributors-view",s.ShowSettingsPageAndJumpToFileHistoryView="gitlens.showSettingsPage!file-history-view",s.ShowSettingsPageAndJumpToLineHistoryView="gitlens.showSettingsPage!line-history-view",s.ShowSettingsPageAndJumpToRemotesView="gitlens.showSettingsPage!remotes-view",s.ShowSettingsPageAndJumpToRepositoriesView="gitlens.showSettingsPage!repositories-view",s.ShowSettingsPageAndJumpToSearchAndCompareView="gitlens.showSettingsPage!search-compare-view",s.ShowSettingsPageAndJumpToStashesView="gitlens.showSettingsPage!stashes-view",s.ShowSettingsPageAndJumpToTagsView="gitlens.showSettingsPage!tags-view",s.ShowSettingsPageAndJumpToWorkTreesView="gitlens.showSettingsPage!worktrees-view",s.ShowSettingsPageAndJumpToViews="gitlens.showSettingsPage!views",s.ShowSettingsPageAndJumpToCommitGraph="gitlens.showSettingsPage!commit-graph",s.ShowSettingsPageAndJumpToAutolinks="gitlens.showSettingsPage!autolinks",s.ShowStashesView="gitlens.showStashesView",s.ShowTagsView="gitlens.showTagsView",s.ShowTimelinePage="gitlens.showTimelinePage",s.ShowTimelineView="gitlens.showTimelineView",s.ShowWelcomePage="gitlens.showWelcomePage",s.ShowWorktreesView="gitlens.showWorktreesView",s.ShowWorkspacesView="gitlens.showWorkspacesView",s.StashApply="gitlens.stashApply",s.StashSave="gitlens.stashSave",s.StashSaveFiles="gitlens.stashSaveFiles",s.SwitchAIModel="gitlens.switchAIModel",s.SwitchMode="gitlens.switchMode",s.ToggleCodeLens="gitlens.toggleCodeLens",s.ToggleFileBlame="gitlens.toggleFileBlame",s.ToggleFileBlameInDiffLeft="gitlens.toggleFileBlameInDiffLeft",s.ToggleFileBlameInDiffRight="gitlens.toggleFileBlameInDiffRight",s.ToggleFileChanges="gitlens.toggleFileChanges",s.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",s.ToggleFileHeatmap="gitlens.toggleFileHeatmap",s.ToggleFileHeatmapInDiffLeft="gitlens.toggleFileHeatmapInDiffLeft",s.ToggleFileHeatmapInDiffRight="gitlens.toggleFileHeatmapInDiffRight",s.ToggleGraph="gitlens.toggleGraph",s.ToggleMaximizedGraph="gitlens.toggleMaximizedGraph",s.ToggleLineBlame="gitlens.toggleLineBlame",s.ToggleReviewMode="gitlens.toggleReviewMode",s.ToggleZenMode="gitlens.toggleZenMode",s.ViewsCopy="gitlens.views.copy",s.ViewsOpenDirectoryDiff="gitlens.views.openDirectoryDiff",s.ViewsOpenDirectoryDiffWithWorking="gitlens.views.openDirectoryDiffWithWorking",s.Deprecated_DiffHeadWith="gitlens.diffHeadWith",s.Deprecated_DiffWorkingWith="gitlens.diffWorkingWith",s.Deprecated_OpenBranchesInRemote="gitlens.openBranchesInRemote",s.Deprecated_OpenBranchInRemote="gitlens.openBranchInRemote",s.Deprecated_OpenCommitInRemote="gitlens.openCommitInRemote",s.Deprecated_OpenFileInRemote="gitlens.openFileInRemote",s.Deprecated_OpenInRemote="gitlens.openInRemote",s.Deprecated_OpenRepoInRemote="gitlens.openRepoInRemote",s.Deprecated_ShowFileHistoryInView="gitlens.showFileHistoryInView",s),Q=((a=Q||{}).AngleBracketLeftHeavy="❰",a.AngleBracketRightHeavy="❱",a.ArrowBack="↩",a.ArrowDown="↓",a.ArrowDownUp="⇵",a.ArrowDropRight="⤷",a.ArrowHeadRight="➤",a.ArrowLeft="←",a.ArrowLeftDouble="⇐",a.ArrowLeftRight="↔",a.ArrowLeftRightDouble="⇔",a.ArrowLeftRightDoubleStrike="⇎",a.ArrowLeftRightLong="⟷",a.ArrowRight="→",a.ArrowRightDouble="⇒",a.ArrowRightHollow="⇨",a.ArrowUp="↑",a.ArrowUpDown="⇅",a.ArrowUpRight="↗",a.ArrowsHalfLeftRight="⇋",a.ArrowsHalfRightLeft="⇌",a.ArrowsLeftRight="⇆",a.ArrowsRightLeft="⇄",a.Asterisk="∗",a.Check="✔",a.Dash="—",a.Dot="•",a.Ellipsis="…",a.EnDash="–",a.Envelope="✉",a.EqualsTriple="≡",a.Flag="⚑",a.FlagHollow="⚐",a.MiddleEllipsis="⋯",a.MuchLessThan="≪",a.MuchGreaterThan="≫",a.Pencil="✎",a.Space=" ",a.SpaceThin=" ",a.SpaceThinnest=" ",a.SquareWithBottomShadow="❏",a.SquareWithTopShadow="❐",a.Warning="⚠",a.ZeroWidthSpace="​",a),J=((l=J||{}).DebugConsole="debug",l.File="file",l.Git="git",l.GitHub="github",l.GitLens="gitlens",l.Output="output",l.PRs="pr",l.Terminal="vscode-terminal",l.Vsls="vsls",l.VslsScc="vsls-scc",l.Virtual="vscode-vfs",l),K=((c=K||{}).Version="gitlens:synced:version",c.PreReleaseVersion="gitlens:synced:preVersion",c.HomeViewWelcomeVisible="gitlens:views:welcome:visible",c);let{fromCharCode:Y}=String;function Z(e){let[t,o]=O(e);return 1e3*t+Math.floor(o/1e6)}new TextEncoder;let X=Symbol("logInstanceNameFn");Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class ee{constructor(e,t,...o){let n;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:V(e??""),n="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??H,this._time=O(),null!=n){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=O(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=O(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t){this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);return}let[o,n]=O(this._time),i=1e3*o+Math.floor(n/1e6),r=e?.message??"";this.logProvider.log(i>250?"warn":this.logLevel,this.logScope,`${r?`${r} `:""}[${i}ms]${e?.suffix??""}`)}}function et(e,t){let o=e+t;return Math.round(t<0?o<0?0:o:o>255?255:o)}function eo(e,t){let o=function(e){let t=ep(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;let[n,i,r,s]=o,a=255*t/100;return`rgba(${et(n,a)}, ${et(i,a)}, ${et(r,a)}, ${s})`}function en(e,t){let o=eh.from(e);return null==o?e:o.transparent(t/100).toString()}function ei(e,t){let o=Math.pow(10,t);return Math.round(e*o)/o}(h=g||(g={})).on=function(e,t,o,n){let i=!1;if("string"==typeof e){let r=function(t){let n=t?.target?.closest(e);null!=n&&o(t,n)};return document.addEventListener(t,r,n??!0),{dispose:()=>{i||(i=!0,document.removeEventListener(t,r,n??!0))}}}let r=function(e){o(e,this)};return e.addEventListener(t,r,n??!1),{dispose:()=>{i||(i=!0,e.removeEventListener(t,r,n??!1))}}},h.insertTemplate=function(e,t,o){let n=document.getElementById(e);if(t.replaceChildren(n?.content.cloneNode(!0)),t.className=n.className,o?.visible!=null)for(let e of t.querySelectorAll("[data-visible]")){let t=e.dataset.visible;t&&(o.visible[t]?e.style.display="initial":e.style.display="none")}if(o?.bindings!=null)for(let e of t.querySelectorAll("[data-bind]")){let t=e.dataset.bind;if(!t)continue;let n=o.bindings[t];null!=n&&(e.textContent=String(n))}},h.resetSlot=function(e){e.replaceChildren(),e.className=""};class er{constructor(e,t,o,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=ei(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class es{constructor(e,t,o,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=ei(Math.max(Math.min(1,t),0),3),this.l=ei(Math.max(Math.min(1,o),0),3),this.a=ei(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,n=e.b/255,i=e.a,r=Math.max(t,o,n),s=Math.min(t,o,n),a=0,l=0,c=(s+r)/2,h=r-s;if(h>0){switch(l=Math.min(c<=.5?h/(2*c):h/(2-2*c),1),r){case t:a=(o-n)/h+(o<n?6:0);break;case o:a=(n-t)/h+2;break;case n:a=(t-o)/h+4}a*=60,a=Math.round(a)}return new es(a,l,c,i)}static _hue2rgb(e,t,o){return(o<0&&(o+=1),o>1&&(o-=1),o<1/6)?e+(t-e)*6*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){let t,o,n;let i=e.h/360,{s:r,l:s,a}=e;if(0===r)t=o=n=s;else{let e=s<.5?s*(1+r):s+r-s*r,a=2*s-e;t=es._hue2rgb(a,e,i+1/3),o=es._hue2rgb(a,e,i),n=es._hue2rgb(a,e,i-1/3)}return new er(Math.round(255*t),Math.round(255*o),Math.round(255*n),a)}}class ea{constructor(e,t,o,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=ei(Math.max(Math.min(1,t),0),3),this.v=ei(Math.max(Math.min(1,o),0),3),this.a=ei(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,n=e.b/255,i=Math.max(t,o,n),r=i-Math.min(t,o,n);return new ea(Math.round(60*(0===r?0:i===t?((o-n)/r%6+6)%6:i===o?(n-t)/r+2:(t-o)/r+4)),0===i?0:r/i,i,e.a)}static toRGBA(e){let{h:t,s:o,v:n,a:i}=e,r=n*o,s=r*(1-Math.abs(t/60%2-1)),a=n-r,[l,c,h]=[0,0,0];return t<60?(l=r,c=s):t<120?(l=s,c=r):t<180?(c=r,h=s):t<240?(c=s,h=r):t<300?(l=s,h=r):t<=360&&(l=r,h=s),new er(l=Math.round((l+a)*255),c=Math.round((c+a)*255),h=Math.round((h+a)*255),i)}}function el(e,t){return t.getPropertyValue(e).trim()}let ec=class e{static from(t){return t instanceof e?t:ep(t)||e.red}static fromCssVariable(t,o){return ep(el(t,o))||e.red}static fromHex(t){return ef(t)||e.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:es.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:ea.fromRGBA(this.rgba)}constructor(e){if(e){if(e instanceof er)this.rgba=e;else if(e instanceof es)this._hsla=e,this.rgba=es.toRGBA(e);else if(e instanceof ea)this._hsva=e,this.rgba=ea.toRGBA(e);else throw Error("Invalid color ctor argument")}else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&er.equals(this.rgba,e.rgba)&&es.equals(this.hsla,e.hsla)&&ea.equals(this.hsva,e.hsva)}getRelativeLuminance(){let t=e._relativeLuminanceForComponent(this.rgba.r);return ei(.2126*t+.7152*e._relativeLuminanceForComponent(this.rgba.g)+.0722*e._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new eh(new er(0,0,0,e.rgba.a));if(1===t)return new eh(new er(255,255,255,e.rgba.a));let o=e.getRelativeLuminance(),n=20,i=(e,o)=>{let r=e.mix(o,.5),s=r.getRelativeLuminance();return!(1e-7>Math.abs(t-s))&&n--?s>t?i(e,r):i(r,o):r},r=(o>t?i(eh.black,e):i(e,eh.white)).rgba;return new eh(new er(r.r,r.g,r.b,e.rgba.a))}(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(t){return new e(new es(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*t,this.hsla.a))}darken(t){return new e(new es(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*t,this.hsla.a))}transparent(t){let{r:o,g:n,b:i,a:r}=this.rgba;return new e(new er(o,n,i,r*t))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new e(new er(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(t){let o=t.rgba,n=this.rgba.a,i=o.a,r=n+i*(1-n);return r<1e-6?e.transparent:new e(new er(this.rgba.r*n/r+o.r*i*(1-n)/r,this.rgba.g*n/r+o.g*i*(1-n)/r,this.rgba.b*n/r+o.b*i*(1-n)/r,r))}mix(e,t){return function(e,t,o){let n=e.rgba,i=t.rgba;return new eh(new er(n.r+o*(i.r-n.r),n.g+o*(i.g-n.g),n.b+o*(i.b-n.b),n.a+o*(i.a-n.a)))}(this,e,t)}makeOpaque(t){if(this.isOpaque()||1!==t.rgba.a)return this;let{r:o,g:n,b:i,a:r}=this.rgba;return new e(new er(t.rgba.r-r*(t.rgba.r-o),t.rgba.g-r*(t.rgba.g-n),t.rgba.b-r*(t.rgba.b-i),1))}flatten(...t){let o=t.reduceRight((t,o)=>e._flatten(o,t));return e._flatten(this,o)}static _flatten(t,o){let n=1-t.rgba.a;return new e(new er(n*o.rgba.r+t.rgba.a*t.rgba.r,n*o.rgba.g+t.rgba.a*t.rgba.g,n*o.rgba.b+t.rgba.a*t.rgba.b))}toString(){var e;return this._toString||(this._toString=(e=this,e.isOpaque()?`#${ed(e.rgba.r)}${ed(e.rgba.g)}${ed(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;let n=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(i-n)/i,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;let n=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(n-i)/n,e.darken(o)}};ec.white=new ec(new er(255,255,255,1)),ec.black=new ec(new er(0,0,0,1)),ec.red=new ec(new er(255,0,0,1)),ec.blue=new ec(new er(0,0,255,1)),ec.green=new ec(new er(0,255,0,1)),ec.cyan=new ec(new er(0,255,255,1)),ec.lightgrey=new ec(new er(211,211,211,1)),ec.transparent=new ec(new er(0,0,0,0));let eh=ec;function ed(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let eu=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function ep(e){let t;if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===q.Hash)return ef(e);let o=eu.exec(e);if(null==o)return null;let n=o[1];switch(n){case"rgb":case"hsl":t=[parseInt(o[2],10),parseInt(o[3],10),parseInt(o[4],10),1];break;case"rgba":case"hsla":t=[parseInt(o[2],10),parseInt(o[3],10),parseInt(o[4],10),parseFloat(o[5])];break;default:return null}switch(n){case"rgb":case"rgba":return new eh(new er(t[0],t[1],t[2],t[3]));case"hsl":case"hsla":return new eh(new es(t[0],t[1],t[2],t[3]))}return eh.red}function ef(e){let t=(e=e.trim()).length;if(0===t||e.charCodeAt(0)!==q.Hash)return null;switch(t){case 7:return new eh(new er(16*eg(e.charCodeAt(1))+eg(e.charCodeAt(2)),16*eg(e.charCodeAt(3))+eg(e.charCodeAt(4)),16*eg(e.charCodeAt(5))+eg(e.charCodeAt(6)),1));case 9:{let t=16*eg(e.charCodeAt(1))+eg(e.charCodeAt(2));return new eh(new er(t,16*eg(e.charCodeAt(3))+eg(e.charCodeAt(4)),16*eg(e.charCodeAt(5))+eg(e.charCodeAt(6)),(16*eg(e.charCodeAt(7))+eg(e.charCodeAt(8)))/255))}case 4:{let t=eg(e.charCodeAt(1)),o=eg(e.charCodeAt(2)),n=eg(e.charCodeAt(3));return new eh(new er(16*t+t,16*o+o,16*n+n))}case 5:{let t=eg(e.charCodeAt(1)),o=eg(e.charCodeAt(2)),n=eg(e.charCodeAt(3)),i=eg(e.charCodeAt(4));return new eh(new er(16*t+t,16*o+o,16*n+n,(16*i+i)/255))}default:return null}}function eg(e){switch(e){case q.Digit0:break;case q.Digit1:return 1;case q.Digit2:return 2;case q.Digit3:return 3;case q.Digit4:return 4;case q.Digit5:return 5;case q.Digit6:return 6;case q.Digit7:return 7;case q.Digit8:return 8;case q.Digit9:return 9;case q.a:case q.A:return 10;case q.b:case q.B:return 11;case q.c:case q.C:return 12;case q.d:case q.D:return 13;case q.e:case q.E:return 14;case q.f:case q.F:return 15}return 0}let eb=class e{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(t,o,n)=>{null==this.listeners&&(this.listeners=new ey);let i=this.listeners.push(null==o?t:[t,o]),r={dispose:()=>{r.dispose=e._noop,this._disposed||i()}};return Array.isArray(n)&&n.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new ey);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};eb._noop=function(){};let em={done:!0,value:void 0},ev=class e{constructor(t){this.element=t,this.next=e.Undefined,this.prev=e.Undefined}};ev.Undefined=new ev(void 0);class ey{constructor(){this._first=ev.Undefined,this._last=ev.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===ev.Undefined}clear(){this._first=ev.Undefined,this._last=ev.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let o=new ev(e);if(this._first===ev.Undefined)this._first=o,this._last=o;else if(t){let e=this._last;this._last=o,o.prev=e,e.next=o}else{let e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===ev.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===ev.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==ev.Undefined&&e.next!==ev.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===ev.Undefined&&e.next===ev.Undefined?(this._first=ev.Undefined,this._last=ev.Undefined):e.next===ev.Undefined?(this._last=this._last.prev,this._last.next=ev.Undefined):e.prev===ev.Undefined&&(this._first=this._first.next,this._first.prev=ev.Undefined);this._size-=1}iterator(){let e;let t=this._first;return{next:function(){return t===ev.Undefined?em:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==ev.Undefined;t=t.next)e.push(t.element);return e}}let ew=new eb,ek=ew.event;function e$(e){let t=document.documentElement,o=window.getComputedStyle(t),n=document.body.classList,i=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),r=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),s=t.style,a=el("--vscode-editor-background",o),l=el("--vscode-editor-foreground",o);l||(l=el("--vscode-foreground",o));let c=el("--color-background",o);return s.setProperty("--color-background--lighten-05",eo(c,5)),s.setProperty("--color-background--darken-05",eo(c,-5)),s.setProperty("--color-background--lighten-075",eo(c,7.5)),s.setProperty("--color-background--darken-075",eo(c,-7.5)),s.setProperty("--color-background--lighten-10",eo(c,10)),s.setProperty("--color-background--darken-10",eo(c,-10)),s.setProperty("--color-background--lighten-15",eo(c,15)),s.setProperty("--color-background--darken-15",eo(c,-15)),s.setProperty("--color-background--lighten-30",eo(c,30)),s.setProperty("--color-background--darken-30",eo(c,-30)),s.setProperty("--color-background--lighten-50",eo(c,50)),s.setProperty("--color-background--darken-50",eo(c,-50)),c=el("--color-button-background",o),s.setProperty("--color-button-background--darken-30",eo(c,-30)),c=el("--color-highlight",o),s.setProperty("--color-highlight--75",en(c,75)),s.setProperty("--color-highlight--50",en(c,50)),s.setProperty("--color-highlight--25",en(c,25)),c=el("--color-button-secondary-background",o),s.setProperty("--color-button-secondary-background--darken-30",eo(c,-30)),c=el("--color-foreground",o),s.setProperty("--color-foreground--85",en(c,85)),s.setProperty("--color-foreground--75",en(c,75)),s.setProperty("--color-foreground--65",en(c,65)),s.setProperty("--color-foreground--50",en(c,50)),c=el("--color-link-foreground",o),s.setProperty("--color-link-foreground--darken-20",eo(c,-20)),s.setProperty("--color-link-foreground--lighten-20",eo(c,20)),c=el("--color-alert-infoBackground",o),s.setProperty("--color-alert-infoHoverBackground",i?eo(c,-5):eo(c,5)),c=el("--color-alert-warningBackground",o),s.setProperty("--color-alert-warningHoverBackground",i?eo(c,-5):eo(c,5)),c=el("--color-alert-errorBackground",o),s.setProperty("--color-alert-errorHoverBackground",i?eo(c,-5):eo(c,5)),c=i?eo(a,-5):eo(a,5),s.setProperty("--color-alert-neutralBackground",c),s.setProperty("--color-alert-neutralHoverBackground",i?eo(c,-5):eo(c,5)),{colors:{background:a,foreground:l},computedStyle:o,isLightTheme:i,isHighContrastTheme:r,isInitializing:null==e}}var e_=Object.defineProperty,ex=Object.getOwnPropertyDescriptor;let eC=0;function eS(){return 1073741824===eC?eC=1:eC++,`webview:${eC}`}let eA=new TextDecoder;class eR{constructor(e){this.appName=e;let t=[],o=e$();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(ek(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",I.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=acquireVsCodeApi(),null!=this.state){let e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){let e=new MutationObserver(e=>{ew.fire(e$(e))});return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame(()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(g.on(window,"message",e=>this.onMessageReceivedCore(e))),this.sendCommand($,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}}),t.push(g.on(window,"pagehide",()=>{t?.forEach(e=>e.dispose()),this.bindDisposables?.forEach(e=>e.dispose()),this.bindDisposables=void 0}))}onMessageReceivedCore(e){let t=z.get(W),o=e.data;if(o.packed&&o.params instanceof Uint8Array){let n=function(e,t,...o){return(t?.provider??H).enabled(t?.logLevel??"info")?new ee(e,t,...o):void 0}(V(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});o.params=JSON.parse(eA.decode(o.params)),n?.stop()}this.onMessageReceived(o)}bind(){this.bindDisposables?.forEach(e=>e.dispose()),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);let e=D(e=>{this.sendCommand(_,e)},150);this.bindDisposables.push(g.on(document,"focusin",t=>{let o=t.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==o)&&(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))}),g.on(document,"focusout",()=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))}))}log(e,...t){"string"==typeof e?I.log(e,...t):I.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){let o=eS();this.log(`${this.appName}.sendCommand(${o}): name=${e.method}`),this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,o){let n=eS();this.log(`${this.appName}.sendCommandWithCompletion(${n}): name=${e.method}`);let i=new Promise((e,t)=>{let i;let r=[g.on(window,"message",t=>{k(o,t.data,o=>{t.data.completionId===n&&(r.forEach(e=>e.dispose()),queueMicrotask(()=>e(o)))})}),{dispose:function(){null!=i&&(clearTimeout(i),i=void 0)}}];i=setTimeout(()=>{i=void 0,r.forEach(e=>e.dispose()),t(Error(`Timed out waiting for completion of ${o.method}`))},6e4)});return this.postMessage({id:n,method:e.method,params:t,completionId:n}),i}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}((e,t,o,n)=>{for(var i,r=n>1?void 0:n?ex(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&e_(t,o,r)})([function(e,t=!1){let o,n,i,r;let s=0,a=!1,l=!1,c=!0;null!=e&&({args:o,enter:n,exit:i,prefix:r,logThreshold:s=0,scoped:a=!0,singleLine:l=!1,timed:c=!0}=e),s>0&&(l=!0,c=!0),c&&(a=!0);let h=I.isDebugging,d=t?I.debug:I.log,u=h?"debug":"info";return(e,t,p)=>{let f,g;if("function"==typeof p.value?(f=p.value,g="value"):"function"==typeof p.get&&(f=p.get,g="get"),null==f||null==g)throw Error("Not supported");let b=!1!==o?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),o=(t=(t=t.replace(L,"")||t).slice(0,t.indexOf("{"))).indexOf("("),n=t.indexOf(")");o=o>=0?o+1:0,n=n>0?n:t.indexOf("="),t=t.slice(o,n),t=`(${t})`;let i=M.exec(t);return null!=i?i[1].split(",").map(e=>e.trim().replace(F,"")):[]}(f):[];p[g]=function(...e){var p,g;let m,v;if(!h&&!I.enabled(u))return f.apply(this,e);let y=j(),w=this!=null?this.constructor?.[X]?.(this,U(this))??U(this):void 0,k=w?a?`[${y.toString(16).padStart(5)}] ${w}.${t}`:`${w}.${t}`:t;null!=r&&(k=r({id:y,instance:this,instanceName:w??"",name:t,prefix:k},...e)),a&&(p=m={scopeId:y,prefix:k},z.set(y,p));let $=null!=n?n(...e):"";if(!1===o||0===e.length)v="",l||d.call(I,`${k}${$}`);else{let t,n,i,r;v="";let s=-1;for(r of e){if(n=b[++s],null!=(t=o?.[s])){if("boolean"==typeof t)continue;if(v.length>0&&(v+=", "),"string"==typeof t){v+=t;continue}i=String(t(r))}else v.length>0&&(v+=", "),i=I.toLoggable(r);v+=n?`${n}=${i}`:i}l||d.call(I,v?`${k}${$}(${v})`:`${k}${$}`)}if(l||c||null!=i){let t;let o=c?O():void 0,n=e=>{let t=void 0!==o?` [${Z(o)}ms]`:"";l?I.error(e,v?`${k}${$}(${v})`:`${k}${$}`,m?.exitDetails?`failed${m.exitDetails}${t}`:`failed${t}`):I.error(e,k,m?.exitDetails?`failed${m.exitDetails}${t}`:`failed${t}`),a&&z.delete(y)};try{t=f.apply(this,e)}catch(e){throw n(e),e}let r=e=>{let t,n,r,c;if(null!=o?(t=Z(o))>500?(n=I.warn,r=` [*${t}ms] (slow)`):(n=d,r=` [${t}ms]`):(r="",n=d),null!=i){if("function"==typeof i)try{c=i(e)}catch(e){c=`@log.exit error: ${e}`}else!0===i&&(c=`returned ${I.toLoggable(e)}`)}else m?.exitFailed?(c=m.exitFailed,n=I.error):c="completed";l?(0===s||t>s)&&n.call(I,v?`${k}${$}(${v}) ${c}${m?.exitDetails||""}${r}`:`${k}${$} ${c}${m?.exitDetails||""}${r}`):n.call(I,v?`${k}(${v}) ${c}${m?.exitDetails||""}${r}`:`${k} ${c}${m?.exitDetails||""}${r}`),a&&z.delete(y)};return null!=t&&null!=(g=t)&&(g instanceof Promise||"function"==typeof g?.then)?t.then(r,n):r(t),t}return f.apply(this,e)}}}({args:{0:e=>`${e.data.id}, method=${e.data.method}`}},!0)],eR.prototype,"onMessageReceivedCore",1);var eP={408:(e,t)=>{var o=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),p=Symbol.iterator,f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,b={};function m(e,t,o){this.props=e,this.context=t,this.refs=b,this.updater=o||f}function v(){}function y(e,t,o){this.props=e,this.context=t,this.refs=b,this.updater=o||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var w=y.prototype=new v;w.constructor=y,g(w,m.prototype),w.isPureReactComponent=!0;var k=Array.isArray,$=Object.prototype.hasOwnProperty,_={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var i,r={},s=null,a=null;if(null!=t)for(i in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)$.call(t,i)&&!x.hasOwnProperty(i)&&(r[i]=t[i]);var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){for(var c=Array(l),h=0;h<l;h++)c[h]=arguments[h+2];r.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===r[i]&&(r[i]=l[i]);return{$$typeof:o,type:e,key:s,ref:a,props:r,_owner:_.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var A=/\/+/g;function R(e,t){var o,n;return"object"==typeof e&&null!==e&&null!=e.key?(o=""+e.key,n={"=":"=0",":":"=2"},"$"+o.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function P(e,t,i){if(null==e)return e;var r=[],s=0;return function e(t,i,r,s,a){var l,c,h,d=typeof t;"undefined"!==d&&"boolean"!==d||(t=null);var u=!1;if(null===t)u=!0;else switch(d){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case o:case n:u=!0}}if(u)return a=a(u=t),t=""===s?"."+R(u,0):s,k(a)?(r="",null!=t&&(r=t.replace(A,"$&/")+"/"),e(a,i,r,"",function(e){return e})):null!=a&&(S(a)&&(l=a,c=r+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(A,"$&/")+"/")+t,a={$$typeof:o,type:l.type,key:c,ref:l.ref,props:l.props,_owner:l._owner}),i.push(a)),1;if(u=0,s=""===s?".":s+":",k(t))for(var f=0;f<t.length;f++){var g=s+R(d=t[f],f);u+=e(d,i,r,g,a)}else if("function"==typeof(g=null===(h=t)||"object"!=typeof h?null:"function"==typeof(h=p&&h[p]||h["@@iterator"])?h:null))for(t=g.call(t),f=0;!(d=t.next()).done;)u+=e(d=d.value,i,r,g=s+R(d,f++),a);else if("object"===d)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(i=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":i)+"). If you meant to render a collection of children, use an array instead.");return u}(e,r,"","",function(e){return t.call(i,e,s++)}),r}function E(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},O={transition:null};t.Children={map:P,forEach:function(e,t,o){P(e,function(){t.apply(this,arguments)},o)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=i,t.Profiler=s,t.PureComponent=y,t.StrictMode=r,t.Suspense=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:O,ReactCurrentOwner:_},t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=g({},e.props),r=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=_.current),void 0!==t.key&&(r=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)$.call(t,c)&&!x.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){l=Array(c);for(var h=0;h<c;h++)l[h]=arguments[h+2];i.children=l}return{$$typeof:o,type:e.type,key:r,ref:s,props:i,_owner:a}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,o){return T.current.useImperativeHandle(e,t,o)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,o){return T.current.useReducer(e,t,o)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,o){return T.current.useSyncExternalStore(e,t,o)},t.useTransition=function(){return T.current.useTransition()},t.version="18.2.0"},294:(e,t,o)=>{e.exports=o(408)}},eE={};function eT(e){var t=eE[e];if(void 0!==t)return t.exports;var o=eE[e]={exports:{}};return eP[e](o,o.exports,eT),o.exports}eT.d=(e,t)=>{for(var o in t)eT.o(t,o)&&!eT.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},eT.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var eO={};(()=>{let e,t,o,n;eT.d(eO,{Tn:()=>tp,qE:()=>t_,HE:()=>tx,Ct:()=>tR,zx:()=>tO,M1:()=>tF,sX:()=>tY,D0:()=>tJ,fs:()=>tK,Tw:()=>ty,ud:()=>tC,wt:()=>tS,ne:()=>tP,Ku:()=>tD,FU:()=>tN,XO:()=>tZ,Ze:()=>tX,K$:()=>t0,cX:()=>on,Js:()=>oi,J9:()=>or,si:()=>tj,sg:()=>ol,hW:()=>oc,II:()=>t4,v2:()=>oe,sN:()=>ot,Lb:()=>oo,J2:()=>tc,$$:()=>tV,Vp:()=>oa,u:()=>td,fW:()=>function e(...t){t.forEach(t=>{t.elementName&&!customElements.get(t.elementName)&&(customElements.define(t.elementName,t),t.components&&t.components.length>0&&e(...t.components))})},WV:()=>ek,h4:()=>ew,kZ:()=>ey});let i=globalThis,r=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),a=new WeakMap;class l{constructor(e,t,o){if(this._$cssResult$=!0,o!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(r&&void 0===e){let o=void 0!==t&&1===t.length;o&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&a.set(t,e))}return e}toString(){return this.cssText}}let c=(e,...t)=>new l(1===e.length?e[0]:t.reduce((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]),e,s),h=(e,t)=>{if(r)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let o of t){let t=document.createElement("style"),n=i.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=o.cssText,e.appendChild(t)}},d=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{var t;let o="";for(let t of e.cssRules)o+=t.cssText;return new l("string"==typeof(t=o)?t:t+"",void 0,s)})(e):e,{is:u,defineProperty:p,getOwnPropertyDescriptor:f,getOwnPropertyNames:g,getOwnPropertySymbols:b,getPrototypeOf:m}=Object,v=globalThis,y=v.trustedTypes,w=y?y.emptyScript:"",k=v.reactiveElementPolyfillSupport,$=(e,t)=>e,_={toAttribute(e,t){switch(t){case Boolean:e=e?w:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},x=(e,t)=>!u(e,t),C={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=C){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&p(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){let{get:n,set:i}=f(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){let r=n?.call(this);i.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??C}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;let e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){let e=this.properties;for(let t of[...g(e),...b(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,o]of t)this.elementProperties.set(e,o)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let o of new Set(e.flat(1/0).reverse()))t.unshift(d(o));else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){let o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return h(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){let o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){let i=(void 0!==o.converter?.toAttribute?o.converter:_).toAttribute(t,o.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){let o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){let e=o.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:_;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,n=!1,i){if(void 0!==e){if(!((o??=this.constructor.getPropertyOptions(e)).hasChanged??x)(n?i:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$ES?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[$("elementProperties")]=new Map,S[$("finalized")]=new Map,k?.({ReactiveElement:S}),(v.reactiveElementVersions??=[]).push("2.0.0");let A=globalThis,R=A.trustedTypes,P=R?R.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,O="?"+T,D=`<${O}>`,M=document,L=()=>M.createComment(""),F=e=>null===e||"object"!=typeof e&&"function"!=typeof e,N=Array.isArray,I=e=>N(e)||"function"==typeof e?.[Symbol.iterator],B="[ 	\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,z=/>/g,W=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,j=/"/g,q=/^(?:script|style|textarea|title)$/i,G=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),Q=G(1),J=(G(2),Symbol.for("lit-noChange")),K=Symbol.for("lit-nothing"),Y=new WeakMap,Z=M.createTreeWalker(M,129);function X(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(t):t}let ee=(e,t)=>{let o=e.length-1,n=[],i,r=2===t?"<svg>":"",s=U;for(let t=0;t<o;t++){let o=e[t],a,l,c=-1,h=0;for(;h<o.length&&(s.lastIndex=h,null!==(l=s.exec(o)));)h=s.lastIndex,s===U?"!--"===l[1]?s=H:void 0!==l[1]?s=z:void 0!==l[2]?(q.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=W):void 0!==l[3]&&(s=W):s===W?">"===l[0]?(s=i??U,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?W:'"'===l[3]?j:V):s===j||s===V?s=W:s===H||s===z?s=U:(s=W,i=void 0);let d=s===W&&e[t+1].startsWith("/>")?" ":"";r+=s===U?o+D:c>=0?(n.push(a),o.slice(0,c)+E+o.slice(c)+T+d):o+T+(-2===c?t:d)}return[X(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),n]};class et{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0,s=e.length-1,a=this.parts,[l,c]=ee(e,t);if(this.el=et.createElement(l,o),Z.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Z.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(let e of n.getAttributeNames())if(e.endsWith(E)){let t=c[r++],o=n.getAttribute(e).split(T),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:i,name:s[2],strings:o,ctor:"."===s[1]?es:"?"===s[1]?ea:"@"===s[1]?el:er}),n.removeAttribute(e)}else e.startsWith(T)&&(a.push({type:6,index:i}),n.removeAttribute(e));if(q.test(n.tagName)){let e=n.textContent.split(T),t=e.length-1;if(t>0){n.textContent=R?R.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],L()),Z.nextNode(),a.push({type:2,index:++i});n.append(e[t],L())}}}else if(8===n.nodeType){if(n.data===O)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(T,e+1));)a.push({type:7,index:i}),e+=T.length-1}}i++}}static createElement(e,t){let o=M.createElement("template");return o.innerHTML=e,o}}function eo(e,t,o=e,n){if(t===J)return t;let i=void 0!==n?o._$Co?.[n]:o._$Cl,r=F(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),void 0===r?i=void 0:(i=new r(e))._$AT(e,o,n),void 0!==n?(o._$Co??=[])[n]=i:o._$Cl=i),void 0!==i&&(t=eo(e,i._$AS(e,t.values),i,n)),t}class en{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??M).importNode(t,!0);Z.currentNode=n;let i=Z.nextNode(),r=0,s=0,a=o[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new ei(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new ec(i,this,e)),this._$AV.push(t),a=o[++s]}r!==a?.index&&(i=Z.nextNode(),r++)}return Z.currentNode=M,n}p(e){let t=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class ei{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){F(e=eo(this,e,t))?e===K||null==e||""===e?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==J&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):I(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==K&&F(this._$AH)?this._$AA.nextSibling.data=e:this.$(M.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=et.createElement(X(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{let e=new en(n,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new et(e)),t}T(e){N(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,n=0;for(let i of e)n===t.length?t.push(o=new ei(this.k(L()),this.k(L()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class er{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,i){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=K}_$AI(e,t=this,o,n){let i=this.strings,r=!1;if(void 0===i)(r=!F(e=eo(this,e,t,0))||e!==this._$AH&&e!==J)&&(this._$AH=e);else{let n,s;let a=e;for(e=i[0],n=0;n<i.length-1;n++)(s=eo(this,a[o+n],t,n))===J&&(s=this._$AH[n]),r||=!F(s)||s!==this._$AH[n],s===K?e=K:e!==K&&(e+=(s??"")+i[n+1]),this._$AH[n]=s}r&&!n&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class es extends er{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}}class ea extends er{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}}class el extends er{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){if((e=eo(this,e,t,0)??K)===J)return;let o=this._$AH,n=e===K&&o!==K||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==K&&(o===K||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ec{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){eo(this,e)}}let eh=A.litHtmlPolyfillSupport;eh?.(et,ei),(A.litHtmlVersions??=[]).push("3.0.0");class ed extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{let n=o?.renderBefore??t,i=n._$litPart$;if(void 0===i){let e=o?.renderBefore??null;n._$litPart$=i=new ei(t.insertBefore(L(),e),e,void 0,o??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}}ed._$litElement$=!0,ed.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ed});let eu=globalThis.litElementPolyfillSupport;eu?.({LitElement:ed}),(globalThis.litElementVersions??=[]).push("4.0.0");let ep={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:x},ef=(e=ep,t,o)=>{let{kind:n,metadata:i}=o,r=globalThis.litPropertyMetadata.get(i);if(void 0===r&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(o.name,e),"accessor"===n){let{name:n}=o;return{set(o){let i=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){let{name:n}=o;return function(o){let i=this[n];t.call(this,o),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function eg(e){return(t,o)=>"object"==typeof o?ef(e,t,o):((e,t,o)=>{let n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}let eb=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function em(e,t){return(o,n,i)=>{let r=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:s}="object"==typeof n?o:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return eb(o,n,{get(){if(t){let t=e.call(this);return void 0===t&&(t=r(this),s.call(this,t)),t}return r(this)}})}return eb(o,n,{get(){return r(this)}})}}class ev extends ed{}let ey=c`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,ew=c``,ek=c`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,e$=Math.min,e_=Math.max,ex=Math.round,eC=e=>({x:e,y:e}),eS={left:"right",right:"left",bottom:"top",top:"bottom"},eA={start:"end",end:"start"};function eR(e,t){return"function"==typeof e?e(t):e}function eP(e){return e.split("-")[0]}function eE(e){return e.split("-")[1]}function eD(e){return"x"===e?"y":"x"}function eM(e){return"y"===e?"height":"width"}function eL(e){return["top","bottom"].includes(eP(e))?"y":"x"}function eF(e){return e.replace(/start|end/g,e=>eA[e])}function eN(e){return e.replace(/left|right|bottom|top/g,e=>eS[e])}function eI(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function eB(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function eU(e,t,o){let n,{reference:i,floating:r}=e,s=eL(t),a=eD(eL(t)),l=eM(a),c=eP(t),h="y"===s,d=i.x+i.width/2-r.width/2,u=i.y+i.height/2-r.height/2,p=i[l]/2-r[l]/2;switch(c){case"top":n={x:d,y:i.y-r.height};break;case"bottom":n={x:d,y:i.y+i.height};break;case"right":n={x:i.x+i.width,y:u};break;case"left":n={x:i.x-r.width,y:u};break;default:n={x:i.x,y:i.y}}switch(eE(t)){case"start":n[a]-=p*(o&&h?-1:1);break;case"end":n[a]+=p*(o&&h?-1:1)}return n}async function eH(e,t){var o;void 0===t&&(t={});let{x:n,y:i,platform:r,rects:s,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:p=0}=eR(t,e),f=eI(p),g=a[u?"floating"===d?"reference":"floating":d],b=eB(await r.getClippingRect({element:null==(o=await (null==r.isElement?void 0:r.isElement(g)))||o?g:g.contextElement||await (null==r.getDocumentElement?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),m="floating"===d?{...s.floating,x:n,y:i}:s.reference,v=await (null==r.getOffsetParent?void 0:r.getOffsetParent(a.floating)),y=await (null==r.isElement?void 0:r.isElement(v))&&await (null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},w=eB(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:m,offsetParent:v,strategy:l}):m);return{top:(b.top-w.top+f.top)/y.y,bottom:(w.bottom-b.bottom+f.bottom)/y.y,left:(b.left-w.left+f.left)/y.x,right:(w.right-b.right+f.right)/y.x}}function ez(e){return ej(e)?(e.nodeName||"").toLowerCase():"#document"}function eW(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function eV(e){var t;return null==(t=(ej(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function ej(e){return e instanceof Node||e instanceof eW(e).Node}function eq(e){return e instanceof Element||e instanceof eW(e).Element}function eG(e){return e instanceof HTMLElement||e instanceof eW(e).HTMLElement}function eQ(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof eW(e).ShadowRoot)}function eJ(e){let{overflow:t,overflowX:o,overflowY:n,display:i}=eX(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(i)}function eK(e){let t=eY(),o=eX(e);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some(e=>(o.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(o.contain||"").includes(e))}function eY(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function eZ(e){return["html","body","#document"].includes(ez(e))}function eX(e){return eW(e).getComputedStyle(e)}function e0(e){return eq(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function e1(e){if("html"===ez(e))return e;let t=e.assignedSlot||e.parentNode||eQ(e)&&e.host||eV(e);return eQ(t)?t.host:t}function e2(e){let t=eX(e),o=parseFloat(t.width)||0,n=parseFloat(t.height)||0,i=eG(e),r=i?e.offsetWidth:o,s=i?e.offsetHeight:n,a=ex(o)!==r||ex(n)!==s;return a&&(o=r,n=s),{width:o,height:n,$:a}}function e5(e){return eq(e)?e:e.contextElement}function e3(e){let t=e5(e);if(!eG(t))return eC(1);let o=t.getBoundingClientRect(),{width:n,height:i,$:r}=e2(t),s=(r?ex(o.width):o.width)/n,a=(r?ex(o.height):o.height)/i;return s&&Number.isFinite(s)||(s=1),a&&Number.isFinite(a)||(a=1),{x:s,y:a}}let e6=eC(0);function e4(e){let t=eW(e);return eY()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:e6}function e8(e,t,o,n){var i;void 0===t&&(t=!1),void 0===o&&(o=!1);let r=e.getBoundingClientRect(),s=e5(e),a=eC(1);t&&(n?eq(n)&&(a=e3(n)):a=e3(e));let l=(void 0===(i=o)&&(i=!1),!(!n||i&&n!==eW(s))&&i)?e4(s):eC(0),c=(r.left+l.x)/a.x,h=(r.top+l.y)/a.y,d=r.width/a.x,u=r.height/a.y;if(s){let e=eW(s),t=n&&eq(n)?eW(n):n,o=e.frameElement;for(;o&&n&&t!==e;){let e=e3(o),t=o.getBoundingClientRect(),n=eX(o),i=t.left+(o.clientLeft+parseFloat(n.paddingLeft))*e.x,r=t.top+(o.clientTop+parseFloat(n.paddingTop))*e.y;c*=e.x,h*=e.y,d*=e.x,u*=e.y,c+=i,h+=r,o=eW(o).frameElement}}return eB({width:d,height:u,x:c,y:h})}function e7(e){return e8(eV(e)).left+e0(e).scrollLeft}function e9(e,t,o){let n;if("viewport"===t)n=function(e,t){let o=eW(e),n=eV(e),i=o.visualViewport,r=n.clientWidth,s=n.clientHeight,a=0,l=0;if(i){r=i.width,s=i.height;let e=eY();(!e||e&&"fixed"===t)&&(a=i.offsetLeft,l=i.offsetTop)}return{width:r,height:s,x:a,y:l}}(e,o);else if("document"===t)n=function(e){let t=eV(e),o=e0(e),n=e.ownerDocument.body,i=e_(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=e_(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight),s=-o.scrollLeft+e7(e),a=-o.scrollTop;return"rtl"===eX(n).direction&&(s+=e_(t.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:a}}(eV(e));else if(eq(t))n=function(e,t){let o=e8(e,!0,"fixed"===t),n=o.top+e.clientTop,i=o.left+e.clientLeft,r=eG(e)?e3(e):eC(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:i*r.x,y:n*r.y}}(t,o);else{let o=e4(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return eB(n)}function te(e,t){return eG(e)&&"fixed"!==eX(e).position?t?t(e):e.offsetParent:null}function tt(e,t){let o=eW(e);if(!eG(e))return o;let n=te(e,t);for(;n&&["table","td","th"].includes(ez(n))&&"static"===eX(n).position;)n=te(n,t);return n&&("html"===ez(n)||"body"===ez(n)&&"static"===eX(n).position&&!eK(n))?o:n||function(e){let t=e1(e);for(;eG(t)&&!eZ(t);){if(eK(t))return t;t=e1(t)}return null}(e)||o}let to={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:n}=e,i=eG(o),r=eV(o);if(o===r)return t;let s={scrollLeft:0,scrollTop:0},a=eC(1),l=eC(0);if((i||!i&&"fixed"!==n)&&(("body"!==ez(o)||eJ(r))&&(s=e0(o)),eG(o))){let e=e8(o);a=e3(o),l.x=e.x+o.clientLeft,l.y=e.y+o.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-s.scrollLeft*a.x+l.x,y:t.y*a.y-s.scrollTop*a.y+l.y}},getDocumentElement:eV,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:n,strategy:i}=e,r=[..."clippingAncestors"===o?function(e,t){let o=t.get(e);if(o)return o;let n=(function e(t,o,n){var i;void 0===o&&(o=[]),void 0===n&&(n=!0);let r=function e(t){let o=e1(t);return eZ(o)?t.ownerDocument?t.ownerDocument.body:t.body:eG(o)&&eJ(o)?o:e(o)}(t),s=r===(null==(i=t.ownerDocument)?void 0:i.body),a=eW(r);return s?o.concat(a,a.visualViewport||[],eJ(r)?r:[],a.frameElement&&n?e(a.frameElement):[]):o.concat(r,e(r,[],n))})(e,[],!1).filter(e=>eq(e)&&"body"!==ez(e)),i=null,r="fixed"===eX(e).position,s=r?e1(e):e;for(;eq(s)&&!eZ(s);){let t=eX(s),o=eK(s);o||"fixed"!==t.position||(i=null),(r?!o&&!i:!o&&"static"===t.position&&i&&["absolute","fixed"].includes(i.position)||eJ(s)&&!o&&function e(t,o){let n=e1(t);return!(n===o||!eq(n)||eZ(n))&&("fixed"===eX(n).position||e(n,o))}(e,s))?n=n.filter(e=>e!==s):i=t,s=e1(s)}return t.set(e,n),n}(t,this._c):[].concat(o),n],s=r[0],a=r.reduce((e,o)=>{let n=e9(t,o,i);return e.top=e_(n.top,e.top),e.right=e$(n.right,e.right),e.bottom=e$(n.bottom,e.bottom),e.left=e_(n.left,e.left),e},e9(t,s,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:tt,getElementRects:async function(e){let{reference:t,floating:o,strategy:n}=e,i=this.getOffsetParent||tt,r=this.getDimensions;return{reference:function(e,t,o){let n=eG(t),i=eV(t),r="fixed"===o,s=e8(e,!0,r,t),a={scrollLeft:0,scrollTop:0},l=eC(0);if(n||!n&&!r){if(("body"!==ez(t)||eJ(i))&&(a=e0(t)),n){let e=e8(t,!0,r,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else i&&(l.x=e7(i))}return{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}(t,await i(o),n),floating:{x:0,y:0,...await r(o)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return e2(e)},getScale:e3,isElement:eq,isRTL:function(e){return"rtl"===eX(e).direction}},tn=(e,t,o)=>{let n=new Map,i={platform:to,...o},r={...i.platform,_c:n};return(async(e,t,o)=>{let{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,a=r.filter(Boolean),l=await (null==s.isRTL?void 0:s.isRTL(t)),c=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:d}=eU(c,n,l),u=n,p={},f=0;for(let o=0;o<a.length;o++){let{name:r,fn:g}=a[o],{x:b,y:m,data:v,reset:y}=await g({x:h,y:d,initialPlacement:n,placement:u,strategy:i,middlewareData:p,rects:c,platform:s,elements:{reference:e,floating:t}});h=null!=b?b:h,d=null!=m?m:d,p={...p,[r]:{...p[r],...v}},y&&f<=50&&(f++,"object"==typeof y&&(y.placement&&(u=y.placement),y.rects&&(c=!0===y.rects?await s.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:h,y:d}=eU(c,u,l)),o=-1)}return{x:h,y:d,placement:u,strategy:i,middlewareData:p}})(e,t,{...i,platform:r})},ti=c`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var tr,ts,ta,tl=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class tc extends ev{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[ek,ey,ti]}static{this.elementName="gk-popover"}firstUpdated(e){let t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame(()=>{this.popoverEl?.focus()})):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){var e,t,o;let n=[{name:"offset",options:6,async fn(e){let{x:t,y:o}=e,n=await async function(e,t){let{placement:o,platform:n,elements:i}=e,r=await (null==n.isRTL?void 0:n.isRTL(i.floating)),s=eP(o),a=eE(o),l="y"===eL(o),c=["left","top"].includes(s)?-1:1,h=r&&l?-1:1,d=eR(6,e),{mainAxis:u,crossAxis:p,alignmentAxis:f}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&"number"==typeof f&&(p="end"===a?-1*f:f),l?{x:p*h,y:u*c}:{x:u*c,y:p*h}}(e,0);return{x:t+n.x,y:o+n.y,data:n}}},(void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var o,n,i,r,s;let{placement:a,middlewareData:l,rects:c,initialPlacement:h,platform:d,elements:u}=e,{mainAxis:p=!0,crossAxis:f=!0,fallbackPlacements:g,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:v=!0,...y}=eR(t,e);if(null!=(o=l.arrow)&&o.alignmentOffset)return{};let w=eP(a),k=eP(h)===h,$=await (null==d.isRTL?void 0:d.isRTL(u.floating)),_=g||(k||!v?[eN(h)]:function(e){let t=eN(e);return[eF(e),t,eF(t)]}(h));g||"none"===m||_.push(...function(e,t,o,n){let i=eE(e),r=function(e,t,o){let n=["left","right"],i=["right","left"];switch(e){case"top":case"bottom":return o?t?i:n:t?n:i;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(eP(e),"start"===o,n);return i&&(r=r.map(e=>e+"-"+i),t&&(r=r.concat(r.map(eF)))),r}(h,v,m,$));let x=[h,..._],C=await eH(e,y),S=[],A=(null==(n=l.flip)?void 0:n.overflows)||[];if(p&&S.push(C[w]),f){let e=function(e,t,o){void 0===o&&(o=!1);let n=eE(e),i=eD(eL(e)),r=eM(i),s="x"===i?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return t.reference[r]>t.floating[r]&&(s=eN(s)),[s,eN(s)]}(a,c,$);S.push(C[e[0]],C[e[1]])}if(A=[...A,{placement:a,overflows:S}],!S.every(e=>e<=0)){let e=((null==(i=l.flip)?void 0:i.index)||0)+1,t=x[e];if(t)return{data:{index:e,overflows:A},reset:{placement:t}};let o=null==(r=A.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:r.placement;if(!o)switch(b){case"bestFit":{let e=null==(s=A.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:s[0];e&&(o=e);break}case"initialPlacement":o=h}if(a!==o)return{reset:{placement:o}}}return{}}}),{name:"shift",options:e={padding:5},async fn(t){let{x:o,y:n,placement:i}=t,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...l}=eR(e,t),c={x:o,y:n},h=await eH(t,l),d=eL(eP(i)),u=eD(d),p=c[u],f=c[d];if(r){let e="y"===u?"bottom":"right";p=e_(p+h["y"===u?"top":"left"],e$(p,p-h[e]))}if(s){let e="y"===d?"bottom":"right";f=e_(f+h["y"===d?"top":"left"],e$(f,f-h[e]))}let g=a.fn({...t,[u]:p,[d]:f});return{...g,data:{x:g.x-o,y:g.y-n}}}}];this.arrowEl&&n.push({name:"arrow",options:o={element:this.arrowEl},async fn(e){let{x:t,y:n,placement:i,rects:r,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:h=0}=eR(o,e)||{};if(null==c)return{};let d=eI(h),u={x:t,y:n},p=eD(eL(i)),f=eM(p),g=await s.getDimensions(c),b="y"===p,m=b?"clientHeight":"clientWidth",v=r.reference[f]+r.reference[p]-u[p]-r.floating[f],y=u[p]-r.reference[p],w=await (null==s.getOffsetParent?void 0:s.getOffsetParent(c)),k=w?w[m]:0;k&&await (null==s.isElement?void 0:s.isElement(w))||(k=a.floating[m]||r.floating[f]);let $=k/2-g[f]/2-1,_=e$(d[b?"top":"left"],$),x=e$(d[b?"bottom":"right"],$),C=k-g[f]-x,S=k/2-g[f]/2+(v/2-y/2),A=e_(_,e$(S,C)),R=!l.arrow&&null!=eE(i)&&S!=A&&r.reference[f]/2-(S<_?_:x)-g[f]/2<0,P=R?S<_?S-_:S-C:0;return{[p]:u[p]+P,data:{[p]:A,centerOffset:S-A-P,...R&&{alignmentOffset:P}},reset:R}}}),await tn(this.triggerEl,this.popoverEl,{middleware:n,placement:this.placement}).then(({x:e,y:t,placement:o,middlewareData:n})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){let e=n.arrow?.x,t=n.arrow?.y,i={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[i]:"-4px"})}})}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?Q`<div part="arrow" class="arrow"></div>`:""}render(){return Q`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}}tl([eg({type:Boolean})],tc.prototype,"arrow",void 0),tl([eg({type:Boolean})],tc.prototype,"hover",void 0),tl([eg()],tc.prototype,"placement",void 0),tl([eg({attribute:"popover-id"})],tc.prototype,"popoverId",void 0),tl([eg({attribute:"sr-visible",type:Boolean})],tc.prototype,"srVisible",void 0),tl([em('slot[name="trigger"]')],tc.prototype,"triggerSlot",void 0),tl([em(".popover")],tc.prototype,"popoverEl",void 0),tl([em(".arrow")],tc.prototype,"arrowEl",void 0),tl([eg({state:!0,attribute:!1})],tc.prototype,"open",void 0);let th=c`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);border-radius:var(--gk-tooltip-border-radius,0);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);line-height:var(--gk-tooltip-line-height, 14px);max-width:var(--gk-tooltip-max-width,none);padding:var(--gk-tooltip-padding,10px 16px);text-align:var(--gk-tooltip-text-align,left);width:max-content}`;class td extends ev{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[ek,ey,th]}static{this.elementName="gk-tooltip"}static{this.components=[tc]}render(){return Q`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([eg({attribute:"sr-visible",type:Boolean})],td.prototype,"srVisible",void 0);let tu=c`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;class tp extends ev{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=tu}static{this.elementName="gk-additions-deletions"}static{this.components=[td]}render(){return Q`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([eg({attribute:"tooltip-text"})],tp.prototype,"tooltipText",void 0);let tf=new Set(["children","localName","ref","style","className"]),tg=new WeakMap,tb=(e,t,o,n,i)=>{let r,s;let a=i?.[t];void 0===a||o===n?(e[t]=o,null==o&&t in HTMLElement.prototype&&e.removeAttribute(t)):(void 0===(r=tg.get(e))&&tg.set(e,r=new Map),s=r.get(a),void 0!==o?void 0===s?(r.set(a,s={handleEvent:o}),e.addEventListener(a,s)):s.handleEvent=o:void 0!==s&&(r.delete(a),e.removeEventListener(a,s)))},tm=({react:e,tagName:t,elementClass:o,events:n,displayName:i})=>{let r=new Set(Object.keys(n??{})),s=e.forwardRef((i,s)=>{let a=e.useRef(null),l=e.useRef(null),c={},h={};for(let[e,t]of Object.entries(i))tf.has(e)?c["className"===e?"class":e]=t:r.has(e)||e in o.prototype?h[e]=t:c[e]=t;return e.useLayoutEffect(()=>{if(null!==l.current){for(let e in h)tb(l.current,e,i[e],a.current?a.current[e]:void 0,n);a.current=i}}),e.useLayoutEffect(()=>{l.current?.removeAttribute("defer-hydration")},[]),c.suppressHydrationWarning=!0,e.createElement(t,{...c,ref:e=>{l.current=e,"function"==typeof s?s(e):null!==s&&(s.current=e)}})});return s.displayName=i??o.name,s};var tv=eT(294);let ty=tm({react:tv,tagName:tp.elementName,elementClass:tp}),tw=c`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,tk=c`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var t$=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class t_ extends ev{static{this.styles=[ek,tw]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?Q`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:Q`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}}t$([eg()],t_.prototype,"src",void 0),t$([eg()],t_.prototype,"indicator",void 0);class tx extends ev{static{this.elementName="gk-avatar-group"}static{this.styles=[ek,tk]}render(){return Q`<slot class="avatar-group" part="base"></slot>`}}let tC=tm({react:tv,tagName:t_.elementName,elementClass:t_}),tS=tm({react:tv,tagName:tx.elementName,elementClass:tx}),tA=c`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;class tR extends ev{constructor(){super(...arguments),this.variant="outline"}static{this.styles=tA}static{this.elementName="gk-badge"}render(){return Q`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([eg()],tR.prototype,"variant",void 0);let tP=tm({react:tv,tagName:tR.elementName,elementClass:tR}),tE=c`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var tT=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class tO extends ev{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=tE}static{this.elementName="gk-button"}get allClasses(){let e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return Q`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}}tT([eg({type:Boolean,reflect:!0})],tO.prototype,"disabled",void 0),tT([eg({reflect:!0})],tO.prototype,"type",void 0),tT([eg()],tO.prototype,"variant",void 0);let tD=tm({react:tv,tagName:tO.elementName,elementClass:tO,events:{onClick:"click"}}),tM=c`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var tL=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class tF extends ev{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[ek,ey,tM]}static{this.elementName="gk-complexity-indicator"}render(){let e=[];for(let t=0;t<this.level;t++)e.push(t);return Q`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map(()=>Q`<span class="complexity-indicator__box"></span>`)}</div>`}}tL([eg({type:Number})],tF.prototype,"level",void 0),tL([eg()],tF.prototype,"label",void 0);let tN=tm({react:tv,tagName:tF.elementName,elementClass:tF}),tI=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,tB=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,tU=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],tH=new Map,tz=["th","st","nd","rd"];var tW=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class tV extends ev{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[ek]}static{this.elementName="gk-date-from"}static{this.components=[td]}get relativeTime(){return function(i,r){let s=("number"==typeof i?i:i.getTime())-(new Date).getTime();for(let[i,a,l,c]of tU){let h=Math.abs(s);if(h>=a||1e3===a)return r?(null==e&&(e=null!=n?n.resolvedOptions().locale:null!=o?o.resolvedOptions().locale:(n=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})).resolvedOptions().locale),"en"===e||e?.startsWith("en-")?`${Math.round(h/l)}${c}`:(null==n&&(n=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),n.format(Math.round(s/l),i))):(null==o&&(o=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"auto",style:"long"})),o.format(Math.round(s/l),i))}return""}(this.date,!0)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return Q`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,o,n,i=!0){let r=`${n??""}:${o=o??void 0}`,s=tH.get(r);if(null==s){let e;let a=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=tB.exec(e);if(null!=t?.groups){let{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}let o={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(tI))if(null!=t)for(let e in t){let n=t[e];if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(o);e=null==n?t:"system"===n?void 0:[n],s=new Intl.DateTimeFormat(e,a),i&&tH.set(r,s)}if(null==o||tB.test(o))return s.format(e);let a=s.formatToParts(e);return o.replace(tI,(o,r,s,l,c,h,d,u,p,f,g,b,m,v,y)=>{if(null!=r)return r.substring(1,r.length-1);for(let o in y){let r=y[o];if(null==r)continue;let s=a.find(e=>e.type===o);if("Do"===r&&"day"===s?.type)return function(e){let t=e%100;return`${e}${tz[(t-20)%10]??tz[t]??"th"}`}(Number(s.value));if("a"===r&&"dayPeriod"===s?.type){let o=(function(e){let o=`${n??""}:time:${e}`,r=tH.get(o);if(null==r){let s;s=null==n?t:"system"===n?void 0:[n],r=new Intl.DateTimeFormat(s,{localeMatcher:"best fit",timeStyle:e}),i&&tH.set(o,r)}return r})("short").formatToParts(e).find(e=>"dayPeriod"===e.type);return`${(o??s)?.value??""}`}return s?.value??""}return""})}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}}tW([eg({converter:(tr=navigator.language,{toAttribute:e=>e.toLocaleDateString(tr),fromAttribute:e=>new Date(e)}),reflect:!0})],tV.prototype,"date",void 0),tW([eg()],tV.prototype,"format",void 0);let tj=tm({react:tv,tagName:tV.elementName,elementClass:tV}),tq=c`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,tG=c`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,tQ=c`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;class tJ extends ev{static{this.styles=[ek,tQ]}static{this.elementName="gk-focus-item"}render(){return Q`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}}class tK extends ev{static{this.styles=[ek,tG]}static{this.elementName="gk-focus-row"}render(){return Q`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}}class tY extends ev{static{this.styles=[ek,tG,tQ,tq]}static{this.elementName="gk-focus-container"}render(){return Q`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}}let tZ=tm({react:tv,tagName:tJ.elementName,elementClass:tJ}),tX=tm({react:tv,tagName:tK.elementName,elementClass:tK}),t0=tm({react:tv,tagName:tY.elementName,elementClass:tY});class t1{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}let t2=(ts=class extends t1{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.it){for(let o in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[o]&&!this.st?.has(o)&&this.it.add(o);return this.render(t)}let o=e.element.classList;for(let e of this.it)e in t||(o.remove(e),this.it.delete(e));for(let e in t){let n=!!t[e];n===this.it.has(e)||this.st?.has(e)||(n?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return J}},(...e)=>({_$litDirective$:ts,values:e})),t5=e=>e??K,t3=c`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var t6=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class t4 extends ev{static{this.formAssociated=!0}static{this.styles=[ek,ey,t3]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="";try{this.internals=this.attachInternals()}catch{}}firstUpdated(){this.internals&&this.internals.setFormValue(this.value)}render(){return Q`<div class="field"><label class="${t2({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${t2({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${t5(this.autocomplete)}" autocorrect="${t5(this.autocorrect)}" class="input" ?disabled="${this.disabled}" id="input" name="${t5(this.name)}" part="input" placeholder="${t5(this.placeholder)}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals&&this.internals.setFormValue(this.value)}}t6([eg()],t4.prototype,"autocomplete",void 0),t6([eg()],t4.prototype,"autocorrect",void 0),t6([eg({type:Boolean,reflect:!0})],t4.prototype,"disabled",void 0),t6([eg()],t4.prototype,"label",void 0),t6([eg({attribute:"label-visibility"})],t4.prototype,"labelVisibility",void 0),t6([eg()],t4.prototype,"name",void 0),t6([eg()],t4.prototype,"placeholder",void 0),t6([eg({type:Boolean,reflect:!0})],t4.prototype,"required",void 0),t6([eg({reflect:!0})],t4.prototype,"type",void 0),t6([eg()],t4.prototype,"value",void 0);let t8=c`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,t7=c`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,t9=c`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;class oe extends ev{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[ek,t8]}static{this.elementName="gk-menu"}_handleSlotChange(){let e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();let t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;let o=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(o)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this._getAllItems(),o=t.length,n=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?n=(n-1+o)%o:"ArrowDown"===e.key?n=(n+1)%o:"Home"===e.key?n=0:"End"===e.key&&(n=o-1),this._setCurrentItem(t[n]),t[n].focus()}}_handleMouseDown(e){let t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){let t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter(e=>this._isMenuItem(e))}_setTabIndex(){this._getAllItems().forEach(e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")})}render(){return Q`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([(ta={flatten:!0},(e,t)=>{let{slot:o,selector:n}=ta??{},i="slot"+(o?`[name=${o}]`:":not([name])");return eb(e,t,{get(){let e=this.renderRoot?.querySelector(i),t=e?.assignedElements(ta)??[];return void 0===n?t:t.filter(e=>e.matches(n))}})})],oe.prototype,"slotChildren",void 0);class ot extends ev{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[ek,t7]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return Q`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([eg({type:Boolean,reflect:!0})],ot.prototype,"disabled",void 0);class oo extends ev{static{this.styles=[ek,t9]}static{this.elementName="gk-menu-label"}render(){return Q`<slot class="menu-label" part="base"></slot>`}}let on=tm({react:tv,tagName:oe.elementName,elementClass:oe,events:{onClick:"select"}}),oi=tm({react:tv,tagName:ot.elementName,elementClass:ot}),or=tm({react:tv,tagName:oo.elementName,elementClass:oo}),os=c`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;class oa extends ev{static{this.styles=[ek,os]}static{this.elementName="gk-tag"}render(){return Q`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([eg()],oa.prototype,"variant",void 0);let ol=tm({react:tv,tagName:oa.elementName,elementClass:oa}),oc=tm({react:tv,tagName:td.elementName,elementClass:td})})();var eD=eO.Tn,eM=eO.qE,eL=eO.HE,eF=eO.Ct,eN=eO.zx,eI=(eO.M1,eO.sX),eB=eO.D0,eU=eO.fs,eH=(eO.Tw,eO.ud,eO.wt,eO.ne,eO.Ku,eO.FU,eO.XO,eO.Ze,eO.K$,eO.cX,eO.Js,eO.J9,eO.si,eO.sg,eO.hW,eO.II),ez=eO.v2,eW=eO.sN,eV=(eO.Lb,eO.J2),ej=eO.$$,eq=eO.Vp,eG=eO.u,eQ=eO.fW;eO.WV,eO.h4,eO.kZ;let eJ=globalThis,eK=eJ.ShadowRoot&&(void 0===eJ.ShadyCSS||eJ.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,eY=Symbol(),eZ=new WeakMap;class eX{constructor(e,t,o){if(this._$cssResult$=!0,o!==eY)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(eK&&void 0===e){let o=void 0!==t&&1===t.length;o&&(e=eZ.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&eZ.set(t,e))}return e}toString(){return this.cssText}}let e0=e=>new eX("string"==typeof e?e:e+"",void 0,eY),e1=(e,...t)=>new eX(1===e.length?e[0]:t.reduce((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]),e,eY),e2=(e,t)=>{if(eK)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let o of t){let t=document.createElement("style"),n=eJ.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=o.cssText,e.appendChild(t)}},e5=eK?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return e0(t)})(e):e,{is:e3,defineProperty:e6,getOwnPropertyDescriptor:e4,getOwnPropertyNames:e8,getOwnPropertySymbols:e7,getPrototypeOf:e9}=Object,te=globalThis,tt=te.trustedTypes,to=tt?tt.emptyScript:"",tn=te.reactiveElementPolyfillSupport,ti=(e,t)=>e,tr={toAttribute(e,t){switch(t){case Boolean:e=e?to:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},ts=(e,t)=>!e3(e,t),ta={attribute:!0,type:String,converter:tr,reflect:!1,hasChanged:ts};Symbol.metadata??=Symbol("metadata"),te.litPropertyMetadata??=new WeakMap;class tl extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ta){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&e6(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){let{get:n,set:i}=e4(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){let r=n?.call(this);i.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ta}static _$Ei(){if(this.hasOwnProperty(ti("elementProperties")))return;let e=e9(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ti("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ti("properties"))){let e=this.properties;for(let t of[...e8(e),...e7(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,o]of t)this.elementProperties.set(e,o)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let o of new Set(e.flat(1/0).reverse()))t.unshift(e5(o));else void 0!==e&&t.push(e5(e));return t}static _$Eu(e,t){let o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return e2(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){let o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){let i=(void 0!==o.converter?.toAttribute?o.converter:tr).toAttribute(t,o.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){let o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){let e=o.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:tr;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,n=!1,i){if(void 0!==e){if(!((o??=this.constructor.getPropertyOptions(e)).hasChanged??ts)(n?i:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$E_?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}}tl.elementStyles=[],tl.shadowRootOptions={mode:"open"},tl[ti("elementProperties")]=new Map,tl[ti("finalized")]=new Map,tn?.({ReactiveElement:tl}),(te.reactiveElementVersions??=[]).push("2.0.2");let tc=globalThis,th=tc.trustedTypes,td=th?th.createPolicy("lit-html",{createHTML:e=>e}):void 0,tu="$lit$",tp=`lit$${(Math.random()+"").slice(9)}$`,tf="?"+tp,tg=`<${tf}>`,tb=document,tm=()=>tb.createComment(""),tv=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ty=Array.isArray,tw=e=>ty(e)||"function"==typeof e?.[Symbol.iterator],tk="[ 	\n\f\r]",t$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,t_=/-->/g,tx=/>/g,tC=RegExp(`>|${tk}(?:([^\\s"'>=/]+)(${tk}*=${tk}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tS=/'/g,tA=/"/g,tR=/^(?:script|style|textarea|title)$/i,tP=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),tE=tP(1),tT=(tP(2),Symbol.for("lit-noChange")),tO=Symbol.for("lit-nothing"),tD=new WeakMap,tM=tb.createTreeWalker(tb,129);function tL(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==td?td.createHTML(t):t}let tF=(e,t)=>{let o=e.length-1,n=[],i,r=2===t?"<svg>":"",s=t$;for(let t=0;t<o;t++){let o=e[t],a,l,c=-1,h=0;for(;h<o.length&&(s.lastIndex=h,null!==(l=s.exec(o)));)h=s.lastIndex,s===t$?"!--"===l[1]?s=t_:void 0!==l[1]?s=tx:void 0!==l[2]?(tR.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=tC):void 0!==l[3]&&(s=tC):s===tC?">"===l[0]?(s=i??t$,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?tC:'"'===l[3]?tA:tS):s===tA||s===tS?s=tC:s===t_||s===tx?s=t$:(s=tC,i=void 0);let d=s===tC&&e[t+1].startsWith("/>")?" ":"";r+=s===t$?o+tg:c>=0?(n.push(a),o.slice(0,c)+tu+o.slice(c)+tp+d):o+tp+(-2===c?t:d)}return[tL(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),n]};class tN{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0,s=e.length-1,a=this.parts,[l,c]=tF(e,t);if(this.el=tN.createElement(l,o),tM.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=tM.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(let e of n.getAttributeNames())if(e.endsWith(tu)){let t=c[r++],o=n.getAttribute(e).split(tp),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:i,name:s[2],strings:o,ctor:"."===s[1]?tz:"?"===s[1]?tW:"@"===s[1]?tV:tH}),n.removeAttribute(e)}else e.startsWith(tp)&&(a.push({type:6,index:i}),n.removeAttribute(e));if(tR.test(n.tagName)){let e=n.textContent.split(tp),t=e.length-1;if(t>0){n.textContent=th?th.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],tm()),tM.nextNode(),a.push({type:2,index:++i});n.append(e[t],tm())}}}else if(8===n.nodeType){if(n.data===tf)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(tp,e+1));)a.push({type:7,index:i}),e+=tp.length-1}}i++}}static createElement(e,t){let o=tb.createElement("template");return o.innerHTML=e,o}}function tI(e,t,o=e,n){if(t===tT)return t;let i=void 0!==n?o._$Co?.[n]:o._$Cl,r=tv(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),void 0===r?i=void 0:(i=new r(e))._$AT(e,o,n),void 0!==n?(o._$Co??=[])[n]=i:o._$Cl=i),void 0!==i&&(t=tI(e,i._$AS(e,t.values),i,n)),t}class tB{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??tb).importNode(t,!0);tM.currentNode=n;let i=tM.nextNode(),r=0,s=0,a=o[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new tU(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new tj(i,this,e)),this._$AV.push(t),a=o[++s]}r!==a?.index&&(i=tM.nextNode(),r++)}return tM.currentNode=tb,n}p(e){let t=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class tU{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=tO,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){tv(e=tI(this,e,t))?e===tO||null==e||""===e?(this._$AH!==tO&&this._$AR(),this._$AH=tO):e!==this._$AH&&e!==tT&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):tw(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==tO&&tv(this._$AH)?this._$AA.nextSibling.data=e:this.$(tb.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=tN.createElement(tL(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{let e=new tB(n,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=tD.get(e.strings);return void 0===t&&tD.set(e.strings,t=new tN(e)),t}T(e){ty(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,n=0;for(let i of e)n===t.length?t.push(o=new tU(this.k(tm()),this.k(tm()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class tH{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,i){this.type=1,this._$AH=tO,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=tO}_$AI(e,t=this,o,n){let i=this.strings,r=!1;if(void 0===i)(r=!tv(e=tI(this,e,t,0))||e!==this._$AH&&e!==tT)&&(this._$AH=e);else{let n,s;let a=e;for(e=i[0],n=0;n<i.length-1;n++)(s=tI(this,a[o+n],t,n))===tT&&(s=this._$AH[n]),r||=!tv(s)||s!==this._$AH[n],s===tO?e=tO:e!==tO&&(e+=(s??"")+i[n+1]),this._$AH[n]=s}r&&!n&&this.O(e)}O(e){e===tO?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class tz extends tH{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===tO?void 0:e}}class tW extends tH{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==tO)}}class tV extends tH{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){if((e=tI(this,e,t,0)??tO)===tT)return;let o=this._$AH,n=e===tO&&o!==tO||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==tO&&(o===tO||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class tj{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){tI(this,e)}}let tq=tc.litHtmlPolyfillSupport;tq?.(tN,tU),(tc.litHtmlVersions??=[]).push("3.1.0");let tG=(e,t,o)=>{let n=o?.renderBefore??t,i=n._$litPart$;if(void 0===i){let e=o?.renderBefore??null;n._$litPart$=i=new tU(t.insertBefore(tm(),e),e,void 0,o??{})}return i._$AI(e),i};class tQ extends tl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=tG(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return tT}}tQ._$litElement$=!0,tQ.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:tQ});let tJ=globalThis.litElementPolyfillSupport;tJ?.({LitElement:tQ}),(globalThis.litElementVersions??=[]).push("4.0.2");let tK=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},tY={attribute:!0,type:String,converter:tr,reflect:!1,hasChanged:ts},tZ=(e=tY,t,o)=>{let{kind:n,metadata:i}=o,r=globalThis.litPropertyMetadata.get(i);if(void 0===r&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(o.name,e),"accessor"===n){let{name:n}=o;return{set(o){let i=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){let{name:n}=o;return function(o){let i=this[n];t.call(this,o),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function tX(e){return(t,o)=>"object"==typeof o?tZ(e,t,o):((e,t,o)=>{let n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function t0(e){return tX({...e,state:!0,attribute:!1})}let t1=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function t2(e,t){return(o,n,i)=>{let r=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}="object"==typeof n?o:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return t1(o,n,{get(){let o=e.call(this);return void 0===o&&(null!==(o=r(this))||this.hasUpdated)&&t.call(this,o),o}})}return t1(o,n,{get(){return r(this)}})}}function*t5(e,t){if(void 0!==e){let o=0;for(let n of e)yield t(n,o++)}}class t3{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}let{D:t6}={j:tu,P:tp,A:tf,C:1,M:tF,L:tB,R:tw,V:tI,D:tU,I:tH,H:tW,N:tV,U:tz,B:tj},t4=()=>document.createComment(""),t8=(e,t,o)=>{let n=e._$AA.parentNode,i=void 0===t?e._$AB:t._$AA;if(void 0===o)o=new t6(n.insertBefore(t4(),i),n.insertBefore(t4(),i),e,e.options);else{let t=o._$AB.nextSibling,r=o._$AM,s=r!==e;if(s){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==r._$AU&&o._$AP(t)}if(t!==i||s){let e=o._$AA;for(;e!==t;){let t=e.nextSibling;n.insertBefore(e,i),e=t}}}return o},t7=(e,t,o=e)=>(e._$AI(t,o),e),t9={},oe=(e,t=t9)=>e._$AH=t,ot=e=>e._$AH,oo=e=>{e._$AP?.(!1,!0);let t=e._$AA,o=e._$AB.nextSibling;for(;t!==o;){let e=t.nextSibling;t.remove(),t=e}},on=(e,t,o)=>{let n=new Map;for(let i=t;i<=o;i++)n.set(e[i],i);return n},oi=(d=class extends t3{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}ht(e,t,o){let n;void 0===o?o=t:void 0!==t&&(n=t);let i=[],r=[],s=0;for(let t of e)i[s]=n?n(t,s):s,r[s]=o(t,s),s++;return{values:r,keys:i}}render(e,t,o){return this.ht(e,t,o).values}update(e,[t,o,n]){let i=ot(e),{values:r,keys:s}=this.ht(t,o,n);if(!Array.isArray(i))return this.dt=s,r;let a=this.dt??=[],l=[],c,h,d=0,u=i.length-1,p=0,f=r.length-1;for(;d<=u&&p<=f;)if(null===i[d])d++;else if(null===i[u])u--;else if(a[d]===s[p])l[p]=t7(i[d],r[p]),d++,p++;else if(a[u]===s[f])l[f]=t7(i[u],r[f]),u--,f--;else if(a[d]===s[f])l[f]=t7(i[d],r[f]),t8(e,l[f+1],i[d]),d++,f--;else if(a[u]===s[p])l[p]=t7(i[u],r[p]),t8(e,i[d],i[u]),u--,p++;else if(void 0===c&&(c=on(s,p,f),h=on(a,d,u)),c.has(a[d])){if(c.has(a[u])){let t=h.get(s[p]),o=void 0!==t?i[t]:null;if(null===o){let t=t8(e,i[d]);t7(t,r[p]),l[p]=t}else l[p]=t7(o,r[p]),t8(e,i[d],o),i[t]=null;p++}else oo(i[u]),u--}else oo(i[d]),d++;for(;p<=f;){let t=t8(e,l[f+1]);t7(t,r[p]),l[p++]=t}for(;d<=u;){let e=i[d++];null!==e&&oo(e)}return this.dt=s,oe(e,l),tT}},(...e)=>({_$litDirective$:d,values:e}));function or(e,t,o){return e?t(e):o?.(e)}let os=e1`
	:host {
		--gk-additions-color: var(--vscode-gitDecoration-addedResourceForeground);
		--gk-deletions-color: var(--vscode-gitDecoration-deletedResourceForeground);

		--gk-avatar-background-color: var(--background-10);
		--gk-tag-background-color: var(--background-10);
		--gk-text-secondary-color: var(--color-foreground--85);

		--gk-menu-border-color: var(--background-30);
		--gk-menu-background-color: var(--background-10);
		--gk-menu-item-background-color-hover: var(--background-15);
		--gk-menu-item-font-color-disabled: var(--color-foreground--50);

		--gk-button-ghost-color: var(--color-foreground);
		--gk-button-ghost-color-active: var(--color-foreground--85);
		--gk-button-ghost-color-disabled: var(--color-foreground--50);
		--gk-button-outline-color: var(--color-foreground);
		--gk-button-outline-color-active: var(--background-10);
		--gk-button-outline-color-disabled: var(--color-foreground--50);

		--gk-tooltip-background-color: var(--popover-bg); // var(--vscode-editorHoverWidget-background);
		--gk-tooltip-font-color: var(--color-foreground); // var(--vscode-editorHoverWidget-foreground);
		--gk-tooltip-font-weight: normal;
		--gk-tooltip-font-size: 1.2rem;
	}
`;e1`
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
`;let oa=e1`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,ol=e1`
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
`;e1`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${oa}
	}
	a:hover {
		text-decoration: underline;
	}
`,e1`
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
`;var oc=Object.defineProperty,oh=Object.getOwnPropertyDescriptor,od=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?oh(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&oc(t,o,r),r};let ou=class extends tQ{constructor(){super(...arguments),this.full=!1,this.disabled=!1,this.tabIndex=0}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.setAttribute("aria-disabled",this.disabled.toString()))}render(){let e=tE`<slot></slot>`;return null!=this.href?tE`<a href=${this.href}>${e}</a>`:e}};ou.styles=[ol,e1`
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
				${oa}
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
		`],od([tX({type:Boolean,reflect:!0})],ou.prototype,"full",2),od([tX({type:Boolean,reflect:!0})],ou.prototype,"disabled",2),od([tX({reflect:!0})],ou.prototype,"density",2),od([tX()],ou.prototype,"href",2),od([tX({reflect:!0})],ou.prototype,"role",1),od([tX()],ou.prototype,"appearance",2),od([tX({type:Number,reflect:!0})],ou.prototype,"tabIndex",2),ou=od([tK("gl-button")],ou);var op=Object.defineProperty,of=Object.getOwnPropertyDescriptor,og=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?of(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&op(t,o,r),r};let ob=class extends tQ{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};ob.styles=e1`
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
	`,og([tX()],ob.prototype,"icon",2),og([tX()],ob.prototype,"modifier",2),og([tX({type:Number})],ob.prototype,"size",2),ob=og([tK("code-icon")],ob);let om=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];function ov(i,r){let s=("number"==typeof i?i:i.getTime())-new Date().getTime();for(let[i,a,l,c]of om){let h=Math.abs(s);if(h>=a||1e3===a){if(r){if(null==e&&(e=null!=n?n.resolvedOptions().locale:null!=o?o.resolvedOptions().locale:(n=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})).resolvedOptions().locale),"en"===e||e?.startsWith("en-")){let e=Math.round(h/l);return`${e}${c}`}return null==n&&(n=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),n.format(Math.round(s/l),i)}return null==o&&(o=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"auto",style:"long"})),o.format(Math.round(s/l),i)}}return""}var oy=((u=oy||{}).Free="free",u.FreePlus="free+",u.Pro="pro",u.Teams="teams",u.Enterprise="enterprise",u),ow=((p=ow||{})[p.VerificationRequired=-1]="VerificationRequired",p[p.Free=0]="Free",p[p.FreeInPreviewTrial=1]="FreeInPreviewTrial",p[p.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",p[p.FreePlusInTrial=3]="FreePlusInTrial",p[p.FreePlusTrialExpired=4]="FreePlusTrialExpired",p[p.Paid=5]="Paid",p);function ok(e){switch(e){case"free+":return"GitKraken Free";case"pro":return"GitKraken Pro";case"teams":return"GitKraken Teams";case"enterprise":return"GitKraken Enterprise";default:return"GitKraken"}}function o$(e){return null!=e&&(5===e||1===e||3===e)}function o_(e){return null!=e&&(1===e||3===e)}let ox=e1`
	a {
		color: var(--link-foreground);
		text-decoration: var(--link-decoration-default, none);
	}
	a:focus {
		outline-color: var(--focus-border);
	}
	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`;var oC=Object.defineProperty,oS=Object.getOwnPropertyDescriptor,oA=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?oS(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&oC(t,o,r),r};let oR=class extends tQ{render(){if(null==this.state){this.hidden=!0;return}this.hidden=!1;let e=(this.appearance??"alert")==="alert"?"alert":tO;switch(this.state){case ow.VerificationRequired:return tE`
					<p>You must verify your email before you can continue.</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.resendVerification"
						>Resend verification email</gl-button
					>
					<gl-button appearance="${e}" href="command:gitlens.plus.validate"
						>Refresh verification status</gl-button
					>
				`;case ow.Free:return tE`
					<gl-button appearance="${e}" href="command:gitlens.plus.startPreviewTrial"
						>Preview Now</gl-button
					>
					<p>
						Preview Pro for 3 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a> to start a full 7-day GitKraken trial.
					</p>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case ow.FreePreviewTrialExpired:return tE`
					<p>
						Your 3-day Pro preview has ended, start a free GitKraken trial to get an additional 7 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a>.
					</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.loginOrSignUp"
						>Start Free GitKraken Trial</gl-button
					>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case ow.FreePlusTrialExpired:return tE`
					<p>
						Your GitKraken trial has ended, please upgrade to continue to use this on privately hosted
						repos.
					</p>
					<p style="text-align: center;">
						Special: <b>50% off GitKraken's suite of dev tools</b><br />
						1st & 2nd seats only $4/month each
					</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.purchase"
						>Upgrade to Pro</gl-button
					>
					<p>✨ A paid plan is required to use this on privately hosted repos.</p>
				`}}};oR.styles=[ox,e1`
			:host {
				container-type: inline-size;
			}

			:host([appearance='welcome']) gl-button {
				width: 100%;
				max-width: 300px;
			}

			@container (max-width: 600px) {
				:host([appearance='welcome']) gl-button {
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
			}

			:host([appearance='alert']) gl-button {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}

			:host-context([appearance='alert']) p:first-child {
				margin-top: 0;
			}

			:host-context([appearance='alert']) p:last-child {
				margin-bottom: 0;
			}
		`],oA([tX({type:String})],oR.prototype,"appearance",2),oA([tX({attribute:!1,type:Number})],oR.prototype,"state",2),oR=oA([tK("gk-feature-gate-plus-state")],oR);var oP=Object.defineProperty,oE=Object.getOwnPropertyDescriptor,oT=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?oE(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&oP(t,o,r),r};let oO=class extends tQ{render(){if(!this.visible||null!=this.state&&o$(this.state)){this.hidden=!0;return}let e=this.appearance??(document.body.getAttribute("data-placement")??"editor")==="editor"?"alert":"welcome";return this.hidden=!1,tE`
			<section>
				<slot>
					<slot name="feature" hidden=${this.state===ow.Free?tO:""}></slot>
				</slot>
				<gk-feature-gate-plus-state appearance=${e} .state=${this.state}></gk-feature-gate-plus-state>
			</section>
		`}};oO.styles=e1`
		:host {
			--background: var(--vscode-sideBar-background);
			--foreground: var(--vscode-sideBar-foreground);
			--link-foreground: var(--vscode-textLink-foreground);
			--link-foreground-active: var(--vscode-textLink-activeForeground);

			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			overflow: auto;
			z-index: 100;

			box-sizing: border-box;
		}

		:host-context(body[data-placement='editor']),
		:host([appearance='alert']) {
			--background: transparent;
			--foreground: var(--vscode-editor-foreground);

			backdrop-filter: blur(3px) saturate(0.8);
			padding: 0 2rem;
		}

		::slotted(p) {
			margin: revert !important;
		}

		::slotted(p:first-child) {
			margin-top: 0 !important;
		}

		section {
			--section-foreground: var(--foreground);
			--section-background: var(--background);
			--section-border-color: transparent;

			display: flex;
			flex-direction: column;
			padding: 0 2rem 1.3rem 2rem;
			background: var(--section-background);
			color: var(--section-foreground);
			border: 1px solid var(--section-border-color);

			height: min-content;
		}

		:host-context(body[data-placement='editor']) section,
		:host([appearance='alert']) section {
			--section-foreground: var(--color-alert-foreground);
			--section-background: var(--color-alert-infoBackground);
			--section-border-color: var(--color-alert-infoBorder);

			--link-decoration-default: underline;
			--link-foreground: var(--vscode-foreground);
			--link-foreground-active: var(--vscode-foreground);

			border-radius: 0.3rem;
			max-width: 600px;
			max-height: min-content;
			margin: 0.2rem auto;
			padding: 1.3rem;
		}

		:host-context(body[data-placement='editor']) section ::slotted(gl-button),
		:host([appearance='alert']) section ::slotted(gl-button) {
			display: block;
			margin-left: auto;
			margin-right: auto;
		}
	`,oT([tX()],oO.prototype,"appearance",2),oT([tX({attribute:!1,type:Number})],oO.prototype,"state",2),oT([tX({type:Boolean})],oO.prototype,"visible",2),oO=oT([tK("gk-feature-gate")],oO);let oD=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return Function("return this")()}catch(e){return{}}}();void 0===oD.trustedTypes&&(oD.trustedTypes={createPolicy:(e,t)=>t});let oM={configurable:!1,enumerable:!1,writable:!1};void 0===oD.FAST&&Reflect.defineProperty(oD,"FAST",Object.assign({value:Object.create(null)},oM));let oL=oD.FAST;if(void 0===oL.getById){let e=Object.create(null);Reflect.defineProperty(oL,"getById",Object.assign({value(t,o){let n=e[t];return void 0===n&&(n=o?e[t]=o():null),n}},oM))}let oF=Object.freeze([]);function oN(){let e=new WeakMap;return function(t){let o=e.get(t);if(void 0===o){let n=Reflect.getPrototypeOf(t);for(;void 0===o&&null!==n;)o=e.get(n),n=Reflect.getPrototypeOf(n);o=void 0===o?[]:o.slice(0),e.set(t,o)}return o}}let oI=oD.FAST.getById(1,()=>{let e=[],t=[];function o(){if(t.length)throw t.shift()}function n(){let n=0;for(;n<e.length;)if(!function(e){try{e.call()}catch(e){t.push(e),setTimeout(o,0)}}(e[n]),++n>1024){for(let t=0,o=e.length-n;t<o;t++)e[t]=e[t+n];e.length-=n,n=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&oD.requestAnimationFrame(n),e.push(t)},process:n})}),oB=oD.trustedTypes.createPolicy("fast-html",{createHTML:e=>e}),oU=oB,oH=`fast-${Math.random().toString(36).substring(2,8)}`,oz=`${oH}{`,oW=`}${oH}`,oV=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(oU!==oB)throw Error("The HTML policy can only be set once.");oU=e},createHTML:e=>oU.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(oH),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${oH}:`,"")),createInterpolationPlaceholder:e=>`${oz}${e}${oW}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`<!--${oH}:${e}-->`,queueUpdate:oI.enqueue,processUpdates:oI.process,nextUpdate:()=>new Promise(oI.enqueue),setAttribute(e,t,o){null==o?e.removeAttribute(t):e.setAttribute(t,o)},setBooleanAttribute(e,t,o){o?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class oj{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){let t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1){this.sub1=e;return}if(void 0===this.sub2){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else -1===t.indexOf(e)&&t.push(e)}unsubscribe(e){let t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{let o=t.indexOf(e);-1!==o&&t.splice(o,1)}}notify(e){let t=this.spillover,o=this.source;if(void 0===t){let t=this.sub1,n=this.sub2;void 0!==t&&t.handleChange(o,e),void 0!==n&&n.handleChange(o,e)}else for(let n=0,i=t.length;n<i;++n)t[n].handleChange(o,e)}}class oq{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;let o=this.subscribers[e];void 0!==o&&o.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var o;if(t){let o=this.subscribers[t];void 0===o&&(this.subscribers[t]=o=new oj(this.source)),o.subscribe(e)}else this.sourceSubscribers=null!==(o=this.sourceSubscribers)&&void 0!==o?o:new oj(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){let o=this.subscribers[t];void 0!==o&&o.unsubscribe(e)}else null===(o=this.sourceSubscribers)||void 0===o||o.unsubscribe(e)}}let oG=oL.getById(2,()=>{let e;let t=/(:|&&|\|\||if)/,o=new WeakMap,n=oV.queueUpdate,i=e=>{throw Error("Must call enableArrayObservation before observing arrays.")};function r(e){let t=e.$fastController||o.get(e);return void 0===t&&(Array.isArray(e)?t=i(e):o.set(e,t=new oq(e))),t}let s=oN();class a{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(t){return void 0!==e&&e.watch(t,this.name),t[this.field]}setValue(e,t){let o=this.field,n=e[o];if(n!==t){e[o]=t;let i=e[this.callback];"function"==typeof i&&i.call(e,n,t),r(e).notify(this.name)}}}class l extends oj{constructor(e,t,o=!1){super(e,t),this.binding=e,this.isVolatileBinding=o,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(t,o){this.needsRefresh&&null!==this.last&&this.disconnect();let n=e;e=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;let i=this.binding(t,o);return e=n,i}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(t,o){let n=this.last,i=r(t),s=null===n?this.first:{};if(s.propertySource=t,s.propertyName=o,s.notifier=i,i.subscribe(this,o),null!==n){if(!this.needsRefresh){let o;e=void 0,o=n.propertySource[n.propertyName],e=this,t===o&&(this.needsRefresh=!0)}n.next=s}this.last=s}handleChange(){this.needsQueue&&(this.needsQueue=!1,n(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{let t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){i=e},getNotifier:r,track(t,o){void 0!==e&&e.watch(t,o)},trackVolatile(){void 0!==e&&(e.needsRefresh=!0)},notify(e,t){r(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new a(t)),s(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:s,binding:(e,t,o=this.isVolatileBinding(e))=>new l(e,t,o),isVolatileBinding:e=>t.test(e.toString())})});function oQ(e,t){oG.defineProperty(e,t)}function oJ(e,t,o){return Object.assign({},o,{get:function(){return oG.trackVolatile(),o.get.apply(this)}})}let oK=oL.getById(3,()=>{let e=null;return{get:()=>e,set(t){e=t}}});class oY{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return oK.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){oK.set(e)}}oG.defineProperty(oY.prototype,"index"),oG.defineProperty(oY.prototype,"length");let oZ=Object.seal(new oY);class oX{constructor(){this.targetIndex=0}}class o0 extends oX{constructor(){super(...arguments),this.createPlaceholder=oV.createInterpolationPlaceholder}}class o1 extends oX{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return oV.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function o2(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=oG.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function o5(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function o3(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function o6(){this.bindingObserver.disconnect(),this.source=null,this.context=null;let e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function o4(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function o8(e){oV.setAttribute(this.target,this.targetName,e)}function o7(e){oV.setBooleanAttribute(this.target,this.targetName,e)}function o9(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{let t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function ne(e){this.target[this.targetName]=e}function nt(e){let t=this.classVersions||Object.create(null),o=this.target,n=this.version||0;if(null!=e&&e.length){let i=e.split(/\s+/);for(let e=0,r=i.length;e<r;++e){let r=i[e];""!==r&&(t[r]=n,o.classList.add(r))}}if(this.classVersions=t,this.version=n+1,0!==n)for(let e in n-=1,t)t[e]===n&&o.classList.remove(e)}class no extends o0{constructor(e){super(),this.binding=e,this.bind=o2,this.unbind=o3,this.updateTarget=o8,this.isBindingVolatile=oG.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=ne,"innerHTML"===this.cleanedTargetName){let e=this.binding;this.binding=(t,o)=>oV.createHTML(e(t,o))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=o7;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=o5,this.unbind=o4;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=nt)}}targetAtContent(){this.updateTarget=o9,this.unbind=o6}createBehavior(e){return new nn(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class nn{constructor(e,t,o,n,i,r,s){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=n,this.unbind=i,this.updateTarget=r,this.targetName=s}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){oY.setEvent(e);let t=this.binding(this.source,this.context);oY.setEvent(null),!0!==t&&e.preventDefault()}}let ni=null;class nr{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){ni=this}static borrow(e){let t=ni||new nr;return t.directives=e,t.reset(),ni=null,t}}let ns=oW.length;function na(e,t){let o=t.split(oz);if(1===o.length)return null;let n=[];for(let t=0,i=o.length;t<i;++t){let i;let r=o[t],s=r.indexOf(oW);if(-1===s)i=r;else{let t=parseInt(r.substring(0,s));n.push(e.directives[t]),i=r.substring(s+ns)}""!==i&&n.push(i)}return n}function nl(e,t,o=!1){let n=t.attributes;for(let i=0,r=n.length;i<r;++i){let s=n[i],a=s.value,l=na(e,a),c=null;null===l?o&&((c=new no(()=>a)).targetName=s.name):c=function(e){let t;if(1===e.length)return e[0];let o=e.length,n=e.map(e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding)),i=new no((e,t)=>{let i="";for(let r=0;r<o;++r)i+=n[r](e,t);return i});return i.targetName=t,i}(l),null!==c&&(t.removeAttributeNode(s),i--,r--,e.addFactory(c))}}let nc=document.createRange();class nh{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{let t;let o=this.lastChild;if(e.previousSibling===o)return;let n=e.parentNode,i=this.firstChild;for(;i!==o;)t=i.nextSibling,n.insertBefore(i,e),i=t;n.insertBefore(o,e)}}remove(){let e;let t=this.fragment,o=this.lastChild,n=this.firstChild;for(;n!==o;)e=n.nextSibling,t.appendChild(n),n=e;t.appendChild(o)}dispose(){let e;let t=this.firstChild.parentNode,o=this.lastChild,n=this.firstChild;for(;n!==o;)e=n.nextSibling,t.removeChild(n),n=e;t.removeChild(o);let i=this.behaviors,r=this.source;for(let e=0,t=i.length;e<t;++e)i[e].unbind(r)}bind(e,t){let o=this.behaviors;if(this.source!==e){if(null!==this.source){let n=this.source;this.source=e,this.context=t;for(let i=0,r=o.length;i<r;++i){let r=o[i];r.unbind(n),r.bind(e,t)}}else{this.source=e,this.context=t;for(let n=0,i=o.length;n<i;++n)o[n].bind(e,t)}}}unbind(){if(null===this.source)return;let e=this.behaviors,t=this.source;for(let o=0,n=e.length;o<n;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){nc.setStartBefore(e[0].firstChild),nc.setEndAfter(e[e.length-1].lastChild),nc.deleteContents();for(let t=0,o=e.length;t<o;++t){let o=e[t],n=o.behaviors,i=o.source;for(let e=0,t=n.length;e<t;++e)n[e].unbind(i)}}}}class nd{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;let t=this.html;if("string"==typeof t){(e=document.createElement("template")).innerHTML=oV.createHTML(t);let o=e.content.firstElementChild;null!==o&&"TEMPLATE"===o.tagName&&(e=o)}else e=t;let o=function(e,t){let o;let n=e.content;document.adoptNode(n);let i=nr.borrow(t);nl(i,e,!0);let r=i.behaviorFactories;i.reset();let s=oV.createTemplateWalker(n);for(;o=s.nextNode();)switch(i.targetIndex++,o.nodeType){case 1:nl(i,o);break;case 3:!function(e,t,o){let n=na(e,t.textContent);if(null!==n){let i=t;for(let r=0,s=n.length;r<s;++r){let s=n[r],a=0===r?t:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);"string"==typeof s?a.textContent=s:(a.textContent=" ",e.captureContentBinding(s)),i=a,e.targetIndex++,a!==t&&o.nextNode()}e.targetIndex--}}(i,o,s);break;case 8:oV.isMarker(o)&&i.addFactory(t[oV.extractDirectiveIndexFromMarker(o)])}let a=0;(oV.isMarker(n.firstChild)||1===n.childNodes.length&&t.length)&&(n.insertBefore(document.createComment(""),n.firstChild),a=-1);let l=i.behaviorFactories;return i.release(),{fragment:n,viewBehaviorFactories:l,hostBehaviorFactories:r,targetOffset:a}}(e,this.directives);this.fragment=o.fragment,this.viewBehaviorFactories=o.viewBehaviorFactories,this.hostBehaviorFactories=o.hostBehaviorFactories,this.targetOffset=o.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}let t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,n=Array(this.behaviorCount),i=oV.createTemplateWalker(t),r=0,s=this.targetOffset,a=i.nextNode();for(let e=o.length;r<e;++r){let e=o[r],t=e.targetIndex;for(;null!==a;){if(s===t){n[r]=e.createBehavior(a);break}a=i.nextNode(),s++}}if(this.hasHostBehaviors){let t=this.hostBehaviorFactories;for(let o=0,i=t.length;o<i;++o,++r)n[r]=t[o].createBehavior(e)}return new nh(t,n)}render(e,t,o){"string"==typeof t&&(t=document.getElementById(t)),void 0===o&&(o=t);let n=this.create(o);return n.bind(e,oZ),n.appendTo(t),n}}let nu=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function np(e,...t){let o=[],n="";for(let i=0,r=e.length-1;i<r;++i){let r=e[i],s=t[i];if(n+=r,s instanceof nd){let e=s;s=()=>e}if("function"==typeof s&&(s=new no(s)),s instanceof o0){let e=nu.exec(r);null!==e&&(s.targetName=e[2])}s instanceof oX?(n+=s.createPlaceholder(o.length),o.push(s)):n+=s}return new nd(n+=e[e.length-1],o)}class nf{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){let t=this.options.property;this.shouldUpdate=oG.getAccessors(e).some(e=>e.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(oF),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class ng extends nf{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function nb(e){return"string"==typeof e&&(e={property:e}),new o1("fast-slotted",ng,e)}let nm=e=>"function"==typeof e,nv=()=>null;function ny(e){return void 0===e?nv:nm(e)?e:()=>e}class nw{createCSS(){return""}createBehavior(){}}class nk{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function n$(e){return e.map(e=>e instanceof nk?n$(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function n_(e){return e.map(e=>e instanceof nk?e.behaviors:null).reduce((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t)),null)}nk.create=(()=>{if(oV.supportsAdoptedStyleSheets){let e=new Map;return t=>new nS(t,e)}return e=>new nR(e)})();let nx=(e,t)=>{e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t]},nC=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter(e=>-1===t.indexOf(e))};if(oV.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),nx=(e,t)=>{e.adoptedStyleSheets.push(...t)},nC=(e,t)=>{for(let o of t){let t=e.adoptedStyleSheets.indexOf(o);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(e){}class nS extends nk{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=n_(e)}get styleSheets(){if(void 0===this._styleSheets){let e=this.styles,t=this.styleSheetCache;this._styleSheets=n$(e).map(e=>{if(e instanceof CSSStyleSheet)return e;let o=t.get(e);return void 0===o&&((o=new CSSStyleSheet).replaceSync(e),t.set(e,o)),o})}return this._styleSheets}addStylesTo(e){nx(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){nC(e,this.styleSheets),super.removeStylesFrom(e)}}let nA=0;class nR extends nk{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=n_(e),this.styleSheets=n$(e),this.styleClass=`fast-style-class-${++nA}`}addStylesTo(e){let t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<t.length;n++){let i=document.createElement("style");i.innerHTML=t[n],i.className=o,e.append(i)}super.addStylesTo(e)}removeStylesFrom(e){let t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let o=0,n=t.length;o<n;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}function nP(e,...t){let{styles:o,behaviors:n}=function(e,t){let o=[],n="",i=[];for(let r=0,s=e.length-1;r<s;++r){n+=e[r];let s=t[r];if(s instanceof nw){let e=s.createBehavior();s=s.createCSS(),e&&i.push(e)}s instanceof nk||s instanceof CSSStyleSheet?(""!==n.trim()&&(o.push(n),n=""),o.push(s)):n+=s}return""!==(n+=e[e.length-1]).trim()&&o.push(n),{styles:o,behaviors:i}}(e,t),i=nk.create(o);return n.length&&i.withBehaviors(...n),i}let nE=Object.freeze({locate:oN()}),nT={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e};class nO{constructor(e,t,o=t.toLowerCase(),n="reflect",i){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=n,this.converter=i,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===n&&void 0===i&&(this.converter=nT)}setValue(e,t){let o=e[this.fieldName],n=this.converter;void 0!==n&&(t=n.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return oG.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){let t=this.mode,o=this.guards;o.has(e)||"fromView"===t||oV.queueUpdate(()=>{o.add(e);let n=e[this.fieldName];switch(t){case"reflect":let i=this.converter;oV.setAttribute(e,this.attribute,void 0!==i?i.toView(n):n);break;case"boolean":oV.setBooleanAttribute(e,this.attribute,n)}o.delete(e)})}static collect(e,...t){let o=[];t.push(nE.locate(e));for(let n=0,i=t.length;n<i;++n){let i=t[n];if(void 0!==i)for(let t=0,n=i.length;t<n;++t){let n=i[t];"string"==typeof n?o.push(new nO(e,n)):o.push(new nO(e,n.property,n.attribute,n.mode,n.converter))}}return o}}function nD(e,t){let o;function n(e,t){arguments.length>1&&(o.property=t),nE.locate(e.constructor).push(o)}if(arguments.length>1){o={},n(e,t);return}return o=void 0===e?{}:e,n}let nM={mode:"open"},nL={},nF=oL.getById(4,()=>{let e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})});class nN{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;let o=nO.collect(e,t.attributes),n=Array(o.length),i={},r={};for(let e=0,t=o.length;e<t;++e){let t=o[e];n[e]=t.attribute,i[t.name]=t,r[t.attribute]=t}this.attributes=o,this.observedAttributes=n,this.propertyLookup=i,this.attributeLookup=r,this.shadowOptions=void 0===t.shadowOptions?nM:null===t.shadowOptions?void 0:Object.assign(Object.assign({},nM),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?nL:Object.assign(Object.assign({},nL),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?nk.create(t.styles):t.styles instanceof nk?t.styles:nk.create([t.styles])}get isDefined(){return!!nF.getByType(this.type)}define(e=customElements){let t=this.type;if(nF.register(this)){let e=this.attributes,o=t.prototype;for(let t=0,n=e.length;t<n;++t)oG.defineProperty(o,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}nN.forType=nF.getByType;let nI=new WeakMap,nB={bubbles:!0,composed:!0,cancelable:!0};function nU(e){return e.shadowRoot||nI.get(e)||null}class nH extends oq{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;let o=t.shadowOptions;if(void 0!==o){let t=e.attachShadow(o);"closed"===o.mode&&nI.set(e,t)}let n=oG.getAccessors(e);if(n.length>0){let t=this.boundObservables=Object.create(null);for(let o=0,i=n.length;o<i;++o){let i=n[o].name,r=e[i];void 0!==r&&(delete e[i],t[i]=r)}}}get isConnected(){return oG.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,oG.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){let t=nU(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){let o=e.behaviors;e.addStylesTo(t),null!==o&&this.addBehaviors(o)}}removeStyles(e){let t=nU(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){let o=e.behaviors;e.removeStylesFrom(t),null!==o&&this.removeBehaviors(o)}}addBehaviors(e){let t=this.behaviors||(this.behaviors=new Map),o=e.length,n=[];for(let i=0;i<o;++i){let o=e[i];t.has(o)?t.set(o,t.get(o)+1):(t.set(o,1),n.push(o))}if(this._isConnected){let e=this.element;for(let t=0;t<n.length;++t)n[t].bind(e,oZ)}}removeBehaviors(e,t=!1){let o=this.behaviors;if(null===o)return;let n=e.length,i=[];for(let r=0;r<n;++r){let n=e[r];if(o.has(n)){let e=o.get(n)-1;0===e||t?o.delete(n)&&i.push(n):o.set(n,e)}}if(this._isConnected){let e=this.element;for(let t=0;t<i.length;++t)i[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;let e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,oZ);let t=this.behaviors;if(null!==t)for(let[o]of t)o.bind(e,oZ);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);let e=this.view;null!==e&&e.unbind();let t=this.behaviors;if(null!==t){let e=this.element;for(let[o]of t)o.unbind(e)}}onAttributeChangedCallback(e,t,o){let n=this.definition.attributeLookup[e];void 0!==n&&n.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},nB),o)))}finishInitialization(){let e=this.element,t=this.boundObservables;if(null!==t){let o=Object.keys(t);for(let n=0,i=o.length;n<i;++n){let i=o[n];e[i]=t[i]}this.boundObservables=null}let o=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){let t=this.element,o=nU(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||oV.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){let t=e.$fastController;if(void 0!==t)return t;let o=nN.forType(e.constructor);if(void 0===o)throw Error("Missing FASTElement definition.");return e.$fastController=new nH(e,o)}}function nz(e){return class extends e{constructor(){super(),nH.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}let nW=Object.assign(nz(HTMLElement),{from:e=>nz(e),define:(e,t)=>new nN(e,t).define().type});function nV(...e){return e.some(e=>(e?.length??0)>0)}let nj=nP`
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
`;var nq=Object.defineProperty,nG=Object.getOwnPropertyDescriptor,nQ=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?nG(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&nq(t,o,r),r};let nJ=np`
	<template>
		<div class="top" ?hidden="${e=>!e.hasTopNodes}">
			<slot ${nb("typeNodes")} name="type"></slot>
			<slot ${nb("actionsNodes")} name="actions"></slot>
		</div>
		<div class="heading" ?hidden="${e=>!e.hasHeadingNodes}">
			<slot ${nb("headingNodes")} name="heading"></slot>
		</div>
		<div class="content"><slot></slot></div>
		${function(e,t,o){let n=nm(e)?e:()=>e,i=ny(t),r=ny(void 0);return(e,t)=>n(e,t)?i(e,t):r(e,t)}(e=>e.caret,np`<span class="caret"></span>`)}
	</template>
`,nK=nP`
	${nj}

	:host {
		position: absolute;
		width: var(--popover-width, 100%);
		max-width: var(--popover-max-width, 30rem);
		padding: 1.2rem 1.2rem 1.2rem;
		/* update with a standardized z-index */
		z-index: 10;

		background-color: var(--popover-bg);
		box-shadow: 0 0.3rem 0.3rem 0 var(--vscode-widget-shadow);

		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	:host([caret]:not([placement~='bottom'])) {
		transform: translateY(0.8rem);
	}

	:host([caret][placement~='bottom']) {
		transform: translateY(-0.8rem);
	}

	.top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		opacity: 0.5;
		margin-top: -0.4rem;
	}

	.heading {
		font-weight: 600;
	}

	.caret {
		position: absolute;
		width: 0;
		height: 0;
		border-left: 0.8rem solid transparent;
		border-right: 0.8rem solid transparent;
		border-bottom: 0.8rem solid var(--popover-bg);
	}

	:host(:not([placement~='bottom'])) .caret {
		bottom: 100%;
	}

	:host([placement~='bottom']) .caret {
		top: 100%;
		transform: rotate(180deg);
	}

	:host(:not([placement~='end'])) .caret {
		left: 1.2rem;
	}

	:host([placement~='end']) .caret {
		right: 1.2rem;
	}
`,nY=class extends nW{constructor(){super(...arguments),this.open=!1,this.caret=!0}get hasTopNodes(){return nV(this.typeNodes,this.actionsNodes)}get hasHeadingNodes(){return nV(this.headingNodes)}};nQ([nD({mode:"boolean"})],nY.prototype,"open",2),nQ([nD({mode:"boolean"})],nY.prototype,"caret",2),nQ([nD],nY.prototype,"placement",2),nQ([oQ],nY.prototype,"typeNodes",2),nQ([oQ],nY.prototype,"actionsNodes",2),nQ([oQ],nY.prototype,"headingNodes",2),nQ([oJ],nY.prototype,"hasTopNodes",1),nQ([oJ],nY.prototype,"hasHeadingNodes",1),nY=nQ([(f={name:"pop-over",template:nJ,styles:nK},function(e){new nN(e,f).define()})],nY);var nZ=Object.defineProperty,nX=Object.getOwnPropertyDescriptor,n0=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?nX(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&nZ(t,o,r),r};let n1=class extends tQ{constructor(){super(...arguments),this.placement="top end"}render(){let e=o$(this.subscription?.state),t=o_(this.subscription?.state);return tE`
			<span class="badge-container">
				<span class="badge ${e?"active":"inactive"}"
					>${t?tE`<span class="badge-trial">Trial</span>`:""}✨</span
				>
				<pop-over .placement=${this.placement} class="badge-popover">
					<span slot="heading"
						>${function(e,t){switch(e){case 4:return ok("free+");case 1:return`${ok("pro")} (Trial)`;case 3:return`${ok(t??"pro")} (Trial)`;case -1:return"GitKraken (Unverified)";case 5:return ok(t??"pro");default:return"GitKraken"}}(this.subscription?.state,this.subscription?.plan.effective.id)}${this.trialHtml}</span
					>
					${this.footnoteHtml}
				</pop-over>
			</span>
		`}get trialHtml(){var e;if(!o_(this.subscription?.state))return tO;let t=(null!=(e=this.subscription.plan.effective.expiresOn)?function(e,t,o){let n=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime());switch(o){case"days":return Math.floor(n/864e5);case"hours":return Math.floor(n/36e5);case"minutes":return Math.floor(n/6e4);case"seconds":return Math.floor(n/1e3);default:return n}}(Date.now(),new Date(e),"days"):void 0)??0;return tE`<span class="badge-trial-left">${t<1?"<1 day":function(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;let n=1===t?e:o.plural??`${e}s`;return o.only?n:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${n}`}("day",t)} left</span>`}get footnoteHtml(){switch(this.subscription?.state){case ow.VerificationRequired:case ow.Free:case ow.FreePreviewTrialExpired:return tE`<span class="badge-footnote"
					>✨ Requires a trial or paid plan for use on privately hosted repos.</span
				>`;case ow.FreePlusTrialExpired:case ow.FreeInPreviewTrial:case ow.FreePlusInTrial:return tE`<span class="badge-footnote"
					>✨ Requires a paid plan for use on privately hosted repos.</span
				>`;case ow.Paid:return tE`<span class="badge-footnote"
					>You have access to ✨ features on privately hosted repos and ☁️ features based on your plan.</span
				>`;default:return tO}}};n1.styles=[ol,e1`
			:host {
				position: relative;
			}

			:host(:focus) {
				${oa}
			}

			.badge-container {
				position: relative;
			}

			.badge {
				cursor: help;
			}

			.badge.inactive {
				filter: grayscale(100%);
			}

			.badge-popover {
				width: max-content;
				top: 100%;
				text-align: left;
			}

			.badge-footnote {
				white-space: break-spaces;
			}

			.badge-trial {
				font-size: smaller;
				font-weight: 700;
				margin-right: 0.5rem;
				text-transform: uppercase;
				white-space: nowrap;
			}

			.badge-trial-left {
				font-weight: 400;
				opacity: 0.6;
				margin-left: 1rem;
			}

			.badge:not(:hover) ~ .badge-popover {
				display: none;
			}

			:host(:not([placement~='end'])) .badge-popover {
				left: 0;
			}

			:host([placement~='end']) .badge-popover {
				right: 0;
			}
		`],n0([tX({reflect:!0})],n1.prototype,"placement",2),n0([tX({attribute:!1})],n1.prototype,"subscription",2),n1=n0([tK("gk-feature-gate-badge")],n1);let n2=e1`
	.repo-branch {
		display: flex;
		flex-direction: column;
		gap: 0 0.4rem;
	}

	@media (max-width: 720px) {
		.repo-branch {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}

	.repo-branch__tag {
		cursor: pointer;
	}
`,n5=e1`
	:host {
		display: block;
	}

	p {
		margin: 0;
	}

	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	a:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	.actions gk-tooltip {
		display: inline-block;
	}

	.actions a {
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 3.2rem;
		height: 3.2rem;
		border-radius: 0.5rem;
		color: inherit;
		padding: 0.2rem;
		vertical-align: text-bottom;
		text-decoration: none;
		cursor: pointer;
	}
	.actions a:hover {
		background-color: var(--vscode-toolbar-hoverBackground);
	}
	.actions a:active {
		background-color: var(--vscode-toolbar-activeBackground);
	}
	.actions a[tabindex='-1'] {
		opacity: 0.5;
		cursor: default;
	}

	.actions a code-icon {
		font-size: 1.6rem;
	}

	.indicator-info {
		color: var(--vscode-problemsInfoIcon-foreground);
	}
	.indicator-warning {
		color: var(--vscode-problemsWarningIcon-foreground);
	}
	.indicator-error {
		color: var(--vscode-problemsErrorIcon-foreground);
	}
	.indicator-neutral {
		color: var(--color-alert-neutralBorder);
	}

	.row-type {
		--gk-badge-outline-padding: 0.3rem 0.8rem;
		--gk-badge-font-size: 1.1rem;
		opacity: 0.4;
		vertical-align: middle;
	}

	.title {
		font-size: 1.4rem;
	}

	.add-delete {
		margin-left: 0.4rem;
		margin-right: 0.2rem;
	}

	.key {
		z-index: 1;
		position: relative;
	}

	.date {
		display: inline-block;
		min-width: 1.6rem;
		line-height: 2.4rem;
	}

	.icon {
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 2.4rem;
		height: 2.4rem;
	}

	.pin {
		color: inherit;
		text-decoration: none;
		cursor: pointer;
		opacity: 0.4;
	}
	.pin:hover {
		opacity: 0.64;
		text-decoration: none;
	}

	gk-focus-row:not(:hover):not(:focus-within) .pin:not(.is-active) {
		opacity: 0;
	}

	.pin.is-active {
		opacity: 1;
	}
`,n3=e1`
	.indicator-warning {
		color: var(--vscode-problemsWarningIcon-foreground);
	}
	.indicator-danger {
		color: var(--vscode-problemsErrorIcon-foreground);
	}
`;function n6(e,t=new Date){let o=Math.floor((t.getTime()-e.getTime())/1e3),n="ok";return Math.floor(o/31536e3)>=1?n="danger":Math.floor(o/2592e3)>=1?n="danger":Math.floor(o/604800)>=1?n="danger":Math.floor(o/86400)>=1&&(n="warning"),{label:ov(e,!0),tooltip:ov(e),status:n}}var n4=Object.defineProperty,n8=Object.getOwnPropertyDescriptor,n7=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?n8(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&n4(t,o,r),r};let n9=class extends tQ{constructor(){super(),this.isCurrentBranch=!1,this.isCurrentWorktree=!1,this.hasWorktree=!1,this.hasLocalBranch=!1,eQ(eq,eU,eB,eL,eM,ej,eD,eG)}get lastUpdatedDate(){return new Date(this.pullRequest.date)}get assignees(){let e=this.pullRequest?.assignees;if(null==e)return[];let t=this.pullRequest.author;return null!=t?e.filter(e=>e.name!==t.name):e}get indicator(){return null==this.pullRequest?"":"ChangesRequested"===this.pullRequest.reviewDecision?"changes":"Approved"===this.pullRequest.reviewDecision&&"Mergeable"===this.pullRequest.mergeableState?"ready":"Conflicting"===this.pullRequest.mergeableState?"conflicting":""}get dateStyle(){return`indicator-${n6(this.lastUpdatedDate).status}`}get participants(){let e=[];function t(t,o){let n=e.find(e=>e.member.name===t.name);null!=n?n.roles.push(o):e.push({member:t,roles:[o]})}return this.pullRequest?.author!=null&&t(this.pullRequest.author,"author"),this.pullRequest?.assignees!=null&&this.pullRequest.assignees.forEach(e=>t(e,"assigned")),this.pullRequest?.reviewRequests!=null&&this.pullRequest.reviewRequests.forEach(e=>t(e.reviewer,"reviewer")),e}render(){if(this.pullRequest)return tE`
			<gk-focus-row>
				<span slot="pin">
					<gk-tooltip>
						<a
							href="#"
							class="icon pin ${this.pinned?" is-active":""}"
							slot="trigger"
							@click="${this.onPinClick}"
							><code-icon icon="pinned"></code-icon
						></a>
						<span>${this.pinned?"Unpin":"Pin"}</span>
					</gk-tooltip>
					<gk-tooltip>
						<a
							href="#"
							class="icon pin ${this.snoozed?" is-active":""}"
							slot="trigger"
							@click="${this.onSnoozeClick}"
							><code-icon icon="${this.snoozed?"bell":"bell-slash"}"></code-icon
						></a>
						<span>${this.snoozed?"Unsnooze":"Snooze"}</span>
					</gk-tooltip>
				</span>
				<span slot="date">
					<gk-date-from class="date ${this.dateStyle}" date="${this.lastUpdatedDate}"></gk-date-from>
				</span>
				<span slot="key" class="key">
					${or("changes"===this.indicator,()=>tE`<gk-tooltip>
								<span class="icon" slot="trigger"
									><code-icon class="indicator-error" icon="request-changes"></code-icon
								></span>
								<span>changes requested</span>
							</gk-tooltip>`)}
					${or("ready"===this.indicator,()=>tE`<gk-tooltip>
								<span class="icon" slot="trigger"
									><code-icon class="indicator-info" icon="pass"></code-icon
								></span>
								<span>approved and ready to merge</span>
							</gk-tooltip>`)}
					${or("conflicting"===this.indicator,()=>tE`<gk-tooltip>
								<span class="icon" slot="trigger"
									><code-icon class="indicator-error" icon="bracket-error"></code-icon
								></span>
								<span>cannot be merged due to merge conflicts</span>
							</gk-tooltip>`)}
				</span>
				<gk-focus-item>
					<p>
						<span class="title"
							>${this.pullRequest.title}
							<a href="${this.pullRequest.url}">#${this.pullRequest.id}</a></span
						>
						<!-- &nbsp;
						<gk-badge>pending suggestions</gk-badge> -->
					</p>
					<p>
						<gk-badge variant="outline" class="row-type">PR</gk-badge>
						<gk-additions-deletions class="add-delete">
							<span slot="additions">${this.pullRequest.additions}</span>
							<span slot="deletions">${this.pullRequest.deletions}</span>
						</gk-additions-deletions>
						<gk-tooltip>
							<gk-tag variant="ghost" slot="trigger">
								<span slot="prefix"><code-icon icon="comment-discussion"></code-icon></span>
								${this.pullRequest.comments}
							</gk-tag>
							<span>Comments</span>
						</gk-tooltip>
					</p>
					<span slot="people">
						<gk-avatar-group>
							${or(this.participants.length>0,()=>tE`
									${oi(this.participants,e=>e.member.url,e=>tE`<gk-avatar
												src="${e.member.avatarUrl}"
												title="${`${e.member.name?`${e.member.name} `:""}(${e.roles.join(", ")})`}"
											></gk-avatar>`)}
								`)}
						</gk-avatar-group>
					</span>
					<div slot="repo" class="repo-branch">
						<gk-tag class="repo-branch__tag" full @click=${this.onOpenBranchClick}>
							<span slot="prefix"><code-icon icon="source-control"></code-icon></span>
							${this.pullRequest.refs?.isCrossRepository===!0?tE`${this.pullRequest.refs?.head.owner}:${this.pullRequest.refs?.head.branch}`:this.pullRequest.refs?.head.branch}
						</gk-tag>
						<gk-tag variant="ghost" class="repo-branch__tag" full>
							<span slot="prefix"><code-icon icon="repo"></code-icon></span>
							${this.pullRequest.refs?.base.repo}
						</gk-tag>
					</div>
					<nav slot="actions" class="actions">
						<gk-tooltip>
							<a
								slot="trigger"
								href="#"
								tabindex="${this.isCurrentWorktree||this.isCurrentBranch?-1:tO}"
								aria-label="${this.isCurrentWorktree?"Already on this worktree":"Open Worktree..."}"
								@click="${this.onOpenWorktreeClick}"
								><code-icon icon="gl-worktrees-view"></code-icon
							></a>
							<span
								>${this.isCurrentWorktree?"Already on this worktree":"Open Worktree..."}</span
							> </gk-tooltip
						><gk-tooltip>
							<a
								slot="trigger"
								href="#"
								tabindex="${this.hasWorktree||this.isCurrentBranch?-1:tO}"
								aria-label="${this.isCurrentBranch?"Already on this branch":this.hasWorktree?"This branch has a worktree":"Switch to Branch..."}"
								@click="${this.onSwitchBranchClick}"
								><code-icon icon="gl-switch"></code-icon
							></a>
							<span
								>${this.isCurrentBranch?"Already on this branch":this.hasWorktree?"This branch has a worktree":"Switch to Branch..."}</span
							>
						</gk-tooltip>
					</nav>
				</gk-focus-item>
			</gk-focus-row>
		`}onOpenBranchClick(e){this.dispatchEvent(new CustomEvent("open-branch",{detail:this.pullRequest}))}onOpenWorktreeClick(e){if(this.isCurrentWorktree){e.preventDefault(),e.stopImmediatePropagation();return}this.dispatchEvent(new CustomEvent("open-worktree",{detail:this.pullRequest}))}onSwitchBranchClick(e){if(this.isCurrentBranch||this.hasWorktree){e.preventDefault(),e.stopImmediatePropagation();return}this.dispatchEvent(new CustomEvent("switch-branch",{detail:this.pullRequest}))}onSnoozeClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("snooze-item",{detail:{item:this.pullRequest,snooze:this.snoozed}}))}onPinClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("pin-item",{detail:{item:this.pullRequest,pin:this.pinned}}))}};n9.styles=[os,ol,n3,n2,n5,e1``],n7([tX({type:Number})],n9.prototype,"rank",2),n7([tX({type:Object})],n9.prototype,"pullRequest",2),n7([tX({type:Boolean})],n9.prototype,"isCurrentBranch",2),n7([tX({type:Boolean})],n9.prototype,"isCurrentWorktree",2),n7([tX({type:Boolean})],n9.prototype,"hasWorktree",2),n7([tX({type:Boolean})],n9.prototype,"hasLocalBranch",2),n7([tX()],n9.prototype,"pinned",2),n7([tX()],n9.prototype,"snoozed",2),n9=n7([tK("gk-pull-request-row")],n9);var ie=Object.defineProperty,it=Object.getOwnPropertyDescriptor,io=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?it(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&ie(t,o,r),r};let ii=class extends tQ{constructor(){super(),this.pinned=!1,this.snoozed=!1,eQ(eq,eU,eB,eL,eM,ej,eG)}get lastUpdatedDate(){return new Date(this.issue.date)}get dateStyle(){return`indicator-${n6(this.lastUpdatedDate).status}`}get assignees(){let e=this.issue?.assignees;if(null==e)return[];let t=this.issue.author;return null!=t?e.filter(e=>e.avatarUrl!==t.avatarUrl):e}render(){if(this.issue)return tE`
			<gk-focus-row>
				<span slot="pin">
					<gk-tooltip>
						<a
							href="#"
							class="icon pin ${this.pinned?" is-active":""}"
							slot="trigger"
							@click="${this.onPinClick}"
							><code-icon icon="pinned"></code-icon
						></a>
						<span>${this.pinned?"Unpin":"Pin"}</span>
					</gk-tooltip>
					<gk-tooltip>
						<a
							href="#"
							class="icon pin ${this.snoozed?" is-active":""}"
							slot="trigger"
							@click="${this.onSnoozeClick}"
							><code-icon icon="${this.snoozed?"bell":"bell-slash"}"></code-icon
						></a>
						<span>${this.snoozed?"Unsnooze":"Snooze"}</span>
					</gk-tooltip>
				</span>
				<span slot="date">
					<gk-date-from class="date ${this.dateStyle}" date="${this.lastUpdatedDate}"></gk-date-from>
				</span>
				<span slot="key"></span>
				<gk-focus-item>
					<p>
						<span class="title">${this.issue.title} <a href="${this.issue.url}">#${this.issue.id}</a></span>
						<!-- &nbsp;
						<gk-badge>pending suggestions</gk-badge> -->
					</p>
					<p>
						<gk-badge variant="outline" class="row-type">Issue</gk-badge>
						<gk-tooltip
							><gk-tag variant="ghost" slot="trigger">
								<span slot="prefix"><code-icon icon="comment-discussion"></code-icon></span>
								${this.issue.commentsCount} </gk-tag
							><span>Comments</span></gk-tooltip
						>
						<gk-tooltip
							><gk-tag variant="ghost" slot="trigger">
								<span slot="prefix"><code-icon icon="thumbsup"></code-icon></span>
								${this.issue.thumbsUpCount} </gk-tag
							><span>Thumbs Up</span></gk-tooltip
						>
					</p>
					<span slot="people">
						<gk-avatar-group>
							${or(null!=this.issue.author,()=>tE`<gk-avatar
										src="${this.issue.author.avatarUrl}"
										title="${this.issue.author.name} (author)"
									></gk-avatar>`)}
							${or(this.assignees.length>0,()=>tE`
									${oi(this.assignees,e=>e.url,e=>tE`<gk-avatar
												src="${e.avatarUrl}"
												title="${e.name?`${e.name} `:""}(assignee)"
											></gk-avatar>`)}
								`)}
						</gk-avatar-group>
					</span>
					<div slot="repo">
						<gk-tag variant="ghost" full>
							<span slot="prefix"><code-icon icon="repo"></code-icon></span>
							${this.issue.repository.repo}
						</gk-tag>
					</div>
					<nav slot="actions" class="actions">
						<gk-tooltip>
							<a slot="trigger" href="${this.issue.url}"><code-icon icon="globe"></code-icon></a>
							<span>Open issue on remote</span>
						</gk-tooltip>
					</nav>
				</gk-focus-item>
			</gk-focus-row>
		`}onSnoozeClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("snooze-item",{detail:{item:this.issue,snooze:this.snoozed}}))}onPinClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("pin-item",{detail:{item:this.issue,pin:this.pinned}}))}};ii.styles=[os,ol,n3,n2,n5,e1``],io([tX({type:Number})],ii.prototype,"rank",2),io([tX({type:Object})],ii.prototype,"issue",2),io([tX()],ii.prototype,"pinned",2),io([tX()],ii.prototype,"snoozed",2),ii=io([tK("gk-issue-row")],ii);var ir=Object.defineProperty,is=Object.getOwnPropertyDescriptor,ia=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?is(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&ir(t,o,r),r};let il=class extends tQ{constructor(){super(),this.tabFilters=["prs","issues","snoozed"],this.tabFilterOptions=[{label:"All",value:""},{label:"PRs",value:"prs"},{label:"Issues",value:"issues"},{label:"Snoozed",value:"snoozed"}],this.mineFilters=["authored","assigned","review-requested","mentioned"],this.mineFilterOptions=[{label:"Mine",value:""},{label:"Opened by Me",value:"authored"},{label:"Assigned to Me",value:"assigned"},{label:"Needs my Review",value:"review-requested"},{label:"Mentions Me",value:"mentioned"}],eQ(eN,eF,eH,eI,eV,ez,eW)}get subscriptionState(){return this.state?.access.subscription.current}get showSubscriptionGate(){return this.state?.access.allowed===!1}get showFeatureGate(){return this.state?.access.allowed!==!0}get showConnectionGate(){return this.state?.access.allowed===!0&&!this.state?.repos?.some(e=>e.isConnected)}get mineFilterMenuLabel(){return null!=this.selectedMineFilter&&""!==this.selectedMineFilter?this.mineFilterOptions.find(e=>e.value===this.selectedMineFilter)?.label:this.mineFilterOptions[0].label}get items(){if(this.isLoading)return[];let e=[];return this.state?.pullRequests?.forEach(({pullRequest:t,reasons:o,isCurrentBranch:n,isCurrentWorktree:i,hasWorktree:r,hasLocalBranch:s,rank:a,enriched:l})=>{let c=l?.find(e=>"pin"===e.type)?.id,h=l?.find(e=>"snooze"===e.type)?.id;e.push({isPullrequest:!0,state:{pullRequest:t,isCurrentBranch:n,isCurrentWorktree:i,hasWorktree:r,hasLocalBranch:s},rank:a??0,tags:o,isPinned:c,isSnoozed:h})}),this.state?.issues?.forEach(({issue:t,reasons:o,rank:n,enriched:i})=>{let r=i?.find(e=>"pin"===e.type)?.id,s=i?.find(e=>"snooze"===e.type)?.id;e.push({isPullrequest:!1,rank:n??0,state:{issue:t},tags:o,isPinned:r,isSnoozed:s})}),e}get tabFilterOptionsWithCounts(){let e={};return this.tabFilters.forEach(t=>e[t]=0),this.items.forEach(({isPullrequest:t,isSnoozed:o})=>{let n=o?"snoozed":t?"prs":"issues";null!=e[n]&&e[n]++}),this.tabFilterOptions.map(t=>({...t,count:""===t.value?this.items.length:e[t.value]}))}get filteredItems(){if(0===this.items.length)return this.items;let e=null!=this.searchText&&""!==this.searchText,t=null!=this.selectedMineFilter&&""!==this.selectedMineFilter,o=null!=this.selectedTabFilter&&""!==this.selectedTabFilter;if(!e&&!t&&!o)return this.items.filter(e=>null==e.isSnoozed);let n=this.searchText?.toLowerCase();return this.items.filter(i=>{if(o){if(null!=i.isSnoozed&&"snoozed"!==this.selectedTabFilter||null==i.isSnoozed&&"snoozed"==this.selectedTabFilter||!0===i.isPullrequest&&"issues"===this.selectedTabFilter||!1===i.isPullrequest&&"prs"===this.selectedTabFilter)return!1}else if(null!=i.isSnoozed)return!1;return(!t||!!i.tags.includes(this.selectedMineFilter))&&(!e||(!i.state.issue||!!i.state.issue.title.toLowerCase().includes(n))&&(!i.state.pullRequest||!!i.state.pullRequest.title.toLowerCase().includes(n)))})}get sortedItems(){return this.filteredItems.sort((e,t)=>e.isPinned===t.isPinned?0:e.isPinned?-1:1)}get isLoading(){return this.state?.pullRequests==null||this.state?.issues==null}loadingContent(){return tE`
			<div class="alert">
				<span class="alert__content"><code-icon modifier="spin" icon="loading"></code-icon> Loading</span>
			</div>
		`}focusItemsContent(){return this.isLoading?this.loadingContent():0===this.sortedItems.length?tE`
				<div class="alert">
					<span class="alert__content">None found</span>
				</div>
			`:tE`
			${oi(this.sortedItems,(e,t)=>`item-${t}-${e.isPullrequest?`pr-${e.state.pullRequest.id}`:`issue-${e.state.issue.id}`}`,({isPullrequest:e,rank:t,state:o,isPinned:n,isSnoozed:i})=>or(e,()=>tE`<gk-pull-request-row
								.rank=${t}
								.pullRequest=${o.pullRequest}
								.isCurrentBranch=${o.isCurrentBranch}
								.isCurrentWorktree=${o.isCurrentWorktree}
								.hasWorktree=${o.hasWorktree}
								.hasLocalBranch=${o.hasLocalBranch}
								.pinned=${n}
								.snoozed=${i}
								.enrichedId=${o.enrichedId}
							></gk-pull-request-row>`,()=>tE`<gk-issue-row
								.rank=${t}
								.issue=${o.issue}
								.pinned=${n}
								.snoozed=${i}
								.enrichedId=${o.enrichedId}
							></gk-issue-row>`))}
		`}render(){return null==this.state?this.loadingContent():tE`
			<div class="app">
				<div class="app__toolbar">
					<span class="preview">Preview</span>
					<gk-feature-gate-badge
						.subscription=${this.subscriptionState}
						id="subscription-gate-badge"
					></gk-feature-gate-badge>
					<gk-button
						class="feedback"
						appearance="toolbar"
						href="https://github.com/gitkraken/vscode-gitlens/discussions/2535"
						title="Focus Feedback"
						aria-label="Focus Feedback"
						><code-icon icon="feedback"></code-icon
					></gk-button>
				</div>

				<div class="app__content">
					<gk-feature-gate
						.state=${this.subscriptionState?.state}
						.visible=${this.showFeatureGate}
						id="subscription-gate"
						class="scrollable"
						><p slot="feature">
							Brings all of your GitHub pull requests and issues into a unified actionable view to help to
							you more easily juggle work in progress, pending work, reviews, and more. Quickly see if
							anything requires your attention while keeping you focused.
						</p></gk-feature-gate
					>
					<gk-feature-gate .visible=${this.showConnectionGate} id="connection-gate" class="scrollable">
						<h3>No GitHub remotes are connected</h3>
						<p>
							This enables access to Pull Requests and Issues as well as provide additional information
							inside hovers and the Commit Details view, such as auto-linked issues and pull requests and
							avatars.
						</p>
						<gl-button appearance="alert" href="command:gitlens.connectRemoteProvider"
							>Connect to GitHub</gl-button
						>
					</gk-feature-gate>

					<div class="app__focus">
						<header class="app__header">
							<div class="app__header-group">
								<nav class="tab-filter" id="filter-focus-items">
									${t5(this.tabFilterOptionsWithCounts,({label:e,value:t,count:o},n)=>tE`
											<button
												class="tab-filter__tab ${(this.selectedTabFilter?t===this.selectedTabFilter:0===n)?"is-active":""}"
												type="button"
												data-tab="${t}"
												@click=${()=>this.selectedTabFilter=t}
											>
												${e} <gk-badge variant="filled">${o}</gk-badge>
											</button>
										`)}
								</nav>
								<gk-popover>
									<gk-button slot="trigger"
										><code-icon icon="list-filter"></code-icon> ${this.mineFilterMenuLabel}
										<code-icon icon="chevron-down"></code-icon
									></gk-button>
									<gk-menu class="mine-menu" @select=${this.onSelectMineFilter}>
										${t5(this.mineFilterOptions,({label:e,value:t},o)=>tE`
												<gk-menu-item
													data-value="${t}"
													?disabled=${this.selectedMineFilter?t===this.selectedMineFilter:0===o}
													>${e}</gk-menu-item
												>
											`)}
									</gk-menu>
								</gk-popover>
							</div>
							<div class="app__header-group">
								<gk-input
									class="app__search"
									label="Search field"
									label-visibility="sr-only"
									placeholder="Search"
									@input=${D(this.onSearchInput.bind(this),200)}
								>
									<code-icon slot="prefix" icon="search"></code-icon>
								</gk-input>
							</div>
						</header>
						<main class="app__main">
							<gk-focus-container id="list-focus-items">
								<span slot="pin">
									<code-icon icon="pinned"></code-icon>
								</span>
								<span slot="key"><code-icon icon="circle-large-outline"></code-icon></span>
								<span slot="date"><code-icon icon="gl-clock"></code-icon></span>
								<span slot="repo">Repo / Branch</span>
								${this.focusItemsContent()}
							</gk-focus-container>
						</main>
					</div>
				</div>
			</div>
		`}onSearchInput(e){let t=e.target.value;if(""===t||t.length<3){this.searchText=void 0;return}this.searchText=t}onSelectMineFilter(e){let t=e.detail?.target;if(t?.dataset?.value!=null){this.selectedMineFilter=t.dataset.value;let e=t.closest("gk-popover");e?.hidePopover()}}createRenderRoot(){return this}};il.styles=[os],ia([t2("#subscription-gate",!0)],il.prototype,"subscriptionEl",2),ia([t2("#connection-gate",!0)],il.prototype,"connectionEl",2),ia([t2("#subscription-gate-badge",!0)],il.prototype,"subScriptionBadgeEl",2),ia([t0()],il.prototype,"selectedTabFilter",2),ia([t0()],il.prototype,"selectedMineFilter",2),ia([t0()],il.prototype,"searchText",2),ia([tX({type:Object})],il.prototype,"state",2),il=ia([tK("gl-focus-app")],il);class ic extends eR{constructor(){super("FocusApp")}onInitialize(){this.attachState()}onBind(){let e=super.onBind?.()??[];return e.push(g.on("gk-pull-request-row","open-worktree",(e,t)=>this.onOpenWorktree(e,t)),g.on("gk-pull-request-row","open-branch",(e,t)=>this.onOpenBranch(e,t)),g.on("gk-pull-request-row","switch-branch",(e,t)=>this.onSwitchBranch(e,t)),g.on("gk-pull-request-row","snooze-item",(e,t)=>this.onSnoozeItem(e,!1)),g.on("gk-pull-request-row","pin-item",(e,t)=>this.onPinItem(e,!1)),g.on("gk-issue-row","snooze-item",(e,t)=>this.onSnoozeItem(e,!0)),g.on("gk-issue-row","pin-item",(e,t)=>this.onPinItem(e,!0))),e}get component(){return null==this._component&&(this._component=document.getElementById("app")),this._component}attachState(){this.component.state=this.state}onOpenBranch(e,t){e.detail?.refs?.head!=null&&this.sendCommand(C,{pullRequest:e.detail})}onSwitchBranch(e,t){e.detail?.refs?.head!=null&&this.sendCommand(S,{pullRequest:e.detail})}onOpenWorktree(e,t){e.detail?.refs?.head!=null&&this.sendCommand(x,{pullRequest:e.detail})}onSnoozeItem(e,t){t?this.sendCommand(P,{issue:e.detail.item,snooze:e.detail.snooze}):this.sendCommand(A,{pullRequest:e.detail.item,snooze:e.detail.snooze})}onPinItem(e,t){t?this.sendCommand(E,{issue:e.detail.item,pin:e.detail.pin}):this.sendCommand(R,{pullRequest:e.detail.item,pin:e.detail.pin})}onMessageReceived(e){e.method===T.method?k(T,e,e=>{this.state=e.state,this.setState(this.state),this.attachState()}):super.onMessageReceived?.(e)}}new ic;var ih=m.S;export{ih as FocusApp};