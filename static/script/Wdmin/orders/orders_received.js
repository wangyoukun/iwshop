
DataTableConfig.order = [[0, 'desc']];

requirejs(['jquery', 'util', 'fancyBox', 'datatables'], function($, util, fancyBox, dataTables) {
    $(function() {
        util.loadOrderStatNums();
        var d = new Date();
        var d1 = d.getFullYear() + '-' + (d.getMonth() + 1);
        $('#month-select option[value=' + d1 + ']').get(0).selected = true;
        ajaxLoadOrderlist(util);
    });
});


function ajaxLoadOrderlist(util) {
    $('#orderlist').load('?/Wdmin/ajaxLoadOrderlist/page=0&status=received&month=' + $('#month-select').val(), function(r) {
        if (r === '0') {
            util.listEmptyTip();
        } else {
            $('.wshop-empty-tip').remove();
            $('.dTable').dataTable(DataTableConfig).api();
            fnFancyBox('.pd-list-viewExp,.od-list-pdinfo');
        }
    });
}