(function(){
"use strict";
"use strict";

var app = angular.module('viewCustom', []);

var jQueryScript = document.createElement("script");
jQueryScript.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName("head")[0].appendChild(jQueryScript);

app.component('prmTreeNavAfter', {
    bindings: { parentCtrl: '<' },
    require: {
        parent: '^prmTreeNav',
        top: '^prmDatabasesCategorize'
    },
    controller: function controller($scope) {
        var vm = this;

        try {
            
            window.onresize = adaptFacetSize;
            function adaptFacetSize(){
            var facetLeft = $("md-card[class^='default-card']").offset().left;
            var menuRight = $("div[id='alphabet']").width() + $("div[id='alphabet']").offset().left;       
            $("div[id='alphabet']").css("width",facetLeft-40);
          }
            
            vm.alphabet = {
                letter: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "all"]
            };

            this.$onInit = function () {
                var res = $("prm-tree-nav > md-list").css("display", "none");
                adaptFacetSize();
            };

            $scope.showValue = function (letter) {
                $("#hidden").val(letter);
            };
            $scope.getValue = function (item) {
                var getVal = $('#hidden').val();
                if (getVal == "" || getVal == "all") {
                    return alphabet;
                }
                var lowreName = item.name.toLowerCase();
                return lowreName.indexOf(getVal.toLowerCase()) === 0;
            };
        } catch (e) {
            console.log("ERROR");
        }
    },

    template: ' \n    <input class="hidden" id="hidden" type="text" ng-model="letter">   \n       \n    \n    <div  id="alphabet" class="flex-container"" layout-row" layout="row">\n    <a class="letter" ng-click="showValue(letter)" ng-repeat="letter in $ctrl.alphabet.letter" translate={{letter}} href="#">{{letter}}\n    <div class="md-ripple-container" style=""></div>\n    </a> \n    </div>\n    \n    \t\n    <md-list role="list" class="md-primoExplore-theme">   \n    <md-list-item class="display-block _md" ng-repeat="item in $ctrl.parent.bdcategoryitems |filter: getValue") ng-class="{\'toggled\': item.toggled, \'has-branches\': $ctrl.parent.haveSubCategories(item)}" ng-style="$ctrl.parent.isBrowserIE() &amp;&amp; {\'display\':\'block\'}" aria-live="assertive" role="listitem" style="">\n        <div class="inner">           \n            <button class="branch-name md-button md-primoExplore-theme md-ink-ripple layout-row" type="button" ng-click="$ctrl.parent.onBranchSelect(item)" layout="row" title={{item.name}} ng-class="{\'is-selected\': item.selected}" aria-label={{item.name}}>\n                <p>{{item.name}}</p>\n                <div class="md-ripple-container" style=""></div>\n            </button>\n        </div>       \n        <div class="_md-secondary-container"/>\n    </md-list-item>\n    </<md-list>\n     '
});

})();
