$(document).ready(function () {
    console.log('ready')
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCD94WyfO6AWS5XR8TYymAq587HnkdkYdM",
    authDomain: "train-time-9c602.firebaseapp.com",
    databaseURL: "https://train-time-9c602.firebaseio.com",
    projectId: "train-time-9c602",
    storageBucket: "train-time-9c602.appspot.com",
    messagingSenderId: "828583501224"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  function addTrain() {
    var name = $('#trainName').val().trim()
    var destination = $('#trainDestination').val().trim()
    var firstTrain = $('#initialTrain').val().trim()
    var frequency = $('#trainFrequency').val().trim()

    database.ref('/trainData').push({
        TrainName: name,
        TrainDestination: destination,
        InitalTrain: firstTrain,
        TrainFrequency: frequency
    });
    
  }

  database.ref('/trainData').on("child_added", function (data){
      var trainData = data.val()
      var train = $('<tr>')
      var name = $('<td>').text(trainData.TrainName)
      var dest = $('<td>').text(trainData.TrainDestination)
      var initial = $('<td>').text(trainData.InitalTrain)
      var freq = $('<td>').text(trainData.TrainFrequency)

      train.append(name)
      train.append(dest)
      train.append(initial)
      train.append(freq)

      $('#trains').append(train)
  })

 $('#submitButton').click(addTrain) 
})