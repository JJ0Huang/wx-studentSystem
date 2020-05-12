const FundCharts = require('./FundCharts.min.js');
const RadarChart = FundCharts.radar;
let chart = new RadarChart({
  id: 'chart',
  datas: [
    [5, 2, 3, 4, 3]
  ], // 或设置为data: [1, 2, 3, 4, 3.5, 3], 但v0.9.1起不推荐
  width: 140, // 设置宽度
  height: 140, // 设置高度
  gridNumber: 4,
  origin: {       // 中心
    x: 80,
    y: 85
  },
  // backgroundColor:'#ccc',
  // fillGrid: '#f00',   // 填充背景
  colors: ['#ff5f00'],
  hidePoints:'true',
  onAnimation: () => {
    let tits = ['A', 'B', 'C', 'D', 'E'];
    let ctx = chart.ctx;
    ctx.lineWidth = 1;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '10px Arial';
    ctx.fillStyle = '#fff';
    chart.drawer.sideArr.map((item, index) => {
      ctx.fillText(
        tits[index],
        chart.drawer.origin.x + item.x * chart.drawer.radius * 1.2,
        chart.drawer.origin.y - item.y * chart.drawer.radius * 1.2
      );
    });
  },
});

Page({
  onLoad(){
    chart.init();
  }
})