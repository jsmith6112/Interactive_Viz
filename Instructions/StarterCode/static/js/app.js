//console.log("Hi, Welcome to my world. You just tested this post!!!!!");

//Read samples.json
// d3.json("static/samples.json").then(function(data){
//   console.log(data)
// }); 




  //function getPlots() {

      // data.then(sampledata =>{
      //   var wfreq;
      //   var sampleValues;
      //   var labels;
      //   var OTU_top;
      //   var OTU_id;
      //   var OTU_ids;
      //   var sampleValuesAll;
      //   var labelsAll;
    
//      getPlots()

// function updatePltly() {
//   var dropdownMenu = d3.select("#selDataset").node();
//   var dataset = dropdownMenu.value;
// }

// function optionChanged(x) {
//   var Drpdwn = data.

// }


function dashplotdata(){
     d3.json("static/samples.json").then(function(data){
      //console.log(data);
      var otu_id = data[0].samples.map(d => d.otu_ids);
      var sample_value =  data[0].samples.map(d => d.sample_values);
      var label = data[0].samples.map(d => d.otu_labels);

      var svslice =sample_value[0].slice(0,10)
      var oslice = otu_id[0].slice(0, 10)
      var labelslice = label[0].slice(0,10)

    
      var id = data[0].samples.map(d => d.id);
      var met = data[0].metadata;

      var oslicestr = oslice.map(d =>`OTU_ ${d}`)
    
      console.log(id);
      console.log(oslice);
      console.log(labelslice);
      console.log(svslice);
      console.log(met);

     var hbartrace = [{
        type: 'bar',
        x: svslice,
        y: oslicestr,
        orientation:'h',
        text: labelslice
      }];
      console.log(hbartrace)

      var layout = {
        title:'Bar Test'
      };


      Plotly.newPlot('bar',hbartrace,layout)
    })
};
dashplotdata();

   