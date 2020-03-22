$(function() {
  var excel = $(".main");
  var myChart = echarts.init(document.getElementById('echart'));
  var xData = [],
      yData = [],
      data = [6,9,8,8,7];

  for(var i=0,p=2000;p<=2020;p+=5,i++){
    xData.push(p);
    yData.push(data[i]);
  }

  var option = {
    title: {
      text: 'JavaScript语言排名变化'
    },
    tooltip:{
      show:true,
      trigger:'axis',
      formatter:function(params){
        return '排名'+'<br/>'+params[0].name +'：'+params[0].data;        
      }
    },
    xAxis: {
      data:xData
    },
    yAxis: {},
    series: [{
      name: '排名',
      type: 'line',
      data: yData
    }],
  }

  myChart.setOption(option);

  return new Handsontable(excel.get(0),{
    data: [["Java", "1", "降", "-0.01%"], ["C", "2", "升", "+2.44%"], ["Python", "3", "升", "+1.41%"], ["C++", "4", "降", "-2.58%"], ["C#", "5", "升", "+2.07%"], ["Visual Basic .NET", "6", "降", "-1.17%"], ["JavaScript", "7", "降", "-0.85%"]],
    contextMenu: true,//当值为true时，启用右键菜单，为false时禁用
    manualRowResize: true,
    manualColumnResize: true,
    rowHeaders: false,// 隐藏第一列
    colWidths:'180px',
    rowHeights:35,
    className:'htMiddle htCenter',//垂直居中
    colHeaders: ["语言名称", "排名", "升或降", "变化幅度"]
  });
            
    
});
