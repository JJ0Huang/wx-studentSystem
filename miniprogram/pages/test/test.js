const FundCharts = require('./FundCharts.min.js');
const RadarChart = FundCharts.radar;
let chart = new RadarChart({
  id: 'chart',
  datas: [
    [1, 2, 3, 4, 3.5, 3]
  ], // 或设置为data: [1, 2, 3, 4, 3.5, 3], 但v0.9.1起不推荐
  width: 180, // 设置宽度
  height: 180, // 设置高度
  backgroundColor:'#000',
  // fillGrid: '#f00',   // 填充背景
  colors: ['#009966'],
});

Page({
  onLoad() {
    chart.init();
  }
})