var page = 1;
var totalPage;
var pageCount = 4;
var isInit = false;
var isPageFirst = true;
var echart;
$(function() {
  echart = echarts.init(document.getElementById('myecharts'));
  echart.showLoading({
    text: '正在拼命加载数据……'
  });
  getBorrowList(page);
  getEchartsInfo();
});
function getBorrowList(page) {
  apiGet(
    '/getBorrowList.php',
    function(res) {
      if (res) {
        var data = JSON.parse(res);
        totalPage = data.maxPage;
        // console.log(data.result);
        initjquerypage();
        renderBorrowList(data.result);
      } else {
        $('#borrow_list').html('暂无数据');
      }
    },
    {
      start_page: page,
      page_count: pageCount
    }
  );
  // $.ajax({
  //   type: 'get',
  //   url: 'http://myp2pweb/getBorrowList.php',
  //   data: {
  //     start_page: page,
  //     page_count: pageCount
  //   },
  //   xhrFields: {
  //     withCredentials: true
  //   },
  //   crossDomain: true,
  //   success: function(res) {
  //     if (res) {
  //       var data = JSON.parse(res);
  //       totalPage = data.maxPage;
  //       // console.log(data.result);
  //       initjquerypage();
  //       renderBorrowList(data.result);
  //     } else {
  //       $('#borrow_list').html('暂无数据');
  //     }
  //   }
  // });
}
function initjquerypage() {
  if (isInit) return;
  isInit = true;
  $('#box').paging({
    initPageNo: 1, // 初始页码
    totalPages: totalPage, //总页数
    // totalCount: '合计' + setTotalCount + '条数据', // 条目总数
    slideSpeed: 600, // 缓动速度。单位毫秒
    jump: true, //是否支持跳转
    callback: function(page) {
      // 回调函数
      if (isPageFirst) {
        isPageFirst = false;
        return;
      }
      getBorrowList(page);
    }
  });
}
function renderBorrowList(list) {
  let str = ``;
  for (let v of list) {
    str += `
    <tr>
    <td>${v['nickname']}</td>
    <td>${v['title']}</td>
    <td>${v['interest']}.00%</td>
    <td>${v['borrowmoney']}.00</td>
    <td>${v['repaytype'] == 0 ? '按月还款' : '按月到期'}</td>
    <td>${((v['investmoney'] / v['borrowmoney']) * 100).toFixed(2)}%</td>
    <td><button onclick="clickInfo('${JSON.stringify(v).replace(
      /"/g,
      '&quot;'
    )}')" class="btn btn-danger btn-xs">查看</button></td>
  </tr>`;
  }
  $('#borrow_list').html(str);
  // $('.my-info-btn').each(function(index, dom) {
  //   // $(dom).on('click', clickInfo.bind(this, list[index]));
  //   dom.addEventListener('click', clickInfo.bind(this, list[index]));
  // });
}

function clickInfo(obj) {
  // obj = JSON.stringify(obj);
  sessionStorage.setItem('borrowinfo', obj);
  location.href = '#borrowinfo';
}
/**${JSON.stringify(v).replace(
      /"/g,
      '&quot;'
    )} */

function initEcharts(arr) {
  // 基于准备好的dom，初始化echarts实例

  // 指定图表的配置项和数据
  var option = {
    // backgroundColor: '#2c343c',

    title: {
      text: '投资年利率',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#111'
      }
    },

    tooltip: {
      trigger: 'item',
      formatter: '年利率<br/>{b} : {c} ({d}%)'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: arr.sort(function(a, b) {
          return a.value - b.value;
        }),
        roseType: 'radius'
        // label: {
        //   color: 'rgba(255, 255, 255, 0.3)'
        // },
        // labelLine: {
        //   lineStyle: {
        //     color: 'rgba(255, 255, 255, 0.3)'
        //   },
        //   smooth: 0.2,
        //   length: 10,
        //   length2: 20
        // },
        // itemStyle: {
        //   color: '#c23531',
        //   shadowBlur: 200,
        //   shadowColor: 'rgba(0, 0, 0, 0.5)'
        // },

        // animationType: 'scale',
        // animationEasing: 'elasticOut',
        // animationDelay: function(idx) {
        //   return Math.random() * 200;
        // }
      }
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  echart.setOption(option);
}

function getEchartsInfo() {
  apiGet('/getEchartsInfo.php', function(res) {
    var data;
    if (res) {
      data = JSON.parse(res);
      data.forEach(function(v, i) {
        v['value'] = v['cnt'];
        v['name'] = '年利率：' + v['interest'] + '%';
        delete v['cnt'];
        delete v['interest'];
      });
    } else {
      // alert('利率图形表暂无数据');
      data = [];
    }
    echart.hideLoading();
    initEcharts(data);
  });
}
