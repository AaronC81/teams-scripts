class ScriptUI {
    activate() {
        document.body.appendChild(ScriptUtils.htmlToNode(`
<div id="script-dialog" class="ngdialog ts-modal-dialog options-settings-dialog">
    <div class="ngdialog-overlay scrollbar-vertical-space"></div>
    <div class="ngdialog-content" role="document">
        <div data-tid="optionsSettingsDialog" class="vdi-donut-occlusion" aria-label="Scripts" acc-role-dom="dialog"
            role="dialog" aria-modal="true">
            <div class="ts-modal-dialog-container vdi-occlusion" ng-class="{'center-align-buttons': centerAlignButtons,
                'dark-mode': darkMode }" dialog-title="Scripts" close-aria-label="Close Scripts"
                add-close-icon="true" suppress-default-button="true" suppress-default-footer="true"
                skip-auto-focus="true">
                <div class="analytics-panel" analytics-panel="3" analytics-panel-on-root="true"
                    analytics-panel-view="{ panel: {type: 0 }}" ng-attr-track-data="{{::trackData}}"
                    ng-attr-track-async-data="{{::trackAsyncData}}">
                    <div class="ts-modal-dialog-header" ng-if="!fullScreen &amp;&amp; !hideHeader">
                        <div class="close-container app-icons-fill-hover"
                            ng-class="{'ts-modal-dialog-suppressed-content-header': contentHeaderSuppressed}"
                            ng-if="addCloseIcon">
                            <button
                                class="btn btn-default icons-close ngdialog-close inset-border inset-border-round inset-border-themed app-icons-fill-hover"
                                role="button" ng-disabled="dialogBusy" data-tid="closeModelDialogBtn" title="Close"
                                track-outcome="13" track-summary="Close" ng-click="closeFunction()"
                                ng-attr-aria-label="{{::closeAriaLabel}}" ng-attr-track-data="{{::trackData}}"
                                aria-label="Close Settings"
                                id="script-dialog-close-button">
                            </button>
                            <ng-include ng-class="{'icons-close-disabled': dialogBusy}" role="presentation"
                                class="icon icons-close modal-dialog-close" src="'svg/icons-close.html'"><svg
                                    role="presentation" focusable="false" class="app-svg icons-close"
                                    viewBox="0 0 32 32">
                                    <g class="icons-default-fill">
                                        <path class="icons-unfilled"
                                            d="M16.707,16l4.2427-4.2427c0.1953-0.1953,0.1953-0.5117,0-0.707s-0.5117-0.1953-0.707,0L16,15.293l-4.2427-4.2427
            c-0.1953-0.1953-0.5117-0.1953-0.707,0s-0.1953,0.5117,0,0.707L15.293,16l-4.2427,4.2427c-0.1953,0.1953-0.1953,0.5117,0,0.707
            c0.0977,0.0977,0.2256,0.1465,0.3535,0.1465s0.2559-0.0488,0.3535-0.1465L16,16.707l4.2427,4.2427
            c0.0977,0.0977,0.2256,0.1465,0.3535,0.1465s0.2559-0.0488,0.3535-0.1465c0.1953-0.1953,0.1953-0.5117,0-0.707L16.707,16z"></path>
                                        <path class="icons-filled"
                                            d="M17.4141,16l3.8892-3.8892c0.3906-0.3906,0.3906-1.0234,0-1.4141c-0.3901-0.3906-1.0239-0.3906-1.4141,0L16,14.5859
            l-3.8892-3.8892c-0.3901-0.3906-1.0239-0.3906-1.4141,0c-0.3906,0.3906-0.3906,1.0234,0,1.4141L14.5859,16l-3.8892,3.8892
            c-0.3906,0.3906-0.3906,1.0234,0,1.4141c0.1951,0.1953,0.4512,0.293,0.707,0.293s0.512-0.0977,0.707-0.293L16,17.4141l3.8892,3.8892
            c0.1951,0.1953,0.4512,0.293,0.707,0.293s0.512-0.0977,0.707-0.293c0.3906-0.3906,0.3906-1.0234,0-1.4141L17.4141,16z"></path>
                                    </g>
                                </svg></ng-include>
                        </div>
                        <h1 class="app-font-family-base ts-modal-dialog-title" ng-if="!!dialogTitle"
                            ng-hide="hideDialogTitle" ng-bind="dialogTitle" id="modalDialog-title">Loaded Scripts</h1>
                    </div>
                    <div class="ts-modal-dialog-content">
                        <div class="ts-modal-dialog-content-container" ng-transclude="">
                            <ul>
                                ${window.teamsUserScripts.loadedScripts.map(s => `<li>${s}</li>`).join("")}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`));
        document.getElementById("script-dialog-close-button").onclick = () => {
            document.getElementById("script-dialog").remove();
        }
    }
}
