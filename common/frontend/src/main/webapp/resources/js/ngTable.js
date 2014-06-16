/*! ngTable v0.3.0 by Vitalii Savchuk - https://github.com/esvit/ng-table - New BSD License */

! function (a, b) {
    return "function" == typeof define && define.amd ? (define("ngTable", ["jquery", "angular"], function (a, c) {
        return b(c)
    }), void 0) : b(a)
}(angular || null, function (a) {
    var b = a.module("ngTable", []);
    b.factory("ngTableParams", ["$q",
        function (b) {
            var c = function (a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                d = function (d, e) {
                    var f = this;
                    this.parameters = function (b, d) {
                        if (d = d || !1, a.isDefined(b)) {
                            for (var e in b) {
                                var f = b[e];
                                if (d && e.indexOf("[") >= 0) {
                                    for (var h = e.split(/\[(.*)\]/).reverse(), i = "", j = 0, k = h.length; k > j; j++) {
                                        var l = h[j];
                                        if ("" !== l) {
                                            var m = f;
                                            f = {}, f[i = l] = c(m) ? parseFloat(m) : m
                                        }
                                    }
                                    "sorting" === i && (g[i] = {}), g[i] = a.extend(g[i] || {}, f[i])
                                } else g[e] = c(b[e]) ? parseFloat(b[e]) : b[e]
                            }
                            return this
                        }
                        return g
                    }, this.settings = function (b) {
                        return a.isDefined(b) ? (h = a.extend(h, b), this) : h
                    }, this.page = function (b) {
                        return a.isDefined(b) ? this.parameters({
                            page: b
                        }) : g.page
                    }, this.total = function (b) {
                        var c = a.isDefined(b) ? this.settings({
                            total: b
                        }) : h.total;
                        return a.isFunction(c) ? c() : c
                    }, this.count = function (b) {
                        return a.isDefined(b) ? this.parameters({
                            count: b,
                            page: 1
                        }) : g.count
                    }, this.filter = function (b) {
                        return a.isDefined(b) ? this.parameters({
                            filter: b
                        }) : g.filter
                    }, this.sorting = function (b) {
                        return a.isDefined(b) ? this.parameters({
                            sorting: b
                        }) : g.sorting
                    }, this.orderBy = function () {
                        var a = [];
                        for (var b in g.sorting) a.push(("asc" === g.sorting[b] ? "+" : "-") + b);
                        return a
                    }, this.getData = function (a) {
                        a.resolve([])
                    }, this.getGroups = function (c, d) {
                        var e = b.defer();
                        e.promise.then(function (b) {
                            var e = {};
                            for (var f in b) {
                                var g = b[f],
                                    h = a.isFunction(d) ? d(g) : g[d];
                                e[h] = e[h] || {
                                    data: []
                                }, e[h].value = h, e[h].data.push(g)
                            }
                            var i = [];
                            for (var j in e) i.push(e[j]);
                            c.resolve(i)
                        }), this.getData(e, f)
                    }, this.generatePagesArray = function (a, b, c) {
                        var d, e, f, g, h, j;
                        if (d = 11, j = [], h = Math.ceil(b / c), h > 1) {
                            for (j.push({
                                type: "prev",
                                number: Math.max(1, a - 1),
                                active: a > 1
                            }), j.push({
                                type: "first",
                                number: 1,
                                active: a > 1
                            }), f = Math.round((d - 5) / 2), g = Math.max(2, a - f), e = Math.min(h - 1, a + 2 * f - (a - g)), g = Math.max(2, g - (2 * f - (e - g))), i = g; e >= i;) i === g && 2 !== i || i === e && i !== h - 1 ? j.push({
                                type: "more",
                                active: !1
                            }) : j.push({
                                type: "page",
                                number: i,
                                active: a !== i
                            }), i++;
                            j.push({
                                type: "last",
                                number: h,
                                active: a !== h
                            }), j.push({
                                type: "next",
                                number: Math.min(h, a + 1),
                                active: h > a
                            })
                        }
                        return j
                    }, this.url = function (b) {
                        b = b || !1;
                        var c = b ? [] : {};
                        for (key in g)
                            if (g.hasOwnProperty(key)) {
                                var d = g[key],
                                    e = encodeURIComponent(key);
                                if ("object" == typeof d) {
                                    for (var f in d)
                                        if (!a.isUndefined(d[f]) && "" !== d[f]) {
                                            var h = e + "[" + encodeURIComponent(f) + "]";
                                            b ? c.push(h + "=" + encodeURIComponent(d[f])) : c[h] = encodeURIComponent(d[f])
                                        }
                                } else a.isFunction(d) || a.isUndefined(d) || "" === d || (b ? c.push(e + "=" + encodeURIComponent(d)) : c[e] = encodeURIComponent(d))
                            }
                        return c
                    }, this.reload = function () {
                        var a = b.defer(),
                            c = this;
                        h.$loading = !0, h.groupBy ? h.getGroups(a, h.groupBy, this) : h.getData(a, this), a.promise.then(function (a) {
                            h.$loading = !1, h.groupBy ? h.$scope.$groups = a : h.$scope.$data = a, h.$scope.pages = c.generatePagesArray(c.page(), c.total(), c.count())
                        })
                    };
                    var g = this.$params = {
                            page: 1,
                            count: 1,
                            filter: {},
                            sorting: {},
                            group: {},
                            groupBy: null
                        },
                        h = {
                            $scope: null,
                            $loading: !1,
                            total: 0,
                            counts: [5, 10, 15, 50],
                            getGroups: this.getGroups,
                            getData: this.getData
                        };
                    return this.settings(e), this.parameters(d, !0), this
                };
            return d
        }
    ]);
    var c = ["$scope", "ngTableParams", "$q",
        function (a, b) {
            a.$loading = !1, a.params || (a.params = new b), a.params.settings().$scope = a, a.$watch("params.$params", function () {
                a.params.settings().$scope = a, a.params.reload()
            }, !0), a.sortBy = function (b) {
                var c, d;
                b.sortable && (c = a.params.sorting() && a.params.sorting()[b.sortable] && "desc" === a.params.sorting()[b.sortable], d = {}, d[b.sortable] = c ? "asc" : "desc", a.params.parameters({
                    sorting: d
                }))
            }
        }
    ];
    return b.directive("ngTable", ["$compile", "$q", "$parse",
        function (b, d, e) {
            "use strict";
            return {
                restrict: "A",
                priority: 1001,
                scope: !0,
                controller: c,
                compile: function (c) {
                    var d = [],
                        f = 0;
                    return a.forEach(a.element(c[0].querySelector("tr:not(.ng-table-group)")).find("td"), function (b) {
                            var c = a.element(b);
                            if (!c.attr("ignore-cell") || "true" !== c.attr("ignore-cell")) {
                                var g = function (a) {
                                    return e(c.attr("x-data-title") || c.attr("data-title") || c.attr("title"))(a, {
                                        $columns: d
                                    }) || " "
                                };
                                c.attr("data-title-text", g());
                                var h = function (a) {
                                        return e(c.attr("x-data-header") || c.attr("data-header") || c.attr("header"))(a, {
                                            $columns: d
                                        }) || !1
                                    },
                                    i = c.attr("filter") ? e(c.attr("filter"))() : !1,
                                    j = !1;
                                i && i.templateURL && (j = i.templateURL, delete i.templateURL), d.push({
                                    id: f++,
                                    title: g,
                                    sortable: c.attr("sortable") ? c.attr("sortable") : !1,
                                    filter: i,
                                    filterTemplateURL: j,
                                    headerTemplateURL: h,
                                    filterData: c.attr("filter-data") ? c.attr("filter-data") : null,
                                    show: c.attr("ng-show") ? function (a) {
                                        return e(c.attr("ng-show"))(a)
                                    } : function () {
                                        return !0
                                    }
                                })
                            }
                        }),
                        function (c, f, g) {
                            if (c.$loading = !1, c.$columns = d, c.$watch(g.ngTable, function (b) {
                                a.isUndefined(b) || (c.paramsModel = e(g.ngTable), c.params = b)
                            }, !0), c.parse = function (a) {
                                return a(c)
                            }, g.showFilter && c.$parent.$watch(g.showFilter, function (a) {
                                c.show_filter = a
                            }), a.forEach(d, function (b) {
                                var d;
                                if (b.filterData) {
                                    if (d = e(b.filterData)(c, {
                                        $column: b
                                    }), !a.isObject(d) || !a.isObject(d.promise)) throw new Error("Function " + b.filterData + " must be instance of $q.defer()");
                                    return delete b.filterData, d.promise.then(function (c) {
                                        a.isArray(c) || (c = []), c.unshift({
                                            title: "-",
                                            id: ""
                                        }), b.data = c
                                    })
                                }
                            }), !f.hasClass("ng-table")) {
                                c.templates = {
                                    header: g.templateHeader ? g.templateHeader : "ng-table/header.html",
                                    pagination: g.templatePagination ? g.templatePagination : "ng-table/pager.html"
                                };
                                var h = a.element(document.createElement("thead")).attr("ng-include", "templates.header"),
                                    i = a.element(document.createElement("div")).attr("ng-include", "templates.pagination");
                                return f.find("thead").remove(), f.find("tbody"), f.prepend(h), b(h)(c), b(i)(c), f.addClass("ng-table"), f.after(i)
                            }
                        }
                }
            }
        }
    ]), a.module("ngTable").run(["$templateCache",
        function (a) {
            a.put("ng-table/filters/select.html", '<select ng-options="data.id as data.title for data in column.data" ng-model="params.filter()[name]" ng-show="filter==\'select\'" class="filter filter-select form-control"> </select>'), a.put("ng-table/filters/text.html", '<input type="text" ng-model="params.filter()[name]" ng-if="filter==\'text\'" class="input-filter form-control"/>'), a.put("ng-table/header.html", '<tr> <th ng-repeat="column in $columns" ng-class="{ \'sortable\': column.sortable, \'sort-asc\': params.sorting()[column.sortable]==\'asc\', \'sort-desc\': params.sorting()[column.sortable]==\'desc\', column.class: true }" ng-click="sortBy(column)" ng-show="column.show(this)" ng-init="template=column.headerTemplateURL(this)" class="header"> <div ng-if="!template" ng-bind="parse(column.title)"></div> <div ng-if="template"><div ng-include="template"></div></div> </th> </tr> <tr ng-show="show_filter" class="ng-table-filters"> <th ng-repeat="column in $columns" ng-show="column.show(this)" data-title-text="{{column.title}}" class="filter"> <form ng-submit="doFilter()"> <input type="submit" tabindex="-1" style="position: absolute; left: -9999px; width: 1px; height: 1px;"/> <div ng-repeat="(name, filter) in column.filter"> <div ng-if="column.filterTemplateURL"> <div ng-include="column.filterTemplateURL"></div> </div> <div ng-if="!column.filterTemplateURL"> <div ng-include="\'ng-table/filters/\' + filter + \'.html\'"></div> </div> </div> </form> </th> </tr>'), a.put("ng-table/pager.html", '<div class="ng-cloak"> <div ng-if="params.settings().counts.length" class="btn-group pull-right"> <button ng-repeat="count in params.settings().counts" type="button" ng-class="{\'active\':params.count()==count}" ng-click="params.count(count)" class="btn btn-default btn-xs"> {{count}} </button> </div> <ul class="pagination"> <li ng-class="{\'disabled\': !page.active}" ng-repeat="page in pages" ng-switch="page.type"> <a ng-switch-when="prev" ng-click="params.page(page.number)" href="">&laquo;</a> <a ng-switch-when="first" ng-click="params.page(page.number)" href="">{{page.number}}</a> <a ng-switch-when="page" ng-click="params.page(page.number)" href="">{{page.number}}</a> <a ng-switch-when="more" ng-click="params.page(page.number)" href="">&#8230;</a> <a ng-switch-when="last" ng-click="params.page(page.number)" href="">{{page.number}}</a> <a ng-switch-when="next" ng-click="params.page(page.number)" href="">&raquo;</a> </li> </ul> </div>')
        }
    ]), b
});
//# sourceMappingURL=ng-table.map